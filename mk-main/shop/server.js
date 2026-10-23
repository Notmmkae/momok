// MK SHOP server: public website + order/payment API.
// The admin is a SEPARATE site (../admin). It reads/controls orders through /internal/* using INTERNAL_KEY.
const http=require("http"),fs=require("fs"),path=require("path"),crypto=require("crypto");
const PORT=process.env.PORT||3000,DIR=path.join(__dirname,"data"),DATA=path.join(DIR,"orders.json"),BANKF=path.join(DIR,"banks.json");
let KEY=process.env.INTERNAL_KEY;
if(!KEY){KEY=crypto.randomBytes(24).toString("hex");console.log("INTERNAL_KEY not set. Give this same key to the admin server:",KEY)}
const hits=new Map();
const limited=(k,max,ms)=>{const n=Date.now(),a=(hits.get(k)||[]).filter(x=>n-x<ms);a.push(n);hits.set(k,a);return a.length>max};
fs.mkdirSync(DIR,{recursive:true});
if(!fs.existsSync(BANKF))fs.writeFileSync(BANKF,JSON.stringify([["khan","Хаан банк"],["golomt","Голомт банк"],["tdb","Худалдаа хөгжлийн банк (TDB)"],["xac","Хас банк"],["state","Төрийн банк"],["capitron","Капитрон банк"],["bogd","Богд банк"],["mbank","М банк"]].map(([id,name])=>({id,name,account:"0000 0000 00",holder:"YOUR COMPANY NAME"})),null,1));
const banks=()=>{try{return JSON.parse(fs.readFileSync(BANKF,"utf8"))}catch(e){return[]}};
let orders=[];try{orders=JSON.parse(fs.readFileSync(DATA,"utf8"))}catch(e){}
const save=()=>{const t=DATA+".tmp";fs.writeFileSync(t,JSON.stringify(orders,null,1));fs.renameSync(t,DATA)};
const ST=["awaiting_payment","processing","shipped","out_for_delivery","delivered","cancelled"],PAID=["processing","shipped","out_for_delivery","delivered"];
const MIME={".html":"text/html; charset=utf-8",".css":"text/css; charset=utf-8",".js":"text/javascript; charset=utf-8",".svg":"image/svg+xml",".png":"image/png",".jpg":"image/jpeg",".jpeg":"image/jpeg",".webp":"image/webp",".ico":"image/x-icon",".webmanifest":"application/manifest+json"};
const send=(res,c,b,h={})=>{res.writeHead(c,{"Content-Type":"application/json","Cache-Control":"no-store","X-Content-Type-Options":"nosniff",...h});res.end(typeof b==="string"?b:JSON.stringify(b))};
const body=req=>new Promise((ok,no)=>{let d="";req.on("data",c=>{d+=c;if(d.length>1e5){no(new Error("big"));req.destroy()}});req.on("end",()=>{try{ok(JSON.parse(d||"{}"))}catch(e){no(e)}});req.on("error",no)});
const authed=req=>{const k=Buffer.from((req.headers.authorization||"").replace(/^Bearer /,"")),b=Buffer.from(KEY);return k.length===b.length&&crypto.timingSafeEqual(k,b)};
const str=(v,n)=>String(v==null?"":v).slice(0,n);
const pub=({token,...o})=>o;
function clean(o){
  const items=(Array.isArray(o.items)?o.items:[]).slice(0,50).map(i=>({nm:str(i.nm,120),sh:str(i.sh,60),pr:Math.max(0,+i.pr||0),q:Math.min(99,Math.max(1,parseInt(i.q)||1))}));
  const email=str(o.email,120).toLowerCase(),pm=o.pay||{};
  if(!items.length||!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email))return null;
  let pay;
  if(pm.method==="bank"){const b=banks().find(x=>x.id===pm.bank);if(!b)return null;pay={method:"bank",bank:b.name}}
  else if(pm.method==="card")pay={method:"card",brand:str(pm.brand,20),last4:str(pm.last4,4).replace(/\D/g,"")};
  else return null;
  let id=str(o.id,20).replace(/[^A-Za-z0-9-]/g,"");
  if(!id||orders.some(x=>x.id===id))id="MK-"+crypto.randomInt(1e5,1e6);
  const bank=pay.method==="bank";
  return{id,t:Date.now(),email,name:str(o.name,80),phone:str(o.phone,40),addr:str(o.addr,300),items,dc:Math.max(0,+o.dc||0),total:Math.max(0,+o.total||0),pay,
    status:bank?"awaiting_payment":"processing",paid:!bank,trk:"MKT"+crypto.randomInt(1e8,1e9),token:crypto.randomBytes(12).toString("hex")};
}
http.createServer(async(req,res)=>{try{
  const p=new URL(req.url,"http://x").pathname,ip=req.socket.remoteAddress;
  if(p==="/api/payment-info"&&req.method==="GET")return send(res,200,{demo:true,banks:banks()});
  if(p==="/api/orders"&&req.method==="POST"){
    if(limited("o"+ip,10,6e4))return send(res,429,{error:"slow down"});
    const o=clean(await body(req));if(!o)return send(res,400,{error:"invalid order"});
    orders.push(o);save();return send(res,201,{id:o.id,token:o.token,status:o.status,paid:o.paid,trk:o.trk});
  }
  if(p==="/api/orders/status"&&req.method==="POST"){
    if(limited("s"+ip,30,6e4))return send(res,429,{error:"slow down"});
    const L=(await body(req)).orders;if(!Array.isArray(L))return send(res,400,{error:"invalid"});
    return send(res,200,L.slice(0,50).map(x=>orders.find(o=>o.id===x.id&&typeof x.token==="string"&&o.token===x.token)).filter(Boolean).map(o=>({id:o.id,status:o.status,paid:o.paid})));
  }
  if(p.startsWith("/internal/")){            // only the admin server (with the key) can use these
    if(!authed(req))return send(res,401,{error:"auth"});
    if(p==="/internal/orders"&&req.method==="GET")return send(res,200,orders.slice().reverse().map(pub));
    const m=p.match(/^\/internal\/orders\/([\w-]+)$/);
    if(m&&req.method==="PATCH"){
      const o=orders.find(x=>x.id===m[1]);if(!o)return send(res,404,{error:"not found"});
      const b=await body(req);
      if(b.status!==undefined){if(!ST.includes(b.status))return send(res,400,{error:"bad status"});o.status=b.status;if(PAID.includes(b.status))o.paid=true}
      if(b.paid===true){o.paid=true;if(o.status==="awaiting_payment")o.status="processing"}
      save();return send(res,200,pub(o));
    }
    return send(res,404,{error:"not found"});
  }
  if(p.startsWith("/api/"))return send(res,404,{error:"not found"});
  const dir=path.join(__dirname,"public");let rel=p;if(rel.endsWith("/"))rel+="index.html";
  const f=path.normalize(path.join(dir,rel));
  if(!f.startsWith(dir+path.sep))return send(res,403,{error:"forbidden"});
  fs.readFile(f,(e,d)=>{if(e)return send(res,404,"Not found",{"Content-Type":"text/plain"});res.writeHead(200,{"Content-Type":MIME[path.extname(f)]||"application/octet-stream","X-Content-Type-Options":"nosniff"});res.end(d)});
}catch(e){send(res,400,{error:"bad request"})}}).listen(PORT,()=>console.log(`MK SHOP running: http://localhost:${PORT}`));

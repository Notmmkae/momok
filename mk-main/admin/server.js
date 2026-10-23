// MK ADMIN server: a separate private site. Own password login; talks to the shop's /internal API with INTERNAL_KEY.
const http=require("http"),fs=require("fs"),path=require("path"),crypto=require("crypto");
const PORT=process.env.ADMIN_PORT||4000,SHOP=(process.env.SHOP_URL||"http://localhost:3000").replace(/\/$/,""),KEY=process.env.INTERNAL_KEY;
if(!KEY){console.error("Set INTERNAL_KEY to the same value the shop server uses.");process.exit(1)}
let PW=process.env.ADMIN_PASSWORD;
if(!PW){PW=crypto.randomBytes(9).toString("base64url");console.log("ADMIN_PASSWORD not set. Temporary admin password:",PW)}
const SALT=crypto.randomBytes(16),H=p=>crypto.scryptSync(p,SALT,32),PWH=H(PW),sessions=new Map(),fails=new Map();
const MIME={".html":"text/html; charset=utf-8",".css":"text/css; charset=utf-8",".js":"text/javascript; charset=utf-8"};
const send=(res,c,b,h={})=>{res.writeHead(c,{"Content-Type":"application/json","Cache-Control":"no-store","X-Content-Type-Options":"nosniff",...h});res.end(typeof b==="string"?b:JSON.stringify(b))};
const body=req=>new Promise((ok,no)=>{let d="";req.on("data",c=>{d+=c;if(d.length>1e5){no(new Error("big"));req.destroy()}});req.on("end",()=>{try{ok(JSON.parse(d||"{}"))}catch(e){no(e)}});req.on("error",no)});
const cookie=req=>Object.fromEntries((req.headers.cookie||"").split(";").map(c=>c.trim().split("=")).filter(a=>a[0]));
const authed=req=>{const t=cookie(req).mk_admin,s=t&&sessions.get(t);if(s&&s>Date.now())return true;if(t)sessions.delete(t);return false};
async function shop(method,p,b){try{const r=await fetch(SHOP+p,{method,headers:{Authorization:"Bearer "+KEY,"Content-Type":"application/json"},body:b?JSON.stringify(b):undefined});return[r.status,await r.text()]}catch(e){return[502,JSON.stringify({error:"Shop server unreachable"})]}}
http.createServer(async(req,res)=>{try{
  const p=new URL(req.url,"http://x").pathname,ip=req.socket.remoteAddress;
  if(p==="/api/admin/login"&&req.method==="POST"){
    const n=Date.now(),f=(fails.get(ip)||[]).filter(x=>n-x<9e5);
    if(f.length>=10)return send(res,429,{error:"Too many wrong attempts. Try again in 15 minutes.",left:0});
    const{password}=await body(req);
    if(typeof password!=="string"||!crypto.timingSafeEqual(H(password),PWH)){f.push(n);fails.set(ip,f);return send(res,401,{error:"Wrong password",left:10-f.length})}
    fails.delete(ip);const t=crypto.randomBytes(32).toString("hex");sessions.set(t,n+288e5);
    const sec=req.headers["x-forwarded-proto"]==="https"?"; Secure":"";
    return send(res,200,{ok:1},{"Set-Cookie":`mk_admin=${t}; HttpOnly; SameSite=Strict; Path=/; Max-Age=28800${sec}`});
  }
  if(p==="/api/admin/logout"&&req.method==="POST"){sessions.delete(cookie(req).mk_admin);return send(res,200,{ok:1},{"Set-Cookie":"mk_admin=; HttpOnly; SameSite=Strict; Path=/; Max-Age=0"})}
  if(p==="/api/admin/orders"&&req.method==="GET"){if(!authed(req))return send(res,401,{error:"auth"});const[c,t]=await shop("GET","/internal/orders");return send(res,c,t)}
  const m=p.match(/^\/api\/admin\/orders\/([\w-]+)$/);
  if(m&&req.method==="PATCH"){if(!authed(req))return send(res,401,{error:"auth"});const[c,t]=await shop("PATCH","/internal/orders/"+m[1],await body(req));return send(res,c,t)}
  if(p.startsWith("/api/"))return send(res,404,{error:"not found"});
  const dir=path.join(__dirname,"public");let rel=p;if(rel.endsWith("/"))rel+="index.html";
  const f=path.normalize(path.join(dir,rel));if(!f.startsWith(dir+path.sep))return send(res,403,{error:"forbidden"});
  fs.readFile(f,(e,d)=>{if(e)return send(res,404,"Not found",{"Content-Type":"text/plain"});res.writeHead(200,{"Content-Type":MIME[path.extname(f)]||"application/octet-stream","X-Content-Type-Options":"nosniff"});res.end(d)});
}catch(e){send(res,400,{error:"bad request"})}}).listen(PORT,()=>console.log(`MK ADMIN running: http://localhost:${PORT}  (shop: ${SHOP})`));

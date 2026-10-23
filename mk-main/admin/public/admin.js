const $=i=>document.getElementById(i);let O=[],tm,bad=false;const OP=new Set();
const LB={awaiting_payment:"Awaiting payment",processing:"Processing",shipped:"Shipped",out_for_delivery:"Out for delivery",delivered:"Delivered",cancelled:"Cancelled"};
$("sf").innerHTML+=Object.entries(LB).map(([k,v])=>`<option value="${k}">${v}</option>`).join("");
const esc=t=>String(t).replace(/[&<>"']/g,c=>({"&":"&amp;","<":"&lt;",">":"&gt;",'"':"&quot;","'":"&#39;"}[c]));
const mny=v=>"$"+(Number.isInteger(v)?v:v.toFixed(2));
const dt=t=>new Date(t).toLocaleString(undefined,{dateStyle:"medium",timeStyle:"short"});
const pay=(o,h)=>{const x=typeof o.pay==="string"?o.pay:o.pay.method==="bank"?"Bank transfer · "+o.pay.bank:`Card ${o.pay.brand||""} •••• ${o.pay.last4||""}`;return h?esc(x):x};
function show(on){$("lg").hidden=on;$("db").hidden=!on;clearInterval(tm);if(on)tm=setInterval(load,30000)}
async function load(){
  try{const r=await fetch("/api/admin/orders",{credentials:"same-origin"});
    if(r.status===401){show(false);return}
    if(r.status===502){bad=true;show(true);$("st").innerHTML="";$("tb").innerHTML='<p class="empty">The shop server can\'t be reached. Check that it is running, then press Refresh.</p>';return}
    const n=await r.json();show(true);
    if(bad||JSON.stringify(n)!==JSON.stringify(O)||!$("tb").innerHTML){bad=false;O=n;draw()}
  }catch(e){}
}
function draw(){
  const q=$("q").value.trim().toLowerCase(),sf=$("sf").value,
    L=O.filter(o=>(!sf||o.status===sf)&&(!q||[o.id,o.name,o.email,o.phone,o.addr,o.trk,pay(o),...o.items.map(i=>i.nm)].join(" ").toLowerCase().includes(q))),
    rev=O.filter(o=>o.paid).reduce((a,o)=>a+o.total,0),aw=O.filter(o=>o.status==="awaiting_payment").length;
  $("st").innerHTML=[["Orders",O.length],["Paid revenue",mny(+rev.toFixed(2))],["Awaiting payment",aw],["Customers",new Set(O.map(o=>o.email)).size]].map(([a,b])=>`<div><b>${b}</b><small>${a}</small></div>`).join("");
  $("tb").innerHTML=L.length?L.map(o=>`<details class="o" data-id="${esc(o.id)}"${OP.has(o.id)?" open":""}><summary><b>#${esc(o.id)}</b><span>${dt(o.t)}</span><span>${esc(o.name||o.email)}</span><span class="bdg b-${o.status}">${LB[o.status]||o.status}</span><b>${mny(o.total)}</b></summary><div class="od"><p><b>Placed:</b> ${dt(o.t)}</p><p><b>Customer:</b> ${esc(o.name)} · ${esc(o.email)}${o.phone?" · "+esc(o.phone):""}</p><p><b>Address:</b> ${esc(o.addr)||"—"}</p><p><b>Payment:</b> ${pay(o,1)} · ${o.paid?"✓ Paid":"✗ Not paid yet"} · <b>Tracking:</b> ${esc(o.trk)}</p>${o.items.map(i=>`<div class="it"><span>${i.q}× ${esc(i.nm)}${i.sh?" ("+esc(i.sh)+")":""}</span><span>${mny(i.pr*i.q)}</span></div>`).join("")}${o.dc?`<p>Promo discount: −${mny(o.dc)}</p>`:""}<div class="act"><select data-id="${esc(o.id)}" aria-label="Order status">${Object.entries(LB).map(([k,v])=>`<option value="${k}"${k===o.status?" selected":""}>${v}</option>`).join("")}</select>${o.paid?"":`<button class="btn" data-paid="${esc(o.id)}">Mark as paid</button>`}</div></div></details>`).join(""):`<p class="empty">${O.length?"No matching orders.":"No orders yet."}</p>`;
}
async function upd(id,b){try{const r=await fetch("/api/admin/orders/"+encodeURIComponent(id),{method:"PATCH",headers:{"Content-Type":"application/json"},credentials:"same-origin",body:JSON.stringify(b)});if(r.status===401)return show(false)}catch(e){}load()}
$("tb").addEventListener("toggle",e=>{const d=e.target.dataset&&e.target.dataset.id;if(d)e.target.open?OP.add(d):OP.delete(d)},true);
$("tb").onchange=e=>{if(e.target.dataset.id)upd(e.target.dataset.id,{status:e.target.value})};
$("tb").onclick=e=>{const b=e.target.closest("[data-paid]");if(b)upd(b.dataset.paid,{paid:true})};
function csv(){
  const rows=[["Order","Date","Name","Email","Phone","Address","Items","Discount","Total","Payment","Paid","Status","Tracking"]];
  O.forEach(o=>rows.push([o.id,new Date(o.t).toISOString(),o.name,o.email,o.phone,o.addr,o.items.map(i=>i.q+"x "+i.nm+(i.sh?" ("+i.sh+")":"")).join("; "),o.dc,o.total,pay(o),o.paid?"yes":"no",LB[o.status]||o.status,o.trk]));
  const t=rows.map(r=>r.map(c=>{let v=String(c==null?"":c);if(/^[=+\-@\t\r]/.test(v))v="'"+v;return'"'+v.replace(/"/g,'""')+'"'}).join(",")).join("\n");
  const a=document.createElement("a");a.href=URL.createObjectURL(new Blob(["\ufeff"+t],{type:"text/csv"}));a.download="mk-orders.csv";a.click();
}
const msg=(t,c)=>{const e=$("er");e.textContent=t;e.className=c||"";void e.offsetWidth;if(c==="bad")e.classList.add("bad")};
$("sp").onclick=()=>{const p=$("pw"),s=p.type==="password";p.type=s?"text":"password";$("sp").textContent=s?"Hide":"Show";$("sp").setAttribute("aria-pressed",s)};
$("pw").addEventListener("keyup",e=>{$("cl").hidden=!(e.getModifierState&&e.getModifierState("CapsLock"))});
$("lf").onsubmit=async e=>{e.preventDefault();msg("Checking…");$("lb").disabled=true;
  try{const r=await fetch("/api/admin/login",{method:"POST",headers:{"Content-Type":"application/json"},credentials:"same-origin",body:JSON.stringify({password:$("pw").value})}),j=await r.json();
    if(!r.ok)msg("✗ "+(j.error||"Login failed")+(j.left>0?` (${j.left} attempts left)`:""),"bad");
    else{msg("✓ Password correct. Signing in…","ok");$("pw").value="";await load();msg("")}
  }catch(x){msg("Could not reach the server.","bad")}
  $("lb").disabled=false};
$("lo").onclick=async()=>{await fetch("/api/admin/logout",{method:"POST",credentials:"same-origin"});O=[];$("tb").innerHTML="";show(false)};
$("rf").onclick=load;$("ex").onclick=csv;$("q").oninput=draw;$("sf").onchange=draw;
load();

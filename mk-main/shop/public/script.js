const CN={All:"Бүгд",Lips:"Уруул",Eyes:"Нүд",Face:"Нүүр",Skincare:"Арьс арчилгаа",Body:"Бие",Fragrance:"Үнэртэн",Nails:"Хумс",Tools:"Багаж",Saved:"Хадгалсан"},BN={Bestseller:"Эрэлттэй",New:"Шинэ",Signature:"Онцлох",Limited:"Хязгаарлагдмал"};
const HAS_LOCAL_API = (()=>{const h=window.location.hostname;return h==="localhost"||h==="127.0.0.1"||h==="[::1]";})();
const sh='<ellipse cx="50" cy="90" rx="26" ry="4" fill="#3b2a5422"/>';
const A={
lip:sh+'<rect x="38" y="20" width="24" height="16" rx="4" fill="#5a4283"/><rect x="36" y="34" width="28" height="52" rx="6" fill="#fff"/><rect x="36" y="50" width="28" height="22" fill="#c48aa8"/><path d="M42 20 q8-14 16 0z" fill="#a8567f"/>',
pal:sh+'<rect x="12" y="24" width="76" height="58" rx="10" fill="#9a84c2"/><rect x="17" y="29" width="66" height="48" rx="7" fill="#f3ebff"/><g><circle cx="30" cy="42" r="8" fill="#c8bade"/><circle cx="50" cy="42" r="8" fill="#d9b3cc"/><circle cx="70" cy="42" r="8" fill="#7a62aa"/><circle cx="30" cy="63" r="8" fill="#e8d5ff"/><circle cx="50" cy="63" r="8" fill="#c48aa8"/><circle cx="70" cy="63" r="8" fill="#4a3570"/></g>',
blush:sh+'<circle cx="50" cy="50" r="38" fill="#9a84c2"/><circle cx="50" cy="50" r="31" fill="#fff"/><circle cx="50" cy="50" r="26" fill="#d9a9b8"/><circle cx="42" cy="42" r="7" fill="#fff" opacity=".45"/>',
cleanser:sh+'<rect x="44" y="8" width="24" height="7" rx="3" fill="#5a4283"/><rect x="47" y="14" width="6" height="14" fill="#9a84c2"/><rect x="30" y="26" width="40" height="62" rx="12" fill="#fff"/><rect x="30" y="46" width="40" height="26" fill="#d5c9ea"/><circle cx="50" cy="59" r="6" fill="#fff" opacity=".8"/>',
serum:sh+'<rect x="43" y="6" width="14" height="14" rx="3" fill="#5a4283"/><ellipse cx="50" cy="26" rx="10" ry="8" fill="#ffd9ec"/><rect x="34" y="32" width="32" height="56" rx="10" fill="#e8d9b8"/><rect x="34" y="52" width="32" height="20" fill="#fff" opacity=".6"/><circle cx="42" cy="44" r="3" fill="#fff" opacity=".8"/>',
spf:sh+'<path d="M32 84 h36 l-3 -60 h-30z" fill="#fff"/><path d="M33 60 h34 l1 24 h-36z" fill="#e0c4d4"/><rect x="34" y="10" width="32" height="16" rx="4" fill="#5a4283"/><circle cx="50" cy="44" r="8" fill="#c9a96e"/>',
brush:sh+'<g transform="rotate(-25 50 55)"><rect x="46" y="44" width="8" height="46" rx="4" fill="#9a84c2"/><rect x="44" y="38" width="12" height="10" fill="#d9d9e8"/><ellipse cx="50" cy="26" rx="14" ry="18" fill="#d9b3cc"/></g><g transform="rotate(18 50 55)"><rect x="46" y="48" width="6" height="40" rx="3" fill="#5a4283"/><rect x="44" y="42" width="10" height="9" fill="#d9d9e8"/><path d="M44 42 q5-30 10 0z" fill="#c8bade"/></g>',
roller:sh+'<rect x="46" y="44" width="8" height="44" rx="4" fill="#f6e9c6"/><path d="M50 44 V34 M28 34 h44" stroke="#f6e9c6" stroke-width="5" stroke-linecap="round" fill="none"/><rect x="22" y="14" width="18" height="28" rx="9" fill="#a9cfc0"/><rect x="60" y="14" width="18" height="28" rx="9" fill="#a9cfc0"/><rect x="26" y="18" width="5" height="12" rx="2.5" fill="#fff" opacity=".5"/>'};
Object.assign(A,{
gloss:sh+'<rect x="40" y="6" width="20" height="26" rx="5" fill="#5a4283"/><rect x="34" y="30" width="32" height="58" rx="10" fill="#e6c9db"/><rect x="38" y="42" width="8" height="36" rx="4" fill="#fff" opacity=".6"/><circle cx="62" cy="70" r="4" fill="#c48aa8"/>',
mascara:sh+'<rect x="41" y="6" width="18" height="34" rx="6" fill="#5a4283"/><rect x="36" y="38" width="28" height="50" rx="8" fill="#fff"/><rect x="36" y="56" width="28" height="12" fill="#c48aa8"/>',
liner:sh+'<g transform="rotate(35 50 50)"><rect x="44" y="10" width="12" height="60" rx="6" fill="#9a84c2"/><rect x="44" y="24" width="12" height="8" fill="#fff"/><path d="M44 68 h12 l-6 16z" fill="#3b2a54"/></g>',
found:sh+'<rect x="44" y="6" width="12" height="10" fill="#5a4283"/><rect x="47" y="15" width="6" height="12" fill="#9a84c2"/><rect x="30" y="26" width="40" height="62" rx="10" fill="#e6cdb8"/><rect x="30" y="50" width="40" height="22" fill="#fff" opacity=".7"/>',
glow:sh+'<rect x="14" y="40" width="72" height="42" rx="10" fill="#9a84c2"/><ellipse cx="50" cy="52" rx="30" ry="12" fill="#efe0c4"/><path d="M50 8 l4 12 12 4 -12 4 -4 12 -4 -12 -12 -4 12 -4z" fill="#c9a96e"/><path d="M78 20 l2 6 6 2 -6 2 -2 6 -2 -6 -6 -2 6 -2z" fill="#c48aa8"/>',
polish:sh+'<rect x="40" y="6" width="20" height="30" rx="4" fill="#5a4283"/><rect x="26" y="34" width="48" height="54" rx="14" fill="#c9bade"/><rect x="32" y="42" width="8" height="30" rx="4" fill="#fff" opacity=".5"/>',
mask:sh+'<path d="M50 10 c-24 0-34 18-30 40 c4 22 16 36 30 36 c14 0 26-14 30-36 c4-22-6-40-30-40z" fill="#fff"/><ellipse cx="37" cy="42" rx="7" ry="4" fill="#e9dcff"/><ellipse cx="63" cy="42" rx="7" ry="4" fill="#e9dcff"/><rect x="42" y="66" width="16" height="6" rx="3" fill="#e9dcff"/>',
mist:sh+'<rect x="40" y="6" width="22" height="10" rx="3" fill="#5a4283"/><rect x="58" y="8" width="10" height="5" fill="#9a84c2"/><rect x="42" y="14" width="18" height="10" fill="#d9d9e8"/><rect x="32" y="24" width="36" height="64" rx="12" fill="#d6f0ff"/><rect x="38" y="44" width="24" height="22" rx="4" fill="#fff" opacity=".7"/>',
sponge:sh+'<path d="M50 10 c22 24 30 40 30 54 a30 26 0 0 1 -60 0 c0-14 8-30 30-54z" fill="#d9b3cc"/><ellipse cx="42" cy="56" rx="6" ry="10" fill="#fff" opacity=".4"/>',
curler:sh+'<path d="M20 60 q30-40 60 0" stroke="#9a84c2" stroke-width="7" fill="none" stroke-linecap="round"/><path d="M28 62 q22-24 44 0" stroke="#5a4283" stroke-width="5" fill="none" stroke-linecap="round"/><circle cx="24" cy="74" r="9" fill="none" stroke="#c48aa8" stroke-width="5"/><circle cx="76" cy="74" r="9" fill="none" stroke="#c48aa8" stroke-width="5"/>'});
Object.assign(A,{
lipstick:sh+'<rect x="34" y="52" width="32" height="36" rx="4" fill="#5a4283"/><rect x="34" y="46" width="32" height="8" fill="#c9a96e"/><rect x="38" y="30" width="24" height="18" fill="#c9a96e"/><path d="M40 30 v-12 q10-10 20 0 v12z" fill="#a8567f"/>',
jar:sh+'<rect x="22" y="34" width="56" height="18" rx="4" fill="#5a4283"/><rect x="24" y="50" width="52" height="38" rx="8" fill="#fff"/><rect x="24" y="62" width="52" height="14" fill="#d5c9ea"/><rect x="28" y="30" width="44" height="6" rx="2" fill="#c9a96e"/>',
mirror:sh+'<circle cx="50" cy="42" r="32" fill="#c9a96e"/><circle cx="50" cy="42" r="26" fill="#eaf0f8"/><path d="M34 30 q8-10 20-10" stroke="#fff" stroke-width="5" fill="none" stroke-linecap="round"/><rect x="44" y="72" width="12" height="16" rx="5" fill="#c9a96e"/>',
bag:sh+'<path d="M32 34 q0-22 18-22 q18 0 18 22" stroke="#5a4283" stroke-width="5" fill="none"/><rect x="16" y="32" width="68" height="54" rx="10" fill="#c8bade"/><rect x="16" y="32" width="68" height="16" rx="8" fill="#9a84c2"/><rect x="44" y="40" width="12" height="10" rx="2" fill="#c9a96e"/>'});
Object.assign(A,{
perfume:sh+'<rect x="40" y="8" width="20" height="14" rx="3" fill="#c9a96e"/><rect x="45" y="20" width="10" height="8" fill="#9a84c2"/><rect x="24" y="28" width="52" height="60" rx="8" fill="#e6dcf1" stroke="#c8bade" stroke-width="2"/><rect x="34" y="48" width="32" height="22" fill="#fff" opacity=".85"/><rect x="38" y="55" width="24" height="2" fill="#5a4283"/><rect x="42" y="61" width="16" height="2" fill="#5a4283"/>',
tube:sh+'<rect x="31" y="10" width="38" height="8" fill="#d5c9ea"/><path d="M31 18h38l-4 56h-30z" fill="#fff"/><rect x="36" y="38" width="28" height="18" fill="#d5c9ea"/><rect x="32" y="74" width="36" height="14" rx="3" fill="#c9a96e"/>'});
const P=[["Lips","Хилэн уруулын тинт","$24","lip"],
["Lips","Шилэн гялбаат уруулын блэск","$26","gloss"],
["Lips","Сатин уруулын будаг","$32","lipstick"],
["Lips","Пептидтэй уруулын эмчилгээ","$24","tube"],
["Lips","Өнгөт уруулын бальзам","$20","tube"],
["Lips","Тэжээлт уруулын тос","$26","gloss"],
["Lips","Чихрийн уруулын скраб","$18","jar"],
["Lips","Мат шингэн уруулын будаг","$28","lip"],
["Lips","Нарийвчилсан уруулын харандаа","$20","liner"],
["Lips","Шөнийн уруулын маск","$22","jar"],
["Eyes","Аметист нүдний сүүдрийн палитр","$48","pal"],
["Eyes","Эзэлхүүнтэй сормуусны будаг","$26","mascara"],
["Eyes","Бэхэн шингэн айлайнер","$24","liner"],
["Eyes","Хөмсөг хэлбэржүүлэх харандаа","$22","liner"],
["Eyes","Тунгалаг хөмсгийн гель","$20","mascara"],
["Eyes","Сэргээх нүдний тос","$54","jar"],
["Eyes","Кремэн нүдний сүүдрийн стик","$26","liner"],
["Eyes","Сормуус ургуулах серум","$58","serum"],
["Eyes","Гэрэлтүүлэгч нүдний консилер","$28","gloss"],
["Eyes","Гидрогель нүдний наалт","$36","mask"],
["Face","Дэлбээн хацрын бальзам","$30","blush"],
["Face","Арьсны өнгөт тональ крем","$44","found"],
["Face","Зөөлөн фокустай консилер","$28","gloss"],
["Face","Сувдан хайлайтер","$34","glow"],
["Face","Наранд шарагдсан бронзер","$36","blush"],
["Face","Торгон тогтоогч нунтаг","$38","blush"],
["Face","Толбо бүдгэрүүлэх праймер","$36","spf"],
["Face","Контурын стик","$32","lip"],
["Face","Зөөлөн шингэн хацрын будаг","$30","gloss"],
["Face","Шингэн гэрэлтүүлэгч","$34","serum"],
["Face","Кремэн хацрын будгийн стик","$30","lip"],
["Face","Өнгөт чийгшүүлэгч","$38","found"],
["Face","Шахмал нунтаг","$36","blush"],
["Face","Будалт тогтоогч спрей","$30","mist"],
["Skincare","Үүлэн гель цэвэрлэгч","$34","cleanser"],
["Skincare","С витаминтай серум","$68","serum"],
["Skincare","Өдөр тутмын SPF 50 хамгаалалт","$42","spf"],
["Skincare","Тайвшруулах нүүрний маск","$12","mask"],
["Skincare","Сарнайн усан спрей","$28","mist"],
["Skincare","Хамгаалалтын чийгшүүлэгч","$58","jar"],
["Skincare","Тэжээлт нүүрний тос","$62","serum"],
["Skincare","Цэвэршүүлэх шаврын маск","$40","jar"],
["Skincare","Ретинолтой шөнийн тос","$72","jar"],
["Skincare","Чийгшүүлэх тоник","$36","mist"],
["Skincare","Гялбаа эссенс","$46","serum"],
["Skincare","Эрдэсийн SPF тинт","$40","spf"],
["Skincare","Мицелляр цэвэрлэгч ус","$26","cleanser"],
["Skincare","Зөөлөн ховхлогч маск","$44","jar"],
["Body","Хилэн биеийн лосьон","$32","cleanser"],
["Body","Тэжээлт биеийн тос","$44","serum"],
["Body","Онцлох гарын тос","$22","tube"],
["Body","Гөлгөржүүлэх биеийн скраб","$30","jar"],
["Fragrance","Парфюм ус N°1","$120","perfume"],
["Fragrance","Парфюм ус N°2","$120","perfume"],
["Fragrance","Хатуу үнэртэн","$48","jar"],
["Fragrance","Үс ба биеийн спрей","$42","mist"],
["Nails","Нил ягаан манан хумсны будаг","$18","polish"],
["Nails","Балетын ягаан хумсны будаг","$18","polish"],
["Nails","Гялгар тогтоогч бүрхүүл","$16","polish"],
["Nails","Хумсны арьсны тос","$20","serum"],
["Nails","Хумс бэхжүүлэгч","$18","polish"],
["Tools","Онцлох сойзны иж бүрдэл","$96","brush"],
["Tools","Нефрит нүүрний роллер","$38","roller"],
["Tools","Гуа ша чулуу","$34","roller"],
["Tools","Холих хөвөн","$14","sponge"],
["Tools","Тональ кремний сойз","$36","brush"],
["Tools","Нүдний сүүдрийн хос сойз","$42","brush"],
["Tools","Сормуус мушгигч","$24","curler"],
["Tools","Авсаархан толь","$30","mirror"],
["Tools","Аяллын гоо сайхны сав","$52","bag"]];
const WL=new Set();const BD={"Пептидтэй уруулын эмчилгээ":"Bestseller","Шилэн гялбаат уруулын блэск":"Bestseller","Аметист нүдний сүүдрийн палитр":"Bestseller","С витаминтай серум":"Bestseller","Зөөлөн шингэн хацрын будаг":"New","Гялбаа эссенс":"New","Хилэн биеийн лосьон":"New","Хатуу үнэртэн":"New","Парфюм ус N°1":"Signature","Онцлох сойзны иж бүрдэл":"Limited"};const G=["#e6dcf1,#f3e8ee","#d9cdea,#efe4ee","#ece4f5,#e2d6ee","#f1e6ee,#dccfec"];P.forEach((p,i)=>p[4]=G[i%G.length]);
/* ---- real product photography: stable direct URLs from Unsplash / Pexels CDN (free commercial licences,
no API key needed). Put your own photos in public/img/p (see IMAGES.txt) to override any product;
if a local file is missing, the curated remote photo is used, and the built-in drawing stays as the
final loading placeholder if the network is unavailable. ---- */
const iu=(id,x,y,z)=>"https://images.unsplash.com/photo-"+id+"?auto=format&fit=crop&crop=focalpoint&w=800&h=1000&q=75"+((x!=null)?"&fp-x="+x+"&fp-y="+(y||.5)+(z&&z>1?"&fp-z="+z:""):"");
const iq=(id,x,y,z)=>"https://images.pexels.com/photos/"+id+"/pexels-photo-"+id+".jpeg?auto=compress&cs=tinysrgb&fit=crop&crop=focalpoint&w=800&h=1000&fp-x="+(x!=null?x:.5)+"&fp-y="+(y||.5)+(z&&z>1?"&fp-z="+z:"");
const PU=[
/* Lips */ iu("1583209814683-c023dd293cc6",.72,.3,1.6),iu("1596462502278-27bfdc403348",.74,.22,1.9),iu("1586495777744-4413f21062fa",.6,.4,1.5),iu("1556228720-195a672e8a03",.5,.5),iu("1620916566398-39f1143ab7be",.5,.42,1.15),iu("1617897903246-719242758050",.5,.4,1.15),iu("1598440947619-2c35fc9aa908",.1,.18,1.8),iu("1586495777744-4413f21062fa",.3,.45,1.8),iu("1596704017254-9b121068fb31",.45,.42,1.35),iu("1598440947619-2c35fc9aa908",.8,.12,2.1),
/* Eyes */ iu("1522335789203-aabd1fc54bc9",.3,.45,1.35),iu("1608979048467-6194dabc6a3d",.32,.38,1.6),iu("1567721913486-6585f069b332",.38,.5,1.7),iu("1608979048467-6194dabc6a3d",.22,.78,1.8),iu("1571781926291-c477ebfd024b",.66,.48,1.65),iq(3762879,.45,.3,1.3),iu("1567721913486-6585f069b332",.84,.36,1.9),iu("1556229010-6c3f2c9ca5f8",.5,.45),iu("1608248597279-f99d160bfcbc",.38,.28,1.5),iu("1608248597279-f99d160bfcbc",.6,.72,1.4),
/* Face */ iu("1556229010-aa3f7ff66b24",.45,.55,1.25),iu("1585652757141-8837d676fac8",.5,.45,1.35),iu("1522335789203-aabd1fc54bc9",.55,.45,1.9),iu("1596704017254-9b121068fb31",.5,.58,2),iu("1596462502278-27bfdc403348",.25,.62,1.8),iu("1583209814683-c023dd293cc6",.55,.75,2),iu("1631729371254-42c2892f0e6e",.5,.5,1.15),iu("1522335789203-aabd1fc54bc9",.7,.62,2.1),iu("1556229010-aa3f7ff66b24",.62,.3,1.5),iu("1596704017254-9b121068fb31",.76,.3,1.6),
iu("1585652757141-8837d676fac8",.75,.55,1.7),iu("1571781926291-c477ebfd024b",.38,.42,1.35),iu("1522335789203-aabd1fc54bc9",.82,.35,1.9),iu("1608528577891-eb055944f2e7",.5,.45,1.1),
/* Skincare */ iu("1556228720-195a672e8a03",.48,.28,1.5),iu("1515377905703-c4788e51af15",.5,.5,1.1),iu("1556228578-8c89e6adf883",.48,.45,1.2),iu("1625772452859-1c03d5bf1137",.5,.42,1.2),iq(4041392,.55,.42,1.3),iu("1598440947619-2c35fc9aa908",.75,.52,2),iu("1617897903246-719242758050",.3,.72,1.7),iu("1567721913486-6585f069b332",.18,.62,1.7),iu("1611930022073-b7a4ba5fcccd",.62,.7,1.6),iu("1556229010-6c3f2c9ca5f8",.58,.62,1.5),iq(6724355,.45,.45,1.4),iu("1556228578-8c89e6adf883",.62,.28,1.9),iu("1631729371254-42c2892f0e6e",.28,.55,1.55),iq(3735618,.55,.75,1.5),
/* Body */ iu("1620916566398-39f1143ab7be",.45,.68,1.25),iu("1611930022073-b7a4ba5fcccd",.12,.55,2),iu("1556228720-195a672e8a03",.62,.75,1.5),iu("1585652757141-8837d676fac8",.28,.75,1.6),
/* Fragrance */ iu("1541643600914-78b084683601",.5,.45,1.1),iu("1523293182086-7651a899d37f",.5,.5,1.1),iu("1615634260167-c8cdede054de",.5,.5,1.15),iu("1585386959984-a4155224a1ad",.5,.5,1.05),
/* Nails */ iu("1607779097040-26e80aa78e66",.3,.38,1.6),iu("1607779097040-26e80aa78e66",.7,.45,1.6),iu("1631729371254-42c2892f0e6e",.75,.4,1.9),iq(3762879,.72,.55,1.5),iu("1515377905703-c4788e51af15",.3,.62,1.6),
/* Tools */ iu("1596462502278-27bfdc403348",.12,.3,1.55),iu("1596178060671-7a80dc8059ea",.5,.42,1.1),iu("1519824145371-296894a0daa9",.5,.5,1.15),iq(3018845,.45,.52,2.2),iq(3018845,.78,.55,2.5),iq(3018845,.5,.78,2.2),iu("1608979048467-6194dabc6a3d",.5,.8,1.9),iq(2113855,.35,.75,1.8),iq(3018845,.5,.5)];
/* locally cropped photos (cut from the free-licence source photos, see IMAGES.txt) are tried before the CDN fallback; key = zero-based product index */
const LOC={64:"img/p/p65.jpg",65:"img/p/p66.jpg",66:"img/p/p67.jpg",68:"img/p/p69.jpg"};
let n=0,cur="All";const g=document.getElementById("grid"),pl=document.getElementById("pills");
function f(c){cur=c;try{const u=new URL(location.href);c==="All"?u.searchParams.delete("cat"):u.searchParams.set("cat",c);history.replaceState(null,"",u)}catch(e){}pl.querySelectorAll("button").forEach(b=>b.classList.toggle("on",b.dataset.c===c));g.innerHTML="";
list(c).forEach(p=>{const d=document.createElement("div");d.className="prod";d.tabIndex=0;d.onkeydown=e=>{if(e.target===d&&(e.key==="Enter"||e.key===" ")){e.preventDefault();openP(p)}};
d.innerHTML=`<div class="img" style="background:linear-gradient(135deg,${p[4]})"><img class="ph" src="${pn(P.indexOf(p))}.png" alt="${p[1]}" loading="lazy" decoding="async" data-u="${PU[P.indexOf(p)]}" data-jp="${LOC[P.indexOf(p)]||""}" onload="this.parentNode.classList.add('hasph')" onerror="phErr(this)"><svg viewBox="0 0 100 100" width="150" height="150">${A[p[3]]}</svg><button class="hrt" aria-label="Хадгалах">${WL.has(p[1])?"♥":"♡"}</button>${BD[p[1]]?`<i class="bd">${BN[BD[p[1]]]}</i>`:""}</div><small>${CN[p[0]]}${V&&V[p[0]]&&V[p[0]][0][2]?" · "+V[p[0]].length+" өнгө":""}</small><h4>${p[1]}</h4><div class="row"><b>${p[2]}</b><button aria-label="Сагсанд нэмэх">+</button></div>`;
d.onclick=()=>openP(p);d.querySelector(".hrt").onclick=e=>{e.stopPropagation();WL.has(p[1])?WL.delete(p[1]):WL.add(p[1]);sv();cur==="Saved"?f(cur):e.currentTarget.textContent=WL.has(p[1])?"♥":"♡"};d.querySelector(".row button").onclick=e=>{e.stopPropagation();bag(p[1],p[2])};g.appendChild(d)})}
["All","Lips","Eyes","Face","Skincare","Body","Fragrance","Nails","Tools","Saved"].forEach(c=>{const b=document.createElement("button");b.textContent=CN[c];b.dataset.c=c;b.onclick=()=>f(c);pl.appendChild(b)});
function phErr(im){if(im.dataset.jp){im.classList.add("rph");im.src=im.dataset.jp;im.dataset.jp="";return}const u=im.dataset.u;if(u){im.dataset.u="";im.classList.add("rph");im.src=u}else im.remove()}
const qc=new URLSearchParams(location.search).get("cat");f("All");
const M=[{skin:"#f3d3bf",hair:"#6b4a36",bun:1},{skin:"#c78f68",hair:"#1f1416"},{skin:"#7d4e33",hair:"#140e12",bun:1}];
function face(m,o){o=o||{};const s=m.skin,h=m.hair,lip=o.lip||"#d98a86",c=o.cheek||"none",l=o.lid||"none";
return `<svg viewBox="0 0 200 250"><path d="M22 250q0-58 78-66q78 8 78 66z" fill="#b9a6d6"/>${m.bun?`<circle cx="100" cy="30" r="22" fill="${h}"/>`:""}<rect x="42" y="70" width="116" height="120" rx="50" fill="${h}"/><rect x="86" y="150" width="28" height="44" rx="10" fill="${s}"/><rect x="86" y="150" width="28" height="14" fill="#0002"/><ellipse cx="100" cy="108" rx="46" ry="56" fill="${s}"/><path d="M53 100q2-56 47-56q45 0 47 56q-22-34-47-34q-25 0-47 34z" fill="${h}"/><circle cx="70" cy="132" r="14" fill="${c}" opacity=".55"/><circle cx="130" cy="132" r="14" fill="${c}" opacity=".55"/><ellipse cx="80" cy="99" rx="11" ry="6" fill="${l}" opacity=".85"/><ellipse cx="120" cy="99" rx="11" ry="6" fill="${l}" opacity=".85"/><ellipse cx="80" cy="106" rx="9" ry="5" fill="#fff"/><ellipse cx="120" cy="106" rx="9" ry="5" fill="#fff"/><circle cx="80" cy="106" r="4" fill="#2a1a1a"/><circle cx="120" cy="106" r="4" fill="#2a1a1a"/><path d="M69 104q11-9 22 0M109 104q11-9 22 0" stroke="#1a1216" stroke-width="2.4" fill="none"/><path d="M68 90q12-8 24-2M108 88q12-6 24 2" stroke="#3a2a2a" stroke-width="3" fill="none" stroke-linecap="round"/><path d="M100 112q-6 16 0 20q6 0 4-3" stroke="#0004" stroke-width="2" fill="none"/><path d="M84 152q8-8 16-3q8-5 16 3q-16 6-32 0zM84 152q16 5 32 0q-4 16-16 16q-12 0-16-16z" fill="${lip}"/>${o.gloss?'<ellipse cx="100" cy="160" rx="8" ry="3" fill="#fff" opacity=".6"/>':""}</svg>`}
function hand(c){const f=[[52,60],[82,30],[112,45],[142,80]];return `<svg viewBox="0 0 200 250"><g fill="#f6d5c0"><rect x="30" y="120" width="26" height="70" rx="13" transform="rotate(-25 43 155)"/>${f.map(a=>`<rect x="${a[0]}" y="${a[1]}" width="26" height="130" rx="13"/>`).join("")}<rect x="48" y="150" width="120" height="100" rx="30"/></g><g fill="${c}">${f.map(a=>`<rect x="${a[0]+3}" y="${a[1]+4}" width="20" height="26" rx="9"/>`).join("")}</g></svg>`}
const LIP=[["01","Нүцгэн торго","#d9a89a"],["02","Тоостой сарнай","#c98a94"],["03","Ягаавтар музе","#a8709a"],["04","Бордо","#7a2f4a"],["05","Орхидей нуар","#8a5fb5"],["06","Чавгын хилэн","#5a2a4f"]];
var V={Lips:LIP,Eyes:[["01","Шампан","#e6d3b3"],["02","Сарнай алт","#d9a891"],["03","Хүрэн саарал","#9a8478"],["04","Аметист","#8a6bb8"],["05","Утаа","#4a4258"],["06","Хүрэл","#a5764f"]],Face:[["01","Дэлбээ","#e6b3bd"],["02","Тоорлог","#e8a898"],["03","Жимс","#b96482"],["04","Ягаавтар","#b58aa8"],["05","Терракота","#c9735f"],["06","Дарс","#8f4560"]],Nails:[["01","Нил ягаан манан","#c4b3e0"],["02","Балетын ягаан","#ecc9d6"],["03","Сүү","#f3eef8"],["04","Аметист","#6f52a3"],["05","Лаванда манан","#a996d4"],["06","Хар интоор","#4a1a35"]],Skincare:[["","30 мл"],["","50 мл"],["","100 мл"]],Tools:[["","Нил ягаан"],["","Ягаавтар"],["","Зааны яс"]]};
const D={Lips:"Нандин, эвтэйхэн өнгө, гоёмсог өнгөлгөө. Өөрийн өнгийг сонгоорой.",Eyes:"Баялаг пигменттэй, амархан холигддог, өдөржин тогтдог төрх.",Face:"Арьстай нэгдэн уусдаг өнгөлгөө. Ханалтыг өөрийн дураар нэмээрэй.",Nails:"Өндөр гялбаатай, хагардаггүй, салоны чанартай өнгөлгөө.",Skincare:"Арьсны эмчийн шалгасан зөөлөн найрлага, харагдахуйц гэрэлтсэн арьс.",Tools:"Нарийвчлалтай хийгдсэн, цэвэрлэхэд хялбар. Таны өдөр тутмын арчилгааг дээшлүүлнэ."};
D.Body="Торгомсог, арьсыг зөөлрүүлэх найрлага, намуухан гоёмсог үнэртэй.";D.Fragrance="Зөөлөн, удаан үлдэх мөр бүхий онцлог үнэр. Ирис, мускус, хув зэрэг нот.";V.Body=[["","100 мл"],["","250 мл"]];V.Fragrance=[["","30 мл"],["","50 мл"],["","100 мл"]];
let cp,si=0,mi=0,pk=null;
function $(i){return document.getElementById(i)}
function openP(p,i){cp=p;si=i||0;mi=0;pk=null;$("mc").textContent=CN[p[0]];$("mn").textContent=p[1];$("mp").textContent=p[2];$("md").textContent=D[p[0]];$("ov").classList.add("on");draw()}
let lf;function closeP(){$("ov").classList.remove("on");document.body.classList.remove("lock");if(lf&&lf.focus)lf.focus({preventScroll:true})}
function pick(i){si=i;draw()}function pm(i){mi=i;draw()}
function draw(){const c=cp[0],v=V[c],x=v[si],sh=!!x[2];
$("lw").textContent=["Skincare","Body","Fragrance"].includes(c)?"Хэмжээ":c==="Tools"?"Өнгө":"Өнгө";$("ml").textContent=sh?x[0]+" · "+x[1]:x[1];
$("mv").innerHTML=c==="Nails"?hand(x[2]):NM.includes(c)?`<svg viewBox="0 0 100 100">${A[cp[3]]}</svg>`:face(M[mi],{lip:c==="Lips"?x[2]:0,lid:c==="Eyes"?x[2]:0,cheek:c==="Face"?x[2]:0,gloss:cp[3]==="gloss"});
szv(c,v,x);phMV(c);$("sw").innerHTML=v.map((y,i)=>`<button class="${y[2]?"":"t "}${i===si?"on":""}" ${y[2]?`style="background:${y[2]}"`:""} onclick="pick(${i})">${y[2]?y[0]:y[1]}</button>`).join("");
$("tr").style.display=c==="Nails"||NM.includes(c)?"none":"block";
$("ms").innerHTML=M.map((m,i)=>`<button class="${i===mi?"on":""}" style="background:${m.skin}" onclick="pm(${i})" aria-label="Загвар ${i+1}"></button>`).join("")}
document.addEventListener("keydown",e=>{if(e.key==="Escape"){closeP();$("dr").classList.remove("on");$("ac").classList.remove("on")}});
$("hero-art").innerHTML=face(M[0],{lip:"#b0707f",gloss:1});
$("about-art").innerHTML=face(M[1],{lip:"#a8709a",lid:"#d9a891"});
$("adm").innerHTML=["#8a5fb5","#d9a89a","#7a2f4a"].map((l,i)=>`<div>${face(M[i],{lip:l,gloss:1})}</div>`).join("");
const NM=["Skincare","Body","Fragrance","Tools"];
let BI=[];
function bag(nm,pr,sh){sh=sh||"";const p=parseFloat(String(pr).replace(/[^0-9.]/g,"")),e=BI.find(b=>b.nm===nm&&b.sh===sh);e?e.q++:BI.push({nm,pr:p,sh,q:1});rb();toast("Сагсанд нэмэгдлээ")}
function sv(){try{localStorage.setItem("mk-bag",JSON.stringify(BI));localStorage.setItem("mk-wl",JSON.stringify([...WL]))}catch(e){}}
function ld(){try{BI=(JSON.parse(localStorage.getItem("mk-bag")||"[]")||[]).filter(b=>b&&b.nm&&b.pr>=0).map(b=>({...b,q:b.q||1}));(JSON.parse(localStorage.getItem("mk-wl")||"[]")||[]).forEach(x=>WL.add(x))}catch(e){BI=[]}}
let PC=0,tt,RV=[];try{RV=JSON.parse(localStorage.getItem("mk-rv")||"[]")||[]}catch(e){}
const mny=v=>"$"+(Number.isInteger(v)?v:v.toFixed(2));
function toast(m){const t=$("ts");t.textContent=m;t.classList.add("on");clearTimeout(tt);tt=setTimeout(()=>t.classList.remove("on"),1800)}
function applyPromo(){const v=$("pc").value.trim().toUpperCase();PC=v==="WELCOME10"?1:0;toast(PC?"10% хөнгөлөлт идэвхжлээ":"Буруу код");rb()}
function rvDraw(){const L=RV.map(n=>P.find(p=>p[1]===n)).filter(Boolean);$("rv").innerHTML=L.length?`<h6 class="rvh">Саяхан үзсэн</h6><div class="clg rvg">${L.map(x=>`<button class="clt" onclick="openP(P[${P.indexOf(x)}])"><svg viewBox="0 0 100 100">${A[x[3]]}</svg>${x[1]}</button>`).join("")}</div>`:""}
function rvAdd(p){RV=[p[1],...RV.filter(n=>n!==p[1])].slice(0,4);try{localStorage.setItem("mk-rv",JSON.stringify(RV))}catch(e){}rvDraw()}
function fdBack(){if(fs>0){fs--;fa.length=fs;fdShow()}}
function mn(){const n=document.querySelector("nav"),o=n.classList.toggle("open");document.querySelector(".mb").setAttribute("aria-expanded",o)}
function qy(i,d){BI[i].q+=d;if(BI[i].q<1)BI.splice(i,1);rb()}
function addM(){const x=V[cp[0]][si];bag(cp[1],cp[2],x[2]?x[0]+" · "+x[1]:x[1]);closeP()}
function rm(i){BI.splice(i,1);rb()}
function rb(){const t=BI.reduce((a,b)=>a+b.pr*b.q,0),n=BI.reduce((a,b)=>a+b.q,0);$("cart").textContent=`Сагс (${n})`;const dc=PC?+(t*.1).toFixed(2):0;$("st").textContent=mny(t-dc)+(dc?` (−${mny(dc)})`:"");
$("ci").innerHTML=n?BI.map((b,i)=>`<div class="ci"><div>${b.nm}<small>${b.sh}</small><span class="qt"><button onclick="qy(${i},-1)" aria-label="Тоо хасах">−</button>${b.q}<button onclick="qy(${i},1)" aria-label="Тоо нэмэх">+</button></span><button onclick="rm(${i})">Устгах</button></div><b>$${b.pr*b.q}</b></div>`).join(""):'<p class="fs">Таны сагс хоосон байна.</p>';
const r=75-t;$("fs").textContent=r>0?`$${r} нэмбэл үнэгүй хүргэлт`:"Үнэгүй хүргэлтийн эрх нээгдлээ";$("pg").style.width=Math.min(100,t/75*100)+"%";sv()}
$("cart").onclick=()=>$("dr").classList.add("on");$("dr").onclick=e=>{if(e.target.id==="dr")$("dr").classList.remove("on")};
const SETS=[["Уруулын зан үйл","Пептидтэй уруулын эмчилгээ, Шилэн гялбаат блэск ба Нарийвчилсан уруулын харандаа",70,62,["tube","gloss","liner"]],["Гэрэлтэх зан үйл","Гялбаа эссенс, С витаминтай серум ба Өдөр тутмын SPF 50 хамгаалалт",156,138,["serum","serum","spf"]],["Өдөр тутмын нүүр","Арьсны тинт, Зөөлөн шингэн хацрын будаг ба Сувдан хайлайтер",108,98,["found","gloss","glow"]]];
/* real photo per set: [local (downloaded, see IMAGES.txt), CDN fallback]; onerror falls back to the CDN photo, then to the icon band */
const SPH=[["img/sets/lip-ritual.jpg","https://images.unsplash.com/photo-1583209814683-c023dd293cc6?auto=format&fit=crop&crop=focalpoint&w=900&h=675&q=75"],["img/sets/glow-ritual.jpg","https://images.pexels.com/photos/3762879/pexels-photo-3762879.jpeg?auto=compress&cs=tinysrgb&fit=crop&crop=focalpoint&w=900&h=675&fp-x=.5&fp-y=.45"],["img/sets/everyday-face.jpg","https://images.pexels.com/photos/2113855/pexels-photo-2113855.jpeg?auto=compress&cs=tinysrgb&fit=crop&w=900&h=675"]];
function sphErr(im){if(im.dataset.u){im.src=im.dataset.u;im.dataset.u=""}else im.style.display="none"}
$("sets-g").innerHTML=SETS.map((x,i)=>`<div class="set"><div class="ic wrap-ph">${x[4].map(k=>`<svg viewBox="0 0 100 100">${A[k]}</svg>`).join("")}<img src="${SPH[i][0]}" alt="${x[0]}" loading="lazy" decoding="async" data-u="${SPH[i][1]}" onerror="sphErr(this)"></div><h4>${x[0]}</h4><p>${x[1]}</p><s>$${x[2]}</s><b>$${x[3]}</b><button class="btn" onclick="bag('${x[0]}',${x[3]},'Set')">Иж бүрдэл нэмэх · $${x[2]-x[3]} хэмнэх</button></div>`).join("");
ld();rb();rvDraw();
const SK=[["Маш цайвар","#f6dccb","#6b4a36"],["Цайвар","#ecc3a3","#4a3428"],["Дунд","#d09a72","#1f1416"],["Бараан","#a8714d","#1f1416"],["Гүн бараан","#6e4229","#140e12"]],UT=["Сэрүүн","Төвийг сахисан","Дулаан"],LK=["Байгалийн","Зөөлөн гялбаа","Тод"],BL=[[0,0,1],[0,1,1],[3,1,4],[2,4,4],[5,2,4]],LP=[[2,1,0],[4,2,1],[4,5,3]];
let fs=0,fa=[];
function fdArt(o){const t=SK[fa[0]==null?1:fa[0]];$("fd-art").innerHTML=face({skin:t[1],hair:t[2],bun:fa[0]%2===0},o||{})}
function fdPick(i){fa[fs]=i;fs++;fdShow()}
function fdReset(){fs=0;fa=[];fdShow()}
function fdOpen(n,i){openP(P.find(p=>p[1]===n),i)}
function fdShow(){const Q=["Арьсныхаа өнгөнд хамгийн ойр сонголтыг сонгоорой.","Таны арьсны дэд өнгө ямар вэ? Сэрүүн нь ягаавтар, дулаан нь алтлаг, төвийг сахисан нь холимог харагддаг.","Аль төрхийг илүүд үздэг вэ?"];
$("fr").innerHTML="";$("frs").style.display=fs>2?"block":"none";$("fb").style.display=fs>0?"inline-block":"none";
if(fs<3){$("fq").innerHTML=`<span class="fst">Алхам ${fs+1} / 3</span><br>${Q[fs]}`;
$("fo").innerHTML=(fs===0?SK.map((x,i)=>`<button class="sk" title="${x[0]}" aria-label="${x[0]}" style="background:${x[1]}" onclick="fdPick(${i})"></button>`):(fs===1?UT:LK).map((x,i)=>`<button onclick="fdPick(${i})">${x}</button>`)).join("");fdArt();return}
const[t,u,l]=fa;let li=LP[l][u];if(t>=3&&l===0&&li<2)li++;const bi=BL[t][u],lp=LIP[li],bl=V.Face[bi];
fdArt({lip:lp[2],cheek:bl[2],gloss:l===1});$("fo").innerHTML="";
$("fq").innerHTML=`<span class="fst">Таны тохирол</span><br>${SK[t][0]} арьс, ${UT[u].toLowerCase()} дэд өнгө, ${LK[l].toLowerCase()} төрх.`;
$("fr").innerHTML=`<div class="fres">${[["Сатин уруулын будаг",li,lp],["Шилэн гялбаат уруулын блэск",li,lp],["Зөөлөн шингэн хацрын будаг",bi,bl]].map(x=>`<div><h5>${x[0]}</h5><small>${x[2][0]} · ${x[2][1]}</small><button class="btn" onclick="fdOpen('${x[0]}',${x[1]})">Өнгийг үзэх</button></div>`).join("")}</div>`}
fdShow();
function list(c){const q=$("q").value.trim().toLowerCase(),o=$("so").value,pr=p=>parseFloat(p[2].slice(1));
let a=P.filter(p=>(c==="All"||(c==="Saved"?WL.has(p[1]):p[0]===c))&&p[1].toLowerCase().includes(q)).filter(p=>{const v=pr(p),k=$("pf").value;return(!k||(k==="1"?v<30:k==="2"?v>=30&&v<=60:v>60))&&(!$("bf").value||BD[p[1]]===$("bf").value)});
if(o==="a")a.sort((x,y)=>pr(x)-pr(y));if(o==="d")a.sort((x,y)=>pr(y)-pr(x));
$("cnt").textContent=a.length?a.length+" бүтээгдэхүүн":(c==="Saved"?"Бүтээгдэхүүний зүрхэн дээр дарж энд хадгалаарай":"Бүтээгдэхүүн олдсонгүй");return a}
const DT={Lips:"Давхарлан түрхэх боломжтой өнгө, эвтэйхэн гоёмсог өнгөлгөө.",Eyes:"Холигддог, удаан тогтдог, атигдаж бүдгэрдэггүй найрлага.",Face:"Хөнгөн, арьстай адил, уусан шингэж аажмаар ханддаг.",Skincare:"Өдөр бүр хэрэглэхэд зориулсан зөөлөн найрлага, гэрэлтсэн арьс.",Body:"Баялаг, хурдан шингэдэг бүтэц, зөөлөн намуухан үнэр.",Fragrance:"Давхраатай найрлага, зөөлөн удаан үлдэх мөр.",Nails:"Өндөр гялбаатай өнгө, гөлгөр, хагардаггүй өнгөлгөө.",Tools:"Жигд, гөлгөр түрхэхэд зориулан нарийн хийгдсэн."};
const HU={Lips:"Уруулын голоос эхлэн шууд түрхээрэй. Хүссэн үедээ дахин түрхээрэй.",Eyes:"Зовхиндоо түрхэж гадагш холиорой. Илүү тод болгохыг хүсвэл давхарлаарай.",Face:"Хурууны үзүүр эсвэл сойзоор хацар болон арьсанд товшиж сайн холиорой.",Skincare:"Цэвэр арьсанд өглөө, орой түрхээрэй. Өдөр нь SPF хамгаалалт хэрэглээрэй.",Body:"Цэвэр, хуурай арьсанд шингэтэл нь массаж хийгээрэй.",Fragrance:"Судасны цохилттой цэгүүд рүү ойроос шүршээрэй.",Nails:"Цэвэр хумсанд нимгэн хоёр давхар түрхээрэй. Дээр нь тогтоогч бүрхүүл түрхээрэй.",Tools:"Хөнгөн, шүүрдэх хөдөлгөөнөөр ашиглаарай. Хэрэглэсний дараа зөөлөн угаагаарай."};
const CL={Lips:"Face",Eyes:"Face",Face:"Lips",Skincare:"Body",Body:"Skincare",Fragrance:"Body",Nails:"Tools",Tools:"Eyes"};
const o0=openP;openP=function(p,i){if(!$("ov").classList.contains("on"))lf=document.activeElement;o0(p,i);rvAdd(p);document.body.classList.add("lock");$("ov").querySelector(".x").focus({preventScroll:true});$("dt").textContent=DT[p[0]];$("hu").textContent=HU[p[0]];
const c=P.filter(x=>x[0]===CL[p[0]]).slice(0,3);
$("cl").innerHTML=`<div class="lb">Төрхөө бүрдүүл</div><div class="clg">${c.map(x=>`<button class="clt" onclick="openP(P[${P.indexOf(x)}])"><svg viewBox="0 0 100 100">${A[x[3]]}</svg>${x[1]}</button>`).join("")}</div>`;$("ov").scrollTop=0};
if(qc&&[...pl.querySelectorAll("button")].some(b=>b.dataset.c===qc))cur=qc;
document.querySelector("nav ul").onclick=e=>{if(e.target.tagName==="A"&&document.querySelector("nav").classList.contains("open"))mn()};
{const j=document.createElement("script");j.type="application/ld+json";j.textContent=JSON.stringify({"@context":"https://schema.org","@type":"ItemList",itemListElement:P.map((p,i)=>({"@type":"ListItem",position:i+1,item:{"@type":"Product",name:p[1],category:p[0],offers:{"@type":"Offer",price:p[2].slice(1),priceCurrency:"USD"}}}))});document.head.appendChild(j)}
if("IntersectionObserver"in window&&!matchMedia("(prefers-reduced-motion:reduce)").matches){document.documentElement.classList.add("rj");const io=new IntersectionObserver(es=>es.forEach(e=>{if(e.isIntersecting){e.target.classList.add("in");io.unobserve(e.target)}}),{threshold:0,rootMargin:"0px 0px -6% 0px"});document.querySelectorAll("section,.ad,.news").forEach(el=>{el.classList.add("rv");io.observe(el)})}
let am="in";
function szv(c,v,x){$("mv").removeAttribute("data-k");const svg=NM.includes(c)&&$("mv").querySelector("svg"),n=parseFloat(x[1]);if(!svg||isNaN(n))return;const a=v.map(y=>parseFloat(y[1])),lo=Math.min(...a),hi=Math.max(...a),k=.6+.4*((n-lo)/(hi-lo||1));
$("mv").dataset.k=k;svg.style.transformOrigin="50% 100%";svg.style.transition="transform .45s cubic-bezier(.3,1.4,.5,1)";svg.style.transform=`scale(${pk==null?k:pk})`;
if(pk!=null&&pk!==k)requestAnimationFrame(()=>requestAnimationFrame(()=>{svg.style.transform=`scale(${k})`}));pk=k}
function gate(on){document.querySelectorAll(".wrap,#cart").forEach(e=>on?e.setAttribute("inert",""):e.removeAttribute("inert"))}
function atab(m){am=m;$("t-in").classList.toggle("on",m==="in");$("t-up").classList.toggle("on",m==="up");$("an").style.display=m==="up"?"block":"none";$("ab").textContent=m==="up"?"Бүртгэл үүсгэх":"Нэвтрэх";$("ap").autocomplete=m==="up"?"new-password":"current-password";$("aer").textContent="";$("aut").textContent=m==="up"?"Бүртгэлээ үүсгэнэ үү":"Тавтай морилно уу"}
async function hp(pw,salt){const t=salt+pw;try{const b=await crypto.subtle.digest("SHA-256",new TextEncoder().encode(t));return[...new Uint8Array(b)].map(x=>x.toString(16).padStart(2,"0")).join("")}catch(e){let h=5381;for(const ch of t)h=(h*33^ch.charCodeAt(0))>>>0;return"f"+h}}
function enter(nm,isNew,quiet){$("au").classList.remove("on");document.body.classList.remove("lock");gate(0);$("af").reset();navAv();if(!quiet)toast(isNew?`Тавтай морил, ${nm.split(" ")[0]}. WELCOME10 кодоор 10% хөнгөлөлт аваарай`:`Тавтай морилно уу, ${nm.split(" ")[0]}`)}
async function asub(ev){ev.preventDefault();const em=$("ae").value.trim().toLowerCase(),pw=$("ap").value,er=m=>{$("aer").textContent=m};let nm=$("an").value.trim();
if(!/^[^\s@]+@[^\s@]+\.[^\s@]{2,}$/.test(em))return er("Зөв и-мэйл хаяг оруулна уу.");
if(am==="up"&&!nm)return er("Нэрээ оруулна уу.");
if(pw.length<8)return er("Нууц үг хамгийн багадаа 8 тэмдэгттэй байх ёстой.");
let U={};try{U=JSON.parse(localStorage.getItem("mk-users")||"{}")||{}}catch(e){}
if(am==="up"){if(U[em])return er("Энэ и-мэйлээр бүртгэл аль хэдийн үүссэн байна. Нэвтэрч үзнэ үү.");const salt=Math.random().toString(36).slice(2);U[em]={name:nm,salt,joined:Date.now(),h:await hp(pw,salt)};try{localStorage.setItem("mk-users",JSON.stringify(U))}catch(e){return er("Бүртгэлийг хадгалж чадсангүй. Хөтчийн хадгалалтын тохиргоогоо шалгана уу.")}}
else{const u=U[em];if(!u||u.h!==await hp(pw,u.salt))return er("И-мэйл эсвэл нууц үг буруу байна.");nm=u.name}
try{localStorage.setItem("mk-user",JSON.stringify({email:em,name:nm,av:(U[em]||{}).av||""}))}catch(e){}
enter(nm,am==="up")}
function lo(){try{localStorage.removeItem("mk-user")}catch(e){}closeP();$("dr").classList.remove("on");$("ac").classList.remove("on");document.querySelector("nav").classList.remove("open");atab("in");$("au").classList.add("on");document.body.classList.add("lock");gate(1);$("ae").focus()}
{let u=null;try{u=JSON.parse(localStorage.getItem("mk-user")||"null")}catch(e){}
if(u&&u.email)enter(u.name||"",0,1);else{gate(1);$("ae").focus()}}
const esc=t=>String(t).replace(/[&<>"']/g,c=>({"&":"&amp;","<":"&lt;",">":"&gt;",'"':"&quot;","'":"&#39;"}[c]));
const ST=[0,2,5,8].map(m=>m*60000),SL=["Бэлтгэж байна","Илгээсэн","Замд явж байна","Хүргэгдсэн"],SP=["Захиалсан","Илгээсэн","Хүргэлтэнд гарсан","Хүргэгдсэн"];
let at="o",ati;
function usr(){try{return JSON.parse(localStorage.getItem("mk-user")||"null")}catch(e){return null}}
function rdU(){try{return JSON.parse(localStorage.getItem("mk-users")||"{}")||{}}catch(e){return{}}}
function rdO(){try{return JSON.parse(localStorage.getItem("mk-orders")||"{}")||{}}catch(e){return{}}}
function wr(k,v){try{localStorage.setItem(k,JSON.stringify(v));return 1}catch(e){return 0}}
function stg(o){if(o.status)return{awaiting_payment:-1,processing:0,shipped:1,out_for_delivery:2,delivered:3,cancelled:-2}[o.status];const e=Date.now()-o.t;let i=0;ST.forEach((v,k)=>{if(e>=v)i=k});return i}
function acOpen(){at="o";$("dr").classList.remove("on");document.querySelector("nav").classList.remove("open");$("ac").classList.add("on");acR();syncO();clearInterval(ati);ati=setInterval(()=>{if(!$("ac").classList.contains("on"))clearInterval(ati);else if(at==="o"){syncO();acR()}},15000)}
function actab(t){at=t;acR()}
function acR(){const u=usr();if(!u)return;const U=rdU()[u.email]||{},O=(rdO()[u.email]||[]).slice().reverse(),sp=O.reduce((a,o)=>a+o.total,0);let b;
document.querySelectorAll("#ac .atb button").forEach(x=>x.classList.toggle("on",x.dataset.t===at));
$("ah").innerHTML=`<div class="ahd"><button class="av big" id="hav" onclick="actab('d')" aria-label="Дүрс солих">${esc(avH(u))}</button><p><b>${esc(u.name)}</b><br><small class="fs">${esc(u.email)}${U.joined?" · Гишүүн болсон: "+new Date(U.joined).toLocaleDateString("mn-MN",{month:"long",year:"numeric"}):""}</small></p></div><div class="ast"><div><b>${O.length}</b><small>Захиалга</small></div><div><b>${mny(sp)}</b><small>Нийт зарцуулсан</small></div><div><b>${O.filter(o=>stg(o)>=0&&stg(o)<3).length}</b><small>Замд явж буй</small></div></div>`;
if(at==="o")b=O.length?``+O.map(o=>{const i=stg(o);return `<div class="ord"><div class="row"><b>#${o.id}</b><span class="bdg s${i<0?0:i}">${sl(i)}</span></div><small class="fs">${new Date(o.t).toLocaleDateString("mn-MN",{day:"numeric",month:"short",year:"numeric"})} · ${o.items.reduce((a,x)=>a+x.q,0)} бараа · Хяналтын дугаар ${o.trk}</small><div class="trk">${SP.map((s,k)=>`<i class="${k<=i?"on":""}"><span>${s}</span></i>`).join("")}</div><div class="oit">${o.items.map(x=>`<div><span>${x.q}× ${esc(x.nm)}${x.sh?" <small>"+esc(x.sh)+"</small>":""}</span><span>${mny(x.pr*x.q)}</span></div>`).join("")}</div><div class="row"><small class="fs">${pt(o)}${o.dc?" · Промо −"+mny(o.dc):""}</small><b>${mny(o.total)}</b></div><small class="fs">${i===-2?"Захиалга цуцлагдсан":i===-1?"Төлбөр баталгаажсаны дараа хүргэлт эхэлнэ":i<3?"Хүргэгдэх хугацаа: "+new Date(o.t+3*864e5).toLocaleDateString("mn-MN",{weekday:"long",day:"numeric",month:"short"}):"Delivered"}</small></div>`}).join(""):`<p class="fs">Одоогоор захиалга алга. Таны худалдан авалт, хүргэлтийн мэдээлэл энд харагдана.</p>`;
else if(at==="d")b=`<div class="adf"><label class="fs">Профайлын дүрс</label><div class="avg">${["",...AV].map(a=>`<button type="button" data-a="${a}" class="${(u.av||"")===a?"on":""}" onclick="pickAv('${a}')" aria-label="${a?"Дүрс "+a:"Нэрийн эхний үсгээ ашиглах"}">${a||esc(avH({name:u.name}))}</button>`).join("")}</div><label class="fs">Бүтэн нэр</label><input id="dn" value="${esc(u.name)}" autocomplete="name"><label class="fs">И-мэйл</label><input value="${esc(u.email)}" disabled><label class="fs">Утас</label><input id="dp" type="tel" value="${esc(U.phone||"")}" autocomplete="tel"><label class="fs">Хүргэлтийн хаяг</label><textarea id="da" rows="3" autocomplete="street-address">${esc(U.addr||"")}</textarea><button class="btn" onclick="acSave()">Мэдээлэл хадгалах</button></div>`;
else{const L=[...WL].map(n=>P.find(p=>p[1]===n)).filter(Boolean);b=L.length?`<div class="clg rvg">${L.map(x=>`<button class="clt" onclick="$('ac').classList.remove('on');openP(P[${P.indexOf(x)}])"><svg viewBox="0 0 100 100">${A[x[3]]}</svg>${x[1]}</button>`).join("")}</div>`:`<p class="fs">Бүтээгдэхүүний зүрхэн дээр дарж энд хадгалаарай.</p>`}
$("ax").innerHTML=b}
function acSave(){const u=usr(),U=rdU(),r=u&&U[u.email],n=$("dn").value.trim();if(!r)return;if(!n)return toast("Нэрээ оруулна уу");r.name=n;r.phone=$("dp").value.trim();r.addr=$("da").value.trim();u.name=n;wr("mk-users",U);wr("mk-user",u);toast("Мэдээлэл хадгалагдлаа");navAv();acR()}
let INFO={demo:true,banks:[{"id":"khan","name":"Хаан банк","account":"0000 0000 00","holder":"YOUR COMPANY NAME"},{"id":"golomt","name":"Голомт банк","account":"0000 0000 00","holder":"YOUR COMPANY NAME"},{"id":"tdb","name":"Худалдаа хөгжлийн банк (TDB)","account":"0000 0000 00","holder":"YOUR COMPANY NAME"}]},CO={m:"bank",bank:"",ref:""};
if(HAS_LOCAL_API){fetch("/api/payment-info").then(r=>r.json()).then(j=>{INFO=j}).catch(()=>{});}
function luhn(n){let s=0,d=0;for(let i=n.length-1;i>=0;i--){let x=+n[i];if(d++%2){x*=2;if(x>9)x-=9}s+=x}return s%10===0}
function brand(n){return/^4/.test(n)?"Visa":/^(5[1-5]|2[2-7])/.test(n)?"Mastercard":/^3[47]/.test(n)?"Amex":/^62/.test(n)?"UnionPay":"Карт"}
function fmtN(e){e.value=e.value.replace(/\D/g,"").slice(0,19).replace(/(.{4})/g,"$1 ").trim()}
function fmtE(e){e.value=e.value.replace(/\D/g,"").slice(0,4).replace(/^(\d{2})(\d)/,"$1/$2")}
function fmtC(e){e.value=e.value.replace(/\D/g,"").slice(0,4)}
function sl(i){return i===-1?"Төлбөр хүлээж байна":i===-2?"Цуцлагдсан":SL[i]}
function pt(o){const p=o.pay;if(typeof p==="string")return"Төлбөр: "+esc(p)+" · Төлсөн";const st=o.paid?"Төлсөн":"Хүлээгдэж байна";return p.method==="bank"?"Төлбөр: Банкны шилжүүлэг ("+esc(p.bank)+") · "+st:"Төлбөр: "+esc(p.brand)+" •••• "+esc(p.last4)+" · "+st}
async function syncO(){const u=usr();if(!u)return;if(!HAS_LOCAL_API)return;const O=rdO(),L=(O[u.email]||[]).filter(o=>o.token&&o.status!=="delivered"&&o.status!=="cancelled");if(!L.length)return;
try{const r=await fetch("/api/orders/status",{method:"POST",headers:{"Content-Type":"application/json"},body:JSON.stringify({orders:L.map(o=>({id:o.id,token:o.token}))})});if(!r.ok)return;const S=await r.json();let ch=0;
S.forEach(x=>{const o=L.find(y=>y.id===x.id);if(o&&(o.status!==x.status||o.paid!==x.paid)){o.status=x.status;o.paid=x.paid;ch=1}});if(ch){wr("mk-orders",O);if($("ac").classList.contains("on")&&at==="o")acR()}}catch(e){}}
function checkout(){if(!usr())return;if(!BI.length)return toast("Таны сагс хоосон байна");CO={m:"bank",bank:"",ref:"MK-"+Math.floor(1e5+Math.random()*9e5)};$("dr").classList.remove("on");$("co").classList.add("on");coR()}
function coClose(){$("co").classList.remove("on")}
function coM(m){CO.m=m;coR()}
function coR(){const u=usr(),U=rdU()[u.email]||{},t=BI.reduce((a,b)=>a+b.pr*b.q,0),dc=PC?+(t*.1).toFixed(2):0,tot=+(t-dc).toFixed(2),B=INFO.banks.find(b=>b.id===CO.bank),kp=(id,d)=>{const e=$(id);return e?e.value:d};
const nm=kp("cn",u.name),ph=kp("cp",U.phone||""),ad=kp("ca",U.addr||"");
const bank=`<select id="cbk" onchange="CO.bank=this.value;coR()" aria-label="Банк"><option value="">Банкаа сонгоно уу</option>${INFO.banks.map(b=>`<option value="${esc(b.id)}"${b.id===CO.bank?" selected":""}>${esc(b.name)}</option>`).join("")}</select>${B?`<div class="bk"><div><small>Банк</small><b>${esc(B.name)}</b></div><div><small>Дансны дугаар</small><b>${esc(B.account)}</b></div><div><small>Хүлээн авагч</small><b>${esc(B.holder)}</b></div><div><small>Гүйлгээний утга</small><b>${CO.ref}</b></div><div><small>Дүн</small><b>${mny(tot)}</b></div></div><p class="fs">Дээрх дансанд шилжүүлгээ хийсний дараа манай баг төлбөрийг баталгаажуулж, захиалгыг бэлтгэнэ. Гүйлгээний утга дээр захиалгын кодоо заавал бичнэ үү.</p>`:""}`;
const card=`<input id="kn" inputmode="numeric" autocomplete="cc-number" placeholder="Картын дугаар" maxlength="23" oninput="fmtN(this)"><input id="kh" autocomplete="cc-name" placeholder="Картын эзэмшигчийн нэр"><div class="pm2"><input id="ke" inputmode="numeric" autocomplete="cc-exp" placeholder="ММ/ЖЖ" maxlength="5" oninput="fmtE(this)"><input id="kc" type="password" inputmode="numeric" autocomplete="cc-csc" placeholder="CVC" maxlength="4" oninput="fmtC(this)"></div>${INFO.demo?`<p class="fs">Туршилтын горим: карт бодитоор цэнэглэгдэхгүй, картын дугаарыг хадгалахгүй.</p>`:""}`;
$("cb").innerHTML=`<div class="ord"><div class="row"><span>${BI.reduce((a,b)=>a+b.q,0)} бараа</span><b>${mny(tot)}</b></div></div><div class="adf"><label class="fs">Хүргэлтийн мэдээлэл</label><input id="cn" value="${esc(nm)}" placeholder="Бүтэн нэр" autocomplete="name"><input id="cp" type="tel" value="${esc(ph)}" placeholder="Утасны дугаар" autocomplete="tel"><textarea id="ca" rows="2" placeholder="Хүргэлтийн хаяг" autocomplete="street-address">${esc(ad)}</textarea><label class="fs">Төлбөрийн арга</label><div class="pm"><button type="button" class="${CO.m==="bank"?"on":""}" onclick="coM('bank')">🏦 Банкны шилжүүлэг</button><button type="button" class="${CO.m==="card"?"on":""}" onclick="coM('card')">💳 Карт</button></div>${CO.m==="bank"?bank:card}<p class="aer" id="ce" role="alert"></p><button class="btn" id="cpb" onclick="coPay()">${CO.m==="bank"?"Захиалга баталгаажуулах":"Төлөх "+mny(tot)}</button></div>`}
async function coPay(){const u=usr(),er=m=>{$("ce").textContent=m},v=id=>$(id).value.trim(),nm=v("cn"),ph=v("cp"),ad=v("ca");
if(!nm||!ph||ad.length<8)return er("Нэр, утас, хүргэлтийн хаягаа бүрэн оруулна уу.");
if(!/^[+\d][\d\s-]{6,}$/.test(ph))return er("Утасны дугаараа зөв оруулна уу.");
let pay;
if(CO.m==="bank"){if(!CO.bank)return er("Шилжүүлэг хийх банкаа сонгоно уу.");pay={method:"bank",bank:CO.bank}}
else{const n=v("kn").replace(/\s/g,""),e=v("ke"),c=v("kc"),mm=+e.slice(0,2),yy=+("20"+e.slice(3,5));
if(n.length<13||!luhn(n))return er("Картын дугаар буруу байна.");
if(!v("kh"))return er("Картын эзэмшигчийн нэрийг оруулна уу.");
if(!/^\d\d\/\d\d$/.test(e)||mm<1||mm>12||new Date(yy,mm,1)<=new Date())return er("Картын хүчинтэй хугацаа буруу байна.");
if(!/^\d{3,4}$/.test(c))return er("CVC код буруу байна.");
pay={method:"card",brand:brand(n),last4:n.slice(-4)}}
const t=BI.reduce((a,b)=>a+b.pr*b.q,0),dc=PC?+(t*.1).toFixed(2):0,body={id:CO.ref,email:u.email,name:nm,phone:ph,addr:ad,items:BI.map(b=>({...b})),dc,total:+(t-dc).toFixed(2),pay},btn=$("cpb");
btn.disabled=true;let r=null;
if(HAS_LOCAL_API){
  try{const x=await fetch("/api/orders",{method:"POST",headers:{"Content-Type":"application/json"},body:JSON.stringify(body)});if(x.ok)r=await x.json()}catch(e){}
} else {
  const suffix=String(Math.floor(100000 + Math.random()*900000));
  r={id:`MK-${suffix}`,token:(crypto.randomUUID?crypto.randomUUID():String(Math.random()).slice(2)+Date.now()),status:pay.method==="bank"?"awaiting_payment":"processing",paid:pay.method==="card",trk:`MKT${Math.floor(100000000 + Math.random()*900000000)}`};
}
if(!r){btn.disabled=false;return er("Захиалгыг илгээж чадсангүй. Серверт холбогдож чадсангүй, дахин оролдоно уу.")}
const o={id:r.id,t:Date.now(),items:body.items,total:body.total,dc,pay:pay.method==="bank"?{method:"bank",bank:(INFO.banks.find(b=>b.id===CO.bank)||{}).name||""}:pay,trk:r.trk,token:r.token,status:r.status,paid:r.paid},O=rdO();
(O[u.email]=O[u.email]||[]).push(o);if(!wr("mk-orders",O))toast("Захиалгыг хадгалж чадсангүй");
const U=rdU(),rec=U[u.email];if(rec){rec.phone=rec.phone||ph;rec.addr=rec.addr||ad;wr("mk-users",U)}
BI=[];PC=0;$("pc").value="";rb();coDone(o)}
function coDone(o){const B=INFO.banks.find(b=>b.name===o.pay.bank);$("cb").innerHTML=`<div class="ord"><b>✓ Захиалга #${esc(o.id)} бүртгэгдлээ</b>${o.pay.method==="bank"?`<p class="fs">Төлбөр хүлээж байна. ${B?esc(B.name)+" · "+esc(B.account)+" · "+esc(B.holder)+" · Гүйлгээний утга: "+esc(o.id)+" · Дүн: "+mny(o.total):""}</p>`:`<p class="fs">${esc(o.pay.brand)} •••• ${esc(o.pay.last4)} картын төлбөр бүртгэгдлээ.${INFO.demo?" (Туршилт)":""}</p>`}<button class="btn" onclick="coClose();acOpen()">Миний захиалгууд</button></div>`}
const AV=["🌸","💄","✨","🌙","🦋","🍒","💅","💜","🌿","🎀","🌷","🍓"];
function avH(u){return u&&u.av?u.av:(u&&u.name?u.name.trim().charAt(0).toUpperCase():"")}
function navAv(){const u=usr(),b=$("av");b.textContent=u?avH(u):"";b.style.display=u?"":"none"}
function pickAv(a){const u=usr(),U=rdU();if(!u)return;u.av=a;if(U[u.email])U[u.email].av=a;wr("mk-users",U);wr("mk-user",u);navAv();$("hav").textContent=avH(u);document.querySelectorAll(".avg button").forEach(x=>x.classList.toggle("on",x.dataset.a===a))}
$("ac").onclick=e=>{if(e.target.id==="ac")$("ac").classList.remove("on")};
$("co").onclick=e=>{if(e.target.id==="co")coClose()};
f(cur);
function sub(){const e=$("em").value.trim(),ok=/^[^\s@]+@[^\s@]+\.[^\s@]{2,}$/.test(e);$("msg").textContent=ok?"MK-д тавтай морил. 10% хөнгөлөлтөд WELCOME10 кодыг ашиглаарай.":"Зөв и-мэйл хаяг оруулна уу.";if(ok)$("em").value=""}

function tp(b){const p=$("ap"),s=p.type==="password";p.type=s?"text":"password";b.textContent=s?"Нуух":"Харуулах"}

/* ---- real photos: drop files in public/img (see IMAGES.txt) to override any product; missing local files
fall back to the curated Unsplash/Pexels photo, and the built-in drawing stays if all sources fail. ---- */
function pn(i){return"img/p/p"+String(i+1).padStart(2,"0")}
let phT=0,PHK={};
function phMV(c){const m=$("mv"),np=P.indexOf(cp),t=++phT,nm=NM.includes(c);m.classList.remove("hasph");m.querySelectorAll(".ph,.mph").forEach(e=>e.remove());
const nn=String(np+1).padStart(2,"0"),L=["img/p/p"+nn+"-"+(si+1)+".png","img/p/p"+nn+".png"];if(LOC[np])L.push(LOC[np]);L.push(PU[np]);let oi=PHK[np]||0;const rm=LOC[np]?3:2;
const im=new Image();im.className=nm?"ph":"mph";im.alt=cp[1];im.decoding="async";
im.onerror=()=>{oi++;const s=L[oi];if(s){if(oi>=rm)im.classList.add("rph");im.src=s}else im.remove()};
im.onload=()=>{if(t!==phT)return;if(oi===rm)PHK[np]=rm;if(nm){m.classList.add("hasph");const k=m.dataset.k||1;im.style.transformOrigin="50% 100%";im.style.transition="transform .45s cubic-bezier(.3,1.4,.5,1)";im.style.transform=`scale(${k})`}m.appendChild(im)};
im.src=L[oi]}
/* ---- real photos: portraits load from Unsplash (stable direct image, no API key needed).
Drop your own photos in public/img (see IMAGES.txt) — they are tried next if the CDN image fails,
and if everything is missing the built-in illustration of that slot stays as placeholder. ---- */
function setPh(e,cands,alt,lazy){if(typeof e==="string")e=$(e);if(!e)return;let i=0;const nx=()=>{if(i>=cands.length)return;const im=new Image();im.alt=alt||"";im.decoding="async";if(lazy)im.loading="lazy";im.onload=()=>{e.innerHTML="";e.appendChild(im)};im.onerror=()=>{i++;nx()};im.src=cands[i++]};nx()}
const UQ="?auto=format&fit=crop&q=80";
setPh("hero-art",["https://images.unsplash.com/photo-1508214751196-bcfd4ca60f91"+UQ+"&w=900&h=1125","img/m/m1.jpg"],"MK хөөрхийн загвар");
setPh("about-art",["img/m/m4.jpg","https://images.unsplash.com/photo-1531746020798-e6953c6e8e04"+UQ+"&w=900&h=1125","https://images.unsplash.com/photo-1573496359142-b8d87734a5a2"+UQ+"&w=900&h=1125","img/m/m2.jpg"],"MK-ийн багийн гишүүн",1);
{const ads=[["img/m/m5.jpg","https://images.unsplash.com/photo-1529626455594-4ff0802cfb7e"+UQ+"&w=600&h=750","img/m/m1.jpg"],["img/m/m6.jpg","https://images.unsplash.com/photo-1519699047748-de8e457a634e"+UQ+"&w=600&h=750","img/m/m2.jpg"],["img/m/m7.jpg","https://images.unsplash.com/photo-1515688594390-b649af70d282"+UQ+"&w=600&h=750","img/m/m3.jpg"]];
const ad=$("adm").children;for(let k=0;k<3;k++)setPh(ad[k],ads[k],"MK загвар "+(k+1),1)}
setPh("fd-art",["img/m/m3.jpg"]);
/* ---- light lab: move the pointer to move the light, then tune brightness and warmth ---- */
const LGS=["#f6dcc8","#efc7a6","#dba77f","#bb7d55","#8c5636","#5d3924"],LGL=["#c98f80","#b8607a","#8e2f52","#b3212f","#96647a","#7a4030"],LGP=[["Өдрийн гэрэл",105,0],["Алтан цаг",95,75],["Дотор",78,45],["Үдэш",62,-65]];
let lgt={s:2,l:1,b:100,w:0};
function lightFace(s,l){return`<svg viewBox="0 0 200 250" xmlns="http://www.w3.org/2000/svg"><defs><radialGradient id="lg1" cx="50%" cy="42%" r="62%"><stop offset="55%" stop-color="#000" stop-opacity="0"/><stop offset="100%" stop-color="#000" stop-opacity=".24"/></radialGradient></defs><path d="M10 250c4-56 40-76 90-76s86 20 90 76z" fill="#3b3a38"/><path d="M46 112c-8-66 28-92 54-92s62 26 54 92c-3 24-6 56-10 70H56c-4-14-7-46-10-70z" fill="#2a1c15"/><path d="M80 150h40l6 40H74z" fill="${s}"/><path d="M80 150h40l6 40H74z" fill="#000" opacity=".16"/><ellipse cx="100" cy="112" rx="46" ry="58" fill="${s}"/><ellipse cx="100" cy="112" rx="46" ry="58" fill="url(#lg1)"/><path d="M54 100c0-34 22-52 46-52s46 18 46 52c-12-22-30-30-46-30s-34 8-46 30z" fill="#2a1c15"/><ellipse cx="76" cy="133" rx="13" ry="8" fill="${l}" opacity=".28"/><ellipse cx="124" cy="133" rx="13" ry="8" fill="${l}" opacity=".28"/><path d="M68 98q9-6 18-1M114 97q9-5 18 1" stroke="#2a1c15" stroke-width="3" fill="none" stroke-linecap="round"/><ellipse cx="77" cy="108" rx="8" ry="4.5" fill="#fff"/><ellipse cx="123" cy="108" rx="8" ry="4.5" fill="#fff"/><circle cx="77" cy="108" r="3.4" fill="#3a2a22"/><circle cx="123" cy="108" r="3.4" fill="#3a2a22"/><path d="M69 106q8-5 16 0M115 106q8-5 16 0" stroke="#1d130e" stroke-width="2" fill="none"/><path d="M100 114c-3 9-6 15-3 20 3 3 9 3 12 0" stroke="#000" stroke-opacity=".24" stroke-width="2" fill="none" stroke-linecap="round"/><path d="M84 148q8-7 16-3 8-4 16 3-8 11-16 11-8 0-16-11z" fill="${l}"/><path d="M90 147q10-5 20 0" stroke="#fff" stroke-opacity=".35" stroke-width="2" fill="none"/></svg>`}
function ltR(){$("ltf").innerHTML=lightFace(LGS[lgt.s],LGL[lgt.l]);
$("lts").innerHTML=LGS.map((c,i)=>`<button class="${i===lgt.s?"on":""}" style="background:${c}" onclick="lgt.s=${i};ltR()" aria-label="Арьсны өнгө ${i+1}"></button>`).join("");
$("ltk").innerHTML=LGL.map((c,i)=>`<button class="${i===lgt.l?"on":""}" style="background:${c}" onclick="lgt.l=${i};ltR()" aria-label="Уруулын өнгө ${i+1}"></button>`).join("");ltA()}
function ltA(){const v=$("ltv"),b=lgt.b/100,w=lgt.w/100;v.style.setProperty("--br",b);v.style.setProperty("--wc",w>=0?"#ff9a3c":"#4f8dff");v.style.setProperty("--wo",Math.abs(w)*.7);v.style.setProperty("--li",Math.min(.95,.2+b*.55));
$("ltp").innerHTML=LGP.map((p,i)=>`<button class="${p[1]===lgt.b&&p[2]===lgt.w?"on":""}" onclick="ltP(${i})">${p[0]}</button>`).join("")}
function ltP(i){lgt.b=LGP[i][1];lgt.w=LGP[i][2];$("lbr").value=lgt.b;$("lwm").value=lgt.w;ltA()}
$("ltv").addEventListener("pointermove",e=>{const v=$("ltv"),r=v.getBoundingClientRect();v.style.setProperty("--x",(e.clientX-r.left)/r.width*100+"%");v.style.setProperty("--y",(e.clientY-r.top)/r.height*100+"%")});
$("lbr").oninput=e=>{lgt.b=+e.target.value;ltA()};$("lwm").oninput=e=>{lgt.w=+e.target.value;ltA()};ltR();

/* ---- accessibility menu (saved on this device) ---- */
const A11=[["hc","Өндөр тодрол"],["font","Уншигдахуйц фонт"],["sp","Зай томруулах"],["ul","Холбоос тодруулах"],["rm","Хөдөлгөөн зогсоох"],["cu","Том курсор"]];
let AS={fs:1};try{AS={...AS,...JSON.parse(localStorage.getItem("mk-a11y")||"{}")}}catch(e){}
function a11A(){const r=document.documentElement;r.style.setProperty("--fs",AS.fs);A11.forEach(([k])=>r.classList.toggle("a-"+k,!!AS[k]));try{localStorage.setItem("mk-a11y",JSON.stringify(AS))}catch(e){}
A11.forEach(([k])=>{const b=$("a-"+k);if(b)b.setAttribute("aria-checked",!!AS[k])});const f=$("a-fs");if(f)f.textContent=Math.round(AS.fs*100)+"%"}
function a11T(k){AS[k]=!AS[k];a11A()}
function a11F(d){AS.fs=d===0?1:Math.min(1.5,Math.max(.85,+(AS.fs+d).toFixed(2)));a11A()}
function a11R(){AS={fs:1};a11A()}
function a11O(o){const p=$("a11p"),on=o===undefined?!p.classList.contains("on"):o;p.classList.toggle("on",on);$("a11b").setAttribute("aria-expanded",on);if(on)p.querySelector("button").focus();else $("a11b").focus()}
(function(){const b=document.createElement("button");b.id="a11b";b.className="a11b";b.type="button";b.setAttribute("aria-label","Хүртээмжийн цэс");b.setAttribute("aria-expanded","false");b.setAttribute("aria-controls","a11p");b.innerHTML='<span aria-hidden="true">Aa</span>';b.onclick=()=>a11O();
const p=document.createElement("div");p.id="a11p";p.className="a11p";p.setAttribute("role","dialog");p.setAttribute("aria-label","Хүртээмжийн тохиргоо");
p.innerHTML=`<div class="a11h"><b>Хүртээмж</b><button type="button" class="a11x" onclick="a11O(false)" aria-label="Хаах">×</button></div><div class="a11r"><span>Текстийн хэмжээ</span><span class="a11f"><button type="button" onclick="a11F(-.1)" aria-label="Текст жижигрүүлэх">A−</button><button type="button" id="a-fs" onclick="a11F(0)" aria-label="Анхны хэмжээ">100%</button><button type="button" onclick="a11F(.1)" aria-label="Текст томруулах">A+</button></span></div>${A11.map(([k,t])=>`<div class="a11r"><span>${t}</span><button type="button" role="switch" id="a-${k}" class="a11s" aria-checked="false" aria-label="${t}" onclick="a11T('${k}')"></button></div>`).join("")}<button type="button" class="btn ghost a11z" onclick="a11R()">Бүгдийг шинэчлэх</button>`;
document.body.append(b,p);const s=document.createElement("a");s.className="skip";s.href="#best";s.textContent="Үндсэн агуулга руу очих";document.body.prepend(s);a11A()})();
document.addEventListener("keydown",e=>{if(e.key==="Escape"&&$("a11p").classList.contains("on"))a11O(false)});

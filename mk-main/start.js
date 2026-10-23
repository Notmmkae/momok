// Starts the SHOP (port 3000) and the separate ADMIN site (port 4000), linked by a shared key.
// Settings are read from the .env file in this folder.
const fs=require("fs"),path=require("path"),crypto=require("crypto"),{spawn}=require("child_process");
if(parseInt(process.versions.node)<18){console.error("Please install Node.js 18 or newer from https://nodejs.org");process.exit(1)}
try{for(const l of fs.readFileSync(path.join(__dirname,".env"),"utf8").split(/\r?\n/)){const m=l.match(/^\s*([A-Z_]+)\s*=\s*(.*?)\s*$/);if(m&&process.env[m[1]]===undefined)process.env[m[1]]=m[2].replace(/^["']|["']$/g,"")}}catch(e){}
const pw=process.env.ADMIN_PASSWORD||crypto.randomBytes(9).toString("base64url"),key=process.env.INTERNAL_KEY||crypto.randomBytes(24).toString("hex"),SP=process.env.PORT||3000,AP=process.env.ADMIN_PORT||4000;
if(!process.env.ADMIN_PASSWORD)console.log("No ADMIN_PASSWORD in .env. Temporary admin password for this run:",pw);
else if(pw==="change-me-now")console.log("NOTE: the admin password is still 'change-me-now'. Change ADMIN_PASSWORD in the .env file before you put this online.");
const run=(d,env)=>spawn(process.execPath,["server.js"],{cwd:path.join(__dirname,d),stdio:"inherit",env:{...process.env,INTERNAL_KEY:key,ADMIN_PASSWORD:pw,...env}});
const kids=[run("shop",{PORT:SP}),run("admin",{ADMIN_PORT:AP,SHOP_URL:"http://localhost:"+SP})];
const stop=()=>{kids.forEach(k=>{try{k.kill()}catch(e){}});process.exit()};
kids.forEach(k=>k.on("exit",c=>{if(c)stop()}));process.on("SIGINT",stop);process.on("SIGTERM",stop);
console.log(`\n  Shop:  http://localhost:${SP}\n  Admin: http://localhost:${AP}\n  (press Ctrl+C to stop)\n`);

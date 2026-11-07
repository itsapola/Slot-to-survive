// GitHub synchronization UI. The editor password stays in this tab's memory only.
(()=>{"use strict";
let revision=null, password=null, busy=false;
const room=window.StoryRoom;if(!room)return;
const panel=document.createElement("div");panel.style.cssText="margin-top:18px;padding:13px 11px;border:1px solid #385060;border-radius:8px;background:#202c38;display:flex;flex-direction:column;gap:9px";
panel.innerHTML='<span style="font-size:10px;font-weight:800;letter-spacing:1px;color:#a8b9c6">GITHUB SYNC</span><span id="syncText" style="color:#b6c8d3;font-size:11px;line-height:1.5">Connecting to GitHub…</span><button class="btn red" id="syncSave" style="width:100%">Save to GitHub</button>';
document.querySelector(".sidebar").append(panel);
const status=(message,color)=>{const el=document.getElementById("syncText");if(el){el.textContent=message;el.style.color=color||"#b6c8d3"}};
const setBusy=flag=>{busy=flag;const b=document.getElementById("syncSave");if(b){b.disabled=flag;b.textContent=flag?"Saving…":"Save to GitHub"}};
function hasDrafts(){const l=room.getLocal();return Object.keys(l.notes||{}).length||Object.keys(l.overrides||{}).length||Object.keys(l.replies||{}).some(k=>l.replies[k].length)||l.threads?.length}
async function refresh(){try{const r=await fetch("/api/story",{cache:"no-store"});const body=await r.json();if(!r.ok)throw Error(body.error||"Could not fetch story");revision=body.sha;room.setBase(body.data);status(hasDrafts()?"GitHub connected · unpublished browser edits":"Connected · up to date");}catch(e){status(e.message+". Configure Cloudflare secrets and redeploy.","#ffadad")}}
function makePayload(){const data=JSON.parse(JSON.stringify(room.getBase()));const local=room.getLocal();data.people=data.people.map(p=>({...p,...(local.overrides[p.id]||{})}));data.notes={...(data.notes||{}),...(local.notes||{})};data.threads=[...data.threads,...(local.threads||[])].map(t=>({...t,posts:[...t.posts,...(local.replies[t.id]||[])]}));return data}
async function publish(){if(busy)return;if(!revision){status("No GitHub revision available. Check API configuration.","#ffadad");return}if(!hasDrafts()){status("Nothing new to save.");return}if(!password){password=prompt("Story Room editor password (set in Cloudflare as STORY_ADMIN_PASSWORD):")||null;if(!password)return}setBusy(true);try{const data=makePayload();const r=await fetch("/api/story",{method:"POST",headers:{"Content-Type":"application/json","Authorization":"Bearer "+password},body:JSON.stringify({expectedSha:revision,data})});const v=await r.json();if(!r.ok){if(r.status===401)password=null;throw Error(v.error||"Save failed")}revision=v.sha;room.setBase(data);room.setLocal({notes:{},overrides:{},replies:{},threads:[]});status("Saved to GitHub ✓ · Cloudflare will redeploy.","#9ee5b6");room.render()}catch(e){status(e.message,"#ffadad");if(String(e.message).includes("newer changes"))alert("GitHub has changed since this tab was loaded. Export your drafts before refreshing. No content was overwritten.")}finally{setBusy(false)}}
document.getElementById("syncSave").onclick=publish;
window.addEventListener("storyroom:dirty",()=>status("Unpublished browser changes · click Save to GitHub","#ffe0a0"));
refresh();
})();

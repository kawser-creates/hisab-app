/* =====================================================================
   SUPABASE CONFIGURATION  -  EDIT THESE TWO LINES ONLY
   ---------------------------------------------------------------------
   Supabase dashboard -> Project Settings -> API (or "API Keys"):
     1) SUPABASE_URL : your Project URL,   e.g. https://abcdxyz.supabase.co
     2) SUPABASE_KEY : your *Publishable* key (starts with sb_publishable_...)
                       or the legacy "anon" public key.
   NEVER paste a secret key / service_role key here. This file is public:
   anyone who opens the website can read it. The app refuses to start if it
   detects a secret key. Access is limited by the Row Level Security (RLS)
   policies from setup.sql, not by hiding the publishable key.
   ===================================================================== */
const SUPABASE_URL = 'https://qkprwxjaargygvsgzreh.supabase.co/rest/v1/ ';
const SUPABASE_KEY = 'sb_publishable_D3VzS5hdryfgdtO6gNFCBw_FUsNUl6r';
/* Table and row that hold the shared state (public.hisab_state, column "state" = jsonb).
   The whole app state lives in ONE row; change ROW_ID only if your row uses another id. */
const TABLE = 'hisab_state';
const ROW_ID = 1;

const $=s=>document.querySelector(s);
const esc=t=>String(t??'').replace(/[&<>"']/g,c=>({'&':'&amp;','<':'&lt;','>':'&gt;','"':'&quot;',"'":'&#39;'}[c]));
let lg='bn';try{lg=localStorage.getItem('hisab_lg')||'bn'}catch(e){}
const D={bn:{app:'হিসাব',sub:'কে কাকে কত টাকা দেবে, সহজে হিসাব করুন',s1:'সদস্য',nm:'নাম লিখুন',add:'যোগ',need2:'আগে অন্তত ২ জন সদস্য যোগ করুন।',dup:'এই নামে আগেই আছে',used:'এই সদস্যের আইটেম আছে, আগে সেগুলো মুছুন',s2:'আইটেম / খরচ যোগ করুন',mE:'খরচ (ভাগ হবে)',mD:'সরাসরি টাকা দেওয়া',hE:'একটার পর একটা আইটেম যোগ করুন (যেমন আলু, পটল)। প্রতিটার টাকা কে দিয়েছে আর কারা ভাগ করবে আলাদা করে ঠিক করুন।',hD:'একজন আরেকজনকে টাকা দিয়েছে (ধার বা শোধ)।',pE:'কে টাকা দিয়েছে',pD:'কে দিয়েছে',to:'কাকে দিয়েছে',item:'কিসের খরচ (যেমন: আলু)',itemph:'আইটেমের নাম',note2:'বিবরণ (ঐচ্ছিক)',note2ph:'যেমন: ধার শোধ',amt:'টাকার পরিমাণ',sq:'সমান ভাগ',sc:'আলাদা পরিমাণ',who:'কারা ভাগ করবে',cust:'কার ভাগে কত টাকা (ভাগ না থাকলে ফাঁকা রাখুন)',addb:'যোগ করুন',ok:'ভাগ মিলে গেছে ✓',left:'এখনো ভাগ হয়নি: ',over:'ভাগ বেশি হয়েছে: ',bad:'সঠিক টাকার পরিমাণ দিন',pick:'কারা ভাগ করবে বেছে নিন',ce:'কার ভাগে কত টাকা লিখুন',cm:'ভাগের যোগফল মোট টাকার সমান হতে হবে',same:'দুজন আলাদা ব্যক্তি বেছে নিন',noitem:'আইটেমের নাম লিখুন',added:'যোগ হয়েছে',s2b:'আইটেমের তালিকা',noi:'এখনো কোনো আইটেম নেই।',split:'ভাগ:',li_e:'<b>{0}</b> — {1} দিয়েছে <b>{2}</b>',li_d:'<b>{0}</b> → <b>{1}</b> কে দিয়েছে <b>{2}</b>',del:'মুছুন',s3:'হিসাবের ফলাফল',rsE:'আইটেম যোগ করলে এখানে হিসাব দেখাবে।',tot:'মোট খরচ: {0}',wp:'কে কাকে দেবে',allok:'সবার হিসাব মিটে গেছে ✓',each:'প্রত্যেকের অবস্থা',gets:'পাবে',owes:'দেবে',even:'মিটে গেছে',shr:'হিসাব শেয়ার / কপি করুন',cp:'কপি হয়েছে',cf:'কপি করা যায়নি',hd:'হিসাব:',hn:'হিসাবের নাম (ফোল্ডারে সেভ করতে)',hnph:'যেমন: আজকের বাজার',svb:'সবার ফোল্ডারে হিসাব সেভ করুন',noent:'আগে আইটেম যোগ করুন',svd:'সব বন্ধুর ফোল্ডারে সেভ হয়েছে',unt:'নামহীন হিসাব',s4:'বন্ধুদের ফোল্ডার',nof:'সদস্য যোগ করলে প্রত্যেকের ফোল্ডার এখানে আসবে।',tot2:'সর্বমোট (সেভ করা সব হিসাব মিলিয়ে)',nth:'কিছু বাকি নেই',cur:'চলতি হিসাব (এখনো সেভ হয়নি)',gf:'{0} থেকে পাবে',pt:'{0} কে দেবে',sp:'যেখানে খরচ করেছে / টাকা দিয়েছে (মোট {0})',gv:'{0} কে দিয়েছে',ex:'খরচ',oth:'অন্যের খরচে তার ভাগ',exof:'{0} এর খরচ',none:'নেই',nth2:'এখনো কিছু নেই',pe:'+ খরচ যোগ',pg:'+ টাকা দিয়েছে',svs:'সেভ করা হিসাব',nosv:'এখনো কোনো হিসাব সেভ করা হয়নি',pd:'খরচ করেছে {0} · ভাগে পড়েছে {1}',c1:'বর্তমান আইটেম মুছুন',c2:'সব ডেটা মুছুন',cf1:'বর্তমান আইটেমগুলো মুছে যাবে (সদস্য ও সেভ করা হিসাব থাকবে)। নিশ্চিত?',cf2:'সদস্য, আইটেম ও সেভ করা সব হিসাব মুছে যাবে। নিশ্চিত?',note:'সব তথ্য শুধু এই ফোনের ব্রাউজারে থাকে।',tk:'টাকা',s2:'খরচের খাত (সব একসাথে)',hE:'প্রতিটা খাতের নাম, টাকা, কে দিয়েছে ও কারা ভাগ নেবে এখানেই দিন। কারো ঘরে টাকা লিখলে সেটাই তার ভাগ, ফাঁকা রাখলে বাকি টাকা সবাই সমান ভাগ করবে।',nw:'+ নতুন খাত যোগ করুন',p:'কে টাকা দিয়েছে',who2:'কারা ভাগ নেবে (টিক) · টাকার ঘর',eq:'সমান',w1:'টাকার পরিমাণ লিখুন (হিসাবে ধরা হয়নি)',w2:'কারা ভাগ নেবে টিক দিন (হিসাবে ধরা হয়নি)',w3:'ভাগের যোগফল মোটের চেয়ে বেশি (হিসাবে ধরা হয়নি)',w4:'ভাগের যোগফল মোট টাকার সমান নয় (হিসাবে ধরা হয়নি)',sd:'সরাসরি টাকা দেওয়া (ধার / শোধ)',hist:'লেনদেনের হিসাব',back:'← ফিরে যান',sbp:'কে মোট কত খরচ করেছে',cu:'চলতি',pb:'দিয়েছে {0}',noi:'এখনো কোনো খরচ নেই।',hE:'প্রতিটা খাতের নাম, টাকা, কে দিয়েছে ও কারা ভাগ নেবে এখানেই দিন। কারো ভাগ আলাদা হলে ⋮ চেপে তার ঘরে টাকা লিখুন, না লিখলে সমান ভাগ হবে।',who2:'কারা ভাগ নেবে',cu2:'আলাদা ভাগ (ঐচ্ছিক): যার ঘরে টাকা লিখবেন সেটাই তার ভাগ, ফাঁকা থাকলে বাকি টাকা সমান ভাগ হবে।',bi:'খাত অনুযায়ী কার থেকে পাবে / কাকে দেবে (চলতি হিসাব)',dl:'সরাসরি টাকা',net:'নিট',pay:'পরিশোধ করবে',tt:'মোট দেবে',pm:'পরিশোধ',pph:'আংশিক টাকা',padd:'জমা',pm2:'বাকির চেয়ে বেশি পরিশোধ লেখা যাবে না',pdn:'পরিশোধ যোগ হয়েছে',svd:'সব বন্ধুর ফোল্ডারে সেভ হয়েছে। নতুন হিসাব শুরু করতে পারেন।',sy_ok:'🟢 সংযুক্ত — সবার সাথে সিঙ্ক হচ্ছে',sy_busy:'🔄 সেভ হচ্ছে…',sy_off:'🟠 অফলাইন — পরিবর্তন জমা আছে, আবার চেষ্টা করছি',sy_err:'🔴 ডেটাবেস ত্রুটি',loading:'ডেটা লোড হচ্ছে…',retry:'আবার চেষ্টা করুন',e_cfg:'Supabase সেটআপ বাকি আছে। script.js এর একদম উপরে Project URL আর Publishable Key বসান।',e_lib:'Supabase লাইব্রেরি লোড হয়নি। ইন্টারনেট সংযোগ দেখুন।',e_load:'ক্লাউড থেকে ডেটা লোড করা যায়নি। কোনো ডেটা মুছে যায়নি।',e_secret:'এটা secret / service_role কী! এখানে শুধু Publishable (anon) কী ব্যবহার করুন।',mig:'ক্লাউডে এখনো কোনো ডেটা নেই, কিন্তু এই ফোনে আগের ডেটা আছে। সেটা ক্লাউডে আপলোড করে সবার সাথে শেয়ার করবেন?',merged:'অন্য কেউ একই সময়ে বদলেছিল, দুটো পরিবর্তন মিলিয়ে নেওয়া হয়েছে',cf1:'বর্তমান আইটেমগুলো সবার জন্য মুছে যাবে (সদস্য ও সেভ করা হিসাব থাকবে)। নিশ্চিত?',cf2:'সবার জন্য সব সদস্য, আইটেম, সেভ করা হিসাব ও পরিশোধ মুছে যাবে। নিশ্চিত?'},
en:{app:'Hisab',sub:'Easily work out who pays whom',s1:'Members',nm:'Enter name',add:'Add',need2:'Add at least 2 members first.',dup:'Name already exists',used:'This member has items; delete them first',s2:'Add item / expense',mE:'Expense (shared)',mD:'Direct payment',hE:'Add items one after another (e.g. potato, onion). Set who paid and who shares each item separately.',hD:'One person gave money to another (loan or repayment).',pE:'Who paid',pD:'Who gave',to:'Gave to',item:'Item (e.g. Potato)',itemph:'Item name',note2:'Note (optional)',note2ph:'e.g. repayment',amt:'Amount',sq:'Equal split',sc:'Custom amounts',who:'Who shares it',cust:'Amount per person (leave blank if not sharing)',addb:'Add',ok:'Split matches ✓',left:'Left to split: ',over:'Over by: ',bad:'Enter a valid amount',pick:'Choose who shares',ce:'Enter each person\'s amount',cm:'Split must add up to the total',same:'Pick two different people',noitem:'Enter the item name',added:'Added',s2b:'Items',noi:'No items yet.',split:'Split:',li_e:'<b>{0}</b> — paid by {1}: <b>{2}</b>',li_d:'<b>{0}</b> → <b>{1}</b>: gave <b>{2}</b>',del:'Delete',s3:'Result',rsE:'Add items to see the result here.',tot:'Total spent: {0}',wp:'Who pays whom',allok:'All settled ✓',each:'Each person',gets:'Gets',owes:'Owes',even:'Settled',shr:'Share / copy result',cp:'Copied',cf:'Could not copy',hd:'Hisab:',hn:'Name for this account (to save)',hnph:'e.g. Today\'s grocery',svb:'Save to everyone\'s folder',noent:'Add items first',svd:'Saved to every friend\'s folder',unt:'Untitled',s4:'Friends\' folders',nof:'Add members to get a folder for each.',tot2:'Overall total (all saved accounts)',nth:'Nothing pending',cur:'Current (not saved yet)',gf:'Gets from {0}',pt:'Pays {0}',sp:'Where spent / paid (total {0})',gv:'Gave {0}',ex:'Expense',oth:'Share in others\' expenses',exof:'{0}\'s expense',none:'None',nth2:'Nothing yet',pe:'+ Add expense',pg:'+ Gave money',svs:'Saved accounts',nosv:'No account saved yet',pd:'Paid {0} · Share {1}',c1:'Clear current items',c2:'Clear all data',cf1:'Current items will be deleted (members and saved accounts stay). Sure?',cf2:'Members, items and all saved accounts will be deleted. Sure?',note:'All data stays in this phone\'s browser.',tk:'Tk',s2:'Expense items (all together)',hE:'Enter each item\'s name, amount, who paid and who shares it right here. An amount typed next to a person is their share; if left blank, the rest is split equally.',nw:'+ Add new item',p:'Who paid',who2:'Who shares (tick) · amount',eq:'Equal',w1:'Enter the amount (not counted)',w2:'Tick who shares (not counted)',w3:'Shares add up to more than the total (not counted)',w4:'Shares do not add up to the total (not counted)',sd:'Direct payment (loan / repayment)',hist:'Transaction history',back:'← Back',sbp:'Total spent by each person',cu:'Current',pb:'paid by {0}',noi:'No expenses yet.',hE:'Enter each item\'s name, amount, who paid and who shares it right here. If someone\'s share differs, tap ⋮ and enter their amount; otherwise it is split equally.',who2:'Who shares it',cu2:'Custom split (optional): an amount typed in a box is that person\'s share; blank ones split the rest equally.',bi:'By item: who gets from / pays whom (current)',dl:'Direct payment',net:'Net',pay:'Will pay',tt:'Total to pay',pm:'Payment',pph:'Partial amount',padd:'Add',pm2:'Payment cannot exceed the amount due',pdn:'Payment added',svd:'Saved to every friend\'s folder. You can start a new account.',sy_ok:'🟢 Connected — synced with everyone',sy_busy:'🔄 Saving…',sy_off:'🟠 Offline — changes are kept, retrying',sy_err:'🔴 Database error',loading:'Loading data…',retry:'Try again',e_cfg:'Supabase is not set up yet. Put your Project URL and Publishable Key at the very top of script.js.',e_lib:'Could not load the Supabase library. Check your internet connection.',e_load:'Could not load data from the cloud. Nothing was deleted.',e_secret:'That is a secret / service_role key! Use only the Publishable (anon) key here.',mig:'The cloud has no data yet, but this device has older data. Upload it to the cloud and share it with everyone?',merged:'Someone else changed data at the same time; both changes were merged',cf1:'Current items will be deleted for everyone (members and saved accounts stay). Sure?',cf2:'All members, items, saved accounts and payments will be deleted for everyone. Sure?'}};
const _=(k,...a)=>(D[lg][k]??k).replace(/\{(\d)\}/g,(m,i)=>a[i]);
let S={m:[],t:[],h:[],p:[]},mode='e',sp='q',HN='',OP={},LP=0,LS=null,TXT='';
/* ---------------------------------------------------------------------
   SUPABASE SYNC LAYER
   - The shared state is {m,t,h,p,rev}. "rev" is a counter inside the JSON used
     for optimistic locking: an update only succeeds if the row still has the
     revision we last saw. Otherwise somebody else saved first, so we download
     their version, merge (3-way: last synced copy / ours / theirs) and retry.
   - Nothing is written until the cloud copy has been loaded successfully, so
     an empty or stale local copy can never overwrite cloud data.
   - Only the language preference (hisab_lg) stays in localStorage.
   --------------------------------------------------------------------- */
let sb=null,REV=null,BASE=null,READY=false,dirty=false,pushing=false,syncing=false,again=false,later=false,subscribed=false,tmr=null,retryT=null,retryN=0,OVF=null,ST='ok',STM='';
const clone=o=>JSON.parse(JSON.stringify(o));
const norm=r=>({m:Array.isArray(r&&r.m)?r.m:[],t:Array.isArray(r&&r.t)?r.t:[],h:Array.isArray(r&&r.h)?r.h:[],p:Array.isArray(r&&r.p)?r.p:[]});
const isEmpty=d=>!d.m.length&&!d.t.length&&!d.h.length&&!d.p.length;
function setStatus(k,msg){ST=k;STM=msg||'';const e=$('#sync');if(!e)return;e.className='sync '+k;e.textContent=_('sy_'+k)+(STM?' ('+STM+')':'')}
/* Every data change in the app calls save(); pushes are batched (400 ms) */
function save(){dirty=true;setStatus('busy');clearTimeout(tmr);tmr=setTimeout(push,400)}
function isSecretKey(k){if(/^sb_secret_/.test(k))return true;try{const b=JSON.parse(atob(k.split('.')[1].replace(/-/g,'+').replace(/_/g,'/')));return b.role==='service_role'}catch(e){return false}}
async function fetchRemote(){const {data,error}=await sb.from(TABLE).select('state').eq('id',ROW_ID).maybeSingle();if(error)throw error;return data?(data.state||{}):null}
function mergeList(b,l,r,key,fix){const k=x=>key?x[key]:x,B=new Map(b.map(x=>[k(x),x])),L=new Map(l.map(x=>[k(x),x])),R=new Map(r.map(x=>[k(x),x])),same=(u,v)=>JSON.stringify(u)===JSON.stringify(v),out=[],seen=new Set();
R.forEach((rv,id)=>{seen.add(id);if(B.has(id)&&!L.has(id))return;if(L.has(id)&&B.has(id)&&!same(L.get(id),B.get(id)))out.push(fix&&!same(rv,B.get(id))?fix(L.get(id),rv):L.get(id));else out.push(rv)});
L.forEach((lv,id)=>{if(!seen.has(id)&&!B.has(id))out.push(lv)});return out}
function merge(b,l,r){return{m:mergeList(b.m,l.m,r.m),t:mergeList(b.t,l.t,r.t,'id'),h:mergeList(b.h,l.h,r.h,'id',(a,c)=>({...a,x:[...new Set([...(a.x||[]),...(c.x||[])])]})),p:mergeList(b.p,l.p,r.p,'id')}}
function readLegacy(){try{const o=JSON.parse(localStorage.getItem('hisab'));return o&&o.m?norm(o):null}catch(e){return null}}
async function loadInitial(){
let r=await fetchRemote();
if(r===null){const {error}=await sb.from(TABLE).upsert({id:ROW_ID,state:{m:[],t:[],h:[],p:[],rev:0}},{onConflict:'id',ignoreDuplicates:true});if(error)throw error;r=await fetchRemote();if(r===null)throw new Error('row missing')}
const d=norm(r);REV=r.rev==null?null:r.rev;BASE=clone(d);S=d;
/* old per-device data is offered for upload ONLY when the cloud is empty; it never replaces cloud data */
if(isEmpty(d)){const old=readLegacy();if(old&&!isEmpty(old)&&confirm(_('mig'))){S=old;dirty=true}}}
async function push(){
if(!READY||pushing||!dirty)return;pushing=true;clearTimeout(retryT);retryT=null;
try{for(let i=0;i<6;i++){
const mine=clone(S),next={...mine,rev:(REV==null?0:REV)+1};
let q=sb.from(TABLE).update({state:next}).eq('id',ROW_ID);
q=REV==null?q.is('state->>rev',null):q.eq('state->>rev',String(REV));
const {data,error}=await q.select('id');
if(error)throw error;
if(data&&data.length){REV=next.rev;BASE=clone(mine);dirty=JSON.stringify(S)!==JSON.stringify(mine);retryN=0;setStatus(dirty?'busy':'ok');break}
/* 0 rows updated = somebody saved first (or RLS blocks updates): merge and retry */
const r=await fetchRemote();if(r===null)throw new Error('row missing');
const rem=norm(r);S=merge(BASE||rem,S,rem);BASE=clone(rem);REV=r.rev==null?null:r.rev;renderAll();toast(_('merged'));
if(i==5)throw new Error('update rejected - check RLS policies / row id')}}
catch(e){fail(e)}
finally{pushing=false;if(dirty&&!retryT){clearTimeout(tmr);tmr=setTimeout(push,400)}}}
function fail(e){console.error('Supabase error',e);const m=(e&&e.message)||'';const off=!navigator.onLine||/fetch|network|Failed|Load failed/i.test(m);setStatus(off?'off':'err',off?'':m.slice(0,70));retryN++;retryT=setTimeout(()=>{retryT=null;push()},Math.min(30000,1000*Math.pow(2,retryN)))}
function applyRemote(r){const rev=r.rev==null?0:r.rev;if(REV!=null&&rev<=REV)return;const rem=norm(r);
if(dirty||pushing)S=merge(BASE||rem,S,rem);else S=rem;
BASE=clone(rem);REV=rev;renderAll();if(dirty&&!pushing)save()}
async function syncRemote(){if(!READY)return;if(syncing){again=true;return}syncing=true;
try{const r=await fetchRemote();if(r)applyRemote(r);if(!dirty)setStatus('ok')}catch(e){fail(e)}
finally{syncing=false;if(again){again=false;syncRemote()}}}
function subscribe(){sb.channel('hisab-sync').on('postgres_changes',{event:'*',schema:'public',table:TABLE,filter:'id=eq.'+ROW_ID},pl=>{const r=pl&&pl.new&&pl.new.state;if(r&&r.rev!=null&&REV!=null&&r.rev<=REV)return;syncRemote()})
.subscribe(st=>{if(st==='SUBSCRIBED'){syncRemote();if(!dirty)setStatus('ok')}else if(st==='CHANNEL_ERROR'||st==='TIMED_OUT'||st==='CLOSED')setStatus('off')})}
/* Re-draw after remote changes; wait while the user is typing so focus is not lost */
function editing(){const a=document.activeElement;return !!(a&&/^(INPUT|SELECT|TEXTAREA)$/.test(a.tagName)&&$('#app').contains(a))}
function renderAll(){if(!READY)return;if(editing()){later=true;return}later=false;rM();rF();rR();rFo();if(OVF){const o=$('#ov'),y=o.scrollTop;OVF();o.scrollTop=y}}
function screen(h){$('#app').innerHTML=`<div class="card" style="text-align:center;margin-top:20vh">${h}</div>`}
function fatal(k,e){READY=false;screen(`<h2>${_('app')}</h2><p>${_(k)}</p>${e?`<p class="sm">${esc(e.message||e)}</p>`:''}<button class="p" onclick="boot()">${_('retry')}</button>`)}
async function boot(){
screen(`<h2>${_('app')}</h2><p class="sm">${_('loading')}</p>`);
if(!SUPABASE_URL||!SUPABASE_KEY||SUPABASE_URL.includes('PASTE_')||SUPABASE_KEY.includes('PASTE_'))return fatal('e_cfg');
if(isSecretKey(SUPABASE_KEY))return fatal('e_secret');
if(!window.supabase||!window.supabase.createClient)return fatal('e_lib');
try{sb=sb||window.supabase.createClient(SUPABASE_URL,SUPABASE_KEY,{auth:{persistSession:false,autoRefreshToken:false}});await loadInitial()}catch(e){return fatal('e_load',e)}
READY=true;skel();setStatus('ok');if(!subscribed){subscribed=true;subscribe()}if(dirty)save()}
document.addEventListener('focusout',()=>setTimeout(()=>{if(later&&!editing())renderAll()},250));
addEventListener('online',()=>{if(READY){setStatus(dirty?'busy':'ok');push();syncRemote()}});
addEventListener('offline',()=>{if(READY)setStatus('off')});
document.addEventListener('visibilitychange',()=>{if(READY&&!document.hidden)syncRemote()});
addEventListener('beforeunload',e=>{if(dirty){e.preventDefault();e.returnValue=''}});
const fmt=c=>(c/100).toLocaleString(lg=='bn'?'bn-BD':'en-US',{maximumFractionDigits:2})+' '+_('tk');
const en=s=>String(s).replace(/[০-৯]/g,d=>'০১২৩৪৫৬৭৮৯'.indexOf(d));
function toast(t){const e=$('#toast');e.textContent=t;e.style.display='block';clearTimeout(toast.t);toast.t=setTimeout(()=>e.style.display='none',3500)}
function setL(l){lg=l;try{localStorage.setItem('hisab_lg',l)}catch(e){}skel()}
function addM(){const v=$('#mn').value.trim();if(!v)return;if(S.m.includes(v))return toast(_('dup'));S.m.push(v);$('#mn').value='';save();rM();rF();rFo()}
function delM(i){const n=S.m[i];if(S.t.some(x=>x.a==n||x.b==n||(x.sh||[]).includes(n)))return toast(_('used'));S.m.splice(i,1);save();rM();rF();rR();rFo()}
function rM(){$('#mb').innerHTML=S.m.length?S.m.map((n,i)=>`<span class="chip">${esc(n)}<button onclick="delM(${i})" aria-label="${_('del')}">×</button></span>`).join(''):`<span class="sm">${_('need2').replace('আগে ','').replace(' first','')}</span>`}
const opts=sel=>S.m.map((n,i)=>`<option value="${i}" ${i==sel?'selected':''}>${esc(n)}</option>`).join('');
const byId=id=>S.t.find(x=>x.id==id),ex=()=>S.t.filter(x=>x.k=='e'),dr=()=>S.t.filter(x=>x.k=='d');
const cents=v=>Math.round(parseFloat(en(v||'0').replace(/,/g,''))*100)||0;
const dt=x=>new Date(x.id).toLocaleDateString(lg=='bn'?'bn-BD':'en-GB');
function shOf(t){const o={},f=t.sa||{},rs=t.sh.filter(n=>!(n in f));let rm=t.c;t.sh.forEach(n=>{if(n in f){o[n]=f[n];rm-=f[n]}});if(rs.length){const q=Math.floor(rm/rs.length);let r=rm-q*rs.length;rs.forEach(p=>{o[p]=q+(r>0?1:0);r--})}return o}
function chk(t){if(t.k!='e')return t.c>0?0:1;if(!(t.c>0))return 1;if(!t.sh.length)return 2;const f=t.sa||{};let q=0,rs=0;t.sh.forEach(n=>{if(n in f)q+=f[n];else rs++});if(q>t.c)return 3;if(!rs&&q<t.c)return 4;return 0}
const good=t=>chk(t)==0;
function shTxt(x){const o=shOf(x);return x.sh.map(n=>esc(n)+' '+fmt(o[n])).join(', ')}
const ln=x=>x.k=='e'?`<b>${esc(x.note)}</b> · ${_('pb',esc(x.a))}<div class="sm">${_('split')} ${shTxt(x)}</div>`:`<b>${esc(x.a)}</b> → <b>${esc(x.b)}</b>${x.note?`<div class="sm">${esc(x.note)}</div>`:''}`;
function calc(){const b={};S.m.forEach(n=>b[n]=0);S.t.filter(good).forEach(t=>{b[t.a]+=t.c;if(t.k=='e'){const o=shOf(t);for(const p in o)b[p]-=o[p]}else b[t.b]-=t.c});return b}
function settle(){const D={},add=(m,a,v)=>{D[m]=D[m]||{};D[m][a]=(D[m][a]||0)+v};
S.t.filter(good).forEach(t=>{if(t.k=='e'){const o=shOf(t);for(const m in o)if(m!=t.a)add(m,t.a,o[m])}else add(t.b,t.a,t.c)});
const r=[];S.m.forEach((x,i)=>S.m.slice(i+1).forEach(y=>{const v=((D[x]||{})[y]||0)-((D[y]||{})[x]||0);if(v>0)r.push([x,y,v]);else if(v<0)r.push([y,x,-v])}));return r}
function card(x){const o=x.sa||{},hs=Object.keys(o).length>0;return `<div class="st" id="c${x.id}"><div class="r" style="align-items:center"><input id="n${x.id}" value="${esc(x.note)}" placeholder="${_('itemph')}" oninput="upd(${x.id},'note',this.value)" style="flex:2;margin:0"><input value="${x.c?x.c/100:''}" inputmode="decimal" placeholder="${_('amt')}" oninput="upd(${x.id},'c',this.value)" style="flex:1.2;margin:0"><button onclick="delT(${x.id})" style="flex:0 0 auto" aria-label="${_('del')}">🗑</button></div>
<label>${_('p')}</label><select onchange="upd(${x.id},'a',this.value)">${S.m.map(n=>`<option ${n==x.a?'selected':''}>${esc(n)}</option>`).join('')}</select>
<div class="r" style="align-items:center"><label style="flex:1">${_('who2')}</label><button class="${hs?'on':''}" onclick="tgo(${x.id})" aria-label="${_('cu2')}" style="flex:0 0 auto;padding:2px 12px;font-size:18px">⋮</button></div><div class="ck">${S.m.map((n,j)=>`<label><input type="checkbox" ${x.sh.includes(n)?'checked':''} onchange="tg(${x.id},${j},this.checked)">${esc(n)}</label>`).join('')}</div>${x.o?`<div class="sm">${_('cu2')}</div><div class="cg">${S.m.map((n,j)=>`<label class="sm">${esc(n)}<input value="${o[n]?o[n]/100:''}" inputmode="decimal" placeholder="${_('eq')}" oninput="fx(${x.id},${j},this.value)" style="margin:2px 0"></label>`).join('')}</div>`:''}<div class="sm" id="s${x.id}"></div></div>`}
function stat(id){const x=byId(id),e=$('#s'+id);if(!x||!e)return;const c=chk(x);e.innerHTML=c?`<span class="neg">${_('w'+c)}</span>`:(x.k=='e'?_('split')+' '+shTxt(x):'')}
function upd(id,f,v){const x=byId(id);if(!x)return;if(f=='c')x.c=cents(v);else if(f=='a'){x.a=v;LP=Math.max(0,S.m.indexOf(v))}else x[f]=v;save();stat(id);rR();rFo()}
function tg(id,j,on){const x=byId(id),n=S.m[j];if(!x||!n)return;x.sh=on?[...new Set([...x.sh,n])]:x.sh.filter(y=>y!=n);save();stat(id);rR();rFo()}
function tgo(id){const x=byId(id);if(!x)return;x.o=!x.o;save();rF()}
function fx(id,j,v){const x=byId(id),n=S.m[j],c=cents(v);if(!x||!n)return;x.sa=x.sa||{};if(c>0){x.sa[n]=c;if(!x.sh.includes(n)){x.sh.push(n);const cb=document.querySelectorAll('#c'+id+' input[type=checkbox]')[j];if(cb)cb.checked=true}}else delete x.sa[n];save();stat(id);rR();rFo()}
function newItem(a){if(S.m.length<2)return toast(_('need2'));const x={id:Date.now(),k:'e',a:a||S.m[LP]||S.m[0],c:0,note:'',sh:S.m.slice(),sa:{}};S.t.push(x);save();rF();rR();rFo();setTimeout(()=>{const e=$('#n'+x.id);e&&e.focus()},50)}
function delT(id){S.t=S.t.filter(x=>x.id!=id);save();rF();rR();rFo()}
function rF(){
if(S.m.length<2){$('#fm').innerHTML=`<span class="sm">${_('need2')}</span>`;$('#dm').innerHTML='';return}
$('#fm').innerHTML=`<p class="sm">${_('hE')}</p>${ex().map(card).join('')||`<p class="sm">${_('noi')}</p>`}<button class="p" onclick="newItem()">${_('nw')}</button>`;ex().forEach(x=>stat(x.id));rD()}
function rD(){const e=$('#dm');if(!e||S.m.length<2)return;
e.innerHTML=`<div class="r"><div><label>${_('pD')}</label><select id="da">${opts(LP)}</select></div><div><label>${_('to')}</label><select id="db">${opts(LP==0?1:0)}</select></div></div><div class="r"><input id="dn" placeholder="${_('note2ph')}"><input id="dc" inputmode="decimal" placeholder="${_('amt')}"></div><button class="p" onclick="addD()">${_('addb')}</button>${dr().map(x=>`<div class="it"><span><b>${esc(x.a)}</b> → <b>${esc(x.b)}</b> <span class="sm">${esc(x.note)}</span></span><span>${fmt(x.c)} <button onclick="delT(${x.id})" style="padding:2px 8px">🗑</button></span></div>`).join('')}`}
function addD(){const a=S.m[+$('#da').value],b=S.m[+$('#db').value],c=cents($('#dc').value);if(a==b)return toast(_('same'));if(!(c>0))return toast(_('bad'));S.t.push({id:Date.now(),k:'d',a,b,c,note:$('#dn').value.trim()});save();rD();rR();rFo();toast(_('added'))}
function rR(){
if(!S.t.filter(good).length){$('#rs').innerHTML=`<span class="sm">${_('rsE')}</span>`;TXT='';return}
const b=calc(),s=settle(),tot=S.t.filter(x=>x.k=='e'&&good(x)).reduce((q,x)=>q+x.c,0),G={};
s.forEach(x=>(G[x[0]]=G[x[0]]||[]).push(x));
const ds=S.m.filter(n=>G[n]),sm=n=>G[n].reduce((q,x)=>q+x[2],0);
TXT=_('hd')+'\n'+(ds.length?ds.map(n=>`${n} (${_('tt')} ${fmt(sm(n))}):\n`+G[n].map(x=>`  → ${x[1]}: ${fmt(x[2])}`).join('\n')).join('\n'):_('allok'));
$('#rs').innerHTML=`<div class="sm" style="margin-bottom:8px">${_('tot',fmt(tot))}</div><b>${_('wp')}</b><div style="margin-top:8px">${ds.length?ds.map(n=>`<div class="pay" style="display:block"><div style="display:flex;justify-content:space-between;gap:8px"><b>${esc(n)}</b><span class="neg">${_('tt')} ${fmt(sm(n))}</span></div>${G[n].map(x=>`<div style="display:flex;justify-content:space-between;padding:4px 0;font-size:15px"><span>→ ${esc(x[1])}</span><span class="pos">${fmt(x[2])}</span></div>`).join('')}</div>`).join(''):`<div class="pay">${_('allok')}</div>`}</div><b>${_('each')}</b>${S.m.map(n=>{const gs=s.filter(x=>x[1]==n),ps=s.filter(x=>x[0]==n);return `<div class="it" style="display:block"><div style="display:flex;justify-content:space-between;gap:8px"><span>${esc(n)}</span><span class="${b[n]>0?'pos':b[n]<0?'neg':'sm'}">${b[n]>0?_('net')+' '+fmt(b[n]):b[n]<0?_('pay')+' '+fmt(-b[n]):_('even')}</span></div>${gs.map(x=>`<div class="sm">${_('gf',esc(x[0]))} ${fmt(x[2])}</div>`).join('')}${ps.map(x=>`<div class="sm">${_('pt',esc(x[1]))} ${fmt(x[2])}</div>`).join('')}</div>`}).join('')}
<br><button class="p" onclick="shr()">${_('shr')}</button><hr style="border:0;border-top:1px solid var(--bd);margin:14px 0"><label>${_('hn')}</label><input id="hn" placeholder="${_('hnph')}" value="${esc(HN)}" oninput="HN=this.value"><button class="p" onclick="svH()">${_('svb')}</button>`}
function shr(){if(navigator.share){navigator.share({text:TXT}).catch(()=>{});return}
try{navigator.clipboard.writeText(TXT).then(()=>toast(_('cp')),()=>toast(_('cf')))}catch(e){toast(_('cf'))}}
function svH(){if(!S.t.filter(good).length)return toast(_('noent'));const b=calc(),pd={},sh={};S.m.forEach(n=>{pd[n]=0;sh[n]=0});S.t.filter(good).forEach(t=>{pd[t.a]+=t.c;if(t.k=='e'){const o=shOf(t);for(const p in o)sh[p]+=o[p]}});S.h.push({id:Date.now(),title:HN.trim()||_('unt'),tr:settle(),pd,sh,it:JSON.parse(JSON.stringify(S.t.filter(good)))});HN='';S.t=[];save();rF();rR();rFo();toast(_('svd'))}
function clr(k){if(confirm(_(k==1?'cf1':'cf2'))){if(k==1)S.t=[];else S={m:[],t:[],h:[],p:[]};save();rM();rF();rR();rFo()}}
let FO=0;
const allE=n=>[...S.h.filter(h=>!n||(n in h.pd&&!(h.x||[]).includes(n))).flatMap(h=>(h.it||[]).map(x=>({x,s:h.title}))),...S.t.filter(good).map(x=>({x,s:_('cu')}))].sort((p,q)=>q.x.id-p.x.id);
function ov(h){const o=$('#ov');o.style.display='block';o.innerHTML=`<div class="w"><button onclick="cl()" style="margin-bottom:10px">${_('back')}</button>${h}</div>`;o.scrollTop=0}
function cl(){OVF=null;$('#ov').style.display='none'}
function pre(m,i){cl();LP=i;if(m=='e'){newItem(S.m[i]);$('#fm').scrollIntoView({behavior:'smooth'})}else{rD();$('#dm').scrollIntoView({behavior:'smooth'})}}
function delH(id,i){const h=S.h.find(x=>x.id==id);if(!h)return;h.x=h.x||[];const n=S.m[i];if(!h.x.includes(n))h.x.push(n);if(Object.keys(h.pd).every(m=>h.x.includes(m)))S.h=S.h.filter(y=>y.id!=id);save();rFo();showF(i)}
function showH(){OVF=showH;const E=allE(),tot={};E.filter(e=>e.x.k=='e').forEach(e=>tot[e.x.a]=(tot[e.x.a]||0)+e.x.c);
let h=`<h2>${_('hist')}</h2>`+(Object.keys(tot).length?`<div class="st"><b>${_('sbp')}</b>${Object.keys(tot).map(n=>`<div class="it"><span>${esc(n)}</span><span>${fmt(tot[n])}</span></div>`).join('')}</div>`:''),last='';
E.forEach(e=>{const d=dt(e.x);if(d!=last){h+=`<div style="margin:14px 0 2px"><b>${d}</b></div>`;last=d}h+=`<div class="it"><div>${ln(e.x)}<div class="sm">${esc(e.s)}</div></div><b>${fmt(e.x.c)}</b></div>`});
if(!E.length)h+=`<span class="sm">${_('noi')}</span>`;ov(h)}
const kc=v=>v>0?'pos':v<0?'neg':'sm',sx=v=>v>0?_('net')+' '+fmt(v):v<0?_('pay')+' '+fmt(-v):_('even');
function pt(n){const P={};
S.h.filter(h=>n in h.pd&&!(h.x||[]).includes(n)).forEach(h=>h.tr.forEach(([d,c,a])=>{if(c==n)(P[d]=P[d]||[]).push([h.title,a]);else if(d==n)(P[c]=P[c]||[]).push([h.title,-a])}));
S.p.forEach(p=>{if(p.f==n)(P[p.t]=P[p.t]||[]).push([_('pm')+' · '+dt(p),p.c,p.id]);else if(p.t==n)(P[p.f]=P[p.f]||[]).push([_('pm')+' · '+dt(p),-p.c,p.id])});return P}
const tn=(n,b)=>{const P=pt(n);return b[n]+Object.keys(P).reduce((q,m)=>q+P[m].reduce((r,p)=>r+p[1],0),0)};
function pay(i,j,all){const n=S.m[i],m=S.m[j],sm=(pt(n)[m]||[]).reduce((q,p)=>q+p[1],0);if(!sm)return;const c=all?Math.abs(sm):cents($('#pp'+j).value);if(!(c>0))return toast(_('bad'));if(c>Math.abs(sm))return toast(_('pm2'));S.p.push(sm>0?{id:Date.now(),f:m,t:n,c}:{id:Date.now(),f:n,t:m,c});save();rFo();showF(i);toast(_('pdn'))}
function delP(id,i){S.p=S.p.filter(p=>p.id!=id);save();rFo();showF(i)}
function byItem(n,it){const P={};
it.forEach(x=>{if(x.k=='e'){const o=shOf(x);if(x.a==n){for(const m in o)if(m!=n)(P[m]=P[m]||[]).push([x.note,o[m]])}else if(o[n])(P[x.a]=P[x.a]||[]).push([x.note,-o[n]])}else{const l=x.note||_('dl');if(x.a==n)(P[x.b]=P[x.b]||[]).push([l,x.c]);else if(x.b==n)(P[x.a]=P[x.a]||[]).push([l,-x.c])}});
const ks=Object.keys(P);if(!ks.length)return `<div class="sm">${_('nth')}</div>`;
return ks.map(m=>{const t=P[m].reduce((q,p)=>q+p[1],0);return `<div style="border-top:1px solid var(--bd);padding:8px 0"><b class="${t>0?'pos':t<0?'neg':'sm'}">${t>0?_('gf',esc(m))+' '+fmt(t):t<0?_('pt',esc(m))+' '+fmt(-t):esc(m)+' '+_('even')}</b>${P[m].map(q=>`<div class="sm" style="display:flex;justify-content:space-between;padding:2px 0"><span>${esc(q[0])}</span><span class="${q[1]>0?'pos':'neg'}">${q[1]>0?'+':'−'}${fmt(Math.abs(q[1]))}</span></div>`).join('')}</div>`}).join('')}
function showF(i){FO=i;OVF=()=>showF(i);
const n=S.m[i],b=calc(),tv=tn(n,b),E=allE(n),vis=S.h.filter(h=>n in h.pd&&!(h.x||[]).includes(n));
const P=pt(n),tl=Object.keys(P).map(m=>{const j=S.m.indexOf(m),sm=P[m].reduce((q,p)=>q+p[1],0);return `<div class="st" style="font-size:15px"><b class="${kc(sm)}">${sm>0?_('gf',esc(m))+' '+fmt(sm):sm<0?_('pt',esc(m))+' '+fmt(-sm):esc(m)+' '+_('even')}</b>${P[m].map(p=>`<div class="sm" style="display:flex;justify-content:space-between;gap:6px;padding:2px 0"><span>${esc(p[0])}${p[2]?` <button onclick="delP(${p[2]},${i})" style="padding:0 6px">🗑</button>`:''}</span><span class="${p[1]>0?'pos':'neg'}">${p[1]>0?'+':'−'}${fmt(Math.abs(p[1]))}</span></div>`).join('')}${sm?`<div class="r" style="margin-top:6px"><input id="pp${j}" inputmode="decimal" placeholder="${_('pph')}" style="margin:0"><button onclick="pay(${i},${j},0)">${_('padd')}</button><button class="on" onclick="pay(${i},${j},1)">Clear</button></div>`:''}</div>`}).join('');
const mine=E.filter(e=>e.x.a==n),ps=mine.filter(e=>e.x.k=='e').reduce((q,e)=>q+e.x.c,0),my=E.filter(e=>e.x.k=='e'&&e.x.a!=n&&shOf(e.x)[n]),hs=vis.slice().reverse();
ov(`<h2>📁 ${esc(n)} <span class="${kc(tv)}" style="float:right">${sx(tv)}</span></h2>
<div class="r" style="margin-bottom:12px"><button onclick="pre('e',${i})">${_('pe')}</button><button onclick="pre('d',${i})">${_('pg')}</button></div>
<div class="card"><b>${_('tot2')}</b><div style="margin-top:8px">${tl||`<div class="sm">${_('nth')}</div>`}</div></div>
<div class="card"><b>${_('bi')}</b><div style="margin-top:8px">${byItem(n,S.t.filter(good))}</div></div>
<div class="card"><b>${_('sp',fmt(ps))}</b>${mine.length?mine.map(e=>`<div class="it"><div>${ln(e.x)}<div class="sm">${dt(e.x)} · ${esc(e.s)}</div></div><span>${fmt(e.x.c)}</span></div>`).join(''):`<div class="sm">${_('nth2')}</div>`}</div>
<div class="card"><b>${_('oth')}</b>${my.length?my.map(e=>`<div class="it"><div><b>${esc(e.x.note)}</b> <span class="sm">(${esc(e.x.a)})</span><div class="sm">${dt(e.x)} · ${esc(e.s)}</div></div><span>${fmt(shOf(e.x)[n])}</span></div>`).join(''):`<div class="sm">${_('none')}</div>`}</div>
<div class="card"><b>${_('svs')}</b>${hs.length?hs.map(h=>{const a=h.tr.filter(x=>x[1]==n),d=h.tr.filter(x=>x[0]==n);return `<div class="st" style="font-size:15px;margin-top:8px"><b>${esc(h.title)}</b> <span class="sm">${dt(h)}</span><br>${_('pd',fmt(h.pd[n]||0),fmt(h.sh[n]||0))}<div style="margin-top:6px">${h.it?byItem(n,h.it):(a.map(x=>`<br><span class="pos">${_('gf',esc(x[0]))} ${fmt(x[2])}</span>`).join('')+d.map(x=>`<br><span class="neg">${_('pt',esc(x[1]))} ${fmt(x[2])}</span>`).join('')||`<span class="sm">${_('even')}</span>`)}</div><br><button onclick="delH(${h.id},${i})" style="margin-top:6px;padding:4px 10px">${_('del')}</button></div>`}).join(''):`<div class="sm">${_('nosv')}</div>`}</div>`)}
function rFo(){
if(!S.m.length){$('#fo').innerHTML=`<span class="sm">${_('nof')}</span>`;return}
const b=calc();
$('#fo').innerHTML=`<div class="grid">${S.m.map((n,i)=>`<div class="tile" onclick="showF(${i})"><div style="font-size:26px">📁</div><b>${esc(n)}</b><div class="${kc(tn(n,b))}">${sx(tn(n,b))}</div></div>`).join('')}</div>`}
function skel(){document.documentElement.lang=lg;document.title=_('app');$('#app').innerHTML=`<div class="r" style="align-items:center"><h1 style="flex:2">${_('app')}</h1><div class="r" style="flex:3;align-items:center"><button class="${lg=='bn'?'on':''}" onclick="setL('bn')">বাংলা</button><button class="${lg=='en'?'on':''}" onclick="setL('en')">English</button><button onclick="showH()" aria-label="${_('hist')}" style="flex:0 0 auto;font-size:20px;padding:6px 12px">⋮</button></div></div><p class="sub">${_('sub')}</p>
<div class="card"><h2>${_('s1')}</h2><div class="r"><input id="mn" placeholder="${_('nm')}" onkeydown="if(event.key=='Enter')addM()" style="flex:3"><button onclick="addM()" style="margin:4px 0 10px">${_('add')}</button></div><div class="chips" id="mb"></div></div>
<div class="card"><h2>${_('s2')}</h2><div id="fm"></div></div>
<div class="card"><h2>${_('sd')}</h2><div id="dm"></div></div>
<div class="card"><h2>${_('s3')}</h2><div id="rs"></div></div>
<div class="card"><h2>${_('s4')}</h2><div id="fo"></div></div>
<div class="r"><button onclick="clr(1)">${_('c1')}</button><button onclick="clr(2)">${_('c2')}</button></div><p class="sub" style="text-align:center;margin-top:12px">${_('note')}</p>`;rM();rF();rR();rFo();setStatus(ST,STM)}
boot();

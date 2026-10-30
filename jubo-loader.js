// Loads the newest bulletin from the 주보 bot site (hanmaum-jubo) at runtime.
(function(){
var BASE="https://chamegirl0808-maker.github.io/hanmaum-jubo/data/";
var API="https://api.github.com/repos/chamegirl0808-maker/hanmaum-jubo/contents/data";
function sunday(){var d=new Date(Date.now()+8*3600e3);var t=new Date(Date.UTC(d.getUTCFullYear(),d.getUTCMonth(),d.getUTCDate()+(7-d.getUTCDay())%7));return t.toISOString().slice(0,10);} // Manila time, upcoming Sunday
function load(src){return new Promise(function(ok,no){var s=document.createElement("script");s.src=src+"?v="+Date.now();s.onload=ok;s.onerror=no;document.head.appendChild(s);});}
function pick(list){var lim=sunday();list=list.filter(function(x){return /^\d{4}-\d{2}-\d{2}$/.test(x)}).sort();var ok=list.filter(function(x){return x<=lim});return ok.length?ok[ok.length-1]:list[list.length-1];}
function weeks(){
  var a=fetch(API,{cache:"no-store"}).then(function(r){if(!r.ok)throw 0;return r.json()}).then(function(j){return j.map(function(f){return f.name.replace(/\.js$/,"")})}).catch(function(){return []});
  var b=load(BASE+"current.js").then(function(){return (window.JUBO_WEEKS||[]).concat(window.JUBO_CURRENT||[])}).catch(function(){return []});
  return Promise.all([a,b]).then(function(r){return r[0].concat(r[1])});
}
// App display only: hide any 원로목사 mention from bulletin data (the bulletin data itself is never edited).
function noEmeritus(o){if(typeof o=="string")return o.replace(/\s*[·,\/]?\s*원로\s*목사\s*[가-힣]{0,4}/g,"").trim();if(Array.isArray(o))return o.map(noEmeritus).filter(function(x){return x!==""});if(o&&typeof o=="object"){var r={};for(var k in o)r[k]=noEmeritus(o[k]);return r}return o;}
function uniq(l){var o={};l.forEach(function(x){if(/^\d{4}-\d{2}-\d{2}$/.test(x))o[x]=1});return Object.keys(o).sort();}
window.juboWeeks=function(){return weeks().then(function(l){var lim=sunday();return uniq(l).filter(function(x){return x<=lim}).reverse();});};
window.loadJubo=function(d){window.JUBO=null;return load(BASE+d+".js").then(function(){if(!window.JUBO)throw new Error("empty");return {date:d,jubo:noEmeritus(window.JUBO)};});};
window.loadLatestJubo=function(want){return weeks().then(function(l){var d=(want&&/^\d{4}-\d{2}-\d{2}$/.test(want))?want:pick(l);if(!d)throw new Error("no bulletin");var lim=sunday(),c=uniq(l).filter(function(x){return x<d}).reverse();
function tryN(i){var x=i<0?d:c[i];if(!x)throw new Error("no bulletin");return loadJubo(x).catch(function(){return tryN(i+1)});}return tryN(-1);});};
window.juboClean=function(s){return String(s||"").replace(/\[[^\]]*\]/g,"").replace(/\s+/g," ").trim();};
window.juboTitle=function(d){var p=d.split("-");return p[0]+"년 "+(+p[1])+"월 "+(+p[2])+"일 주보";};
})();

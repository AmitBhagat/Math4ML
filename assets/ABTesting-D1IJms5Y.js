import{R as u,j as h}from"./index-DvTHk-cs.js";import{j as c}from"./index-BA5YGfZJ.js";import{n as v}from"./ProblemPage-D2kur81u.js";import"./star-SrbOVzvB.js";import"./proxy-UQiMdj6X.js";const B=()=>{const o=u.useRef(null);return u.useEffect(()=>{if(!o.current)return;c.Options.text.useMathJax=!1;const r=c.JSXGraph.initBoard(o.current,{boundingbox:[0,10,.4,-1],axis:!0,showNavigation:!1,showCopyright:!1}),d=r.create("slider",[[.05,9],[.15,9],[0,.1,.4]],{name:"p_A",color:"#8E9775"}),p=r.create("slider",[[.25,9],[.35,9],[0,.12,.4]],{name:"p_B",color:"#E98074"}),a=500,x=(t,e,i)=>{const s=Math.sqrt(e*(1-e)/i);return 1/(s*Math.sqrt(2*Math.PI))*Math.exp(-.5*Math.pow((t-e)/s,2))*.15};return r.create("functiongraph",[t=>x(t,d.Value(),a)],{strokeColor:"#8E9775",strokeWidth:3,fillColor:"#8E9775",fillOpacity:.25,name:"Control A"}),r.create("functiongraph",[t=>x(t,p.Value(),a)],{strokeColor:"#E98074",strokeWidth:3,fillColor:"#E98074",fillOpacity:.25,name:"Variant B"}),r.create("text",[.15,4,()=>{const t=d.Value(),e=p.Value(),i=Math.sqrt(t*(1-t)/a),s=Math.sqrt(e*(1-e)/a),f=Math.sqrt(i**2+s**2),m=(e-t)/f,l=1-v(m),n=((e-t)/t*100).toFixed(1);return`<div class="p-6 bg-white/5 border border-white/10 rounded-3xl backdrop-blur-xl">
                <div class="mb-4">
                    <div class="text-[10px] font-black uppercase tracking-[0.2em] text-accent-premium/60 mb-1">Observed Lift</div>
                    <div class="text-4xl font-black ${parseFloat(n)>=0?"text-emerald-500":"text-rose-500"}">
                        ${parseFloat(n)>=0?"+":""}${n}%
                    </div>
                </div>
                <div class="flex items-center gap-4">
                    <div>
                        <div class="text-[9px] font-bold uppercase tracking-widest text-muted-premium">Confidence</div>
                        <div class="text-xl font-black text-white">${((1-l)*100).toFixed(1)}%</div>
                    </div>
                    <div class="h-10 w-px bg-white/10"></div>
                    <div>
                        <div class="text-[9px] font-bold uppercase tracking-widest text-muted-premium">Result</div>
                        <div class="text-[10px] font-black uppercase ${l<.05?"text-emerald-500":"text-white/40"}">
                            ${l<.05?"Winner Declared":"Inconclusive"}
                        </div>
                    </div>
                </div>
            </div>`}],{parse:!1}),()=>{c.JSXGraph.freeBoard(r)}},[]),h.jsx("div",{ref:o,className:"jxgbox rounded-3xl shadow-2xl border border-white/10",style:{width:"100%",aspectRatio:"1.6/1",maxWidth:"900px"}})};export{B as default};

import{R as l,j as p}from"./index-CjbvBdY6.js";import{j as a}from"./index-BA5YGfZJ.js";import{r as u}from"./ProblemPage-C1wrHGHn.js";import"./star-WPAn_CjN.js";import"./proxy-CBbQnJIG.js";const A=()=>{const s=l.useRef(null);return l.useEffect(()=>{if(!s.current)return;a.Options.text.useMathJax=!1;const r=a.JSXGraph.initBoard(s.current,{boundingbox:[-1,12,11,-2],axis:!1,showNavigation:!1,showCopyright:!1}),d=r.create("slider",[[0,-.5],[4,-.5],[0,.2,1]],{name:"P(A)",color:"#E98074"}),n=r.create("slider",[[6,-.5],[10,-.5],[0,.8,1]],{name:"P(B|A)",color:"#D8C3A5"});for(let e=0;e<100;e++){const o=e%10,c=9-Math.floor(e/10);r.create("point",[o+.5,c+1.5],{size:6,strokeColor:"white",strokeWidth:1,name:"",fillColor:()=>{const t=d.Value()*100;return e<t?e<t*n.Value()?"#E98074":"#E9807444":e-t<(100-t)*.1?"#8E9775":"#D8C3A511"}})}return r.create("text",[0,11,()=>{const e=d.Value(),o=n.Value(),t=e*o+(1-e)*.1,i=e*o/Math.max(.001,t);return`<div class="p-5 bg-bg-secondary border-2 border-border-premium rounded-2xl shadow-xl">
                <div class="flex items-center gap-4">
                    <div>
                        <div class="text-[10px] font-black uppercase text-accent-premium mb-1 tracking-tighter">Updated Belief</div>
                        <div class="text-3xl font-black text-white">${u(`P(A|B) = ${i.toFixed(3)}`,!1)}</div>
                    </div>
                </div>
                <div class="mt-2 text-[10px] text-muted-premium italic">
                    Prior prob $P(A)$ was ${e.toFixed(2)}. Evidence $B$ updated it to ${i.toFixed(2)}.
                </div>
            </div>`}],{parse:!1}),()=>{a.JSXGraph.freeBoard(r)}},[]),p.jsx("div",{ref:s,className:"jxgbox rounded-3xl shadow-2xl border border-white/10",style:{width:"100%",aspectRatio:"1/1",maxWidth:"750px"}})};export{A as default};

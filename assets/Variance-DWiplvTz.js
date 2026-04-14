import{R as i,j as d}from"./index-BncGo-yC.js";import{j as s}from"./index-BA5YGfZJ.js";import{r as p}from"./ProblemPage-DijFdUXx.js";import"./themeUtils-iHBdRlxb.js";import"./star-BrYkrIXy.js";import"./proxy-Dl3RgZCC.js";const v=()=>{const o=i.useRef(null);return i.useEffect(()=>{if(!o.current)return;s.Options.text.useMathJax=!1;const t=s.JSXGraph.initBoard(o.current,{boundingbox:[-5,1.2,5,-.4],axis:!0,showNavigation:!1,showCopyright:!1}),r=t.create("slider",[[-4,1],[-1,1],[.1,1,3]],{name:"σ",color:"#8E9775"}),n=0,l=e=>{const a=r.Value();return 1/(a*Math.sqrt(2*Math.PI))*Math.exp(-.5*Math.pow((e-n)/a,2))},c=t.create("functiongraph",[l],{strokeColor:"#E98074",strokeWidth:4});t.create("integral",[[()=>-r.Value(),()=>r.Value()],c],{fillColor:"#E98074",fillOpacity:.1,strokeColor:"transparent",label:{visible:!1}});for(let e=0;e<20;e++)t.create("point",[()=>(Math.random()-.5)*4*r.Value(),0],{size:3,color:"#D8C3A5",name:"",opacity:.4});return t.create("text",[1,.8,()=>{const e=r.Value(),a=(e*e).toFixed(2);return`<div class="p-4 bg-bg-secondary border border-border-premium rounded-xl shadow-xl">
                <div class="text-[10px] font-black uppercase tracking-widest text-accent-premium mb-1">Spread vs Variance</div>
                <div class="text-2xl font-black text-white">
                    ${p(`\\sigma^2 = ${a}`,!1)}
                </div>
                <div class="mt-2 text-[9px] text-muted-premium italic">
                    Variance measures how much points 'deviate' from the mean.
                </div>
            </div>`}],{parse:!1}),()=>{s.JSXGraph.freeBoard(t)}},[]),d.jsx("div",{ref:o,className:"jxgbox rounded-3xl shadow-2xl border border-white/10",style:{width:"100%",aspectRatio:"1.6/1",maxWidth:"900px"}})};export{v as default};

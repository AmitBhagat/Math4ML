import{R as m,j as f}from"./index-CjbvBdY6.js";import{j as i}from"./index-BA5YGfZJ.js";const g=()=>{const o=m.useRef(null);return m.useEffect(()=>{if(!o.current)return;i.Options.text.useMathJax=!1;const e=i.JSXGraph.initBoard(o.current,{boundingbox:[-1,12,11,-1],axis:!0,showNavigation:!1,showCopyright:!1}),c=e.create("slider",[[1,11],[4,11],[1,4,10]],{name:"μ₁",color:"#E98074"}),l=e.create("slider",[[1,10],[4,10],[1,5,10]],{name:"μ₂",color:"#8E9775"}),d=e.create("slider",[[1,9],[4,9],[1,6,10]],{name:"μ₃",color:"#D8C3A5"}),u=e.create("slider",[[6,11],[9,11],[.5,1,3]],{name:"σ_within",color:"#aaaaaa"}),x=10,n=(a,s,r)=>{for(let t=0;t<x;t++)e.create("point",[()=>a()+(Math.random()-.5)*u.Value()*2,r],{size:2,color:s,name:"",opacity:.5})};return n(()=>c.Value(),"#E98074",1),n(()=>l.Value(),"#8E9775",2),n(()=>d.Value(),"#D8C3A5",3),e.create("text",[.5,7,()=>{const a=c.Value(),s=l.Value(),r=d.Value(),t=(a+s+r)/3,p=(Math.pow(a-t,2)+Math.pow(s-t,2)+Math.pow(r-t,2))/u.Value()**2;return`<div class="p-6 bg-bg-secondary border-2 border-border-premium rounded-2xl shadow-xl w-[300px]">
                <div class="text-[10px] font-black uppercase tracking-widest text-muted-premium mb-1 text-center">ANOVA F-Statistic</div>
                <div class="text-4xl font-black text-center text-accent-premium">${p.toFixed(2)}</div>
                <div class="mt-4 space-y-2">
                    <div class="flex justify-between text-[11px] font-bold">
                        <span class="text-muted-premium uppercase">Variance Ratio</span>
                        <span class="text-white">${p>10?"Significant":"Low"}</span>
                    </div>
                </div>
            </div>`}],{parse:!1}),()=>{i.JSXGraph.freeBoard(e)}},[]),f.jsx("div",{ref:o,className:"jxgbox rounded-3xl shadow-2xl border border-white/10",style:{width:"100%",aspectRatio:"1.2/1"}})};export{g as default};

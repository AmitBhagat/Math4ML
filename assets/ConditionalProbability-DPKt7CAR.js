import{R as c,j as x}from"./index-CjbvBdY6.js";import{j as l}from"./index-BA5YGfZJ.js";import{r as f}from"./ProblemPage-C1wrHGHn.js";import"./star-WPAn_CjN.js";import"./proxy-CBbQnJIG.js";const w=()=>{const i=c.useRef(null),[m,b]=c.useState({prob:0});return c.useEffect(()=>{if(!i.current)return;l.Options.text.useMathJax=!1;const t=l.JSXGraph.initBoard(i.current,{boundingbox:[-1,11,11,-2],axis:!1,showNavigation:!1,showCopyright:!1}),d=t.create("slider",[[1,-.5],[4,-.5],[0,.4,1]],{name:"P(A)",color:"#E98074"}),n=t.create("slider",[[6,-.5],[9,-.5],[.1,.3,1]],{name:"P(B)",color:"#8E9775"}),r=t.create("checkbox",[1,10.2,"Condition on B (P(A|B))"],{color:"#8E9775"}),p=100;for(let e=0;e<p;e++){const o=e%10,u=Math.floor(e/10);t.create("point",[o+.5,u+.5],{size:5,name:"",strokeColor:"white",strokeWidth:1,fillColor:()=>{const s=e<d.Value()*100,a=e%10<n.Value()*10;return r.Value()&&!a?"#00000000":s&&a?"#E98074":s?"#E9807466":a?"#8E977566":"#D8C3A522"},opacity:()=>r.Value()&&!(e%10<n.Value()*10)?0:1})}return t.create("text",[1,9.5,()=>{const e=d.Value(),o=n.Value(),s=e*o/o,a=r.Value()?`P(A|B) = \\frac{P(A \\cap B)}{P(B)} = ${s.toFixed(2)}`:`P(A) = ${e.toFixed(2)}, P(B) = ${o.toFixed(2)}`;return`<div class="p-4 bg-bg-secondary border border-border-premium rounded-xl shadow-lg">
                <div class="text-xs font-black tracking-widest text-accent-premium mb-1 uppercase">
                    ${r.Value()?"Restricted Sample Space":"Full Universe"}
                </div>
                <div class="text-2xl font-black text-white">
                    ${f(a,!1)}
                </div>
                <div class="mt-2 text-[10px] text-muted-premium">
                    ${r.Value()?"Everything not in B is ignored.":"Comparing full areas."}
                </div>
            </div>`}],{parse:!1}),()=>{l.JSXGraph.freeBoard(t)}},[]),x.jsx("div",{ref:i,className:"jxgbox rounded-3xl shadow-2xl border border-white/10",style:{width:"100%",aspectRatio:"1/1",maxWidth:"700px"}})};export{w as default};

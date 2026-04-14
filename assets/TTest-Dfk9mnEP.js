import{R as u,j as m}from"./index-DvTHk-cs.js";import{j as n}from"./index-BA5YGfZJ.js";import{n as x}from"./ProblemPage-D2kur81u.js";import"./star-SrbOVzvB.js";import"./proxy-UQiMdj6X.js";const E=()=>{const r=u.useRef(null);return u.useEffect(()=>{if(!r.current)return;n.Options.text.useMathJax=!1;const t=n.JSXGraph.initBoard(r.current,{boundingbox:[-1,1,11,-.2],axis:!0,showNavigation:!1,showCopyright:!1}),c=t.create("slider",[[1,.9],[4,.9],[2,4,8]],{name:"μ_A",color:"#8E9775"}),d=t.create("slider",[[1,.82],[4,.82],[2,6,8]],{name:"μ_B",color:"#E98074"}),o=t.create("slider",[[6,.9],[9,.9],[.5,1,2.5]],{name:"Noise σ",color:"#D8C3A5"}),p=(e,i,a)=>1/(a*Math.sqrt(2*Math.PI))*Math.exp(-.5*Math.pow((e-i)/a,2));return t.create("functiongraph",[e=>p(e,c.Value(),o.Value()),0,10],{strokeColor:"#8E9775",strokeWidth:3,fillColor:"#8E9775",fillOpacity:.1}),t.create("functiongraph",[e=>p(e,d.Value(),o.Value()),0,10],{strokeColor:"#E98074",strokeWidth:3,fillColor:"#E98074",fillOpacity:.1}),t.create("text",[6,.5,()=>{const e=c.Value(),i=d.Value(),a=o.Value(),l=Math.abs(e-i)/(a*Math.sqrt(2/30)),s=(2*(1-x(l))).toFixed(4);return`<div class="p-6 bg-bg-secondary border-2 border-border-premium rounded-2xl shadow-xl">
                <div class="flex items-baseline gap-2 mb-2">
                    <span class="text-3xl font-black text-accent-premium">${l.toFixed(2)}</span>
                    <span class="text-[10px] uppercase tracking-widest text-muted-premium">t-statistic</span>
                </div>
                <div class="space-y-1">
                    <div class="flex justify-between text-[11px] font-bold">
                        <span class="text-muted-premium">P-VALUE (2-TAILED)</span>
                        <span class="${parseFloat(s)<.05?"text-emerald-500":"text-rose-500"}">${s}</span>
                    </div>
                    <div class="h-1 w-full bg-white/10 rounded-full overflow-hidden">
                        <div class="h-full bg-accent-premium transition-all duration-300" style="width: ${Math.min(l*20,100)}%"></div>
                    </div>
                </div>
                <div class="mt-4 text-[9px] font-black uppercase tracking-wider ${parseFloat(s)<.05?"text-emerald-500":"text-rose-500"}">
                    ${parseFloat(s)<.05?"Statistically Significant Diff":"No Significant Evidence"}
                </div>
            </div>`}],{parse:!1}),()=>{n.JSXGraph.freeBoard(t)}},[]),m.jsx("div",{ref:r,className:"jxgbox rounded-3xl shadow-2xl border border-white/10",style:{width:"100%",aspectRatio:"1.6/1",maxWidth:"900px"}})};export{E as default};

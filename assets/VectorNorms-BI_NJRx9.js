import{r as d,j as s}from"./index-DXIEzczR.js";import{j as x}from"./index-BA5YGfZJ.js";import{r as n}from"./ProblemPage-pFCW54qS.js";import"./themeUtils-iHBdRlxb.js";import"./star-BBGDq61z.js";import"./proxy-DbiQfKqV.js";const M=()=>{const c=d.useRef(null),[o,f]=d.useState("l2");return d.useEffect(()=>{if(!c.current)return;x.Options.text.useMathJax=!1;const t=x.JSXGraph.initBoard(c.current,{boundingbox:[-4,4,4,-4],axis:!0,showNavigation:!1,showCopyright:!1}),e=t.create("point",[1,1],{name:n("\\mathbf{v}"),color:"#E98074",size:5});t.create("arrow",[[0,0],e],{strokeColor:"#E98074",strokeWidth:3}),t.create("circle",[[0,0],()=>Math.sqrt(e.X()**2+e.Y()**2)],{strokeColor:"#D8C3A5",visible:()=>o==="l2",strokeWidth:2,fillColor:"#D8C3A5",fillOpacity:.1});const a=()=>Math.abs(e.X())+Math.abs(e.Y());t.create("polygon",[[()=>a(),0],[0,()=>a()],[()=>-a(),0],[0,()=>-a()]],{visible:()=>o==="l1",strokeColor:"#D8C3A5",fillColor:"#D8C3A5",fillOpacity:.1});const r=()=>Math.max(Math.abs(e.X()),Math.abs(e.Y()));return t.create("polygon",[[()=>r(),()=>r()],[()=>-r(),()=>r()],[()=>-r(),()=>-r()],[()=>r(),()=>-r()]],{visible:()=>o==="linf",strokeColor:"#D8C3A5",fillColor:"#D8C3A5",fillOpacity:.1}),t.create("text",[-3.8,3.8,()=>{const i=Math.abs(e.X()),l=Math.abs(e.Y()),m=i+l,p=Math.sqrt(i*i+l*l),h=Math.max(i,l);return o==="l1"?n(`
                    \\begin{aligned}
                    \\|\\mathbf{v}\\|_1 &= |x| + |y| \\\\
                    &= |${e.X().toFixed(2)}| + |${e.Y().toFixed(2)}| \\\\
                    &= ${m.toFixed(2)}
                    \\end{aligned}
                `,!0):o==="l2"?n(`
                    \\begin{aligned}
                    \\|\\mathbf{v}\\|_2 &= \\sqrt{x^2 + y^2} \\\\
                    &= \\sqrt{(${e.X().toFixed(2)})^2 + (${e.Y().toFixed(2)})^2} \\\\
                    &= ${p.toFixed(2)}
                    \\end{aligned}
                `,!0):n(`
                    \\begin{aligned}
                    \\|\\mathbf{v}\\|_{\\infty} &= \\max(|x|, |y|) \\\\
                    &= \\max(|${e.X().toFixed(2)}|, |${e.Y().toFixed(2)}|) \\\\
                    &= ${h.toFixed(2)}
                    \\end{aligned}
                `,!0)}],{fontSize:13,parse:!1}),()=>{x.JSXGraph.freeBoard(t)}},[o]),s.jsxs("div",{className:"w-full h-full flex flex-col items-center",children:[s.jsx("div",{className:"flex gap-2 mb-6",children:["l1","l2","linf"].map(t=>s.jsx("button",{onClick:()=>f(t),className:`px-4 py-2 rounded-lg text-[10px] font-black uppercase tracking-widest transition-all
                            ${o===t?"bg-accent-premium text-white shadow-lg scale-105":"bg-accent-premium/5 text-accent-premium hover:bg-accent-premium/10 border border-accent-premium/20"}`,children:t==="l1"?"L1 Norm":t==="l2"?"L2 Norm":"L-Infinity"},t))}),s.jsx("div",{ref:c,className:"jxgbox rounded-3xl shadow-2xl border border-white/10",style:{width:"100%",aspectRatio:"1/1",maxWidth:"700px"}})]})};export{M as default};

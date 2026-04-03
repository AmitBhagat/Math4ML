import{r as s,_ as o}from"./index-c41PTl0_.js";/**
 * @license lucide-react v0.546.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const b=e=>e.replace(/([a-z0-9])([A-Z])/g,"$1-$2").toLowerCase(),_=e=>e.replace(/^([A-Z])|[\s-_]+(\w)/g,(t,a,i)=>i?i.toUpperCase():a.toLowerCase()),p=e=>{const t=_(e);return t.charAt(0).toUpperCase()+t.slice(1)},u=(...e)=>e.filter((t,a,i)=>!!t&&t.trim()!==""&&i.indexOf(t)===a).join(" ").trim(),k=e=>{for(const t in e)if(t.startsWith("aria-")||t==="role"||t==="title")return!0};/**
 * @license lucide-react v0.546.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */var C={xmlns:"http://www.w3.org/2000/svg",width:24,height:24,viewBox:"0 0 24 24",fill:"none",stroke:"currentColor",strokeWidth:2,strokeLinecap:"round",strokeLinejoin:"round"};/**
 * @license lucide-react v0.546.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const A=s.forwardRef(({color:e="currentColor",size:t=24,strokeWidth:a=2,absoluteStrokeWidth:i,className:r="",children:n,iconNode:m,...d},f)=>s.createElement("svg",{ref:f,...C,width:t,height:t,stroke:e,strokeWidth:i?Number(a)*24/Number(t):a,className:u("lucide",r),...!n&&!k(d)&&{"aria-hidden":"true"},...d},[...m.map(([g,y])=>s.createElement(g,y)),...Array.isArray(n)?n:[n]]));/**
 * @license lucide-react v0.546.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const l=(e,t)=>{const a=s.forwardRef(({className:i,...r},n)=>s.createElement(A,{ref:n,iconNode:t,className:u(`lucide-${b(p(e))}`,`lucide-${e}`,i),...r}));return a.displayName=p(e),a};/**
 * @license lucide-react v0.546.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const w=[["path",{d:"M3 3v16a2 2 0 0 0 2 2h16",key:"c24i48"}],["path",{d:"M18 17V9",key:"2bz60n"}],["path",{d:"M13 17V5",key:"1frdt8"}],["path",{d:"M8 17v-3",key:"17ska0"}]],v=l("chart-column",w);/**
 * @license lucide-react v0.546.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const M=[["rect",{width:"18",height:"18",x:"3",y:"3",rx:"2",ry:"2",key:"1m3agn"}],["path",{d:"M16 8h.01",key:"cr5u4v"}],["path",{d:"M8 8h.01",key:"1e4136"}],["path",{d:"M8 16h.01",key:"18s6g9"}],["path",{d:"M16 16h.01",key:"1f9h7w"}],["path",{d:"M12 12h.01",key:"1mp3jc"}]],L=l("dice-5",M);/**
 * @license lucide-react v0.546.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const E=[["path",{d:"M12.83 2.18a2 2 0 0 0-1.66 0L2.6 6.08a1 1 0 0 0 0 1.83l8.58 3.91a2 2 0 0 0 1.66 0l8.58-3.9a1 1 0 0 0 0-1.83z",key:"zw3jo"}],["path",{d:"M2 12a1 1 0 0 0 .58.91l8.6 3.91a2 2 0 0 0 1.65 0l8.58-3.9A1 1 0 0 0 22 12",key:"1wduqc"}],["path",{d:"M2 17a1 1 0 0 0 .58.91l8.6 3.91a2 2 0 0 0 1.65 0l8.58-3.9A1 1 0 0 0 22 17",key:"kqbvx6"}]],D=l("layers",E);/**
 * @license lucide-react v0.546.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const T=[["rect",{width:"18",height:"18",x:"3",y:"3",rx:"2",ry:"2",key:"1m3agn"}],["path",{d:"M9 17c2 0 2.8-1 2.8-2.8V10c0-2 1-3.3 3.2-3",key:"m1af9g"}],["path",{d:"M9 11.2h5.7",key:"3zgcl2"}]],x=l("square-function",T),P=[{id:"linear-algebra",title:"Linear Algebra",description:"Linear Algebra serves as the core mathematical framework for representing and processing data in machine learning, handling high-dimensional spaces and transformations.",keyConcepts:[{title:"Vectors",description:"Fundamental units for representing data points and features."},{title:"Matrices",description:"Structures for encoding linear operations and data collections."},{title:"Eigen-decomposition",description:"Internal structures of matrices that reveal data variance."},{title:"Matrix Factorization",description:"Advanced techniques like SVD for data compression and latent feature extraction."}]},{id:"probability",title:"Probability",description:"Probability helps assess uncertainty and make predictions under limited information — the backbone of Bayesian inference, classification, and generative models.",keyConcepts:[{title:"Sample Space",description:"Foundation of outcome analysis"},{title:"Bayes' Theorem",description:"Updating beliefs with evidence"},{title:"Distributions",description:"Models for random variables"},{title:"Conditional",description:"Event dependencies"}]},{id:"statistics",title:"Statistics",description:"Statistics helps analyze data, identify patterns and draw meaningful conclusions from datasets. It acts as the backbone for understanding data and building reliable models.",keyConcepts:[{title:"Descriptive",description:"Summarizes dataset characteristics"},{title:"Inferential",description:"Draws conclusions from samples"},{title:"Hypothesis Testing",description:"Validates claims with statistical significance"},{title:"Correlation",description:"Measures relationships between variables"}]},{id:"calculus",title:"Calculus",description:"Calculus helps optimize machine learning models by adjusting parameters to minimize prediction error. It enables gradient-based learning.",keyConcepts:[{title:"Derivatives",description:"Measuring changes in parameters"},{title:"Gradient Descent",description:"Core optimization algorithm for ML"},{title:"Chain Rule",description:"Powers backpropagation in neural networks"},{title:"Jacobian & Hessian",description:"Second-order optimization"}]}],R={"linear-algebra":D,probability:L,statistics:v,calculus:x},c=new Map,h={"linear-algebra":()=>o(()=>import("./linear-algebra-DhVLdlkp.js"),[]),probability:()=>o(()=>import("./probability-C9ZDP6rR.js"),[]),statistics:()=>o(()=>import("./statistics-DtQo1i8w.js"),[]),calculus:()=>o(()=>import("./calculus-CL9NdtfT.js"),[])},S={"linear-algebra":"LINEAR_ALGEBRA_DATA",probability:"PROBABILITY_DATA",statistics:"STATISTICS_DATA",calculus:"CALCULUS_DATA"};async function z(e){if(c.has(e))return c.get(e);const t=h[e];if(!t)return null;const a=await t(),i=S[e],r=a[i];return c.set(e,r),r}function V(e){if(c.has(e))return;const t=h[e];t&&t()}export{P as C,R as I,D as L,l as c,z as g,V as p};

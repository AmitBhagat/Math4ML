import{r,_ as o}from"./index-9YB8ovpt.js";/**
 * @license lucide-react v0.546.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const b=e=>e.replace(/([a-z0-9])([A-Z])/g,"$1-$2").toLowerCase(),_=e=>e.replace(/^([A-Z])|[\s-_]+(\w)/g,(t,i,a)=>a?a.toUpperCase():i.toLowerCase()),p=e=>{const t=_(e);return t.charAt(0).toUpperCase()+t.slice(1)},u=(...e)=>e.filter((t,i,a)=>!!t&&t.trim()!==""&&a.indexOf(t)===i).join(" ").trim(),C=e=>{for(const t in e)if(t.startsWith("aria-")||t==="role"||t==="title")return!0};/**
 * @license lucide-react v0.546.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */var k={xmlns:"http://www.w3.org/2000/svg",width:24,height:24,viewBox:"0 0 24 24",fill:"none",stroke:"currentColor",strokeWidth:2,strokeLinecap:"round",strokeLinejoin:"round"};/**
 * @license lucide-react v0.546.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const A=r.forwardRef(({color:e="currentColor",size:t=24,strokeWidth:i=2,absoluteStrokeWidth:a,className:n="",children:s,iconNode:h,...d},y)=>r.createElement("svg",{ref:y,...k,width:t,height:t,stroke:e,strokeWidth:a?Number(i)*24/Number(t):i,className:u("lucide",n),...!s&&!C(d)&&{"aria-hidden":"true"},...d},[...h.map(([g,f])=>r.createElement(g,f)),...Array.isArray(s)?s:[s]]));/**
 * @license lucide-react v0.546.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const l=(e,t)=>{const i=r.forwardRef(({className:a,...n},s)=>r.createElement(A,{ref:s,iconNode:t,className:u(`lucide-${b(p(e))}`,`lucide-${e}`,a),...n}));return i.displayName=p(e),i};/**
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
 */const T=[["rect",{width:"18",height:"18",x:"3",y:"3",rx:"2",ry:"2",key:"1m3agn"}],["path",{d:"M9 17c2 0 2.8-1 2.8-2.8V10c0-2 1-3.3 3.2-3",key:"m1af9g"}],["path",{d:"M9 11.2h5.7",key:"3zgcl2"}]],x=l("square-function",T),S=[{id:"linear-algebra",title:"Linear Algebra",description:"Linear Algebra is the foundation for many machine learning algorithms. It provides the tools to represent and manipulate datasets, features and transformations.",keyConcepts:[{title:"Vectors",description:"Building blocks of datasets and features"},{title:"Matrices",description:"Essential for solving equations and optimizing ML models"},{title:"Eigenvalues",description:"For understanding variance and principal components"},{title:"SVD",description:"Widely used in dimensionality reduction and data compression"}]},{id:"probability",title:"Probability",description:"Probability helps assess uncertainty and make predictions under limited information — the backbone of Bayesian inference, classification, and generative models.",keyConcepts:[{title:"Sample Space",description:"Foundation of outcome analysis"},{title:"Bayes' Theorem",description:"Updating beliefs with evidence"},{title:"Distributions",description:"Models for random variables"},{title:"Conditional",description:"Event dependencies"}]},{id:"statistics",title:"Statistics",description:"Statistics helps analyze data, identify patterns and draw meaningful conclusions from datasets. It acts as the backbone for understanding data and building reliable models.",keyConcepts:[{title:"Descriptive",description:"Summarizes dataset characteristics"},{title:"Inferential",description:"Draws conclusions from samples"},{title:"Hypothesis Testing",description:"Validates claims with statistical significance"},{title:"Correlation",description:"Measures relationships between variables"}]},{id:"calculus",title:"Calculus",description:"Calculus helps optimize machine learning models by adjusting parameters to minimize prediction error. It enables gradient-based learning.",keyConcepts:[{title:"Derivatives",description:"Measuring changes in parameters"},{title:"Gradient Descent",description:"Core optimization algorithm for ML"},{title:"Chain Rule",description:"Powers backpropagation in neural networks"},{title:"Jacobian & Hessian",description:"Second-order optimization"}]}],R={"linear-algebra":D,probability:L,statistics:v,calculus:x},c=new Map,m={"linear-algebra":()=>o(()=>import("./linear-algebra-B7d_uhuu.js"),[]),probability:()=>o(()=>import("./probability-C9ZDP6rR.js"),[]),statistics:()=>o(()=>import("./statistics-DtQo1i8w.js"),[]),calculus:()=>o(()=>import("./calculus-CL9NdtfT.js"),[])},I={"linear-algebra":"LINEAR_ALGEBRA_DATA",probability:"PROBABILITY_DATA",statistics:"STATISTICS_DATA",calculus:"CALCULUS_DATA"};async function z(e){if(c.has(e))return c.get(e);const t=m[e];if(!t)return null;const i=await t(),a=I[e],n=i[a];return c.set(e,n),n}function V(e){if(c.has(e))return;const t=m[e];t&&t()}export{S as C,R as I,D as L,l as c,z as g,V as p};

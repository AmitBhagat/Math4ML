import React, { useState, useMemo } from "react";
import { 
  LineChart, 
  Line, 
  XAxis, 
  YAxis, 
  CartesianGrid, 
  Tooltip, 
  ResponsiveContainer, 
  ReferenceDot,
  Area,
  AreaChart,
  Label,
  Legend
} from "recharts";
import { ActivationFunctions, ActivationType, calculateWeightedSum } from "../../lib/neuronMath";
import { InlineMath, BlockMath } from "react-katex";
import { 
  Settings2, 
  Activity, 
  Cpu, 
  Info, 
  ChevronDown, 
  ChevronUp, 
  Plus, 
  Minus,
  CheckCircle2
} from "lucide-react";

const CustomTooltip = ({ active, payload, label }: any) => {
  if (active && payload && payload.length) {
    return (
      <div className="bg-surface-container border border-white/10 p-3 rounded shadow-xl backdrop-blur-md">
        <p className="text-[10px] font-black uppercase tracking-widest text-on-surface-variant mb-1">State Point</p>
        <p className="text-sm font-mono text-accent-teal">z: {parseFloat(label).toFixed(2)}</p>
        <p className="text-sm font-mono text-accent-purple">y: {payload[0].value.toFixed(2)}</p>
      </div>
    );
  }
  return null;
};

export const NeuronVisualizer = () => {
  const [inputs, setInputs] = useState<number[]>([0.20, 0.60, -0.30]);
  const [weights, setWeights] = useState<number[]>([0.50, -0.30, 0.80]);
  const [bias, setBias] = useState<number>(0.0);
  const [activation, setActivation] = useState<ActivationType>("ReLU");
  const [showContributions, setShowContributions] = useState(true);
  const [isSlopeOpen, setIsSlopeOpen] = useState(false);

  const z = useMemo(() => calculateWeightedSum(inputs, weights, bias), [inputs, weights, bias]);
  const a = useMemo(() => ActivationFunctions[activation](z), [z, activation]);

  const totalSensitivity = useMemo(() => weights.reduce((sum, w) => sum + w, 0), [weights]);

  // Chart 1: Weighted Sum / Slope Analysis Chart
  const slopeData = useMemo(() => {
    const data = [];
    for (let x = -6; x <= 6; x += 0.5) {
      data.push({
        x: x,
        total: x, // Identity line representing the total sum
        w1: weights[0] * x,
        w2: weights[1] * x,
        w3: weights[2] * x,
      });
    }
    return data;
  }, [weights]);

  // Chart 2: Activation Function Output Chart
  const activationData = useMemo(() => {
    const data = [];
    for (let x = -6; x <= 6; x += 0.2) {
      data.push({
        x: x,
        y: ActivationFunctions[activation](x),
      });
    }
    return data;
  }, [activation]);

  const updateInput = (index: number, val: number) => {
    const newInputs = [...inputs];
    newInputs[index] = val;
    setInputs(newInputs);
  };

  const updateWeight = (index: number, val: number) => {
    const newWeights = [...weights];
    newWeights[index] = val;
    setWeights(newWeights);
  };

  return (
    <div className="max-w-7xl mx-auto space-y-16 py-12 animate-in fade-in duration-1000">
      
      {/* Header: How it works & Understanding */}
      <section className="grid grid-cols-1 lg:grid-cols-2 gap-12 border-b border-white/5 pb-16">
        <div className="space-y-6">
          <h2 className="text-3xl font-headline font-black text-on-surface tracking-tight">Understanding a Neural Network Neuron</h2>
          <p className="text-on-surface-variant text-lg font-light leading-relaxed">
            Neural networks are powerful tools in machine learning, and at their core are neurons, the basic computational units. A single neuron performs these key steps:
          </p>
          <ul className="space-y-4">
            <li className="flex items-start gap-4">
               <span className="w-1.5 h-6 bg-accent-teal rounded-full mt-1"></span>
               <p className="text-on-surface-variant/80 text-base"><strong className="text-on-surface">Takes multiple inputs:</strong> These inputs represent features from your data, such as pixel values in an image.</p>
            </li>
            <li className="flex items-start gap-4">
               <span className="w-1.5 h-6 bg-accent-purple rounded-full mt-1"></span>
               <p className="text-on-surface-variant/80 text-base"><strong className="text-on-surface">Applies weights:</strong> Each input is multiplied by a weight, which determines its importance.</p>
            </li>
            <li className="flex items-start gap-4">
               <span className="w-1.5 h-6 bg-blue-500 rounded-full mt-1"></span>
               <p className="text-on-surface-variant/80 text-base"><strong className="text-on-surface">Combines inputs:</strong> The weighted inputs are summed up to produce a single value.</p>
            </li>
            <li className="flex items-start gap-4">
               <span className="w-1.5 h-6 bg-emerald-500 rounded-full mt-1"></span>
               <p className="text-on-surface-variant/80 text-base"><strong className="text-on-surface">Transforms with an activation function:</strong> Introduces non-linearity, enabling the network to learn complex patterns.</p>
            </li>
          </ul>
        </div>

        <div className="bg-surface-container-low p-8 rounded-2xl border border-white/5 shadow-inner flex flex-col justify-center">
          <h3 className="text-[10px] font-black uppercase tracking-[0.4em] text-accent-teal mb-6">How it works:</h3>
          <ul className="space-y-4">
            <li className="flex items-center gap-3 text-on-surface-variant font-light">
              <Plus className="w-4 h-4 text-accent-teal" />
              <span>Adjust inputs (-1 to 1) to simulate different feature values</span>
            </li>
            <li className="flex items-center gap-3 text-on-surface-variant font-light">
              <Activity className="w-4 h-4 text-accent-purple" />
              <span>Modify weights (-2 to 2) to change input importance</span>
            </li>
            <li className="flex items-center gap-3 text-on-surface-variant font-light">
              <div className="w-4 h-4 rounded-full border border-blue-500 flex items-center justify-center text-[10px] text-blue-500">?</div>
              <span>Watch how the weighted sum and activation change</span>
            </li>
          </ul>
          <p className="mt-10 text-[10px] font-black uppercase tracking-widest text-on-surface-variant/40 italic">Scroll down to see the mathematical transformation in detail.</p>
        </div>
      </section>

      {/* Main Interactive Core */}
      <section className="grid grid-cols-1 lg:grid-cols-12 gap-12">
        
        {/* Left Column: Input Control & Formulas */}
        <div className="lg:col-span-5 space-y-12">
          
          <div className="bg-surface-container p-8 rounded-2xl border border-white/5 shadow-2xl space-y-8">
            <h3 className="text-xs font-black uppercase tracking-widest text-on-surface mb-8">Neuron Sandbox</h3>
            
            {inputs.map((input, i) => (
              <div key={i} className="space-y-6">
                <div className="flex justify-between items-center bg-background/30 p-4 rounded border border-white/5">
                   <div className="space-y-1 text-center flex-1 pr-4 border-r border-white/5">
                      <span className="text-[9px] uppercase tracking-tighter text-on-surface-variant/50 block">Input x{i+1}</span>
                      <span className="text-lg font-mono font-bold text-accent-teal">{input.toFixed(2)}</span>
                   </div>
                   <div className="space-y-1 text-center flex-1 pl-4">
                      <span className="text-[9px] uppercase tracking-tighter text-on-surface-variant/50 block">Weight w{i+1}</span>
                      <span className="text-lg font-mono font-bold text-accent-purple">{weights[i].toFixed(2)}</span>
                   </div>
                   <div className="pl-6 border-l border-white/5 text-right w-24">
                      <span className="text-[9px] uppercase tracking-tighter text-on-surface-variant/50 block">Product</span>
                      <span className="text-xs font-mono font-bold text-on-surface">{(input * weights[i]).toFixed(3)}</span>
                   </div>
                </div>
                
                <div className="grid grid-cols-2 gap-8">
                   <input 
                     type="range" min="-1" max="1" step="0.01" 
                     value={input} onChange={(e) => updateInput(i, parseFloat(e.target.value))}
                     className="w-full h-1 bg-white/10 rounded-full appearance-none accent-accent-teal cursor-pointer"
                   />
                   <input 
                     type="range" min="-2" max="2" step="0.01" 
                     value={weights[i]} onChange={(e) => updateWeight(i, parseFloat(e.target.value))}
                     className="w-full h-1 bg-white/10 rounded-full appearance-none accent-accent-purple cursor-pointer"
                   />
                </div>
              </div>
            ))}
          </div>

          <div className="bg-surface-container p-8 rounded-2xl border border-white/5 shadow-2xl space-y-10">
             <div>
                <h4 className="text-[10px] font-black uppercase tracking-widest text-on-surface-variant mb-6">Original Equation:</h4>
                <div className="p-6 bg-background/40 rounded border border-white/5 text-center text-xl font-mono">
                   <InlineMath math="Z = w_1x_1 + w_2x_2 + w_3x_3" />
                </div>
             </div>

             <div>
                <h4 className="text-[10px] font-black uppercase tracking-widest text-on-surface-variant mb-6">Matrix Form:</h4>
                <div className="p-8 bg-background/40 rounded border border-white/5 overflow-x-auto">
                   <div className="flex items-center justify-center gap-4 text-on-surface font-mono text-sm md:text-base">
                      <span className="text-2xl font-light opacity-30">[</span>
                      {weights.map((w, i) => (
                        <span key={i} className="text-accent-purple font-bold">
                          {w.toFixed(2)}{i < weights.length - 1 ? " " : ""}
                        </span>
                      ))}
                      <span className="text-2xl font-light opacity-30">]</span>
                      <span className="mx-2 text-xl opacity-30">·</span>
                      <div className="flex flex-col items-center border-l border-r border-white/10 px-3 py-1">
                        {inputs.map((x, i) => <span key={i} className="text-accent-teal font-bold">{x.toFixed(2)}</span>)}
                      </div>
                      <span className="mx-2 text-xl opacity-30">=</span>
                      <span className="text-2xl font-black text-on-surface bg-white/5 px-4 py-2 rounded">[{z.toFixed(3)}]</span>
                   </div>
                </div>
             </div>

             <div>
                <h4 className="text-[10px] font-black uppercase tracking-widest text-on-surface-variant mb-6">Calculation:</h4>
                <div className="p-6 bg-background/40 rounded border border-white/5 space-y-4 font-mono text-sm text-center">
                   <p className="text-on-surface-variant font-light">
                      ({weights[0].toFixed(2)} × {inputs[0].toFixed(2)}) + { (weights[0] * inputs[0]).toFixed(3) }
                   </p>
                   <p className="text-on-surface-variant font-light">
                      ({weights[1].toFixed(2)} × {inputs[1].toFixed(2)}) + { (weights[1] * inputs[1]).toFixed(3) }
                   </p>
                   <p className="text-on-surface-variant font-light">
                      ({weights[2].toFixed(2)} × {inputs[2].toFixed(2)}) = { (weights[2] * inputs[2]).toFixed(3) } = <span className="text-accent-teal font-bold">{z.toFixed(3)}</span>
                   </p>
                </div>
             </div>
          </div>
        </div>

        {/* Right Column: Calculations & Interactive Charts */}
        <div className="lg:col-span-7 space-y-12">
           
           {/* Section: Weight Sum Calculation */}
           <div className="bg-surface-container p-10 rounded-2xl border border-white/5 shadow-2xl space-y-8">
              <div className="flex items-center justify-between">
                 <h3 className="text-2xl font-headline font-black text-on-surface">Weight Sum Calculation</h3>
                 <span className="px-4 py-1 bg-accent-teal/10 rounded-full text-[10px] font-black text-accent-teal uppercase tracking-widest border border-accent-teal/20">Linear Base</span>
              </div>
              
              <div className="text-center font-mono py-6 border-b border-white/5">
                 <p className="text-[10px] uppercase tracking-widest text-on-surface-variant mb-4">Functional Mapping</p>
                 <p className="text-lg opacity-40 mb-2">Z = w₁x₁ + w₂x₂ + w₃x₃</p>
                 <p className="text-xl md:text-2xl text-on-surface font-bold leading-relaxed">
                   z = <span className="text-accent-teal">({weights[0].toFixed(2)}×{inputs[0].toFixed(2)})</span> + <span className="text-accent-purple">({weights[1].toFixed(2)}×{inputs[1].toFixed(2)})</span> + <span className="text-blue-500">({weights[2].toFixed(2)}×{inputs[2].toFixed(2)})</span> = <span className="underline decoration-accent-teal/30 underline-offset-8">{z.toFixed(3)}</span>
                 </p>
              </div>

              {/* Slope Analysis Accordion */}
              <div className="border border-white/5 rounded-xl overflow-hidden bg-background/20">
                 <button 
                  onClick={() => setIsSlopeOpen(!isSlopeOpen)}
                  className="w-full flex items-center justify-between p-6 bg-surface-container-high/50 hover:bg-surface-container-high transition-colors"
                 >
                    <span className="text-[11px] font-black uppercase tracking-[0.2em] text-on-surface">Slope Analysis</span>
                    {isSlopeOpen ? <ChevronUp className="w-4 h-4" /> : <ChevronDown className="w-4 h-4" />}
                 </button>
                 {isSlopeOpen && (
                   <div className="p-8 space-y-8 font-mono text-sm leading-relaxed border-t border-white/5 bg-background/40">
                      <div className="text-center mb-6">
                        <InlineMath math="Z = w_1x_1 + w_2x_2 + w_3x_3" />
                      </div>
                      <div className="space-y-4">
                        <p className="text-[10px] font-black uppercase text-accent-teal mb-2">Partial Derivatives (Slopes):</p>
                        {weights.map((w, i) => (
                           <div key={i} className="flex justify-between items-center border-b border-white/5 pb-2">
                              <span>∂z/∂x{i+1} = w{i+1} = <span className="text-accent-purple font-bold">{w.toFixed(3)}</span></span>
                              <span className="text-[10px] text-on-surface-variant opacity-60">({w >= 0 ? "increases" : "decreases"} by {Math.abs(w).toFixed(3)} per unit)</span>
                           </div>
                        ))}
                      </div>
                      <div className="pt-6 border-t border-white/5 text-center">
                         <p className="text-xs">Total sensitivity: <span className="text-accent-teal font-black">{totalSensitivity.toFixed(3)}</span></p>
                         <p className="text-[10px] text-on-surface-variant opacity-40 mt-2 font-light">(Sum of weights indicates overall sensitivity to uniform input changes)</p>
                      </div>
                   </div>
                 )}
              </div>

              {/* Slope Chart */}
              <div className="space-y-6 pt-4">
                 <div className="flex items-center justify-between">
                    <label className="flex items-center gap-3 cursor-pointer group">
                       <div className={`w-10 h-6 rounded-full transition-colors relative flex items-center px-1 ${showContributions ? "bg-accent-teal" : "bg-white/10"}`}>
                          <input type="checkbox" className="hidden" checked={showContributions} onChange={() => setShowContributions(!showContributions)} />
                          <div className={`w-4 h-4 bg-white rounded-full transition-transform shadow-sm ${showContributions ? "translate-x-4" : "translate-x-0"}`} />
                       </div>
                       <span className="text-[11px] font-black uppercase tracking-widest text-on-surface-variant group-hover:text-on-surface transition-colors">Show Individual Contributions</span>
                    </label>
                 </div>

                 <div className="h-[300px] w-full bg-background/20 rounded-xl p-4">
                    <ResponsiveContainer width="100%" height="100%">
                       <LineChart data={slopeData} margin={{ top: 20, right: 30, left: 10, bottom: 20 }}>
                          <CartesianGrid strokeDasharray="3 3" stroke="rgba(255,255,255,0.05)" />
                          <XAxis 
                            dataKey="x" 
                            stroke="rgba(255,255,255,0.3)" 
                            fontSize={10} 
                            tick={{fill: 'rgba(255,255,255,0.4)'}} 
                            axisLine={true}
                            tickLine={true}
                          >
                             <Label value="Input Variable" offset={-10} position="insideBottom" fill="rgba(255,255,255,0.4)" fontSize={9} />
                          </XAxis>
                          <YAxis 
                            stroke="rgba(255,255,255,0.3)" 
                            fontSize={10} 
                            tick={{fill: 'rgba(255,255,255,0.4)'}}
                            axisLine={true}
                            tickLine={true}
                          >
                            <Label value="Weighted Sum" angle={-90} position="insideLeft" fill="rgba(255,255,255,0.4)" fontSize={9} />
                          </YAxis>
                          <Tooltip content={<CustomTooltip />} />
                          {showContributions && (
                            <>
                              <Line type="monotone" dataKey="w1" stroke="#2dd4bf" strokeWidth={1} dot={false} strokeOpacity={0.6} />
                              <Line type="monotone" dataKey="w2" stroke="#a855f7" strokeWidth={1} dot={false} strokeOpacity={0.6} />
                              <Line type="monotone" dataKey="w3" stroke="#3b82f6" strokeWidth={1} dot={false} strokeOpacity={0.6} />
                            </>
                          )}
                          <Line type="monotone" dataKey="total" stroke="#ff9933" strokeWidth={3} dot={false} />
                          <ReferenceDot x={z} y={z} r={6} fill="#ffffff" stroke="#ff9933" strokeWidth={4} isFront={true} />
                       </LineChart>
                    </ResponsiveContainer>
                 </div>
              </div>
           </div>

           {/* Section: Activation Function Output */}
           <div className="bg-surface-container p-10 rounded-2xl border border-white/5 shadow-2xl space-y-10">
              <div className="flex flex-col md:flex-row md:items-center justify-between gap-6">
                 <h3 className="text-2xl font-headline font-black text-on-surface">Activation Function Output</h3>
                 <select 
                   value={activation} 
                   onChange={(e) => setActivation(e.target.value as ActivationType)}
                   className="bg-background/60 border border-white/10 px-6 py-3 rounded-lg text-sm font-black uppercase tracking-widest text-on-surface outline-none focus:ring-2 focus:ring-accent-teal transition-all"
                 >
                   {Object.keys(ActivationFunctions).map(f => <option key={f} value={f}>{f}</option>)}
                 </select>
              </div>

              <div className="text-center font-mono py-8 bg-background/20 rounded-xl space-y-4">
                 <p className="text-[10px] uppercase tracking-widest text-on-surface-variant">Non-Linear Pivot</p>
                 <p className="text-lg opacity-40">output = {activation}(z)</p>
                 <p className="text-xl md:text-2xl text-on-surface font-bold">
                    output = {activation}({z.toFixed(3)}) = <span className="text-accent-purple underline decoration-accent-purple/30 underline-offset-8">{a.toFixed(3)}</span>
                 </p>
              </div>

              <div className="h-[300px] w-full bg-background/20 rounded-xl p-4">
                 <ResponsiveContainer width="100%" height="100%">
                    <AreaChart data={activationData} margin={{ top: 20, right: 30, left: 10, bottom: 20 }}>
                       <defs>
                          <linearGradient id="colorYAct" x1="0" y1="0" x2="0" y2="1">
                             <stop offset="5%" stopColor="#a855f7" stopOpacity={0.4}/>
                             <stop offset="95%" stopColor="#a855f7" stopOpacity={0}/>
                          </linearGradient>
                       </defs>
                       <CartesianGrid strokeDasharray="3 3" stroke="rgba(255,255,255,0.05)" />
                       <XAxis dataKey="x" stroke="rgba(255,255,255,0.3)" fontSize={10} axisLine={true} tickLine={true} />
                       <YAxis stroke="rgba(255,255,255,0.3)" fontSize={10} axisLine={true} tickLine={true} />
                       <Tooltip content={<CustomTooltip />} />
                       <Area 
                        type="monotone" 
                        dataKey="y" 
                        stroke="#a855f7" 
                        strokeWidth={4} 
                        fill="url(#colorYAct)" 
                        animationDuration={1500}
                       />
                       <ReferenceDot x={z} y={a} r={7} fill="#ffffff" stroke="#a855f7" strokeWidth={4} />
                    </AreaChart>
                 </ResponsiveContainer>
              </div>
           </div>
        </div>
      </section>

      {/* Footer: Conceptual Depth */}
      <section className="grid grid-cols-1 lg:grid-cols-2 gap-12 pt-16 border-t border-white/5 items-start">
         
         <div className="space-y-8 bg-surface-container-low/30 p-10 rounded-2xl border border-white/5">
            <h3 className="text-3xl font-headline font-black text-on-surface tracking-tighter">How Neurons Connect</h3>
            <div className="space-y-6 text-on-surface-variant font-light text-editorial-justify leading-relaxed">
               <p>Neurons in a network are connected in layers, and the output of one neuron serves as the input to neurons in the next layer. Here’s how it works:</p>
               <ul className="space-y-6">
                  <li className="flex gap-4">
                     <div className="w-8 h-8 rounded-full bg-accent-teal/10 flex items-center justify-center shrink-0">
                        <CheckCircle2 className="w-4 h-4 text-accent-teal" />
                     </div>
                     <div>
                        <strong className="text-on-surface block mb-1">Output as Input</strong>
                        <p className="text-sm">The activation output of a neuron is passed directly as a feature value to neurons in the subsequent layer.</p>
                     </div>
                  </li>
                  <li className="flex gap-4">
                     <div className="w-8 h-8 rounded-full bg-accent-purple/10 flex items-center justify-center shrink-0">
                        <CheckCircle2 className="w-4 h-4 text-accent-purple" />
                     </div>
                     <div>
                        <strong className="text-on-surface block mb-1">Weighted Connections</strong>
                        <p className="text-sm">Each inter-layer link has its own weight, quantifying the influence of the previous transformation.</p>
                     </div>
                  </li>
                  <li className="flex gap-4">
                     <div className="w-8 h-8 rounded-full bg-blue-500/10 flex items-center justify-center shrink-0">
                        <CheckCircle2 className="w-4 h-4 text-blue-500" />
                     </div>
                     <div>
                        <strong className="text-on-surface block mb-1">Layer-by-Layer Transformation</strong>
                        <p className="text-sm">As data flows forward, neurons collectively transform raw noise into abstract, hierarchical representations.</p>
                     </div>
                  </li>
               </ul>
            </div>
         </div>

         <div className="space-y-8 bg-surface-container p-10 rounded-2xl border border-white/5 shadow-2xl">
            <div className="flex items-center gap-4 mb-4">
               <div className="p-3 bg-accent-teal/10 rounded-lg text-accent-teal">
                  <Info className="w-6 h-6" />
               </div>
               <h3 className="text-2xl font-headline font-black text-on-surface">Why Activation Functions?</h3>
            </div>
            
            <p className="text-on-surface-variant font-light italic leading-relaxed mb-8">
               "Without non-linearity, a million-layer neural network would just be a flattened linear regression. Activation functions are what allow machines to learn the curves of the universe."
            </p>

            <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
               <div className="space-y-3 p-6 bg-background/40 rounded-xl border border-white/5">
                  <span className="text-[10px] font-black uppercase text-accent-teal tracking-widest block">ReLU</span>
                  <p className="text-[11px] font-mono text-on-surface">f(x) = max(0, x)</p>
                  <p className="text-xs text-on-surface-variant leading-relaxed">Most common; helps learn non-linear patterns by zeroing out negative signals.</p>
               </div>
               <div className="space-y-3 p-6 bg-background/40 rounded-xl border border-white/5">
                  <span className="text-[10px] font-black uppercase text-accent-purple tracking-widest block">Sigmoid</span>
                  <p className="text-[11px] font-mono text-on-surface">f(x) = 1 / (1 + e⁻ˣ)</p>
                  <p className="text-xs text-on-surface-variant leading-relaxed">Squishes output to (0, 1), mapping results to statistical probabilities.</p>
               </div>
               <div className="space-y-3 p-6 bg-background/40 rounded-xl border border-white/5">
                  <span className="text-[10px] font-black uppercase text-blue-500 tracking-widest block">Tanh</span>
                  <p className="text-[11px] font-mono text-on-surface">f(x) = (eˣ - e⁻ˣ)/(eˣ + e⁻ˣ)</p>
                  <p className="text-xs text-on-surface-variant leading-relaxed">Similar to Sigmoid but ranges from (-1, 1), centering outputs around zero.</p>
               </div>
               <div className="space-y-3 p-6 bg-background/40 rounded-xl border border-white/5">
                  <span className="text-[10px] font-black uppercase text-on-surface tracking-widest block">Linear</span>
                  <p className="text-[11px] font-mono text-on-surface">f(x) = x</p>
                  <p className="text-xs text-on-surface-variant leading-relaxed">No transformation; typically used for raw regression at the output layer.</p>
               </div>
            </div>
         </div>
      </section>
    </div>
  );
};

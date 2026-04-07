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
  Label
} from "recharts";
import { ActivationFunctions, ActivationType, calculateWeightedSum } from "../../lib/neuronMath";
import { InlineMath } from "react-katex";
import { 
  Activity, 
  Info, 
  ChevronDown, 
  ChevronUp, 
  Plus
} from "lucide-react";
import { useTheme } from "../../hooks/useTheme";

const CustomTooltip = ({ active, payload, label }: any) => {
  if (active && payload && payload.length) {
    return (
      <div className="bg-bg-tertiary border border-border-premium p-3 rounded-xl shadow-2xl backdrop-blur-md">
        <p className="text-[10px] font-black uppercase tracking-widest text-slate-400 dark:text-slate-500 mb-1 font-mono">State Point</p>
        <p className="text-sm font-mono font-bold text-slate-900 dark:text-white">z: {parseFloat(label).toFixed(2)}</p>
        <p className="text-sm font-mono font-bold text-slate-900 dark:text-white">y: {payload[0].value.toFixed(2)}</p>
      </div>
    );
  }
  return null;
};

export const NeuronVisualizer = () => {
  const { theme } = useTheme();
  const [inputs, setInputs] = useState<number[]>([0.20, 0.60, -0.30]);
  const [weights, setWeights] = useState<number[]>([0.50, -0.30, 0.80]);
  const [bias] = useState<number>(0.0);
  const [activation, setActivation] = useState<ActivationType>("ReLU");
  const [showContributions, setShowContributions] = useState(true);
  const [isSlopeOpen, setIsSlopeOpen] = useState(false);

  const chartTheme = theme === 'dark' ? {
    grid: "rgba(255,255,255,0.05)",
    text: "rgba(255,255,255,0.4)",
    axis: "rgba(255,255,255,0.2)",
  } : {
    grid: "rgba(0,0,0,0.05)",
    text: "rgba(0,0,0,0.4)",
    axis: "rgba(0,0,0,0.2)",
  };

  const z = useMemo(() => calculateWeightedSum(inputs, weights, bias), [inputs, weights, bias]);
  const a = useMemo(() => ActivationFunctions[activation](z), [z, activation]);

  const totalSensitivity = useMemo(() => weights.reduce((sum, w) => sum + w, 0), [weights]);

  const slopeData = useMemo(() => {
    const data = [];
    for (let x = -6; x <= 6; x += 0.5) {
      data.push({
        x: x,
        total: x, 
        w1: weights[0] * x,
        w2: weights[1] * x,
        w3: weights[2] * x,
      });
    }
    return data;
  }, [weights]);

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
    <div className="max-w-7xl mx-auto space-y-16 py-12 animate-in fade-in duration-1000 transition-colors duration-500">
      
      {/* Header */}
      <section className="grid grid-cols-1 lg:grid-cols-2 gap-12 border-b border-border-premium pb-16">
        <div className="space-y-6">
          <h2 className="text-3xl font-headline font-black text-slate-900 dark:text-white tracking-tight">Understanding a Neural Network Neuron</h2>
          <p className="text-slate-600 dark:text-slate-400 text-lg font-light leading-relaxed">
            Neural networks are powerful tools in machine learning, and at their core are neurons, the basic computational units. A single neuron performs these key steps:
          </p>
          <ul className="space-y-4">
            <li className="flex items-start gap-4">
               <span className="w-1.5 h-6 bg-slate-900 dark:bg-white rounded-full mt-1"></span>
               <p className="text-slate-600 dark:text-slate-400 text-base"><strong className="text-slate-900 dark:text-white">Takes multiple inputs:</strong> These inputs represent features from your data.</p>
            </li>
            <li className="flex items-start gap-4">
               <span className="w-1.5 h-6 bg-slate-400 dark:bg-slate-600 rounded-full mt-1"></span>
               <p className="text-slate-600 dark:text-slate-400 text-base"><strong className="text-slate-900 dark:text-white">Applies weights:</strong> Each input is multiplied by a weight, determining its importance.</p>
            </li>
            <li className="flex items-start gap-4">
               <span className="w-1.5 h-6 bg-slate-200 dark:bg-slate-800 rounded-full mt-1"></span>
               <p className="text-slate-600 dark:text-slate-400 text-base"><strong className="text-slate-900 dark:text-white">Combines inputs:</strong> Weighted inputs are summed to produce a single value.</p>
            </li>
          </ul>
        </div>

        <div className="bg-bg-secondary dark:bg-slate-900 p-8 rounded-2xl border border-border-premium shadow-inner flex flex-col justify-center">
          <h3 className="text-[10px] font-black uppercase tracking-[0.4em] text-slate-400 dark:text-slate-500 mb-6 font-mono">Process Dynamics:</h3>
          <ul className="space-y-4">
            <li className="flex items-center gap-3 text-slate-600 dark:text-slate-400 font-light">
              <Plus className="w-4 h-4 text-slate-900 dark:text-white" />
              <span>Adjust inputs (-1 to 1) to simulate feature values</span>
            </li>
            <li className="flex items-center gap-3 text-slate-600 dark:text-slate-400 font-light">
              <Activity className="w-4 h-4 text-slate-400 dark:text-slate-500" />
              <span>Modify weights (-2 to 2) to change input importance</span>
            </li>
          </ul>
        </div>
      </section>

      {/* Main Interactive Core */}
      <section className="grid grid-cols-1 lg:grid-cols-12 gap-12">
        
        {/* Left Column */}
        <div className="lg:col-span-5 space-y-12">
          <div className="bg-bg-secondary dark:bg-slate-900 p-8 rounded-2xl border border-border-premium shadow-2xl space-y-8">
            <h3 className="text-xs font-black uppercase tracking-widest text-slate-900 dark:text-white mb-8 font-mono">Neuron Sandbox</h3>
            {inputs.map((input, i) => (
              <div key={i} className="space-y-6">
                <div className="flex justify-between items-center bg-bg-tertiary/30 p-4 rounded-xl border border-border-premium">
                   <div className="space-y-1 text-center flex-1 pr-4 border-r border-border-premium">
                      <span className="text-[9px] uppercase tracking-tighter text-slate-400 dark:text-slate-500 block font-mono">Input x{i+1}</span>
                      <span className="text-lg font-mono font-bold text-slate-900 dark:text-white">{input.toFixed(2)}</span>
                   </div>
                   <div className="space-y-1 text-center flex-1 pl-4">
                      <span className="text-[9px] uppercase tracking-tighter text-slate-400 dark:text-slate-500 block font-mono">Weight w{i+1}</span>
                      <span className="text-lg font-mono font-bold text-slate-400 dark:text-slate-500">{weights[i].toFixed(2)}</span>
                   </div>
                   <div className="pl-6 border-l border-border-premium text-right w-24">
                      <span className="text-[9px] uppercase tracking-tighter text-slate-400 dark:text-slate-500 block font-mono">Product</span>
                      <span className="text-xs font-mono font-bold text-slate-900 dark:text-white">{(input * weights[i]).toFixed(3)}</span>
                   </div>
                </div>
                <div className="grid grid-cols-2 gap-8">
                   <input type="range" min="-1" max="1" step="0.01" value={input} onChange={(e) => updateInput(i, parseFloat(e.target.value))} className="w-full appearance-none h-1.5 bg-slate-200 dark:bg-slate-800 rounded-full accent-slate-900 dark:accent-white cursor-pointer" />
                   <input type="range" min="-2" max="2" step="0.01" value={weights[i]} onChange={(e) => updateWeight(i, parseFloat(e.target.value))} className="w-full appearance-none h-1.5 bg-slate-200 dark:bg-slate-800 rounded-full accent-slate-400 dark:accent-slate-500 cursor-pointer" />
                </div>
              </div>
            ))}
          </div>

          <div className="bg-bg-secondary dark:bg-slate-900 p-8 rounded-2xl border border-border-premium shadow-2xl space-y-10">
             <div>
                <h4 className="text-[10px] font-black uppercase tracking-widest text-slate-400 dark:text-slate-500 mb-6 font-mono">Original Equation:</h4>
                <div className="p-6 bg-bg-tertiary/40 rounded-xl border border-border-premium text-center text-xl font-mono text-slate-900 dark:text-white">
                   <InlineMath math="Z = w_1x_1 + w_2x_2 + w_3x_3" />
                </div>
             </div>
             <div>
                <h4 className="text-[10px] font-black uppercase tracking-widest text-slate-400 dark:text-slate-500 mb-6 font-mono">Matrix Form:</h4>
                <div className="p-8 bg-bg-tertiary/40 rounded-xl border border-border-premium overflow-x-auto text-slate-900 dark:text-white font-mono text-base text-center">
                   <div className="flex items-center justify-center gap-4">
                      <span className="text-2xl font-light opacity-30">[</span>
                      {weights.map((w, i) => <span key={i} className="font-bold">{w.toFixed(2)}{i < weights.length - 1 ? " " : ""}</span>)}
                      <span className="text-2xl font-light opacity-30">]</span>
                      <span className="mx-2 text-xl opacity-30">·</span>
                      <div className="flex flex-col items-center border-l border-r border-border-premium px-3 py-1">
                        {inputs.map((x, i) => <span key={i} className="font-bold">{x.toFixed(2)}</span>)}
                      </div>
                      <span className="mx-2 text-xl opacity-30">=</span>
                      <span className="text-2xl font-black bg-white dark:bg-slate-950 text-slate-900 dark:text-white border-2 border-slate-900 dark:border-white px-4 py-2 rounded-lg">[{z.toFixed(3)}]</span>
                   </div>
                </div>
             </div>
          </div>
        </div>

        {/* Right Column */}
        <div className="lg:col-span-7 space-y-12">
           <div className="bg-bg-secondary dark:bg-slate-900 p-10 rounded-2xl border border-border-premium shadow-2xl space-y-8 transition-colors duration-500">
              <div className="flex items-center justify-between">
                 <h3 className="text-2xl font-headline font-black text-slate-900 dark:text-white">Weight Sum Calculation</h3>
                 <span className="px-4 py-1 bg-slate-100 dark:bg-slate-800 rounded-full text-[10px] font-black text-slate-900 dark:text-white uppercase tracking-widest border border-border-premium">Linear Base</span>
              </div>
              <div className="text-center font-mono py-6 border-b border-border-premium">
                 <p className="text-[10px] uppercase tracking-widest text-slate-400 dark:text-slate-500 mb-4">Functional Mapping</p>
                 <p className="text-lg opacity-40 text-slate-600 dark:text-slate-400 mb-2">Z = w₁x₁ + w₂x₂ + w₃x₃</p>
                 <p className="text-xl md:text-2xl text-slate-900 dark:text-white font-bold leading-relaxed">
                   z = ({weights[0].toFixed(2)}×{inputs[0].toFixed(2)}) + ({weights[1].toFixed(2)}×{inputs[1].toFixed(2)}) + ({weights[2].toFixed(2)}×{inputs[2].toFixed(2)}) = <span className="underline decoration-slate-400 dark:decoration-white/30 underline-offset-8">{z.toFixed(3)}</span>
                 </p>
              </div>

              <div className="border border-border-premium rounded-xl overflow-hidden bg-bg-tertiary/20">
                 <button onClick={() => setIsSlopeOpen(!isSlopeOpen)} className="w-full flex items-center justify-between p-6 hover:bg-bg-tertiary transition-colors">
                    <span className="text-[11px] font-black uppercase tracking-[0.2em] text-slate-900 dark:text-white">Slope Analysis</span>
                    {isSlopeOpen ? <ChevronUp className="w-4 h-4" /> : <ChevronDown className="w-4 h-4" />}
                 </button>
                 {isSlopeOpen && (
                   <div className="p-8 space-y-8 font-mono text-sm leading-relaxed border-t border-border-premium bg-bg-tertiary/10">
                      <div className="space-y-4">
                        <p className="text-[10px] font-black uppercase text-slate-400 dark:text-slate-500 mb-2">Partial Derivatives (Slopes):</p>
                        {weights.map((w, i) => (
                           <div key={i} className="flex justify-between items-center border-b border-border-premium pb-2">
                              <span>∂z/∂x{i+1} = w{i+1} = <span className="font-bold">{w.toFixed(3)}</span></span>
                              <span className="text-[10px] opacity-60">({w >= 0 ? "increases" : "decreases"} by {Math.abs(w).toFixed(3)} per unit)</span>
                           </div>
                        ))}
                      </div>
                      <div className="pt-6 border-t border-border-premium text-center">
                         <p className="text-xs">Total sensitivity: <span className="text-slate-900 dark:text-white font-black">{totalSensitivity.toFixed(3)}</span></p>
                      </div>
                   </div>
                 )}
              </div>

              <div className="space-y-6 pt-4">
                 <div className="flex items-center justify-between">
                    <label className="flex items-center gap-3 cursor-pointer group">
                       <div className={`w-10 h-6 rounded-full transition-colors relative flex items-center px-1 ${showContributions ? "bg-slate-900 dark:bg-white" : "bg-slate-200 dark:bg-slate-800"}`}>
                          <input type="checkbox" className="hidden" checked={showContributions} onChange={() => setShowContributions(!showContributions)} />
                          <div className={`w-4 h-4 bg-white dark:bg-black rounded-full transition-transform shadow-sm ${showContributions ? "translate-x-4" : "translate-x-0"}`} />
                       </div>
                       <span className="text-[11px] font-black uppercase tracking-widest text-slate-400 dark:text-slate-500 group-hover:text-slate-900 dark:group-hover:text-white transition-colors font-mono">Show Individual Contributions</span>
                    </label>
                 </div>
                 <div className="h-[300px] w-full bg-bg-tertiary/10 rounded-xl p-4 border border-border-premium">
                    <ResponsiveContainer width="100%" height="100%">
                       <LineChart data={slopeData} margin={{ top: 20, right: 30, left: 10, bottom: 20 }}>
                          <CartesianGrid strokeDasharray="3 3" stroke={chartTheme.grid} />
                          <XAxis dataKey="x" stroke={chartTheme.axis} fontSize={10} tick={{fill: chartTheme.text}} axisLine={true} tickLine={true}>
                             <Label value="Input Variable" offset={-10} position="insideBottom" fill={chartTheme.text} fontSize={9} />
                          </XAxis>
                          <YAxis stroke={chartTheme.axis} fontSize={10} tick={{fill: chartTheme.text}} axisLine={true} tickLine={true}>
                            <Label value="Weighted Sum" angle={-90} position="insideLeft" fill={chartTheme.text} fontSize={9} />
                          </YAxis>
                          <Tooltip content={<CustomTooltip />} />
                          {showContributions && (
                            <>
                              <Line type="monotone" dataKey="w1" stroke={theme === 'dark' ? '#fff' : '#000'} strokeWidth={1} dot={false} strokeOpacity={0.2} />
                              <Line type="monotone" dataKey="w2" stroke={theme === 'dark' ? '#fff' : '#000'} strokeWidth={1} dot={false} strokeOpacity={0.4} />
                              <Line type="monotone" dataKey="w3" stroke={theme === 'dark' ? '#fff' : '#000'} strokeWidth={1} dot={false} strokeOpacity={0.6} />
                            </>
                          )}
                          <Line type="monotone" dataKey="total" stroke={theme === 'dark' ? '#fff' : '#000'} strokeWidth={3} dot={false} />
                          <ReferenceDot x={z} y={z} r={6} fill={theme === 'dark' ? '#fff' : '#000'} stroke={theme === 'dark' ? '#000' : '#fff'} strokeWidth={2} isFront={true} />
                       </LineChart>
                    </ResponsiveContainer>
                 </div>
              </div>
           </div>

           <div className="bg-bg-secondary dark:bg-slate-900 p-10 rounded-2xl border border-border-premium shadow-2xl space-y-10 transition-colors duration-500">
              <div className="flex flex-col md:flex-row md:items-center justify-between gap-6">
                 <h3 className="text-2xl font-headline font-black text-slate-900 dark:text-white tracking-tight">Activation Function Output</h3>
                 <select value={activation} onChange={(e) => setActivation(e.target.value as ActivationType)} className="bg-bg-tertiary/60 border border-border-premium px-6 py-3 rounded-lg text-sm font-black uppercase tracking-widest text-slate-900 dark:text-white outline-none focus:ring-2 focus:ring-slate-400 transition-all">
                   {Object.keys(ActivationFunctions).map(f => <option key={f} value={f}>{f}</option>)}
                 </select>
              </div>
              <div className="text-center font-mono py-8 bg-bg-tertiary/20 rounded-xl space-y-4 border border-border-premium">
                 <p className="text-[10px] uppercase tracking-widest text-slate-400 dark:text-slate-500">Non-Linear Pivot</p>
                 <p className="text-xl md:text-2xl text-slate-900 dark:text-white font-black">
                    output = {activation}({z.toFixed(3)}) = <span className="underline decoration-slate-400 dark:decoration-white/30 underline-offset-8">{a.toFixed(3)}</span>
                 </p>
              </div>
              <div className="h-[300px] w-full bg-bg-tertiary/10 rounded-xl p-4 border border-border-premium">
                 <ResponsiveContainer width="100%" height="100%">
                    <AreaChart data={activationData} margin={{ top: 20, right: 30, left: 10, bottom: 20 }}>
                       <defs>
                          <linearGradient id="colorYAct" x1="0" y1="0" x2="0" y2="1">
                             <stop offset="5%" stopColor={theme === 'dark' ? '#fff' : '#000'} stopOpacity={0.3}/>
                             <stop offset="95%" stopColor={theme === 'dark' ? '#fff' : '#000'} stopOpacity={0}/>
                          </linearGradient>
                       </defs>
                       <CartesianGrid strokeDasharray="3 3" stroke={chartTheme.grid} />
                       <XAxis dataKey="x" stroke={chartTheme.axis} fontSize={10} axisLine={true} tickLine={true} tick={{fill: chartTheme.text}} />
                       <YAxis stroke={chartTheme.axis} fontSize={10} axisLine={true} tickLine={true} tick={{fill: chartTheme.text}} />
                       <Tooltip content={<CustomTooltip />} />
                       <Area type="monotone" dataKey="y" stroke={theme === 'dark' ? '#fff' : '#000'} strokeWidth={4} fill="url(#colorYAct)" animationDuration={1500} />
                       <ReferenceDot x={z} y={a} r={7} fill={theme === 'dark' ? '#fff' : '#000'} stroke={theme === 'dark' ? '#000' : '#fff'} strokeWidth={2} />
                    </AreaChart>
                 </ResponsiveContainer>
              </div>
           </div>
        </div>
      </section>
    </div>
  );
};

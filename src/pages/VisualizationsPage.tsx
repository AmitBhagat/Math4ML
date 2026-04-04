import React, { useState } from "react";
import { 
  ArrowLeft, 
  Cpu, 
  FlaskConical, 
  Grid3X3, 
  Sparkles, 
  Layers,
  ChevronRight,
  MonitorPlay,
  Share2
} from "lucide-react";
import { Link } from "react-router-dom";
import { NeuronVisualizer } from "@/src/components/visualizers/NeuronVisualizer";
import MatrixVisualizer from "@/src/components/MatrixVisualizer";
import { TopicVisualizer } from "@/src/components/MathematicalVisualizations";

type LabView = "portal" | "neuron" | "matrix" | "gallery";

const LabCard = ({ title, description, icon: Icon, onClick, colorClass, status }: any) => (
  <button 
    onClick={onClick}
    className="group relative bg-surface-container border border-white/5 p-10 md:p-12 rounded-2xl transition-all duration-700 hover:-translate-y-3 hover:bg-surface-container-high hover:shadow-[0_60px_100px_-20px_rgba(0,0,0,0.4)] flex flex-col items-start text-left overflow-hidden h-full"
  >
    <div className={`absolute top-0 right-0 w-64 h-64 -mr-24 -mt-24 rounded-full blur-[100px] opacity-10 transition-opacity group-hover:opacity-30 ${colorClass}`}></div>
    
    <div className={`w-16 h-16 rounded-2xl flex items-center justify-center mb-10 transition-transform group-hover:scale-110 duration-500 ${colorClass.replace('bg-', 'bg-').replace('blur-', '')} bg-opacity-10 text-on-surface shadow-2xl`}>
      <Icon className="w-8 h-8" />
    </div>

    <div className="flex items-center gap-4 mb-4">
       <span className="text-[10px] font-black uppercase tracking-[0.4em] text-on-surface-variant/40">Lab Module</span>
       {status && <span className="px-3 py-1 bg-accent-teal/5 text-accent-teal text-[9px] font-black uppercase tracking-widest rounded-full">{status}</span>}
    </div>

    <h3 className="text-3xl font-headline font-black text-on-surface mb-6 tracking-tight leading-none group-hover:text-white transition-colors">{title}</h3>
    
    <p className="text-on-surface-variant text-lg leading-relaxed mb-12 max-w-sm font-light">
      {description}
    </p>

    <div className="mt-auto flex items-center gap-3 text-xs font-black uppercase tracking-widest text-on-surface group-hover:text-accent-teal transition-colors">
      Initiate Experiment <ChevronRight className="w-4 h-4 group-hover:translate-x-2 transition-transform" />
    </div>
  </button>
);

export const VisualizationsPage = () => {
  const [activeView, setActiveView] = useState<LabView>("portal");

  const views = {
    portal: (
      <div className="space-y-32">
        <div className="max-w-4xl">
           <div className="inline-block py-1 px-4 mb-10 bg-surface-container-high rounded text-accent-teal font-black text-[10px] uppercase tracking-[0.25em] shadow-sm">
             The Artificial Laboratory
           </div>
           <h1 className="text-6xl md:text-8xl font-headline font-black tracking-tight text-on-surface leading-[0.9] mb-12">
             Curated <br/>
             <span className="text-accent-teal italic">Interactions.</span>
           </h1>
           <p className="text-xl md:text-2xl text-on-surface-variant font-light leading-relaxed max-w-2xl text-editorial-justify">
             A high-performance sandbox for investigating the mathematical structures of modern intelligence. Meticulously engineered for deep inquiry.
           </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
          <LabCard 
            title="Single Neuron Architect"
            description="The fundamental atomic unit of intelligence. Manipulate weights, biases, and activation functions to witness the birth of non-linear decision boundaries."
            icon={Cpu}
            colorClass="bg-accent-teal"
            status="Live Interaction"
            onClick={() => setActiveView("neuron")}
          />
          <LabCard 
            title="Matrix Operations Floor"
            description="A dedicated space for the linear manipulation of space. Addition, multiplication, and scalar transformations visualized through a formal lens."
            icon={Grid3X3}
            colorClass="bg-accent-purple"
            status="Arithmetic Visualizer"
            onClick={() => setActiveView("matrix")}
          />
          <LabCard 
            title="SVD & Eigen Gallery"
            description="Explore the spectral decomposition of reality. A curated gallery of geometric transformations including Principal components and manifold projections."
            icon={Layers}
            colorClass="bg-blue-500"
            status="Geometric Lab"
            onClick={() => setActiveView("gallery")}
          />
          <div className="hidden lg:flex items-center justify-center p-12 border border-white/5 border-dashed rounded-2xl bg-surface-container-low opacity-40">
             <div className="text-center">
                <Sparkles className="w-12 h-12 text-on-surface-variant mb-6 mx-auto opacity-20" />
                <p className="text-xs font-black uppercase tracking-[0.3em] text-on-surface-variant/50">More modules loading...</p>
             </div>
          </div>
        </div>
      </div>
    ),
    neuron: (
      <div className="space-y-16">
        <button 
          onClick={() => setActiveView("portal")}
          className="flex items-center gap-3 text-xs font-black uppercase tracking-widest text-on-surface-variant hover:text-accent-teal transition-colors"
        >
          <ArrowLeft className="w-5 h-5" /> Back to Laboratory
        </button>
        <div className="max-w-7xl mx-auto">
          <NeuronVisualizer />
        </div>
      </div>
    ),
    matrix: (
      <div className="space-y-16">
        <button 
          onClick={() => setActiveView("portal")}
          className="flex items-center gap-3 text-xs font-black uppercase tracking-widest text-on-surface-variant hover:text-accent-teal transition-colors"
        >
          <ArrowLeft className="w-5 h-5" /> Back to Laboratory
        </button>
        <div className="max-w-5xl mx-auto">
           <MatrixVisualizer />
        </div>
      </div>
    ),
    gallery: (
      <div className="space-y-16">
        <button 
          onClick={() => setActiveView("portal")}
          className="flex items-center gap-3 text-xs font-black uppercase tracking-widest text-on-surface-variant hover:text-accent-teal transition-colors"
        >
          <ArrowLeft className="w-5 h-5" /> Back to Laboratory
        </button>
        <div className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-3 gap-12">
           {["Vectors", "SVD", "Eigenvalues", "Determinants", "Gradients", "Distributions"].map(topic => (
             <div key={topic} className="bg-surface-container border border-white/5 rounded-2xl overflow-hidden flex flex-col shadow-xl">
                <div className="aspect-[4/3] bg-surface-container-high relative overflow-hidden group">
                   <TopicVisualizer topicId={topic} />
                   <div className="absolute inset-0 bg-accent-teal/5 opacity-0 group-hover:opacity-100 transition-opacity"></div>
                </div>
                <div className="p-8">
                   <h4 className="text-xl font-headline font-black text-on-surface mb-3 tracking-tighter">{topic}</h4>
                   <p className="text-on-surface-variant text-sm font-light mb-6">Interactive geometric properties of {topic.toLowerCase()}.</p>
                   <Link 
                     to={`/mathematics/linear-algebra/${topic}`}
                     className="text-[10px] font-black uppercase tracking-widest text-accent-teal flex items-center gap-2 hover:translate-x-2 transition-transform"
                   >
                     View Proof <MonitorPlay className="w-3 h-3" />
                   </Link>
                </div>
             </div>
           ))}
        </div>
      </div>
    )
  };

  return (
    <div className="min-h-screen py-24 md:py-32 px-8 md:px-16 bg-background selection:bg-accent-teal selection:text-white">
      <div className="max-w-7xl mx-auto">
         {views[activeView]}
      </div>
    </div>
  );
};

import React from "react";
import { cn } from "@/src/lib/utils";

interface MathSectionProps {
  title: string;
  description: string;
  children: React.ReactNode;
  id?: string;
}

export const MathSection = ({ title, description, children, id }: MathSectionProps) => {
  return (
    <section id={id} className="py-12 border-b border-zinc-800 last:border-0">
      <h2 className="text-3xl font-bold text-zinc-100 mb-4 tracking-tight">{title}</h2>
      <p className="text-zinc-400 text-lg mb-8 leading-relaxed">{description}</p>
      <div className="space-y-6">{children}</div>
    </section>
  );
};

export const FormulaBlock = ({ children }: { children: React.ReactNode }) => {
  return (
    <div className="my-6 p-6 bg-zinc-900/50 border border-zinc-800 rounded-xl flex items-center justify-center text-xl font-mono text-blue-400 italic">
      {children}
    </div>
  );
};

export const VisualizerContainer = ({ title }: { title: string }) => {
  return (
    <div className="relative w-full h-full bg-zinc-900 border-l border-zinc-800 flex items-center justify-center overflow-hidden">
      <div className="absolute inset-0 opacity-20 bg-[radial-gradient(circle_at_center,_var(--tw-gradient-stops))] from-blue-500/20 via-transparent to-transparent" />
      <div className="z-10 text-center p-8">
        <div className="w-16 h-16 bg-blue-500/10 rounded-full flex items-center justify-center mx-auto mb-4 border border-blue-500/20">
          <div className="w-8 h-8 bg-blue-500 rounded-full animate-pulse" />
        </div>
        <h3 className="text-xl font-semibold text-zinc-100 mb-2">{title}</h3>
        <p className="text-zinc-500 max-w-xs mx-auto">
          Coming Soon: Three.js/D3 visualization for this topic.
        </p>
      </div>
    </div>
  );
};

export const CodeSnippet = ({ code, language = "python" }: { code: string; language?: string }) => {
  return (
    <div className="my-6 rounded-xl overflow-hidden border border-zinc-800 bg-zinc-950">
      <div className="px-4 py-2 bg-zinc-900 border-b border-zinc-800 flex items-center justify-between">
        <span className="text-xs font-mono text-zinc-500 uppercase tracking-widest">{language}</span>
        <div className="flex gap-1.5">
          <div className="w-2.5 h-2.5 rounded-full bg-zinc-800" />
          <div className="w-2.5 h-2.5 rounded-full bg-zinc-800" />
          <div className="w-2.5 h-2.5 rounded-full bg-zinc-800" />
        </div>
      </div>
      <pre className="p-6 overflow-x-auto text-sm font-mono text-zinc-300 leading-relaxed">
        <code>{code}</code>
      </pre>
    </div>
  );
};

import React from "react";
import { Link } from "react-router-dom";
import { 
  ArrowRight,
  Sparkles,
  CircuitBoard,
  BookOpen,
  ChevronRight,
  BrainCircuit
} from "lucide-react";
import { motion } from "framer-motion";
import { CURRICULUM_TREE } from "../data/curriculumTree";
import { cn } from "../lib/utils";

const FadeIn = ({ children, delay = 0, y = 20 }: { children: React.ReactNode, delay?: number, y?: number }) => (
  <motion.div
    initial={{ opacity: 0, y }}
    animate={{ opacity: 1, y: 0 }}
    transition={{ duration: 0.8, delay, ease: [0.16, 1, 0.3, 1] }}
  >
    {children}
  </motion.div>
);

const RoadmapCard = ({ cluster, index }: { cluster: any, index: number }) => {
  return (
    <FadeIn delay={0.2 + index * 0.1}>
      <div className="group relative bg-white dark:bg-zinc-900 border border-black/5 dark:border-white/5 rounded-3xl p-8 lg:p-12 shadow-sm hover:shadow-2xl transition-all duration-700 hover:-translate-y-2 overflow-hidden h-full flex flex-col">
        {/* Background Accent */}
        <div className="absolute top-0 right-0 w-64 h-64 bg-accent/5 blur-3xl -translate-y-1/2 translate-x-1/2 rounded-full group-hover:bg-accent/10 transition-colors" />
        
        <div className="relative z-10 flex-1">
          <div className="flex items-center gap-4 mb-8">
            <div className="size-14 rounded-2xl bg-accent/10 flex items-center justify-center text-accent">
              {cluster.id === 'mathematics' ? <CircuitBoard className="size-8" /> : <BrainCircuit className="size-8" />}
            </div>
            <div>
              <h3 className="text-3xl font-headline font-black text-on-surface tracking-tight">
                {cluster.title}
              </h3>
              <p className="text-sm font-bold uppercase tracking-widest text-muted-premium opacity-40">
                Track {index + 1}
              </p>
            </div>
          </div>

          <div className="space-y-6 mb-12">
            {cluster.categories.slice(0, 4).map((cat: any) => (
              <Link 
                key={cat.id}
                to={`/${cluster.id}/${cat.id}`}
                className="group/item flex items-center justify-between p-4 rounded-xl hover:bg-black/[0.03] dark:hover:bg-white/[0.03] transition-all"
              >
                <div className="flex items-center gap-4">
                  <div className="size-2 rounded-full bg-accent scale-50 group-hover/item:scale-100 transition-transform" />
                  <span className="font-bold text-on-surface/80 group-hover/item:text-on-surface transition-colors">
                    {cat.title}
                  </span>
                </div>
                <ChevronRight className="size-4 text-muted-premium opacity-0 group-hover/item:opacity-100 -translate-x-2 group-hover/item:translate-x-0 transition-all" />
              </Link>
            ))}
          </div>
        </div>

        <Link
          to={`/${cluster.id}`}
          className="relative z-10 w-full py-5 bg-on-surface text-white dark:bg-white dark:text-black rounded-2xl font-black uppercase tracking-widest text-center hover:bg-accent dark:hover:bg-accent dark:hover:text-white transition-all flex items-center justify-center gap-3 group/btn"
        >
          Explore Curriculum
          <ArrowRight className="size-5 group-hover/btn:translate-x-2 transition-transform" />
        </Link>
      </div>
    </FadeIn>
  );
};

export const HomePage = () => {
  return (
    <div className="min-h-screen bg-bg-primary">
      {/* ─── Hero Section (Full Width) ─── */}
      <section className="relative pt-32 pb-48 px-6 md:px-12 lg:px-24 overflow-hidden border-b border-black/5 dark:border-white/5">
        {/* Animated Background Mesh */}
        <div className="absolute inset-0 z-0 opacity-[0.03] pointer-events-none">
          <div className="absolute inset-0 bg-[radial-gradient(#000_1px,transparent_1px)] dark:bg-[radial-gradient(#fff_1px,transparent_1px)] [background-size:40px_40px] [mask-image:radial-gradient(ellipse_60%_50%_at_50%_50%,#000_70%,transparent_100%)]"></div>
        </div>

        <div className="max-w-screen-2xl mx-auto relative z-10">
          <FadeIn>
            <div className="inline-flex items-center gap-3 px-4 py-2 rounded-full bg-accent/10 border border-accent/20 text-accent text-xs font-black uppercase tracking-widest mb-10">
              <Sparkles className="size-4 animate-pulse" />
              Mathematical Intelligence v2.0
            </div>
          </FadeIn>

          <div className="grid lg:grid-cols-2 gap-20 items-end">
            <div>
              <FadeIn delay={0.1}>
                <h1 className="text-6xl md:text-8xl font-headline font-black text-on-surface leading-[0.9] tracking-tighter mb-10">
                  MATH <span className="text-accent italic">4</span> ML
                </h1>
              </FadeIn>
              <FadeIn delay={0.2}>
                <p className="text-2xl md:text-3xl text-muted-premium font-medium leading-relaxed max-w-2xl">
                  The definitive portal for mastering the <span className="text-on-surface font-black underline decoration-accent/30 underline-offset-8">theoretical bedrock</span> of Artificial Intelligence.
                </p>
              </FadeIn>
            </div>

            <FadeIn delay={0.3}>
              <div className="flex flex-wrap gap-8 items-center border-l border-black/10 dark:border-white/10 pl-8 py-4">
                <div className="space-y-1">
                  <div className="text-3xl font-black text-on-surface">100+</div>
                  <div className="text-[10px] uppercase font-black tracking-[0.2em] text-muted-premium">Technical Topics</div>
                </div>
                <div className="w-px h-10 bg-black/10 dark:bg-white/10" />
                <div className="space-y-1">
                  <div className="text-3xl font-black text-on-surface">19</div>
                  <div className="text-[10px] uppercase font-black tracking-[0.2em] text-muted-premium">Focused Labs</div>
                </div>
                <div className="w-px h-10 bg-black/10 dark:bg-white/10" />
                <div className="space-y-1">
                  <div className="text-3xl font-black text-on-surface">∞</div>
                  <div className="text-[10px] uppercase font-black tracking-[0.2em] text-muted-premium">Deep Insight</div>
                </div>
              </div>
            </FadeIn>
          </div>
        </div>
      </section>

      {/* ─── Roadmap Portal ─── */}
      <section className="px-6 md:px-12 lg:px-24 -translate-y-24 relative z-20">
        <div className="max-w-screen-2xl mx-auto">
          <div className="grid md:grid-cols-2 gap-12">
            {CURRICULUM_TREE.map((cluster, idx) => (
              <RoadmapCard key={cluster.id} cluster={cluster} index={idx} />
            ))}
          </div>
        </div>
      </section>

      {/* ─── Footer Teaser ─── */}
      <section className="py-32 px-6 text-center">
        <FadeIn>
          <div className="inline-flex items-center gap-6 text-muted-premium/40 uppercase tracking-[0.4em] text-[10px] font-bold">
            <div className="w-12 h-px bg-current" />
            Theoretical Frameworks // Applied Logic
            <div className="w-12 h-px bg-current" />
          </div>
        </FadeIn>
      </section>
    </div>
  );
};

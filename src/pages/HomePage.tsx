import React, { ReactNode } from "react";
import { Link } from "react-router-dom";
import { 
  Layers, 
  FunctionSquare, 
  BarChart3, 
  Dice5, 
  Target, 
  Sparkles
} from "lucide-react";
import { motion } from "motion/react";
import { CLUSTERS } from "@/src/data/topics";
import { CurriculumCard } from "../components/CurriculumCard";

const FadeIn = ({ children, delay = 0, y = 20 }: { children: ReactNode, delay?: number, y?: number, key?: any }) => (
  <motion.div
    initial={{ opacity: 0, y }}
    whileInView={{ opacity: 1, y: 0 }}
    viewport={{ once: true }}
    transition={{ duration: 0.8, delay, ease: [0.16, 1, 0.3, 1] }}
  >
    {children}
  </motion.div>
);

const SectionHeading = ({ title, subtitle }: { title: string, subtitle?: string }) => (
  <FadeIn>
    <div className="mb-8">
      <h2 className="text-4xl md:text-4xl font-headline font-semibold text-text-premium mb-3">{title}</h2>
      {subtitle && <p className="text-muted-premium max-w-2xl text-base font-normal leading-relaxed">{subtitle}</p>}
      <div className="w-12 h-1 bg-accent/20 rounded-full mt-3"></div>
    </div>
  </FadeIn>
);



export const HomePage = () => {
  return (
    <div className="min-h-screen pb-32">
      {/* Background Vector Field */}
      <div className="fixed inset-0 z-[-1] opacity-[0.03] pointer-events-none">
        <div className="absolute inset-0 vector-field-bg"></div>
      </div>
      
      {/* Hero Section */}
      <section className="relative pt-0 pb-0 px-8 md:px-16 max-w-7xl mx-auto overflow-hidden">
        <div className="max-w-4xl relative z-10">
          <FadeIn>
            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-accent/10 border border-accent/20 text-accent text-[12px] uppercase font-bold tracking-widest mb-6">
              <Sparkles className="w-3 h-3" />
              Machine Learning Logic
            </div>
          </FadeIn>
          
          <FadeIn delay={0.1}>
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-headline font-semibold text-text-premium leading-[1.1] mb-6 tracking-tight">
              Welcome to <span className="text-accent italic">Math 4 ML</span>
            </h1>
          </FadeIn>
          
          <FadeIn delay={0.2}>
            <p className="text-2xl md:text-3xl text-muted-premium font-normal leading-relaxed max-w-3xl mb-0">
              Your dedicated gateway to mastering the <span className="text-text-premium font-medium">mathematical foundations</span> that power modern Artificial Intelligence.
            </p>
          </FadeIn>


        </div>

        {/* Abstract Geometry Decoration */}
        <div className="hidden lg:block absolute right-[-5%] top-1/2 -translate-y-1/2 w-1/3 aspect-square opacity-20 blur-3xl bg-accent rounded-full animate-pulse pointer-events-none"></div>
      </section>


      {/* Core Pillars Section */}
      <section id="pillars" className="px-8 md:px-16 pt-8 pb-16 bg-bg-secondary/30 relative">
        <div className="max-w-7xl mx-auto">
          <SectionHeading 
            title="Our Core Pillars" 
            subtitle="Bridging the gap between abstract theory and practical implementation across the four essential branches of intelligence."
          />

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12 px-4">
            <FadeIn delay={0.1}>
              <CurriculumCard 
                title="Linear Algebra"
                description="The language of data. Learn how matrices represent datasets and how PCA reduces complexity."
                icon={Layers}
                href="/mathematics/linear-algebra"
                categoryId="linear-algebra"
              />
            </FadeIn>
            <FadeIn delay={0.2}>
              <CurriculumCard 
                title="Calculus"
                description="The engine of learning. Understand how gradients allow algorithms like Backpropagation to minimize error."
                icon={FunctionSquare}
                href="/mathematics/calculus"
                categoryId="calculus"
              />
            </FadeIn>
            <FadeIn delay={0.3}>
              <CurriculumCard 
                title="Probability & Stats"
                description="The framework of uncertainty. Master how models make predictions and deal with noise."
                icon={Dice5}
                href="/mathematics/probability"
                categoryId="probability"
              />
            </FadeIn>
            <FadeIn delay={0.4}>
              <CurriculumCard 
                title="Optimization"
                description="The path to efficiency. Dive into how algorithms find the best parameters via Gradient Descent."
                icon={Target}
                href="/mathematics/calculus/gradient-descent"
                categoryId="calculus"
              />
            </FadeIn>
          </div>
        </div>
      </section>



    </div>
  );
};

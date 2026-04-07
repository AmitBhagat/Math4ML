import React, { ReactNode, CSSProperties } from "react";
import { Link } from "react-router-dom";
import { 
  ArrowRight, 
  Layers, 
  FunctionSquare, 
  BarChart3, 
  Dice5, 
  Target, 
  Sparkles
} from "lucide-react";
import { motion } from "motion/react";
import { CLUSTERS } from "@/src/data/topics";
import { getCategoryTheme } from "@/src/lib/themeUtils";

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

const PillarCard = ({ title, description, icon: Icon, link, delay, categoryId }: { title: string, description: string, icon: any, link: string, delay: number, categoryId: string }) => {
  const theme = getCategoryTheme(categoryId);
  
  return (
    <FadeIn delay={delay}>
      <Link 
        to={link}
        className="group flex flex-col h-full bg-bg-secondary rounded-2xl transition-all duration-500 hover:-translate-y-2 border border-border-premium/50 relative overflow-hidden"
        style={{ 
          '--accent-color': theme.primary,
          '--bg-tint': `${theme.primary}08`,
          '--bg-tint-hover': `${theme.primary}12`,
        } as CSSProperties}
      >
        {/* Top Accent Bar */}
        <div 
          className="absolute top-0 left-0 right-0 h-1.5 transition-all duration-500 opacity-60 group-hover:opacity-100"
          style={{ backgroundColor: theme.primary }}
        />

        <div className="p-8 flex flex-col h-full relative z-10 transition-colors duration-500 group-hover:bg-[var(--bg-tint-hover)]">
          <div 
            className="w-12 h-12 rounded-xl flex items-center justify-center mb-6 group-hover:scale-110 transition-transform duration-500 shadow-sm"
            style={{ backgroundColor: `${theme.primary}15`, color: theme.primary }}
          >
            <Icon className="w-6 h-6" />
          </div>

          <h3 className="text-2xl font-headline font-semibold text-text-premium mb-3 transition-colors group-hover:text-text-premium">
            {title}
          </h3>
          <p className="text-base text-muted-premium leading-relaxed mb-6 font-normal">{description}</p>
          
          <div 
            className="mt-auto flex items-center gap-2 text-sm font-semibold uppercase tracking-widest opacity-0 group-hover:opacity-100 translate-x-[-10px] group-hover:translate-x-0 transition-all duration-500"
            style={{ color: theme.primary }}
          >
            Explore Module <ArrowRight className="w-3 h-3" />
          </div>
        </div>

        {/* Hover Shadow Effect */}
        <div 
          className="absolute inset-0 opacity-0 group-hover:opacity-10 transition-opacity pointer-events-none"
          style={{ boxShadow: `0 30px 60px -10px ${theme.primary}` }}
        />
      </Link>
    </FadeIn>
  );
};


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

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            <PillarCard 
              title="Linear Algebra"
              description="The language of data. Learn how matrices represent datasets and how PCA reduces complexity."
              icon={Layers}
              link="/mathematics/linear-algebra"
              delay={0.1}
              categoryId="linear-algebra"
            />
            <PillarCard 
              title="Calculus"
              description="The engine of learning. Understand how gradients allow algorithms like Backpropagation to minimize error."
              icon={FunctionSquare}
              link="/mathematics/calculus"
              delay={0.2}
              categoryId="calculus"
            />
            <PillarCard 
              title="Probability & Stats"
              description="The framework of uncertainty. Master how models make predictions and deal with noise."
              icon={Dice5}
              link="/mathematics/probability"
              delay={0.3}
              categoryId="probability"
            />
            <PillarCard 
              title="Optimization"
              description="The path to efficiency. Dive into how algorithms find the best parameters via Gradient Descent."
              icon={Target}
              link="/mathematics/calculus/gradient-descent"
              delay={0.4}
              categoryId="calculus"
            />
          </div>
        </div>
      </section>



    </div>
  );
};

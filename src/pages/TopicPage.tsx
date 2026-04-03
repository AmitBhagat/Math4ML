import { useEffect, useRef } from "react";
import { motion, AnimatePresence } from "motion/react";
import { 
  MathSection, 
  FormulaBlock, 
  VisualizerContainer, 
  CodeSnippet 
} from "@/src/components/MathComponents";
import { useStore } from "@/src/store/useStore";

interface TopicContent {
  id: string;
  title: string;
  description: string;
  formula?: string;
  code?: string;
  details: string[];
}

interface TopicPageProps {
  topicTitle: string;
  sections: TopicContent[];
}

export const TopicPage = ({ topicTitle, sections }: TopicPageProps) => {
  const { currentSubTopic, setSubTopic } = useStore();
  const scrollRef = useRef<HTMLDivElement>(null);

  // Intersection Observer to update current sub-topic on scroll
  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            setSubTopic(entry.target.id);
          }
        });
      },
      { threshold: 0.5, rootMargin: "-10% 0px -80% 0px" }
    );

    const sectionElements = document.querySelectorAll("section[id]");
    sectionElements.forEach((el) => observer.observe(el));

    return () => observer.disconnect();
  }, [setSubTopic]);

  return (
    <div className="grid grid-cols-1 lg:grid-cols-2 min-h-screen">
      {/* Left Column: Prose */}
      <div ref={scrollRef} className="p-8 lg:p-16 max-w-3xl mx-auto lg:mx-0">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
        >
          <span className="text-blue-500 font-mono text-sm tracking-widest uppercase mb-2 block">
            Curriculum / {topicTitle}
          </span>
          <h1 className="text-5xl font-extrabold text-zinc-100 mb-12 tracking-tight">
            {topicTitle}
          </h1>

          <div className="space-y-4">
            {sections.map((section) => (
              <MathSection 
                key={section.id} 
                id={section.id}
                title={section.title} 
                description={section.description}
              >
                {section.formula && (
                  <FormulaBlock>{section.formula}</FormulaBlock>
                )}
                
                <div className="prose prose-invert max-w-none">
                  {section.details.map((detail, idx) => (
                    <p key={idx} className="text-zinc-400 leading-relaxed mb-4">
                      {detail}
                    </p>
                  ))}
                </div>

                {section.code && (
                  <CodeSnippet code={section.code} />
                )}
              </MathSection>
            ))}
          </div>
        </motion.div>
      </div>

      {/* Right Column: Visualizer (Sticky) */}
      <div className="hidden lg:block relative">
        <div className="sticky top-0 h-screen w-full">
          <AnimatePresence mode="wait">
            <motion.div
              key={currentSubTopic}
              initial={{ opacity: 0, scale: 0.95 }}
              animate={{ opacity: 1, scale: 1 }}
              exit={{ opacity: 0, scale: 1.05 }}
              transition={{ duration: 0.4, ease: "easeOut" }}
              className="w-full h-full"
            >
              <VisualizerContainer title={currentSubTopic} />
            </motion.div>
          </AnimatePresence>
        </div>
      </div>
    </div>
  );
};

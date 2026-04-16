import React, { useEffect, useState } from "react";
import { useParams, Link } from "react-router-dom";
import { motion, AnimatePresence } from "framer-motion";
import { cn } from "../lib/utils";
import { getCategoryData, CLUSTERS } from "../data/topics";
import { CategoryData } from "../data/types";
import { getCategoryTheme } from "../lib/themeUtils";

export const TechnicalSpine = () => {
  const { clusterId: paramClusterId, categoryId, problemId } = useParams();
  const [category, setCategory] = useState<CategoryData | null>(null);
  const [isVisible, setIsVisible] = useState(false);

  const cluster = CLUSTERS.find(c => c.id === paramClusterId) || 
                  CLUSTERS.find(c => c.categories.includes(categoryId || ''));
  const clusterId = cluster?.id || paramClusterId;

  useEffect(() => {
    if (categoryId) {
      getCategoryData(categoryId).then((data) => {
        setCategory(data);
        setIsVisible(!!problemId);
      });
    } else {
      setIsVisible(false);
      setCategory(null);
    }
  }, [categoryId, problemId]);

  if (!isVisible || !category) return null;

  const theme = getCategoryTheme(categoryId || "");

  return (
    <AnimatePresence>
      <motion.nav
        initial={{ opacity: 0, x: -20 }}
        animate={{ opacity: 1, x: 0 }}
        exit={{ opacity: 0, x: -20 }}
        className="fixed left-6 top-1/2 -translate-y-1/2 z-40 hidden 2xl:flex flex-col items-center gap-4"
      >
        {/* The Vertical Rail */}
        <div className="relative w-[1px] h-[300px] bg-border-premium/50 flex flex-col justify-between py-2">
          {category.sections.map((section, idx) => {
            const isActive = problemId === section.id;
            return (
              <Link
                key={section.id}
                to={`/${clusterId}/${categoryId}/${section.id}`}
                className="relative group flex items-center"
              >
                {/* Connection Node */}
                <div 
                  className={cn(
                    "absolute left-1/2 -translate-x-1/2 w-2 h-2 rounded-full border border-border-premium transition-all duration-300",
                    isActive ? "scale-125 bg-accent border-accent shadow-[0_0_10px_rgba(var(--accent-rgb),0.5)]" : "bg-bg-secondary group-hover:border-accent group-hover:bg-accent/20"
                  )}
                  style={isActive ? { backgroundColor: theme.primary, borderColor: theme.primary } : {}}
                />
                
                {/* Topic Label (Revealed on Hover or if Active) */}
                <div className={cn(
                  "absolute left-6 whitespace-nowrap px-3 py-1 rounded bg-bg-secondary/80 backdrop-blur-sm border border-border-premium text-[10px] font-black uppercase tracking-widest transition-all duration-300",
                  isActive ? "opacity-100 translate-x-0 text-on-surface" : "opacity-0 -translate-x-2 group-hover:opacity-100 group-hover:translate-x-0 text-muted-premium"
                )}>
                  {section.title}
                </div>

                {/* Index Number */}
                <div className="absolute right-6 text-[8px] font-mono text-muted-premium opacity-30 font-bold">
                  {String(idx + 1).padStart(2, '0')}
                </div>
              </Link>
            );
          })}
        </div>

        {/* Category Label at the Bottom */}
        <div className="mt-8 vertical-text text-[9px] font-black uppercase tracking-[0.4em] text-muted-premium opacity-40 select-none">
            Curriculum Structure // {category.title}
        </div>
      </motion.nav>
    </AnimatePresence>
  );
};

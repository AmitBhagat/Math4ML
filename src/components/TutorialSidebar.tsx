import { useState, useEffect } from "react";
import { Link, useLocation } from "react-router-dom";
import { motion, AnimatePresence } from "framer-motion";
import { ChevronRight, BookOpen, Layers, Terminal } from "lucide-react";
import { CURRICULUM_TREE } from "../data/curriculumTree";
import { cn } from "../lib/utils";

const SidebarItem = ({ clusterId, category, isActiveCategory }: any) => {
  const [isOpen, setIsOpen] = useState(isActiveCategory);
  const location = useLocation();

  // Keep open if a child is active
  useEffect(() => {
    if (isActiveCategory) setIsOpen(true);
  }, [isActiveCategory]);

  return (
    <div className="mb-2">
      <button
        onClick={() => setIsOpen(!isOpen)}
        className={cn(
          "w-full flex items-center justify-between px-4 py-2 text-sm font-semibold rounded-lg transition-all",
          isActiveCategory 
            ? "text-accent bg-accent/5" 
            : "text-on-surface hover:bg-black/5 dark:hover:bg-white/5"
        )}
      >
        <span className="flex items-center gap-2 truncate">
          <BookOpen className="size-4 shrink-0" />
          {category.title}
        </span>
        <ChevronRight className={cn(
          "size-4 shrink-0 transition-transform duration-300",
          isOpen ? "rotate-90 text-accent" : "opacity-40"
        )} />
      </button>

      <AnimatePresence initial={false}>
        {isOpen && (
          <motion.div
            initial={{ height: 0, opacity: 0 }}
            animate={{ height: "auto", opacity: 1 }}
            exit={{ height: 0, opacity: 0 }}
            transition={{ duration: 0.3, ease: [0.16, 1, 0.3, 1] }}
            className="overflow-hidden bg-black/[0.02] dark:bg-white/[0.01] rounded-b-lg"
          >
            <div className="pt-1 pb-2 pl-4 space-y-0.5 border-l-2 border-black/5 dark:border-white/10 ml-6 mt-1">
              {category.topics.map((topic: any) => {
                const topicPath = `/${clusterId}/${category.id}/${topic.id}`;
                const isActive = location.pathname === topicPath;
                
                return (
                  <Link
                    key={topic.id}
                    to={topicPath}
                    className={cn(
                      "block px-4 py-1.5 text-[13px] border-l-2 -ml-[2px] transition-all",
                      isActive
                        ? "text-accent font-bold border-accent bg-accent/5"
                        : "text-muted-premium border-transparent hover:text-on-surface hover:bg-black/5 dark:hover:bg-white/5"
                    )}
                  >
                    {topic.title}
                  </Link>
                );
              })}
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
};

export const TutorialSidebar = () => {
  const location = useLocation();

  return (
    <aside className="w-[300px] h-[calc(100vh-64px)] fixed left-0 top-16 bg-white dark:bg-zinc-950 border-r border-black/5 dark:border-white/5 overflow-y-auto z-40 custom-scrollbar hidden lg:block">
      <div className="p-6">
        {CURRICULUM_TREE.map((cluster) => {
          const isClusterInPath = location.pathname.includes(`/${cluster.id}`);

          return (
            <div key={cluster.id} className="mb-8">
              <div className="px-4 py-2 mb-3 flex items-center gap-2 text-[11px] font-black uppercase tracking-[0.2em] text-muted-premium select-none border-b border-black/5 dark:border-white/5">
                <Layers className="size-3" />
                {cluster.title}
              </div>
              
              <div className="space-y-1">
                {cluster.categories.map((category) => {
                  const isActiveCategory = location.pathname.includes(`/${cluster.id}/${category.id}`);
                  
                  return (
                    <SidebarItem 
                      key={category.id}
                      clusterId={cluster.id}
                      category={category}
                      isActiveCategory={isActiveCategory}
                    />
                  );
                })}
              </div>
            </div>
          );
        })}

      </div>
    </aside>
  );
};

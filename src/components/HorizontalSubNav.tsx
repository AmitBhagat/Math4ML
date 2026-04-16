import { NavLink } from "react-router-dom";
import { CURRICULUM_TREE } from "../data/curriculumTree";
import { cn } from "../lib/utils";

export const HorizontalSubNav = () => {
  return (
    <div className="sticky top-0 z-30 w-full bg-white dark:bg-zinc-950 border-b border-black/5 dark:border-white/5 overflow-x-auto no-scrollbar lg:hidden">
      <div className="flex items-center px-4 md:px-8">
        {CURRICULUM_TREE.map((cluster) => (
          <NavLink
            key={cluster.id}
            to={`/${cluster.id}`}
            className={({ isActive }) => cn(
              "px-6 py-3 text-[11px] font-black uppercase tracking-widest transition-all border-b-2 whitespace-nowrap",
              isActive 
                ? "text-accent border-accent" 
                : "text-muted-premium border-transparent"
            )}
          >
            {cluster.title}
          </NavLink>
        ))}
      </div>
    </div>
  );
};

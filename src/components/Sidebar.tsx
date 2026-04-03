import { NavLink } from "react-router-dom";
import { motion } from "motion/react";
import { 
  ChevronRight, 
  Layers, 
  FunctionSquare, 
  BarChart3, 
  Cpu, 
  BookOpen 
} from "lucide-react";
import { cn } from "@/src/lib/utils";
import { useStore } from "@/src/store/useStore";

const MENU_ITEMS = [
  {
    title: "Linear Algebra",
    icon: Layers,
    path: "/linear-algebra",
    subItems: ["Vectors", "Matrices", "Eigenvalues", "SVD/PCA"],
  },
  {
    title: "Calculus",
    icon: FunctionSquare,
    path: "/calculus",
    subItems: ["Gradients", "Chain Rule", "Optimization"],
  },
  {
    title: "Probability & Stats",
    icon: BarChart3,
    path: "/probability",
    subItems: ["Distributions", "Bayes", "Hypothesis Testing"],
  },
];

export const Sidebar = () => {
  const { currentSubTopic, setSubTopic } = useStore();

  return (
    <aside className="w-[280px] h-screen bg-zinc-950 border-r border-zinc-800 flex flex-col fixed left-0 top-0 z-50">
      <div className="p-6 border-b border-zinc-800 flex items-center gap-3">
        <div className="w-8 h-8 bg-blue-600 rounded-lg flex items-center justify-center">
          <Cpu className="text-white w-5 h-5" />
        </div>
        <h1 className="font-bold text-zinc-100 tracking-tight">Math4ML</h1>
      </div>

      <nav className="flex-1 overflow-y-auto p-4 space-y-6">
        <div className="space-y-1">
          <div className="px-3 py-2 text-xs font-semibold text-zinc-500 uppercase tracking-wider flex items-center gap-2">
            <BookOpen className="w-3 h-3" />
            Curriculum
          </div>
          {MENU_ITEMS.map((item) => (
            <div key={item.title} className="space-y-1">
              <NavLink
                to={item.path}
                className={({ isActive }) =>
                  cn(
                    "flex items-center gap-3 px-3 py-2 rounded-lg text-sm font-medium transition-colors",
                    isActive 
                      ? "bg-zinc-900 text-blue-400" 
                      : "text-zinc-400 hover:text-zinc-100 hover:bg-zinc-900/50"
                  )
                }
              >
                <item.icon className="w-4 h-4" />
                {item.title}
              </NavLink>
              
              <div className="ml-4 pl-4 border-l border-zinc-800 space-y-1 py-1">
                {item.subItems.map((sub) => (
                  <button
                    key={sub}
                    onClick={() => setSubTopic(sub)}
                    className={cn(
                      "w-full text-left px-3 py-1.5 text-xs rounded-md transition-all flex items-center justify-between group",
                      currentSubTopic === sub
                        ? "text-zinc-100 bg-zinc-900 font-semibold"
                        : "text-zinc-500 hover:text-zinc-300"
                    )}
                  >
                    {sub}
                    {currentSubTopic === sub && (
                      <motion.div layoutId="active-indicator">
                        <ChevronRight className="w-3 h-3 text-blue-500" />
                      </motion.div>
                    )}
                  </button>
                ))}
              </div>
            </div>
          ))}
        </div>
      </nav>

      <div className="p-4 border-t border-zinc-800">
        <div className="p-3 bg-zinc-900 rounded-xl border border-zinc-800">
          <p className="text-[10px] uppercase tracking-widest text-zinc-500 font-bold mb-1">Current Progress</p>
          <div className="h-1.5 w-full bg-zinc-800 rounded-full overflow-hidden">
            <div className="h-full w-1/3 bg-blue-500 rounded-full" />
          </div>
        </div>
      </div>
    </aside>
  );
};

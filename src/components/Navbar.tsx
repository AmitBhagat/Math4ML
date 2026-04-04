import { Link } from "react-router-dom";
import { ThemeToggle } from "./ThemeToggle";

export const Navbar = () => {
  return (
    <nav className="fixed top-0 w-full h-16 bg-white/80 dark:bg-slate-950/80 backdrop-blur-xl border-b border-black/5 dark:border-white/5 z-50 flex items-center justify-between px-4 md:px-8 transition-all">
      <Link to="/" className="flex items-center gap-2 group">
        <div className="w-9 h-9 bg-black dark:bg-white rounded flex items-center justify-center group-hover:scale-105 transition-transform duration-200">
          <span className="text-white dark:text-black font-black font-mono text-base">M</span>
        </div>
        <span className="font-black text-black dark:text-white tracking-tighter text-xl hidden sm:block uppercase">Mathematics for ML</span>
      </Link>
      
      <div className="flex items-center gap-4 md:gap-8">
        <Link to="/" className="text-sm font-bold text-on-surface-variant hover:text-black dark:hover:text-white transition-colors uppercase tracking-widest">Home</Link>
        <ThemeToggle />
      </div>
    </nav>
  );
};

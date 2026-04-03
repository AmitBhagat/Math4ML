import { Link } from "react-router-dom";
import { Cpu } from "lucide-react";

export const Navbar = () => {
  return (
    <nav className="fixed top-0 w-full h-16 bg-white border-b border-gray-200 z-50 flex items-center justify-between px-4 md:px-6">
      <Link to="/" className="flex items-center gap-3">
        <div className="w-8 h-8 bg-black rounded flex items-center justify-center">
          <span className="text-white font-bold font-mono text-sm">M</span>
        </div>
        <span className="font-bold text-gray-900 tracking-tight text-xl">Mathematics for ML</span>
      </Link>
      
      <div className="hidden md:flex gap-6 text-sm font-medium text-gray-600">
        <Link to="/" className="hover:text-gray-900 transition-colors">Home</Link>
      </div>
    </nav>
  );
};

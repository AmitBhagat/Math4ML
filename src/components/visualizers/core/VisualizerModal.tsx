import React, { useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { X, Maximize2, Info } from "lucide-react";
import { useTheme } from "../../../hooks/useTheme";
import "@/src/styles/visualizer-lab.css";

interface VisualizerModalProps {
  isOpen: boolean;
  onClose: () => void;
  title: string;
  children: React.ReactNode;
}

export const VisualizerModal: React.FC<VisualizerModalProps> = ({ 
  isOpen, 
  onClose, 
  title, 
  children 
}) => {
  const { theme } = useTheme();
  const isDark = theme === "dark";

  // Prevent background scroll when modal is open
  useEffect(() => {
    if (isOpen) {
      document.body.style.overflow = "hidden";
    } else {
      document.body.style.overflow = "unset";
    }
    return () => {
      document.body.style.overflow = "unset";
    };
  }, [isOpen]);

  // Closing via Escape is disabled as per requirement to use only cancel button

  return (
    <AnimatePresence>
      {isOpen && (
        <div className="fixed inset-0 z-[100] flex items-center justify-center p-4 md:p-8">
          {/* Backdrop (Static) */}
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="absolute inset-0 bg-black/60 backdrop-blur-sm"
          />

          {/* Modal Container */}
          <motion.div
            initial={{ opacity: 0, scale: 0.95, y: 20 }}
            animate={{ opacity: 1, scale: 1, y: 0 }}
            exit={{ opacity: 0, scale: 0.95, y: 20 }}
            transition={{ type: "spring", damping: 25, stiffness: 300 }}
            className="relative w-full max-w-6xl h-full max-h-[90vh] overflow-hidden rounded-[20px] border border-white/10 shadow-2xl flex flex-col bg-[#0d0f14]"
            onClick={(e) => e.stopPropagation()}
          >
            <div className="math-lab-container relative flex flex-col h-full min-h-0">
              {/* Close Button Only */}
              <button 
                onClick={onClose}
                className="absolute top-6 right-8 p-3 rounded-xl transition-all z-[100] bg-white/5 hover:bg-white/10 text-white/40 hover:text-white border border-white/5"
              >
                <X className="w-6 h-6" />
              </button>

              {/* Lab Content Body */}
              <div className="flex-1 overflow-y-auto p-12 custom-scrollbar lab-content">
                {children}
              </div>
            </div>
          </motion.div>
        </div>
      )}
    </AnimatePresence>
  );
};

import React from "react";
import { TopicVisualizer } from "../../MathematicalVisualizations";
import { useTheme } from "../../../hooks/useTheme";
import { VisualizerTheme } from "./CanvasBase";

interface InteractiveVisualizerProps {
  topicId: string;
}

/**
 * InteractiveVisualizer acts as the high-level container for laboratory experiments
 * in the curriculum lessons. Following the UI consolidation, it now renders the 
 * unified experiment (e.g., MathToolsDashboard) as a single, high-fidelity card 
 * instead of splitting the screen between separate controls and a canvas.
 */
export const InteractiveVisualizer: React.FC<InteractiveVisualizerProps> = ({ topicId }) => {
  const { theme } = useTheme();
  const vTheme = theme as VisualizerTheme;

  return (
    <div className="w-full h-full animate-in fade-in duration-700">
      <div className="math-lab-container w-full h-full min-h-[600px]">
        <TopicVisualizer topicId={topicId} theme={vTheme} />
      </div>
      
      <div className="mt-8 px-4 opacity-70">
        <div className="text-[11px] text-slate-400 font-medium italic leading-relaxed text-center font-mono">
          Interactive Analytical Engine — Coordinate-accurate vertex processing active.
        </div>
      </div>
    </div>
  );
};




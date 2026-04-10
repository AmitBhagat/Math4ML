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
    <div className="w-full animate-in fade-in duration-700">
      <div className="math-lab-container w-full">
        <TopicVisualizer topicId={topicId} theme={vTheme} />
      </div>
      

    </div>
  );
};




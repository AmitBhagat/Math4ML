import React from "react";
import { getVisualizerComponent } from "./visualizers/core/VisualizerRegistry";
import { VisualizerTheme } from "./visualizers/core/CanvasBase";

export interface TopicVisualizerProps {
  topicId: string;
  theme?: VisualizerTheme;
  onUpdateInfo?: (info: any) => void;
  params?: any;
}

export const TopicVisualizer: React.FC<TopicVisualizerProps> = ({ 
  topicId, 
  theme = 'dark', 
  onUpdateInfo,
  params = {}
}) => {
  const Component = getVisualizerComponent(topicId);

  if (!Component) {
    return (
      <div className="w-full h-full flex items-center justify-center text-muted-premium italic">
        Visualizer "{topicId}" coming soon...
      </div>
    );
  }

  // Inject theme and update callback into the resolved component
  return <Component {...params} theme={theme} onUpdateInfo={onUpdateInfo} />;
};

import React, { lazy, Suspense } from 'react';

const MatrixTransformation = lazy(() => import('./labs/Linear Algebra/MatrixTransformation'));

const topicMap: Record<string, React.ComponentType<any>> = {
  'matrix-multiplication': MatrixTransformation,
};

interface VisualizerSwitcherProps {
  topic: string;
}

export const VisualizerSwitcher: React.FC<VisualizerSwitcherProps> = ({ topic }) => {
  const Component = topicMap[topic];

  if (!Component) {
    return (
      <div className="p-4 bg-bg-secondary border border-border-premium rounded-xl text-muted-premium italic">
        Visualizer for topic "{topic}" is not yet available.
      </div>
    );
  }

  return (
    <Suspense fallback={<div className="h-[400px] flex items-center justify-center bg-bg-secondary rounded-xl animate-pulse">Loading visualizer...</div>}>
      <Component />
    </Suspense>
  );
};

export default VisualizerSwitcher;

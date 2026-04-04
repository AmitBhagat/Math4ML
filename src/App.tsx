import { HashRouter, Routes, Route, useParams } from "react-router-dom";
import { MainLayout } from "./components/MainLayout";
import React, { Suspense } from "react";
import LoadingSkeleton from "./components/LoadingSkeleton";

const HomePage = React.lazy(() => import("./pages/HomePage").then(m => ({ default: m.HomePage })));
const ClusterPage = React.lazy(() => import("./pages/ClusterPage").then(m => ({ default: m.ClusterPage })));
const AsyncCategoryPage = React.lazy(() => import("./pages/AsyncCategoryPage").then(m => ({ default: m.AsyncCategoryPage })));
const ProblemPage = React.lazy(() => import("./pages/ProblemPage").then(m => ({ default: m.ProblemPage })));
const VisualizationsPage = React.lazy(() => import("./pages/VisualizationsPage").then(m => ({ default: m.VisualizationsPage })));

function CategoryRoute() {
  const { categoryId } = useParams();
  if (!categoryId) return null;
  return <AsyncCategoryPage categoryId={categoryId} />;
}
export default function App() {
  return (
    <HashRouter>
      <Routes>
        <Route element={<MainLayout />}>
          <Route path="/" element={<Suspense fallback={<LoadingSkeleton /> }><HomePage /></Suspense>} />
          
          <Route path="/visualizations" element={<Suspense fallback={<LoadingSkeleton /> }><VisualizationsPage /></Suspense>} />
          
          {/* Cluster Pages (Mathematics / Machine Learning) */}
          <Route path="/:clusterId" element={<Suspense fallback={<LoadingSkeleton /> }><ClusterPage /></Suspense>} />

          {/* Category Pages (Hierarchical and direct for compatibility) */}
          <Route path="/:clusterId/:categoryId" element={<Suspense fallback={<LoadingSkeleton /> }><CategoryRoute /></Suspense>} />
          <Route path="/:categoryId" element={<Suspense fallback={<LoadingSkeleton /> }><CategoryRoute /></Suspense>} />

          {/* Problem Pages within Categories and Clusters */}
          <Route path="/:clusterId/:categoryId/:problemId" element={<Suspense fallback={<LoadingSkeleton /> }><ProblemPage /></Suspense>} />
          <Route path="/:categoryId/:problemId" element={<Suspense fallback={<LoadingSkeleton /> }><ProblemPage /></Suspense>} />
        </Route>
      </Routes>
    </HashRouter>
  );
}

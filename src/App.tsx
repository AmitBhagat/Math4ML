import { HashRouter, Routes, Route, useParams } from "react-router-dom";
import { MainLayout } from "./components/MainLayout";
import React, { Suspense } from "react";
import LoadingSkeleton from "./components/LoadingSkeleton";
import ScrollToTop from "./components/ScrollToTop";
import { ThemeProvider } from "./context/ThemeContext";

const HomePage = React.lazy(() => import("./pages/HomePage").then(m => ({ default: m.HomePage })));
const ClusterPage = React.lazy(() => import("./pages/ClusterPage").then(m => ({ default: m.ClusterPage })));
const AsyncCategoryPage = React.lazy(() => import("./pages/AsyncCategoryPage").then(m => ({ default: m.AsyncCategoryPage })));
const ProblemPage = React.lazy(() => import("./pages/ProblemPage").then(m => ({ default: m.ProblemPage })));
const VisualizationsPage = React.lazy(() => import("./pages/VisualizationsPage").then(m => ({ default: m.VisualizationsPage })));

function CategoryRoute() {
  const { clusterId, categoryId } = useParams();
  if (!categoryId) return null;
  // Key forces re-mount on category or cluster change to prevent stale state
  const routeKey = clusterId ? `${clusterId}-${categoryId}` : categoryId;
  return <AsyncCategoryPage key={routeKey} categoryId={categoryId} />;
}

function ProblemRoute() {
  const { clusterId, categoryId, problemId } = useParams();
  if (!categoryId || !problemId) return null;
  // Key forces re-mount on problem change — cleanest state reset
  const routeKey = clusterId ? `${clusterId}-${categoryId}-${problemId}` : `${categoryId}-${problemId}`;
  return <ProblemPage key={routeKey} />;
}
export default function App() {
  return (
    <ThemeProvider>
      <HashRouter>
        <ScrollToTop />
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
            <Route path="/:clusterId/:categoryId/:problemId" element={<Suspense fallback={<LoadingSkeleton /> }><ProblemRoute /></Suspense>} />
            <Route path="/:categoryId/:problemId" element={<Suspense fallback={<LoadingSkeleton /> }><ProblemRoute /></Suspense>} />
          </Route>
        </Routes>
      </HashRouter>
    </ThemeProvider>
  );
}

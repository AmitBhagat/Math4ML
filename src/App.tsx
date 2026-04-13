import { HashRouter, Routes, Route, useParams, useLocation } from "react-router-dom";
import { MainLayout } from "./components/MainLayout";
import React, { Suspense } from "react";
// We use 'motion' but import from 'framer-motion' for compatibility with demo code
import { AnimatePresence } from "framer-motion";
import LoadingSkeleton from "./components/LoadingSkeleton";
import ScrollToTop from "./components/ScrollToTop";
import { ThemeProvider } from "./context/ThemeContext";

const HomePage = React.lazy(() => import("./pages/HomePage").then(m => ({ default: m.HomePage })));
const ClusterPage = React.lazy(() => import("./pages/ClusterPage").then(m => ({ default: m.ClusterPage })));
const AsyncCategoryPage = React.lazy(() => import("./pages/AsyncCategoryPage").then(m => ({ default: m.AsyncCategoryPage })));
const ProblemPage = React.lazy(() => import("./pages/ProblemPage").then(m => ({ default: m.ProblemPage })));

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
        <AppContent />
      </HashRouter>
    </ThemeProvider>
  );
}

function AppContent() {
  const location = useLocation();
  
  return (
    <AnimatePresence mode="wait">
      <Routes location={location} key={location.pathname}>
        <Route element={<MainLayout />}>
          <Route path="/" element={<Suspense fallback={<LoadingSkeleton /> }><HomePage /></Suspense>} />
          
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
    </AnimatePresence>
  );
}

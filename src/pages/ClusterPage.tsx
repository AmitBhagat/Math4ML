import React, { useMemo } from "react";
import { Link, useParams } from "react-router-dom";
import { Layers, ArrowRight } from "lucide-react";
import { CLUSTERS, CATEGORY_META, ICON_MAP, preloadCategory } from "@/src/data/topics";
import { motion } from "framer-motion";
import { cn } from "../lib/utils";

/**
 * CalloutStep: A minimalist text-only speech-bubble node.
 * Focuses on legibility and prevents truncation by removing icons.
 */
const CalloutStep = ({ topic, index, color }: { topic: any, index: number, color: string }) => {
  return (
    <motion.div
      initial={{ x: -80, opacity: 0 }}
      animate={{ x: 0, opacity: 1 }}
      transition={{ delay: index * 0.1, duration: 0.6, ease: [0.16, 1, 0.3, 1] }}
      className="group relative flex items-center mb-8 pl-24 w-full flex-none"
    >
      {/* ─── Step Number ─── */}
      <div 
        className="absolute left-6 text-7xl font-black italic opacity-10 group-hover:opacity-100 transition-all duration-700 scale-90 group-hover:scale-100 select-none pointer-events-none"
        style={{ color: color }}
      >
        {String(index + 1).padStart(2, '0')}
      </div>

      {/* ─── The Speech Bubble (Clean Text Focus) ─── */}
      <Link
        to={`/${topic.clusterId}/${topic.id}`}
        onMouseEnter={() => preloadCategory(topic.id)}
        className="relative flex-none w-full bg-white dark:bg-zinc-900 rounded-[2rem] px-8 py-6 shadow-xl transition-all duration-500 hover:shadow-2xl hover:-translate-y-1 block border border-transparent hover:border-black/5 dark:hover:border-white/5 h-[100px] flex flex-col justify-center overflow-hidden"
      >
        {/* Tail pointing to the number */}
        <div 
          className="absolute left-[-16px] top-1/2 -translate-y-1/2 w-0 h-0 border-t-[16px] border-t-transparent border-b-[16px] border-b-transparent border-right-[16px]"
          style={{ borderRightColor: 'inherit' }}
        >
            <div className="absolute left-[2px] top-[-16px] border-t-[16px] border-t-transparent border-b-[16px] border-b-transparent border-r-[16px] border-r-white dark:border-r-zinc-900" />
        </div>

        <div className="min-w-0">
          <h3 className="text-base md:text-lg font-headline font-black text-on-surface leading-tight tracking-tight group-hover:text-accent transition-colors">
            {topic.title}
          </h3>
          <div className="mt-1 h-0.5 w-8 scale-x-0 group-hover:scale-x-100 transition-transform origin-left duration-500" style={{ backgroundColor: color }} />
        </div>
      </Link>
    </motion.div>
  );
};

export const ClusterPage = () => {
  const { clusterId } = useParams();
  const cluster = CLUSTERS.find(c => c.id === clusterId);

  const topics = useMemo(() => {
    return cluster?.categories.map(catId => {
      const meta = CATEGORY_META.find(m => m.id === catId);
      return { ...meta, clusterId: cluster?.id };
    }).filter(t => t.id) || [];
  }, [cluster]);

  // Premium, saturated colors from user reference
  const stepColors = [
    '#f97316', // Orange
    '#d97706', // Amber/Brown
    '#0d9488', // Teal
    '#a8a29e', // Warm Gray/Tan
    '#22c55e', // Green
    '#3b82f6', // Blue
    '#6366f1', // Indigo
    '#ec4899', // Pink
  ];

  // Split topics into columns for "No-Scroll" layout
  const columns = useMemo(() => {
    const chunkCount = topics.length > 7 ? 4 : 2; // Always 4 cols for big clusters
    const perChunk = Math.ceil(topics.length / chunkCount);
    return Array.from({ length: chunkCount }, (_, i) => 
      topics.slice(i * perChunk, (i + 1) * perChunk)
    );
  }, [topics]);

  if (!cluster) {
    return (
      <div className="max-w-6xl mx-auto px-6 py-24 text-center">
        <h1 className="text-4xl font-black text-on-surface mb-4">Cluster Not Found</h1>
        <Link to="/" className="text-accent hover:underline tracking-widest uppercase text-xs font-black">Return Home</Link>
      </div>
    );
  }

  return (
    <div className="w-full flex flex-col h-full bg-background relative px-4 md:px-8">
       <div className="w-full flex flex-col h-full">
          {/* Minimalist Header */}
          <div className="mb-16">
            <motion.div 
              initial={{ opacity: 0, y: -10 }}
              animate={{ opacity: 1, y: 0 }}
              className="text-[12px] font-mono font-black uppercase tracking-[0.5em] text-accent mb-3"
            >
              Curriculum Phase // {cluster.title}
            </motion.div>
            <motion.h1 
              initial={{ opacity: 0, x: -30 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ delay: 0.1, duration: 0.8 }}
              className="text-5xl md:text-7xl font-black uppercase tracking-tighter text-on-surface"
            >
              {cluster.title}
            </motion.h1>
          </div>

          {/* Staggered Multi-Column Stack - GRID Refactor */}
          <div className="flex-1 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-x-12 xl:gap-x-16 w-full">
            {columns.map((colTopics, colIdx) => (
              <div key={colIdx} className="flex flex-col justify-start">
                {colTopics.map((topic, idx) => {
                  const absoluteIdx = columns.slice(0, colIdx).reduce((acc, col) => acc + col.length, 0) + idx;
                  return (
                    <CalloutStep 
                      key={topic.id} 
                      topic={topic} 
                      index={absoluteIdx} 
                      color={stepColors[absoluteIdx % stepColors.length]}
                    />
                  );
                })}
              </div>
            ))}
          </div>

          </div>
       </div>
  );
};

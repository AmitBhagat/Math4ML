import React, { useRef, useEffect, useCallback } from "react";

// ─── HIGH-FIDELITY THEME PALETTES ──────────────────────────────────────────
export type VisualizerTheme = 'light' | 'dark';

const PALETTES = {
  light: {
    blue: "#ff835c", blue2: "#ff9e7d", teal: "#48bb78", purple: "#b794f4",
    pink: "#f472b6", yellow: "#f6ad55", red: "#f87171", green: "#4ade80",
    orange: "#fb923c",
    grid: "rgba(91, 156, 246, 0.2)", gridBright: "rgba(91, 156, 246, 0.45)",
    axis: "rgba(74, 85, 104, 0.8)", white: "#24292f", muted: "#4a5568",
    bg: "#fdfaf9"
  },
  dark: {
    blue: "#5b9cf6", blue2: "#93c5fd", teal: "#7edba0", purple: "#c084fc",
    pink: "#f472b6", yellow: "#f6ad55", red: "#f87171", green: "#4ade80",
    orange: "#fb923c",
    grid: "rgba(255, 255, 255, 0.06)", gridBright: "rgba(255, 255, 255, 0.2)",
    axis: "rgba(255, 255, 255, 0.6)", white: "#f8fafc", muted: "#94a3b8",
    bg: "#070a11"
  }
};

export const C = (theme: VisualizerTheme = 'light') => PALETTES[theme];

// ─── CANVAS HELPERS ───────────────────────────────────────────────────────────
export function roundRect(ctx: CanvasRenderingContext2D, x: number, y: number, w: number, h: number, r: number) {
  ctx.beginPath();
  ctx.moveTo(x + r, y);
  ctx.arcTo(x + w, y, x + w, y + h, r);
  ctx.arcTo(x + w, y + h, x, y + h, r);
  ctx.arcTo(x, y + h, x, y, r);
  ctx.arcTo(x, y, x + w, y, r);
  ctx.closePath();
}

/**
 * Shared utility to get a responsive scale factor across visualizers
 */
export function getResponsiveScale(W: number, H: number, baseScale: number = 60): number {
  const isSmall = W < 600;
  if (!isSmall) return baseScale;
  const ratio = Math.max(0.5, Math.min(W, 640) / 640);
  return baseScale * ratio;
}


export function useAnimationFrame(cb: (elapsed: number, ts: number) => void, deps: any[] = []) {
  const rafRef = useRef<number | null>(null);
  const cbRef = useRef(cb);
  
  useEffect(() => { cbRef.current = cb; }, [cb]);
  
  useEffect(() => {
    let start: number | null = null;
    const loop = (ts: number) => {
      if (!start) start = ts;
      cbRef.current(ts - start, ts);
      rafRef.current = requestAnimationFrame(loop);
    };
    rafRef.current = requestAnimationFrame(loop);
    return () => {
      if (rafRef.current) cancelAnimationFrame(rafRef.current);
    };
  }, deps);
}

export function drawGrid(ctx: CanvasRenderingContext2D, w: number, h: number, scale: number, ox: number, oy: number, theme: VisualizerTheme = 'light') {
  const colors = C(theme);
  ctx.lineWidth = 0.5;
  const step = scale / 2;
  ctx.strokeStyle = colors.grid;
  for (let x = ox % step; x < w; x += step) {
    ctx.beginPath(); ctx.moveTo(x, 0); ctx.lineTo(x, h); ctx.stroke();
  }
  for (let y = oy % step; y < h; y += step) {
    ctx.beginPath(); ctx.moveTo(0, y); ctx.lineTo(w, y); ctx.stroke();
  }
  // Axes
  ctx.lineWidth = 2.5; ctx.strokeStyle = colors.axis;
  ctx.beginPath(); ctx.moveTo(0, oy); ctx.lineTo(w, oy); ctx.stroke();
  ctx.beginPath(); ctx.moveTo(ox, 0); ctx.lineTo(ox, h); ctx.stroke();
}

export function drawArrow(
  ctx: CanvasRenderingContext2D, 
  x1: number, y1: number, 
  x2: number, y2: number, 
  color: string, 
  width = 2, 
  headSize = 10
) {
  const angle = Math.atan2(y2 - y1, x2 - x1);
  ctx.beginPath();
  ctx.strokeStyle = color;
  ctx.lineWidth = width;
  ctx.moveTo(x1, y1);
  ctx.lineTo(x2, y2);
  ctx.stroke();
  ctx.beginPath();
  ctx.fillStyle = color;
  ctx.moveTo(x2, y2);
  ctx.lineTo(x2 - headSize * Math.cos(angle - 0.4), y2 - headSize * Math.sin(angle - 0.4));
  ctx.lineTo(x2 - headSize * Math.cos(angle + 0.4), y2 - headSize * Math.sin(angle + 0.4));
  ctx.closePath();
  ctx.fill();
}

/**
 * Shared utility to draw coordinate ticks on the axes
 */
export function drawTicks(ctx: CanvasRenderingContext2D, ox: number, oy: number, scale: number, theme: VisualizerTheme = 'light', range = 6) {
  const colors = C(theme);
  ctx.fillStyle = colors.muted;
  ctx.font = "10px 'JetBrains Mono'";
  ctx.textAlign = "center";
  for (let i = -range; i <= range; i++) {
    if (i === 0) continue;
    ctx.fillText(i.toString(), ox + i * scale, oy + 18);
    ctx.fillText(i.toString(), ox - 14, oy - i * scale + 4);
    // little tick marks
    ctx.beginPath(); ctx.strokeStyle = colors.axis; ctx.lineWidth = 1;
    ctx.moveTo(ox + i * scale, oy - 3); ctx.lineTo(ox + i * scale, oy + 3); ctx.stroke();
    ctx.moveTo(ox - 3, oy - i * scale); ctx.lineTo(ox + 3, oy - i * scale); ctx.stroke();
  }
  ctx.textAlign = "left";
}

export function lerp(a: number, b: number, t: number) { return a + (b - a) * t; }
export function easeInOut(t: number) { return t < 0.5 ? 2*t*t : -1+(4-2*t)*t; }

import { Play, RotateCcw } from "lucide-react";

interface CanvasBaseProps {
  onDraw: (ctx: CanvasRenderingContext2D, width: number, height: number, elapsed: number, theme: VisualizerTheme) => void;
  className?: string;
  autoResize?: boolean;
  theme?: VisualizerTheme;
  autoStart?: boolean;
  onUpdateInfo?: (info: { title: string; lines: { label: string; value: string; color: string }[] }) => void;
  showControls?: boolean;
  onCanvasClick?: (x: number, y: number, w: number, h: number) => void;
}

export const CanvasBase: React.FC<CanvasBaseProps> = ({ 
  onDraw, 
  className, 
  theme = 'light', 
  autoStart = true, 
  onUpdateInfo,
  showControls = true 
}) => {
  const canvasRef = useRef<HTMLCanvasElement>(null);
  const containerRef = useRef<HTMLDivElement>(null);
  const startTime = useRef<number | null>(null);
  const onDrawRef = useRef(onDraw);
  const [isPlaying, setIsPlaying] = React.useState(autoStart);

  useEffect(() => {
    onDrawRef.current = onDraw;
  }, [onDraw]);

  useEffect(() => {
    const canvas = canvasRef.current;
    const container = containerRef.current;
    if (!canvas || !container) return;

    const observer = new ResizeObserver((entries) => {
      const entry = entries[0];
      if (!entry) return;

      const { width, height } = entry.contentRect;
      const dpr = window.devicePixelRatio || 1;

      canvas.width = width * dpr;
      canvas.height = height * dpr;
      canvas.style.width = `${width}px`;
      canvas.style.height = `${height}px`;

      const ctx = canvas.getContext("2d");
      if (ctx) {
        ctx.scale(dpr, dpr);
        onDrawRef.current(ctx, width, height, 0, theme);
      }
    });

    observer.observe(container);
    return () => observer.disconnect();
  }, [theme]);

  const loop = useCallback((ts: number) => {
    // If not playing, still allow one draw at t=0
    if (!isPlaying && startTime.current !== null) {
      startTime.current = null;
      return;
    }
    
    if (!startTime.current) startTime.current = ts;
    const elapsed = ts - startTime.current;

    const canvas = canvasRef.current;
    if (canvas) {
      const ctx = canvas.getContext("2d");
      if (ctx) {
        const { width, height } = canvas.getBoundingClientRect();
        onDrawRef.current(ctx, width, height, isPlaying ? elapsed : 0, theme);
      }
    }
    if (isPlaying) requestAnimationFrame(loop);
  }, [isPlaying, theme]);

  useEffect(() => {
    if (isPlaying) {
      const raf = requestAnimationFrame(loop);
      return () => cancelAnimationFrame(raf);
    } else {
      // Still draw once when state changes to not playing
      const canvas = canvasRef.current;
      if (canvas) {
        const ctx = canvas.getContext("2d");
        if (ctx) {
          const { width, height } = canvas.getBoundingClientRect();
          onDrawRef.current(ctx, width, height, 0, theme);
        }
      }
    }
  }, [loop, isPlaying]);

  const handleReset = (e: React.MouseEvent) => {
    e.stopPropagation();
    setIsPlaying(false);
    startTime.current = null;
  };

  const handleCanvasClick = (e: React.MouseEvent) => {
    if (!onCanvasClick) return;
    const rect = canvasRef.current?.getBoundingClientRect();
    if (rect) {
      onCanvasClick(e.clientX - rect.left, e.clientY - rect.top, rect.width, rect.height);
    }
  };

  return (
    <div ref={containerRef} className={`w-full h-full min-h-[300px] relative group overflow-hidden ${className}`} onClick={handleCanvasClick}>
      <canvas ref={canvasRef} className="block w-full h-full" />
      
      {/* ─── Control Overlay (Optional) ─── */}
      {showControls && (
        <div className="absolute inset-x-0 bottom-6 flex justify-center items-center gap-3 opacity-0 group-hover:opacity-100 transition-opacity duration-300">
          <button
            onClick={() => setIsPlaying(!isPlaying)}
            className={`flex items-center gap-2 px-6 py-2.5 rounded-full text-[10px] font-black uppercase tracking-widest transition-all active:scale-95
              ${isPlaying 
                ? "bg-slate-900 dark:bg-white text-white dark:text-black border border-slate-900 dark:border-white" 
                : "bg-white dark:bg-slate-900 text-slate-900 dark:text-white border border-slate-900 dark:border-white"}`}
          >
            {isPlaying ? "Pause" : <><Play className="w-3 h-3 fill-current" /> Play</>}
          </button>
          
          <button
            onClick={handleReset}
            className="p-2.5 rounded-full bg-transparent border border-transparent text-muted-premium hover:text-accent-premium transition-colors"
            title="Reset"
          >
            <RotateCcw className="w-3.5 h-3.5" />
          </button>
        </div>
      )}
    </div>
  );
};





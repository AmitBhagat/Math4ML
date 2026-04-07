import React, { useRef, useEffect, useCallback } from "react";

// ─── HIGH-FIDELITY COLOR PALETTE (Math4ML Premium) ──────────────────────────
export const C = {
  blue: "#3b8beb",
  blue2: "#5ba3f5",
  teal: "#00d4aa",
  purple: "#a78bfa",
  pink: "#f472b6",
  yellow: "#fbbf24",
  red: "#f87171",
  green: "#4ade80",
  orange: "#fb923c",
  grid: "rgba(26, 40, 64, 0.5)",
  gridBright: "rgba(36, 54, 86, 0.8)",
  axis: "rgba(42, 64, 112, 1)",
  white: "#e2e8f0",
  muted: "#64748b",
};

// ─── CANVAS HELPERS ───────────────────────────────────────────────────────────
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

export function drawGrid(ctx: CanvasRenderingContext2D, w: number, h: number, scale: number, ox: number, oy: number) {
  ctx.lineWidth = 0.5;
  const step = scale;
  ctx.strokeStyle = C.grid;
  for (let x = ox % step; x < w; x += step) {
    ctx.beginPath(); ctx.moveTo(x, 0); ctx.lineTo(x, h); ctx.stroke();
  }
  for (let y = oy % step; y < h; y += step) {
    ctx.beginPath(); ctx.moveTo(0, y); ctx.lineTo(w, y); ctx.stroke();
  }
  // Axes
  ctx.lineWidth = 1.5; ctx.strokeStyle = C.axis;
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

export function lerp(a: number, b: number, t: number) { return a + (b - a) * t; }
export function easeInOut(t: number) { return t < 0.5 ? 2*t*t : -1+(4-2*t)*t; }

import { Play, RotateCcw } from "lucide-react";

interface CanvasBaseProps {
  onDraw: (ctx: CanvasRenderingContext2D, width: number, height: number, elapsed: number) => void;
  className?: string;
  autoResize?: boolean;
}

export const CanvasBase: React.FC<CanvasBaseProps> = ({ onDraw, className, autoResize = true }) => {
  const canvasRef = useRef<HTMLCanvasElement>(null);
  const containerRef = useRef<HTMLDivElement>(null);
  const startTime = useRef<number | null>(null);
  const [isPlaying, setIsPlaying] = React.useState(false);
  const [key, setKey] = React.useState(0); // For resetting animation

  const resize = useCallback(() => {
    const canvas = canvasRef.current;
    const container = containerRef.current;
    if (!canvas || !container) return;
    
    const dpr = window.devicePixelRatio || 1;
    const { width, height } = container.getBoundingClientRect();
    const w = width || 600;
    const h = height || 400;

    canvas.width = w * dpr;
    canvas.height = h * dpr;
    canvas.style.width = `${w}px`;
    canvas.style.height = `${h}px`;
    
    const ctx = canvas.getContext("2d");
    if (ctx) ctx.scale(dpr, dpr);
  }, []);

  useEffect(() => {
    if (autoResize) {
      resize();
      window.addEventListener("resize", resize);
      return () => window.removeEventListener("resize", resize);
    }
  }, [resize, autoResize]);

  const loop = useCallback((ts: number) => {
    if (!isPlaying) {
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
        onDraw(ctx, width, height, elapsed);
      }
    }
    requestAnimationFrame(loop);
  }, [onDraw, isPlaying]);

  // ─── Animation Trigger Effect ───
  useEffect(() => {
    if (isPlaying) {
      const raf = requestAnimationFrame(loop);
      return () => cancelAnimationFrame(raf);
    }
  }, [loop, isPlaying]);

  // ─── Initial State Snapshot Effect ───
  useEffect(() => {
    const drawSnapshot = () => {
      const canvas = canvasRef.current;
      if (canvas && !isPlaying) {
        const ctx = canvas.getContext("2d");
        if (ctx) {
          const { width, height } = canvas.getBoundingClientRect();
          if (width > 0 && height > 0) {
            onDraw(ctx, width, height, 0);
          }
        }
      }
    };

    drawSnapshot();
  }, [onDraw, isPlaying]);

  const handleReset = (e: React.MouseEvent) => {
    e.stopPropagation();
    setIsPlaying(false);
    startTime.current = null;
  };

  return (
    <div ref={containerRef} className={`w-full h-full min-h-[250px] relative group overflow-hidden ${className}`}>
      <canvas ref={canvasRef} className="block w-full h-full" />
      
      {/* ─── Control Overlay ─── */}
      <div className="absolute inset-x-0 bottom-6 flex justify-center items-center gap-3 opacity-0 group-hover:opacity-100 transition-opacity duration-300">
        <button
          onClick={() => setIsPlaying(!isPlaying)}
          className={`flex items-center gap-2 px-6 py-2.5 rounded-full text-[10px] font-black uppercase tracking-widest shadow-2xl transition-all active:scale-95
            ${isPlaying ? "bg-red-500/10 border border-red-500/20 text-red-500" : "bg-accent-premium text-white"}`}
        >
          {isPlaying ? "Pause" : <><Play className="w-3 h-3 fill-current" /> Solve / Play</>}
        </button>
        
        <button
          onClick={handleReset}
          className="p-2.5 rounded-full bg-bg-secondary border border-border-premium text-muted-premium hover:text-accent-premium transition-colors shadow-xl"
          title="Reset"
        >
          <RotateCcw className="w-3.5 h-3.5" />
        </button>
      </div>
    </div>
  );
};




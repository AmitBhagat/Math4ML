import React, { useRef, useEffect, useCallback } from "react";

// ─── HIGH-FIDELITY THEME PALETTES ──────────────────────────────────────────
export type VisualizerTheme = 'light' | 'dark';

const PALETTES = {
  light: {
    blue: "#3b8beb", blue2: "#5ba3f5", teal: "#00d4aa", purple: "#a78bfa",
    pink: "#f472b6", yellow: "#fbbf24", red: "#f87171", green: "#4ade80",
    orange: "#fb923c",
    grid: "rgba(0, 0, 0, 0.45)", gridBright: "rgba(0, 0, 0, 0.65)",
    axis: "rgba(0, 0, 0, 0.85)", white: "#24292f", muted: "#64748b",
    bg: "#ffffff", infoBg: "rgba(255, 255, 255, 0.95)", infoBorder: "rgba(0, 0, 0, 0.1)"
  },
  dark: {
    blue: "#60a5fa", blue2: "#93c5fd", teal: "#2dd4bf", purple: "#c084fc",
    pink: "#f472b6", yellow: "#fbbf24", red: "#f87171", green: "#4ade80",
    orange: "#fb923c",
    grid: "rgba(255, 255, 255, 0.25)", gridBright: "rgba(255, 255, 255, 0.45)",
    axis: "rgba(255, 255, 255, 0.75)", white: "#f8fafc", muted: "#94a3b8",
    bg: "#0f172a", infoBg: "rgba(15, 23, 42, 0.95)", infoBorder: "rgba(255, 255, 255, 0.15)"
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

/**
 * Draws a premium info box that adaptively positions itself
 */
export function drawInfoBox(
  ctx: CanvasRenderingContext2D, 
  W: number, 
  H: number, 
  title: string, 
  lines: {label: string, value: string, color: string}[], 
  theme: VisualizerTheme = 'light'
) {
  const colors = C(theme);
  
  const needsStack = W < 700 || lines.some(l => (l.label.length + l.value.length) > 18);
  const isVerySmall = W < 450;
  
  const boxW = isVerySmall ? 160 : (needsStack ? Math.min(W - 32, 190) : 240);
  const lineH = needsStack ? 24 : 18;
  const boxH = (needsStack ? 32 : 40) + lines.length * lineH + 12;
  
  // Explicitly avoid the center cross (origin) by checking all corners
  // Origin is at W/2, H/2. Check distance from each candidate (x,y)
  const candidates = [
    { x: 20, y: 20 },                     // Top-Left
    { x: W - boxW - 20, y: 20 },          // Top-Right
    { x: 20, y: H - boxH - 65 },          // Bottom-Left (elevated to clear controls)
    { x: W - boxW - 20, y: H - boxH - 65 } // Bottom-Right
  ];

  const ox = W / 2, oy = H / 2;
  const safePadding = 40;

  // Find a candidate that doesn't significantly overlap the central origin area
  let best = candidates[0];
  for (const c of candidates) {
    const overlapsX = (ox > c.x - safePadding) && (ox < c.x + boxW + safePadding);
    const overlapsY = (oy > c.y - safePadding) && (oy < c.y + boxH + safePadding);
    if (!overlapsX || !overlapsY) {
      best = c;
      break;
    }
  }

  const { x, y } = best;

  ctx.save();
  // Glassmorphism effect
  ctx.fillStyle = colors.infoBg;
  ctx.strokeStyle = colors.infoBorder;
  ctx.lineWidth = 1;
  ctx.shadowColor = "rgba(0,0,0,0.3)";
  ctx.shadowBlur = 20;
  roundRect(ctx, x, y, boxW, boxH, 12);
  ctx.fill();
  ctx.stroke();
  ctx.shadowBlur = 0;

  ctx.font = `bold ${needsStack ? '10px' : '13px'} 'Space Grotesk'`;
  ctx.fillStyle = colors.blue2;
  ctx.fillText(title, x + 12, y + (needsStack ? 20 : 26));

  ctx.font = `${isVerySmall ? '9px' : '10px'} 'JetBrains Mono'`;
  lines.forEach((line, i) => {
    const rowY = y + (needsStack ? 36 : 48) + i * lineH;
    
    if (needsStack) {
      ctx.fillStyle = line.color;
      ctx.globalAlpha = 0.8;
      ctx.fillText(line.label, x + 12, rowY - 4);
      ctx.globalAlpha = 1.0;
      ctx.fillStyle = colors.white;
      ctx.fillText(line.value, x + 12, rowY + 8);
    } else {
      ctx.fillStyle = line.color;
      ctx.fillText(`${line.label}:`, x + 12, rowY);
      ctx.fillStyle = colors.white;
      ctx.textAlign = "right";
      ctx.fillText(line.value, x + boxW - 12, rowY);
      ctx.textAlign = "left";
    }
  });
  ctx.restore();
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

export function lerp(a: number, b: number, t: number) { return a + (b - a) * t; }
export function easeInOut(t: number) { return t < 0.5 ? 2*t*t : -1+(4-2*t)*t; }

import { Play, RotateCcw } from "lucide-react";

interface CanvasBaseProps {
  onDraw: (ctx: CanvasRenderingContext2D, width: number, height: number, elapsed: number, theme: VisualizerTheme) => void;
  className?: string;
  autoResize?: boolean;
  theme?: VisualizerTheme;
}

export const CanvasBase: React.FC<CanvasBaseProps> = ({ onDraw, className, theme = 'light' }) => {
  const canvasRef = useRef<HTMLCanvasElement>(null);
  const containerRef = useRef<HTMLDivElement>(null);
  const startTime = useRef<number | null>(null);
  const [isPlaying, setIsPlaying] = React.useState(false);

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
        // Force a synchronous draw on resize to avoid flicker
        onDraw(ctx, width, height, 0, theme);
      }
    });

    observer.observe(container);
    return () => observer.disconnect();
  }, [onDraw, theme]);

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
        onDraw(ctx, width, height, elapsed, theme);
      }
    }
    requestAnimationFrame(loop);
  }, [onDraw, isPlaying, theme]);

  useEffect(() => {
    if (isPlaying) {
      const raf = requestAnimationFrame(loop);
      return () => cancelAnimationFrame(raf);
    }
  }, [loop, isPlaying]);

  const handleReset = (e: React.MouseEvent) => {
    e.stopPropagation();
    setIsPlaying(false);
    startTime.current = null;
    const canvas = canvasRef.current;
    if (canvas) {
      const ctx = canvas.getContext("2d");
      if (ctx) {
        const { width, height } = canvas.getBoundingClientRect();
        onDraw(ctx, width, height, 0, theme);
      }
    }
  };

  return (
    <div ref={containerRef} className={`w-full h-full min-h-[250px] relative group overflow-hidden ${className}`}>
      <canvas ref={canvasRef} className="block w-full h-full" />
      
      {/* ─── Control Overlay ─── */}
      <div className="absolute inset-x-0 bottom-6 flex justify-center items-center gap-3 opacity-0 group-hover:opacity-100 transition-opacity duration-300">
        <button
          onClick={() => setIsPlaying(!isPlaying)}
          className={`flex items-center gap-2 px-6 py-2.5 rounded-full text-[10px] font-black uppercase tracking-widest shadow-2xl transition-all active:scale-95
            ${isPlaying 
              ? "bg-slate-900 dark:bg-white text-white dark:text-black border border-slate-900 dark:border-white" 
              : "bg-white dark:bg-slate-900 text-slate-900 dark:text-white border border-slate-900 dark:border-white"}`}
        >
          {isPlaying ? "Pause" : <><Play className="w-3 h-3 fill-current" /> Solve / Play</>}
        </button>
        
        <button
          onClick={handleReset}
          className="p-2.5 rounded-full bg-bg-secondary dark:bg-slate-800 border border-border-premium text-muted-premium hover:text-accent-premium transition-colors shadow-xl"
          title="Reset"
        >
          <RotateCcw className="w-3.5 h-3.5" />
        </button>
      </div>
    </div>
  );
};




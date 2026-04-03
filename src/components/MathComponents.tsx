import React, { useState, useCallback, useRef, useEffect } from "react";
import { TopicVisualizer } from "./MathematicalVisualizations";
import { runPython } from "@/src/hooks/usePyodide";

export const VisualizerContainer = ({ title }: { title: string }) => {
  return (
    <div className="relative w-full h-full bg-[#1a1a1a] text-gray-100 flex items-center justify-center overflow-hidden font-serif">
      <div
        className="absolute inset-0 z-0 pointer-events-none opacity-30"
        style={{ backgroundImage: `radial-gradient(circle at center, #2c2c2c 0%, #1a1a1a 100%)` }}
      />
      <div
        className="absolute inset-0 z-0 pointer-events-none mix-blend-screen opacity-[0.04]"
        style={{
          backgroundImage: `url("data:image/svg+xml,%3Csvg viewBox='0 0 200 200' xmlns='http://www.w3.org/2000/svg'%3E%3Cfilter id='noiseFilter'%3E%3CfeTurbulence type='fractalNoise' baseFrequency='0.8' numOctaves='4' stitchTiles='stitch'/%3E%3C/filter%3E%3Crect width='100%25' height='100%25' filter='url(%23noiseFilter)'/%3E%3C/svg%3E")`
        }}
      />
      <div className="relative z-10 w-full h-full">
        <TopicVisualizer topicId={title} />
      </div>
    </div>
  );
};

type RunState = "idle" | "loading-pyodide" | "running" | "done" | "error";

interface CodeSnippetProps {
  code: string;
  language?: string;
  staticOutput?: string; // expected output to show before any Run click
}

export const CodeSnippet = ({ code, language = "python", staticOutput }: CodeSnippetProps) => {
  const [editedCode, setEditedCode] = useState(code);
  const [runState, setRunState] = useState<RunState>("idle");
  const [liveOutput, setLiveOutput] = useState<string | null>(null);
  const textareaRef = useRef<HTMLTextAreaElement>(null);
  const isPython = language === "python";

  // Auto-resize textarea to fit its content height
  const autoResize = useCallback(() => {
    const ta = textareaRef.current;
    if (!ta) return;
    ta.style.height = "auto";
    ta.style.height = `${ta.scrollHeight}px`;
  }, []);

  useEffect(() => {
    autoResize();
  }, [editedCode, autoResize]);

  // Run the currently edited code through Pyodide
  const handleRun = useCallback(async () => {
    setRunState("loading-pyodide");
    setLiveOutput(null);
    try {
      const result = await runPython(editedCode);
      setLiveOutput(result);
      setRunState(result.startsWith("[Error]") ? "error" : "done");
    } catch (err) {
      const msg = err instanceof Error ? err.message : String(err);
      setLiveOutput(`[Error] ${msg}`);
      setRunState("error");
    }
  }, [editedCode]);

  // Reset to original code & clear live output
  const handleReset = useCallback(() => {
    setEditedCode(code);
    setRunState("idle");
    setLiveOutput(null);
  }, [code]);

  // What to display in the output panel:
  // - live output (after Run), or
  // - static expected output (from topics data), or
  // - nothing (show hint instead)
  const shownOutput = liveOutput ?? staticOutput ?? null;
  const isLive = liveOutput !== null;
  const isRunning = runState === "loading-pyodide" || runState === "running";

  const statusText: Partial<Record<RunState, string>> = {
    "loading-pyodide": "Loading Python runtime…",
    running: "Running…",
  };

  return (
    <div className="my-6 rounded-xl overflow-hidden border border-gray-200 bg-white shadow-sm">

      {/* ── Header bar ── */}
      <div className="px-4 py-2 bg-gray-50 border-b border-gray-200 flex items-center justify-between">
        <div className="flex items-center gap-3">
          <span className="text-xs font-mono text-gray-500 uppercase tracking-widest">{language}</span>
          {statusText[runState] && (
            <span className="text-xs text-amber-600 font-medium animate-pulse">
              {statusText[runState]}
            </span>
          )}
        </div>

        <div className="flex items-center gap-2">
          {isPython && (
            <>
              {/* ↺ Reset — shown only when code was edited or live output exists */}
              {(editedCode !== code || liveOutput !== null) && (
                <button
                  onClick={handleReset}
                  className="text-xs text-gray-400 hover:text-gray-600 px-2 py-1 rounded transition-colors"
                  title="Restore original code and clear output"
                >
                  ↺ Reset
                </button>
              )}

              {/* ▶ Run */}
              <button
                onClick={handleRun}
                disabled={isRunning}
                className={`inline-flex items-center gap-1.5 px-3 py-1 rounded-md text-xs font-semibold transition-all
                  ${isRunning
                    ? "bg-gray-200 text-gray-400 cursor-not-allowed"
                    : "bg-emerald-500 hover:bg-emerald-600 text-white cursor-pointer shadow-sm"
                  }`}
              >
                {isRunning ? (
                  <>
                    <svg className="w-3 h-3 animate-spin" viewBox="0 0 12 12" fill="none" stroke="currentColor" strokeWidth="2">
                      <circle cx="6" cy="6" r="4" strokeOpacity="0.3" />
                      <path d="M6 2a4 4 0 0 1 4 4" strokeLinecap="round" />
                    </svg>
                    Running…
                  </>
                ) : (
                  <>
                    <svg className="w-3 h-3" viewBox="0 0 12 12" fill="currentColor">
                      <path d="M2 2l8 4-8 4V2z" />
                    </svg>
                    Run
                  </>
                )}
              </button>
            </>
          )}

          {/* Decorative dots */}
          <div className="flex gap-1.5 ml-1">
            <div className="w-2.5 h-2.5 rounded-full bg-gray-300" />
            <div className="w-2.5 h-2.5 rounded-full bg-gray-300" />
            <div className="w-2.5 h-2.5 rounded-full bg-gray-300" />
          </div>
        </div>
      </div>

      {/* ── Editable code textarea (auto-height) ── */}
      <textarea
        ref={textareaRef}
        value={editedCode}
        onChange={(e) => {
          setEditedCode(e.target.value);
          autoResize();
        }}
        spellCheck={false}
        className="w-full px-6 py-5 text-sm font-mono text-gray-800 leading-relaxed bg-gray-50/50
                   resize-none outline-none border-none focus:bg-white/80 transition-colors"
        style={{ minHeight: "80px", overflowY: "hidden" }}
        aria-label="Editable Python code"
      />

      {/* ── Single output panel (static → replaced by live on Run) ── */}
      {shownOutput !== null && (
        <div className={`border-t ${runState === "error" ? "border-red-200" : "border-emerald-200"}`}>
          <div className={`px-4 py-2 border-b flex items-center justify-between
            ${runState === "error" ? "border-red-200 bg-red-50" : "border-emerald-200 bg-emerald-50"}`}>
            <span className={`text-xs font-mono uppercase tracking-widest font-semibold
              ${runState === "error" ? "text-red-600" : "text-emerald-700"}`}>
              {runState === "error" ? "⚠ Error" : "▸ Output"}
            </span>
            {isLive && (
              <span className="text-xs text-emerald-600 font-medium">● live</span>
            )}
          </div>
          <pre className={`px-6 py-4 text-sm font-mono leading-relaxed whitespace-pre-wrap
            ${runState === "error" ? "text-red-800 bg-red-50/40" : "text-emerald-900 bg-emerald-50/50"}`}>
            {shownOutput}
          </pre>
        </div>
      )}

      {/* ── Hint when there is no output at all yet ── */}
      {isPython && shownOutput === null && (
        <div className="px-4 py-2 border-t border-gray-100 bg-gray-50/30">
          <p className="text-xs text-gray-400">
            ▸ Edit the code above, then click <strong>Run</strong> · First run loads Python (~3–5s)
          </p>
        </div>
      )}
    </div>
  );
};

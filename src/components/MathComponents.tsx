import React, { useState, useCallback, useRef, useEffect } from "react";
import { TopicVisualizer } from "./MathematicalVisualizations";
import { runPython } from "@/src/hooks/usePyodide";

export const VisualizerContainer = ({ title }: { title: string }) => {
  return (
    <div className="relative w-full h-full bg-surface-container flex items-center justify-center overflow-hidden">
      <div
        className="absolute inset-0 z-0 pointer-events-none opacity-10"
        style={{ backgroundImage: `radial-gradient(circle at center, var(--accent-teal) 0%, transparent 100%)` }}
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
    <div className="my-10 rounded border-none bg-surface-container shadow-2xl overflow-hidden transition-colors">

      {/* ── Header bar ── */}
      <div className="px-6 py-4 bg-surface-container-high border-none flex items-center justify-between">
        <div className="flex items-center gap-4">
          <span className="text-[10px] font-black text-on-surface-variant uppercase tracking-[0.2em]">{language}</span>
          {statusText[runState] && (
            <span className="text-[10px] text-accent-teal font-black uppercase tracking-widest animate-pulse">
              {statusText[runState]}
            </span>
          )}
        </div>

        <div className="flex items-center gap-3">
          {isPython && (
            <>
              {/* ↺ Reset */}
              {(editedCode !== code || liveOutput !== null) && (
                <button
                  onClick={handleReset}
                  className="text-[10px] font-black text-on-surface-variant hover:text-on-surface px-2 py-1 transition-colors uppercase tracking-widest"
                  title="Restore original code and clear output"
                >
                  ↺ Reset
                </button>
              )}

              {/* ▶ Run */}
              <button
                onClick={handleRun}
                disabled={isRunning}
                className={`inline-flex items-center gap-2 px-6 py-2 rounded text-[10px] font-black uppercase tracking-[0.2em] transition-all shadow-lg
                  ${isRunning
                    ? "bg-surface-container text-on-surface-variant cursor-not-allowed"
                    : "bg-accent-teal hover:scale-105 text-on-primary cursor-pointer"
                  }`}
              >
                {isRunning ? (
                  <>
                    <svg className="w-3 h-3 animate-spin" viewBox="0 0 12 12" fill="none" stroke="currentColor" strokeWidth="2">
                      <circle cx="6" cy="6" r="4" strokeOpacity="0.3" />
                      <path d="M6 2a4 4 0 0 1 4 4" strokeLinecap="round" />
                    </svg>
                    Running
                  </>
                ) : (
                  <>
                    <svg className="w-3 h-3" viewBox="0 0 12 12" fill="currentColor">
                      <path d="M2 2l8 4-8 4V2z" />
                    </svg>
                    Run Code
                  </>
                )}
              </button>
            </>
          )}

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
        className="w-full px-8 py-6 text-sm font-mono text-on-surface leading-relaxed bg-surface-container-low/50
                   resize-none outline-none border-none focus:bg-surface-container transition-colors"
        style={{ minHeight: "120px", overflowY: "hidden" }}
        aria-label="Editable Python code"
      />

      {/* ── Single output panel (static → replaced by live on Run) ── */}
      {shownOutput !== null && (
        <div className={`border-none transition-colors ${runState === "error" ? "bg-rose-500/10" : "bg-accent-teal/5"}`}>
          <div className={`px-8 py-3 border-none flex flex-wrap items-center justify-between transition-colors
            ${runState === "error" ? "bg-rose-500/20" : "bg-accent-teal/10"}`}>
            <span className={`text-[10px] font-black uppercase tracking-[0.2em]
              ${runState === "error" ? "text-rose-500" : "text-accent-teal"}`}>
              {runState === "error" ? "⚠ System Error" : "▸ Analytical Output"}
            </span>
            {isLive && (
              <span className="text-[10px] font-black uppercase tracking-widest text-accent-teal">● Live Runtime</span>
            )}
          </div>
          <div className={`px-4 md:px-6 py-4 text-sm font-mono leading-relaxed whitespace-pre-wrap transition-colors
            ${runState === "error" ? "text-rose-800 dark:text-rose-200 bg-rose-50/40 dark:bg-rose-900/20" : "text-emerald-900 dark:text-emerald-200 bg-emerald-50/50 dark:bg-emerald-900/10"}`}>
            {(() => {
              const lines = shownOutput.split("\n");
              const textLines: string[] = [];
              const images: string[] = [];
              
              lines.forEach(line => {
                if (line.includes("IMAGE_DATA:")) {
                  const b64 = line.split("IMAGE_DATA:")[1].trim();
                  if (b64) images.push(b64);
                } else {
                  textLines.push(line);
                }
              });

              return (
                <>
                  {textLines.length > 0 && <pre className="whitespace-pre-wrap font-mono m-0">{textLines.join("\n")}</pre>}
                  {images.map((b64, i) => (
                    <div key={i} className="mt-4 border rounded shadow-inner bg-white dark:bg-slate-800 overflow-hidden max-w-full transition-colors">
                      <img src={`data:image/png;base64,${b64}`} alt="Python Plot" className="block max-w-full h-auto mx-auto" />
                    </div>
                  ))}
                </>
              );
            })()}
          </div>
        </div>
      )}

      {/* ── Hint when there is no output at all yet ── */}
      {isPython && shownOutput === null && (
        <div className="px-4 py-2 border-t border-slate-100 dark:border-slate-800 bg-slate-50/30 dark:bg-slate-900/10 transition-colors">
          <p className="text-xs text-slate-400 dark:text-slate-500">
            ▸ Edit the code above, then click <strong>Run</strong> · First run loads Python (~3–5s)
          </p>
        </div>
      )}
    </div>
  );
};

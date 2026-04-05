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

  // Update original code when props change (navigating between topics)
  useEffect(() => {
    setEditedCode(code);
    setLiveOutput(null);
    setRunState("idle");
  }, [code]);

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

  // What to display in the output panel
  const shownOutput = liveOutput ?? staticOutput ?? null;
  const isLive = liveOutput !== null;
  const isRunning = runState === "loading-pyodide" || runState === "running";

  const statusText: Partial<Record<RunState, string>> = {
    "loading-pyodide": "Loading Python runtime…",
    running: "Running…",
  };

  return (
    <div className="my-10 rounded-xl border border-border-premium bg-bg-secondary shadow-xl overflow-hidden transition-all">

      {/* ── Header bar ── */}
      <div className="px-6 py-4 bg-bg-tertiary border-b border-border-premium flex items-center justify-between">
        <div className="flex items-center gap-4">
          <span className="text-[10px] font-black text-accent-premium uppercase tracking-[0.2em]">{language}</span>
          {statusText[runState] && (
            <span className="text-[10px] text-purple-premium font-black uppercase tracking-widest animate-pulse">
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
                  className="text-[10px] font-black text-muted-premium hover:text-text-premium px-2 py-1 transition-colors uppercase tracking-widest"
                  title="Restore original code and clear output"
                >
                  ↺ Reset
                </button>
              )}

              {/* ▶ Run */}
              <button
                onClick={handleRun}
                disabled={isRunning}
                className={`inline-flex items-center gap-2 px-6 py-2 rounded-lg text-[10px] font-black uppercase tracking-[0.2em] transition-all shadow-lg
                  ${isRunning
                    ? "bg-bg-secondary text-muted-premium cursor-not-allowed"
                    : "bg-accent-premium hover:bg-accent-premium-light hover:scale-105 text-white dark:text-bg cursor-pointer"
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
        className="w-full px-8 py-6 text-[13.5px] font-mono text-text-premium leading-relaxed bg-bg/40
                   resize-none outline-none border-none focus:bg-bg/60 transition-colors"
        style={{ minHeight: "120px", overflowY: "hidden" }}
        aria-label="Editable Python code"
      />

      {/* ── Single output panel (static → replaced by live on Run) ── */}
      {shownOutput !== null && (
        <div className={`border-t border-border-premium transition-colors ${runState === "error" ? "bg-red-500/5" : "bg-accent-premium/5"}`}>
          <div className={`px-8 py-3 border-b border-border-premium/50 flex flex-wrap items-center justify-between transition-colors
            ${runState === "error" ? "bg-red-500/10" : "bg-accent-premium/10"}`}>
            <span className={`text-[10px] font-black uppercase tracking-[0.2em]
              ${runState === "error" ? "text-red-500" : "text-accent-premium"}`}>
              {runState === "error" ? "⚠ System Error" : "▸ Analytical Output"}
            </span>
            {isLive && (
              <span className="text-[10px] font-black uppercase tracking-widest text-accent-premium/60">● Live Runtime</span>
            )}
          </div>
          <div className="px-8 py-6 text-[13px] font-mono leading-relaxed whitespace-pre-wrap text-text-premium opacity-90">
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
                    <div key={i} className="mt-6 border border-border-premium rounded-xl bg-white overflow-hidden max-w-full shadow-inner">
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
        <div className="px-8 py-3 border-t border-border-premium bg-bg-tertiary/40">
          <p className="text-[11px] text-muted-premium font-light tracking-wide italic">
            ▸ Edit the code above, then click <strong className="text-accent-premium">Run Code</strong> to see live computations.
          </p>
        </div>
      )}
    </div>
  );
};

import React, { useState, useCallback, useRef, useEffect } from "react";
import { TopicVisualizer } from "./MathematicalVisualizations";
import { runPython } from "@/src/hooks/usePyodide";
import { Copy, Check, Play, RotateCcw } from "lucide-react";
import { useTheme } from "@/src/hooks/useTheme";

// ── MONOKAI SYNTAX HIGHLIGHTER (Lightweight Regex) ──
const highlightPython = (code: string) => {
  // Common Colors (Synchronized with dark palette)
  const colors = {
    keyword: "#ff57a0", // Pink
    type: "#50E3C2",    // Mint
    function: "#ff9ac1", // Salmon
    string: "#f8e71c",  // Yellow
    number: "#ae81ff",  // Purple
    comment: "#75715e", // Grey
    special: "#ae81ff", // Purple
  };

  // 1. Define placeholders and storage for strings and comments
  const protectedMap: Record<string, string> = {};
  let protectedCounter = 0;

  // Single-pass regex to identify strings and comments to preserve them
  const protectedRegex = /(#.*)|(['"])(?:(?!\2|\\).|\\.)*\2/g;
  
  let html = code
    .replace(/&/g, "&amp;")
    .replace(/</g, "&lt;")
    .replace(/>/g, "&gt;");

  // Protect potentially volatile tokens
  html = html.replace(protectedRegex, (match, p1, p2) => {
    const id = `__PROT_${protectedCounter++}__`;
    const color = p1 ? colors.comment : colors.string;
    protectedMap[id] = `<span style="color: ${color}">${match}</span>`;
    return id;
  });

  // 2. Highlighting keywords and other patterns on "clean" code
  const keywords = /\b(def|class|if|else|elif|for|while|return|import|from|as|try|except|with|in|is|not|and|or|yield|pass|break|continue)\b/g;
  html = html.replace(keywords, `<span style="color: ${colors.keyword}">$1</span>`);

  html = html.replace(/\b([A-Z][a-zA-Z0-9_]*)\b/g, `<span style="color: ${colors.type}">$1</span>`);
  html = html.replace(/\b(self|cls|True|False|None)\b/g, `<span style="color: ${colors.special}">$1</span>`);
  html = html.replace(/\b(\d+(\.\d+)?)\b/g, `<span style="color: ${colors.number}">$1</span>`);
  html = html.replace(/\b([a-zA-Z_][a-zA-Z0-9_]*)(?=\()/g, `<span style="color: ${colors.function}">$1</span>`);

  // 3. Restore protected tokens
  Object.keys(protectedMap).forEach(id => {
    html = html.replace(id, protectedMap[id]);
  });

  return html;
};

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
  runnable?: boolean;    // if false, hide the Run button
}

export const CodeSnippet = ({ code, language = "python", staticOutput, runnable = true }: CodeSnippetProps) => {
  const [editedCode, setEditedCode] = useState(code);
  const [runState, setRunState] = useState<RunState>("idle");
  const [liveOutput, setLiveOutput] = useState<string | null>(null);
  const [showOutput, setShowOutput] = useState(false);
  const [copied, setCopied] = useState(false);
  const { theme } = useTheme();
  const textareaRef = useRef<HTMLTextAreaElement>(null);
  const preRef = useRef<HTMLPreElement>(null);
  const isPython = language === "python";
  const isDark = theme === "dark";

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

  // Synchronize scroll position between textarea and highlighted display
  const handleScroll = useCallback(() => {
    if (textareaRef.current && preRef.current) {
      preRef.current.scrollTop = textareaRef.current.scrollTop;
      preRef.current.scrollLeft = textareaRef.current.scrollLeft;
    }
  }, []);

  // Update original code when props change (navigating between topics)
  useEffect(() => {
    setEditedCode(code);
    setLiveOutput(null);
    setShowOutput(false);
    setRunState("idle");
  }, [code]);

  // Run the currently edited code through Pyodide
  const handleRun = useCallback(async () => {
    if (!runnable) return;
    setRunState("loading-pyodide");
    setShowOutput(true); // Open panel immediately to stabilize layout
    try {
      const result = await runPython(editedCode);
      setLiveOutput(result);
      setRunState(result.startsWith("[Error]") ? "error" : "done");
    } catch (err) {
      const msg = err instanceof Error ? err.message : String(err);
      setLiveOutput(`[Error] ${msg}`);
      setRunState("error");
    }
  }, [editedCode, runnable]);

  // Reset to original code & clear live output
  const handleReset = useCallback(() => {
    setEditedCode(code);
    setRunState("idle");
    setLiveOutput(null);
    setShowOutput(false); // Close panel on reset
  }, [code]);

  const handleCopy = useCallback(() => {
    navigator.clipboard.writeText(editedCode);
    setCopied(true);
    setTimeout(() => setCopied(false), 2000);
  }, [editedCode]);

  // What to display in the output panel
  const shownOutput = liveOutput ?? staticOutput ?? null;
  const isLive = liveOutput !== null;
  const isRunning = runState === "loading-pyodide" || runState === "running";

  const statusText: Partial<Record<RunState, string>> = {
    "loading-pyodide": "Loading Python runtime…",
    running: "Running…",
  };

  // Shared font & typography metrics for perfect alignment
  const editorMetrics = "text-[13px] md:text-[15.5px] font-mono leading-relaxed px-4 md:px-10 py-4 md:py-8";

  return (
    <div className="my-8 md:my-14 relative group animate-in fade-in slide-in-from-bottom-4 duration-700 max-w-4xl">
      {/* ── Main Code Window (Glassmorphism Container) ── */}
      <div className={`rounded-[24px] shadow-2xl overflow-hidden transition-all duration-500 glass-panel
        ${isDark ? "shadow-indigo-500/10" : "shadow-slate-200"}`}>

      {/* ── Header bar (Semi-transparent glossy overlay) ── */}
      <div className={`px-4 md:px-6 py-3 md:py-4 flex items-center justify-between border-b transition-colors duration-500
        ${isDark ? "bg-white/5 border-white/10" : "bg-white/40 border-black/5"}`}>
        <div className="flex items-center gap-6">
          {/* Traffic Lights (macOS Colors) */}
          <div className="flex gap-2 mr-2">
            <div className="w-3.5 h-3.5 rounded-full bg-[#ff5f56] shadow-sm border border-black/5" />
            <div className="w-3.5 h-3.5 rounded-full bg-[#ffbd2e] shadow-sm border border-black/5" />
            <div className="w-3.5 h-3.5 rounded-full bg-[#27c93f] shadow-sm border border-black/5" />
          </div>
          
          <span className={`text-[12px] font-black uppercase tracking-[0.25em] transition-colors
            ${isDark ? "text-white/30" : "text-muted-premium/60"}`}>
            {language}
          </span>
          {statusText[runState] && (
            <span className="text-[12px] text-[#ae81ff] font-black uppercase tracking-widest animate-pulse">
              {statusText[runState]}
            </span>
          )}
        </div>

        <div className="flex items-center gap-3">
        <div className="flex items-center gap-2">
          {isPython && (
            <>
              {/* Copy Button */}
              <button
                onClick={handleCopy}
                className={`flex items-center gap-1.5 p-2 rounded-md transition-colors group
                  ${isDark ? "hover:bg-white/5 text-white/40 hover:text-white" : "hover:bg-black/5 text-muted-premium hover:text-accent-premium"}`}
                title="Copy to clipboard"
              >
                {copied ? <Check className="w-3.5 h-3.5 text-green-premium" /> : <Copy className="w-3.5 h-3.5" />}
                <span className="text-[12px] font-black uppercase tracking-widest hidden sm:inline">
                  {copied ? "Copied" : "Copy"}
                </span>
              </button>
              
              {runnable && (
                <>
                  {/* ↺ Reset */}
                  {(editedCode !== code || liveOutput !== null) && (
                    <button
                      onClick={handleReset}
                      className={`flex items-center gap-1.5 p-2 rounded-md transition-colors group
                        ${isDark ? "hover:bg-white/5 text-white/40 hover:text-white" : "hover:bg-black/5 text-muted-premium hover:text-accent-premium"}`}
                      title="Restore original code"
                    >
                      <RotateCcw className="w-3.5 h-3.5" />
                      <span className="text-[12px] font-black uppercase tracking-widest hidden lg:inline">Reset</span>
                    </button>
                  )}

                  {/* ▶ Run */}
                  <button
                    onClick={handleRun}
                    disabled={isRunning}
                    className={`inline-flex items-center gap-2 px-4 md:px-6 py-2 rounded-lg text-[12px] font-black uppercase tracking-[0.2em] transition-all shadow-lg
                      ${isRunning
                        ? "bg-bg-secondary text-muted-premium cursor-not-allowed"
                        : "bg-accent-premium hover:bg-accent-premium-light hover:scale-105 text-white cursor-pointer"
                      }`}
                  >
                    {isRunning ? (
                      <>
                        <svg className="w-3 h-3 animate-spin" viewBox="0 0 12 12" fill="none" stroke="currentColor" strokeWidth="2">
                          <circle cx="6" cy="6" r="4" strokeOpacity="0.3" />
                          <path d="M6 2a4 4 0 0 1 4 4" strokeLinecap="round" />
                        </svg>
                        <span className="hidden sm:inline">Running</span>
                      </>
                    ) : (
                      <>
                        <Play className="w-3 h-3 fill-current" />
                        <span>Run</span>
                      </>
                    )}
                  </button>
                </>
              )}
            </>
          )}

        </div>

        </div>
      </div>

      {/* ── Code Editor Layer (Transparent to allow glass effect) ── */}
      <div className="relative bg-transparent overflow-hidden group">
        {/* Layer 1: Highlighted Display */}
        <pre
          ref={preRef}
          aria-hidden="true"
          className={`absolute inset-0 m-0 pointer-events-none whitespace-pre overflow-hidden ${editorMetrics}`}
          style={{ color: "#ffffff" }}
          dangerouslySetInnerHTML={{ __html: highlightPython(editedCode) + "\n" }}
        />

        {/* Layer 2: Interactive Textarea */}
        <textarea
          ref={textareaRef}
          value={editedCode}
          onChange={(e) => {
            setEditedCode(e.target.value);
            autoResize();
          }}
          onScroll={handleScroll}
          spellCheck={false}
          wrap="off"
          className={`relative w-full bg-transparent text-transparent caret-white 
                     resize-none outline-none border-none focus:outline-none transition-colors 
                     overflow-x-auto min-h-[120px] ${editorMetrics}`}
          style={{ overflowY: "hidden" }}
          aria-label="Editable Python code"
        />
      </div>

      {/* ── Single output panel (Glassmorphism continuation) ── */}
      {showOutput && shownOutput !== null && (
        <div className={`border-t animate-in fade-in slide-in-from-top-2 duration-300 transition-colors
          ${isDark ? "border-white/5 bg-slate-900/20" : "border-black/5 bg-white/20"}`}>
          <div className={`px-8 py-3 border-b border-white/5 flex flex-wrap items-center justify-between transition-colors
            ${runState === "error" ? "bg-red-500/10" : isDark ? "bg-white/5" : "bg-black/5"}`}>
            <span className={`text-[12px] font-black uppercase tracking-[0.2em]
              ${runState === "error" ? "text-red-500" : isDark ? "text-white/40" : "text-muted-premium"}`}>
              {runState === "error" ? "⚠ System Error" : "▸ Output"}
            </span>
          </div>
          <div className={`px-4 md:px-8 py-3 md:py-6 text-[13px] md:text-[15px] font-mono leading-relaxed whitespace-pre-wrap overflow-x-auto transition-colors
            ${isDark ? "text-white/90" : "text-text-premium"}`}>
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

        </div>
      </div>
  );
};

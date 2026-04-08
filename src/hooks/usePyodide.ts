/**
 * usePyodide — lazy-loads Pyodide only when first needed.
 * Singleton: one instance shared across all code blocks on the page.
 * Auto-detects required packages (numpy, scipy, pandas, matplotlib).
 */

declare global {
  interface Window {
    loadPyodide: (config: { indexURL: string }) => Promise<PyodideInstance>;
    pyodideInstance?: PyodideInstance;
    pyodideLoading?: Promise<PyodideInstance>;
  }
}

interface PyodideInstance {
  loadPackage: (pkgs: string[]) => Promise<void>;
  runPythonAsync: (code: string) => Promise<unknown>;
  runPython: (code: string) => unknown;
}

const PYODIDE_CDN = "https://cdn.jsdelivr.net/pyodide/v0.26.2/full/";

/** Packages we can detect and load on demand */
const DETECTABLE_PACKAGES: Record<string, string> = {
  numpy: "numpy",
  scipy: "scipy",
  pandas: "pandas",
  matplotlib: "matplotlib",
  sklearn: "scikit-learn",
  skimage: "scikit-image",
  sympy: "sympy",
};

/** Detect which packages are imported in the code snippet */
export function detectPackages(code: string): string[] {
  const needed: string[] = [];
  for (const [importName, packageName] of Object.entries(DETECTABLE_PACKAGES)) {
    if (
      code.includes(`import ${importName}`) ||
      code.includes(`from ${importName}`)
    ) {
      needed.push(packageName);
    }
  }
  return needed;
}

/** Inject pyodide script tag once */
function injectPyodideScript(): Promise<void> {
  return new Promise((resolve, reject) => {
    if (document.querySelector('script[data-pyodide]')) {
      resolve();
      return;
    }
    const script = document.createElement("script");
    script.src = `${PYODIDE_CDN}pyodide.js`;
    script.setAttribute("data-pyodide", "true");
    script.onload = () => resolve();
    script.onerror = () => reject(new Error("Failed to load Pyodide script"));
    document.head.appendChild(script);
  });
}

/** Get or create the singleton Pyodide instance */
export async function getPyodide(): Promise<PyodideInstance> {
  // Already loaded
  if (window.pyodideInstance) return window.pyodideInstance;

  // Loading in progress — wait for it
  if (window.pyodideLoading) return window.pyodideLoading;

  // Start loading
  window.pyodideLoading = (async () => {
    await injectPyodideScript();
    const pyodide = await window.loadPyodide({ indexURL: PYODIDE_CDN });
    window.pyodideInstance = pyodide;
    return pyodide;
  })();

  return window.pyodideLoading;
}

/** Run code with auto-detected packages, capturing stdout */
export async function runPython(code: string): Promise<string> {
  const pyodide = await getPyodide();

  // Load required packages for this snippet
  const packages = detectPackages(code);
  if (packages.length > 0) {
    await pyodide.loadPackage(packages);
  }

  // Redirect stdout to capture print() output
  const captureSetup = `
import sys
import io
# Create or clear the capture buffer
if '_capture_buf' not in globals():
    _capture_buf = io.StringIO()
else:
    _capture_buf.seek(0)
    _capture_buf.truncate(0)

sys.stdout = _capture_buf
sys.stderr = _capture_buf
`;
  await pyodide.runPythonAsync(captureSetup);

  const captureRead = `
try:
    import matplotlib.pyplot as plt
    import io
    import base64
    if 'plt' in globals() and plt.get_fignums():
        buf = io.BytesIO()
        plt.savefig(buf, format='png')
        buf.seek(0)
        img_str = base64.b64encode(buf.read()).decode('utf-8')
        print(f"IMAGE_DATA:{img_str}")
        plt.close('all')
except Exception:
    pass

sys.stdout = sys.__stdout__
sys.stderr = sys.__stderr__
_capture_buf.getvalue()
`;

  try {
    await pyodide.runPythonAsync(code);
  } catch (err) {
    // Still capture any partial output, then re-raise
    const partial = (await pyodide.runPythonAsync(captureRead)) as string;
    const errMsg = err instanceof Error ? err.message : String(err);
    return partial ? `${partial}\n[Error] ${errMsg}` : `[Error] ${errMsg}`;
  }

  const output = (await pyodide.runPythonAsync(captureRead)) as string;
  return output || "(no output)";
}

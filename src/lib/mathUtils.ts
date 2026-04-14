import katex from 'katex';

/**
 * Centralized utility for sanitizing mathematical content.
 * Handles common issues between Markdown/JS strings and KaTeX rendering.
 */
export const cleanMathContent = (content: string | undefined): string => {
  if (!content) return '';

  return content
    // Fix common Markdown artifacts that break KaTeX
    .replace(/\\_/g, '_')      // Replace escaped underscores with literal underscores
    .replace(/\\\^/g, '^')      // Replace escaped carets with literal carets
    
    // Fix potential quadruple escaping where only double was intended
    // This happens if backslashes are doubled twice during file operations
    .replace(/\\\\\\/g, '\\')   // Condense triple backslashes to single (common edge case)
    
    // Ensure standard KaTeX commands like \beta and \mu are correctly single-escaped in the final string
    // If the input string has double backslashes (e.g. from a JS template literal on disk)
    // they already exist as single backslashes in memory. 
    // We don't want to over-sanitize here, but we do want to catch "corrupted" commands.
    ;
};

/**
 * Renders a LaTeX string into an HTML string using KaTeX.
 * Optimized for use within JSXGraph text elements.
 */
export const renderTex = (latex: string, displayMode: boolean = false): string => {
  try {
    return katex.renderToString(latex, {
      displayMode,
      throwOnError: false,
      trust: true
    });
  } catch (err) {
    console.error('KaTeX rendering error:', err);
    return latex; // Fallback to raw string
  }
};

/**
 * Normal Cumulative Distribution Function (CDF)
 * Approximation for N(0,1)
 */
export const normalCDF = (x: number): number => {
  const t = 1 / (1 + 0.2316419 * Math.abs(x));
  const d = 0.3989423 * Math.exp(-x * x / 2);
  const p = d * t * (0.3193815 + t * (-0.3565638 + t * (1.781478 + t * (-1.821256 + t * 1.330274))));
  return x > 0 ? 1 - p : p;
};

/**
 * Inverse Normal Distribution (Probit function)
 * Rational approximation (Acklam's algorithm)
 */
export const normalInv = (p: number): number => {
  if (p <= 0 || p >= 1) return 0;
  
  // Coefficients in rational approximations
  const a = [-3.969683028665376e+01,  2.209460984245205e+02, -2.759285104469687e+02,  1.383577518672690e+02, -3.066479806614716e+01,  2.506628277459239e+00];
  const b = [-5.447609879822406e+01,  1.615858368580409e+02, -1.556989798598866e+02,  6.680131188771972e+01, -1.328068155288572e+01];
  const c = [-7.784894002430293e-03, -3.223964580411365e-01, -2.400758277161838e+00, -2.549732739341734e+00,  4.374664141464968e+00,  2.938163982698783e+00];
  const d = [ 7.784695709041462e-03,  3.224671290700398e-01,  2.445134137142996e+00,  3.754408661907416e+00];

  const p_low = 0.02425;
  const p_high = 1 - p_low;
  let q, r;

  if (p < p_low) {
    q = Math.sqrt(-2 * Math.log(p));
    return (((((c[0] * q + c[1]) * q + c[2]) * q + c[3]) * q + c[4]) * q + c[5]) /
           ((((d[0] * q + d[1]) * q + d[2]) * q + d[3]) * q + 1);
  } else if (p <= p_high) {
    q = p - 0.5;
    r = q * q;
    return (((((a[0] * r + a[1]) * r + a[2]) * r + a[3]) * r + a[4]) * r + a[5]) * q /
           (((((b[0] * r + b[1]) * r + b[2]) * r + b[3]) * r + b[4]) * r + 1);
  } else {
    q = Math.sqrt(-2 * Math.log(1 - p));
    return -(((((c[0] * q + c[1]) * q + c[2]) * q + c[3]) * q + c[4]) * q + c[5]) /
            ((((d[0] * q + d[1]) * q + d[2]) * q + d[3]) * q + 1);
  }
};

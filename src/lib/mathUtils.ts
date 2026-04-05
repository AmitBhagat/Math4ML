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

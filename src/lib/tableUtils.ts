export function escapeHtml(text: string) {
  return text
    .replace(/&/g, '&amp;')
    .replace(/</g, '&lt;')
    .replace(/>/g, '&gt;')
    .replace(/"/g, '&quot;')
    .replace(/'/g, '&#39;');
}

export function tableRowsToHtml(rows: string[]): string {
  if (!rows || rows.length === 0) return '';

  // Normalize rows: split each pipe row into cells
  const parsed = rows
    .map(r => r.split('|').map(c => c.trim()).filter(c => c !== ''))
    .filter(r => r.length > 0);

  if (parsed.length === 0) return '';

  const [headers, ...content] = parsed;

  const thead = `  <thead>\n    <tr class=\"bg-gray-50 border-b\">\n${headers.map(h => `      <th class=\"px-6 py-3 font-bold text-sm text-gray-900\">${escapeHtml(h)}</th>`).join('\n')}\n    </tr>\n  </thead>\n`;

  const tbodyRows = content.map(row => {
    const tds = row.map(cell => `      <td class=\"px-6 py-3 text-sm text-gray-700\">${escapeHtml(cell)}</td>`).join('\n');
    return `    <tr class=\"hover:bg-gray-50\">\n${tds}\n    </tr>`;
  }).join('\n');

  const tbody = `  <tbody class=\"divide-y divide-gray-100\">\n${tbodyRows}\n  </tbody>\n`;

  const table = `<table class=\"w-full text-left border-collapse bg-white\">\n${thead}${tbody}</table>`;
  return table;
}

export const getCategoryTheme = (categoryId: string) => {
  const themes: Record<string, { primary: string; secondary: string; border: string }> = {
    'linear-algebra': {
      primary: '#8250df', // Purple
      secondary: '#bc8cff',
      border: 'rgba(130, 80, 223, 0.2)'
    },
    'calculus': {
      primary: '#0969da', // Blue
      secondary: '#54aeff',
      border: 'rgba(9, 105, 218, 0.2)'
    },
    'probability': {
      primary: '#2dd4bf', // Teal
      secondary: '#99f6e4',
      border: 'rgba(45, 212, 191, 0.2)'
    },
    'statistics': {
      primary: '#f97316', // Orange
      secondary: '#fbbf24',
      border: 'rgba(249, 115, 22, 0.2)'
    }
  };

  return themes[categoryId] || {
    primary: 'var(--accent)',
    secondary: 'var(--purple)',
    border: 'var(--border)'
  };
};

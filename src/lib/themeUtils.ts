export const getCategoryTheme = (categoryId: string) => {
  const themes: Record<string, { primary: string; secondary: string; border: string }> = {
    // Mathematics Cluster
    'linear-algebra': {
      primary: '#bc8cff', // Purple
      secondary: '#d2b3ff',
      border: 'rgba(188, 140, 255, 0.2)'
    },
    'calculus': {
      primary: '#58a6ff', // Blue
      secondary: '#a5d6ff',
      border: 'rgba(88, 166, 255, 0.2)'
    },
    'probability': {
      primary: '#e3b341', // Gold
      secondary: '#f2cc60',
      border: 'rgba(227, 179, 65, 0.2)'
    },
    'statistics': {
      primary: '#3fb950', // Green
      secondary: '#7ee787',
      border: 'rgba(63, 185, 80, 0.2)'
    },
    'information-theory': {
      primary: '#ff7b72', // Red
      secondary: '#ffa198',
      border: 'rgba(255, 123, 114, 0.2)'
    },
    'discrete-math': {
      primary: '#bc8cff', // Cycle: Purple
      secondary: '#d2b3ff',
      border: 'rgba(188, 140, 255, 0.2)'
    },

    // Machine Learning Cluster
    'supervised-learning': {
      primary: '#58a6ff', // Blue
      secondary: '#a5d6ff',
      border: 'rgba(88, 166, 255, 0.2)'
    },
    'unsupervised-learning': {
      primary: '#bc8cff', // Purple
      secondary: '#d2b3ff',
      border: 'rgba(188, 140, 255, 0.2)'
    },
    'deep-learning': {
      primary: '#e3b341', // Gold
      secondary: '#f2cc60',
      border: 'rgba(227, 179, 65, 0.2)'
    },
    'reinforcement-learning': {
      primary: '#3fb950', // Green
      secondary: '#7ee787',
      border: 'rgba(63, 185, 80, 0.2)'
    },
    'data-preprocessing': {
      primary: '#ff7b72', // Red
      secondary: '#ffa198',
      border: 'rgba(255, 123, 114, 0.2)'
    },
    'model-evaluation': {
      primary: '#58a6ff', // Blue
      secondary: '#a5d6ff',
      border: 'rgba(88, 166, 255, 0.2)'
    }
  };

  return themes[categoryId] || {
    primary: '#bc8cff',
    secondary: '#d2b3ff',
    border: 'rgba(188, 140, 255, 0.2)'
  };
};

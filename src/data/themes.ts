type ThemeType = {
  [kind: string]: {
    darkMode: string;
    lightMode: string;
  };
};

export const themes: ThemeType = {
  red: {
    darkMode: '#e84545',
    lightMode: '#d72323',
  },
  yellow: {
    darkMode: '#FFD460',
    lightMode: '#D44000',
  },
  green: {
    darkMode: '#4E9F3D',
    lightMode: '#285430',
  },
  blue: {
    darkMode: '#3490DE',
    lightMode: '#27496D',
  },
  purple: {
    darkMode: '#8d72e1',
    lightMode: '#645caa',
  },
};

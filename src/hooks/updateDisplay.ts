import { useEffect } from 'react';
import { themes } from '../data/themes';

export const updateDisplay = (darkMode: boolean, color: string) => {
  useEffect(() => {
    if (darkMode) {
      document.documentElement.classList.add('darkMode');
      document.documentElement.classList.remove('lightMode');
    }
    if (!darkMode) {
      document.documentElement.classList.add('lightMode');
      document.documentElement.classList.remove('darkMode');
    }
  }, [darkMode]);

  useEffect(() => {
    let displayColor: string;
    if (darkMode) {
      displayColor = themes[color].darkMode;
    } else displayColor = themes[color].lightMode;

    document.documentElement.style.setProperty('--accent', displayColor);
  }, [color, darkMode]);
};

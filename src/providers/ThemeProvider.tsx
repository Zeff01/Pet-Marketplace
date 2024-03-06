import { COLORS } from '../theme/colors';
import { fonts } from '@theme';
import { useContext, createContext, ReactNode, useState, useEffect } from 'react';

type ThemeValueTypes = {
  currentTheme: 'light' | 'dark';
  switchTheme(): void;
  colors: (typeof COLORS)['Light Mode'] | (typeof COLORS)['Dark Mode'];
  fonts: typeof fonts;
};

export const ThemeContext = createContext<null | ThemeValueTypes>(null);

export function ThemeProvider({ children }: { children: ReactNode }) {
  const [currentTheme, setCurrentTheme] = useState<'light' | 'dark'>('dark');
  const [colors, setColors] = useState(
    currentTheme === 'dark' ? COLORS['Light Mode'] : COLORS['Dark Mode'],
  );
  function switchTheme() {
    setCurrentTheme(t => (t === 'light' ? 'dark' : 'light'));
  }

  useEffect(() => {
    const newColor = currentTheme === 'light' ? COLORS['Light Mode'] : COLORS['Dark Mode'];
    setColors(newColor);
  }, [currentTheme]);

  return (
    <ThemeContext.Provider
      value={{
        currentTheme,
        switchTheme,
        colors,
        fonts,
      }}>
      {children}
    </ThemeContext.Provider>
  );
}

import { useContext } from 'react';
import { ThemeContext } from '../providers/ThemeProvider';

export function useGlobalTheme() {
  const theme = useContext(ThemeContext);
  if (!theme) {
    throw new Error('invalid theme');
  }
  return theme;
}

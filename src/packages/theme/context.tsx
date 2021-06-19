import { Theme } from './types';
import React, { FC, createContext, useContext, useEffect } from 'react';

const ThemeContext = createContext<Theme>(null);

const mapToProperties = (
  source: {
    [x: string]: string | number;
  },
  prefix: string
) => {
  Object.entries(source).forEach(([key, value]) => {
    document.documentElement.style.setProperty(
      `--${prefix}-${key}`,

      value.toString()
    );
  });
};

const ThemeProvider: FC<{ theme: Theme }> = ({ children, theme }) => {
  useEffect(() => {
    const { color, space } = theme;

    document.documentElement.style.setProperty(
      '--space',
      space.toString() + 'px'
    );

    mapToProperties(color, 'color');
  }, [theme]);

  return (
    <ThemeContext.Provider value={theme}>{children}</ThemeContext.Provider>
  );
};

const useTheme = () => useContext(ThemeContext);

export { ThemeContext, ThemeProvider, useTheme };

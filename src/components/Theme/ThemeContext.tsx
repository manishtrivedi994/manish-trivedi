import React, {createContext, useContext, useState, useEffect} from 'react';
import {Appearance} from 'react-native';
import AsyncStorage from '@react-native-async-storage/async-storage';
import {
  lightTheme,
  getTheme,
  type Theme,
  type ThemeMode,
} from '../../config/theme';
import {
  addOpacity,
  darkenColor,
  ensureValidGradient,
} from '../../utils/colorUtils';

const ACCENT_COLORS = [
  '#8e44ad', // purple
  '#3498db', // blue
  '#e67e22', // orange
  '#27ae60', // green
  '#e74c3c', // red
  '#f1c40f', // yellow
];

const STORAGE_KEY = 'APP_THEME';

interface ThemeState {
  mode: ThemeMode;
  accentColor: string;
}

const defaultThemeState: ThemeState = {
  mode: (Appearance.getColorScheme() as ThemeMode) || 'light',
  accentColor: ACCENT_COLORS[0],
};

interface ThemeContextType {
  theme: Theme;
  themeState: ThemeState;
  setMode: (mode: ThemeMode) => void;
  setAccentColor: (color: string) => void;
  accentColors: string[];
  isDark: boolean;
}

const ThemeContext = createContext<ThemeContextType>({
  theme: lightTheme,
  themeState: defaultThemeState,
  setMode: () => {},
  setAccentColor: () => {},
  accentColors: ACCENT_COLORS,
  isDark: false,
});

export const useTheme = () => useContext(ThemeContext);

export const ThemeProvider = ({children}: {children: React.ReactNode}) => {
  const [themeState, setThemeState] = useState<ThemeState>(defaultThemeState);

  // Get the base theme based on mode
  const baseTheme = getTheme(themeState.mode);

  // Ensure accentColor is valid
  const validAccentColor = themeState.accentColor || ACCENT_COLORS[0];

  // Create a custom theme with the selected accent color
  const theme: Theme = {
    ...baseTheme,
    colors: {
      ...baseTheme.colors,
      primary: validAccentColor,
      primaryLight: addOpacity(validAccentColor, 0.2),
      primaryDark: darkenColor(validAccentColor, 30),
    },
    gradients: {
      ...baseTheme.gradients,
      primary: ensureValidGradient([
        darkenColor(validAccentColor, 20),
        validAccentColor,
      ]),
    },
  };

  useEffect(() => {
    AsyncStorage.getItem(STORAGE_KEY).then(stored => {
      if (stored) {
        try {
          const savedTheme = JSON.parse(stored);
          // Validate saved theme data
          if (savedTheme && typeof savedTheme === 'object') {
            const validatedTheme: ThemeState = {
              mode: savedTheme.mode === 'dark' ? 'dark' : 'light',
              accentColor:
                savedTheme.accentColor &&
                typeof savedTheme.accentColor === 'string'
                  ? savedTheme.accentColor
                  : ACCENT_COLORS[0],
            };
            setThemeState(validatedTheme);
          }
        } catch (error) {
          console.warn('Failed to parse stored theme:', error);
          // Keep default theme if parsing fails
        }
      }
    });
  }, []);

  const setMode = (mode: ThemeMode) => {
    const newThemeState = {...themeState, mode};
    setThemeState(newThemeState);
    AsyncStorage.setItem(STORAGE_KEY, JSON.stringify(newThemeState));
  };

  const setAccentColor = (color: string) => {
    if (!color || typeof color !== 'string') {
      console.warn('Invalid accent color provided:', color);
      return;
    }
    const newThemeState = {...themeState, accentColor: color};
    setThemeState(newThemeState);
    AsyncStorage.setItem(STORAGE_KEY, JSON.stringify(newThemeState));
  };

  const value: ThemeContextType = {
    theme,
    themeState,
    setMode,
    setAccentColor,
    accentColors: ACCENT_COLORS,
    isDark: themeState.mode === 'dark',
  };

  return (
    <ThemeContext.Provider value={value}>{children}</ThemeContext.Provider>
  );
};

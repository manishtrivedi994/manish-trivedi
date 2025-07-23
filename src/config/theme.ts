import {Dimensions} from 'react-native';

const {width: screenWidth, height: screenHeight} = Dimensions.get('window');

// Color palette
export const colors = {
  // Primary colors
  primary: {
    50: '#f3e8ff',
    100: '#e9d5ff',
    200: '#d8b4fe',
    300: '#c084fc',
    400: '#a855f7',
    500: '#8e44ad', // Main primary
    600: '#7c3aed',
    700: '#6b21a8',
    800: '#581c87',
    900: '#3b0764',
  },
  // Secondary colors
  secondary: {
    50: '#eff6ff',
    100: '#dbeafe',
    200: '#bfdbfe',
    300: '#93c5fd',
    400: '#60a5fa',
    500: '#3498db', // Main secondary
    600: '#2563eb',
    700: '#1d4ed8',
    800: '#1e40af',
    900: '#1e3a8a',
  },
  // Neutral colors
  neutral: {
    50: '#f8fafc',
    100: '#f1f5f9',
    200: '#e2e8f0',
    300: '#cbd5e1',
    400: '#94a3b8',
    500: '#64748b',
    600: '#475569',
    700: '#334155',
    800: '#1e293b',
    900: '#0f172a',
  },
  // Success colors
  success: {
    50: '#f0fdf4',
    100: '#dcfce7',
    200: '#bbf7d0',
    300: '#86efac',
    400: '#4ade80',
    500: '#27ae60',
    600: '#16a34a',
    700: '#15803d',
    800: '#166534',
    900: '#14532d',
  },
  // Warning colors
  warning: {
    50: '#fffbeb',
    100: '#fef3c7',
    200: '#fde68a',
    300: '#fcd34d',
    400: '#fbbf24',
    500: '#f1c40f',
    600: '#d97706',
    700: '#b45309',
    800: '#92400e',
    900: '#78350f',
  },
  // Error colors
  error: {
    50: '#fef2f2',
    100: '#fee2e2',
    200: '#fecaca',
    300: '#fca5a5',
    400: '#f87171',
    500: '#e74c3c',
    600: '#dc2626',
    700: '#b91c1c',
    800: '#991b1b',
    900: '#7f1d1d',
  },
};

// Spacing system
export const spacing = {
  xs: 4,
  sm: 8,
  md: 16,
  lg: 24,
  xl: 32,
  xxl: 48,
  xxxl: 64,
};

// Border radius
export const borderRadius = {
  xs: 4,
  sm: 8,
  md: 12,
  lg: 16,
  xl: 20,
  xxl: 24,
  xxxl: 32,
  full: 9999,
};

// Typography
export const typography = {
  // Font families - configure custom fonts here
  fonts: {
    // Default system fonts (fallbacks)
    primary: {
      regular: 'System',
      medium: 'System',
      semibold: 'System',
      bold: 'System',
      extrabold: 'System',
    },
    // Custom fonts - uncomment and configure when adding custom fonts
    // primary: {
    //   regular: 'Inter-Regular',
    //   medium: 'Inter-Medium',
    //   semibold: 'Inter-SemiBold',
    //   bold: 'Inter-Bold',
    //   extrabold: 'Inter-ExtraBold',
    // },
    // secondary: {
    //   regular: 'Poppins-Regular',
    //   medium: 'Poppins-Medium',
    //   semibold: 'Poppins-SemiBold',
    //   bold: 'Poppins-Bold',
    //   extrabold: 'Poppins-ExtraBold',
    // },
    // Display fonts for headings
    display: {
      regular: 'System',
      medium: 'System',
      semibold: 'System',
      bold: 'System',
      extrabold: 'System',
    },
    // Monospace fonts for code
    mono: {
      regular: 'System',
      medium: 'System',
      semibold: 'System',
      bold: 'System',
    },
  },
  sizes: {
    xs: 12,
    sm: 14,
    md: 16,
    lg: 18,
    xl: 20,
    xxl: 24,
    xxxl: 28,
    display: 32,
    displayLarge: 36,
  },
  weights: {
    normal: '400' as const,
    medium: '500' as const,
    semibold: '600' as const,
    bold: '700' as const,
    extrabold: '800' as const,
  },
  lineHeights: {
    tight: 1.2,
    normal: 1.4,
    relaxed: 1.6,
  },
};

// Helper function to get font family based on weight
export const getFontFamily = (
  weight: keyof typeof typography.weights = 'normal',
  family: 'primary' | 'display' | 'mono' = 'primary',
): string => {
  const weightMap: Record<string, string> = {
    '400': 'regular',
    '500': 'medium',
    '600': 'semibold',
    '700': 'bold',
    '800': 'extrabold',
  };
  const fontWeight = weightMap[typography.weights[weight]] || 'regular';
  return typography.fonts[family][
    fontWeight as keyof (typeof typography.fonts)[typeof family]
  ];
};

// Shadows
export const shadows = {
  sm: {
    shadowColor: '#000',
    shadowOffset: {width: 0, height: 1},
    shadowOpacity: 0.05,
    shadowRadius: 2,
    elevation: 1,
  },
  md: {
    shadowColor: '#000',
    shadowOffset: {width: 0, height: 4},
    shadowOpacity: 0.1,
    shadowRadius: 8,
    elevation: 4,
  },
  lg: {
    shadowColor: '#000',
    shadowOffset: {width: 0, height: 8},
    shadowOpacity: 0.15,
    shadowRadius: 16,
    elevation: 8,
  },
  xl: {
    shadowColor: '#000',
    shadowOffset: {width: 0, height: 12},
    shadowOpacity: 0.2,
    shadowRadius: 24,
    elevation: 12,
  },
};

// Screen dimensions
export const screen = {
  width: screenWidth,
  height: screenHeight,
};

// Utility function to ensure valid gradient colors
const ensureValidGradient = (colors: string[]): string[] => {
  // Filter out any null, undefined, or invalid colors
  const validColors = colors.filter(
    color =>
      color &&
      typeof color === 'string' &&
      (color.startsWith('#') ||
        color.startsWith('rgba') ||
        color.startsWith('rgb')),
  );

  // If no valid colors, return fallback
  if (validColors.length === 0) {
    return ['#8e44ad', '#3498db'];
  }

  // If only one color, duplicate it
  if (validColors.length === 1) {
    return [validColors[0], validColors[0]];
  }

  return validColors;
};

// Light theme
export const lightTheme = {
  colors: {
    primary: colors.primary[500],
    primaryLight: colors.primary[400],
    primaryDark: colors.primary[600],
    secondary: colors.secondary[500],
    secondaryLight: colors.secondary[400],
    secondaryDark: colors.secondary[600],
    background: colors.neutral[50],
    backgroundSecondary: colors.neutral[100],
    card: '#ffffff',
    cardSecondary: colors.neutral[50],
    text: colors.neutral[900],
    textSecondary: colors.neutral[600],
    textTertiary: colors.neutral[500],
    border: colors.neutral[200],
    borderLight: colors.neutral[100],
    success: colors.success[500],
    warning: colors.warning[500],
    error: colors.error[500],
    overlay: 'rgba(0, 0, 0, 0.5)',
  },
  gradients: {
    primary: ensureValidGradient([colors.primary[400], colors.primary[600]]),
    secondary: ensureValidGradient([
      colors.secondary[400],
      colors.secondary[600],
    ]),
    background: ensureValidGradient([colors.neutral[50], colors.neutral[100]]),
    card: ensureValidGradient(['#ffffff', colors.neutral[50]]),
  },
  spacing,
  borderRadius,
  typography,
  shadows,
  screen,
};

// Dark theme
export const darkTheme = {
  colors: {
    primary: colors.primary[400],
    primaryLight: colors.primary[300],
    primaryDark: colors.primary[500],
    secondary: colors.secondary[400],
    secondaryLight: colors.secondary[300],
    secondaryDark: colors.secondary[500],
    background: colors.neutral[900],
    backgroundSecondary: colors.neutral[800],
    card: colors.neutral[800],
    cardSecondary: colors.neutral[700],
    text: colors.neutral[50],
    textSecondary: colors.neutral[300],
    textTertiary: colors.neutral[400],
    border: colors.neutral[700],
    borderLight: colors.neutral[600],
    success: colors.success[400],
    warning: colors.warning[400],
    error: colors.error[400],
    overlay: 'rgba(0, 0, 0, 0.7)',
  },
  gradients: {
    primary: ensureValidGradient([colors.primary[600], colors.primary[800]]),
    secondary: ensureValidGradient([
      colors.secondary[600],
      colors.secondary[800],
    ]),
    background: ensureValidGradient([colors.neutral[900], colors.neutral[800]]),
    card: ensureValidGradient([colors.neutral[800], colors.neutral[700]]),
  },
  spacing,
  borderRadius,
  typography,
  shadows,
  screen,
};

// Theme type
export type Theme = typeof lightTheme;
export type ThemeMode = 'light' | 'dark';

// Utility functions
export const getTheme = (mode: ThemeMode): Theme => {
  return mode === 'dark' ? darkTheme : lightTheme;
};

// Common styles that can be reused
export const commonStyles = {
  container: {
    flex: 1,
  },
  centerContent: {
    alignItems: 'center' as const,
    justifyContent: 'center' as const,
  },
  row: {
    flexDirection: 'row' as const,
    alignItems: 'center' as const,
  },
  spaceBetween: {
    flexDirection: 'row' as const,
    alignItems: 'center' as const,
    justifyContent: 'space-between' as const,
  },
  card: (theme: Theme) => ({
    backgroundColor: theme.colors.card,
    borderRadius: theme.borderRadius.lg,
    padding: theme.spacing.lg,
    ...theme.shadows.md,
  }),
  text: (theme: Theme, size: keyof typeof typography.sizes = 'md') => ({
    fontSize: theme.typography.sizes[size],
    color: theme.colors.text,
    lineHeight:
      theme.typography.sizes[size] * theme.typography.lineHeights.normal,
  }),
  heading: (theme: Theme, size: keyof typeof typography.sizes = 'xl') => ({
    fontSize: theme.typography.sizes[size],
    fontWeight: theme.typography.weights.bold,
    color: theme.colors.text,
    lineHeight:
      theme.typography.sizes[size] * theme.typography.lineHeights.tight,
  }),
  button: (
    theme: Theme,
    variant: 'primary' | 'secondary' | 'outline' = 'primary',
  ) => {
    const baseStyle = {
      paddingVertical: theme.spacing.md,
      paddingHorizontal: theme.spacing.lg,
      borderRadius: theme.borderRadius.md,
      alignItems: 'center' as const,
      justifyContent: 'center' as const,
    };

    switch (variant) {
      case 'primary':
        return {
          ...baseStyle,
          backgroundColor: theme.colors.primary,
        };
      case 'secondary':
        return {
          ...baseStyle,
          backgroundColor: theme.colors.secondary,
        };
      case 'outline':
        return {
          ...baseStyle,
          backgroundColor: 'transparent',
          borderWidth: 1,
          borderColor: theme.colors.primary,
        };
      default:
        return baseStyle;
    }
  },
};

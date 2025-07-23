# Theme System Documentation

This document explains how to use the comprehensive theme system in the React Native app.

## Overview

The theme system provides a centralized way to manage colors, spacing, typography, shadows, and other design tokens throughout the app. It supports both light and dark modes with customizable accent colors.

## Key Features

- **Light/Dark Mode Support**: Automatic theme switching based on system preferences
- **Customizable Accent Colors**: 6 predefined accent colors to choose from
- **Comprehensive Design Tokens**: Colors, spacing, typography, shadows, border radius
- **Type Safety**: Full TypeScript support with proper type definitions
- **Performance Optimized**: Efficient theme switching with minimal re-renders

## Usage

### 1. Basic Theme Usage

```tsx
import {useAppTheme} from '../hooks/useAppTheme';

const MyComponent = () => {
  const {theme, isDark} = useAppTheme();

  return (
    <View style={{backgroundColor: theme.colors.background}}>
      <Text style={{color: theme.colors.text}}>Hello World</Text>
    </View>
  );
};
```

### 2. Using Theme Values

```tsx
const {theme, getColor, getSpacing, getTypography} = useAppTheme();

// Colors
const primaryColor = getColor('primary');
const backgroundColor = theme.colors.background;

// Spacing
const padding = getSpacing('lg'); // 24
const margin = theme.spacing.md; // 16

// Typography
const textStyle = getTypography('lg'); // {fontSize: 18, lineHeight: 25.2}
const headingSize = theme.typography.sizes.xl; // 20
```

### 3. Common Styles

```tsx
const {styles} = useAppTheme();

// Pre-built style generators
const containerStyle = styles.container();
const cardStyle = styles.card();
const textStyle = styles.text('lg');
const headingStyle = styles.heading('xxl');
const buttonStyle = styles.button('primary');
```

### 4. Custom StyleSheet with Theme

```tsx
const {theme} = useAppTheme();

const styles = StyleSheet.create({
  container: {
    backgroundColor: theme.colors.background,
    padding: theme.spacing.lg,
    borderRadius: theme.borderRadius.md,
    ...theme.shadows.md,
  },
  title: {
    fontSize: theme.typography.sizes.xl,
    fontWeight: theme.typography.weights.bold,
    color: theme.colors.text,
  },
});
```

## Theme Structure

### Colors

```tsx
theme.colors = {
  // Primary colors
  primary: '#8e44ad',
  primaryLight: '#a855f7',
  primaryDark: '#7c3aed',

  // Secondary colors
  secondary: '#3498db',
  secondaryLight: '#60a5fa',
  secondaryDark: '#2563eb',

  // Background colors
  background: '#f8fafc',
  backgroundSecondary: '#f1f5f9',

  // Card colors
  card: '#ffffff',
  cardSecondary: '#f8fafc',

  // Text colors
  text: '#0f172a',
  textSecondary: '#475569',
  textTertiary: '#64748b',

  // Border colors
  border: '#e2e8f0',
  borderLight: '#f1f5f9',

  // Status colors
  success: '#27ae60',
  warning: '#f1c40f',
  error: '#e74c3c',

  // Overlay
  overlay: 'rgba(0, 0, 0, 0.5)',
};
```

### Spacing

```tsx
theme.spacing = {
  xs: 4, // Extra small
  sm: 8, // Small
  md: 16, // Medium
  lg: 24, // Large
  xl: 32, // Extra large
  xxl: 48, // 2x Extra large
  xxxl: 64, // 3x Extra large
};
```

### Typography

```tsx
theme.typography = {
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
    normal: '400',
    medium: '500',
    semibold: '600',
    bold: '700',
    extrabold: '800',
  },
  lineHeights: {
    tight: 1.2,
    normal: 1.4,
    relaxed: 1.6,
  },
};
```

### Border Radius

```tsx
theme.borderRadius = {
  xs: 4,
  sm: 8,
  md: 12,
  lg: 16,
  xl: 20,
  xxl: 24,
  xxxl: 32,
  full: 9999,
};
```

### Shadows

```tsx
theme.shadows = {
  sm: {
    /* Small shadow */
  },
  md: {
    /* Medium shadow */
  },
  lg: {
    /* Large shadow */
  },
  xl: {
    /* Extra large shadow */
  },
};
```

## Theme Switching

### Programmatic Theme Switching

```tsx
const {setMode, setAccentColor, accentColors} = useAppTheme();

// Switch between light/dark mode
setMode('dark');
setMode('light');

// Change accent color
setAccentColor('#3498db');
```

### Available Accent Colors

- Purple: `#8e44ad` (default)
- Blue: `#3498db`
- Orange: `#e67e22`
- Green: `#27ae60`
- Red: `#e74c3c`
- Yellow: `#f1c40f`

## Best Practices

1. **Always use theme values**: Never hardcode colors, spacing, or other design tokens
2. **Use the hook**: Import `useAppTheme` in every component that needs styling
3. **Leverage common styles**: Use the pre-built style generators when possible
4. **Consistent spacing**: Use the spacing scale for all margins and padding
5. **Typography hierarchy**: Use the typography sizes consistently
6. **Dark mode consideration**: Ensure all colors work well in both light and dark modes

## Migration Guide

To migrate existing components to use the theme system:

1. Import `useAppTheme` hook
2. Replace hardcoded colors with `theme.colors.*`
3. Replace hardcoded spacing with `theme.spacing.*`
4. Replace hardcoded typography with `theme.typography.*`
5. Replace hardcoded shadows with `theme.shadows.*`
6. Test in both light and dark modes

## Example Migration

**Before:**

```tsx
const styles = StyleSheet.create({
  container: {
    backgroundColor: '#f5f5f5',
    padding: 16,
    borderRadius: 8,
  },
  title: {
    fontSize: 20,
    color: '#2c3e50',
    fontWeight: 'bold',
  },
});
```

**After:**

```tsx
const {theme} = useAppTheme();

const styles = StyleSheet.create({
  container: {
    backgroundColor: theme.colors.background,
    padding: theme.spacing.md,
    borderRadius: theme.borderRadius.sm,
  },
  title: {
    fontSize: theme.typography.sizes.xl,
    color: theme.colors.text,
    fontWeight: theme.typography.weights.bold,
  },
});
```

import {useTheme} from '../components/Theme/ThemeContext';
import {commonStyles} from '../config/theme';
import {getFontFamily} from '../config/theme';
import type {Theme} from '../config/theme';

export const useAppTheme = () => {
  const {theme, isDark, setMode, setAccentColor, accentColors} = useTheme();

  // Helper functions for common styling patterns
  const createStyles = (styleFactory: (theme: Theme) => any) => {
    return styleFactory(theme);
  };

  const getColor = (colorKey: keyof Theme['colors']) => {
    return theme.colors[colorKey];
  };

  const getSpacing = (size: keyof Theme['spacing']) => {
    return theme.spacing[size];
  };

  const getBorderRadius = (size: keyof Theme['borderRadius']) => {
    return theme.borderRadius[size];
  };

  const getTypography = (size: keyof Theme['typography']['sizes']) => {
    return {
      fontSize: theme.typography.sizes[size],
      lineHeight:
        theme.typography.sizes[size] * theme.typography.lineHeights.normal,
    };
  };

  const getShadow = (size: keyof Theme['shadows']) => {
    return theme.shadows[size];
  };

  // Font utilities
  const getFont = (
    weight: keyof Theme['typography']['weights'] = 'normal',
    family: 'primary' | 'display' | 'mono' = 'primary',
  ) => {
    return {
      fontFamily: getFontFamily(weight, family),
      fontWeight: theme.typography.weights[weight],
    };
  };

  const getTextStyle = (
    size: keyof Theme['typography']['sizes'] = 'md',
    weight: keyof Theme['typography']['weights'] = 'normal',
    family: 'primary' | 'display' | 'mono' = 'primary',
  ) => {
    return {
      fontSize: theme.typography.sizes[size],
      fontFamily: getFontFamily(weight, family),
      fontWeight: theme.typography.weights[weight],
      lineHeight:
        theme.typography.sizes[size] * theme.typography.lineHeights.normal,
      color: theme.colors.text,
    };
  };

  const getHeadingStyle = (
    size: keyof Theme['typography']['sizes'] = 'xl',
    weight: keyof Theme['typography']['weights'] = 'bold',
    family: 'primary' | 'display' | 'mono' = 'display',
  ) => {
    return {
      fontSize: theme.typography.sizes[size],
      fontFamily: getFontFamily(weight, family),
      fontWeight: theme.typography.weights[weight],
      lineHeight:
        theme.typography.sizes[size] * theme.typography.lineHeights.tight,
      color: theme.colors.text,
    };
  };

  // Common style generators
  const styles = {
    container: () => ({
      ...commonStyles.container,
      backgroundColor: theme.colors.background,
    }),
    card: () => commonStyles.card(theme),
    text: (size: keyof Theme['typography']['sizes'] = 'md') =>
      commonStyles.text(theme, size),
    heading: (size: keyof Theme['typography']['sizes'] = 'xl') =>
      commonStyles.heading(theme, size),
    button: (variant: 'primary' | 'secondary' | 'outline' = 'primary') =>
      commonStyles.button(theme, variant),
    row: commonStyles.row,
    centerContent: commonStyles.centerContent,
    spaceBetween: commonStyles.spaceBetween,
  };

  return {
    theme,
    isDark,
    setMode,
    setAccentColor,
    accentColors,
    createStyles,
    getColor,
    getSpacing,
    getBorderRadius,
    getTypography,
    getShadow,
    getFont,
    getTextStyle,
    getHeadingStyle,
    styles,
  };
};

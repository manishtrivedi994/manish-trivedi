/**
 * Color utility functions for the theme system
 */

/**
 * Validates if a string is a valid hex color
 */
export const isValidHexColor = (color: string): boolean => {
  if (!color || typeof color !== 'string') return false;
  const hex = color.replace('#', '');
  return hex.length === 6 && /^[0-9A-Fa-f]{6}$/.test(hex);
};

/**
 * Creates a color with opacity from a hex color
 */
export const addOpacity = (
  color: string | undefined,
  opacity: number,
): string => {
  // Add null check and default value
  if (!color || typeof color !== 'string') {
    return `rgba(142, 68, 173, ${opacity})`; // Default purple color
  }

  // Remove # if present
  const hex = color.replace('#', '');

  // Validate hex color
  if (!isValidHexColor(color)) {
    return `rgba(142, 68, 173, ${opacity})`; // Default purple color
  }

  // Convert hex to RGB
  const r = parseInt(hex.substring(0, 2), 16);
  const g = parseInt(hex.substring(2, 4), 16);
  const b = parseInt(hex.substring(4, 6), 16);

  // Return rgba string
  return `rgba(${r}, ${g}, ${b}, ${opacity})`;
};

/**
 * Creates a darker version of a hex color
 */
export const darkenColor = (
  color: string | undefined,
  amount: number,
): string => {
  // Add null check and default value
  if (!color || typeof color !== 'string') {
    return '#7c3aed'; // Default darker purple
  }

  const hex = color.replace('#', '');

  // Validate hex color
  if (!isValidHexColor(color)) {
    return '#7c3aed'; // Default darker purple
  }

  const r = Math.max(0, parseInt(hex.substring(0, 2), 16) - amount);
  const g = Math.max(0, parseInt(hex.substring(2, 4), 16) - amount);
  const b = Math.max(0, parseInt(hex.substring(4, 6), 16) - amount);

  return `#${r.toString(16).padStart(2, '0')}${g
    .toString(16)
    .padStart(2, '0')}${b.toString(16).padStart(2, '0')}`;
};

/**
 * Creates a lighter version of a hex color
 */
export const lightenColor = (
  color: string | undefined,
  amount: number,
): string => {
  // Add null check and default value
  if (!color || typeof color !== 'string') {
    return '#a855f7'; // Default lighter purple
  }

  const hex = color.replace('#', '');

  // Validate hex color
  if (!isValidHexColor(color)) {
    return '#a855f7'; // Default lighter purple
  }

  const r = Math.min(255, parseInt(hex.substring(0, 2), 16) + amount);
  const g = Math.min(255, parseInt(hex.substring(2, 4), 16) + amount);
  const b = Math.min(255, parseInt(hex.substring(4, 6), 16) + amount);

  return `#${r.toString(16).padStart(2, '0')}${g
    .toString(16)
    .padStart(2, '0')}${b.toString(16).padStart(2, '0')}`;
};

/**
 * Ensures a gradient array contains valid colors
 */
export const ensureValidGradient = (colors: string[]): string[] => {
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

/**
 * Converts a hex color to RGB values
 */
export const hexToRgb = (
  color: string | undefined,
): {r: number; g: number; b: number} | null => {
  if (!color || !isValidHexColor(color)) {
    return null;
  }

  const hex = color.replace('#', '');
  return {
    r: parseInt(hex.substring(0, 2), 16),
    g: parseInt(hex.substring(2, 4), 16),
    b: parseInt(hex.substring(4, 6), 16),
  };
};

/**
 * Converts RGB values to hex color
 */
export const rgbToHex = (r: number, g: number, b: number): string => {
  const toHex = (n: number) => {
    const hex = Math.max(0, Math.min(255, n)).toString(16);
    return hex.length === 1 ? '0' + hex : hex;
  };

  return `#${toHex(r)}${toHex(g)}${toHex(b)}`;
};

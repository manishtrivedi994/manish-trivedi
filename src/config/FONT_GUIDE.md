# Font Configuration Guide

This guide explains how to integrate custom fonts into your React Native app using the centralized font configuration system.

## 🎯 **One-Place Configuration**

All font configurations are centralized in `src/config/theme.ts`. When you want to add custom fonts, you only need to make changes in this one file.

## 📁 **Current Font Structure**

```typescript
// In src/config/theme.ts
export const typography = {
  fonts: {
    primary: {
      regular: 'System',
      medium: 'System',
      semibold: 'System',
      bold: 'System',
      extrabold: 'System',
    },
    display: {
      regular: 'System',
      medium: 'System',
      semibold: 'System',
      bold: 'System',
      extrabold: 'System',
    },
    mono: {
      regular: 'System',
      medium: 'System',
      semibold: 'System',
      bold: 'System',
    },
  },
  // ... other typography config
};
```

## 🚀 **How to Add Custom Fonts**

### **Step 1: Add Font Files**

1. Add your font files (`.ttf` or `.otf`) to:
   - **iOS**: `ios/YourApp/` (add to Xcode project)
   - **Android**: `android/app/src/main/assets/fonts/`

### **Step 2: Update Font Configuration**

In `src/config/theme.ts`, replace the font families:

```typescript
fonts: {
  primary: {
    regular: 'Inter-Regular',
    medium: 'Inter-Medium',
    semibold: 'Inter-SemiBold',
    bold: 'Inter-Bold',
    extrabold: 'Inter-ExtraBold',
  },
  display: {
    regular: 'Poppins-Regular',
    medium: 'Poppins-Medium',
    semibold: 'Poppins-SemiBold',
    bold: 'Poppins-Bold',
    extrabold: 'Poppins-ExtraBold',
  },
  mono: {
    regular: 'JetBrainsMono-Regular',
    medium: 'JetBrainsMono-Medium',
    semibold: 'JetBrainsMono-SemiBold',
    bold: 'JetBrainsMono-Bold',
  },
},
```

### **Step 3: Link Fonts (iOS)**

Add to `ios/YourApp/Info.plist`:

```xml
<key>UIAppFonts</key>
<array>
  <string>Inter-Regular.ttf</string>
  <string>Inter-Medium.ttf</string>
  <string>Inter-SemiBold.ttf</string>
  <string>Inter-Bold.ttf</string>
  <string>Inter-ExtraBold.ttf</string>
  <string>Poppins-Regular.ttf</string>
  <!-- ... other fonts -->
</array>
```

### **Step 4: Rebuild App**

```bash
# iOS
npx react-native run-ios

# Android
npx react-native run-android
```

## 🎨 **Using Fonts in Components**

### **Method 1: Using useAppTheme Hook (Recommended)**

```tsx
import {useAppTheme} from '../hooks/useAppTheme';

const MyComponent = () => {
  const {getTextStyle, getHeadingStyle, getFont} = useAppTheme();

  return (
    <View>
      {/* Complete text style with font family */}
      <Text style={getTextStyle('lg', 'semibold', 'primary')}>
        This uses Inter-SemiBold
      </Text>

      {/* Heading style with display font */}
      <Text style={getHeadingStyle('xxl', 'bold', 'display')}>
        This uses Poppins-Bold
      </Text>

      {/* Just font family and weight */}
      <Text style={[styles.text, getFont('medium', 'primary')]}>
        Custom font with existing styles
      </Text>
    </View>
  );
};
```

### **Method 2: Direct Font Family Access**

```tsx
import {useAppTheme} from '../hooks/useAppTheme';
import {getFontFamily} from '../config/theme';

const MyComponent = () => {
  const {theme} = useAppTheme();

  return (
    <Text
      style={{
        fontSize: theme.typography.sizes.lg,
        fontFamily: getFontFamily('semibold', 'primary'),
        color: theme.colors.text,
      }}>
      Custom styled text
    </Text>
  );
};
```

## 📋 **Font Family Options**

| Family    | Purpose        | Best For                         |
| --------- | -------------- | -------------------------------- |
| `primary` | Main body text | Paragraphs, buttons, general UI  |
| `display` | Headings       | Titles, headers, large text      |
| `mono`    | Code, numbers  | Code snippets, technical content |

## 🎛️ **Font Weight Options**

| Weight      | Value | Use Case                      |
| ----------- | ----- | ----------------------------- |
| `normal`    | 400   | Body text, descriptions       |
| `medium`    | 500   | Subheadings, emphasis         |
| `semibold`  | 600   | Section titles, buttons       |
| `bold`      | 700   | Main headings, important text |
| `extrabold` | 800   | Hero titles, strong emphasis  |

## 🔧 **Advanced Configuration**

### **Adding New Font Families**

```typescript
fonts: {
  primary: { /* ... */ },
  display: { /* ... */ },
  mono: { /* ... */ },
  // Add new family
  accent: {
    regular: 'PlayfairDisplay-Regular',
    medium: 'PlayfairDisplay-Medium',
    bold: 'PlayfairDisplay-Bold',
  },
},
```

### **Custom Font Utilities**

```typescript
// In useAppTheme hook
const getAccentStyle = (weight: 'regular' | 'medium' | 'bold' = 'regular') => {
  return {
    fontFamily: theme.typography.fonts.accent[weight],
    fontSize: theme.typography.sizes.xl,
  };
};
```

## 🎨 **Theme Integration**

Fonts automatically adapt to theme changes:

```tsx
const {getTextStyle} = useAppTheme();

// This automatically uses the correct font for light/dark themes
<Text style={getTextStyle('lg', 'semibold')}>Theme-aware text</Text>;
```

## 🚨 **Common Issues & Solutions**

### **Font Not Loading**

1. Check font file names match exactly
2. Verify iOS Info.plist entries
3. Clean and rebuild project
4. Check Android assets folder

### **Font Fallbacks**

If a custom font fails to load, the system will fall back to the default system font.

### **Performance**

- Use font weights from the same font family
- Avoid mixing too many different font families
- Consider font file sizes for app bundle

## 📚 **Example Font Combinations**

### **Modern & Clean**

```typescript
primary: 'Inter', // Body text
display: 'Poppins', // Headings
mono: 'JetBrains Mono', // Code
```

### **Professional & Classic**

```typescript
primary: 'Open Sans', // Body text
display: 'Merriweather', // Headings
mono: 'Source Code Pro', // Code
```

### **Creative & Bold**

```typescript
primary: 'Roboto', // Body text
display: 'Montserrat', // Headings
mono: 'Fira Code', // Code
```

---

**That's it!** With this system, you can change fonts across your entire app by updating just one file. 🎉

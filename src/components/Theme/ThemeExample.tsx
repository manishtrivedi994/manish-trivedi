import React from 'react';
import {
  View,
  Text,
  StyleSheet,
  TouchableOpacity,
  ScrollView,
} from 'react-native';
import {useAppTheme} from '../../hooks/useAppTheme';

const ThemeExample = () => {
  const {theme, styles, setMode, setAccentColor, accentColors, isDark} =
    useAppTheme();

  const customStyles = StyleSheet.create({
    container: {
      flex: 1,
      backgroundColor: theme.colors.background,
      padding: theme.spacing.lg,
    },
    section: {
      marginBottom: theme.spacing.xl,
    },
    sectionTitle: {
      fontSize: theme.typography.sizes.xxl,
      fontWeight: theme.typography.weights.bold,
      color: theme.colors.text,
      marginBottom: theme.spacing.md,
    },
    card: {
      backgroundColor: theme.colors.card,
      borderRadius: theme.borderRadius.lg,
      padding: theme.spacing.lg,
      marginBottom: theme.spacing.md,
      ...theme.shadows.md,
    },
    colorSwatch: {
      width: 60,
      height: 60,
      borderRadius: theme.borderRadius.md,
      marginRight: theme.spacing.sm,
      marginBottom: theme.spacing.sm,
      alignItems: 'center',
      justifyContent: 'center',
    },
    colorGrid: {
      flexDirection: 'row',
      flexWrap: 'wrap',
      marginTop: theme.spacing.sm,
    },
    colorLabel: {
      fontSize: theme.typography.sizes.xs,
      fontWeight: theme.typography.weights.bold,
      color: theme.colors.card,
    },
    button: {
      backgroundColor: theme.colors.primary,
      paddingVertical: theme.spacing.md,
      paddingHorizontal: theme.spacing.lg,
      borderRadius: theme.borderRadius.md,
      alignItems: 'center',
      marginBottom: theme.spacing.sm,
    },
    buttonText: {
      color: theme.colors.card,
      fontSize: theme.typography.sizes.md,
      fontWeight: theme.typography.weights.semibold,
    },
    textExample: {
      marginBottom: theme.spacing.sm,
    },
    spacingExample: {
      backgroundColor: theme.colors.primaryLight,
      marginBottom: theme.spacing.xs,
    },
  });

  return (
    <ScrollView style={customStyles.container}>
      <View style={customStyles.section}>
        <Text style={customStyles.sectionTitle}>Theme System Example</Text>
        <Text style={[styles.text('md'), customStyles.textExample]}>
          This component demonstrates the comprehensive theme system with all
          available design tokens.
        </Text>
      </View>

      {/* Colors Section */}
      <View style={customStyles.section}>
        <Text style={customStyles.sectionTitle}>Colors</Text>
        <View style={customStyles.card}>
          <Text
            style={[
              styles.text('lg'),
              {color: theme.colors.primary, marginBottom: theme.spacing.sm},
            ]}>
            Primary Colors
          </Text>
          <View style={customStyles.colorGrid}>
            <View
              style={[
                customStyles.colorSwatch,
                {backgroundColor: theme.colors.primary},
              ]}>
              <Text style={customStyles.colorLabel}>Primary</Text>
            </View>
            <View
              style={[
                customStyles.colorSwatch,
                {backgroundColor: theme.colors.primaryLight},
              ]}>
              <Text style={customStyles.colorLabel}>Light</Text>
            </View>
            <View
              style={[
                customStyles.colorSwatch,
                {backgroundColor: theme.colors.primaryDark},
              ]}>
              <Text style={customStyles.colorLabel}>Dark</Text>
            </View>
          </View>
        </View>

        <View style={customStyles.card}>
          <Text
            style={[
              styles.text('lg'),
              {color: theme.colors.secondary, marginBottom: theme.spacing.sm},
            ]}>
            Secondary Colors
          </Text>
          <View style={customStyles.colorGrid}>
            <View
              style={[
                customStyles.colorSwatch,
                {backgroundColor: theme.colors.secondary},
              ]}>
              <Text style={customStyles.colorLabel}>Secondary</Text>
            </View>
            <View
              style={[
                customStyles.colorSwatch,
                {backgroundColor: theme.colors.secondaryLight},
              ]}>
              <Text style={customStyles.colorLabel}>Light</Text>
            </View>
            <View
              style={[
                customStyles.colorSwatch,
                {backgroundColor: theme.colors.secondaryDark},
              ]}>
              <Text style={customStyles.colorLabel}>Dark</Text>
            </View>
          </View>
        </View>
      </View>

      {/* Typography Section */}
      <View style={customStyles.section}>
        <Text style={customStyles.sectionTitle}>Typography</Text>
        <View style={customStyles.card}>
          <Text style={[styles.heading('display'), customStyles.textExample]}>
            Display Large (36px)
          </Text>
          <Text style={[styles.heading('display'), customStyles.textExample]}>
            Display (32px)
          </Text>
          <Text style={[styles.heading('xxxl'), customStyles.textExample]}>
            XXXL Heading (28px)
          </Text>
          <Text style={[styles.heading('xxl'), customStyles.textExample]}>
            XXL Heading (24px)
          </Text>
          <Text style={[styles.heading('xl'), customStyles.textExample]}>
            XL Heading (20px)
          </Text>
          <Text style={[styles.text('lg'), customStyles.textExample]}>
            Large Text (18px)
          </Text>
          <Text style={[styles.text('md'), customStyles.textExample]}>
            Medium Text (16px)
          </Text>
          <Text style={[styles.text('sm'), customStyles.textExample]}>
            Small Text (14px)
          </Text>
          <Text style={[styles.text('xs'), customStyles.textExample]}>
            Extra Small Text (12px)
          </Text>
        </View>
      </View>

      {/* Spacing Section */}
      <View style={customStyles.section}>
        <Text style={customStyles.sectionTitle}>Spacing</Text>
        <View style={customStyles.card}>
          <Text style={[styles.text('md'), {marginBottom: theme.spacing.md}]}>
            Spacing Scale Examples:
          </Text>
          <View
            style={[customStyles.spacingExample, {height: theme.spacing.xs}]}>
            <Text style={[styles.text('xs'), {color: theme.colors.card}]}>
              XS: {theme.spacing.xs}px
            </Text>
          </View>
          <View
            style={[customStyles.spacingExample, {height: theme.spacing.sm}]}>
            <Text style={[styles.text('xs'), {color: theme.colors.card}]}>
              SM: {theme.spacing.sm}px
            </Text>
          </View>
          <View
            style={[customStyles.spacingExample, {height: theme.spacing.md}]}>
            <Text style={[styles.text('xs'), {color: theme.colors.card}]}>
              MD: {theme.spacing.md}px
            </Text>
          </View>
          <View
            style={[customStyles.spacingExample, {height: theme.spacing.lg}]}>
            <Text style={[styles.text('xs'), {color: theme.colors.card}]}>
              LG: {theme.spacing.lg}px
            </Text>
          </View>
          <View
            style={[customStyles.spacingExample, {height: theme.spacing.xl}]}>
            <Text style={[styles.text('xs'), {color: theme.colors.card}]}>
              XL: {theme.spacing.xl}px
            </Text>
          </View>
        </View>
      </View>

      {/* Border Radius Section */}
      <View style={customStyles.section}>
        <Text style={customStyles.sectionTitle}>Border Radius</Text>
        <View style={customStyles.card}>
          <View style={styles.row}>
            <View
              style={[
                customStyles.colorSwatch,
                {
                  backgroundColor: theme.colors.primary,
                  borderRadius: theme.borderRadius.xs,
                },
              ]}>
              <Text style={customStyles.colorLabel}>XS</Text>
            </View>
            <View
              style={[
                customStyles.colorSwatch,
                {
                  backgroundColor: theme.colors.primary,
                  borderRadius: theme.borderRadius.sm,
                },
              ]}>
              <Text style={customStyles.colorLabel}>SM</Text>
            </View>
            <View
              style={[
                customStyles.colorSwatch,
                {
                  backgroundColor: theme.colors.primary,
                  borderRadius: theme.borderRadius.md,
                },
              ]}>
              <Text style={customStyles.colorLabel}>MD</Text>
            </View>
            <View
              style={[
                customStyles.colorSwatch,
                {
                  backgroundColor: theme.colors.primary,
                  borderRadius: theme.borderRadius.lg,
                },
              ]}>
              <Text style={customStyles.colorLabel}>LG</Text>
            </View>
          </View>
        </View>
      </View>

      {/* Theme Controls */}
      <View style={customStyles.section}>
        <Text style={customStyles.sectionTitle}>Theme Controls</Text>
        <View style={customStyles.card}>
          <TouchableOpacity
            style={customStyles.button}
            onPress={() => setMode(isDark ? 'light' : 'dark')}>
            <Text style={customStyles.buttonText}>
              Switch to {isDark ? 'Light' : 'Dark'} Mode
            </Text>
          </TouchableOpacity>

          <Text style={[styles.text('md'), {marginBottom: theme.spacing.sm}]}>
            Accent Colors:
          </Text>
          <View style={customStyles.colorGrid}>
            {accentColors.map(color => (
              <TouchableOpacity
                key={color}
                style={[
                  customStyles.colorSwatch,
                  {
                    backgroundColor: color,
                    borderWidth: 2,
                    borderColor: theme.colors.primary,
                  },
                ]}
                onPress={() => setAccentColor(color)}>
                <Text style={customStyles.colorLabel}>✓</Text>
              </TouchableOpacity>
            ))}
          </View>
        </View>
      </View>
    </ScrollView>
  );
};

export default ThemeExample;

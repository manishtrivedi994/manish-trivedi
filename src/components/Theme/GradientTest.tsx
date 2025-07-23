import React from 'react';
import {View, Text, StyleSheet} from 'react-native';
import LinearGradient from 'react-native-linear-gradient';
import {useAppTheme} from '../../hooks/useAppTheme';

const GradientTest = () => {
  const {theme} = useAppTheme();

  const styles = StyleSheet.create({
    container: {
      flex: 1,
      padding: theme.spacing.lg,
      backgroundColor: theme.colors.background,
    },
    title: {
      fontSize: theme.typography.sizes.xl,
      fontWeight: theme.typography.weights.bold,
      color: theme.colors.text,
      marginBottom: theme.spacing.lg,
      textAlign: 'center',
    },
    gradientContainer: {
      height: 100,
      borderRadius: theme.borderRadius.md,
      marginBottom: theme.spacing.md,
      justifyContent: 'center',
      alignItems: 'center',
    },
    gradientText: {
      color: theme.colors.card,
      fontSize: theme.typography.sizes.md,
      fontWeight: theme.typography.weights.semibold,
    },
    infoText: {
      fontSize: theme.typography.sizes.sm,
      color: theme.colors.textSecondary,
      marginBottom: theme.spacing.sm,
    },
  });

  return (
    <View style={styles.container}>
      <Text style={styles.title}>Gradient Test</Text>

      <Text style={styles.infoText}>
        Primary Gradient: {JSON.stringify(theme.gradients.primary)}
      </Text>
      <LinearGradient
        colors={theme.gradients.primary}
        style={styles.gradientContainer}>
        <Text style={styles.gradientText}>Primary Gradient</Text>
      </LinearGradient>

      <Text style={styles.infoText}>
        Secondary Gradient: {JSON.stringify(theme.gradients.secondary)}
      </Text>
      <LinearGradient
        colors={theme.gradients.secondary}
        style={styles.gradientContainer}>
        <Text style={styles.gradientText}>Secondary Gradient</Text>
      </LinearGradient>

      <Text style={styles.infoText}>
        Background Gradient: {JSON.stringify(theme.gradients.background)}
      </Text>
      <LinearGradient
        colors={theme.gradients.background}
        style={styles.gradientContainer}>
        <Text style={styles.gradientText}>Background Gradient</Text>
      </LinearGradient>

      <Text style={styles.infoText}>
        Card Gradient: {JSON.stringify(theme.gradients.card)}
      </Text>
      <LinearGradient
        colors={theme.gradients.card}
        style={styles.gradientContainer}>
        <Text style={styles.gradientText}>Card Gradient</Text>
      </LinearGradient>
    </View>
  );
};

export default GradientTest;

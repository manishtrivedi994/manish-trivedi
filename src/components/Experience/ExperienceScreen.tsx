import React, {memo, useCallback} from 'react';
import {View, Text, StyleSheet, FlatList} from 'react-native';
import Icon from 'react-native-vector-icons/MaterialIcons';
import LinearGradient from 'react-native-linear-gradient';
import {contentData} from '../../config';
import {useAppTheme} from '../../hooks/useAppTheme';
import {ExperienceItem} from '../../config/contentData';

const keyExtractor = (item: ExperienceItem) => item.id;

const ExperienceScreen = () => {
  const {theme} = useAppTheme();

  const styles = StyleSheet.create({
    container: {
      flex: 1,
      backgroundColor: theme.colors.background,
    },
    contentContainer: {
      padding: theme.spacing.sm,
      paddingBottom: theme.spacing.lg,
    },
    cardGradient: {
      borderRadius: theme.borderRadius.lg,
      marginBottom: theme.spacing.xl,
      ...theme.shadows.md,
    },
    experienceCard: {
      flexDirection: 'row',
      backgroundColor: 'transparent',
      borderRadius: theme.borderRadius.lg,
      overflow: 'hidden',
    },
    leftAccent: {
      width: 7,
      backgroundColor: theme.colors.primary,
      borderTopLeftRadius: theme.borderRadius.lg,
      borderBottomLeftRadius: theme.borderRadius.lg,
    },
    cardContent: {
      flex: 1,
      padding: theme.spacing.lg,
    },
    iconRow: {
      flexDirection: 'row',
      alignItems: 'center',
      marginBottom: theme.spacing.sm,
    },
    workIcon: {
      marginRight: theme.spacing.sm,
    },
    company: {
      fontSize: theme.typography.sizes.xl,
      fontWeight: theme.typography.weights.bold,
      color: theme.colors.text,
    },
    role: {
      fontSize: theme.typography.sizes.lg,
      color: theme.colors.text,
      fontWeight: theme.typography.weights.semibold,
      marginBottom: theme.spacing.xs,
      marginTop: theme.spacing.xs,
    },
    duration: {
      fontSize: theme.typography.sizes.sm,
      color: theme.colors.textSecondary,
      marginBottom: theme.spacing.xs,
    },
    location: {
      fontSize: theme.typography.sizes.sm,
      color: theme.colors.textSecondary,
      marginBottom: theme.spacing.sm,
    },
    responsibilitiesContainer: {
      marginTop: theme.spacing.sm,
    },
    responsibilitiesTitle: {
      fontSize: theme.typography.sizes.md,
      fontWeight: theme.typography.weights.bold,
      color: theme.colors.primary,
      marginBottom: theme.spacing.xs,
    },
    responsibilityRow: {
      flexDirection: 'row',
      alignItems: 'center',
      marginBottom: theme.spacing.xs,
    },
    bullet: {
      width: 8,
      height: 8,
      borderRadius: 4,
      backgroundColor: theme.colors.primary,
      marginRight: theme.spacing.sm,
    },
    responsibility: {
      fontSize: theme.typography.sizes.sm,
      color: theme.colors.text,
      flex: 1,
      flexWrap: 'wrap',
    },
    technologiesContainer: {
      marginTop: theme.spacing.md,
    },
    technologiesTitle: {
      fontSize: theme.typography.sizes.md,
      fontWeight: theme.typography.weights.bold,
      color: theme.colors.primary,
      marginBottom: theme.spacing.sm,
    },
    technologiesChips: {
      flexDirection: 'row',
      flexWrap: 'wrap',
      gap: theme.spacing.sm,
    },
    techChip: {
      backgroundColor: theme.colors.primary,
      paddingHorizontal: theme.spacing.md,
      paddingVertical: theme.spacing.xs,
      borderRadius: theme.borderRadius.md,
      marginBottom: theme.spacing.xs,
    },
    techChipText: {
      color: theme.colors.card,
      fontSize: theme.typography.sizes.xs,
      fontWeight: theme.typography.weights.semibold,
    },
  });

  const renderExperienceItem = useCallback(
    ({item: exp, index}: {item: ExperienceItem; index: number}) => {
      return (
        <LinearGradient
          colors={theme.gradients.background}
          style={styles.cardGradient}>
          <View style={styles.experienceCard}>
            <View style={styles.leftAccent} />
            <View style={styles.cardContent}>
              <View style={styles.iconRow}>
                <Icon
                  name="work"
                  size={28}
                  color={theme.colors.primary}
                  style={styles.workIcon}
                />
                <Text style={styles.company}>{exp.company}</Text>
              </View>
              <Text style={styles.role}>{exp.position}</Text>
              <Text style={styles.duration}>{exp.duration}</Text>
              <Text style={styles.location}>{exp.location}</Text>
              <View style={styles.responsibilitiesContainer}>
                <Text style={styles.responsibilitiesTitle}>
                  Key Responsibilities:
                </Text>
                {exp.description.map((resp: string, idx: number) => (
                  <View key={idx} style={styles.responsibilityRow}>
                    <View style={styles.bullet} />
                    <Text style={styles.responsibility}>{resp}</Text>
                  </View>
                ))}
              </View>
              <View style={styles.technologiesContainer}>
                <Text style={styles.technologiesTitle}>Technologies:</Text>
                <View style={styles.technologiesChips}>
                  {exp.technologies.map((tech: string, techIdx: number) => (
                    <View key={techIdx} style={styles.techChip}>
                      <Text style={styles.techChipText}>{tech}</Text>
                    </View>
                  ))}
                </View>
              </View>
            </View>
          </View>
        </LinearGradient>
      );
    },
    [theme, styles],
  );

  return (
    <FlatList
      data={contentData.experience}
      renderItem={renderExperienceItem}
      keyExtractor={keyExtractor}
      style={styles.container}
      contentContainerStyle={styles.contentContainer}
      showsVerticalScrollIndicator={false}
    />
  );
};

export default memo(ExperienceScreen);

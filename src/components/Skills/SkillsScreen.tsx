import React, {memo, useCallback} from 'react';
import {View, Text, StyleSheet, FlatList} from 'react-native';
import Icon from 'react-native-vector-icons/MaterialIcons';
import LinearGradient from 'react-native-linear-gradient';
import {contentData} from '../../config';
import {SkillCategory} from '../../config/contentData';
import {useAppTheme} from '../../hooks/useAppTheme';

const keyExtractor = (item: SkillCategory) => item.category;

const categoryIcons: Record<string, string> = {
  'Programming Languages': 'code',
  'Frameworks & Libraries': 'library-books',
  'Development Tools': 'build',
  'Testing & Automation': 'bug-report',
  'Performance & Monitoring': 'speed',
  'CI/CD & Deployment': 'cloud-upload',
  'Cloud & Services': 'cloud',
  'Form & Validation': 'assignment',
  'UI/UX & Design': 'palette',
  'Project Management': 'group-work',
  'Languages & Strengths': 'emoji-people',
};

const SkillsScreen = () => {
  const {theme} = useAppTheme();

  const renderSkillItem = useCallback(
    ({item: skillCategory, index}: {item: SkillCategory; index: number}) => {
      return (
        <LinearGradient
          colors={theme.gradients.background}
          style={styles.cardGradient}>
          <View style={styles.skillCard}>
            <View
              style={[
                styles.leftAccent,
                {backgroundColor: theme.colors.primary},
              ]}
            />
            <View style={styles.cardContent}>
              <View style={styles.iconRow}>
                <Icon
                  name={categoryIcons[skillCategory.category] || 'star'}
                  size={26}
                  color={theme.colors.primary}
                  style={styles.categoryIcon}
                />
                <Text style={[styles.category, {color: theme.colors.text}]}>
                  {skillCategory.category}
                </Text>
              </View>
              <View style={styles.skillsContainer}>
                {skillCategory.skills.map((skill: string, idx: number) => (
                  <View
                    key={idx}
                    style={[
                      styles.skillItem,
                      {backgroundColor: theme.colors.primary},
                    ]}>
                    <Text style={styles.skillText}>{skill}</Text>
                  </View>
                ))}
              </View>
            </View>
          </View>
        </LinearGradient>
      );
    },
    [theme],
  );

  return (
    <FlatList
      data={contentData.skills}
      renderItem={renderSkillItem}
      keyExtractor={keyExtractor}
      style={[styles.container, {backgroundColor: theme.colors.background}]}
      contentContainerStyle={styles.contentContainer}
      showsVerticalScrollIndicator={false}
    />
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  contentContainer: {
    padding: 10,
    paddingBottom: 20,
  },
  cardGradient: {
    borderRadius: 18,
    marginBottom: 22,
    shadowColor: '#000',
    shadowOffset: {width: 0, height: 4},
    shadowOpacity: 0.1,
    shadowRadius: 10,
    elevation: 6,
  },
  skillCard: {
    flexDirection: 'row',
    backgroundColor: 'transparent',
    borderRadius: 18,
    overflow: 'hidden',
  },
  leftAccent: {
    width: 7,
    borderTopLeftRadius: 18,
    borderBottomLeftRadius: 18,
  },
  cardContent: {
    flex: 1,
    padding: 20,
  },
  iconRow: {
    flexDirection: 'row',
    alignItems: 'center',
    marginBottom: 12,
  },
  categoryIcon: {
    marginRight: 10,
  },
  category: {
    fontSize: 19,
    fontWeight: 'bold',
  },
  skillsContainer: {
    flexDirection: 'row',
    flexWrap: 'wrap',
    gap: 10,
  },
  skillItem: {
    paddingHorizontal: 15,
    paddingVertical: 8,
    borderRadius: 20,
    marginBottom: 8,
    marginRight: 8,
    shadowColor: '#8e44ad',
    shadowOffset: {width: 0, height: 2},
    shadowOpacity: 0.15,
    shadowRadius: 4,
    elevation: 3,
  },
  skillText: {
    color: '#fff',
    fontSize: 14,
    fontWeight: '600',
  },
});

export default memo(SkillsScreen);

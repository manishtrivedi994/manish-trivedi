import React, {memo, useCallback} from 'react';
import {View, Text, StyleSheet, FlatList} from 'react-native';
import Icon from 'react-native-vector-icons/MaterialIcons';
import LinearGradient from 'react-native-linear-gradient';
import {contentData} from '../../config';
import {EducationItem} from '../../config/contentData';
import {useAppTheme} from '../../hooks/useAppTheme';

const keyExtractor = (item: EducationItem) => item.id;

const EducationScreen = () => {
  const {theme} = useAppTheme();

  const renderEducationItem = useCallback(
    ({item: edu, index}: {item: EducationItem; index: number}) => {
      return (
        <LinearGradient
          colors={theme.gradients.background}
          style={styles.cardGradient}>
          <View style={styles.educationCard}>
            <View
              style={[
                styles.leftAccent,
                {backgroundColor: theme.colors.primary},
              ]}
            />
            <View style={styles.cardContent}>
              <View style={styles.iconRow}>
                <Icon
                  name="school"
                  size={28}
                  color={theme.colors.primary}
                  style={styles.schoolIcon}
                />
                <Text style={[styles.degree, {color: theme.colors.text}]}>
                  {edu.degree}
                </Text>
              </View>
              <Text style={[styles.institution, {color: theme.colors.text}]}>
                {edu.institution}
              </Text>
              <Text
                style={[styles.duration, {color: theme.colors.textSecondary}]}>
                {edu.duration}
              </Text>
              <Text
                style={[styles.location, {color: theme.colors.textSecondary}]}>
                {edu.location}
              </Text>
              <View style={styles.detailsContainer}>
                <View style={styles.detailRow}>
                  <View
                    style={[
                      styles.bullet,
                      {backgroundColor: theme.colors.primary},
                    ]}
                  />
                  <Text style={[styles.detail, {color: theme.colors.text}]}>
                    {edu.description}
                  </Text>
                </View>
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
      data={contentData.education}
      renderItem={renderEducationItem}
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
  educationCard: {
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
    marginBottom: 8,
  },
  schoolIcon: {
    marginRight: 10,
  },
  degree: {
    fontSize: 19,
    fontWeight: 'bold',
    flex: 1,
    flexWrap: 'wrap',
  },
  institution: {
    fontSize: 16,
    fontWeight: '600',
    marginBottom: 2,
    marginTop: 2,
  },
  duration: {
    fontSize: 14,
    marginBottom: 2,
  },
  location: {
    fontSize: 14,
    marginBottom: 10,
  },
  detailsContainer: {
    marginTop: 10,
  },
  detailRow: {
    flexDirection: 'row',
    alignItems: 'center',
    marginBottom: 5,
  },
  bullet: {
    width: 8,
    height: 8,
    borderRadius: 4,
    marginRight: 10,
  },
  detail: {
    fontSize: 14,
    flex: 1,
    flexWrap: 'wrap',
  },
});

export default memo(EducationScreen);

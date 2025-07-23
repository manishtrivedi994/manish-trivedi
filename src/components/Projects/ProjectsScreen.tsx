import React, {memo, useCallback} from 'react';
import {
  View,
  Text,
  StyleSheet,
  FlatList,
  TouchableOpacity,
  Linking,
  Platform,
  Dimensions,
} from 'react-native';
import LinearGradient from 'react-native-linear-gradient';
import FontAwesome from 'react-native-vector-icons/FontAwesome';
import Icon from 'react-native-vector-icons/MaterialIcons';
import {contentData} from '../../config';
import {ProjectItem} from '../../config/contentData';
import {useAppTheme} from '../../hooks/useAppTheme';

const keyExtractor = (item: ProjectItem) => item.id;

const ProjectsScreen = () => {
  const {theme} = useAppTheme();

  const renderProjectItem = useCallback(
    ({item: project, index}: {item: ProjectItem; index: number}) => {
      return (
        <View style={styles.projectCardWrapper}>
          <View
            style={[styles.projectCard, {backgroundColor: theme.colors.card}]}>
            <Text style={[styles.projectTitle, {color: theme.colors.text}]}>
              {project.title}
            </Text>
            <Text
              style={[
                styles.projectDescription,
                {color: theme.colors.textSecondary},
              ]}>
              {project.description}
            </Text>
            {project.note && (
              <View style={styles.availabilityNote}>
                <Icon name="info" size={16} color={theme.colors.error} />
                <Text
                  style={[
                    styles.availabilityText,
                    {color: theme.colors.error},
                  ]}>
                  {project.note}
                </Text>
              </View>
            )}
            <View style={styles.storeButtonsContainer}>
              {project.note ? (
                <TouchableOpacity
                  style={[
                    styles.storeButton,
                    styles.learnMoreButton,
                    {backgroundColor: theme.colors.primary},
                  ]}
                  onPress={() => Linking.openURL(project.liveUrl!)}>
                  <Icon name="launch" size={20} color={theme.colors.card} />
                  <Text
                    style={[
                      styles.storeButtonText,
                      {color: theme.colors.card},
                    ]}>
                    Learn More
                  </Text>
                </TouchableOpacity>
              ) : (
                <>
                  {project.playStoreUrl && (
                    <TouchableOpacity
                      style={[
                        styles.storeButton,
                        styles.playStoreButton,
                        {backgroundColor: theme.colors.primary},
                      ]}
                      onPress={() => Linking.openURL(project.playStoreUrl!)}>
                      <FontAwesome
                        name="google"
                        size={20}
                        color={theme.colors.card}
                      />
                      <Text
                        style={[
                          styles.storeButtonText,
                          {color: theme.colors.card},
                        ]}>
                        Play Store
                      </Text>
                    </TouchableOpacity>
                  )}
                  {project.appStoreUrl && (
                    <TouchableOpacity
                      style={[
                        styles.storeButton,
                        styles.appStoreButton,
                        {backgroundColor: theme.colors.primary},
                      ]}
                      onPress={() => Linking.openURL(project.appStoreUrl!)}>
                      <Icon
                        name="phone-iphone"
                        size={20}
                        color={theme.colors.card}
                      />
                      <Text
                        style={[
                          styles.storeButtonText,
                          {color: theme.colors.card},
                        ]}>
                        App Store
                      </Text>
                    </TouchableOpacity>
                  )}
                </>
              )}
            </View>
          </View>
        </View>
      );
    },
    [theme],
  );

  return (
    <View
      style={[styles.container, {backgroundColor: theme.colors.background}]}>
      <FlatList
        data={contentData.projects}
        renderItem={renderProjectItem}
        keyExtractor={keyExtractor}
        contentContainerStyle={styles.scrollContent}
        showsVerticalScrollIndicator={false}
      />
    </View>
  );
};

const {width} = Dimensions.get('window');

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  scrollContent: {
    paddingTop: Platform.OS === 'ios' ? 32 : 16,
    paddingBottom: Platform.OS === 'ios' ? 40 : 16,
    alignItems: 'center',
    minHeight: '100%',
  },
  projectCardWrapper: {
    width: '100%',
    alignItems: 'center',
    marginBottom: 28,
  },
  projectCard: {
    width: width > 500 ? 420 : '92%',
    borderRadius: 20,
    paddingVertical: 28,
    paddingHorizontal: 22,
    shadowColor: '#000',
    shadowOffset: {width: 0, height: 4},
    shadowOpacity: 0.1,
    shadowRadius: 10,
    elevation: 6,
    overflow: 'hidden',
    ...Platform.select({
      ios: {
        shadowColor: '#000',
        shadowOffset: {width: 0, height: 4},
        shadowOpacity: 0.1,
        shadowRadius: 10,
      },
      android: {
        elevation: 6,
      },
    }),
  },
  projectTitle: {
    fontSize: 24,
    fontWeight: 'bold',
    marginBottom: 8,
  },
  projectDescription: {
    fontSize: 16,
    marginBottom: 18,
    lineHeight: 24,
    flexShrink: 1,
  },
  techChip: {
    paddingHorizontal: 12,
    paddingVertical: 6,
    borderRadius: 16,
    marginRight: 8,
    marginBottom: 8,
  },
  availabilityNote: {
    flexDirection: 'row',
    alignItems: 'center',
    paddingHorizontal: 12,
    paddingVertical: 8,
    borderRadius: 8,
    marginBottom: 16,
    borderLeftWidth: 3,
  },
  availabilityText: {
    fontSize: 13,
    fontWeight: '600',
    marginLeft: 8,
    flex: 1,
  },
  storeButtonsContainer: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    marginTop: 18,
    gap: 12,
  },
  storeButton: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'center',
    padding: 14,
    borderRadius: 10,
    flex: 1,
    shadowColor: '#000',
    shadowOffset: {width: 0, height: 2},
    shadowOpacity: 0.08,
    shadowRadius: 4,
    elevation: 2,
  },
  playStoreButton: {
    // Styles will be applied inline
  },
  appStoreButton: {
    // Styles will be applied inline
  },
  learnMoreButton: {
    // Styles will be applied inline
  },
  storeButtonText: {
    fontSize: 16,
    fontWeight: '600',
    marginLeft: 8,
  },
});

export default memo(ProjectsScreen);

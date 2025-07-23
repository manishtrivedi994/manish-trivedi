import React, {useCallback, useEffect} from 'react';
import {
  View,
  Text,
  StyleSheet,
  TouchableOpacity,
  Linking,
  Dimensions,
} from 'react-native';
import {useNavigation} from '@react-navigation/native';
import type {DrawerNavigationProp} from '@react-navigation/drawer';
import {RootDrawerParamList} from '../../navigation/AppNavigator';
import LinearGradient from 'react-native-linear-gradient';
import Icon from 'react-native-vector-icons/MaterialIcons';
import FontAwesome from 'react-native-vector-icons/FontAwesome';
import Animated, {
  useSharedValue,
  useAnimatedStyle,
  withTiming,
  Easing,
  interpolate,
  useAnimatedScrollHandler,
} from 'react-native-reanimated';
import personalInfo from '../../config/personalInfo';
import appConfig from '../../config/appConfig';
import {useAppTheme} from '../../hooks/useAppTheme';

type HomeScreenNavigationProp = DrawerNavigationProp<
  RootDrawerParamList,
  'Home'
>;

const HomeScreen = () => {
  const navigation = useNavigation<HomeScreenNavigationProp>();
  const {theme} = useAppTheme();
  const scrollY = useSharedValue(0);
  const {height} = Dimensions.get('window');

  const fade = useSharedValue(0);
  const translateY = useSharedValue(40);

  const navCardFades = [
    useSharedValue(0),
    useSharedValue(0),
    useSharedValue(0),
    useSharedValue(0),
    useSharedValue(0),
    useSharedValue(0),
  ];
  const navCardTranslates = [
    useSharedValue(40),
    useSharedValue(40),
    useSharedValue(40),
    useSharedValue(40),
    useSharedValue(40),
    useSharedValue(40),
  ];

  const scrollHandler = useAnimatedScrollHandler({
    onScroll: event => {
      scrollY.value = event.contentOffset.y;
    },
  });

  useEffect(() => {
    fade.value = withTiming(1, {duration: 700, easing: Easing.out(Easing.exp)});
    translateY.value = withTiming(0, {
      duration: 700,
      easing: Easing.out(Easing.exp),
    });
    navCardFades.forEach((fadeVal, idx) => {
      setTimeout(() => {
        fadeVal.value = withTiming(1, {
          duration: 600,
          easing: Easing.out(Easing.exp),
        });
        navCardTranslates[idx].value = withTiming(0, {
          duration: 600,
          easing: Easing.out(Easing.exp),
        });
      }, 200 * idx + 400);
    });
  }, []);

  const animatedCardStyle = useAnimatedStyle(() => ({
    opacity: fade.value,
    transform: [
      {translateY: translateY.value},
      {
        scale: interpolate(
          scrollY.value,
          [0, height * 0.2],
          [1, 0.92],
          'clamp',
        ),
      },
    ],
  }));

  const animatedNavCardStyles = navCardFades.map((fadeVal, idx) =>
    useAnimatedStyle(() => ({
      opacity: fadeVal.value,
      transform: [
        {translateY: navCardTranslates[idx].value},
        {
          scale: interpolate(
            scrollY.value,
            [0, height * 0.2],
            [1, 0.95],
            'clamp',
          ),
        },
      ],
    })),
  );

  const handleSocialPress = useCallback((url: string) => {
    Linking.openURL(url);
  }, []);

  const handleNavigation = useCallback(
    (screen: keyof RootDrawerParamList) => {
      navigation.navigate(screen);
    },
    [navigation],
  );

  return (
    <View
      style={[styles.container, {backgroundColor: theme.colors.background}]}>
      <Animated.ScrollView
        style={styles.container}
        contentContainerStyle={styles.scrollContent}
        onScroll={scrollHandler}
        scrollEventThrottle={16}
        showsVerticalScrollIndicator={false}>
        <Animated.View style={[styles.profileCard, animatedCardStyle]}>
          <LinearGradient
            colors={theme.gradients.primary}
            style={StyleSheet.absoluteFill}
            start={{x: 0, y: 0}}
            end={{x: 1, y: 1}}
          />
          <View style={styles.profileContent}>
            <View
              style={[
                styles.avatarContainer,
                {backgroundColor: theme.colors.card},
              ]}>
              <Text
                style={[styles.avatarInitials, {color: theme.colors.primary}]}>
                {personalInfo.avatar.initials}
              </Text>
            </View>
            <Text style={[styles.name, {color: theme.colors.card}]}>
              {personalInfo.name}
            </Text>
            <Text style={[styles.title, {color: theme.colors.card + 'E0'}]}>
              {personalInfo.title}
            </Text>
            <Text style={[styles.location, {color: theme.colors.card + 'E0'}]}>
              {personalInfo.location}
            </Text>
            <View style={styles.socialRow}>
              <TouchableOpacity
                style={styles.socialButton}
                onPress={() => handleSocialPress(personalInfo.social.linkedin)}>
                <FontAwesome
                  name="linkedin"
                  size={20}
                  color={theme.colors.card}
                  style={styles.socialIcon}
                />
              </TouchableOpacity>
              <TouchableOpacity
                style={styles.socialButton}
                onPress={() => handleSocialPress(personalInfo.social.github)}>
                <FontAwesome
                  name="github"
                  size={20}
                  color={theme.colors.card}
                  style={styles.socialIcon}
                />
              </TouchableOpacity>
              <TouchableOpacity
                style={styles.socialButton}
                onPress={() => Linking.openURL(`mailto:${personalInfo.email}`)}>
                <Icon
                  name="email"
                  size={20}
                  color={theme.colors.card}
                  style={styles.socialIcon}
                />
              </TouchableOpacity>
            </View>
          </View>
        </Animated.View>

        <View style={styles.navigationSection}>
          {appConfig.navigationItems.map((item, index) => (
            <Animated.View
              key={item.nav}
              style={[
                styles.navCard,
                {backgroundColor: theme.colors.card},
                animatedNavCardStyles[index],
              ]}>
              <TouchableOpacity
                style={styles.navButton}
                onPress={() => handleNavigation(item.nav)}>
                <Icon
                  name={item.icon}
                  size={28}
                  color={theme.colors.primary}
                  style={styles.navIcon}
                />
                <Text
                  style={[styles.navCardText, {color: theme.colors.primary}]}>
                  {item.text}
                </Text>
                <Icon
                  name="chevron-right"
                  size={24}
                  color={theme.colors.textSecondary}
                  style={styles.navArrow}
                />
              </TouchableOpacity>
            </Animated.View>
          ))}
        </View>
      </Animated.ScrollView>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  scrollContent: {
    paddingBottom: 32,
    alignItems: 'center',
  },
  profileCard: {
    width: '92%',
    alignSelf: 'center',
    borderRadius: 24,
    marginTop: 32,
    marginBottom: 32,
    alignItems: 'center',
    overflow: 'hidden',
    backgroundColor: 'transparent',
    shadowColor: '#000',
    shadowOffset: {width: 0, height: 4},
    shadowOpacity: 0.3,
    shadowRadius: 8,
    elevation: 8,
  },
  profileContent: {
    padding: 28,
    alignItems: 'center',
  },
  avatarContainer: {
    width: 90,
    height: 90,
    borderRadius: 45,
    alignItems: 'center',
    justifyContent: 'center',
    marginBottom: 24,
    shadowColor: '#000',
    shadowOffset: {width: 0, height: 2},
    shadowOpacity: 0.25,
    shadowRadius: 4,
    elevation: 4,
  },
  avatarInitials: {
    fontSize: 32,
    fontWeight: 'bold',
  },
  name: {
    fontSize: 28,
    fontWeight: 'bold',
    marginBottom: 4,
    letterSpacing: 1,
  },
  title: {
    fontSize: 18,
    marginBottom: 4,
    fontWeight: '600',
    textAlign: 'center',
  },
  location: {
    fontSize: 16,
    marginBottom: 24,
    textAlign: 'center',
  },
  socialRow: {
    flexDirection: 'row',
    marginTop: 12,
    marginBottom: 4,
  },
  socialButton: {
    padding: 12,
    borderRadius: 20,
    backgroundColor: 'rgba(255, 255, 255, 0.1)',
    marginHorizontal: 12,
  },
  socialIcon: {
    marginHorizontal: 2,
  },
  navigationSection: {
    width: '92%',
    alignSelf: 'center',
  },
  navCard: {
    borderRadius: 16,
    paddingVertical: 24,
    paddingHorizontal: 24,
    marginBottom: 24,
    shadowColor: '#000',
    shadowOffset: {width: 0, height: 2},
    shadowOpacity: 0.1,
    shadowRadius: 4,
    elevation: 3,
  },
  navButton: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
  },
  navIcon: {
    marginRight: 24,
  },
  navCardText: {
    fontSize: 20,
    fontWeight: 'bold',
    letterSpacing: 0.5,
    flex: 1,
  },
  navArrow: {
    opacity: 0.7,
  },
});

export default HomeScreen;

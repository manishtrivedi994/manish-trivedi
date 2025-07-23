import React from 'react';
import {NavigationContainer} from '@react-navigation/native';
import {createDrawerNavigator} from '@react-navigation/drawer';
import {View, Text, StyleSheet, Platform} from 'react-native';
import Icon from 'react-native-vector-icons/MaterialIcons';
import {DrawerContentScrollView, DrawerItem} from '@react-navigation/drawer';
import LinearGradient from 'react-native-linear-gradient';
import FontAwesome from 'react-native-vector-icons/FontAwesome';
import {useSafeAreaInsets} from 'react-native-safe-area-context';
import personalInfo from '../config/personalInfo';
import {useAppTheme} from '../hooks/useAppTheme';

import HomeScreen from '../components/Home/HomeScreen';
import ExperienceScreen from '../components/Experience/ExperienceScreen';
import SkillsScreen from '../components/Skills/SkillsScreen';
import EducationScreen from '../components/Education/EducationScreen';
import ProjectsScreen from '../components/Projects/ProjectsScreen';
import CertificationsScreen from '../components/Certifications/CertificationsScreen';
import ContactScreen from '../components/Contact/ContactScreen';
import ThemePickerScreen from '../components/Theme/ThemePickerScreen';

export type RootDrawerParamList = {
  Home: undefined;
  Experience: undefined;
  Skills: undefined;
  Education: undefined;
  Projects: undefined;
  Certifications: undefined;
  Contact: undefined;
  Theme: undefined;
};

const Drawer = createDrawerNavigator<RootDrawerParamList>();

const drawerHeaderHeight = 230;

const CustomDrawerContent = (props: any) => {
  const insets = useSafeAreaInsets();
  const {theme} = useAppTheme();
  const {state, navigation, descriptors} = props;

  return (
    <View
      style={[
        styles.drawerMainContainer,
        {backgroundColor: theme.colors.background},
      ]}>
      <View
        style={[
          styles.drawerHeaderAbsolute,
          {height: drawerHeaderHeight + insets.top},
        ]}>
        <LinearGradient
          colors={theme.gradients.primary}
          style={styles.gradientBackground}
          start={{x: 0, y: 0}}
          end={{x: 1, y: 1}}
        />
        <View style={[styles.headerContent, {paddingTop: insets.top}]}>
          <View
            style={[
              styles.profileImageContainer,
              {
                backgroundColor: theme.colors.card,
                borderColor: theme.colors.card,
              },
            ]}>
            <Text
              style={[styles.profileInitials, {color: theme.colors.primary}]}>
              {personalInfo.avatar.initials}
            </Text>
          </View>
          <Text style={[styles.drawerHeaderText, {color: theme.colors.card}]}>
            {personalInfo.name}
          </Text>
          <Text
            style={[
              styles.drawerHeaderSubText,
              {color: theme.colors.card + 'E0'},
            ]}>
            React Native Developer
          </Text>
          <View style={styles.socialIcons}>
            <FontAwesome
              name="linkedin"
              size={24}
              color={theme.colors.card}
              style={{marginHorizontal: 8}}
            />
            <FontAwesome
              name="github"
              size={24}
              color={theme.colors.card}
              style={{marginHorizontal: 8}}
            />
          </View>
        </View>
      </View>
      <DrawerContentScrollView
        {...props}
        style={{paddingTop: 0, margin: 0}}
        contentContainerStyle={{
          paddingTop: drawerHeaderHeight + insets.top,
          margin: 0,
        }}>
        {state.routes.map((route: any, index: any) => {
          const focused = state.index === index;
          const {drawerLabel, title, drawerIcon} =
            descriptors[route.key].options;
          if (focused) {
            return (
              <LinearGradient
                key={route.key}
                colors={theme.gradients.primary}
                start={{x: 0, y: 0}}
                end={{x: 1, y: 1}}
                style={styles.drawerItemActive}>
                <DrawerItem
                  label={({color}) => (
                    <Text
                      style={[
                        styles.drawerItemLabel,
                        styles.drawerItemLabelActive,
                        {color: theme.colors.card},
                      ]}
                      numberOfLines={1}
                      ellipsizeMode="tail">
                      {drawerLabel ?? title ?? route.name}
                    </Text>
                  )}
                  icon={
                    drawerIcon
                      ? ({color, size}) =>
                          drawerIcon({color: theme.colors.card, size})
                      : undefined
                  }
                  focused={focused}
                  onPress={() => navigation.navigate(route.name)}
                  style={[styles.drawerItem, {backgroundColor: 'transparent'}]}
                  activeTintColor={theme.colors.card}
                  inactiveTintColor={theme.colors.primary}
                  pressColor="transparent"
                  pressOpacity={0.8}
                />
              </LinearGradient>
            );
          }
          return (
            <View
              key={route.key}
              style={[
                styles.drawerItemInactiveWrapper,
                {backgroundColor: theme.colors.card},
              ]}>
              <DrawerItem
                label={({color}) => (
                  <Text
                    style={[styles.drawerItemLabel, {color: theme.colors.text}]}
                    numberOfLines={1}
                    ellipsizeMode="tail">
                    {drawerLabel ?? title ?? route.name}
                  </Text>
                )}
                icon={
                  drawerIcon
                    ? ({color, size}) =>
                        drawerIcon({color: theme.colors.primary, size})
                    : undefined
                }
                focused={focused}
                onPress={() => navigation.navigate(route.name)}
                style={[
                  styles.drawerItem,
                  {backgroundColor: theme.colors.backgroundSecondary},
                ]}
                activeTintColor={theme.colors.card}
                inactiveTintColor={theme.colors.primary}
                pressColor="transparent"
                pressOpacity={0.8}
              />
            </View>
          );
        })}
      </DrawerContentScrollView>
    </View>
  );
};

const AppNavigator = () => {
  const {theme} = useAppTheme();

  return (
    <NavigationContainer>
      <Drawer.Navigator
        drawerContent={props => <CustomDrawerContent {...props} />}
        screenOptions={{
          headerStyle: {
            backgroundColor: theme.colors.primary,
          },
          headerTintColor: theme.colors.card,
          headerTitleStyle: {
            fontWeight: 'bold',
          },
          drawerStyle: {
            backgroundColor: theme.colors.background,
            width: '70%',
          },
          drawerActiveTintColor: theme.colors.primary,
          drawerInactiveTintColor: theme.colors.textSecondary,
        }}>
        <Drawer.Screen
          name="Home"
          component={HomeScreen}
          options={{
            title: 'About Me',
            headerBackground: () => (
              <LinearGradient
                colors={theme.gradients.primary}
                style={{flex: 1}}
                start={{x: 0, y: 0}}
                end={{x: 1, y: 0}}
              />
            ),
            headerTintColor: theme.colors.card,
            headerTitleStyle: {
              fontWeight: 'bold',
              fontSize: 22,
              letterSpacing: 1,
            },
            drawerIcon: ({color, size}) => (
              <Icon name="home" size={size ?? 24} color={color} />
            ),
          }}
        />
        <Drawer.Screen
          name="Experience"
          component={ExperienceScreen}
          options={{
            title: 'Experience',
            headerBackground: () => (
              <LinearGradient
                colors={theme.gradients.primary}
                style={{flex: 1}}
                start={{x: 0, y: 0}}
                end={{x: 1, y: 0}}
              />
            ),
            headerTintColor: theme.colors.card,
            headerTitleStyle: {
              fontWeight: 'bold',
              fontSize: 22,
              letterSpacing: 1,
            },
            drawerIcon: ({color, size}) => (
              <Icon name="work" size={size ?? 24} color={color} />
            ),
          }}
        />
        <Drawer.Screen
          name="Skills"
          component={SkillsScreen}
          options={{
            title: 'Skills',
            headerBackground: () => (
              <LinearGradient
                colors={theme.gradients.primary}
                style={{flex: 1}}
                start={{x: 0, y: 0}}
                end={{x: 1, y: 0}}
              />
            ),
            headerTintColor: theme.colors.card,
            headerTitleStyle: {
              fontWeight: 'bold',
              fontSize: 22,
              letterSpacing: 1,
            },
            drawerIcon: ({color, size}) => (
              <Icon name="code" size={size ?? 24} color={color} />
            ),
          }}
        />
        <Drawer.Screen
          name="Education"
          component={EducationScreen}
          options={{
            title: 'Education',
            headerBackground: () => (
              <LinearGradient
                colors={theme.gradients.primary}
                style={{flex: 1}}
                start={{x: 0, y: 0}}
                end={{x: 1, y: 0}}
              />
            ),
            headerTintColor: theme.colors.card,
            headerTitleStyle: {
              fontWeight: 'bold',
              fontSize: 22,
              letterSpacing: 1,
            },
            drawerIcon: ({color, size}) => (
              <Icon name="school" size={size ?? 24} color={color} />
            ),
          }}
        />
        <Drawer.Screen
          name="Projects"
          component={ProjectsScreen}
          options={{
            title: 'Projects',
            headerBackground: () => (
              <LinearGradient
                colors={theme.gradients.primary}
                style={{flex: 1}}
                start={{x: 0, y: 0}}
                end={{x: 1, y: 0}}
              />
            ),
            headerTintColor: theme.colors.card,
            headerTitleStyle: {
              fontWeight: 'bold',
              fontSize: 22,
              letterSpacing: 1,
            },
            drawerIcon: ({color, size}) => (
              <Icon name="folder" size={size ?? 24} color={color} />
            ),
          }}
        />
        <Drawer.Screen
          name="Certifications"
          component={CertificationsScreen}
          options={{
            title: 'Certifications',
            headerBackground: () => (
              <LinearGradient
                colors={theme.gradients.primary}
                style={{flex: 1}}
                start={{x: 0, y: 0}}
                end={{x: 1, y: 0}}
              />
            ),
            headerTintColor: theme.colors.card,
            headerTitleStyle: {
              fontWeight: 'bold',
              fontSize: 22,
              letterSpacing: 1,
            },
            drawerIcon: ({color, size}) => (
              <Icon name="verified" size={size ?? 24} color={color} />
            ),
          }}
        />
        <Drawer.Screen
          name="Contact"
          component={ContactScreen}
          options={{
            title: 'Contact',
            headerBackground: () => (
              <LinearGradient
                colors={theme.gradients.primary}
                style={{flex: 1}}
                start={{x: 0, y: 0}}
                end={{x: 1, y: 0}}
              />
            ),
            headerTintColor: theme.colors.card,
            headerTitleStyle: {
              fontWeight: 'bold',
              fontSize: 22,
              letterSpacing: 1,
            },
            drawerIcon: ({color, size}) => (
              <Icon name="contact-support" size={size ?? 24} color={color} />
            ),
          }}
        />
        <Drawer.Screen
          name="Theme"
          component={ThemePickerScreen}
          options={{
            title: 'Theme',
            headerBackground: () => (
              <LinearGradient
                colors={theme.gradients.primary}
                style={{flex: 1}}
                start={{x: 0, y: 0}}
                end={{x: 1, y: 0}}
              />
            ),
            headerTintColor: theme.colors.card,
            headerTitleStyle: {
              fontWeight: 'bold',
              fontSize: 22,
              letterSpacing: 1,
            },
            drawerIcon: ({color, size}) => (
              <Icon name="color-lens" size={size ?? 24} color={color} />
            ),
          }}
        />
      </Drawer.Navigator>
    </NavigationContainer>
  );
};

const styles = StyleSheet.create({
  drawerMainContainer: {
    flex: 1,
  },
  drawerHeaderAbsolute: {
    position: 'absolute',
    top: 0,
    left: 0,
    right: 0,
    zIndex: 2,
    overflow: 'hidden',
  },
  gradientBackground: {
    ...StyleSheet.absoluteFillObject,
    zIndex: 0,
  },
  headerContent: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'flex-end',
    padding: 16,
    zIndex: 1,
    width: '100%',
  },
  profileImageContainer: {
    width: 80,
    height: 80,
    borderRadius: 40,
    borderWidth: 3,
    marginBottom: 10,
    justifyContent: 'center',
    alignItems: 'center',
    shadowColor: '#000',
    shadowOffset: {width: 0, height: 4},
    shadowOpacity: 0.3,
    shadowRadius: 6,
    elevation: 8,
  },
  profileInitials: {
    fontSize: 24,
    fontWeight: 'bold',
  },
  drawerHeaderText: {
    fontSize: 26,
    fontWeight: 'bold',
    letterSpacing: 1,
    marginTop: 2,
  },
  drawerHeaderSubText: {
    fontSize: 15,
    fontWeight: '300',
    marginTop: 2,
    marginBottom: 8,
  },
  socialIcons: {
    flexDirection: 'row',
    marginTop: 4,
    marginBottom: 4,
  },
  drawerItem: {
    paddingVertical: 12,
    paddingHorizontal: 16,
    borderRadius: 20,
    overflow: 'hidden',
    minHeight: 48,
  },
  drawerItemInactiveWrapper: {
    borderRadius: 20,
    marginVertical: 6,
    marginHorizontal: 12,
    shadowColor: '#000',
    shadowOffset: {width: 0, height: 2},
    shadowOpacity: 0.2,
    shadowRadius: 4,
    elevation: 4,
    overflow: Platform.OS === 'ios' ? 'visible' : 'hidden',
  },
  drawerItemActive: {
    borderRadius: 20,
    marginVertical: 6,
    marginHorizontal: 12,
    overflow: 'hidden',
  },
  drawerItemLabel: {
    fontSize: 17,
    fontWeight: '600',
    letterSpacing: 0.5,
  },
  drawerItemLabelActive: {
    fontWeight: 'bold',
  },
  drawerContent: {
    paddingTop: 10,
  },
});

export default AppNavigator;

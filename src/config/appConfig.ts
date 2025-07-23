import Icon from 'react-native-vector-icons/MaterialIcons';
import {RootDrawerParamList} from '../navigation/AppNavigator';

export interface NavigationItem {
  icon: string;
  text: string;
  nav: keyof RootDrawerParamList;
}

export interface ThemeColors {
  primary: string;
  secondary: string;
  accent: string;
  background: string[];
  card: string;
  text: string;
  textSecondary: string;
}

export const navigationItems: NavigationItem[] = [
  {icon: 'work', text: 'Experience', nav: 'Experience'},
  {icon: 'code', text: 'Skills', nav: 'Skills'},
  {icon: 'school', text: 'Education', nav: 'Education'},
  {icon: 'folder', text: 'Projects', nav: 'Projects'},
  {icon: 'verified', text: 'Certifications', nav: 'Certifications'},
  {icon: 'contact-mail', text: 'Contact', nav: 'Contact'},
];

export const themeColors: ThemeColors = {
  primary: '#8e44ad',
  secondary: '#3498db',
  accent: '#b185d6',
  background: ['#e0eafc', '#f5f7fa'],
  card: '#fff',
  text: '#2c3e50',
  textSecondary: '#7f8c8d',
};

export const appConfig = {
  navigationItems,
  themeColors,
  headerGradient: ['#b185d6', '#8e44ad'],
  profileGradient: ['#8e44ad', '#3498db'],
  drawerGradient: ['#3498db', '#8e44ad'],
};

export default appConfig;

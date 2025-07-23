import {Linking} from 'react-native';

export interface PersonalInfo {
  name: string;
  title: string;
  location: string;
  email: string;
  social: {
    linkedin: string;
    github: string;
  };
  avatar: {
    initials: string;
  };
}

export interface ContactItem {
  icon: string;
  title: string;
  value: string;
  action: () => void;
}

export const personalInfo: PersonalInfo = {
  name: 'Manish Trivedi',
  title: 'React Native Developer | SDE3 | 6+ years of experience | CARS24',
  location: 'Vignan Nagar, Bengaluru, 560075',
  email: 'manishtrivedi994@gmail.com',
  social: {
    linkedin: 'https://linkedin.com/in/manish-trivedi-a44178130/',
    github: 'https://github.com/manishtrivedi994/',
  },
  avatar: {
    initials: 'MT',
  },
};

export const getContactInfo = (): ContactItem[] => [
  {
    icon: 'email',
    title: 'Email',
    value: personalInfo.email,
    action: () => Linking.openURL(`mailto:${personalInfo.email}`),
  },
  {
    icon: 'linkedin',
    title: 'LinkedIn',
    value: personalInfo.social.linkedin.replace('https://', ''),
    action: () => Linking.openURL(personalInfo.social.linkedin),
  },
  {
    icon: 'github',
    title: 'GitHub',
    value: personalInfo.social.github.replace('https://', ''),
    action: () => Linking.openURL(personalInfo.social.github),
  },
];

export default personalInfo;

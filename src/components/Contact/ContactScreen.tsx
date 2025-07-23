import React from 'react';
import {
  View,
  Text,
  StyleSheet,
  ScrollView,
  TouchableOpacity,
  Platform,
} from 'react-native';
import Icon from 'react-native-vector-icons/MaterialIcons';
import FontAwesome from 'react-native-vector-icons/FontAwesome';
import {getContactInfo} from '../../config/personalInfo';
import {useAppTheme} from '../../hooks/useAppTheme';

const ContactScreen = () => {
  const contactInfo = getContactInfo();
  const {theme} = useAppTheme();

  return (
    <View
      style={[styles.container, {backgroundColor: theme.colors.background}]}>
      <ScrollView contentContainerStyle={styles.scrollContent}>
        <View style={styles.contactCardWrapper}>
          <View
            style={[
              styles.contactCard,
              {
                backgroundColor: theme.colors.card,
                borderColor: theme.colors.borderLight,
              },
            ]}>
            <Text style={[styles.title, {color: theme.colors.text}]}>
              Get in Touch
            </Text>
            <Text
              style={[styles.subtitle, {color: theme.colors.textSecondary}]}>
              Feel free to reach out to me through any of these channels
            </Text>
            {contactInfo.map((item, index) => (
              <TouchableOpacity
                key={index}
                style={[
                  styles.contactItem,
                  {
                    borderBottomColor: theme.colors.borderLight,
                    borderBottomWidth: index === contactInfo.length - 1 ? 0 : 1,
                  },
                ]}
                onPress={item.action}>
                <View
                  style={[
                    styles.iconContainer,
                    {backgroundColor: theme.colors.backgroundSecondary},
                  ]}>
                  {item.icon === 'linkedin' || item.icon === 'github' ? (
                    <FontAwesome
                      name={item.icon}
                      size={24}
                      color={theme.colors.primary}
                    />
                  ) : (
                    <Icon
                      name={item.icon}
                      size={24}
                      color={theme.colors.primary}
                    />
                  )}
                </View>
                <View style={styles.contactInfo}>
                  <Text
                    style={[
                      styles.contactTitle,
                      {color: theme.colors.textSecondary},
                    ]}>
                    {item.title}
                  </Text>
                  <Text
                    style={[styles.contactValue, {color: theme.colors.text}]}>
                    {item.value}
                  </Text>
                </View>
                <Icon
                  name="chevron-right"
                  size={24}
                  color={theme.colors.textTertiary}
                />
              </TouchableOpacity>
            ))}
          </View>
        </View>
      </ScrollView>
    </View>
  );
};

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
  contactCardWrapper: {
    width: '100%',
    alignItems: 'center',
    marginBottom: 28,
  },
  contactCard: {
    width: 420,
    maxWidth: '92%',
    borderRadius: 20,
    paddingVertical: 28,
    paddingHorizontal: 22,
    borderWidth: 1,
    shadowColor: '#000',
    shadowOffset: {width: 0, height: 8},
    shadowOpacity: 0.25,
    shadowRadius: 16,
    elevation: 12,
    overflow: 'hidden',
    ...Platform.select({
      ios: {
        shadowColor: '#000',
        shadowOffset: {width: 0, height: 1},
        shadowOpacity: 0.6,
        shadowRadius: 4,
      },
      android: {
        elevation: 6,
      },
    }),
  },
  title: {
    fontSize: 28,
    fontWeight: 'bold',
    marginBottom: 8,
  },
  subtitle: {
    fontSize: 16,
    marginBottom: 24,
    lineHeight: 24,
  },
  contactItem: {
    flexDirection: 'row',
    alignItems: 'center',
    paddingVertical: 16,
  },
  iconContainer: {
    width: 40,
    height: 40,
    borderRadius: 20,
    alignItems: 'center',
    justifyContent: 'center',
    marginRight: 16,
    ...Platform.select({
      ios: {
        shadowColor: '#000',
        shadowOffset: {width: 0, height: 1},
        shadowOpacity: 0.1,
        shadowRadius: 2,
      },
      android: {
        elevation: 2,
      },
    }),
  },
  contactInfo: {
    flex: 1,
  },
  contactTitle: {
    fontSize: 16,
    marginBottom: 4,
  },
  contactValue: {
    fontSize: 18,
    fontWeight: '500',
  },
});

export default ContactScreen;

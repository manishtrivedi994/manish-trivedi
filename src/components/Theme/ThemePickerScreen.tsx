import React from 'react';
import {
  View,
  Text,
  StyleSheet,
  TouchableOpacity,
  Switch,
  ScrollView,
} from 'react-native';
import {useTheme} from './ThemeContext';
import Icon from 'react-native-vector-icons/MaterialIcons';

const ThemePickerScreen = () => {
  const {theme, themeState, setAccentColor, setMode, accentColors, isDark} =
    useTheme();

  return (
    <ScrollView
      style={{backgroundColor: theme.colors.background}}
      contentContainerStyle={[
        styles.container,
        {backgroundColor: theme.colors.background},
      ]}>
      <View style={[styles.card, {backgroundColor: theme.colors.card}]}>
        <Text style={[styles.title, {color: theme.colors.text}]}>
          Theme Customizer
        </Text>
        <Text style={[styles.subtitle, {color: theme.colors.textSecondary}]}>
          Choose your favorite accent color and mode
        </Text>

        <Text style={[styles.sectionLabel, {color: theme.colors.text}]}>
          Accent Color
        </Text>
        <View style={styles.swatchRow}>
          {accentColors.map(color => (
            <TouchableOpacity
              key={color}
              style={[
                styles.swatch,
                {
                  backgroundColor: color,
                  borderWidth: themeState.accentColor === color ? 3 : 0,
                  borderColor: theme.colors.text,
                },
              ]}
              onPress={() => setAccentColor(color)}>
              {themeState.accentColor === color && (
                <Icon name="check" size={22} color={theme.colors.card} />
              )}
            </TouchableOpacity>
          ))}
        </View>

        <View style={styles.modeRow}>
          <Text
            style={[
              styles.sectionLabel,
              {color: theme.colors.text, marginRight: theme.spacing.md},
            ]}>
            Dark Mode
          </Text>
          <Switch
            value={isDark}
            onValueChange={v => setMode(v ? 'dark' : 'light')}
            thumbColor={theme.colors.primary}
            trackColor={{
              false: theme.colors.border,
              true: theme.colors.primaryLight,
            }}
          />
        </View>

        <View style={styles.previewSection}>
          <Text style={[styles.sectionLabel, {color: theme.colors.text}]}>
            Preview
          </Text>
          <View
            style={[
              styles.previewCard,
              {backgroundColor: theme.colors.cardSecondary},
            ]}>
            <Text style={[styles.previewTitle, {color: theme.colors.text}]}>
              Sample Card
            </Text>
            <Text
              style={[styles.previewText, {color: theme.colors.textSecondary}]}>
              This is how your content will look with the selected theme.
            </Text>
            <TouchableOpacity
              style={[
                styles.previewButton,
                {backgroundColor: theme.colors.primary},
              ]}>
              <Text
                style={[styles.previewButtonText, {color: theme.colors.card}]}>
                Sample Button
              </Text>
            </TouchableOpacity>
          </View>
        </View>
      </View>
    </ScrollView>
  );
};

const styles = StyleSheet.create({
  container: {
    flexGrow: 1,
    alignItems: 'center',
    justifyContent: 'center',
    padding: 24,
  },
  card: {
    width: '100%',
    maxWidth: 420,
    borderRadius: 20,
    padding: 28,
    shadowColor: '#000',
    shadowOffset: {width: 0, height: 4},
    shadowOpacity: 0.1,
    shadowRadius: 10,
    elevation: 6,
    alignItems: 'center',
  },
  title: {
    fontSize: 26,
    fontWeight: 'bold',
    marginBottom: 8,
  },
  subtitle: {
    fontSize: 16,
    marginBottom: 24,
    textAlign: 'center',
  },
  sectionLabel: {
    fontSize: 17,
    fontWeight: '600',
    marginBottom: 10,
    marginTop: 10,
  },
  swatchRow: {
    flexDirection: 'row',
    marginBottom: 24,
    justifyContent: 'center',
  },
  swatch: {
    width: 38,
    height: 38,
    borderRadius: 19,
    marginHorizontal: 8,
    alignItems: 'center',
    justifyContent: 'center',
  },
  modeRow: {
    flexDirection: 'row',
    alignItems: 'center',
    marginTop: 10,
    marginBottom: 24,
  },
  previewSection: {
    width: '100%',
    marginTop: 16,
  },
  previewCard: {
    padding: 16,
    borderRadius: 12,
    marginTop: 8,
  },
  previewTitle: {
    fontSize: 18,
    fontWeight: 'bold',
    marginBottom: 8,
  },
  previewText: {
    fontSize: 14,
    marginBottom: 16,
    lineHeight: 20,
  },
  previewButton: {
    paddingVertical: 12,
    paddingHorizontal: 20,
    borderRadius: 8,
    alignSelf: 'flex-start',
  },
  previewButtonText: {
    fontSize: 14,
    fontWeight: '600',
  },
});

export default ThemePickerScreen;

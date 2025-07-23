import React, {memo, useCallback} from 'react';
import {
  View,
  Text,
  StyleSheet,
  FlatList,
  TouchableOpacity,
  Linking,
  Platform,
} from 'react-native';
import Icon from 'react-native-vector-icons/MaterialIcons';
import FontAwesome from 'react-native-vector-icons/FontAwesome';
import {contentData} from '../../config';
import {CertificationItem} from '../../config/contentData';
import {useAppTheme} from '../../hooks/useAppTheme';

const keyExtractor = (item: CertificationItem) => item.id;

const CertificationsScreen = () => {
  const {theme} = useAppTheme();

  const renderCertificationItem = useCallback(
    ({item: cert, index}: {item: CertificationItem; index: number}) => {
      return (
        <View style={styles.certCardWrapper}>
          <View style={[styles.certCard, {backgroundColor: theme.colors.card}]}>
            <View style={styles.certHeader}>
              <FontAwesome
                name="check-circle"
                size={32}
                color={theme.colors.primary}
                style={styles.certIcon}
              />
              <View style={styles.certInfo}>
                <Text style={[styles.certTitle, {color: theme.colors.text}]}>
                  {cert.name}
                </Text>
                <Text style={[styles.certIssuer, {color: theme.colors.text}]}>
                  {cert.issuer}
                </Text>
                <Text
                  style={[
                    styles.certDate,
                    {color: theme.colors.textSecondary},
                  ]}>
                  {cert.date}
                </Text>
                {cert.credentialId && (
                  <Text
                    style={[
                      styles.credentialId,
                      {color: theme.colors.textTertiary},
                    ]}>
                    ID: {cert.credentialId}
                  </Text>
                )}
              </View>
            </View>
            <TouchableOpacity
              style={[
                styles.verifyButton,
                {backgroundColor: theme.colors.primary},
              ]}
              onPress={() =>
                cert.credentialUrl && Linking.openURL(cert.credentialUrl)
              }>
              <Icon name="link" size={20} color={theme.colors.card} />
              <Text style={[styles.verifyText, {color: theme.colors.card}]}>
                Verify Certificate
              </Text>
            </TouchableOpacity>
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
        data={contentData.certifications}
        renderItem={renderCertificationItem}
        keyExtractor={keyExtractor}
        contentContainerStyle={styles.scrollContent}
        showsVerticalScrollIndicator={false}
      />
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
  certCardWrapper: {
    width: '100%',
    alignItems: 'center',
    marginBottom: 28,
  },
  certCard: {
    width: 420,
    maxWidth: '92%',
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
  certHeader: {
    flexDirection: 'row',
    alignItems: 'center',
    marginBottom: 16,
  },
  certIcon: {
    marginRight: 16,
  },
  certInfo: {
    flex: 1,
  },
  certTitle: {
    fontSize: 20,
    fontWeight: 'bold',
    marginBottom: 4,
  },
  certIssuer: {
    fontSize: 16,
    marginBottom: 4,
  },
  certDate: {
    fontSize: 14,
  },
  credentialId: {
    fontSize: 12,
    fontStyle: 'italic',
    marginTop: 2,
  },
  verifyButton: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'center',
    padding: 14,
    borderRadius: 10,
    marginTop: 10,
    shadowColor: '#000',
    shadowOffset: {width: 0, height: 2},
    shadowOpacity: 0.08,
    shadowRadius: 4,
    elevation: 2,
  },
  verifyText: {
    fontSize: 16,
    fontWeight: '600',
    marginLeft: 8,
  },
});

export default memo(CertificationsScreen);

import React, { useState } from 'react';
import { View, Text, TouchableOpacity, Image, ScrollView, StyleSheet } from 'react-native';
import { useSelector, useDispatch } from 'react-redux';
import { useSafeAreaInsets } from 'react-native-safe-area-context';
import { router } from 'expo-router';
import { getTheme } from '../constants/theme';
import { toggleTheme } from '../store/slices/themeSlice';
import Toast from '../components/Toast';

const ProfileScreen = () => {
  const { currentUser } = useSelector(state => state.user);
  const { isDarkMode } = useSelector(state => state.theme);
  const dispatch = useDispatch();
  const theme = getTheme(isDarkMode);
  const insets = useSafeAreaInsets();
  const [toast, setToast] = useState({ visible: false, message: '', type: 'success' });

  const formatNumber = (num) => {
    if (num >= 1000000) {
      return (num / 1000000).toFixed(1) + 'M';
    } else if (num >= 1000) {
      return (num / 1000).toFixed(1) + 'K';
    }
    return num.toString();
  };

  const showToast = (message, type = 'success') => {
    setToast({ visible: true, message, type });
  };

  const hideToast = () => {
    setToast({ visible: false, message: '', type: 'success' });
  };

  const handleToggleTheme = () => {
    dispatch(toggleTheme());
    showToast(`Switched to ${isDarkMode ? 'Light' : 'Dark'} Mode`, 'success');
  };

  const handleSettingsPress = () => {
    router.push('/settings');
  };

  return (
    <View style={[styles.container, { backgroundColor: theme.colors.background }]}>
      <Toast
        visible={toast.visible}
        message={toast.message}
        type={toast.type}
        onHide={hideToast}
      />

      <ScrollView style={styles.scrollView} showsVerticalScrollIndicator={false}>
        {/* Header */}
        <View style={[styles.header, {
          backgroundColor: theme.colors.card,
          borderBottomColor: theme.colors.border,
          paddingTop: Math.max(insets.top, 8)
        }]}>
          <View style={styles.headerContent}>
            <Text style={[styles.headerTitle, { color: theme.colors.text.primary }]}>{currentUser.username}</Text>
            <View style={styles.headerButtons}>
              <TouchableOpacity onPress={handleToggleTheme} style={styles.themeButton}>
                <Text style={styles.themeIcon}>{isDarkMode ? '☀️' : '🌙'}</Text>
              </TouchableOpacity>
              <TouchableOpacity onPress={handleSettingsPress}>
                <Text style={styles.settingsIcon}>⚙️</Text>
              </TouchableOpacity>
            </View>
          </View>
        </View>

        {/* Profile Info */}
        <View style={[styles.profileSection, {
          backgroundColor: theme.colors.card,
          borderBottomColor: theme.colors.border
        }]}>
          <View style={styles.profileHeader}>
            <Image
              source={{ uri: currentUser.avatar }}
              style={styles.profileAvatar}
            />
            <View style={styles.profileInfo}>
              <Text style={[styles.profileName, { color: theme.colors.text.primary }]}>{currentUser.name}</Text>
              <Text style={[styles.profileUsername, { color: theme.colors.text.secondary }]}>{currentUser.username}</Text>
            </View>
          </View>

          {/* Stats */}
          <View style={styles.statsContainer}>
            <View style={styles.statItem}>
              <Text style={[styles.statNumber, { color: theme.colors.text.primary }]}>{formatNumber(currentUser.posts)}</Text>
              <Text style={[styles.statLabel, { color: theme.colors.text.secondary }]}>Posts</Text>
            </View>
            <View style={styles.statItem}>
              <Text style={[styles.statNumber, { color: theme.colors.text.primary }]}>{formatNumber(currentUser.followers)}</Text>
              <Text style={[styles.statLabel, { color: theme.colors.text.secondary }]}>Followers</Text>
            </View>
            <View style={styles.statItem}>
              <Text style={[styles.statNumber, { color: theme.colors.text.primary }]}>{formatNumber(currentUser.following)}</Text>
              <Text style={[styles.statLabel, { color: theme.colors.text.secondary }]}>Following</Text>
            </View>
          </View>

          {/* Edit Profile Button */}
          <TouchableOpacity style={[styles.editButton, { backgroundColor: theme.colors.input }]}>
            <Text style={[styles.editButtonText, { color: theme.colors.text.primary }]}>Edit Profile</Text>
          </TouchableOpacity>
        </View>

        {/* Posts Grid */}
        <View style={[styles.postsSection, { backgroundColor: theme.colors.card }]}>
          <View style={[styles.postsHeader, { borderBottomColor: theme.colors.border }]}>
            <TouchableOpacity style={[styles.postsTab, { borderBottomColor: theme.colors.primary }]}>
              <Text style={[styles.postsTabText, { color: theme.colors.primary }]}>📷</Text>
            </TouchableOpacity>
            <TouchableOpacity style={styles.postsTab}>
              <Text style={[styles.postsTabTextInactive, { color: theme.colors.text.secondary }]}>📌</Text>
            </TouchableOpacity>
          </View>

          {/* Mock Posts Grid */}
          <View style={styles.postsGrid}>
            {[1, 2, 3, 4, 5, 6].map((item) => (
              <View key={item} style={[styles.postItem, { borderColor: theme.colors.border }]}>
                <View style={[styles.postPlaceholder, { backgroundColor: theme.colors.input }]}>
                  <Text style={[styles.postPlaceholderIcon, { color: theme.colors.text.secondary }]}>📷</Text>
                </View>
              </View>
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
  scrollView: {
    flex: 1,
  },
  header: {
    padding: 12,
    borderBottomWidth: 1,
  },
  headerContent: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
  },
  headerTitle: {
    fontSize: 18,
    fontWeight: '600',
  },
  headerButtons: {
    flexDirection: 'row',
    alignItems: 'center',
  },
  themeButton: {
    marginRight: 12,
    padding: 4,
  },
  themeIcon: {
    fontSize: 18,
  },
  settingsIcon: {
    fontSize: 16,
  },
  profileSection: {
    padding: 12,
    borderBottomWidth: 1,
  },
  profileHeader: {
    flexDirection: 'row',
    alignItems: 'center',
    marginBottom: 12,
  },
  profileAvatar: {
    width: 70,
    height: 70,
    borderRadius: 35,
    marginRight: 12,
  },
  profileInfo: {
    flex: 1,
  },
  profileName: {
    fontSize: 18,
    fontWeight: '600',
  },
  profileUsername: {
    fontSize: 14,
  },
  statsContainer: {
    flexDirection: 'row',
    justifyContent: 'space-around',
    marginBottom: 12,
  },
  statItem: {
    alignItems: 'center',
  },
  statNumber: {
    fontSize: 16,
    fontWeight: '600',
  },
  statLabel: {
    fontSize: 12,
  },
  editButton: {
    paddingVertical: 6,
    borderRadius: 6,
  },
  editButtonText: {
    textAlign: 'center',
    fontWeight: '600',
    fontSize: 14,
  },
  postsSection: {
    flex: 1,
  },
  postsHeader: {
    flexDirection: 'row',
    borderBottomWidth: 1,
  },
  postsTab: {
    flex: 1,
    paddingVertical: 10,
    borderBottomWidth: 2,
  },
  postsTabText: {
    textAlign: 'center',
    fontWeight: '600',
    fontSize: 14,
  },
  postsTabTextInactive: {
    textAlign: 'center',
    fontSize: 14,
  },
  postsGrid: {
    flexDirection: 'row',
    flexWrap: 'wrap',
  },
  postItem: {
    width: '33.33%',
    aspectRatio: 1,
    borderWidth: 1,
  },
  postPlaceholder: {
    width: '100%',
    height: '100%',
    alignItems: 'center',
    justifyContent: 'center',
  },
  postPlaceholderIcon: {
    fontSize: 20,
  },
});

export default ProfileScreen; 
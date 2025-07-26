import React from 'react';
import { View, Text, TouchableOpacity, Image, ScrollView, StyleSheet } from 'react-native';
import { useSelector } from 'react-redux';

const ProfileScreen = () => {
  const { currentUser } = useSelector(state => state.user);

  const formatNumber = (num) => {
    if (num >= 1000000) {
      return (num / 1000000).toFixed(1) + 'M';
    } else if (num >= 1000) {
      return (num / 1000).toFixed(1) + 'K';
    }
    return num.toString();
  };

  return (
    <ScrollView style={styles.container} showsVerticalScrollIndicator={false}>
      {/* Header */}
      <View style={styles.header}>
        <View style={styles.headerContent}>
          <Text style={styles.headerTitle}>{currentUser.username}</Text>
          <TouchableOpacity>
            <Text style={styles.settingsIcon}>⚙️</Text>
          </TouchableOpacity>
        </View>
      </View>

      {/* Profile Info */}
      <View style={styles.profileSection}>
        <View style={styles.profileHeader}>
          <Image
            source={{ uri: currentUser.avatar }}
            style={styles.profileAvatar}
          />
          <View style={styles.profileInfo}>
            <Text style={styles.profileName}>{currentUser.name}</Text>
            <Text style={styles.profileUsername}>{currentUser.username}</Text>
          </View>
        </View>

        {/* Stats */}
        <View style={styles.statsContainer}>
          <View style={styles.statItem}>
            <Text style={styles.statNumber}>{formatNumber(currentUser.posts)}</Text>
            <Text style={styles.statLabel}>پست</Text>
          </View>
          <View style={styles.statItem}>
            <Text style={styles.statNumber}>{formatNumber(currentUser.followers)}</Text>
            <Text style={styles.statLabel}>دنبال‌کننده</Text>
          </View>
          <View style={styles.statItem}>
            <Text style={styles.statNumber}>{formatNumber(currentUser.following)}</Text>
            <Text style={styles.statLabel}>دنبال‌شونده</Text>
          </View>
        </View>

        {/* Edit Profile Button */}
        <TouchableOpacity style={styles.editButton}>
          <Text style={styles.editButtonText}>ویرایش پروفایل</Text>
        </TouchableOpacity>
      </View>

      {/* Posts Grid */}
      <View style={styles.postsSection}>
        <View style={styles.postsHeader}>
          <TouchableOpacity style={styles.postsTab}>
            <Text style={styles.postsTabText}>📷</Text>
          </TouchableOpacity>
          <TouchableOpacity style={styles.postsTab}>
            <Text style={styles.postsTabTextInactive}>📌</Text>
          </TouchableOpacity>
        </View>

        {/* Mock Posts Grid */}
        <View style={styles.postsGrid}>
          {[1, 2, 3, 4, 5, 6].map((item) => (
            <View key={item} style={styles.postItem}>
              <View style={styles.postPlaceholder}>
                <Text style={styles.postPlaceholderIcon}>📷</Text>
              </View>
            </View>
          ))}
        </View>
      </View>
    </ScrollView>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#FAFAFA',
  },
  header: {
    backgroundColor: '#FFFFFF',
    padding: 16,
    borderBottomWidth: 1,
    borderBottomColor: '#E5E5E5',
  },
  headerContent: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
  },
  headerTitle: {
    fontSize: 20,
    fontWeight: '600',
    color: '#262626',
  },
  settingsIcon: {
    fontSize: 18,
  },
  profileSection: {
    backgroundColor: '#FFFFFF',
    padding: 16,
    borderBottomWidth: 1,
    borderBottomColor: '#E5E5E5',
  },
  profileHeader: {
    flexDirection: 'row',
    alignItems: 'center',
    marginBottom: 16,
  },
  profileAvatar: {
    width: 80,
    height: 80,
    borderRadius: 40,
    marginRight: 16,
  },
  profileInfo: {
    flex: 1,
  },
  profileName: {
    fontSize: 20,
    fontWeight: '600',
    color: '#262626',
  },
  profileUsername: {
    color: '#8E8E93',
    fontSize: 16,
  },
  statsContainer: {
    flexDirection: 'row',
    justifyContent: 'space-around',
    marginBottom: 16,
  },
  statItem: {
    alignItems: 'center',
  },
  statNumber: {
    fontSize: 18,
    fontWeight: '600',
    color: '#262626',
  },
  statLabel: {
    color: '#8E8E93',
    fontSize: 14,
  },
  editButton: {
    backgroundColor: '#F0F0F0',
    paddingVertical: 8,
    borderRadius: 8,
  },
  editButtonText: {
    textAlign: 'center',
    fontWeight: '600',
    color: '#262626',
  },
  postsSection: {
    backgroundColor: '#FFFFFF',
  },
  postsHeader: {
    flexDirection: 'row',
    borderBottomWidth: 1,
    borderBottomColor: '#E5E5E5',
  },
  postsTab: {
    flex: 1,
    paddingVertical: 12,
    borderBottomWidth: 2,
    borderBottomColor: '#0095F6',
  },
  postsTabText: {
    textAlign: 'center',
    color: '#0095F6',
    fontWeight: '600',
    fontSize: 16,
  },
  postsTabTextInactive: {
    textAlign: 'center',
    color: '#8E8E93',
    fontSize: 16,
  },
  postsGrid: {
    flexDirection: 'row',
    flexWrap: 'wrap',
  },
  postItem: {
    width: '33.33%',
    aspectRatio: 1,
    borderWidth: 1,
    borderColor: '#F0F0F0',
  },
  postPlaceholder: {
    width: '100%',
    height: '100%',
    backgroundColor: '#F0F0F0',
    alignItems: 'center',
    justifyContent: 'center',
  },
  postPlaceholderIcon: {
    color: '#8E8E93',
    fontSize: 24,
  },
});

export default ProfileScreen; 
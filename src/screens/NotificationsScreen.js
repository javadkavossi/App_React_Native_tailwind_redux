import React from 'react';
import { View, Text, FlatList, TouchableOpacity, Image, StyleSheet } from 'react-native';
import { useSelector } from 'react-redux';
import { useSafeAreaInsets } from 'react-native-safe-area-context';
import { getTheme } from '../constants/theme';

const NotificationsScreen = () => {
  const { isDarkMode } = useSelector(state => state.theme);
  const theme = getTheme(isDarkMode);
  const insets = useSafeAreaInsets();

  const notifications = [
    {
      id: '1',
      type: 'like',
      user: {
        username: 'ali_ahmadi',
        avatar: 'https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=150&h=150&fit=crop&crop=face'
      },
      message: 'liked your post',
      time: '2h ago'
    },
    {
      id: '2',
      type: 'follow',
      user: {
        username: 'fateme_mohammadi',
        avatar: 'https://images.unsplash.com/photo-1494790108755-2616b612b786?w=150&h=150&fit=crop&crop=face'
      },
      message: 'started following you',
      time: '5h ago'
    },
    {
      id: '3',
      type: 'comment',
      user: {
        username: 'mohammad_rezaei',
        avatar: 'https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?w=150&h=150&fit=crop&crop=face'
      },
      message: 'commented: "Great photo!"',
      time: '1d ago'
    },
    {
      id: '4',
      type: 'like',
      user: {
        username: 'zahra_hosseini',
        avatar: 'https://images.unsplash.com/photo-1438761681033-6461ffad8d80?w=150&h=150&fit=crop&crop=face'
      },
      message: 'liked your post',
      time: '2d ago'
    },
    {
      id: '5',
      type: 'follow',
      user: {
        username: 'amir_karimi',
        avatar: 'https://images.unsplash.com/photo-1500648767791-00dcc994a43e?w=150&h=150&fit=crop&crop=face'
      },
      message: 'started following you',
      time: '3d ago'
    }
  ];

  const getNotificationIcon = (type) => {
    switch (type) {
      case 'like': return '❤️';
      case 'follow': return '👤';
      case 'comment': return '💬';
      default: return '🔔';
    }
  };

  const renderNotification = ({ item }) => (
    <TouchableOpacity style={[styles.notificationItem, {
      backgroundColor: theme.colors.card,
      borderBottomColor: theme.colors.border
    }]}>
      <Image source={{ uri: item.user.avatar }} style={styles.notificationAvatar} />
      <View style={styles.notificationContent}>
        <Text style={[styles.notificationText, { color: theme.colors.text.primary }]}>
          <Text style={[styles.notificationUsername, { fontWeight: '600' }]}>{item.user.username}</Text> {item.message}
        </Text>
        <Text style={[styles.notificationTime, { color: theme.colors.text.secondary }]}>{item.time}</Text>
      </View>
      <Text style={styles.notificationIcon}>{getNotificationIcon(item.type)}</Text>
    </TouchableOpacity>
  );

  return (
    <View style={[styles.container, {
      backgroundColor: theme.colors.background,
      paddingTop: Math.max(insets.top, 8)
    }]}>
      <View style={[styles.header, {
        backgroundColor: theme.colors.card,
        borderBottomColor: theme.colors.border
      }]}>
        <Text style={[styles.headerTitle, { color: theme.colors.text.primary }]}>Notifications</Text>
      </View>

      <FlatList
        data={notifications}
        keyExtractor={(item) => item.id}
        renderItem={renderNotification}
        showsVerticalScrollIndicator={false}
        contentContainerStyle={styles.listContainer}
      />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  header: {
    padding: 12,
    borderBottomWidth: 1,
  },
  headerTitle: {
    fontSize: 18,
    fontWeight: '600',
  },
  listContainer: {
    flexGrow: 1,
  },
  notificationItem: {
    flexDirection: 'row',
    alignItems: 'center',
    padding: 10,
    borderBottomWidth: 1,
  },
  notificationAvatar: {
    width: 36,
    height: 36,
    borderRadius: 18,
    marginRight: 10,
  },
  notificationContent: {
    flex: 1,
  },
  notificationText: {
    fontSize: 13,
    lineHeight: 18,
  },
  notificationUsername: {
    fontWeight: '600',
  },
  notificationTime: {
    fontSize: 11,
    marginTop: 2,
  },
  notificationIcon: {
    fontSize: 16,
  },
});

export default NotificationsScreen; 
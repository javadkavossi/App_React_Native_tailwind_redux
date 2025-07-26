import React from 'react';
import { View, Text, FlatList, TouchableOpacity, Image, StyleSheet } from 'react-native';

const NotificationsScreen = () => {
  const notifications = [
    {
      id: '1',
      type: 'like',
      user: {
        username: 'علی_احمدی',
        avatar: 'https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=150&h=150&fit=crop&crop=face'
      },
      message: 'پست شما را پسندید',
      time: '۲ ساعت پیش'
    },
    {
      id: '2',
      type: 'follow',
      user: {
        username: 'فاطمه_محمدی',
        avatar: 'https://images.unsplash.com/photo-1494790108755-2616b612b786?w=150&h=150&fit=crop&crop=face'
      },
      message: 'شما را دنبال کرد',
      time: '۵ ساعت پیش'
    },
    {
      id: '3',
      type: 'comment',
      user: {
        username: 'محمد_رضایی',
        avatar: 'https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?w=150&h=150&fit=crop&crop=face'
      },
      message: 'نظر داد: "عکس زیبایی!"',
      time: '۱ روز پیش'
    },
    {
      id: '4',
      type: 'like',
      user: {
        username: 'زهرا_حسینی',
        avatar: 'https://images.unsplash.com/photo-1438761681033-6461ffad8d80?w=150&h=150&fit=crop&crop=face'
      },
      message: 'پست شما را پسندید',
      time: '۲ روز پیش'
    },
    {
      id: '5',
      type: 'follow',
      user: {
        username: 'امیر_کریمی',
        avatar: 'https://images.unsplash.com/photo-1500648767791-00dcc994a43e?w=150&h=150&fit=crop&crop=face'
      },
      message: 'شما را دنبال کرد',
      time: '۳ روز پیش'
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
    <TouchableOpacity style={styles.notificationItem}>
      <Image source={{ uri: item.user.avatar }} style={styles.notificationAvatar} />
      <View style={styles.notificationContent}>
        <Text style={styles.notificationText}>
          <Text style={styles.notificationUsername}>{item.user.username}</Text> {item.message}
        </Text>
        <Text style={styles.notificationTime}>{item.time}</Text>
      </View>
      <Text style={styles.notificationIcon}>{getNotificationIcon(item.type)}</Text>
    </TouchableOpacity>
  );

  return (
    <View style={styles.container}>
      <View style={styles.header}>
        <Text style={styles.headerTitle}>اعلان‌ها</Text>
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
    backgroundColor: '#FAFAFA',
  },
  header: {
    backgroundColor: '#FFFFFF',
    padding: 16,
    borderBottomWidth: 1,
    borderBottomColor: '#E5E5E5',
  },
  headerTitle: {
    fontSize: 20,
    fontWeight: '600',
    color: '#262626',
    textAlign: 'right',
  },
  listContainer: {
    flexGrow: 1,
  },
  notificationItem: {
    flexDirection: 'row',
    alignItems: 'center',
    padding: 12,
    backgroundColor: '#FFFFFF',
    borderBottomWidth: 1,
    borderBottomColor: '#F0F0F0',
  },
  notificationAvatar: {
    width: 40,
    height: 40,
    borderRadius: 20,
    marginRight: 12,
  },
  notificationContent: {
    flex: 1,
  },
  notificationText: {
    color: '#262626',
    fontSize: 14,
    lineHeight: 20,
    textAlign: 'right',
  },
  notificationUsername: {
    fontWeight: '600',
  },
  notificationTime: {
    color: '#8E8E93',
    fontSize: 12,
    marginTop: 4,
    textAlign: 'right',
  },
  notificationIcon: {
    fontSize: 18,
  },
});

export default NotificationsScreen; 
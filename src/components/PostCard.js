import React from 'react';
import { View, Text, Image, TouchableOpacity, Alert, StyleSheet } from 'react-native';
import { useDispatch, useSelector } from 'react-redux';
import { toggleLike } from '../store/slices/postsSlice';
import { getTheme } from '../constants/theme';

const PostCard = ({ post }) => {
  const dispatch = useDispatch();
  const { isDarkMode } = useSelector(state => state.theme);
  const theme = getTheme(isDarkMode);

  const handleLike = () => {
    dispatch(toggleLike(post.id));
  };

  const handleComment = () => {
    Alert.alert('Comment', 'Comment feature coming soon!');
  };

  const handleShare = () => {
    Alert.alert('Share', 'Share feature coming soon!');
  };

  const formatNumber = (num) => {
    if (num >= 1000000) {
      return (num / 1000000).toFixed(1) + 'M';
    } else if (num >= 1000) {
      return (num / 1000).toFixed(1) + 'K';
    }
    return num.toString();
  };

  const formatTime = (timestamp) => {
    const now = new Date();
    const postTime = new Date(timestamp);
    const diffInHours = Math.floor((now - postTime) / (1000 * 60 * 60));

    if (diffInHours < 1) return 'Just now';
    if (diffInHours < 24) return `${diffInHours}h ago`;
    const diffInDays = Math.floor(diffInHours / 24);
    return `${diffInDays}d ago`;
  };

  return (
    <View style={[styles.container, { backgroundColor: theme.colors.card, borderBottomColor: theme.colors.border }]}>
      {/* Header */}
      <View style={styles.header}>
        <Image
          source={{ uri: post.user.avatar }}
          style={styles.avatar}
        />
        <View style={styles.headerInfo}>
          <Text style={[styles.username, { color: theme.colors.text.primary }]}>{post.user.username}</Text>
          <Text style={[styles.timestamp, { color: theme.colors.text.secondary }]}>{formatTime(post.timestamp)}</Text>
        </View>
        <TouchableOpacity>
          <Text style={[styles.moreButton, { color: theme.colors.text.primary }]}>•••</Text>
        </TouchableOpacity>
      </View>

      {/* Image */}
      <Image
        source={{ uri: post.image }}
        style={styles.postImage}
        resizeMode="cover"
      />

      {/* Actions */}
      <View style={styles.actionsContainer}>
        <View style={styles.actions}>
          <TouchableOpacity onPress={handleLike} style={styles.actionButton}>
            <Text style={[styles.actionIcon, post.isLiked && styles.likedIcon]}>
              {post.isLiked ? '❤️' : '🤍'}
            </Text>
          </TouchableOpacity>
          <TouchableOpacity onPress={handleComment} style={styles.actionButton}>
            <Text style={styles.actionIcon}>💬</Text>
          </TouchableOpacity>
          <TouchableOpacity onPress={handleShare} style={styles.actionButton}>
            <Text style={styles.actionIcon}>📤</Text>
          </TouchableOpacity>
          <TouchableOpacity style={styles.bookmarkButton}>
            <Text style={styles.actionIcon}>🔖</Text>
          </TouchableOpacity>
        </View>

        {/* Likes */}
        <Text style={[styles.likesText, { color: theme.colors.text.primary }]}>
          {formatNumber(post.likes)} likes
        </Text>

        {/* Caption */}
        <View style={styles.captionContainer}>
          <Text style={[styles.captionUsername, { color: theme.colors.text.primary }]}>
            {post.user.username}
          </Text>
          <Text style={[styles.captionText, { color: theme.colors.text.primary }]}>{post.caption}</Text>
        </View>

        {/* Comments */}
        <TouchableOpacity>
          <Text style={[styles.commentsText, { color: theme.colors.text.secondary }]}>
            View all {post.comments} comments
          </Text>
        </TouchableOpacity>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    marginBottom: 12,
    borderBottomWidth: 1,
  },
  header: {
    flexDirection: 'row',
    alignItems: 'center',
    padding: 10,
  },
  avatar: {
    width: 28,
    height: 28,
    borderRadius: 14,
    marginRight: 10,
  },
  headerInfo: {
    flex: 1,
  },
  username: {
    fontWeight: '600',
    fontSize: 14,
  },
  timestamp: {
    fontSize: 11,
  },
  moreButton: {
    fontWeight: 'bold',
    fontSize: 14,
  },
  postImage: {
    width: '100%',
    height: 320,
  },
  actionsContainer: {
    padding: 10,
  },
  actions: {
    flexDirection: 'row',
    alignItems: 'center',
    marginBottom: 6,
  },
  actionButton: {
    marginRight: 14,
  },
  actionIcon: {
    fontSize: 20,
  },
  likedIcon: {
    color: '#ED4956',
  },
  bookmarkButton: {
    marginLeft: 'auto',
  },
  likesText: {
    fontWeight: '600',
    marginBottom: 4,
    fontSize: 14,
  },
  captionContainer: {
    flexDirection: 'row',
    marginBottom: 4,
  },
  captionUsername: {
    fontWeight: '600',
    marginRight: 6,
    fontSize: 14,
  },
  captionText: {
    flex: 1,
    fontSize: 14,
  },
  commentsText: {
    fontSize: 13,
  },
});

export default PostCard; 
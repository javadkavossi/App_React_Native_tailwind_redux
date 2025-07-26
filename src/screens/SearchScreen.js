import React, { useState } from 'react';
import { View, Text, TextInput, FlatList, TouchableOpacity, Image, StyleSheet } from 'react-native';
import { useSelector } from 'react-redux';
import { useSafeAreaInsets } from 'react-native-safe-area-context';
import { getTheme } from '../constants/theme';

const SearchScreen = () => {
  const [searchQuery, setSearchQuery] = useState('');
  const { isDarkMode } = useSelector(state => state.theme);
  const theme = getTheme(isDarkMode);
  const insets = useSafeAreaInsets();

  // Mock search results with Finglish names and real images
  const searchResults = [
    {
      id: '1',
      username: 'ali_ahmadi',
      name: 'Ali Ahmadi',
      avatar: 'https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=150&h=150&fit=crop&crop=face',
      isFollowing: false
    },
    {
      id: '2',
      username: 'fateme_mohammadi',
      name: 'Fateme Mohammadi',
      avatar: 'https://images.unsplash.com/photo-1494790108755-2616b612b786?w=150&h=150&fit=crop&crop=face',
      isFollowing: true
    },
    {
      id: '3',
      username: 'mohammad_rezaei',
      name: 'Mohammad Rezaei',
      avatar: 'https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?w=150&h=150&fit=crop&crop=face',
      isFollowing: false
    },
    {
      id: '4',
      username: 'zahra_hosseini',
      name: 'Zahra Hosseini',
      avatar: 'https://images.unsplash.com/photo-1438761681033-6461ffad8d80?w=150&h=150&fit=crop&crop=face',
      isFollowing: false
    },
    {
      id: '5',
      username: 'amir_karimi',
      name: 'Amir Karimi',
      avatar: 'https://images.unsplash.com/photo-1500648767791-00dcc994a43e?w=150&h=150&fit=crop&crop=face',
      isFollowing: true
    }
  ];

  const renderSearchResult = ({ item }) => (
    <View style={[styles.searchResult, {
      backgroundColor: theme.colors.card,
      borderBottomColor: theme.colors.border
    }]}>
      <Image source={{ uri: item.avatar }} style={styles.resultAvatar} />
      <View style={styles.resultInfo}>
        <Text style={[styles.resultUsername, { color: theme.colors.text.primary }]}>{item.username}</Text>
        <Text style={[styles.resultName, { color: theme.colors.text.secondary }]}>{item.name}</Text>
      </View>
      <TouchableOpacity
        style={[styles.followButton,
        { backgroundColor: item.isFollowing ? theme.colors.input : theme.colors.primary }
        ]}
      >
        <Text style={[styles.followButtonText,
        { color: item.isFollowing ? theme.colors.text.primary : '#FFFFFF' }
        ]}>
          {item.isFollowing ? 'Following' : 'Follow'}
        </Text>
      </TouchableOpacity>
    </View>
  );

  return (
    <View style={[styles.container, {
      backgroundColor: theme.colors.background,
      paddingTop: Math.max(insets.top, 8)
    }]}>
      <View style={[styles.searchHeader, {
        backgroundColor: theme.colors.card,
        borderBottomColor: theme.colors.border
      }]}>
        <TextInput
          placeholder="Search users..."
          value={searchQuery}
          onChangeText={setSearchQuery}
          style={[styles.searchInput, {
            backgroundColor: theme.colors.input,
            color: theme.colors.text.primary
          }]}
          placeholderTextColor={theme.colors.text.secondary}
        />
      </View>

      <FlatList
        data={searchResults}
        keyExtractor={(item) => item.id}
        renderItem={renderSearchResult}
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
  searchHeader: {
    padding: 12,
    borderBottomWidth: 1,
  },
  searchInput: {
    paddingHorizontal: 12,
    paddingVertical: 10,
    borderRadius: 8,
    fontSize: 16,
  },
  listContainer: {
    flexGrow: 1,
  },
  searchResult: {
    flexDirection: 'row',
    alignItems: 'center',
    padding: 12,
    borderBottomWidth: 1,
  },
  resultAvatar: {
    width: 44,
    height: 44,
    borderRadius: 22,
    marginRight: 12,
  },
  resultInfo: {
    flex: 1,
  },
  resultUsername: {
    fontWeight: '600',
    fontSize: 15,
  },
  resultName: {
    fontSize: 13,
  },
  followButton: {
    paddingHorizontal: 14,
    paddingVertical: 6,
    borderRadius: 6,
  },
  followButtonText: {
    fontWeight: '600',
    fontSize: 13,
  },
});

export default SearchScreen; 
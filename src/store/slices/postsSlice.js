import { createSlice, createAsyncThunk } from '@reduxjs/toolkit';

// Mock data for posts with Finglish names and English captions
const mockPosts = [
  {
    id: '1',
    user: {
      id: '1',
      username: 'ali_ahmadi',
      avatar: 'https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=150&h=150&fit=crop&crop=face',
      name: 'Ali Ahmadi'
    },
    image: 'https://images.unsplash.com/photo-1506905925346-21bda4d32df4?w=400&h=400&fit=crop',
    caption: 'Beautiful mountain view today! 🏔️',
    likes: 1234,
    comments: 89,
    timestamp: new Date().toISOString(),
    isLiked: false
  },
  {
    id: '2',
    user: {
      id: '2',
      username: 'fateme_mohammadi',
      avatar: 'https://images.unsplash.com/photo-1494790108755-2616b612b786?w=150&h=150&fit=crop&crop=face',
      name: 'Fateme Mohammadi'
    },
    image: 'https://images.unsplash.com/photo-1441974231531-c6227db76b6e?w=400&h=400&fit=crop',
    caption: 'Coffee time ☕️',
    likes: 567,
    comments: 23,
    timestamp: new Date(Date.now() - 3600000).toISOString(),
    isLiked: true
  },
  {
    id: '3',
    user: {
      id: '3',
      username: 'mohammad_rezaei',
      avatar: 'https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?w=150&h=150&fit=crop&crop=face',
      name: 'Mohammad Rezaei'
    },
    image: 'https://images.unsplash.com/photo-1506905925346-21bda4d32df4?w=400&h=400&fit=crop',
    caption: 'Trip to Northern Iran 🌊',
    likes: 892,
    comments: 45,
    timestamp: new Date(Date.now() - 7200000).toISOString(),
    isLiked: false
  },
  {
    id: '4',
    user: {
      id: '4',
      username: 'zahra_hosseini',
      avatar: 'https://images.unsplash.com/photo-1438761681033-6461ffad8d80?w=150&h=150&fit=crop&crop=face',
      name: 'Zahra Hosseini'
    },
    image: 'https://images.unsplash.com/photo-1441974231531-c6227db76b6e?w=400&h=400&fit=crop',
    caption: 'Beautiful spring flowers 🌸',
    likes: 445,
    comments: 12,
    timestamp: new Date(Date.now() - 10800000).toISOString(),
    isLiked: true
  },
  {
    id: '5',
    user: {
      id: '5',
      username: 'amir_karimi',
      avatar: 'https://images.unsplash.com/photo-1500648767791-00dcc994a43e?w=150&h=150&fit=crop&crop=face',
      name: 'Amir Karimi'
    },
    image: 'https://images.unsplash.com/photo-1506905925346-21bda4d32df4?w=400&h=400&fit=crop',
    caption: 'Beautiful Tehran night 🌃',
    likes: 678,
    comments: 34,
    timestamp: new Date(Date.now() - 14400000).toISOString(),
    isLiked: false
  }
];

export const fetchPosts = createAsyncThunk(
  'posts/fetchPosts',
  async () => {
    // Simulate API call
    await new Promise(resolve => setTimeout(resolve, 1000));
    return mockPosts;
  }
);

const postsSlice = createSlice({
  name: 'posts',
  initialState: {
    posts: [],
    loading: false,
    error: null
  },
  reducers: {
    toggleLike: (state, action) => {
      const post = state.posts.find(p => p.id === action.payload);
      if (post) {
        post.isLiked = !post.isLiked;
        post.likes += post.isLiked ? 1 : -1;
      }
    },
    addComment: (state, action) => {
      const { postId, comment } = action.payload;
      const post = state.posts.find(p => p.id === postId);
      if (post) {
        post.comments += 1;
      }
    }
  },
  extraReducers: (builder) => {
    builder
      .addCase(fetchPosts.pending, (state) => {
        state.loading = true;
      })
      .addCase(fetchPosts.fulfilled, (state, action) => {
        state.loading = false;
        state.posts = action.payload;
      })
      .addCase(fetchPosts.rejected, (state, action) => {
        state.loading = false;
        state.error = action.error.message;
      });
  },
});

export const { toggleLike, addComment } = postsSlice.actions;
export default postsSlice.reducer; 
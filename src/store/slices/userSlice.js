import { createSlice } from '@reduxjs/toolkit';

const userSlice = createSlice({
  name: 'user',
  initialState: {
    currentUser: {
      id: '1',
      username: 'userName',
      name: 'NameUser',
      avatar: 'https://images.unsplash.com/photo-1535713875002-d1d0cf377fde?w=150&h=150&fit=crop&crop=face',
      followers: 1234,
      following: 567,
      posts: 89
    },
    isAuthenticated: true
  },
  reducers: {
    updateProfile: (state, action) => {
      state.currentUser = { ...state.currentUser, ...action.payload };
    },
    logout: (state) => {
      state.isAuthenticated = false;
      state.currentUser = null;
    }
  },
});

export const { updateProfile, logout } = userSlice.actions;
export default userSlice.reducer; 
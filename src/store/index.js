import { configureStore } from '@reduxjs/toolkit';
import postsReducer from './slices/postsSlice';
import userReducer from './slices/userSlice';
import themeReducer from './slices/themeSlice';

export const store = configureStore({
  reducer: {
    posts: postsReducer,
    user: userReducer,
    theme: themeReducer,
  },
}); 
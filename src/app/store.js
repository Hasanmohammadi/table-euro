import { configureStore } from '@reduxjs/toolkit';
import postReducer from "../features/counter/posts/postSlice"

export default configureStore({
  reducer: {
    post: postReducer,
  },

});
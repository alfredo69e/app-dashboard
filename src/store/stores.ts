import { configureStore } from '@reduxjs/toolkit'
import { authSlice } from './auth';
import { errMessageSlice } from './errMessages';
import { loadingSlice } from './loading';
import { messagesSlice } from './messages';
import { themeSlice } from './theme';


export const store = configureStore({
  reducer: {
    auth: authSlice.reducer,
    loading: loadingSlice.reducer,
    errMessage: errMessageSlice.reducer,
    message: messagesSlice.reducer,
    theme: themeSlice.reducer,
  },
})

// Infer the `RootState` and `AppDispatch` types from the store itself
export type RootState = ReturnType<typeof store.getState>;
// Inferred type: {posts: PostsState, comments: CommentsState, users: UsersState}
export type AppDispatch = typeof store.dispatch;
import { configureStore } from "@reduxjs/toolkit";
import postReducer from './postsSlice'

const store = configureStore({
    reducer: {
        postList: postReducer
    },
});

export default store;

export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;
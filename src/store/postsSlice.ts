import { createSlice, PayloadAction, createAsyncThunk } from '@reduxjs/toolkit'; import axios from 'axios';
import { PostsState, Post } from '../types/types'

export const fetchPosts = createAsyncThunk<Post[], undefined, {rejectValue: string}>(
    'list/getPosts',
    async function (_, { rejectWithValue }): Promise<any> {
        try{
            const resp = await axios.get('https://jsonplaceholder.typicode.com/posts');

            console.log(resp.data);

            return resp.data
        } catch(error) {
            console.error(error);
        }
    }
)

const initialState: PostsState = {
    list: [],
    loading: false,
    error: null
};

const postsSlice = createSlice({
    name: 'posts',
    initialState,
    reducers: {
        addPost(state: any, action: PayloadAction) {
            return
        },
        clearPosts(state: any, action: PayloadAction) {
            state.list = []
        }
    },
    extraReducers: (builder) => {
        builder
            .addCase(fetchPosts.pending, (state) => {
                state.loading = true;
                state.error = null;
                console.log('pending')
            })
            .addCase(fetchPosts.fulfilled, (state, action: any) => {
                state.list = action.payload;
                state.loading = false;
                console.log('fulfilled')
            })
            .addCase(fetchPosts.rejected, (state) => {
                state.error = null;
                console.log('rejected')
            })
    }
})


export const {addPost, clearPosts} = postsSlice.actions;

export default postsSlice.reducer;
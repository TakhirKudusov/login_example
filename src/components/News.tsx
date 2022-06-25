import { useAppDispatch, useAppSelector } from "../hook"
import React, { useEffect } from "react"
import { fetchPosts, clearPosts } from "../store/postsSlice" 


export default function News() {
    const dispatch = useAppDispatch()
    const posts = useAppSelector(state => state.postList.list)
    const isLoading = useAppSelector(state => state.postList.loading)

    useEffect(() => {
        dispatch(fetchPosts())

        return () => {
            dispatch(clearPosts())
        }
    }, [])
    
    return (<div>
        <ul>
            {!isLoading && posts.map(post => <li key={post.id}>
                <div><h3>{post.title}</h3></div>
                <div><p>{post.body}</p></div>
            </li>)}
        </ul>
    </div>)
}
export type Post = {
    id: string;
    title: string;
    body: string;
}

export type PostsState = {
    list: Post[];
    loading: boolean;
    error: string | null;

}
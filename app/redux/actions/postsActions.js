import Api from '../../services/Api';

const receivePosts = (posts) => ({
  type: 'RECEIVE_POSTS',
  posts,
});

export const togglePostsLoading = () => ({
  type: 'TOGGLE_POSTS_LOADING',
});

export const refreshPosts = () => ({
  type: 'REFRESH_POSTS',
});


export function getPosts() {
  return async dispatch => {
    dispatch(togglePostsLoading());
    const posts = await Api.getPosts();
    if (posts.ok) {
      dispatch(receivePosts(posts.data));
      dispatch(togglePostsLoading());
    }
    console.log(posts);
  };
}

export function deletePost(id) {
  return async dispatch => {
    // dispatch(togglePostsLoading());
    await Api.deletePost(id);
    dispatch(refreshPosts());
    // dispatch(togglePostsLoading());
  };
}

export function createPost(post) {
  return async dispatch => {
    const postResponse = await Api.createPost(post);
    if (postResponse.ok) {
      dispatch(refreshPosts());
    }
  };
}

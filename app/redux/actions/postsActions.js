import Api from '../../services/Api';

const receivePosts = (posts) => ({
  type: 'RECEIVE_POSTS',
  posts,
});

export const togglePostsLoading = () => ({
  type: 'TOGGLE_POSTS_LOADING',
});


export function getPosts() {
  return async dispatch => {
    dispatch(togglePostsLoading());
    const posts = await Api.getPosts();
    console.log(posts);
    dispatch(receivePosts(posts));
    dispatch(togglePostsLoading());
  };
}

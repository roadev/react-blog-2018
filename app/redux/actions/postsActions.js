import Api from '../../services/Api';

const receivePosts = (posts) => ({
  type: 'RECEIVE_POSTS',
  posts,
});

const togglePostsLoading = () => ({
  type: 'TOGGLE_POSTS_LOADING',
});


export function getPosts() {
  return async dispatch => {
    const posts = await Api.getPosts();
    dispatch(receivePosts(posts));
  };
}

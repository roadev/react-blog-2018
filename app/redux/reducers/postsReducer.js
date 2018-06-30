const initialState = {
  posts: [],
  postsLoading: false,
};

export function postsReducer(state = initialState, action) {
  switch (action.type) {
    case 'RECEIVE_POSTS': {
      const posts = action.posts;
      console.log(posts);
      return Object.assign({}, initialState, { posts });
    }
    default:
      return initialState;
  }
}

export default postsReducer;

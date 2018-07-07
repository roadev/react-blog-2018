import { fromJS } from 'immutable';

const initialState = fromJS({
  posts: [],
  postsLoading: false,
});

function postsReducer(state = initialState, action) {
  switch (action.type) {
    case 'RECEIVE_POSTS': {
      const posts = fromJS(action.posts);
      console.log(posts);
      return state.set('posts', posts);
    }
    default:
      return initialState;
  }
}

export default postsReducer;

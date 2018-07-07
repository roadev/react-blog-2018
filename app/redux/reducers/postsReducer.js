import { fromJS } from 'immutable';

const initialState = fromJS({
  posts: [],
  postsLoading: false,
});

function postsReducer(state = initialState, action) {
  console.log('state', state.toJS());
  switch (action.type) {
    case 'RECEIVE_POSTS': {
      const posts = fromJS(action.posts);
      console.log(posts);
      return state.set('posts', posts);
    }
    case 'TOGGLE_POSTS_LOADING':
      return state.set('postsLoading', !state.get('postsLoading'));
    default:
      return initialState;
  }
}

export default postsReducer;

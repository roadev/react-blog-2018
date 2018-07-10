import { fromJS } from 'immutable';
import { orderListByDate } from '../../utils/dateUtils';

const initialState = fromJS({
  posts: [],
  postsLoading: false,
  refresh: false,
});

function postsReducer(state = initialState, action) {
  console.log('state', state.toJS());
  switch (action.type) {
    case 'RECEIVE_POSTS': {
      const posts = orderListByDate(fromJS(action.posts), 'date', 'DESC');
      console.log(posts);
      return state.withMutations(map => {
        map.set('posts', posts).set('refresh', false);
      });
    }
    case 'REFRESH_POSTS':
      return state.set('refresh', true);
    case 'TOGGLE_POSTS_LOADING':
      return state.set('postsLoading', !state.get('postsLoading'));
    default:
      return initialState;
  }
}

export default postsReducer;

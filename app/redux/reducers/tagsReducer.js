const initialState = {
  tags: [],
  tagsLoading: false,
};

function tagsReducer(state = initialState, action) {
  switch (action.type) {
    case 'RECEIVE_TAGS': {
      const tags = action.tags;
      console.log(tags);
      return Object.assign({}, initialState, { tags });
    }
    default:
      return initialState;
  }
}

export default tagsReducer;

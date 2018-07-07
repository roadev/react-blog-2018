import Api from '../../services/Api';

const receiveTags = (tags) => ({
  type: 'RECEIVE_TAGS',
  tags,
});

const toggleTagsLoading = () => ({
  type: 'TOGGLE_TAGS_LOADING',
});


export function getTags() {
  return async dispatch => {
    const tags = await Api.getTags();
    dispatch(receiveTags(tags));
  };
}

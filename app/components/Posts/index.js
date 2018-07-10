import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import { getPosts, deletePost, createPost } from '../../redux/actions';
import Posts from './Posts';

const mapStateToProps = (state) => ({
  postsData: state.postsData,
});

const mapDispatchToProps = (dispatch) => (
  bindActionCreators({
    getPosts,
    deletePost,
    createPost,
  }, dispatch)
);

export default connect(mapStateToProps, mapDispatchToProps)(Posts);

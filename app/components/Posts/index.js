import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import { getPosts, deletePost } from '../../redux/actions';
import Posts from './Posts';

const mapStateToProps = (state) => ({
  postsData: state.postsData,
});

const mapDispatchToProps = (dispatch) => (
  bindActionCreators({
    getPosts,
    deletePost,
  }, dispatch)
);

export default connect(mapStateToProps, mapDispatchToProps)(Posts);

import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import { getPosts } from '../../redux/actions';
import Posts from './Posts';

const mapStateToProps = (state) => ({
  postsData: state.postsData,
});

const mapDispatchToProps = (dispatch) => (
  bindActionCreators({
    getPosts,
  }, dispatch)
);

export default connect(mapStateToProps, mapDispatchToProps)(Posts);

import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import { getTags } from '../../redux/actions';
import Tags from './Tags';

const mapStateToProps = (state) => ({
  tagsData: state.tagsData,
});

const mapDispatchToProps = (dispatch) => (
  bindActionCreators({
    getTags,
  }, dispatch)
);

export default connect(mapStateToProps, mapDispatchToProps)(Tags);

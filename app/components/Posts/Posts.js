import React, { Component, Fragment } from 'react';
import PropTypes from 'prop-types';
import ImmutablePropTypes from 'react-immutable-proptypes';
import Button from '@material-ui/core/Button';
import AddIcon from '@material-ui/icons/Add';
import CircularProgress from '@material-ui/core/CircularProgress';
import Header from '../Header';
import Post from './Post';
import PostForm from './PostForm';
import { PostsContainer, CreateButtonContainer } from './styles';

class Posts extends Component {

  static getDerivedStateFromProps(props, state) {
    const { postsData, getPosts } = props;
    console.log('refresh', postsData.get('refresh'));
    console.log('loading', postsData.get('postsLoading'));
    if (postsData.get('refresh') && !postsData.get('postsLoading')) {
      getPosts();
    }
    if (!props.postsData.get('posts').equals(state.posts)) {
      return Object.assign({}, { posts: props.postsData.get('posts') });
    }
    return null;
  }

  static propTypes = {
    postsData: ImmutablePropTypes.map.isRequired,
    deletePost: PropTypes.func.isRequired,
    createPost: PropTypes.func.isRequired,
    getPosts: PropTypes.func.isRequired,
  }

  state = {
    showForm: false,
    postToEdit: undefined,
    posts: this.props.postsData.get('posts'),
  };

  componentDidMount() {
    this.getData();
  }

  getData = () => {
    const { getPosts } = this.props;
    getPosts();
  };

  createPost = post => {
    const { createPost } = this.props;
    this.setState({ showForm: false }, async () => createPost(post.toJS()));
  }

  deletePost = id => this.props.deletePost(id);

  handleOpenForm = () => this.setState({ showForm: true });

  handleCloseForm = () => this.setState({ showForm: false, postToEdit: undefined });

  handleShowEditForm = postToEdit => this.setState({ postToEdit, showForm: true });

  renderPosts = () => {
    // const { postsData } = this.props;
    // const posts = postsData.get('posts');
    // console.log(posts);
    const postsComponent = this.state.posts.map(post => (
      <Post
        key={post.get('_id')}
        post={post}
        showEditForm={this.handleShowEditForm}
        deletePost={this.deletePost}
      />
    ));

    return postsComponent;
  }

  render() {
    const { postsData } = this.props;

    return (
      <Fragment>
        <Header />
        {postsData.get('postsLoading') ? (
          <CircularProgress />
        ) : (
          <Fragment>
            <PostForm
              createPost={this.createPost}
              handleClose={this.handleCloseForm}
              showForm={this.state.showForm}
              postToEdit={this.state.postToEdit}
            />
            <PostsContainer>
              {this.renderPosts()}
            </PostsContainer>
            <CreateButtonContainer>
              <Button
                onClick={this.handleOpenForm}
                variant="fab"
                color="primary"
              >
                <AddIcon />
              </Button>
            </CreateButtonContainer>
          </Fragment>
        )}
      </Fragment>
    );
  }
}

export default Posts;

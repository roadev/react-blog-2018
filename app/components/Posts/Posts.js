import React, { Component, Fragment } from 'react';
import PropTypes from 'prop-types';
import { List } from 'immutable';
import ImmutablePropTypes from 'react-immutable-proptypes';
import Button from '@material-ui/core/Button';
import AddIcon from '@material-ui/icons/Add';
import CircularProgress from '@material-ui/core/CircularProgress';
import Header from '../Header';
import Post from './Post';
import PostForm from './PostForm';
import Api from '../../services/Api';
import { PostsContainer, CreateButtonContainer } from './styles';

class Posts extends Component {

  static getDerivedStateFromProps(props, state) {
    const { postsData, getPosts } = props;
    if (postsData.get('refresh') && !postsData.get('loading')) {
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
    getPosts: PropTypes.func.isRequired,
  }

  state = {
    showForm: false,
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
    this.setState({ showForm: false }, async () => Api.createPost(post));
  }

  deletePost = id => this.props.deletePost(id);

  handleOpenForm = () => this.setState({ showForm: true });

  handleCloseForm = () => this.setState({ showForm: false });

  renderPosts = () => {
    // const { postsData } = this.props;
    // const posts = postsData.get('posts');
    // console.log(posts);
    const postsComponent = this.state.posts.map(post => (
      <Post
        key={post.get('_id')}
        id={post.get('_id')}
        title={post.get('title')}
        body={post.get('body')}
        deletePost={this.deletePost}
      />
    ));

    console.log(postsComponent);
    return postsComponent;
  }

  render() {
    const { postsData } = this.props;
    console.log('postsLoading', postsData.get('postsLoading'));

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

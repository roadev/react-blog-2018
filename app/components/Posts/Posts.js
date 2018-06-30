import React, { Component } from 'react';
import PropTypes from 'prop-types';
import Button from '@material-ui/core/Button';
import AddIcon from '@material-ui/icons/Add';
import Header from '../Header';
import Post from './Post';
import PostForm from './PostForm';
import Api from '../../services/Api';

class Posts extends Component {

  static propTypes = {
    postsData: PropTypes.object.isRequired,
    getPosts: PropTypes.func.isRequired,
  }

  state = {
    showForm: false,
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

  deletePost = async id => Api.deletePost(id);

  handleOpenForm = () => this.setState({ showForm: true });

  handleCloseForm = () => this.setState({ showForm: false });

  renderPosts = () => {
    const { posts } = this.props.postsData;
    console.log(posts);
    const postsComponent = posts.map(post => (
      <Post
        key={post._id}
        id={post._id}
        title={post.title}
        body={post.body}
        deletePost={this.deletePost}
      />
    ));

    console.log(postsComponent);
    return postsComponent;
  }

  render() {
    return (
      <div>
        <Header />
        <PostForm
          createPost={this.createPost}
          handleClose={this.handleCloseForm}
          showForm={this.state.showForm}
        />
        {this.renderPosts()}
        <Button
          onClick={this.handleOpenForm}
          variant="fab"
          color="primary"
        >
          <AddIcon />
        </Button>
      </div>
    );
  }
}

export default Posts;

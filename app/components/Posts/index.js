import React, { Component } from 'react';
import Button from '@material-ui/core/Button';
import AddIcon from '@material-ui/icons/Add';
import Header from '../Header';
import Post from './Post';
import PostForm from './PostForm';
import Api from '../../services/Api';

const postsData = [
  { id: 1, title: 'Title 1', body: 'Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.', date: new Date('2018-06-01') },
  { id: 2, title: 'Title 2', body: 'Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.', date: new Date('2018-06-02') },
  { id: 3, title: 'Title 3', body: 'Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.', date: new Date('2018-06-03') },
];

class Posts extends Component {

  state = {
    posts: [],
    showForm: false,
  };

  componentDidMount() {
    this.getData();
  }

  getData = async () => {
    const posts = await Api.getPosts();
    this.setState({ posts });
  };

  createPost = post => {
    this.setState({ showForm: false }, async () => Api.createPost(post));
  }

  deletePost = async id => Api.deletePost(id);

  handleOpenForm = () => this.setState({ showForm: true });

  handleCloseForm = () => this.setState({ showForm: false });

  renderPosts = () => (
    this.state.posts.map(post => (
      <Post
        key={post._id}
        id={post._id}
        title={post.title}
        body={post.body}
        deletePost={this.deletePost}
      />
    ))
  )

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

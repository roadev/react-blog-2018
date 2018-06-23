import React, { Component } from 'react';
import Post from './Post';
import PostForm from './PostForm';

const postsData = [
  { id: 1, title: 'Title 1', body: 'Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.', date: new Date('2018-06-01') },
  { id: 2, title: 'Title 2', body: 'Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.', date: new Date('2018-06-02') },
  { id: 3, title: 'Title 3', body: 'Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.', date: new Date('2018-06-03') },
];

class Posts extends Component {

  state = {
    posts: [],
  };

  componentDidMount() {
    fetch('https://devhack-blog-api.herokuapp.com/posts')
      .then(response => response.json())
        .then(posts => this.setState({ posts }));
  }

  createPost = async post => {
    const response = await fetch('https://devhack-blog-api.herokuapp.com/posts', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify(post.toJS()),
    });
    const responseJson = await response.json();
    console.log(responseJson);
  }

  deletePost = async id => {
    const response = await fetch(`https://devhack-blog-api.herokuapp.com/posts/${id}`, {
      method: 'DELETE',
      headers: {
        'Content-Type': 'application/json',
      },
    });
    const responseJson = await response.json();
    console.log(responseJson);
  }

  render() {
    const posts = this.state.posts.map(post => (
      <Post key={post._id} id={post._id} title={post.title} body={post.body} deletePost={this.deletePost} />
    ));

    return (
      <div>
        <PostForm createPost={this.createPost} />
        {posts}
      </div>
    );
  }
}

export default Posts;

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
    posts: [...postsData],
  };

  createPost = post => {
    console.log(post);
    const postWithId = Object.assign({}, post, { id: this.state.posts.length + 1 });
    const posts = this.state.posts.concat(postWithId);
    this.setState({ posts });
    console.log(posts);
    // this.setState({ posts });
  }

  render() {
    const posts = this.state.posts.map(post => (
      <Post key={post.id} title={post.title} body={post.body} />
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

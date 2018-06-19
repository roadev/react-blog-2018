import React from 'react';
import PropTypes from 'prop-types';

const Post = ({ title, body }) => (
  <div>
    <h1>{title}</h1>
    <p>{body}</p>
  </div>
);

Post.propTypes = {
  title: PropTypes.string.isRequired,
  body: PropTypes.string,
};

Post.defaultProps = {
  body: 'This post has no content',
};

export default Post;

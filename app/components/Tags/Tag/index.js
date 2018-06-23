import React from 'react';
import PropTypes from 'prop-types';

const Tag = ({ name, description }) => (
  <div>
    <h1>{name}</h1>
    <p>{description}</p>
  </div>
);

Tag.propTypes = {
  name: PropTypes.string.isRequired,
  description: PropTypes.string,
};

Tag.defaultProps = {
  body: 'This post has no content',
};

export default Tag;

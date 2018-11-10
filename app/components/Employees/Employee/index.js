import React from 'react';
import PropTypes from 'prop-types';

const Employee = ({ id, title, body, deletePost }) => (
  <div>
    <h1>{title}</h1>
    <p>{body}</p>
    <button onClick={() => deletePost(id)}>Delete</button>
  </div>
);

Employee.propTypes = {
  title: PropTypes.string.isRequired,
  body: PropTypes.string,
};

Employee.defaultProps = {
  body: 'This post has no content',
};

export default Employee;

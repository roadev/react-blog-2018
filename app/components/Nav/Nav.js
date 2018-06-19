import React from 'react';
import { Link } from 'react-router-dom';

const Nav = () => (
  <nav>
    <ul>
      <li>
        <Link to="/">Home</Link>
      </li>
      <li>
        <Link to="/posts">Posts</Link>
      </li>
      {/* <li>
        <Link to="/another_route">Another Component</Link>
      </li> */}
    </ul>
  </nav>
);

export default Nav;

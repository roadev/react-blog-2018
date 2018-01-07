import React from 'react';
import { Link } from 'react-router-dom';

const Nav = () => (
  <nav>
    <ul>
      <li>
        <Link to="/" />
      </li>
      {/* <li>
        <Link to="/another_route">Another Component</Link>
      </li> */}
    </ul>
  </nav>
);

export default Nav;

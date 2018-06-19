import React from 'react';
import { Link } from 'react-router-dom';
import Button from '@material-ui/core/Button';

const Nav = () => (
  <nav>
    <ul>
      <li>
        <Link to="/" />
      </li>
      <li>
        <Button>I'm a button!!!!</Button>
      </li>
      {/* <li>
        <Link to="/another_route">Another Component</Link>
      </li> */}
    </ul>
  </nav>
);

export default Nav;

import React from 'react';
import { Button } from 'react-toolbox/lib/button';
import Nav from '../Nav/Nav';


const Home = () =>
  (
    <div>
      <Nav />
      <h3>
        This is the home page
      </h3>
      <Button label="test" />
    </div>
  );

export default Home;

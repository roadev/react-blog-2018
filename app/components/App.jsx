import React from 'react';
import {
  BrowserRouter as Router,
  Switch,
  Route,
} from 'react-router-dom';
import Home from './Home';

const App = () => (
  <Router>
    <Switch>
      <Route path="/" exact component={Home} />
      {/* <Route path="another_route" exact component={AnotherComponent} /> */}
    </Switch>
  </Router>
);

export default App;

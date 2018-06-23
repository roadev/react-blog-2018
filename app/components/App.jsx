import React from 'react';
import {
  BrowserRouter as Router,
  Switch,
  Route,
} from 'react-router-dom';
import Home from './Home';
import Posts from './Posts';
import Tags from './Tags';
import NotFound from './404';

const App = () => (
  <Router>
    <Switch>
      <Route path="/" exact component={Home} />
      <Route path="/posts" exact component={Posts} />
      <Route path="/tags" exact component={Tags} />
      <Route component={NotFound} />
      {/* <Route path="another_route" exact component={AnotherComponent} /> */}
    </Switch>
  </Router>
);

export default App;

import '../style.scss';
import {
  BrowserRouter as Router, Route, NavLink, Switch,
} from 'react-router-dom';
import React from 'react';
import Posts from './posts';

const App = (props) => {
  return (
    <Router>
      <div>
        <Nav />
        <Switch>
          <Route exact path="/" component={Posts} />
          <Route render={() => (<div>post not found </div>)} />
        </Switch>
      </div>
    </Router>
  );
};

/* <Route path="/posts/new" component={NewPost} />
          <Route path="/posts/:postID" component={Post} /> */

const Nav = (props) => {
  return (
    <nav>
      <ul>
        <NavLink exact to="/">My Super Awesome Blog</NavLink>
        <NavLink to="/posts/new">new post</NavLink>
      </ul>
    </nav>
  );
};

export default App;

import '../style.scss';
import {
  BrowserRouter as Router, Route, NavLink, Switch,
} from 'react-router-dom';
import React from 'react';
import Posts from './posts';
import newPost from './newPost';
import Post from './post';

const App = (props) => {
  return (
    <Router>
      <div>
        <Nav />
        <Switch>
          <Route exact path="/" component={Posts} />
          <Route path="/posts/new" component={newPost} />
          <Route path="/posts/:postID" component={Post} />
          <Route render={() => (<div>post not found </div>)} />
        </Switch>
      </div>
    </Router>
  );
};

const Nav = (props) => {
  return (
    <nav>
      <ul className="navBar">
        <NavLink id="head" exact to="/">CAROLINE BLOG</NavLink>
        <NavLink to="/posts/new">NEW POST</NavLink>
      </ul>
    </nav>
  );
};

export default App;

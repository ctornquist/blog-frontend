import '../style.scss';
import {
  BrowserRouter as Router, Route, Switch,
} from 'react-router-dom';
import React from 'react';
import Posts from './posts';
import newPost from './newPost';
import Post from './post';
import signIn from './signIn';
import signUp from './signUp';
import NavBar from './navBar';
import PrivateRoute from './privateRoute';

const App = (props) => {
  return (
    <Router>
      <NavBar />
      <div>
        <Switch>
          <PrivateRoute exact path="/" component={Posts} />
          <Route exact path="/signin" component={signIn} />
          <Route exact path="/signup" component={signUp} />
          <PrivateRoute path="/posts/new" component={newPost} />
          <Route path="/posts/:postID" component={Post} />
          <Route render={() => (<div>post not found </div>)} />
        </Switch>
      </div>
    </Router>
  );
};

export default App;

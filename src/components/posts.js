import React, { Component } from 'react';
import { connect } from 'react-redux';
import { withRouter, Link } from 'react-router-dom';
import { fetchPosts } from '../actions';

class Posts extends Component {
  componentDidMount() {
    this.props.fetchPosts();
  }

  render() {
    // need to add link thing somehow
    const renderPosts = this.props.all !== null ? this.props.all.map((post) => {
      return (
        <li key={post.id}>
          <Link to={`posts/${post.id}`} />
          <p>{post.title}</p>
          <p>{post.tags}</p>
          <img src={post.coverURL} alt="blog post" />
        </li>
      );
    }) : null;

    /* loop over the map, gets key etc. from mapStateToProps, render a post using JSX */
    return (
      <div>{renderPosts}</div>
    );
  }
}

function mapStateToProps(reduxState) {
  return {
    all: reduxState.posts.all,
  };
}

export default withRouter(connect(mapStateToProps, { fetchPosts })(Posts));

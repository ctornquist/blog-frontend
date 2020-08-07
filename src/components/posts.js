import React, { Component } from 'react';
import { connect } from 'react-redux';
import { Link } from 'react-router-dom';
import { fetchPosts } from '../actions';

class Posts extends Component {
  // eslint-disable-next-line no-useless-constructor
  constructor(props) {
    super(props);
  }

  componentDidMount() {
    console.log('in posts mount');
    this.props.fetchPosts();
  }

  componentDidUpdate() {
    console.log(this.props.all);
  }

  /* renderPosts = () => {
    if (this.props.all != null) {
      this.props.all.map((post) => {
        console.log('rendering posts');
        return (
          <div key={post.id}>
            <Link to={`posts/${post.id}`}>{post.title}</Link>
            <p>{post.tags}</p>
            <button type="submit">DELETE</button>
            <img src={post.coverURL} alt="blog post" />
          </div>
        );
      });
    }
    console.log('returning null');
    return null;
  } */

  render() {
    console.log('inside render function');
    console.log(this.props.all);

    const renderPosts = this.props.all !== null ? this.props.all.map((post) => {
      console.log('rendering posts');
      return (
        <div key={post.id}>
          <Link to={`posts/${post.id}`}>{post.title}</Link>
          <p>{post.tags}</p>
          <button type="submit">DELETE</button>
          <img src={post.coverURL} alt="blog post" />
        </div>
      );
    }) : null;

    console.log('returning something');
    return (
      <div>{renderPosts}</div>
    );
  }
}

function mapStateToProps(reduxState) {
  console.log('mapping to props');
  return {
    all: reduxState.posts.all,
  };
}

export default connect(mapStateToProps, { fetchPosts })(Posts);

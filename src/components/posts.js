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
    // console.log('in posts mount');
    this.props.fetchPosts();
  }

  render() {
    // console.log('inside render function');
    // console.log(this.props.all);

    const renderPosts = this.props.all !== null ? this.props.all.map((post) => {
      // console.log('rendering posts');
      // console.log(post.coverUrl);
      return (
        <div className="posts" key={post.id}>
          <Link to={`posts/${post.id}`}>
            <img src={post.coverUrl} alt="blog" />
            <div className="top">
              <h1>{post.title}</h1>
              <h2>by: {post.author}</h2>
              <p>{post.tags}</p>
            </div>
          </Link>
        </div>
      );
    }) : null;

    return (
      <div>{renderPosts}</div>
    );
  }
}

function mapStateToProps(reduxState) {
  // console.log('mapping to props');
  return {
    all: reduxState.posts.all,
  };
}

export default connect(mapStateToProps, { fetchPosts })(Posts);

import React, { Component } from 'react';
import { connect } from 'react-redux';
import { withRouter } from 'react-router-dom';
import { fetchPost, deletePost } from '../actions';

class Post extends Component {
  constructor(props) {
    super(props);

    this.state = {
      isEditing: false,
    };
  }

  onComponentDidMount() {
    console.log('single post mounting');
    this.fetchPost(this.props.match.params.postID);
  }

  deletePost = () => {
    this.props.deletePost(this.props.match.params.postID, this.props.history);
  }

  render() {
    console.log('single post mounting');
    console.log(this.props.match.params.postID);
    this.props.fetchPost(this.props.match.params.postID);

    if (!this.state.isEditing) {
      console.log('in render, current is: ');
      console.log(this.props.current);
      return (
        <div key={this.props.current.id}>
          <p>{this.props.current.title}</p>
          <img src={this.props.current.coverURL} alt="blog post" />
          <p>{this.props.current.content}</p>
          <button onClick={this.deletePost} type="submit">DELETE</button>
          <button onClick={this.editPost} type="submit">EDIT</button>
        </div>
      );
    } else {
      return (
        <p>editing</p>
      );
    }
  }
}

function mapStateToProps(reduxState) {
  console.log('mapping state in post');
  return {
    current: reduxState.posts.current,
  };
}

export default withRouter(connect(mapStateToProps, { fetchPost, deletePost })(Post));

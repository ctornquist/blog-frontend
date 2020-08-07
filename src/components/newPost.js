import React, { Component } from 'react';
import { withRouter } from 'react-router-dom';
import { connect } from 'react-redux';
import { createPost } from '../actions';

class newPost extends Component {
  constructor(props) {
    super(props);

    this.state = {
      title: '',
      tags: '',
      coverUrl: '',
      content: '',
    };
  }

  changeTitle = (event) => {
    this.setState({ title: event.target.value });
  }

  changeTags = (event) => {
    this.setState({ tags: event.target.value });
  }

  changeCover = (event) => {
    this.setState({ coverUrl: event.target.value });
  }

  changeContent = (event) => {
    this.setState({ content: event.target.value });
  }

  addPost = () => {
    this.props.createPost(this.state, this.props.history);
  }

  render() {
    return (
      <div className="newPost">
        <textarea id="title" onChange={this.changeTitle} value={this.state.title} placeholder="Title.." />
        <textarea id="tags" onChange={this.changeTags} value={this.state.tags} placeholder="Tags.." />
        <textarea id="cover" onChange={this.changeCover} value={this.state.coverUrl} placeholder="Cover URL.." />
        <textarea id="content" onChange={this.changeContent} value={this.state.content} placeholder="Content.." />
        <button className="btn btn-primary" onClick={this.addPost} type="submit">CREATE</button>
      </div>
    );
  }
}

export default withRouter(connect(null, { createPost })(newPost));

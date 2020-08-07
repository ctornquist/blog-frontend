/* eslint-disable react/no-danger */
import React, { Component } from 'react';
import { connect } from 'react-redux';
import marked from 'marked';
import { fetchPost, deletePost, updatePost } from '../actions';

class Post extends Component {
  constructor(props) {
    super(props);

    this.state = {
      title: '',
      content: '',
      tags: '',
      coverUrl: '',
      isEditing: false,
    };
  }

  componentDidMount() {
    console.log('single post mounting');
    this.props.fetchPost(this.props.match.params.postID);
  }

  deletePost = () => {
    console.log('deletePost function in post');
    this.props.deletePost(this.props.match.params.postID, this.props.history);
  }

  startEdit = () => {
    console.log('starting edit');
    // console.log(this.state);
    this.setState({
      title: this.props.current.title,
      content: this.props.current.content,
      tags: this.props.current.tags,
      coverUrl: this.props.current.coverUrl,
      isEditing: true,
    });
  }

  changeTitle = (event) => { this.setState({ title: event.target.value }); }

  changeTags= (event) => { this.setState({ tags: event.target.value }); }

  changeCover= (event) => { this.setState({ coverUrl: event.target.value }); }

  changeContent= (event) => { this.setState({ content: event.target.value }); }

  savePost = () => {
    const post = {
      title: this.state.title,
      content: this.state.content,
      tags: this.state.tags,
      coverUrl: this.state.coverUrl,
      summary: this.state.summary,
    };
    this.props.updatePost(this.props.match.params.postID, post, this.props.history);
    this.setState({
      title: '',
      content: '',
      coverUrl: '',
      tags: '',
      isEditing: false,
    });
    this.props.fetchPost(this.props.match.params.postID);
  }

  render() {
    console.log('single post render');
    console.log(this.props.match.params.postID);

    if (!this.state.isEditing) {
      console.log('in render, current is: ');
      console.log(this.props.current);
      return (
        <div className="post" key={this.props.current.id}>
          <h1>{this.props.current.title}</h1>
          <p>tags: {this.props.current.tags}</p>
          <div className="content" dangerouslySetInnerHTML={{ __html: marked(this.props.current.content || '') }} />
          <div className="editors">
            <button className="btn btn-primary" onClick={this.deletePost} type="submit">DELETE</button>
            <button className="btn btn-primary" onClick={this.startEdit} type="submit">EDIT</button>
          </div>
        </div>
      );
    } else {
      return (
        <div className="editing" key={this.props.current.id}>
          <p id="change">title</p>
          <textarea id="title" onChange={this.changeTitle} value={this.state.title} />
          <p id="change">tags</p>
          <textarea id="tags" onChange={this.changeTags} value={this.state.tags} />
          <p id="change">cover url</p>
          <textarea id="cover" onChange={this.changeCover} value={this.state.coverUrl} />
          <p id="change">content</p>
          <textarea id="content" onChange={this.changeContent} value={this.state.content} />
          <div className="editors">
            <button className="btn btn-primary" onClick={this.savePost} type="submit">SAVE</button>
          </div>
        </div>
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

export default connect(mapStateToProps, { fetchPost, deletePost, updatePost })(Post);

import React, { Component } from 'react';
import { connect } from 'react-redux';
import { fetchComments, saveComment } from '../actions';

class CommentBox extends Component {
  state = {
    comment: ''
  };

  onChange = e => {
    this.setState({
      comment: e.target.value
    });
  };

  onFetch = () => {
    this.props.fetchComments();
  };

  onSubmit = e => {
    e.preventDefault();

    if (this.state.comment !== '') {
      this.props.saveComment(this.state.comment);

      this.setState({ comment: '' });
    }
  };

  render() {
    return (
      <div>
        <form onSubmit={this.onSubmit}>
          <h1>Add a Comment</h1>
          <textarea value={this.state.comment} onChange={this.onChange} />
          <div>
            <button>Submit Comment</button>
          </div>
        </form>
        <button className="fetch-comments" onClick={this.onFetch}>
          Fetch Comments
        </button>
      </div>
    );
  }
}

export default connect(
  null,
  { fetchComments, saveComment }
)(CommentBox);

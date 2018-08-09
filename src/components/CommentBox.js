import React, { Component } from 'react';

class CommentBox extends Component {
  state = {
    comment: ''
  };

  onChange = e => {
    this.setState({
      comment: e.target.value
    });
  };

  onSubmit = e => {
    e.preventDefault();

    // @todo call an action and save the comment
    this.setState({ comment: '' });
  };

  render() {
    return (
      <form onSubmit={this.onSubmit}>
        <h4>Add a Comment</h4>
        <textarea value={this.state.comment} onChange={this.onChange} />
        <div>
          <button>Submit</button>
        </div>
      </form>
    );
  }
}

export default CommentBox;

import React, { Component } from 'react';

class CommentBox extends Component {
  state = { comment: '' };

  handleChange = (e) => {
    // Async call
    this.setState({ comment: e.target.value });
  };

  handleSubmit = (e) => {
    e.preventDefault();

    // Call action

    // Save data

    // Clean form
    this.setState({ comment: '' });
  };

  render() {
    return (
      <form onSubmit={this.handleSubmit}>
        <h4>Add Comment</h4>
        <textarea onChange={this.handleChange} value={this.state.comment} />
        <div>
          <button>Send</button>
        </div>
      </form>
    );
  }
}

export default CommentBox;

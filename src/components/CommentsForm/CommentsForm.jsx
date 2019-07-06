import './CommentsForm.scss';

import React, { PureComponent } from 'react';

export class CommentsForm extends PureComponent {
  state = { message: { author: '', text: '' } }

  handleFieldChange = (event) => {
    const message = {
      ...this.state.message,
      [event.target.name]: event.target.value,
    };

    this.setState({message});
  }

  handleSubmit = (event) => {
    const { onSend } = this.props;

    if(typeof onSend === 'function') {
      onSend(this.state.message);
    }

    event.preventDefault();
  }

  render() {
    const { message: { author, text } } = this.state;

    return (
      <div>
        <form onSubmit={this.handleSubmit}>
          <input type="text" onChange={this.handleFieldChange} value={author} name="author" placeholder="Username" /><br />
          <input type="text" onChange={this.handleFieldChange} value={text} name="text" placeholder="Comment" /><br />
          <button type="submit">Send</button>
        </form>
      </div>
    );
  }
}
import './CommentsHoc.scss';

import React, { PureComponent } from 'react';

import { CommentsForm } from 'components/CommentsForm';
import { Comments } from 'components/Comments';

export class CommentsHoc extends PureComponent {
  state = { comments: [] }

  handleSend = (message) => {
    let comments = this.state.comments;

    comments = comments.concat([message]);

    this.setState({comments});
  }

  render() {
    const { comments } = this.state;
    
    return (
      <div>
        <Comments comments={comments} />
        <CommentsForm onSend={this.handleSend} />
      </div>
    );
  }
}
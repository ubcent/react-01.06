import './Comments.scss';

import React, { PureComponent, Component } from 'react';

export class Comments extends PureComponent {
  render() {
    const { comments } = this.props;
    
    return (
      <ul>
        {comments.map(comment => <li>{comment.author}: {comment.text}</li>)}
      </ul>
    );
  }
}
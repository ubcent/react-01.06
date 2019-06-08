import './ImageBox.scss';

import React, { Component } from 'react';

export class ImageBox extends Component {
  render() {
    const { image, likes, comments } = this.props;
    return (
      <div className="gallery-item" tabIndex="0">
        <img src={image} className="gallery-image" alt="" />
        <div className="gallery-item-info">
          <ul>
            <li className="gallery-item-likes"><span className="visually-hidden">Likes:</span><i className="fas fa-heart"
              aria-hidden="true"></i> {likes}</li>
            <li className="gallery-item-comments"><span className="visually-hidden">Comments:</span><i className="fas fa-comment"
              aria-hidden="true"></i> {comments}</li>
          </ul>
        </div>
      </div>
    );
  }
}
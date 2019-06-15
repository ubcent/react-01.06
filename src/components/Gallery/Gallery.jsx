import './Gallery.scss';

import React, { Component } from 'react';

import { ImageBox } from '../ImageBox';

export class Gallery extends Component {
  state = { pictures: [] }

  componentDidMount() {
    const { token } = this.props;
    fetch('http://localhost:8888/api/photos', {
      headers: {
        'Content-type': 'application/json',
        'authorization': `Bearer ${token}`,
      },
    })
      .then(response => response.json())
      .then(data => {
        this.setState({ pictures: data.photos.map(photo => ({ image: photo.image, likes: photo.likes.length, comments: photo.comments.length })) })
      });
  }

  render() {
    const { pictures } = this.state;

    return (
      <div className="container">
        {pictures.length === 0 && <span>Loading...</span>}
        {pictures.length > 0 && <div className="gallery">
          {pictures.map((picture, idx) => <ImageBox key={idx} {...picture} />)}
        </div>}
      </div>
    );
  }
}
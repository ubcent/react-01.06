import React, { Component, Fragment } from 'react';

import { Gallery } from 'components/Gallery';
import { Loading } from 'components/Loading';

export class GalleryContainer extends Component {
  state = { pictures: [], loading: false }

  componentDidMount() {
    const { token } = this.props;
    this.setState({ loading: true });

    fetch('http://localhost:8888/api/photos', {
      headers: {
        'Content-type': 'application/json',
        'authorization': `Bearer ${token}`,
      },
    })
      .then(response => response.json())
      .then(data => {
        this.setState({
          loading: false,
          pictures: data.photos.map(photo => ({ id: photo._id, image: photo.image, likes: photo.likes.length, comments: photo.comments.length }))
        })
      })
      .catch(() => {
        this.setState({ loading: false });
      });
  }

  renderItem = (picture) => {
    return (
      <div><img src={picture.image} /></div>
    )
  }

  render() {
    const { pictures, loading } = this.state;

    return (
      <Fragment>
        {pictures.length > 0 && <Gallery pictures={pictures} />}
        {loading && <Loading />}
      </Fragment>
    );
  }
}

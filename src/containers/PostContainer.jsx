import React, { Component, Fragment } from 'react';

import { Modal } from 'components/Modal';
import { Loading } from 'components/Loading';

export class PostContainer extends Component {
  state = { photo: {}, loading: false }

  componentDidMount() {
    this.setState({ loading: true });
    fetch(`http://localhost:8888/api/photos/${this.props.match.params.id}`, {
      headers: {
        'Content-type': 'application/json',
        'authorization': `Bearer ${localStorage.getItem('token')}`,
      },
    })
      .then(response => response.json())
      .then(photo => {
        this.setState({ loading: false, photo });
      });
  }

  handleClose = () => {
    const { history } = this.props;
    history.replace('/posts');
  }

  render() {
    const { photo, loading } = this.state;
    return (
      <Fragment>
        <Modal title={`Фото ID#${photo._id}`} onClose={this.handleClose}>
          {loading && <Loading />}
          {!loading && <img src={photo.image} />}
        </Modal>
      </Fragment>
    );
  }
}

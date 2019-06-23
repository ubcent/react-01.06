import './assets/global.scss';

import React, { Component } from 'react';
import ReactDom from 'react-dom';

import { GalleryContainer } from 'containers/GalleryContainer';
import { Auth } from 'components/Auth';
import { Modal } from 'components/Modal';
// Roscoe9@gmail.com
class App extends Component {
  state = { token: localStorage.getItem('token'), isModalVisible: false };

  handleToggleClick = () => {
    this.setState(prevState => ({ visible: !prevState.visible }));
  }

  handleSuccess = (token) => {
    this.setState({ token }, () => {
      localStorage.setItem('token', token);
    });
  }

  handleSignOut = (event) => {
    this.setState({ token: '' }, () => {
      localStorage.setItem('token', null);
    });
    event.preventDefault();
  }

  handleModalClose = () => {
    this.setState({
      isModalVisible: false,
    });
  }

  render() {
    const { token, isModalVisible } = this.state;

    return (
      <main>
        {token && <button onClick={this.handleSignOut}>Sign Out</button>}
        {!token && <Auth onSuccess={this.handleSuccess} />}
        {token && <GalleryContainer token={token} />}
        {isModalVisible && <Modal onClose={this.handleModalClose} title="Hi! I'm modal">
          <div>A circular color picker component also named color-wheel performed with react and pure svg. Mobile compatible.</div>
        </Modal>}
      </main>
    );
  } 
}

ReactDom.render(<App />, document.getElementById('root'));

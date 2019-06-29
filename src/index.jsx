import './assets/global.scss';

import React, { Component } from 'react';
import ReactDom from 'react-dom';
import { BrowserRouter, Switch, Route, Link } from 'react-router-dom';

import { GalleryContainer } from 'containers/GalleryContainer';
import { Auth } from 'components/Auth';
import { Modal } from 'components/Modal';
import { PostContainer } from 'containers/PostContainer';
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
        <Link to="/">Home</Link>
        <Link to="/auth">Auth</Link>
        <Switch>
          <Route path="/posts" component={GalleryContainer} />
          <Route path="/auth" render={() => (<Auth onSuccess={this.handleSuccess} />)} exact />
        </Switch>
        {isModalVisible && <Modal onClose={this.handleModalClose} title="Hi! I'm modal">
          <div>A circular color picker component also named color-wheel performed with react and pure svg. Mobile compatible.</div>
        </Modal>}
      </main>
    );
  } 
}

ReactDom.render(
  <BrowserRouter>
    <App />
  </BrowserRouter>,
  document.getElementById('root'),
);

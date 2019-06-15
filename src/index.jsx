import './assets/global.scss';

import React, { Component } from 'react';
import ReactDom from 'react-dom';

import { Gallery } from './components/Gallery';
import { Auth } from './components/Auth';
import { pictures } from './pictures';

class App extends Component {
  state = { token: null };

  handleToggleClick = () => {
    this.setState(prevState => ({ visible: !prevState.visible }));
  }

  handleSuccess = (token) => {
    this.setState({token});
  }

  render() {
    const { token } = this.state;

    return (
      <main>
        {!token && <Auth onSuccess={this.handleSuccess} />}
        {token && <Gallery token={token} />}
      </main>
    );
  } 
}

ReactDom.render(<App />, document.getElementById('root'));

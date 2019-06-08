import './assets/global.scss';

import React, { Component } from 'react';
import ReactDom from 'react-dom';

import { ImageBox } from './components/ImageBox';
import { pictures } from './pictures';

class App extends Component {
  render() {
    return (
      <main>
        <div className="container">
          <div className="gallery">
            {pictures.map((picture, idx) => <ImageBox key={idx} {...picture} />)}
          </div>
        </div>
      </main>
    );
  } 
}

ReactDom.render(<App />, document.getElementById('root'));

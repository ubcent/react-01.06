import './Modal.scss';

import React, { Fragment, Component } from 'react';
import ReactDom from 'react-dom';

const modalRoot = document.getElementById('modal');

export class Modal extends Component {
  constructor(props) {
    super(props);

    this.element = document.createElement('div');
  }

  componentDidMount() {
    modalRoot.appendChild(this.element);
  }

  componentWillUnmount() {
    modalRoot.removeChild(this.element);
  }

  onClose = (event) => {
    const { onClose } = this.props;

    if(event.target.classList.contains('overlay')) {
      onClose();
    }
  }

  renderView = () => {
    const { children, title } = this.props;
    return (
      <div className="overlay" onClick={this.onClose}>
        <div className="modal">
          <h3>{title}</h3>
          <div className="modal-body">
            {children}
          </div>
        </div>
      </div>
    );
  }

  render() {
    return ReactDom.createPortal(
      this.renderView(),
      this.element,
    );
  }
}
import React, { Component } from 'react';
import { createPortal } from 'react-dom';
import PropTypes from 'prop-types';
import { ModalOverlay, Overlay } from './Modal.styled';

const modalRoot = document.getElementById('modal-root');
export default class Modal extends Component {
  componentDidMount() {
    window.addEventListener('keydown', this.handleCloseByEsc);
  }

  componentWillUnmount() {
    window.removeEventListener('keydown', this.handleCloseByEsc);
  }

  handleCloseByEsc = e => {
    if (e.code === 'Escape') {
      this.props.onCloseModal();
    }
  };

  handleBackdropClick = e =>
    e.target === e.currentTarget && this.props.onCloseModal();

  render() {
    return createPortal(
      <Overlay onClick={this.handleBackdropClick}>
        <ModalOverlay>
          <img src={this.props.url} alt={this.props.alt} />
        </ModalOverlay>
      </Overlay>,
      modalRoot
    );
  }
}
Modal.propTypes = {
  onCloseModal: PropTypes.func.isRequired,
  url: PropTypes.string.isRequired,
  alt: PropTypes.string.isRequired,
};

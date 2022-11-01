import React, { Component } from 'react';
import { ModalOverlay, Overlay } from './Modal.styled';

export default class Modal extends Component {
  render() {
    return (
      <Overlay class="overlay">
        <ModalOverlay class="modal">
          <img src="" alt="" />
        </ModalOverlay>
      </Overlay>
    );
  }
}

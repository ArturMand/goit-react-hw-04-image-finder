import React, { Component } from 'react';
import Modal from './Modal/Modal';

export default class App extends Component {
  state = {
    showModal: false,
  };
  toggleModal = () => {
    this.setState(({ showModal }) => ({ showModal: !showModal }));
  };
  render() {
    const { showModal } = this.state;
    return <>{showModal && <Modal />}</>;
  }
}

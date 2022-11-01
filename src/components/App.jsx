import React, { Component } from 'react';
import Modal from './Modal/Modal';
import SearchBar from './SearchBar/SearchBar';

export default class App extends Component {
  state = {
    showModal: false,
  };
  toggleModal = () => {
    this.setState(({ showModal }) => ({ showModal: !showModal }));
  };
  render() {
    const { showModal } = this.state;
    return <>
    <SearchBar/>
    {showModal && <Modal />}
    </>;
  }
}

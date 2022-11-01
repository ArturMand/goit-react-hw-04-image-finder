import React, { Component } from 'react';
import ImageGallary from './ImageGallery/ImageGallary';
import Modal from './Modal/Modal';
import SearchBar from './SearchBar/SearchBar';

export default class App extends Component {
  state = {
    query: '',
  };

  setQuery = query => {
    this.setState({ query });
  };
  componentDidUpdate(_, prevState) {
    if (prevState === '') {
      console.log('empty');
      return;
    }
    if (prevState !== this.state.fetchQuery) {
    }
  }

  toggleModal = () => {
    this.setState(({ showModal }) => ({ showModal: !showModal }));
  };

  render() {
    const { showModal,query } = this.state;
    console.log(query);
    return (
      <>
        <SearchBar setQuery={this.setQuery} />
        <ImageGallary searchQuery={query} />
        {showModal && <Modal />}
      </>
    );
  }
}

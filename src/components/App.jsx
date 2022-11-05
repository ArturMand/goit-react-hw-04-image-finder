import React, { Component } from 'react';
import ImageGallary from './ImageGallery/ImageGallary';
import SearchBar from './SearchBar/SearchBar';

export default class App extends Component {
  state = {
    query: '',
    showModal: false,
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
    const { query } = this.state;

    return (
      <>
        <SearchBar setQuery={this.setQuery} />
        <ImageGallary searchQuery={query} />
      </>
    );
  }
}

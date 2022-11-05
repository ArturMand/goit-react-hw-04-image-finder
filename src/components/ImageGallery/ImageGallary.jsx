import React, { Component } from 'react';
import PropTypes from 'prop-types';
import ImageGalleryItem from 'components/ImageGalleryItem/ImageGalleryItem';
import searchImgApi from 'utils/searchImgApi';
import Button from 'components/Button/Button';
import { ImgGalleryList } from './ImageGAllery.styled';
import Modal from 'components/Modal/Modal';
import { Circles } from 'react-loader-spinner';

export default class ImageGallary extends Component {
  state = {
    images: [],
    isLoading: false,
    error: null,
    totalPages: 0,
    page: 1,
    showModal: false,
    url: '',
    alt: '',
  };
  componentDidUpdate(prevProps, prevState) {
    if (prevProps.searchQuery !== this.props.searchQuery) {
      this.setState({ images: [] });
      this.setState({ isLoading: true });
      searchImgApi(this.props.searchQuery)
        .then(r => {
          if (r.hits.length === 0) {
            throw new Error(
              `Oooops, shit happens :( We don\`t find photos on request: '${this.props.searchQuery}'`
            );
          }
          return r;
        })
        .then(this.addImg)
        .catch(err => this.setState({ error: err.message }))
        .finally(() => this.setState({ isLoading: false }));
      return;
    }
    if (prevState.page !== this.state.page) {
      this.setState({ isLoading: true });
      searchImgApi(this.props.searchQuery, this.state.page)
        .then(data => this.addImgOnLoadMore(prevState, data))
        .catch(err => this.setState({ error: err.message }))
        .finally(() => this.setState({ isLoading: false }));
    }
  }

  addImgOnLoadMore = (prevState, data) => {
    this.setState({
      images: [...prevState.images, ...data.hits],
    });
  };

  addImg = data => {
    this.setState({
      images: data.hits,
      totalPages: Math.ceil(data.totalHits / 12),
      error: null,
    });
  };

  updatePage = () => {
    this.setState(prev => ({ page: prev.page + 1 }));
  };
  toggleModal = () => {
    this.setState(prev => ({ showModal: !prev.showModal }));
  };

  takeData = (url, alt) => {
    this.setState({ url, alt });
  };
  render() {
    const { images, isLoading, totalPages, page, showModal, url, alt, error } =
      this.state;
    const { toggleModal, updatePage, takeData } = this;

    return (
      <>
        {error && <h2>{error}</h2>}

        <Circles
          height="80"
          width="80"
          color="#3f51b5"
          ariaLabel="circles-loading"
          wrapperStyle={{}}
          wrapperClass=""
          visible={isLoading}
        />
        <ImgGalleryList>
          <ImageGalleryItem
            images={images}
            onOpenModal={toggleModal}
            bringData={takeData}
          />
        </ImgGalleryList>

        {images.length > 0 && totalPages > page && (
          <Button updatePage={updatePage} />
        )}
        {showModal && <Modal onCloseModal={toggleModal} url={url} alt={alt} />}
      </>
    );
  }
}

ImageGallary.propTypes = {
  searchQuery: PropTypes.string.isRequired,
};

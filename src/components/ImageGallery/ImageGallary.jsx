import ImageGalleryItem from 'components/ImageGalleryItem/ImageGalleryItem';
import React, { Component } from 'react';
import searchImgApi from 'utils/searchImgApi';
import { ImgGalleryList } from './ImageGAllery.styled';

export default class ImageGallary extends Component {
  state = {
    images: [],
    isLoading: false,
    error: null,
    totalPages: 0,
    page: 1,
  };
  componentDidUpdate(prevProps, prevState) {
    if (prevProps.query !== this.props.query) {
      this.setState({ isLoading: true });
      searchImgApi(this.props.query)
        .then(data =>
          this.setState({
            images: data.articles,
            totalPages: Math.ceil(data.totalResults / 6),
          })
        )
        .catch(err => this.setState({ error: err.message }))
        .finally(() => this.setState({ isLoading: false }));
    }
  }

  updatePage = () => {
    this.setState(prev => ({ page: prev.page + 1 }));
  };

  render() {
    const {images} = this.state
    console.log(images);
    return (
      <ImgGalleryList>
        <ImageGalleryItem images={images} />
      </ImgGalleryList>
    );
  }
}

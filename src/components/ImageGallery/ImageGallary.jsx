import Button from 'components/Button/Button';
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
    if (prevProps.searchQuery !== this.props.searchQuery) {
      this.setState({ isLoading: true });
      searchImgApi(this.props.searchQuery,this.state.page)
        .then(data =>
          this.setState({
            images: data.hits,
            totalPages: Math.ceil(data.totalHits / 12),
          })
        )
        .catch(err => this.setState({ error: err.message }))
        .finally(() => this.setState({ isLoading: false }));
    }

    if(prevState.totalPages !== this.state.totalPages){
      this.setState({ isLoading: true });
      searchImgApi(this.props.searchQuery,this.state.page)
        .then(data =>
          this.setState(()=>({
            images: [...prevState.images, ...data.hits],
          }))
        )
        .catch(err => this.setState({ error: err.message }))
        .finally(() => this.setState({ isLoading: false }));
    }
  }

  updatePage = () => {
    this.setState(prev => ({ page: prev.page + 1 }));
  };

  render() {
    const { images, isLoading, totalPages, page } = this.state;
    console.log('totalpage:', totalPages);
    console.log('page', page);
    return (
      <>
        {isLoading && <h1>Loading...</h1>}

          <ImgGalleryList>
            <ImageGalleryItem images={images} />
          </ImgGalleryList>

        {images.length > 0 && totalPages > page && (
          <Button updatePage={this.updatePage} />
        )}
      </>
    );
  }
}

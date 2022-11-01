import ImageGalleryItem from 'components/ImageGalleryItem/ImageGalleryItex';
import React, { Component } from 'react';

export default class ImageGallary extends Component {
  render() {
    return (
      <ul class="gallery">
        <ImageGalleryItem />
      </ul>
    );
  }
}

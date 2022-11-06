import { ImgGalleryItem, ImgGalleryItemImage } from './ImageGalleryItem.styled';
import PropTypes from 'prop-types';
import { useState } from 'react';
import Modal from 'components/Modal/Modal';

export default function ImageGalleryItem({ src, alt, srcModal }) {
  const [showModal, setShowModal] = useState(false);
  const toggleModal = () => {
    setShowModal(prev => !prev);
  };
  return (
    <ImgGalleryItem onClick={toggleModal}>
      <ImgGalleryItemImage src={src} alt={alt} />
      {showModal && (
        <Modal onCloseModal={toggleModal} url={srcModal} alt={alt} />
      )}
    </ImgGalleryItem>
  );
}

ImageGalleryItem.propTypes = {
  src: PropTypes.string.isRequired,
  alt: PropTypes.string.isRequired,
  srcModal: PropTypes.string.isRequired,
};

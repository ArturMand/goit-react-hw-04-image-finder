import { ImgGalleryItemImage, ImgGalleryItem } from './ImageGalleryItem.styled';
import PropTypes from 'prop-types';

const ImageGalleryItem = ({ images, onOpenModal, bringData }) => (
  <>
    {images.map(({ id, webformatURL, largeImageURL, tags }) => (
      <ImgGalleryItem
        key={id}
        onClick={e => {
          bringData(largeImageURL, tags);
          onOpenModal(e);
        }}
      >
        <ImgGalleryItemImage src={webformatURL} alt={tags} />
      </ImgGalleryItem>
    ))}
  </>
);

export default ImageGalleryItem;

ImageGalleryItem.propTypes = {
  images: PropTypes.arrayOf(
    PropTypes.shape({
      id: PropTypes.number.isRequired,
      webformatURL: PropTypes.string.isRequired,
      largeImageURL: PropTypes.string.isRequired,
      tags: PropTypes.string.isRequired,
    }).isRequired
  ).isRequired,
  onOpenModal: PropTypes.func.isRequired,
  bringData: PropTypes.func.isRequired,
};

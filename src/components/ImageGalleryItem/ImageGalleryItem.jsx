import { ImgGalleryItemImage, ImgGalleryItem } from './ImageGalleryItem.styled';

const ImageGalleryItem = ({ images }) => (
  <>
    {images.map(({ id, webformatURL }) => (
      <ImgGalleryItem key={id}>
        <ImgGalleryItemImage src={webformatURL} alt="" />
      </ImgGalleryItem>
    ))}
  </>
);

export default ImageGalleryItem;

import css from './ImageGallery.module.css';
import { ImageGalleryItem } from 'components/ImageGalleryItem/ImageGalleryItem';

const ImageGallery = ({ images, onImageClick }) => (
  <ul className={css.ImageGallery}>
    {images.map(image => (
      <ImageGalleryItem
        key={image.id}
        imageUrl={image.webformatURL}
        alt={image.tags}
        onImageClick={() => onImageClick(image.largeImageURL)}
      />
    ))}
  </ul>
);
export { ImageGallery };

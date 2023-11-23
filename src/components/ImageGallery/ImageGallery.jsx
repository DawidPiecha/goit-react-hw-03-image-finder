import css from './ImageGallery.module.css';
import { ImageGalleryItem } from 'components/ImageGalleryItem/ImageGalleryItem';

const ImageGallery = ({ images }) => (
  <ul className={css.ImageGallery}>
    {images.map(image => (
      <ImageGalleryItem
        key={image.id}
        imageUrl={image.webformatURL}
        alt={image.tags}
      />
    ))}
  </ul>
);
export { ImageGallery };

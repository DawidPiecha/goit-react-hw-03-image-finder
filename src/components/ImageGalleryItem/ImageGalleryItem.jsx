import css from './ImageGalleryItem.module.css';

const ImageGalleryItem = ({ imageUrl, alt }) => (
  <li className={css.ImageGalleryItem}>
    <img
      className={css.ImageGalleryItemImage}
      src={imageUrl}
      alt={alt}
      loading="lazy"
    />
  </li>
);
export { ImageGalleryItem };

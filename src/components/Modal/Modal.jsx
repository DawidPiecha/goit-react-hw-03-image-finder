import css from './Modal.module.css';

const Modal = ({ imageUrl, onModalClose }) => {
  return (
    <div className={css.Overlay} onClick={onModalClose}>
      <div className={css.Modal}>
        <img src={imageUrl} alt="Large " />
      </div>
    </div>
  );
};

export { Modal };

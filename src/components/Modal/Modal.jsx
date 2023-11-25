import css from './Modal.module.css';

const Modal = ({ imageUrl, onModalClose }) => {
  //w ten sposób określam, że zamkniecie jest możliwe tylko po kliknięciu na tło, a niemożliwe po kliknięciu na duży obrazek
  const handleModalClose = event => {
    if (event.target === event.currentTarget) {
      onModalClose();
    }
  };
  return (
    <div className={css.Overlay} onClick={handleModalClose}>
      <div className={css.Modal}>
        <img src={imageUrl} alt="Large " />
      </div>
    </div>
  );
};

export { Modal };

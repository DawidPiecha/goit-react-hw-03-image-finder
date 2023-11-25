import css from './Button.module.css';

const Button = ({ onClick, disabled }) => (
  <button className={css.Button} onClick={onClick} disabled={disabled}>
    Load More
  </button>
);

export { Button };

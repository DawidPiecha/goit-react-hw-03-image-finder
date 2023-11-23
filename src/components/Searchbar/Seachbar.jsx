import PropTypes from 'prop-types';
import css from './Searchbar.module.css';

const Searchbar = ({ handleSearch, handleInputChange }) => {
  const handleSumbit = event => {
    event.preventDefault();
    handleSearch();
  };
  return (
    <header className={css.Searchbar}>
      <form className={css.SearchForm} onSubmit={handleSumbit}>
        <button type="submit" className={css.SearchFormButton}>
          <span className={css.SearchFormButtonLabel}>Search</span>
        </button>
        <input
          className={css.SearchFormInput}
          type="text"
          autoComplete="off"
          autoFocus
          placeholder="Search images and photos"
          id="searchInput"
          name="searchInput"
          onChange={handleInputChange}
        ></input>
      </form>
    </header>
  );
};

Searchbar.propTypes = {
  handleSearch: PropTypes.func.isRequired,
  handleInputChange: PropTypes.func.isRequired,
};

export { Searchbar };

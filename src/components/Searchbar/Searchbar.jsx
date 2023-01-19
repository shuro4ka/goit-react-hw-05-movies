import styles from './Searchbar.module.css';
import {useState} from 'react';
import PropTypes from 'prop-types';

export const Searchbar = ({ onSubmit }) => {
  const [inputValue, setInputValue] = useState('');

  return (
    <header className={styles.searchbar}>
      <form className={styles.searchForm} onSubmit={onSubmit}>
        <button type="submit" className={styles.searchFormButton}>
          <span className="button-label">Search</span>
        </button>

        <input
          className={styles.searchFormInput}
          type="text"
          autoComplete="off"
          autoFocus
          placeholder="Search images and photos"
          onChange={(e) => {setInputValue(e.target.value)}}
          value={inputValue}
        />
      </form>
    </header>
  );
}

Searchbar.propTypes = {
  onSubmit: PropTypes.func.isRequired,
};
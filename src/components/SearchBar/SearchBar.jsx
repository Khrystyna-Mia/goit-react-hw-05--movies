import { useState } from 'react';
import PropTypes from 'prop-types';
import { FaSearch } from 'react-icons/fa';
import s from './SearchBar.module.css';

const SearchBar = ({ onSubmit }) => {
  const [inputValue, setInputValue] = useState('');

  const handleChange = e => {
    setInputValue(e.currentTarget.value.trim().toLowerCase());
  };

  const handleSubmit = e => {
    e.preventDefault();

    onSubmit(inputValue);
    setInputValue('');
  };

  return (
    <div className={s.searchBar}>
      <form className={s.form} onSubmit={handleSubmit}>
        <input
          className={s.input}
          type="text"
          autoComplete="off"
          autoFocus
          placeholder="Search movies..."
          value={inputValue}
          onChange={handleChange}
        />

        <button type="submit" className={s.button}>
          <FaSearch size={30} fill="var(--accent-color)" />
        </button>
      </form>
    </div>
  );
};

SearchBar.propTypes = {
  onSubmit: PropTypes.func.isRequired,
};

export default SearchBar;

import { useState } from 'react';
import PropTypes from 'prop-types';
import {
  SearchBarHeader,
  SearchForm,
  SearchFormBtn,
  SearchFormInput,
  SearchFormLabel,
} from './SearchBar.styled';

export default function SearchBar({ setQuery }) {
  const [input, setInput] = useState('');

  const handleSubmit = e => {
    e.preventDefault();
    setQuery(input);
    setInput('');
  };

  return (
    <SearchBarHeader>
      <SearchForm onSubmit={handleSubmit}>
        <SearchFormBtn type="submit">
          <SearchFormLabel>Search</SearchFormLabel>
        </SearchFormBtn>

        <SearchFormInput
          type="text"
          autocomplete="off"
          autoFocus
          placeholder="Search images and photos"
          value={input}
          onChange={e => setInput(e.target.value)}
        />
      </SearchForm>
    </SearchBarHeader>
  );
}

SearchBar.propTypes = {
  setQuery: PropTypes.func.isRequired,
};

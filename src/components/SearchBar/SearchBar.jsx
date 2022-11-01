import React, { Component } from 'react';
import { SearchBarHeader, SearchForm, SearchFormBtn, SearchFormInput, SearchFormLabel } from './SearchBar.styled';

export default class SearchBar extends Component {
  render() {




    return (
      <SearchBarHeader class="searchbar">
        <SearchForm class="form">
          <SearchFormBtn type="submit" class="button">
            <SearchFormLabel class="button-label">Search</SearchFormLabel>
          </SearchFormBtn>

          <SearchFormInput
            class="input"
            type="text"
            autocomplete="off"
            autofocus
            placeholder="Search images and photos"
          />
        </SearchForm>
      </SearchBarHeader>
    );
  }
}

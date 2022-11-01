import React, { Component } from 'react';
import {
  SearchBarHeader,
  SearchForm,
  SearchFormBtn,
  SearchFormInput,
  SearchFormLabel,
} from './SearchBar.styled';

export default class SearchBar extends Component {
  state = {
    input: "",
  };

  handleSubmit = (e) => {
    e.preventDefault();
    this.props.setQuery(this.state.input);
  };

  resetForm=()=>{
    this.setState({fetchQuery:''})
  }

  render() {
    const{fetchQuery} = this.state
    return (
      <SearchBarHeader>
        <SearchForm onSubmit={this.handleSubmit}>
          <SearchFormBtn type="submit">
            <SearchFormLabel>Search</SearchFormLabel>
          </SearchFormBtn>

          <SearchFormInput
            name="fetchQuery"
            type="text"
            autocomplete="off"
            autoFocus
            placeholder="Search images and photos"
            value={fetchQuery}
            onChange={(e) => this.setState({ input: e.target.value })}
          />
        </SearchForm>
      </SearchBarHeader>
    );
  }
}

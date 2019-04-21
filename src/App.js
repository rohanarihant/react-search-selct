import React, { Component } from 'react';
import styles from './App.css';
import SearchBar from 'react-search-select'
import {allCities} from './cities.js';
class App extends Component {
  constructor(props){
    super(props);
    this.state = {
      suggestions: []
    }
    this.handleClear = this.handleClear.bind(this);
    this.handleChange = this.handleChange.bind(this);
    this.handleSelection = this.handleSelection.bind(this);
    this.handleSearch = this.handleSearch.bind(this);
    this.suggestionRenderer = this.suggestionRenderer.bind(this);
  }
  handleClear() {
    this.setState({
      suggestions: []
    });
  }

  handleChange(input) {
    this.setState({
      suggestions: allCities.filter(city => city.toLocaleLowerCase().startsWith(input.toLocaleLowerCase()))
    });
  }

  handleSelection(value) {
    if (value) {
      console.info(`Selected "${value}"`);
    }
  }

  handleSearch(value) {
    if (value) {
      console.info(`Searching "${value}"`);
    }
  }

  suggestionRenderer(suggestion, searchTerm) {
    return (
      <span>
        <strong>{suggestion}</strong>
      </span>
    );
  }
  render() {
    return (
      <SearchBar
        autoFocus
        // renderClearButton
        // renderSearchButton
        placeholder="search and select any city"
        onChange={this.handleChange}
        onClear={this.handleClear}
        onSelection={this.handleSelection}
        onSearch={this.handleSearch}
        suggestions={this.state.suggestions}
        suggestionRenderer={this.suggestionRenderer}
        styles={styles}
      />
    );
  }
}

export default App;

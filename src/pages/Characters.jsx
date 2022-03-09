import React from 'react';

import Loading from '../components/Loading';

class Characters extends React.Component {
  constructor() {
    super();

    this.state = {
      isLoading: true,
      characters: null,
      page: 0
    }
  }

  componentDidMount() {

  }

  async fetchCharacters() {
    const response = await fetch('https://rickandmortyapi.com/api/character');
    const { results: characters } = await response.json();
    this.setState({ isLoading: false, characters });
  }

  render() {
    return <h1>Characters</h1>
  }
}

export default Characters;

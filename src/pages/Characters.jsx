import React from 'react';
import { Link } from 'react-router-dom';

import Header from '../components/Header';
import Loading from '../components/Loading';

class Characters extends React.Component {
  constructor() {
    super();

    this.state = {
      isLoading: true,
      characters: null,
      page: 0
    }

    this.fetchCharacters();
  }

  componentDidMount() {
    this.fetchCharacters();
  }

  async fetchCharacters() {
    const response = await fetch('https://rickandmortyapi.com/api/character');
    const { results: characters } = await response.json();
    this.setState({ isLoading: false, characters });
  }

  render() {
    const { isLoading, characters } = this.state;

    return (
      <>
        <Header />
        {
          isLoading
            ? <Loading />
            : characters.map(({ id, name, image }) => (
              <div key={ id }>
                <h2>{ name }</h2>
                <img src={ image } alt={ name } />
                <br />
                <Link to={ `/characters/${id}` }>Detalhes</Link>
              </div>
            ))
        }
      </>
    )
  }
}

export default Characters;

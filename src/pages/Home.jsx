import React from 'react';
import { Link } from 'react-router-dom';

import Header from '../components/Header';

class Home extends React.Component {
  constructor() {
    super();

    this.state = {
      characters: null,
      isLoading: true,
    }

    this.fetchCharacters = this.fetchCharacters.bind(this);
  }

  componentDidMount() {
    this.fetchCharacters();
  }

  async fetchCharacters() {
    const response = await fetch('https://rickandmortyapi.com/api/character');
    const { results } = await response.json();
    this.setState({
      characters: results,
      isLoading: false,
    });
  }
  
  render() {
    const { characters, isLoading } = this.state;

    return (
      <>
        <Header />
        {
          isLoading
            ? <h2>Carregando...</h2>
            : characters.map(({ id, name, image }) => (
              <div key={ id }>
                <h2>{ name }</h2>
                <img src={ image } alt={ name } />
                <Link to={ `/character/${id}` }>Mais detalhes</Link>
              </div>
            ))
        }
      </>
    );
  }
}

export default Home;

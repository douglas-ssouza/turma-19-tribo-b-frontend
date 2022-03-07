import React from 'react';

import Header from '../components/Header';

class CharacterDetails extends React.Component {
  constructor() {
    super();

    this.state = {
      character: null,
      isLoading: true,
    }

    this.fetchCharacter = this.fetchCharacter.bind(this);
  }

  componentDidMount() {
    this.fetchCharacter();
  }

  async fetchCharacter() {
    const { match: { params } } = this.props;

    const response = await fetch(`https://rickandmortyapi.com/api/character/${params.id}`);
    const character = await response.json();

    this.setState({
      character,
      isLoading: false,
    });
  }

  render() {
    const { character: c, isLoading } = this.state;

    return (
      <>
        <Header />
        {
          isLoading
            ? <h2>Carregando...</h2>
            : (
              <div>
                <h2>{ c.name }</h2>
                <img src={ c.image } alt={ c.name } />
                <p>{ c.species }</p>
                <p>{ c.status }</p>
              </div>
            )
        }
      </>
    );
  }
}

export default CharacterDetails;

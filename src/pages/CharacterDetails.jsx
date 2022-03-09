import React from 'react';

import Header from '../components/Header';
import Loading from '../components/Loading';

class CharacterDetails extends React.Component {
  constructor() {
    super();

    this.state = {
      isLoading: true,
      character: null,
    };

    this.fetchCharacter = this.fetchCharacter.bind(this);
  }

  componentDidMount() {
    this.fetchCharacter();
  }

  async fetchCharacter() {
    const { match: { params } } = this.props;

    const response = await fetch(`https://rickandmortyapi.com/api/character/${params.id}`);
    const character = await response.json();

    this.setState({ isLoading: false, character });
  }
  
  render() {
    const { isLoading, character: c } = this.state;

    return (
      <>
        <Header />
        {
          isLoading
            ? <Loading />
            : (
              <div>
                <h2>{ c.name }</h2>
                <img src={ c.image }  alt={ c.name } />
                <p>{ `Status: ${c.status}` }</p>
                <p>{ `Species: ${c.species}` }</p>
                <p>{ `Gender: ${c.gender}` }</p>
              </div>
            )
        }
      </>
    );
  }
}

export default CharacterDetails;

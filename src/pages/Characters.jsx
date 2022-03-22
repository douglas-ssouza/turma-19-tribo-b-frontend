import React from 'react';
import { Link } from 'react-router-dom';

import Header from '../components/Header';
import Loading from '../components/Loading';

const FIRST_PAGE = 1;
const LAST_PAGE = 42;

class Characters extends React.Component {
  constructor() {
    super();

    this.state = {
      isLoading: true,
      characters: null,
      page: FIRST_PAGE,
    }

    this.fetchCharacters = this.fetchCharacters.bind(this);
    this.goToNextPage = this.goToNextPage.bind(this);
    this.goToPrevPage = this.goToPrevPage.bind(this);
  }

  componentDidMount() {
    this.fetchCharacters();
  }

  async fetchCharacters() {
    const response = await fetch('https://rickandmortyapi.com/api/character');
    const { results: characters } = await response.json();
    this.setState({ isLoading: false, characters });
  }

  goToNextPage() {
    const { page } = this.state;
    const newPage = page === LAST_PAGE ? FIRST_PAGE : page + 1;

    this.setState(
      { isLoading: true },
      async () => {
        const response = await fetch(`https://rickandmortyapi.com/api/character?page=${newPage}`);
        const { results: characters } = await response.json();
        this.setState({ isLoading: false, page: newPage, characters });
      }
    )
  }

  goToPrevPage() {
    const { page } = this.state;
    const newPage = page === FIRST_PAGE ? LAST_PAGE : page - 1;

    this.setState(
      { isLoading: true },
      async () => {
        const response = await fetch(`https://rickandmortyapi.com/api/character?page=${newPage}`);
        const { results: characters } = await response.json();
        this.setState({ isLoading: false, page: newPage, characters });
      }
    )
  }

  render() {
    const { isLoading, characters } = this.state;

    return (
      <>
        <Header />
        {
          isLoading
            ? <Loading />
            : (
              <div>
                {
                  characters.map(({ id, name, image }) => (
                    <div key={ id } data-testid="character-container">
                      <h2 data-testid="character-name">{ name }</h2>
                      <img src={ image } alt={ name } data-testid="character-image" />
                      <br />
                      <Link to={ `/characters/${id}` }>Detalhes</Link>
                    </div>
                  ))
                }
                <button type="button" onClick={ this.goToPrevPage }>Previous</button>
                <button type="button" onClick={ this.goToNextPage }>Next</button>
              </div>
            )
            
        }
      </>
    )
  }
}

export default Characters;

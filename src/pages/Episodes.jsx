import React from 'react';
import { Link } from 'react-router-dom';

import Header from '../components/Header';
import Loading from '../components/Loading';

const FIRST_PAGE = 1;
const LAST_PAGE = 3;

class Episodes extends React.Component {
  constructor() {
    super();

    this.state = {
      isLoading: true,
      episodes: null,
      page: FIRST_PAGE,
    };

    this.fetchEpisodes = this.fetchEpisodes.bind(this);
    this.goToNextPage = this.goToNextPage.bind(this);
    this.goToPrevPage = this.goToPrevPage.bind(this);
  }

  componentDidMount() {
    this.fetchEpisodes();
  }

  async fetchEpisodes() {
    const response = await fetch('https://rickandmortyapi.com/api/episode');
    const { results: episodes } = await response.json();

    this.setState({ isLoading: false, episodes });
  }

  goToNextPage() {
    const { page } = this.state;
    const newPage = page === LAST_PAGE ? FIRST_PAGE : page + 1;

    this.setState(
      { isLoading: true },
      async () => {
        const response = await fetch(`https://rickandmortyapi.com/api/episode?page=${newPage}`);
        const { results: episodes } = await response.json();
        this.setState({ isLoading: false, page: newPage, episodes });
      }
    )
  }

  goToPrevPage() {
    const { page } = this.state;
    const newPage = page === FIRST_PAGE ? LAST_PAGE : page - 1;

    this.setState(
      { isLoading: true },
      async () => {
        const response = await fetch(`https://rickandmortyapi.com/api/episode?page=${newPage}`);
        const { results: episodes } = await response.json();
        this.setState({ isLoading: false, page: newPage, episodes });
      }
    )
  }

  render() {
    const { isLoading, episodes } = this.state;

    return (
      <>
        <Header />
        {
          isLoading
            ? <Loading />
            : (
              <div>
                {
                  episodes.map(({ id, episode, name }) => (
                    <Link key={ id } to={ `/episodes/${id}` }>
                      <p>{ `${episode} - ${name}` }</p>
                    </Link>
                  ))
                }
                <button type="button" onClick={ this.goToPrevPage }>Previous</button>
                <button type="button" onClick={ this.goToNextPage }>Next</button>
              </div>
            )
        }
      </>
    );
  }
}

export default Episodes;

import React from 'react';
import { Link } from 'react-router-dom';

import Header from '../components/Header';
import Loading from '../components/Loading';

class Episodes extends React.Component {
  constructor() {
    super();

    this.state = {
      isLoading: true,
      episodes: null,
    };

    this.fetchEpisodes = this.fetchEpisodes.bind(this);
  }

  componentDidMount() {
    this.fetchEpisodes();
  }

  async fetchEpisodes() {
    const response = await fetch('https://rickandmortyapi.com/api/episode');
    const { results: episodes } = await response.json();

    this.setState({ isLoading: false, episodes });
  }

  render() {
    const { isLoading, episodes } = this.state;

    return (
      <>
        <Header />
        {
          isLoading
            ? <Loading />
            : episodes.map(({ id, episode, name }) => (
              <Link key={ id } to={ `/episodes/${id}` }>
                <p>{ `${episode} - ${name}` }</p>
              </Link>
            ))
        }
      </>
    );
  }
}

export default Episodes;

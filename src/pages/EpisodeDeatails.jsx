import React from 'react';
import { Link } from 'react-router-dom';

import Header from '../components/Header';
import Loading from '../components/Loading';

class EpisodeDetails extends React.Component {
  constructor() {
    super();

    this.state = {
      isLoading: true,
      episode: null,
      characters: null,
    }

    this.fetchEpisode = this.fetchEpisode.bind(this);
    this.getCharacters = this.getCharacters.bind(this);
  }

  componentDidMount() {
    this.fetchEpisode();
  }

  async fetchEpisode() {
    const { match: { params } } = this.props;

    const response = await fetch(`https://rickandmortyapi.com/api/episode/${params.id}`);
    const episode = await response.json();

    this.setState(
      { episode },
      async () => {
        await this.getCharacters();
        this.setState({ isLoading: false });
      }
    );
  }

  async getCharacters() {
    const { episode } = this.state;
    const characters = await Promise.all(episode.characters.map(async (c) => {
      const response = await fetch(c);
      const { id, name } = await response.json();
      return { id, name };
    }));
    this.setState({ characters });
  }
  
  render() {
    const { isLoading, episode: e, characters } = this.state;

    return (
      <>
        <Header />
        {
          isLoading
            ? <Loading />
            : (
              <div>
                <h2>{ e.name }</h2>
                <h3>{ e.episode }</h3>
                <p>{ `Aired on: ${ e.air_date }` }</p>
                <h3>Featured characters:</h3>
                <ul>
                  {
                    characters.map(({ id, name }) => (
                      <Link key={ id } to={ `/characters/${id}` }>
                        <li>
                          { name }
                        </li>
                      </Link>
                    ))
                  }
                </ul>
              </div>
            )
        }
      </>
    );
  }
}

export default EpisodeDetails;

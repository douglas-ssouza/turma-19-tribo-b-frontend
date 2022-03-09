import React from 'react';

import Header from '../components/Header';
import Loading from '../components/Loading';

class EpisodeDetails extends React.Component {
  constructor() {
    super();

    this.state = {
      isLoading: true,
      episode: null,
    }

    this.fetchEpisode = this.fetchEpisode.bind(this);
  }

  componentDidMount() {
    this.fetchEpisode();
  }

  async fetchEpisode() {
    const { match: { params } } = this.props;

    const response = await fetch(`https://rickandmortyapi.com/api/episode/${params.id}`);
    const episode = await response.json();

    this.setState({ isLoading: false, episode });
  }
  
  render() {
    const { isLoading, episode: e } = this.state;

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
              </div>
            )
        }
      </>
    );
  }
}

export default EpisodeDetails;

import React from 'react';

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

  }

  async fetchCharacters() {

  }
  
  render() {
    const { characters, isLoading } = this.state;

    return (
      <>
        <Header />
      </>
    );
  }
}

export default Home;

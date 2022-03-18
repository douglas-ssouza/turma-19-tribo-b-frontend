import React from 'react';

// API Documentation: http://deckofcardsapi.com/

class Card extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      card: null,
      isLoading: true,
    }

    this.fetchCard = this.fetchCard.bind(this);
  }

  componentDidMount() {
    this.fetchCard();
  };

  async fetchCard() {
    const response = await fetch('http://deckofcardsapi.com/api/deck/new/draw/?count=1');
    const { cards } = await response.json();
    const card = cards[0];
    this.setState({ card, isLoading: false });
  }

  render() {
    const { card, isLoading } = this.state;

    return (
      isLoading
        ? <div>Loading...</div>
        : <div>
          <h2>{ `${card.value} OF ${card.suit}` }</h2>
          <img src={ card.image } alt={ `${card.value} OF ${card.suit}` } />
          <button type="button" onClick={ this.fetchCard }>Next Card</button>
        </div>
    );
  }
}

export default Card;

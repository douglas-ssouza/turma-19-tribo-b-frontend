import React from 'react';

class Meme extends React.Component {
  render () {
    const { name, url } = this.props;

    return (
      <section>
        <h2>{ name }</h2>
        <img src={ url } alt={ name } width="400px"/>
      </section>
    )
  }
};

export default Meme;

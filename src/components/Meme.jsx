import React from 'react';
import PropTypes from 'prop-types';

class Meme extends React.Component {
  render () {
    const { meme: { name, url, width } } = this.props;

    return (
      <section>
        <h2>{ name }</h2>
        <img src={ url } alt={ name } width={ `${width}px` } />
      </section>
    )
  }
};

Meme.propTypes = {
  meme: PropTypes.shape({
    name: PropTypes.string,
    url: PropTypes.string,
    width: PropTypes.number,
  }).isRequired,
};

export default Meme;

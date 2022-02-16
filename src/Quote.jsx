import React from 'react';

class Quote extends React.Component {
  render () {
    const { quote, author } = this.props;

    return (
      <section>
        <q>{ quote }</q>
        <p>{ author }</p>
      </section>
    )
  }
};

export default Quote;

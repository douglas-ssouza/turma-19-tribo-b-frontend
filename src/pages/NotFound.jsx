import React from 'react';

import Header from '../components/Header';

class NotFound extends React.Component {
  render() {
    return (
      <>
        <Header />
        <main>
          <h2>Não encontramos essa página</h2>
        </main>
      </>
    );
  }
}

export default NotFound;

import React from 'react';

import blocos from '../data/blocos';

const createContentSection = ({ title, content }) => {
  return (
    <section>
      <h2>{ title }</h2>
      <ul>
        { content.map((c, index) => (
          <li key={ index }>{ c }</li>
        )) }
      </ul>
    </section>
  );
};

class Main extends React.Component {
  render() {
    return (
      <main>
        { blocos.map((f) => createContentSection(f)) }
      </main>
    );
  }
};

export default Main;

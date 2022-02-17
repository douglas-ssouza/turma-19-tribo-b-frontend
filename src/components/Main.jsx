import React from 'react';

import blocos from '../data/blocos';

const displayContent = ({ title, content }) => {
  return (
    <div key={ title }>
      <h3>{ title }</h3>
      <ul>
        {
          content.map((c) => <li key={ c }>{ c }</li>)
        }
      </ul>
    </div>
  )
}

class Main extends React.Component {
  render() {
    return (
      <main>
        {
          blocos.map(displayContent)
        }
      </main>
    );
  }
}

export default Main;

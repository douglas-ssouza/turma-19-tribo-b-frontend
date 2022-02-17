import React from 'react';

class Bloco extends React.Component {
  render() {
    const { title, content } = this.props;

    return (
      <div>
        <h3>{ title }</h3>
        <ul>
          {
            content.map((c, index) => <li key={ c }>{ c }</li>)
          }
        </ul>
      </div>
    );
  }
}

export default Bloco;

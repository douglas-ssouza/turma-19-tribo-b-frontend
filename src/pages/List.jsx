import React from 'react';
import { connect } from 'react-redux';

import Person from '../components/Person';

class List extends React.Component {
  render() {
    const { people } = this.props;

    return (
      <>
        {
          people.map(({ name, email, cpf }) => (
            <Person name={ name } email={ email } cpf={ cpf } />
          ))
        }
      </>
    );
  }
}

const mapStateToProps = (state) => ({
  people: state.form.cadastros,
});

export default connect(mapStateToProps)(List);

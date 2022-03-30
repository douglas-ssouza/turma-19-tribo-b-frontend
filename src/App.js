import React from 'react';
import { connect } from 'react-redux';

import { fetchUser } from './redux/actions';

class App extends React.Component {
  render() {
    const { isLoading, user, fetchUser } = this.props;

    return (
      <>
        {
          isLoading
          ? <p>Carregando...</p>
          : (
            <div>
              <h1>{ `${user.name.first} ${user.name.last}` }</h1>
              <p>{ user.email }</p>
              <img src={ user.picture.medium } alt="não achei a foto" />
              <br />
            </div>
          )
        }
        <button onClick={ fetchUser }>Buscar</button>
      </>
    );
  }
}

const mapStateToProps = (state) => ({
  isLoading: state.user.isLoading,
  user: state.user.user,
});

const mapDispatchToProps = (dispatch) => ({
  fetchUser: () => dispatch(fetchUser()),
});

export default connect(mapStateToProps, mapDispatchToProps)(App);

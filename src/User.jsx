import React from 'react';

class User extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      user: null,
      isLoading: true,
    }

    this.fetchUser = this.fetchUser.bind(this);
  }

  componentDidMount() {
    this.fetchUser();
  };

  shouldComponentUpdate(nextProps, nextState) {
    const { user: { registered: { age } } } = nextState;
    return age > 10;
  };

  componentDidUpdate(prevProps, prevState) {
  };

  componentWillUnmount() {
  }

  async fetchUser() {
    const response = await fetch('https://api.randomuser.me/');
    const { results } = await response.json();
    const [user] = results
    this.setState({ user, isLoading: false });
  }

  render() {
    const { user, isLoading } = this.state;

    return (
      isLoading
        ? <div>Loading...</div>
        : <div>
          <h2>{ `${user.name.first} ${user.name.last}, ${ user.registered.age }` }</h2>
          <p>{ user.email }</p>
          <button type="button" onClick={ this.fetchUser }>Next User</button>
        </div>
    );
  }
}

export default User;

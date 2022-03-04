import React from 'react';

class User extends React.Component {
  // 1
  constructor() {
    super();

    this.state = {
      user: null,
      isLoading: true,
    };

    this.fetchUser = this.fetchUser.bind(this);
  }

  // 3
  componentDidMount() {
    this.fetchUser();
  }

  // 4
  shouldComponentUpdate(_nextProps, nextState) {
    const { user: { registered: { age } } } = nextState;
    console.log(`Proximo: ${age}`);
    return age >= 10;
  }

  // 5
  componentDidUpdate(_prevProps, prevState) {
    console.log(`Anterior: ${prevState.user}`);
  }

  // 6
  componentWillUnmount() {}

  async fetchUser() {
    const url = 'https://api.randomuser.me/';
    const response = await fetch(url);
    const { results } = await response.json();
    const [user] = results; // results[0]
    this.setState({ user, isLoading: false });
  }

  // 2
  render() {
    const { user, isLoading } = this.state;

    return (
      <div>
        {
          isLoading
            ? <div>Loading...</div>
            : (
              <div>
                <h2>{ `${user.name.first} ${user.name.last}, ${user.registered.age}` }</h2>
                <p>{ user.email }</p>
              </div>
            )
        }
        <button type="button" onClick={ this.fetchUser }>Next User</button>
      </div>
    )
  }
}

export default User;

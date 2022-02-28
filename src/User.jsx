import React from 'react';

class User extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      user: undefined,
      isLoading: true,
    }

    this.getNewUser = this.getNewUser.bind(this);

    console.log('constructor');
  }

  componentDidMount() {
    console.log('didMount');
    this.getNewUser();
  };

  shouldComponentUpdate(nextProps, nextState) {
    console.log('shouldUpdate');
    const { user: { registered: { age } } } = nextState;
    return age > 10;
  };

  componentDidUpdate(prevProps, prevState) {
    console.log('didUpdate');
  };

  componentWillUnmount() {
    console.log('willUnmount');
  }

  async fetchUser() {
    const response = await fetch('https://api.randomuser.me/');
    const { results } = await response.json();
    const [user] = results
    return user;
  }

  async getNewUser() {
    const newUser = await this.fetchUser();

    setTimeout(() => {
      this.setState({ user: newUser, isLoading: false });
    }, 1000);
  }

  render() {
    console.log('render');

    const { user, isLoading } = this.state;

    console.log(this.state);

    return (
      isLoading
        ? <div>Loading...</div>
        : <div>
          <h2>{ `${user.name.first} ${user.name.last}, ${ user.registered.age }` }</h2>
          <p>{ user.email }</p>
          <button type="button" onClick={ this.getNewUser }>Next User</button>
        </div>
    );
  }
}

export default User;

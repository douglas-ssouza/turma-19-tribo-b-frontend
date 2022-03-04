import React from 'react';

class User extends React.Component {
  // 1
  constructor() {
    super();

    this.state = {
      user: null,
    };

    this.fetchUser = this.fetchUser.bind(this);
  }

  // 3
  componentDidMount() {
    this.fetchUser();
  }

  // 4
  shouldComponentUpdate(nextProps, nextState) { return true; }

  // 5
  componentDidUpdate(prevProps, prevState) {}

  // 6
  componentWillUnmount() {}

  async fetchUser() {
    const url = 'https://api.randomuser.me/';
    const response = await fetch(url);
    const { results } = await response.json();
    const [user] = results; // results[0]
    this.setState({ user });
  }

  // 2
  render() {
    const { user } = this.state;

    return (user
      ? <div><h2>{ user.name.first }</h2></div>
      : <div>User not found 404</div>
    )
  }
}

export default User;

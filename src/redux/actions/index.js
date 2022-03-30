// async fetchUser() {
//   const response = await fetch('https://api.randomuser.me/');
//   const { results } = await response.json();
//   return results[0];
// }

// handleClick() {
//   this.setState(
//     { isLoading: true },
//     async () => {
//       const user = await this.fetchUser();
//       this.setState({ isLoading: false, user });
//     },
//   );
// }

export const SET_LOADING = 'SET_LOADING';
export const SET_USER = 'SET_USER';

export const setLoading = () => ({ type: SET_LOADING });
export const setUser = (payload) => ({ type: SET_USER, payload });

export const fetchUser = () => {
  return async (dispatch) => {
    dispatch(setLoading());
    try {
      const response = await fetch('https://api.randomuser.me/');
      const { results } = await response.json();
      dispatch(setUser(results[0]));
    } catch (err) {
      console.log(err.message)
    }
  }
}

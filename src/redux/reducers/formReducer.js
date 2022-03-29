import { SUBMIT } from "../actions";

const INITIAL_STATE = {
  cadastro: { name: '', email: '', cpf: '' },
};

function formReducer(state = INITIAL_STATE, action) {
  switch (action.type) {
  case SUBMIT:
    return {
      ...state,
      cadastro: action.payload,
    }
  default:
    return state;
  }
}

export default formReducer;

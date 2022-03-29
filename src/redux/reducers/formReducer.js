import { SUBMIT } from "../actions";

const INITIAL_STATE = {
  // cadastro: { name: '', email: '', cpf: '' },
  cadastros: [],
};

function formReducer(state = INITIAL_STATE, action) {
  switch (action.type) {
  case SUBMIT:
    return {
      ...state,
      // cadastro: action.payload,
      cadastros: [...state.cadastros, action.payload],
    }
  default:
    return state;
  }
}

export default formReducer;

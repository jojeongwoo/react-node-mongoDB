import { REGISTER_USER, LOGIN_USER,  AUTH_USER, CHANGE_PASSWORD } from "../actions/types";

export default function (state = {}, action) {
  switch (action.type) {
    case LOGIN_USER:
      return { ...state, loginSuccess: action.payload };
      break;

    case REGISTER_USER:
      return {...state, register: action.payload };
      break;

    case AUTH_USER:
      return { ...state, userData: action.payload }
      break;
    
    case CHANGE_PASSWORD:
      return {...state, changeSuccess: action.payload }
      break;

    default:
      return state;
  }
}
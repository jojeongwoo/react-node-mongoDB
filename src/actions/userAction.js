import axios from 'axios';
import { 
  REGISTER_USER,
  LOGIN_USER,
  AUTH_USER,
  CHANGE_PASSWORD,
} from "./types";

export function loginUser(dataToSubmit) {
  
  const request = axios.post('/api/users/login', dataToSubmit) 
  .then(response => response.data)
  
  return {
    type: LOGIN_USER,
    payload: request
  };
}

export function registerUser(dataToSubmit) {

  const request = axios.post('api/users/register', dataToSubmit)
  .then(response => response.data);
  
  return {
    type: REGISTER_USER,
    payload: request,
  };
}

export function changeToPassword(dataToSubmit) {

  const request = axios.post('/api/users/changePassword', dataToSubmit)
  .then(response => response.data);
  
  return {
    type: CHANGE_PASSWORD,
    payload: request,
  };
}

export function auth() {

  const request = axios.get('/api/users/auth')
      .then(response => response.data)

  return {
      type: AUTH_USER,
      payload: request
  };
}



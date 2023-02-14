import axios from 'axios';
import { LOGIN_USER } from './types';

export function loginUser(dataToSubmit) {
  const request = axios.post('/api/users/login', dataToSubmit).then((response) => response.data);

  //return을 해서 reducer에 보내고, 전의 state와 현재 state를 다음 state로 만들어 주기 때문에 넘겨 주어야 한다.
  return {
    type: LOGIN_USER,
    payload: request,
  };
}

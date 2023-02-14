//로그인, 레지스터에 대한 기능을 reducer로 만들어주는 곳
import { LOGIN_USER, REGISTER_USER } from '../_actions/types';

export default function (state = {}, action) {
  switch (action.type) {
    case LOGIN_USER:
      return { ...state, loginSuccess: action.payload };

    case REGISTER_USER:
      return { ...state, register: action.payload };

    case AUTH_USER:
      return { ...state, userData: action.payload };

    default:
      return { ...state };
  }
}

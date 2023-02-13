//로그인, 레지스터에 대한 기능을 reducer로 만들어주는 곳
import { LOGIN_USER } from '../_actions/types';
const initialState = null;
export default function (state = initialState, action) {
  switch (action.type) {
    case LOGIN_USER: {
      return { ...state, loginSuccess: action.payload };
      break;
    }
    default: {
      return state;
    }
  }
}

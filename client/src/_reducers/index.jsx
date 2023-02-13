import { combineReducers } from 'redux';
// import user from './user_reducer';

//store에서 여러개의 reducer를 사용 할 수 있는데, state가 변하면서(state는 여러개의 묶음으로 있을 수 있음) 변한 값을 return 해 주는 것이 reducer인데, 그 여러개의 state 묶음, 즉 reducer를 rootReducer로 합쳐주는 것이 conbineReducers의 하는 역할이다.
const rootReducer = combineReducers({
  // user,
});

export default rootReducer;

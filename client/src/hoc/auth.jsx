import { useEffect } from 'react';
import { useDispatch } from 'react-redux';
import { auth } from '../_actions/user_action';

export default function (SpecificComponent, option, adminRoute = null) {
  //option
  // null = 아무나 출입, true = 로그인 한 유저만 출입 가능 false = 로그인한 유저는 출입 불가능

  //adminRoute
  //true = admin만 출입 null= 아무나 출입가능
  function AuthenticationCheck(props) {
    const dispatch = useDispatch();

    useEffect(() => {
      dispatch(auth()).then((res) => {
        console.log(res);
      });
    }, []);
    return <SpecificComponent />;
  }

  return AuthenticationCheck;
}

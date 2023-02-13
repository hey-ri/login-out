import React, { useState } from 'react';
import { useDispatch } from 'react-redux';
import { loginUser } from '../../../_actions/user_action';

function Login() {
  const dispatch = useDispatch();

  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  const onEmailHandler = (e) => {
    setEmail(e.target.value);
    console.log(e.target.value);
  };

  const onPasswordHandler = (e) => {
    setPassword(e.target.value);
    console.log(e.target.value);
  };

  const onSubmitHandler = (e) => {
    e.preventDefault();

    let body = {
      email: email,
      password: password,
    };

    dispatch(loginUser(body)).then((res) => {
      if (res.payload.loginSuccess) {
        props.history.push('/');
      }
    });
  };

  return (
    <div>
      <form onSubmit={onSubmitHandler} style={{ display: 'flex', flexDirection: 'column' }}>
        <label htmlFor="email">Email</label>
        <input type="email" name="email" id="" value={email} onChange={onEmailHandler} />
        <label htmlFor="pass">Password</label>
        <input type="password" name="" id="pass" value={password} onChange={onPasswordHandler} />

        <button>login</button>
      </form>
    </div>
  );
}

export default Login;

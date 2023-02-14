import React, { useState } from 'react';
import { useDispatch } from 'react-redux';
import { loginUser } from '../../../_actions/user_action';
import { useNavigate } from 'react-router-dom';

function Login() {
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  const onEmailHandler = (e) => {
    setEmail(e.currentTarget.value);
  };

  const onPasswordHandler = (e) => {
    setPassword(e.currentTarget.value);
  };

  const onSubmitHandler = (e) => {
    e.preventDefault();

    let body = {
      email: email,
      password: password,
    };

    dispatch(loginUser(body)).then((res) => {
      if (res.payload.loginSuccess) {
        navigate('/');
      } else {
        alert('Error');
        console.log(res);
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

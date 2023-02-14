import React, { useState } from 'react';
import { useDispatch } from 'react-redux';
import { useNavigate } from 'react-router-dom';
import { registerUser } from '../../../_actions/user_action';

function RegisterPage() {
  const dispatch = useDispatch();
  const navigate = useNavigate();

  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [name, setName] = useState('');
  const [confirmPassword, setConfirmPassword] = useState('');

  const onEmailHandler = (e) => {
    setEmail(e.currentTarget.value);
  };

  const onNameHandler = (e) => {
    setName(e.currentTarget.value);
  };

  const onPasswordHandler = (e) => {
    setPassword(e.currentTarget.value);
  };

  const onConfirmPasswordHandler = (e) => {
    setConfirmPassword(e.currentTarget.value);
  };

  const onSubmitHandler = (e) => {
    e.preventDefault();

    if (password !== confirmPassword) return alert('비밀번호가 동일하지 않습니다. 다시 입력해주세요');

    let body = {
      email: email,
      name: name,
      password: password,
    };

    dispatch(registerUser(body)).then((res) => {
      if (res.payload.success) {
        navigate('/login');
      } else {
        alert('failed to sign up');
        console.log(res);
      }
    });
  };

  return (
    <div>
      <form
        onSubmit={onSubmitHandler}
        style={{
          display: 'flex',
          flexDirection: 'column',
        }}
      >
        <label htmlFor="email">Email</label>
        <input type="email" name="email" value={email} onChange={onEmailHandler} />

        <label htmlFor="name">Name</label>
        <input type="text" name="name" value={name} onChange={onNameHandler} />

        <label htmlFor="pass">Password</label>
        <input type="password" name="pass" value={password} onChange={onPasswordHandler} />

        <label htmlFor="confirmpass">Confirm Password</label>
        <input type="password" name="confirmpass" value={confirmPassword} onChange={onConfirmPasswordHandler} />

        <button>sign in</button>
      </form>
    </div>
  );
}

export default RegisterPage;

import React, { useEffect } from 'react';
import axios from 'axios';
import { useNavigate } from 'react-router-dom';

function LandingPage() {
  const navigate = useNavigate();
  useEffect(() => {
    axios.get('/api/hello').then((response) => {
      console.log(response);
    });
  }, []);

  const logOutHandler = () => {
    axios.get('/api/users/logout').then((res) => {
      console.log(res.data);
      if (res.data.success) {
        navigate('/login');
      } else {
        alert('로그아웃하는데 실패했습니다.');
      }
    });
  };

  return (
    <div style={{ display: 'flex', justifyContent: 'center', alignItems: 'center', width: '100%', height: '100vh' }}>
      <h2>시작페이지</h2>
      <button onClick={logOutHandler}>log out</button>
    </div>
  );
}

export default LandingPage;

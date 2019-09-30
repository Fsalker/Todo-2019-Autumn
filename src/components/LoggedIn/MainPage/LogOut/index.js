import React from 'react';
import { useGlobal } from 'reactn';

const Element = () => {
  const [, setAuth] = useGlobal('auth');
  const [, setDecodedJwt] = useGlobal('decodedJwt');

  const logout = () => {
    setAuth('');
    setDecodedJwt('');
    localStorage.removeItem('auth');
    localStorage.removeItem('decodedJwt');
  };

  return (
    <div>
      <h1>Log out</h1>
      <button onClick={logout}>Log out</button>
    </div>
  );
};

export default Element;

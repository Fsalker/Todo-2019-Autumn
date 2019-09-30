import React, { useState } from 'react';
import { useGlobal } from 'reactn';

const Element = () => {
  const [auth, setAuth] = useGlobal('auth');
  const [, setDecodedJwt] = useGlobal('decodedJwt');
  const [error, setError] = useState('');

  const deleteAccount = async () => {
    const req = await fetch('/users', {
      method: 'DELETE',
      headers: { 'content-type': 'application/json', auth },
    });

    if (req.status !== 200) {
      setError(await req.text());
    } else {
      setAuth('');
      setDecodedJwt('');
      localStorage.removeItem('auth');
      localStorage.removeItem('decodedJwt');
    }
  };

  return (
    <div>
      <h1>Delete Account</h1>
      <p style={{ color: 'red' }}>{ error }</p>
      <button onClick={deleteAccount}>Delete Account</button>
    </div>
  );
};

export default Element;

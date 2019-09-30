import React, { useState } from 'react';
import { useGlobal } from 'reactn';
import jwt from 'jsonwebtoken';

const Element = () => {
  const [, setAuth] = useGlobal('auth');
  const [, setDecodedJwt] = useGlobal('decodedJwt');
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');
  const [error, setError] = useState('');

  const register = async () => {
    const req = await fetch('/auth/register', {
      method: 'POST',
      headers: { 'content-type': 'application/json' },
      body: JSON.stringify({
        username,
        password,
      }),
    });

    if (req.status !== 200) {
      setError(await req.text());
    } else {
      const token = await req.json();

      const newAuth = `Bearer ${token}`;
      const newDecodedJwt = jwt.decode(token);

      setAuth(newAuth);
      setDecodedJwt(jwt.decode(token));
      localStorage.setItem('auth', newAuth);
      localStorage.setItem('decodedJwt', newDecodedJwt);
    }
  };

  return (
    <div>
      <h1>Register</h1>
      <p style={{ color: 'red' }}>{ error }</p>
      <div>Username</div>
      <input placeholder="Username..." value={username} onChange={(e) => setUsername(e.target.value)} />
      <br />
      <div>Password</div>
      <input type="password" placeholder="Password..." value={password} onChange={(e) => setPassword(e.target.value)} />
      <br />
      <br />
      <button onClick={register}>Register</button>
    </div>
  );
};

export default Element;

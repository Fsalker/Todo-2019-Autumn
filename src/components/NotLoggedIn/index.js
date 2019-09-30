import React from 'react';
import Login from './Login';
import Register from './Register';

const Element = () => {
  return (
    <div>
      <h1 style={{ textAlign: 'center' }}>Please log in or register a new account</h1>
      <Register />
      <Login />
    </div>
  );
};

export default Element;

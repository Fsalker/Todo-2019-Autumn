import React from 'react';
import ReactDOM from 'react-dom';
import { setGlobal } from 'reactn';
import App from './components/App';

setGlobal({ // These are the only global variables that we use. Very nice and transparent.
  auth: localStorage.getItem('auth') || '', // Updated in Register and Login
  decodedJwt: localStorage.getItem('decodedJwt') || '', // Updated in Register and Login
});

ReactDOM.render(<App />, document.getElementById('root'));

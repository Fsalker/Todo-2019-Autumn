import React from 'react';
import { useGlobal } from 'reactn';
import LoggedIn from './LoggedIn';
import NotLoggedIn from './NotLoggedIn';

const Element = () => {
  const [auth] = useGlobal('auth');

  const RenderedElement = auth ? LoggedIn : NotLoggedIn;

  return (
    <div>
      <RenderedElement />
    </div>
  );
};

export default Element;

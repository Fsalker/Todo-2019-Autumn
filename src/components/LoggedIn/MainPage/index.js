import React from 'react';
import ColorOfTheDay from './ColorOfTheDay';
import CreateProject from './CreateProject';
import MyProjects from './MyProjects';
import DeleteAccount from './DeleteAccount';
import LogOut from './LogOut';

const Element = () => {
  return (
    <div>
      <ColorOfTheDay />
      <MyProjects />
      <CreateProject />
      <DeleteAccount />
      <LogOut />
    </div>
  );
};

export default Element;

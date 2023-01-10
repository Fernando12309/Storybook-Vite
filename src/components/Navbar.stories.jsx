import {Navbar} from './Navbar';

export default{
    title: 'Deezy/Page',
    component: Navbar,
    parameters:{
        layout: 'fullscreen',
    },
};

export const LoggedIn = {
    args: {
      user: {
        name: 'LordDeezy',
      },
    },
  };
  
  export const LoggedOut = {};
  
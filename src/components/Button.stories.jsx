import {Button} from './Button';

export default{
    title: 'Deezy/Button',
    component: Button,
    argTypes: {
        backgroundColor: { control: 'color' },
        color: {control: 'color'},
    },
};

export const Primary = {
    args: {
      primary: true,
      label: 'Watch Now',
    },
  };
   
  export const Secondary = {
    args: {
      secondary: true,
      label: 'Join Discord',
    },
  };

  export const Third = {
    args: {
      third: true,
      label: 'Gradient style',
    },
  };
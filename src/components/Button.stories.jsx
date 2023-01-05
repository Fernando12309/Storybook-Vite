import {Button} from './Button';

export default{
    title: 'Deezy/Button',
    component: Button,
    argTypes: {
        backgroundColor: { control: 'color' },
    },
};

export const Primary = {
    args: {
      primary: true,
      label: 'Button',
    },
  };
  
  export const Secondary = {
    args: {
      label: 'Secondary',
    },
  };
import React from 'react';
import EditButton from './EditButton';

export default {
  title: 'Buttons/EditButton',
  component: EditButton,
};

const Template = args => <EditButton {...args} />;

export const Primary = Template.bind({});
Primary.args = {
  color: 'primary',
  size: 'large',
};

export const Secondary = Template.bind({});
Secondary.args = {
  color: 'secondary',
  size: 'large',
};

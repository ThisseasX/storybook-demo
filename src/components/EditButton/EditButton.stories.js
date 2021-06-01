import React from 'react';
import EditButton from './EditButton';

export default {
  title: 'Demo/EditButton',
  component: EditButton,
};

const Template = (args) => <EditButton {...args} />;

export const PrimarySmall = Template.bind({});
PrimarySmall.args = {
  color: 'primary',
  size: 'small',
};

export const PrimaryLarge = Template.bind({});
PrimaryLarge.args = {
  color: 'primary',
  size: 'large',
};

export const PrimaryDisabled = Template.bind({});
PrimaryDisabled.args = {
  color: 'primary',
  disabled: true,
};

export const SecondarySmall = Template.bind({});
SecondarySmall.args = {
  color: 'secondary',
  size: 'small',
};

export const SecondaryLarge = Template.bind({});
SecondaryLarge.args = {
  color: 'secondary',
  size: 'large',
};

export const SecondaryDisabled = Template.bind({});
SecondaryDisabled.args = {
  color: 'secondary',
  disabled: true,
};

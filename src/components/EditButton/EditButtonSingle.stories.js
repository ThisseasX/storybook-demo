import React from 'react';
import EditButtonComponent from './EditButton';

export default {
  title: 'Buttons/Edit Button',
  component: EditButtonComponent,
};

export const EditButton = args => <EditButtonComponent {...args} />;
EditButton.args = {
  size: 'large',
};

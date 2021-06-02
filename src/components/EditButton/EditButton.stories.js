import React from 'react';
import {
  createMainStory,
  generateSubstories,
  Description
} from '../../utils/library-template-utils';
import EditButton from './EditButton';

export default createMainStory({
  title: 'Demo/EditButton',
  description: <Description
      name="EditButton"
      description="Simple EditButton demo for all your needs."
      body="This button is used when you want to edit stuff."
      version="0.0.1"
      installCommand="edit-button"
  />,
  component: EditButton,
  argTypes: {
    color: {
      options: ['primary', 'secondary'],
      control: { type: 'radio' },
      description: 'Button background color',
      default: 'primary',
    },
    size: {
      options: ['small', 'large'],
      control: { type: 'radio' },
      description: 'The size can be ',
      default: 'large',
    },
    disabled: {
      description: 'When set to true the button cannot be clicked',
      control: {
        type: 'boolean',
      },
      default: 'false',
    },
    onClick: {
      description: 'Handler for click events',
      action: 'clicked',
      default: '() => {}'
    }
  },
});

const Template = (args) => <EditButton {...args} />;

export const {
  PrimarySmall,
  PrimaryLarge,
  PrimaryDisabled,
  SecondarySmall,
  SecondaryLarge,
  SecondaryDisabled,
} = generateSubstories(
    Template,
    {
      name: 'PrimarySmall',
      description: 'For use in app bars and submenus.',
      props: {
        color: 'primary',
        size: 'small',
      },
    },
    {
      name: 'PrimaryLarge',
      description: 'For use in most places',
      props: {
        color: 'primary',
        size: 'large',
      },
    },
    {
      name: 'PrimaryDisabled',
      description: '`Disabled` buttons **cannot** be clicked!',
      props: {
        color: 'primary',
        disabled: true,
      },
    },
    {
      name: 'SecondarySmall',
      description: '`Secondary` color to be used on `Primary` colored backgrounds',
      props: {
        color: 'secondary',
        size: 'small',
      },
    },
    {
      name: 'SecondaryLarge',
      description: 'You can put a very **long** text here: <br><br> Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry\'s standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum.',
      props: {
        color: 'secondary',
        size: 'large',
      },
    },
    {
      name: 'SecondaryDisabled',
      props: {
        color: 'secondary',
        disabled: true,
      },
    },
);

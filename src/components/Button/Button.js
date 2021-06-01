import React from 'react';
import './style.css';

type Props = {
  /**
   * Is this the principal call to action on the page?
   */
  primary: boolean,
  /**
   * What background color to use
   */
  backgroundColor: string,
  /**
   * How large should the button be?
   */
  size: 'small' | 'medium' | 'large',
  /**
   * Button contents
   */
  label: string, //isRequired,
  /**
   * Optional click handler
   */
  onClick: Function,
};

/**
 * Primary UI component for user interaction
 */
export const Button = ({
  primary = false,
  backgroundColor,
  size = 'medium',
  label,
  onClick = undefined,
  ...props
}: Props) => {
  const mode = primary ? 'storybook-button--primary' : 'storybook-button--secondary';
  return (
    <button
      type="button"
      className={['storybook-button', `storybook-button--${size}`, mode].join(' ')}
      style={backgroundColor ? { backgroundColor } : {}}
      onClick={onClick}
      {...props}
    >
      {label}
    </button>
  );
};

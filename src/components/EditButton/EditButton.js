import React from 'react';
import cn from 'clsx';
import { ReactComponent as Edit } from 'static/icons/edit_24px.svg';
import useStyles from './style';

const noop = () => {};

type Props = {
  /**
   * The color of the button.
   */
  color: 'primary' | 'secondary',
  /**
   * The size of the button.
   */
  size: 'small' | 'large',
  /**
   * Whether the button should be disabled or not.
   */
  disabled: boolean,
  /**
   * Handler for click events.
   */
  onClick: () => void,
};

/**
 * Simple `EditButton` demo for **all** your needs.
 *
 * This button is used when you want to edit stuff.
 */
const EditButton = ({
  color = 'primary',
  size = 'small',
  disabled = false,
  onClick = noop,
}: Props) => {
  const classes = useStyles();

  return (
    <button
      onClick={onClick}
      className={cn(
        classes.button,
        classes[`color_${color}`],
        classes[`size_${size}`],
        {
          [classes.disabled]: disabled,
        },
      )}
    >
      <Edit />
    </button>
  );
};

export default EditButton;

import React from 'react';
import cn from 'clsx';
import { ReactComponent as Edit } from 'static/icons/edit_24px.svg';
import useStyles from './style';

const noop = () => {};

type Props = {
  color: 'primary' | 'secondary',
  size: 'small' | 'large',
  disabled: boolean,
  onClick: () => void,
};

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

import { makeStyles } from '@material-ui/styles';

const styles = {
  button: {
    background: 'none',
    border: 'none',
    borderRadius: '6px',
    cursor: 'pointer',
    transition: 'box-shadow 150ms, background-color 150ms',
  },

  size_small: {
    padding: '4px',
  },

  size_large: {
    padding: '12px',
  },

  color_primary: {
    '&:hover': {
      backgroundColor: '#DCEDF9',
    },
    '&:active': {
      backgroundColor: '#9CCFF2',
    },
    '& svg': {
      fill: '#1A81C6',
    },
  },

  color_secondary: {
    '&$size_small': {
      borderRadius: '16px',
      '&:hover': {
        boxShadow: '0px 2px 4px rgba(0, 0, 0, 0.24)',
      },
      '&:active': {
        boxShadow: '0px 0px 4px rgba(0, 0, 0, 0.2)',
        backgroundColor: '#F5F5F5',
      },
    },

    '&$size_large': {
      '&:hover': {
        backgroundColor: '#F5F5F5',
      },
      '&:active': {
        backgroundColor: '#EEEEEE',
      },
    },
    '& svg': {
      fill: '#616161',
    },
  },

  disabled: {
    pointerEvents: 'none',
    opacity: '0.4',
  },
};

export default makeStyles(styles);

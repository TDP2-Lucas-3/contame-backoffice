import withStyles from '@material-ui/core/styles/withStyles';
import TextField from '@material-ui/core/TextField';

export const CssTextField = withStyles({
  root: {
    '& label.Mui-focused': {
      color: '#1F271B',
      fontSize: '14pt',
    },
    '& .MuiInput-underline:after': {
      borderBottomColor: 'green',
    },
    '& .MuiOutlinedInput-root': {
      '&.Mui-focused fieldset': {
        borderColor: '#1F271B',
      },
    },
  },
})(TextField);

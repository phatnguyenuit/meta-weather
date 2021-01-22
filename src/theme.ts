import { createMuiTheme } from '@material-ui/core';
import blue from '@material-ui/core/colors/blue';
import lightBlue from '@material-ui/core/colors/lightBlue';

const theme = createMuiTheme({
  palette: {
    primary: {
      main: blue[500],
    },
    secondary: {
      main: lightBlue['A400'],
    },
  },
  typography: {
    caption: {
      fontSize: '0.8125rem',
    },
  },
});

export default theme;

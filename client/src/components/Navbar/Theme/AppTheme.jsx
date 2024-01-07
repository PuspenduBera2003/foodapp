import { createTheme } from '@mui/material/styles';

const Theme = createTheme({
  palette: {
    primary: {
      light: '#9f6ccc',
      main: '#6d4a8c',
      dark: '#510099',
      contrastText: '#fff',
    },
    secondary: {
      text: '#d6bbed',
      light: '#ff7961',
      main: '#f44336',
      dark: '#ba000d',
      contrastText: '#000',
    },
  },
  typography: {
    fontFamily: [
      'Chilanka',
      'cursive',
    ].join(','),
  },
});


export default Theme;
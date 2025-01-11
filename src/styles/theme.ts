// src/styles/theme.ts
import { createTheme } from '@mui/material/styles';

const theme = createTheme({
  typography: {
    fontFamily: "'Roboto', 'Arial', sans-serif",
  },
  palette: {
    primary: {
      main: '#5A2750',
    },
    secondary: {
      main: '#F5E9E8',
    },
  },
});

export default theme;

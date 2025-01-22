<<<<<<< HEAD
import { createTheme } from "@mui/material/styles";

const theme = createTheme({
    palette: {
        primary: {
            main: "#4A2040", // Dark purple
        },
        text: {
            primary: "#000000", // Black
        },
    },
    typography: {
      fontFamily: "'Playfair Display', serif", // Updated fontFamily
    },
=======
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
>>>>>>> e96a7700e0a8060bf00f796ca2b1d0dd0e547844
});

export default theme;

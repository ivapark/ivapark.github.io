

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
      fontFamily: "'Playfair Display', serif, 'Poppins', sans-serif, 'Open Sans', sans-serif,'Roboto', sans-serif", // Combine both fonts
    },

});

export default theme;


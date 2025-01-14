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
      fontFamily: "'PT Sans Narrow', Arial, sans-serif",
    },
});

export default theme;

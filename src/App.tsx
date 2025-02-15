import React from "react";
import { Routes, Route, Navigate } from "react-router-dom";
import { CssBaseline, ThemeProvider, Box } from "@mui/material";
import theme from "./styles/theme";
import LandingPage from "./components/LandingPage";
import Portfolio from "./components/Portfolio";
import Header from "./components/Header";
import MissPoppins from "./components/MissPoppins";
import AboutMe from "./components/AboutMe";
import MBTIRamen from "./components/MBTIRamen";

const App: React.FC = () => {
    return (
        <ThemeProvider theme={theme}>
            <CssBaseline />
            <Box
                sx={{
                    minHeight: "100vh",
                    width: "100%",
                    backgroundImage: `url("/stone-texture.png")`,
                    backgroundRepeat: "repeat",
                    backgroundSize: "cover",
                    backgroundAttachment: "fixed",
                }}
            >
                <Header />
                <Routes>
                    <Route path="/" element={<LandingPage />} />
                    <Route path="/portfolio" element={<Portfolio />} />
                    <Route path="/misspoppins" element={<MissPoppins />} />
                    <Route path="/aboutme" element={<AboutMe />} />
                    <Route path="/mbtiramen" element={<MBTIRamen />} />
                    {/* Redirect /about to /aboutme */}
                    <Route path="/about" element={<Navigate to="/aboutme" replace />} />
                    {/* Catch-all route for undefined paths */}
                    <Route path="*" element={<h1>404 - Page Not Found</h1>} />
                </Routes>
            </Box>
        </ThemeProvider>
    );
}
export default App;

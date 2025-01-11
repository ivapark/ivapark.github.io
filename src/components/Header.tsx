import React from "react";
import { AppBar, Toolbar, Typography, Box } from "@mui/material";

const Header: React.FC = () => {
    return (
        <AppBar
            position="static"
            sx={{
                backgroundColor: "#FFEEEE",
                boxShadow: "none",
                padding: "1rem 2rem",
            }}
        >
            <Toolbar
                sx={{
                    display: "flex",
                    justifyContent: "space-between",
                    alignItems: "center",
                }}
            >
                {/* Logo or Name */}
                <Typography
                    variant="h6"
                    sx={{ color: "#4A2040", fontWeight: "bold" }}
                >
                    Iva Park
                </Typography>

                {/* Navigation Links */}
                <Box sx={{ display: "flex", gap: "1.5rem" }}>
                    <Typography
                        variant="body1"
                        component="a"
                        href="#home"
                        sx={{
                            textDecoration: "none",
                            color: "#000",
                            fontWeight: "bold",
                            "&:hover": { color: "#4A2040" },
                        }}
                    >
                        Home
                    </Typography>
                    <Typography
                        variant="body1"
                        component="a"
                        href="#about"
                        sx={{
                            textDecoration: "none",
                            color: "#000",
                            fontWeight: "bold",
                            "&:hover": { color: "#4A2040" },
                        }}
                    >
                        About Me
                    </Typography>
                    <Typography
                        variant="body1"
                        component="a"
                        href="#portfolio"
                        sx={{
                            textDecoration: "none",
                            color: "#000",
                            fontWeight: "bold",
                            "&:hover": { color: "#4A2040" },
                        }}
                    >
                        Portfolio
                    </Typography>
                </Box>
            </Toolbar>
        </AppBar>
    );
};

export default Header;


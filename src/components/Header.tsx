import React from "react";
import { AppBar, Toolbar, Typography, Box } from "@mui/material";
import { Link } from "react-router-dom";

const Header: React.FC = () => {
    return (
        <AppBar
            position="static"
            sx={{
                backgroundColor: "#FFFFFF", // Light pink background
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
                    <Link
                        to="/"
                        style={{
                            textDecoration: "none",
                            color: "#000",
                            fontWeight: "normal",
                        }}
                    >
                        Home
                    </Link>
                    <Link
                        to="/about"
                        style={{
                            textDecoration: "none",
                            color: "#000",
                            fontWeight: "normal",
                        }}
                    >
                        About Me
                    </Link>
                    
                    <Link
                        to="/portfolio"
                        style={{
                            textDecoration: "none",
                            color: "#000",
                            fontWeight: "normal",
                        }}
                        onMouseEnter={(e) => {
                            (e.target as HTMLElement).style.color = "#4A2040";
                        }}
                        onMouseLeave={(e) => {
                            (e.target as HTMLElement).style.color = "#000";
                        }}
                    >
                        Portfolio
                    </Link>
                </Box>
            </Toolbar>
        </AppBar>
    );
};

export default Header;

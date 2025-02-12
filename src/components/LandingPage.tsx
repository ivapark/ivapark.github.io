
import React from "react";
import { Box, Typography } from "@mui/material";

const LandingPage: React.FC = () => {
    return (
        <Box
            sx={{
                height: "100vh",
                width: "100%",
                display: "flex",
                alignItems: "center",
                justifyContent: "center", // Center align the content
                gap: "8rem", // Space between IVA PARK and introduction
                padding: "0 2rem",
                marginTop: "3rem",
                fontFamily: "'Playfair Display', serif", // Updated fontFamily
            }}
        >
            {/* IVA and PARK Section */}
            <Box
                sx={{
                    display: "flex",
                    flexDirection: "row", // Horizontal layout for IVA and PARK
                    gap: "4rem", // Space between IVA and PARK
                }}
            >
                {/* IVA Column */}
                <Box
                    sx={{
                        display: "flex",
                        flexDirection: "column",
                        alignItems: "center", // Center align IVA letters
                        gap: "0.5rem", // Space between letters
                    }}
                >
                    <Typography
                        variant="h1"
                        sx={{
                            color: "#000000", // Dark purple
                            fontWeight: "normal", // Remove bold
                            fontSize: "10rem", // Adjust font size
                        }}
                    >
                        I
                    </Typography>
                    <Typography
                        variant="h1"
                        sx={{
                            color: "#000000",
                            fontWeight: "normal", // Remove bold
                            fontSize: "10rem",
                        }}
                    >
                        V
                    </Typography>
                    <Typography
                        variant="h1"
                        sx={{
                            color: "#000000",
                            fontWeight: "normal", // Remove bold
                            fontSize: "10rem",
                        }}
                    >
                        A
                    </Typography>
                </Box>

                {/* PARK Column */}
                <Box
                    sx={{
                        display: "flex",
                        flexDirection: "column",
                        alignItems: "center", // Center align PARK letters
                        gap: "0.5rem", // Space between letters
                        marginTop: "4rem", // Align PARK starting at V of IVA
                    }}
                >
                    <Typography
                        variant="h1"
                        sx={{
                            color: "#000000", // Dark purple
                            fontWeight: "normal", // Remove bold
                            fontSize: "10rem",
                        }}
                    >
                        P
                    </Typography>
                    <Typography
                        variant="h1"
                        sx={{
                            color: "#000000",
                            fontWeight: "normal", // Remove bold
                            fontSize: "10rem",
                        }}
                    >
                        A
                    </Typography>
                    <Typography
                        variant="h1"
                        sx={{
                            color: "#000000",
                            fontWeight: "normal", // Remove bold
                            fontSize: "10rem",
                        }}
                    >
                        R
                    </Typography>
                    <Typography
                        variant="h1"
                        sx={{
                            color: "#000000",
                            fontWeight: "normal", // Remove bold
                            fontSize: "10rem",
                        }}
                    >
                        K
                    </Typography>
                </Box>
            </Box>

            {/* Introduction Section */}
            <Box
                sx={{
                    maxWidth: "40%",
                    textAlign: "left",
                }}
            >
                <Typography
                    variant="h5"
                    sx={{
                        color: "#000", // Black color
                        fontWeight: "bold", // Remove bold
                        marginBottom: "1rem",
                    }}
                >
                    Hi, I'm Iva
                </Typography>
                <Typography
                    sx={{
                        color: "#000",
                        fontSize: "1.2rem",
                        lineHeight: 1.6,
                        fontWeight: "normal", // Remove bold
                    }}
                >
                    I am a UI/UX designer passionate about turning complex ideas
                    into intuitive, engaging experiences. I combine design and
                    technology to create solutions that meaningfully connect
                    with users.
                </Typography>
            </Box>
        </Box>
    );
};

export default LandingPage;

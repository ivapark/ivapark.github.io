import React from "react";
import { Box, Typography, CardMedia } from "@mui/material";
import Image1 from "../assets/image1.png"; // Ensure this path matches your folder structure

const MissPoppins: React.FC = () => {
    return (
        <Box
            sx={{
                backgroundColor: "#FFFFFF", // White background
                minHeight: "100vh",
                padding: "4rem 2rem",
                display: "flex",
                flexDirection: "column",
                alignItems: "center",
                gap: "2rem",
                fontFamily: "'Kufam', sans-serif", // Apply Kufam font globally
            }}
        >
            {/* Main Section */}
            <Box
                sx={{
                    display: "flex",
                    flexDirection: "row",
                    justifyContent: "space-between",
                    alignItems: "flex-start",
                    gap: "2rem",
                    maxWidth: "1200px",
                    width: "100%",
                }}
            >
                <Box
                    sx={{
                        flex: 1,
                        display: "flex",
                        flexDirection: "column",
                        gap: "1rem",
                    }}
                >
                    <Typography
                        variant="h4"
                        sx={{
                            color: "#4F0D81", // Dark purple
                            fontWeight: "bold",
                            textAlign: "left",
                        }}
                    >
                        MissPoppins App Redesign:
                    </Typography>

                    <Typography
                        variant="subtitle1"
                        sx={{
                            color: "#6C3483", // Light purple
                            textAlign: "left",
                        }}
                    >
                        Simplifying Navigation and Boosting User Engagement
                    </Typography>

                    <Box
                        sx={{
                            backgroundColor: "#FDF3FD", // Light lavender background
                            padding: "5rem",
                            borderRadius: "12px",
                            marginTop: "2rem",
                        }}
                    >
                        <Typography
                            variant="body1"
                            sx={{
                                color: "#000000", // Black text
                                marginBottom: "0.5rem",
                                fontSize: "1rem",
                            }}
                        >
                            <strong>Overview:</strong> Streamlined navigation and
                            introduced strategic pricing to enhance the coach-client
                            experience.
                        </Typography>
                        <Typography
                            variant="body1"
                            sx={{
                                color: "#000000",
                                marginBottom: "0.5rem",
                                fontSize: "1rem",
                            }}
                        >
                            <strong>Role:</strong> UX Researcher, UX/UI Designer
                        </Typography>
                        <Typography
                            variant="body1"
                            sx={{
                                color: "#000000",
                                fontSize: "1rem",
                            }}
                        >
                            <strong>Toolkit:</strong> Figma, FigJam, Pencil and
                            paper
                        </Typography>
                    </Box>
                </Box>

                {/* Image Section */}
                <CardMedia
                    component="img"
                    image={Image1}
                    alt="MissPoppins App Mockup"
                    sx={{
                        maxWidth: "300px",
                        borderRadius: "25px", // Rounded corners
                    }}
                />
            </Box>

            {/* UX Research Section */}
            <Box
                sx={{
                    width: "100%",
                    maxWidth: "900px",
                    marginTop: "3rem",
                }}
            >
                <Typography
                    variant="h5"
                    sx={{
                        color: "#4F0D81", // Dark purple
                        fontWeight: "bold",
                        textAlign: "left",
                        marginBottom: "1rem",
                    }}
                >
                    UX Research
                </Typography>

                {/* Background Section */}
                <Box
                    sx={{
                        backgroundColor: "#FDF3FD", // Light lavender background
                        padding: "5rem",
                        borderRadius: "12px",
                        boxShadow: "0px 8px 16px rgba(0, 0, 0, 0.1)",
                    }}
                >
                    <Typography
                        variant="body1"
                        sx={{
                            color: "#000000",
                            fontSize: "1rem",
                            lineHeight: 1.8,
                        }}
                    >
                        <strong>MissPoppins</strong> is an app that connects parents with
                        expert coaches through:
                        <ul style={{ marginTop: "0.5rem" }}>
                            <li>One-time free consultation</li>
                            <li>Ongoing support via video calls and chat</li>
                            <li>Access to articles, webinars, and expert advice</li>
                        </ul>
                        It’s a <strong>one-stop platform</strong> for parenting needs like
                        sleep, nutrition, development, and wellness.
                    </Typography>
                </Box>
            </Box>
        </Box>
    );
};

export default MissPoppins;

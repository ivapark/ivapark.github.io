import React from "react";
import { Box, Typography, Card, CardContent, CardMedia } from "@mui/material";
import { Link } from "react-router-dom";
import Image1 from "../assets/image1.png"; // Adjust the path if necessary

const Portfolio: React.FC = () => {
    return (
        <Box
            sx={{
                minHeight: "100vh",
                padding: "4rem 2rem",
                display: "flex",
                flexDirection: "column",
                alignItems: "center",
                gap: "2rem",
                fontFamily: "'Playfair Display', serif", // Updated fontFamily
            }}
        >
            {/* Section Title */}
            <Typography
                variant="h4"
                sx={{
                    color: "#4A2040", // Dark purple
                    fontWeight: "normal", // Remove bold
                    marginBottom: "2rem",
                }}
            >
                My Work
            </Typography>

            {/* Work Card */}
            <Card
                sx={{
                    display: "flex",
                    flexDirection: { xs: "column", md: "row" },
                    alignItems: "center",
                    justifyContent: "space-between",
                    backgroundColor: "#FFFFFF", // White card background
                    padding: "3rem",
                    borderRadius: "25px",
                    boxShadow: "0px 8px 16px rgba(0, 0, 0, 0.1)",
                    maxWidth: "1200px",
                    width: "100%",
                }}
            >
                {/* Text Section */}
                <CardContent
                    sx={{
                        flex: 1,
                        display: "flex",
                        flexDirection: "column",
                        gap: "1rem",
                        position: "relative",
                    }}
                >
                    <Typography
                        variant="h5"
                        sx={{
                            color: "#4F0D81", // Updated color
                            fontWeight: "bold",
                            cursor: "pointer",
                            "&:hover": { textDecoration: "underline" },
                            position: "relative",
                            top: "-10px", // Move it slightly upwards
                        }}
                        component={Link}
                        to="/misspoppins" // Navigate to MissPoppins page
                    >
                        MissPoppins App Redesign:
                    </Typography>
                    <Typography
                        variant="subtitle1"
                        sx={{
                            color: "#6C3483", // Light purple
                            fontWeight: "medium",
                        }}
                    >
                        Simplifying Navigation and Boosting User Engagement
                    </Typography>
                    <Box
                        sx={{
                            backgroundColor: "#FDF3FD", // Updated background color
                            padding: "1.5rem", // Adjusted padding for height
                            borderRadius: "8px",
                        }}
                    >
                        <Typography
                            variant="body1"
                            sx={{
                                color: "#000000", // Updated text color
                                marginBottom: "1rem", // Adjusted for spacing
                            }}
                        >
                            <strong>Overview:</strong> Streamlined navigation and
                            introduced strategic pricing to enhance the coach-client
                            experience.
                        </Typography>
                        <Typography
                            variant="body1"
                            sx={{
                                color: "#000000", // Updated text color
                                marginBottom: "1rem", // Adjusted for spacing
                            }}
                        >
                            <strong>Role:</strong> UX Researcher, UX/UI Designer
                        </Typography>
                        <Typography
                            variant="body1"
                            sx={{
                                color: "#000000", // Updated text color
                            }}
                        >
                            <strong>Toolkit:</strong> Figma, FigJam, Pencil and paper
                        </Typography>
                    </Box>
                </CardContent>

                {/* Image Section */}
                <CardMedia
                    component="img"
                    image={Image1}
                    alt="MissPoppins App Mockup"
                    sx={{
                        maxWidth: "300px",
                        borderRadius: "25px", // Rounded corners
                        marginLeft: { md: "2rem" }, // Add space on large screens
                        marginTop: { xs: "2rem", md: "0" }, // Add space on small screens
                    }}
                />
            </Card>
        </Box>
    );
};

export default Portfolio;

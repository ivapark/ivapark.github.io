import React from "react";
import { Box, Button, Typography, Card, CardContent, Grid, CardMedia } from "@mui/material";
import MBTI from "../assets/MBTI.png"; // Ensure this path matches your folder structure

const MBTIRamen: React.FC = () => {
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
                fontFamily: "'Poppins', sans-serif", // Set Poppins as the primary font
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
                        variant="h2"
                        sx={{
                            color: "#EB895E", // Orange
                            fontWeight: "bold",
                            textAlign: "left",
                        }}
                    >
                        MBTI Ramen Project:
                    </Typography>

                    <Typography
                        variant="subtitle1"
                        sx={{
                            color: "#EB895E", // Orange
                            textAlign: "left",
                            fontSize: "1.5rem",
                        }}
                    >
                        As a Computer Science and Psychology major who 
                        loves instant ramen, this MBTI Ramen Project 
                        was the perfect mix of everything I enjoy.
                    </Typography>

                    <Box
                        sx={{
                            backgroundColor: "#FDFAF3", // Light yellow
                            padding: "5rem",
                            borderRadius: "12px",
                            marginTop: "2rem",
                            boxShadow: "0px 8px 16px rgba(0, 0, 0, 0.1)",
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
                            <strong>Overview:</strong> A web-based quiz where users answer 
                            questions about their preferences and personality traits to be 
                            assigned one of 16 ramen types, each carefully matched to an MBTI 
                            personality.
                        </Typography>
                        <Typography
                            variant="body1"
                            sx={{
                                color: "#000000",
                                marginBottom: "0.5rem",
                                fontSize: "1rem",
                            }}
                        >
                            <strong>Role:</strong> UX/UI designer, Front-end Developer
                        </Typography>
                        <Typography
                            variant="body1"
                            sx={{
                                color: "#000000",
                                fontSize: "1rem",
                                marginBottom: "0.5rem",

                            }}
                        >
                            <strong>Toolkit:</strong> Figma
                            paper
                        </Typography>
                        <Typography
                            variant="body1"
                            sx={{
                                color: "#000000",
                                fontSize: "1rem",
                                marginBottom: "0.5rem",

                            }}
                        >
                            <strong>Languages:</strong> Javascript, CSS, HTML
                            paper
                        </Typography>
                        <Box
                            sx={{
                                display: "flex",
                                justifyContent: "center", // Center horizontally
                                marginTop: "1.5rem",
                            }}
                        >
                            <Button
                                variant="contained"
                                sx={{
                                    backgroundColor: "#000000",
                                    color: "#FFFFFF",
                                    textTransform: "none",
                                    fontSize: "1rem",
                                    borderRadius: "25px",
                                    padding: "0.5rem 2rem",
                                    boxShadow: "0px 4px 8px rgba(0, 0, 0, 0.5)",
                                    "&:hover": { backgroundColor: "#EB895E" },
                                }}
                                component="a"
                                href="https://ivapark.github.io/MBTIramen/"
                                target="_blank"
                                rel="noopener noreferrer"
                            >
                                Try It Now!
                            </Button>
                        </Box>


                    </Box>
                </Box>

                {/* Image Section */}
                <CardMedia
                    component="img"
                    image={MBTI}
                    alt="MBTI"
                    sx={{
                        maxWidth: "350px",
                        borderRadius: "30px", // Rounded corners
                        boxShadow: "0px 8px 16px rgba(0, 0, 0, 0.1)",
                        marginTop: "220px",
                        height: "400px",
                        border: "2px solid #B8ACAC",
                    }}
                />
            </Box>

            </Box>
    );
};

export default MBTIRamen;

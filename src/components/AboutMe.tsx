import React from "react";
import { Box, Typography, Avatar } from "@mui/material";

const AboutMe: React.FC = () => {
    return (
        <Box
            sx={{
                minHeight: "100vh",
                padding: "4rem 2rem",
                display: "flex",
                flexDirection: { xs: "column", md: "row" }, // Stack on small screens
                alignItems: "center",
                justifyContent: "center",
                gap: "5rem",
                fontFamily: "'Playfair Display', serif", // Updated fontFamily
            }}
        >
            {/* Profile Picture */}
            <Avatar
                src="/profilepic.png" // Update with your image path
                alt="Iva Park"
                sx={{
                    width: "300px",
                    height: "360px",
                    borderRadius: "0", // Square corners
                    boxShadow: "0 4px 8px rgba(0, 0, 0, 0.2)",
                    marginTop: "8rem",
                }}
            />

            {/* About Me Text */}
            <Box
                sx={{
                    maxWidth: "600px",
                    textAlign: { xs: "center", md: "left" }, // Center on small screens
                }}
            >
                <Typography
                    variant="h3"
                    sx={{
                        fontWeight: "bold",
                        marginBottom: "5rem",
                        fontFamily: "'Playfair Display', serif", // Updated fontFamily
                    }}
                >
                    About Me
                </Typography>
                <Typography
                    variant="body1"
                    sx={{
                        fontSize: "1.2rem",
                        lineHeight: "1.8",
                        fontFamily: "'Playfair Display', serif", // Updated fontFamily
                    }}
                >
                    I’m Iva, a Junior at NYU double majoring in Computer Science and
                    Psychology. I specialize in UI/UX design and problem-solving, with
                    hands-on experience in creating user-centered designs and enhancing
                    digital experiences.
                </Typography>
                <Typography
                    variant="body1"
                    sx={{
                        fontSize: "1.2rem",
                        lineHeight: "1.8",
                        marginTop: "1.5rem",
                        fontFamily: "'Playfair Display', serif", // Updated fontFamily
                    }}
                >
                    My work spans startups and research projects, where I combine technical
                    expertise with a deep understanding of human behavior to craft
                    impactful solutions. 
                </Typography>
                <Typography
                    variant="body1"
                    sx={{
                        fontSize: "1.2rem",
                        lineHeight: "1.8",
                        marginTop: "1.5rem",
                        fontFamily: "'Playfair Display', serif", // Updated fontFamily
                    }}
                >
                    I’m passionate about bridging technology and
                    humanity, particularly in areas like perception and action, and I’m
                    dedicated to developing accessible and meaningful innovations.
                </Typography>
            </Box>
        </Box>
    );
};

export default AboutMe;

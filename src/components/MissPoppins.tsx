import React from "react";
import { Box, Typography, Card, CardContent, Grid, CardMedia } from "@mui/material";
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
                        fontFamily: "'Kufam', sans-serif", // Ensure font is applied here
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
                            boxShadow: "0px 8px 16px rgba(0, 0, 0, 0.1)",
                            fontFamily: "'Kufam', sans-serif", // Apply font to content inside
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
                        boxShadow: "0px 8px 16px rgba(0, 0, 0, 0.1)",
                    }}
                />
            </Box>

            {/* UX Research Section */}
            <Box
                sx={{
                    width: "100%",
                    maxWidth: "1200px", // Match the maxWidth of the main container
                    marginTop: "3rem",
                    fontFamily: "'Kufam', sans-serif", // Apply font here too
                }}
            >
                <Typography
                    variant="h5"
                    sx={{
                        color: "#4F0D81", // Dark purple
                        fontWeight: "bold",
                        textAlign: "left", // Align text to the left
                        marginBottom: "1rem",
                    }}
                >
                    UX Research
                </Typography>

                {/* Background Section */}
                <Typography
                    variant="h6"
                    sx={{
                        color: "#000000", // Black text
                        fontWeight: "normal",
                        textAlign: "center",
                        marginBottom: "1rem",
                    }}
                >
                    Background
                </Typography>

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
                            marginLeft: "1rem", // Move text slightly to the right
                        }}
                    >
                        <strong>MissPoppins</strong> is an app that connects parents with
                        expert coaches through:
                        <ul style={{ marginTop: "0.5rem", paddingLeft: "1.5rem" }}>
                            <li>One-time free consultation</li>
                            <li>Ongoing support via video calls and chat</li>
                            <li>Access to articles, webinars, and expert advice</li>
                        </ul>
                        It’s a <strong>one-stop platform</strong> for parenting needs like
                        sleep, nutrition, development, and wellness.
                    </Typography>
                </Box>
            </Box>

            {/* Research Goals Section */}
            <Box
                sx={{
                    width: "100%",
                    maxWidth: "1200px",
                    marginTop: "3rem",
                }}
            >
                <Typography
                    variant="h5"
                    sx={{
                        color: "#000000",
                        fontWeight: "normal",
                        textAlign: "center",
                        marginBottom: "1rem",
                    }}
                >
                    Research Goals
                </Typography>

                <Box
                    sx={{
                        backgroundColor: "#FDF3FD",
                        padding: "3rem",
                        borderRadius: "12px",
                        boxShadow: "0px 8px 16px rgba(0, 0, 0, 0.1)",
                    }}
                >
                    <Typography
                        variant="body1"
                        sx={{
                            color: "#4F0D81",
                            textAlign: "center",
                            fontSize: "1.2rem",
                            marginBottom: "2rem",
                        }}
                    >
                        To understand parents' <strong>needs, preferences,</strong> and{" "}
                        <strong>pain points</strong> when seeking coaching services and
                        accessing parenting resources.
                    </Typography>
                    <Typography
                        variant="body1"
                        sx={{
                            color: "#000000",
                            textAlign: "center",
                            marginBottom: "2rem",
                        }}
                    >
                        Specifically, the goal is to uncover:
                    </Typography>
                    <Typography
                        variant="body1"
                        sx={{
                            color: "#000000",
                            fontSize: "1rem",
                        }}
                    >
                        <ol>
                            <li>How parents navigate the process of finding the right coach</li>
                            <li>
                                Their expectations for consultations and ongoing support
                            </li>
                            <li>
                                Their engagement with articles, webinars, and community features
                            </li>
                        </ol>
                        <br />
                        <Typography
                            sx={{
                                fontSize: "0.9rem",
                                color: "#000000",
                            }}
                        >
                            This research aims to inform design improvements that enhance
                            usability, streamline access to resources, and create a supportive
                            and user-friendly experience.
                        </Typography>
                    </Typography>
                </Box>
            </Box>

            {/* Methodologies Section */}
            <Box
                sx={{
                    width: "100%",
                    maxWidth: "1200px",
                    marginTop: "3rem",
                    fontFamily: "'Kufam', sans-serif", // Ensure font consistency
                }}
            >
                <Typography
                    variant="h5"
                    sx={{
                        color: "#000000", // Black text
                        fontWeight: "normal",
                        textAlign: "center",
                        marginBottom: "1rem",
                    }}
                >
                    Methodologies
                </Typography>

                <Typography
                    variant="body1"
                    sx={{
                        color: "#000000",
                        fontSize: "1rem",
                        lineHeight: 1.8,
                    }}
                >
                    <ol style={{ listStylePosition: "inside" }}>
                        <li>Competitive analysis</li>
                        <li>User interviews</li>
                    </ol>
                </Typography>
            </Box>

            {/* Competitive Analysis Section */}
            <Box
                sx={{
                    width: "100%",
                    maxWidth: "1200px",
                    marginTop: "3rem",
                    fontFamily: "'Kufam', sans-serif", // Ensure font consistency
                }}
            >
                <Typography
                    variant="h5"
                    sx={{
                        color: "#000000", // Black text
                        fontWeight: "normal",
                        textAlign: "center",
                        marginBottom: "1rem",
                    }}
                >
                    1. Competitive analysis
                </Typography>

                <CardMedia
                    component="img"
                    image={require("../assets/image2.png")} // Update the path to match your folder structure
                    alt="Competitive Analysis Table"
                    sx={{
                        width: "100%",
                        maxWidth: "1200px",
                        borderRadius: "12px",
                        boxShadow: "0px 8px 16px rgba(0, 0, 0, 0.1)",
                    }}
                />
            </Box>

            {/* Key Findings Section */}
            <Box
                sx={{
                    width: "100%",
                    maxWidth: "1200px",
                    marginTop: "3rem",
                    fontFamily: "'Kufam', sans-serif", // Ensure font consistency
                    textAlign: "center",
                }}
            >
                <Typography
                    variant="h5"
                    sx={{
                        color: "#000000", // Black text
                        fontWeight: "normal",
                        marginBottom: "2rem",
                    }}
                >
                    Key Findings from the Competitive Analysis
                </Typography>

                <Box
                    sx={{
                        display: "flex",
                        flexDirection: { xs: "column", md: "row" }, // Responsive layout
                        justifyContent: "space-between",
                        gap: "1rem",
                    }}
                >
                    {/* Strengths to Leverage */}
                    <Box
                        sx={{
                            backgroundColor: "#FFF9EC", // Light beige background
                            padding: "2rem",
                            borderRadius: "12px",
                            boxShadow: "0px 8px 16px rgba(0, 0, 0, 0.1)",
                            flex: 1,
                        }}
                    >
                        <Typography
                            variant="h6"
                            sx={{
                                color: "#4F0D81", // Dark purple
                                marginBottom: "1rem",
                                fontWeight: "bold",
                            }}
                        >
                            Strengths to Leverage
                        </Typography>
                        <Typography
                            variant="body1"
                            sx={{
                                color: "#000000", // Black text
                            }}
                        >
                            Competitors excel in personalized support, community engagement, and
                            comprehensive services but often lack direct-to-consumer accessibility.
                        </Typography>
                    </Box>

                    {/* Opportunities for MissPoppins */}
                    <Box
                        sx={{
                            backgroundColor: "#FFF9EC", // Light beige background
                            padding: "2rem",
                            borderRadius: "12px",
                            boxShadow: "0px 8px 16px rgba(0, 0, 0, 0.1)",
                            flex: 1,
                        }}
                    >
                        <Typography
                            variant="h6"
                            sx={{
                                color: "#4F0D81", // Dark purple
                                marginBottom: "1rem",
                                fontWeight: "bold",
                            }}
                        >
                            Opportunities for MissPoppins
                        </Typography>
                        <Typography
                            variant="body1"
                            sx={{
                                color: "#000000", // Black text
                            }}
                        >
                            Build a strong mobile-first experience, foster community features, and
                            offer accessible services beyond employer partnerships.
                        </Typography>
                    </Box>

                    {/* Key Differentiator */}
                    <Box
                        sx={{
                            backgroundColor: "#FFF9EC", // Light beige background
                            padding: "2rem",
                            borderRadius: "12px",
                            boxShadow: "0px 8px 16px rgba(0, 0, 0, 0.1)",
                            flex: 1,
                        }}
                    >
                        <Typography
                            variant="h6"
                            sx={{
                                color: "#4F0D81", // Dark purple
                                marginBottom: "1rem",
                                fontWeight: "bold",
                            }}
                        >
                            Key Differentiator
                        </Typography>
                        <Typography
                            variant="body1"
                            sx={{
                                color: "#000000", // Black text
                            }}
                        >
                            Address accessibility gaps by combining proactive care, personalized
                            support, and community-driven features for all parents.
                        </Typography>
                    </Box>
                </Box>
            </Box>

            {/* User Interviews Section */}
            <Box
                sx={{
                    width: "100%",
                    maxWidth: "1200px", // Match the maxWidth of the main container
                    marginTop: "3rem",
                    fontFamily: "'Kufam', sans-serif", // Ensure font consistency
                }}
            >
                <Typography
                    variant="h5"
                    sx={{
                        color: "#000000", // Black text
                        fontWeight: "normal",
                        textAlign: "left", // Left align the title
                        marginBottom: "1rem",
                    }}
                >
                    2. User interviews
                </Typography>

                <Box
                    sx={{
                        marginLeft: "2rem", // Add some left margin for visual alignment
                        fontFamily: "'Kufam', sans-serif",
                    }}
                >
                    <ul style={{ marginLeft: "1rem" }}>
                        <li style={{ marginBottom: "0.5rem" }}>
                            Conducted 7 user interviews with parents
                        </li>
                        <li>
                            Created an affinity mapping based on the interviews
                        </li>
                    </ul>
                </Box>
            </Box>

            {/* Affinity Mapping Categories Section */}
            <Box
                sx={{
                    width: "100%",
                    maxWidth: "1200px", // Match the maxWidth of the main container
                    marginTop: "3rem",
                    fontFamily: "'Kufam', sans-serif", // Ensure font consistency
                }}
            >
                <Typography
                    variant="h5"
                    sx={{
                        color: "#000000", // Black text
                        fontWeight: "normal",
                        textAlign: "center", // Center align the title
                        marginBottom: "1rem",
                    }}
                >
                    Affinity Mapping Categories
                </Typography>

                <Typography
                    variant="body1"
                    sx={{
                        color: "#000000",
                        textAlign: "center",
                        marginBottom: "2rem",
                    }}
                >
                    To improve organization and clarity, I categorize the interview insights into three main categories, 
                    each with subcategories to provide more detailed insights related to the primary topics:
                </Typography>

                <Box
                    sx={{
                        display: "grid",
                        gridTemplateColumns: { xs: "1fr", md: "repeat(3, 1fr)" }, // 1 column on small screens, 3 columns on larger screens
                        gap: "1.5rem",
                    }}
                >
                    {/* Box 1 */}
                    <Box
                        sx={{
                            backgroundColor: "#FAD4D4", // Light red background
                            padding: "1.5rem",
                            borderRadius: "12px",
                            textAlign: "center",
                            boxShadow: "0px 8px 16px rgba(0, 0, 0, 0.1)",
                        }}
                    >
                        <Typography
                            sx={{
                                fontWeight: "bold",
                                color: "#4A2040",
                                marginBottom: "0.5rem",
                            }}
                        >
                            How Parents Navigate the Process of Finding the Right Coach
                        </Typography>
                    </Box>

                    {/* Box 2 */}
                    <Box
                        sx={{
                            backgroundColor: "#D2D4F9", // Light blue background
                            padding: "1.5rem",
                            borderRadius: "12px",
                            textAlign: "center",
                            boxShadow: "0px 8px 16px rgba(0, 0, 0, 0.1)",
                        }}
                    >
                        <Typography
                            sx={{
                                fontWeight: "bold",
                                color: "#4A2040",
                                marginBottom: "0.5rem",
                            }}
                        >
                            Expectations for Consultations and Ongoing Support
                        </Typography>
                    </Box>

                    {/* Box 3 */}
                    <Box
                        sx={{
                            backgroundColor: "#D8F7D4", // Light green background
                            padding: "1.5rem",
                            borderRadius: "12px",
                            textAlign: "center",
                            boxShadow: "0px 8px 16px rgba(0, 0, 0, 0.1)",
                        }}
                    >
                        <Typography
                            sx={{
                                fontWeight: "bold",
                                color: "#4A2040",
                                marginBottom: "0.5rem",
                            }}
                        >
                            Engagement with Articles, Webinars, and Community Features
                        </Typography>
                    </Box>

                    {/* Box 4 */}
                    <Box
                        sx={{
                            backgroundColor: "#FAD4D4", // Light red background
                            padding: "1.5rem",
                            borderRadius: "12px",
                            textAlign: "center",
                            boxShadow: "0px 8px 16px rgba(0, 0, 0, 0.1)",
                        }}
                    >
                        <Typography
                            sx={{
                                fontWeight: "bold",
                                color: "#4A2040",
                                marginBottom: "0.5rem",
                            }}
                        >
                            Common Information Sources
                        </Typography>
                    </Box>

                    {/* Box 5 */}
                    <Box
                        sx={{
                            backgroundColor: "#D2D4F9", // Light blue background
                            padding: "1.5rem",
                            borderRadius: "12px",
                            textAlign: "center",
                            boxShadow: "0px 8px 16px rgba(0, 0, 0, 0.1)",
                        }}
                    >
                        <Typography
                            sx={{
                                fontWeight: "bold",
                                color: "#4A2040",
                                marginBottom: "0.5rem",
                            }}
                        >
                            Package Pricing
                        </Typography>
                    </Box>

                    {/* Box 6 */}
                    <Box
                        sx={{
                            backgroundColor: "#D8F7D4", // Light green background
                            padding: "1.5rem",
                            borderRadius: "12px",
                            textAlign: "center",
                            boxShadow: "0px 8px 16px rgba(0, 0, 0, 0.1)",
                        }}
                    >
                        <Typography
                            sx={{
                                fontWeight: "bold",
                                color: "#4A2040",
                                marginBottom: "0.5rem",
                            }}
                        >
                            Community and Peer Support (Mentorship)
                        </Typography>
                    </Box>

                    {/* Box 7 */}
                    <Box
                        sx={{
                            backgroundColor: "#D2D4F9", // Light blue background
                            padding: "1.5rem",
                            borderRadius: "12px",
                            textAlign: "center",
                            boxShadow: "0px 8px 16px rgba(0, 0, 0, 0.1)",
                        }}
                    >
                        <Typography
                            sx={{
                                fontWeight: "bold",
                                color: "#4A2040",
                                marginBottom: "0.5rem",
                            }}
                        >
                            Confusing Information Architecture for App
                        </Typography>
                    </Box>

                    {/* Box 8 */}
                    <Box
                        sx={{
                            backgroundColor: "#D8F7D4", // Light green background
                            padding: "1.5rem",
                            borderRadius: "12px",
                            textAlign: "center",
                            boxShadow: "0px 8px 16px rgba(0, 0, 0, 0.1)",
                        }}
                    >
                        <Typography
                            sx={{
                                fontWeight: "bold",
                                color: "#4A2040",
                                marginBottom: "0.5rem",
                            }}
                        >
                            Resource and Information Accessibility
                        </Typography>
                    </Box>
                </Box>
            </Box>

            {/* Affinity Mapping Section */}
            <Box
                sx={{
                    width: "100%",
                    maxWidth: "1200px", // Match the maxWidth of the container
                    marginTop: "3rem",
                    fontFamily: "'Kufam', sans-serif", // Apply consistent font
                }}
            >
                <Typography
                    variant="h5"
                    sx={{
                        color: "#000000", // Black text
                        fontWeight: "bold",
                        textAlign: "center", // Center align the title
                        marginBottom: "1rem",
                    }}
                >
                    Affinity Mapping
                </Typography>

                <Typography
                    variant="body1"
                    sx={{
                        color: "#000000",
                        textAlign: "center",
                        marginBottom: "2rem",
                    }}
                >
                    The affinity diagram below uses different colors to represent insights from each participant:
                </Typography>

                <Box
                    sx={{
                        display: "grid",
                        gridTemplateColumns: { xs: "1fr", md: "1fr 1fr" }, // Two columns for large screens, single column for smaller screens
                        gap: "2rem",
                    }}
                >
                    {/* Left Image: How Parents Navigate */}
                    <Box
                        sx={{
                            backgroundColor: "#FAD4D4", // Light red background
                            padding: "2rem",
                            borderRadius: "12px",
                            boxShadow: "0px 8px 16px rgba(0, 0, 0, 0.1)",
                        }}
                    >
                        <Typography
                            sx={{
                                fontWeight: "bold",
                                color: "#4A2040",
                                fontSize: "1.2rem",
                                marginBottom: "1rem",
                                textAlign: "center",
                            }}
                        >
                            How Parents Navigate the Process of Finding the Right Coach
                        </Typography>

                        <CardMedia
                            component="img"
                            image={require("../assets/image3.png")} // Path to your image3.png
                            alt="How Parents Navigate"
                            sx={{
                                borderRadius: "12px",
                                boxShadow: "0px 8px 16px rgba(0, 0, 0, 0.1)",
                                width: "100%",
                            }}
                        />
                    </Box>

                    {/* Right Image: Common Information Sources */}
                    <Box
                        sx={{
                            backgroundColor: "#FADBDB", // Light red background for second category
                            padding: "2rem",
                            borderRadius: "12px",
                            boxShadow: "0px 8px 16px rgba(0, 0, 0, 0.1)",
                        }}
                    >
                        <Typography
                            sx={{
                                fontWeight: "bold",
                                color: "#4A2040",
                                fontSize: "1.2rem",
                                marginBottom: "1rem",
                                textAlign: "center",
                            }}
                        >
                            Common Information Sources
                        </Typography>

                        <CardMedia
                            component="img"
                            image={require("../assets/image4.png")} // Path to your image4.png
                            alt="Common Information Sources"
                            sx={{
                                borderRadius: "12px",
                                boxShadow: "0px 8px 16px rgba(0, 0, 0, 0.1)",
                                width: "100%",
                            }}
                        />
                    </Box>

                     {/* Left Image: Expectations for Consultations */}
                    <Box
                        sx={{
                            backgroundColor: "#E4E7FA", // Light blue background
                            padding: "2rem",
                            borderRadius: "12px",
                            boxShadow: "0px 8px 16px rgba(0, 0, 0, 0.1)",
                        }}
                    >
                        <Typography
                            sx={{
                                fontWeight: "bold",
                                color: "#4A2040",
                                fontSize: "1.2rem",
                                marginBottom: "1rem",
                                textAlign: "center",
                            }}
                        >
                            Expectations for Consultations and Ongoing Support
                        </Typography>

                        <CardMedia
                            component="img"
                            image={require("../assets/image5.png")} // Path to your image5.png
                            alt="Expectations for Consultations"
                            sx={{
                                borderRadius: "12px",
                                boxShadow: "0px 8px 16px rgba(0, 0, 0, 0.1)",
                                width: "100%",
                            }}
                        />
                    </Box>

                    {/* Right Image: Engagement with Articles */}
                    <Box
                        sx={{
                            backgroundColor: "#E7F8E4", // Light green background
                            padding: "2rem",
                            borderRadius: "12px",
                            boxShadow: "0px 8px 16px rgba(0, 0, 0, 0.1)",
                        }}
                    >
                        <Typography
                            sx={{
                                fontWeight: "bold",
                                color: "#4A2040",
                                fontSize: "1.2rem",
                                marginBottom: "1rem",
                                textAlign: "center",
                            }}
                        >
                            Engagement with Articles, Webinars, and Community Features
                        </Typography>

                        <CardMedia
                            component="img"
                            image={require("../assets/image6.png")} // Path to your image6.png
                            alt="Engagement with Articles"
                            sx={{
                                borderRadius: "12px",
                                boxShadow: "0px 8px 16px rgba(0, 0, 0, 0.1)",
                                width: "100%",
                            }}
                        />
                    </Box>
                    
                    {/* Top Left: Package Pricing */}
                    <Box
                        sx={{
                            backgroundColor: "#E5E5F7", // Light lavender background
                            padding: "2rem",
                            borderRadius: "12px",
                            boxShadow: "0px 8px 16px rgba(0, 0, 0, 0.1)",
                        }}
                    >
                        <Typography
                            sx={{
                                fontWeight: "bold",
                                color: "#4A2040",
                                fontSize: "1.2rem",
                                marginBottom: "1rem",
                                textAlign: "center",
                            }}
                        >
                            Package Pricing
                        </Typography>

                        <CardMedia
                            component="img"
                            image={require("../assets/image7.png")} // Update the path to match your folder structure
                            alt="Package Pricing"
                            sx={{
                                borderRadius: "12px",
                                boxShadow: "0px 8px 16px rgba(0, 0, 0, 0.1)",
                                width: "100%",
                            }}
                        />
                    </Box>

                    {/* Top Right: Community and Peer Support */}
                    <Box
                        sx={{
                            backgroundColor: "#EAF9E4", // Light green background
                            padding: "2rem",
                            borderRadius: "12px",
                            boxShadow: "0px 8px 16px rgba(0, 0, 0, 0.1)",
                        }}
                    >
                        <Typography
                            sx={{
                                fontWeight: "bold",
                                color: "#4A2040",
                                fontSize: "1.2rem",
                                marginBottom: "1rem",
                                textAlign: "center",
                            }}
                        >
                            Community and Peer Support (Mentorship)
                        </Typography>

                        <CardMedia
                            component="img"
                            image={require("../assets/image8.png")} // Update the path to match your folder structure
                            alt="Community and Peer Support"
                            sx={{
                                borderRadius: "12px",
                                boxShadow: "0px 8px 16px rgba(0, 0, 0, 0.1)",
                                width: "100%",
                            }}
                        />
                    </Box>

                    {/* Bottom Left: Confusing Information Architecture */}
                    <Box
                        sx={{
                            backgroundColor: "#E5E5F7", // Light lavender background
                            padding: "2rem",
                            borderRadius: "12px",
                            boxShadow: "0px 8px 16px rgba(0, 0, 0, 0.1)",
                        }}
                    >
                        <Typography
                            sx={{
                                fontWeight: "bold",
                                color: "#4A2040",
                                fontSize: "1.2rem",
                                marginBottom: "1rem",
                                textAlign: "center",
                            }}
                        >
                            Confusing Information Architecture for App
                        </Typography>

                        <CardMedia
                            component="img"
                            image={require("../assets/image9.png")} // Update the path to match your folder structure
                            alt="Confusing Information Architecture"
                            sx={{
                                borderRadius: "12px",
                                boxShadow: "0px 8px 16px rgba(0, 0, 0, 0.1)",
                                width: "100%",
                            }}
                        />
                    </Box>

                    {/* Bottom Right: Resource and Information Accessibility */}
                    <Box
                        sx={{
                            backgroundColor: "#EAF9E4", // Light green background
                            padding: "2rem",
                            borderRadius: "12px",
                            boxShadow: "0px 8px 16px rgba(0, 0, 0, 0.1)",
                        }}
                    >
                        <Typography
                            sx={{
                                fontWeight: "bold",
                                color: "#4A2040",
                                fontSize: "1.2rem",
                                marginBottom: "1rem",
                                textAlign: "center",
                            }}
                        >
                            Resource and Information Accessibility
                        </Typography>

                        <CardMedia
                            component="img"
                            image={require("../assets/image10.png")} // Update the path to match your folder structure
                            alt="Resource and Information Accessibility"
                            sx={{
                                borderRadius: "12px",
                                boxShadow: "0px 8px 16px rgba(0, 0, 0, 0.1)",
                                width: "100%",
                            }}
                        />
                    </Box>
                </Box>
            </Box>


            {/* Research Findings Section */}
            <Box
                sx={{
                    width: "100%",
                    maxWidth: "1200px",
                    marginTop: "3rem",
                    fontFamily: "'Kufam', sans-serif", // Ensure consistent font
                }}
            >
                <Typography
                    variant="h5"
                    sx={{
                        color: "#000000", // Black text
                        fontWeight: "bold",
                        textAlign: "center",
                        marginBottom: "2rem",
                    }}
                >
                    Research Findings
                </Typography>

                <Box
                    sx={{
                        display: "grid",
                        gridTemplateColumns: { xs: "1fr", md: "1fr 1fr 1fr" }, // Adjust to 3 columns for larger screens
                        gap: "2rem",
                    }}
                >
                    {/* Column 1 */}
                    <Box>
                        {/* First Row */}
                        <Box
                            sx={{
                                backgroundColor: "#FBE9E9", // Light red background
                                borderRadius: "12px",
                                padding: "1.5rem",
                                boxShadow: "0px 4px 8px rgba(0, 0, 0, 0.1)",
                            }}
                        >
                            <Typography
                                sx={{
                                    color: "#6B1D1D",
                                    fontWeight: "bold",
                                    textAlign: "center",
                                    marginBottom: "1rem",
                                }}
                            >
                                How Parents Navigate the Process of Finding the Right Coach
                            </Typography>
                        </Box>
                        {/* Second Row */}
                        <Box
                            sx={{
                                backgroundColor: "#FFEFEF", // Light green background
                                borderRadius: "12px",
                                padding: "1.5rem",
                                boxShadow: "0px 4px 8px rgba(0, 0, 0, 0.1)",
                                marginTop: "1.5rem",
                            }}
                        >
                            <Typography
                                sx={{
                                    color: "#000000",
                                    fontSize: "1rem",
                                    lineHeight: 1.5,
                                }}
                            >
                                Parents rely on apps like Maven, social media groups 
                                (Instagram and Facebook groups), and recommendations 
                                from peers or family networks.
                            </Typography>
                        </Box>
                    </Box>

                    {/* Column 2 */}
                    <Box>
                        {/* First Row */}
                        <Box
                            sx={{
                                backgroundColor: "#AFB7F0", // Light blue background
                                borderRadius: "12px",
                                padding: "1.5rem",
                                boxShadow: "0px 4px 8px rgba(0, 0, 0, 0.1)",
                            }}
                        >
                            <Typography
                                sx={{
                                    color: "#4A4A91",
                                    fontWeight: "bold",
                                    textAlign: "center",
                                    marginBottom: "1rem",
                                }}
                            >
                                Expectations for Consultations and Ongoing Support
                            </Typography>
                        </Box>

                        {/* Second Row */}
                        <Box
                            sx={{
                                backgroundColor: "#E1E4FA", // Light blue background
                                borderRadius: "12px",
                                padding: "1.5rem",
                                boxShadow: "0px 4px 8px rgba(0, 0, 0, 0.1)",
                                marginTop: "1.5rem",
                            }}
                        >
                            <Typography
                                sx={{
                                    color: "#000000",
                                    fontSize: "1rem",
                                    lineHeight: 1.5,
                                }}
                            >
                                Consistency in consultants is highly valued; parents dislike 
                                being assigned a new consultant each time.
                            </Typography>
                        </Box>
                         {/* Third Row */}
                         <Box
                            sx={{
                                backgroundColor: "#E1E4FA", // Light blue background
                                borderRadius: "12px",
                                padding: "1.5rem",
                                boxShadow: "0px 4px 8px rgba(0, 0, 0, 0.1)",
                                marginTop: "1.5rem",
                            }}
                        >
                            <Typography
                                sx={{
                                    color: "#000000",
                                    fontSize: "1rem",
                                    lineHeight: 1.5,
                                }}
                            >
                                Flexibility in rescheduling appointments and reliable, curated resources
                                are essential.
                            </Typography>
                        </Box>
                        {/* Fourth Row */}
                        <Box
                            sx={{
                                backgroundColor: "#E1E4FA", // Light blue background
                                borderRadius: "12px",
                                padding: "1.5rem",
                                boxShadow: "0px 4px 8px rgba(0, 0, 0, 0.1)",
                                marginTop: "1.5rem",
                            }}
                        >
                            <Typography
                                sx={{
                                    color: "#000000",
                                    fontSize: "1rem",
                                    lineHeight: 1.5,
                                }}
                            >
                                Many prefer pay-per-session models or subscription 
                                options depending on the frequency of use.
                            </Typography>
                        </Box>
                        {/* Fifth Row */}
                        <Box
                            sx={{
                                backgroundColor: "#E1E4FA", // Light blue background
                                borderRadius: "12px",
                                padding: "1.5rem",
                                boxShadow: "0px 4px 8px rgba(0, 0, 0, 0.1)",
                                marginTop: "1.5rem",
                            }}
                        >
                            <Typography
                                sx={{
                                    color: "#000000",
                                    fontSize: "1rem",
                                    lineHeight: 1.5,
                                }}
                            >
                                Parents are willing to pay $50–$200 per session 
                                or subscribe if the services are used frequently.
                            </Typography>
                        </Box>
                        {/* Sixth Row */}
                        <Box
                            sx={{
                                backgroundColor: "#E1E4FA", // Light blue background
                                borderRadius: "12px",
                                padding: "1.5rem",
                                boxShadow: "0px 4px 8px rgba(0, 0, 0, 0.1)",
                                marginTop: "1.5rem",
                            }}
                        >
                            <Typography
                                sx={{
                                    color: "#000000",
                                    fontSize: "1rem",
                                    lineHeight: 1.5,
                                }}
                            >
                                Unclear navigation and scattered resources are common frustrations.
                            </Typography>
                        </Box>

                    </Box>

                    {/* Column 3 */}
                    <Box>
                        {/* First Row */}
                        <Box
                            sx={{
                                backgroundColor: "#E8F8E8", // Light green background
                                borderRadius: "12px",
                                padding: "1.5rem",
                                boxShadow: "0px 4px 8px rgba(0, 0, 0, 0.1)",
                            }}
                        >
                            <Typography
                                sx={{
                                    color: "#4B794B",
                                    fontWeight: "bold",
                                    textAlign: "center",
                                    marginBottom: "1rem",
                                }}
                            >
                                Engagement with Articles, Webinars, and Community Features
                            </Typography>
                        </Box>

                        {/* Second Row */}
                        <Box
                            sx={{
                                backgroundColor: "#F4FFEF", // Light green background
                                borderRadius: "12px",
                                padding: "1.5rem",
                                boxShadow: "0px 4px 8px rgba(0, 0, 0, 0.1)",
                                marginTop: "1.5rem",
                            }}
                        >
                            <Typography
                                sx={{
                                    color: "#000000",
                                    fontSize: "1rem",
                                    lineHeight: 1.5,
                                }}
                            >
                                Parents engage with Instagram accounts like "Big Little 
                                Feelings" and find pre-recorded webinars and virtual classes useful.
                            </Typography>
                        </Box>
                         {/* Third Row */}
                         <Box
                            sx={{
                                backgroundColor: "#F4FFEF", // Light green background
                                borderRadius: "12px",
                                padding: "1.5rem",
                                boxShadow: "0px 4px 8px rgba(0, 0, 0, 0.1)",
                                marginTop: "1.5rem",
                            }}
                        >
                            <Typography
                                sx={{
                                    color: "#000000",
                                    fontSize: "1rem",
                                    lineHeight: 1.5,
                                }}
                            >
                                Many parents join social media groups and forums 
                                to connect with others experiencing similar challenges.
                            </Typography>
                        </Box>
                        {/* Fourth Row */}
                        <Box
                            sx={{
                                backgroundColor: "#F4FFEF", // Light green background
                                borderRadius: "12px",
                                padding: "1.5rem",
                                boxShadow: "0px 4px 8px rgba(0, 0, 0, 0.1)",
                                marginTop: "1.5rem",
                            }}
                        >
                            <Typography
                                sx={{
                                    color: "#000000",
                                    fontSize: "1rem",
                                    lineHeight: 1.5,
                                }}
                            >
                                Most parents are open to mentorship opportunities 
                                but emphasize the need for trustworthy advice.
                            </Typography>
                        </Box>
                        {/* Fifth Row */}
                        <Box
                            sx={{
                                backgroundColor: "#F4FFEF", // Light green background
                                borderRadius: "12px",
                                padding: "1.5rem",
                                boxShadow: "0px 4px 8px rgba(0, 0, 0, 0.1)",
                                marginTop: "1.5rem",
                            }}
                        >
                            <Typography
                                sx={{
                                    color: "#000000",
                                    fontSize: "1rem",
                                    lineHeight: 1.5,
                                }}
                            >
                                Parents value apps with clear navigation, 
                                scheduling tools, and instant access to resources.
                            </Typography>
                        </Box>
                    </Box>
                </Box>
            </Box>


            {/* Key Insights and How Might We Statements */}
        <Box sx={{ marginTop: "40px" }}>
            <Typography
            variant="h5"
            sx={{ fontWeight: "bold", marginBottom: "20px", textAlign: "center" }}
            >
            Turning Key Insights into How Might We Statements
            </Typography>
            <Grid container spacing={2}>
            {/* Insights Column */}
            <Grid item xs={12} md={6}>
                <Card sx={{ backgroundColor: "#E3F2FD", borderRadius: "10px" }}>
                <CardContent>
                    <Typography variant="body1" sx={{ marginBottom: "10px" }}>
                    • Flexibility in rescheduling appointments and reliable,
                    curated resources are essential.
                    </Typography>
                    <Typography variant="body1" sx={{ marginBottom: "10px" }}>
                    • Many prefer pay-per-session models or subscription options
                    depending on the frequency of use.
                    </Typography>
                    <Typography variant="body1" sx={{ marginBottom: "10px" }}>
                    • Unclear navigation and scattered resources are common
                    frustrations.
                    </Typography>
                    <Typography variant="body1">
                    • Most parents are open to mentorship opportunities but
                    emphasize the need for trustworthy advice.
                    </Typography>
                </CardContent>
                </Card>
            </Grid>

            {/* How Might We Column */}
            <Grid item xs={12} md={6}>
                <Card sx={{ backgroundColor: "#FFF3E0", borderRadius: "10px" }}>
                <CardContent>
                    <Typography variant="body1" sx={{ marginBottom: "10px" }}>
                    • How might we create a platform that offers{" "}
                    <strong>flexibility in rescheduling appointments</strong> to
                    accommodate the busy schedules of parents?
                    </Typography>
                    <Typography variant="body1" sx={{ marginBottom: "10px" }}>
                    • How might we{" "}
                    <strong>design a package or session model</strong> that feels
                    intuitive and manageable for users, ensuring they aren't
                    overwhelmed by options?
                    </Typography>
                    <Typography variant="body1" sx={{ marginBottom: "10px" }}>
                    • How might we design a navigation system that{" "}
                    <strong>simplifies access to resources</strong> and eliminates
                    user frustration?
                    </Typography>
                    <Typography variant="body1">
                    • How might we <strong>build a community</strong> that ensures
                    the advice shared is trustworthy and credible?
                    </Typography>
                </CardContent>
                </Card>
            </Grid>
            </Grid>
        </Box>

        {/* Answering How Might We Statements (Design Process) */}
        
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
                    maxWidth: "1200px",
                    width: "100%",
                }}
            >
                <Typography
                    variant="h5"
                    sx={{
                        fontWeight: "bold",
                        marginBottom: "20px",
                        textAlign: "center",
                    }}
                >
                    Answering How Might We Statements (Design Process)
                </Typography>

                {/* First Big Pink Card */}
                <Box
                    sx={{
                        backgroundColor: "#FFF3FF", // Light pink
                        padding: "2rem",
                        borderRadius: "12px",
                        marginBottom: "2rem",
                        boxShadow: "0px 4px 8px rgba(0, 0, 0, 0.1)",
                    }}
                >
                    {/* Pink Card Content */}
                    <Typography
                        variant="body1"
                        sx={{
                            fontSize: "1.1rem",
                            fontWeight: "bold",
                            color: "#000",
                            marginBottom: "2rem",
                        }}
                    >
                        How might we create a platform that offers flexibility in rescheduling
                        appointments to accommodate the busy schedules of parents?
                    </Typography>

                    {/* Grid for Yellow and White Cards */}
                    <Grid container spacing={4}>
                        {/* Row 1 */}
                        <Grid item xs={12} md={6}>
                            <Card
                                sx={{
                                    backgroundColor: "#FFFBEF", // Light yellow
                                    borderRadius: "12px",
                                    padding: "1rem",
                                    boxShadow: "0px 4px 8px rgba(0, 0, 0, 0.1)",
                                    height: "100%",
                                }}
                            >
                                <CardContent>
                                    <Typography
                                        variant="body1"
                                        sx={{
                                            fontWeight: "bold",
                                            fontSize: "1rem",
                                            marginBottom: "1rem",
                                        }}
                                    >
                                        1. Integrate a scheduling calendar
                                    </Typography>
                                    <Typography
                                        variant="body2"
                                        sx={{ color: "#000000", lineHeight: "1.6" }}
                                    >
                                        Option that allows users to view, manage, and reschedule their
                                        appointments seamlessly.
                                    </Typography>
                                </CardContent>
                            </Card>
                        </Grid>
                        <Grid item xs={12} md={6}>
                            <Card
                                sx={{
                                    backgroundColor: "#FFFFFF", // White
                                    borderRadius: "12px",
                                    padding: "1rem",
                                    boxShadow: "0px 4px 8px rgba(0, 0, 0, 0.1)",
                                    height: "100%",
                                }}
                            >
                                <CardContent>
                                    <Typography
                                        variant="body2"
                                        sx={{
                                            color: "#000000",
                                            fontSize: "0.9rem",
                                            lineHeight: "1.6",
                                        }}
                                    >
                                        Currently, the app lacks a scheduling feature, requiring users
                                        to communicate with the coach via chat after purchasing a
                                        package, which is inconvenient for both parties.
                                        <br />
                                        <br />
                                        Adding a scheduling calendar with flexible rescheduling
                                        capabilities will streamline the process and reduce effort for
                                        both users and coaches.
                                    </Typography>
                                </CardContent>
                            </Card>
                        </Grid>

                        {/* Row 2 */}
                        <Grid item xs={12} md={6}>
                            <Card
                                sx={{
                                    backgroundColor: "#FFFBEF", // Light yellow
                                    borderRadius: "12px",
                                    padding: "1rem",
                                    boxShadow: "0px 4px 8px rgba(0, 0, 0, 0.1)",
                                    height: "100%",
                                }}
                            >
                                <CardContent>
                                    <Typography
                                        variant="body1"
                                        sx={{
                                            fontWeight: "bold",
                                            fontSize: "1rem",
                                            marginBottom: "1rem",
                                        }}
                                    >
                                        2. Include real-time availability updates
                                    </Typography>
                                    <Typography
                                        variant="body2"
                                        sx={{ color: "#000000", lineHeight: "1.6" }}
                                    >
                                        From consultants and automated reminders for upcoming sessions.
                                    </Typography>
                                </CardContent>
                            </Card>
                        </Grid>
                        <Grid item xs={12} md={6}>
                            <Card
                                sx={{
                                    backgroundColor: "#FFFFFF", // White
                                    borderRadius: "12px",
                                    padding: "1rem",
                                    boxShadow: "0px 4px 8px rgba(0, 0, 0, 0.1)",
                                    height: "100%",
                                }}
                            >
                                <CardContent>
                                    <Typography
                                        variant="body2"
                                        sx={{
                                            color: "#000000",
                                            fontSize: "0.9rem",
                                            lineHeight: "1.6",
                                        }}
                                    >
                                        Providing real-time availability updates, along with reminders,
                                        will allow parents to reschedule directly through the app
                                        without needing to contact support.
                                        <br />
                                        <br />
                                        This feature will enable users to easily select the earliest
                                        available slots or choose specific timeframes that best suit
                                        their schedules.
                                    </Typography>
                                </CardContent>
                            </Card>
                        </Grid>
                    </Grid>
                </Box>
                

                {/* Second Big Pink Card */}
                <Box
                    sx={{
                        backgroundColor: "#FFF3FF", // Light pink
                        padding: "2rem",
                        borderRadius: "12px",
                        marginBottom: "2rem",
                        boxShadow: "0px 4px 8px rgba(0, 0, 0, 0.1)",
                    }}
                >
                    {/* Pink Card Content */}
                    <Typography
                        variant="body1"
                        sx={{
                            fontSize: "1.1rem",
                            fontWeight: "bold",
                            color: "#000",
                            marginBottom: "2rem",
                        }}
                    >
                        How might we design a package or session model that feels intuitive and
                        manageable for users, ensuring they aren't overwhelmed by options?
                    </Typography>

                    {/* Yellow Card */}
                    <Box
                        sx={{
                            backgroundColor: "#FFFBEF", // Light yellow
                            borderRadius: "12px",
                            padding: "1.5rem",
                            marginBottom: "2rem",
                            boxShadow: "0px 4px 8px rgba(0, 0, 0, 0.1)",
                        }}
                    >
                        <Typography
                            variant="body1"
                            sx={{
                                fontWeight: "bold",
                                marginBottom: "1rem",
                                fontSize: "1rem",
                            }}
                        >
                            Use the Lyengar and Lepper Jam Study and Decoy Effect to structure session
                            packages into three clear tiers:
                        </Typography>
                        <Typography
                            variant="body2"
                            sx={{
                                color: "#000000",
                                marginBottom: "1rem",
                                lineHeight: "1.6",
                            }}
                        >
                            <strong>Mini:</strong> 1 session for those with one-off needs.
                            <br />
                            <strong>Pro:</strong> 3 sessions designed for short-term or specific support.
                            <br />
                            <strong>Elite:</strong> 9 sessions for comprehensive, long-term guidance.
                        </Typography>
                        <Typography
                            variant="body2"
                            sx={{
                                color: "#000000",
                                marginBottom: "0.5rem",
                                lineHeight: "1.6",
                            }}
                        >
                            <strong>Iyengar and Lepper Jam Study:</strong> This study shows that too
                            many choices can overwhelm individuals, leading to lower satisfaction and
                            reduced likelihood of making a decision.
                        </Typography>
                        <Typography
                            variant="body2"
                            sx={{
                                color: "#000000",
                                lineHeight: "1.6",
                            }}
                        >
                            <strong>Decoy Effect:</strong> The Decoy Effect demonstrates how adding a
                            strategically priced option can influence individuals to choose a more
                            favorable or premium option.
                        </Typography>
                    </Box>

                    {/* Grid for White Card and Image */}
                    <Grid container spacing={4}>
                        <Grid item xs={12} md={6}>
                            <Card
                                sx={{
                                    backgroundColor: "#FFFFFF", // White
                                    borderRadius: "12px",
                                    padding: "1.5rem",
                                    boxShadow: "0px 4px 8px rgba(0, 0, 0, 0.1)",
                                    height: "100%",
                                }}
                            >
                                <CardContent>
                                    <Typography
                                        variant="body2"
                                        sx={{
                                            color: "#000000",
                                            fontSize: "0.9rem",
                                            lineHeight: "1.6",
                                        }}
                                    >
                                        The app's current package page is cluttered and disorganized,
                                        presenting users with a wide range of session numbers and price
                                        points.
                                        <br />
                                        <br />
                                        This <strong>lack of uniformity</strong> leads to confusion
                                        and makes selecting a package overwhelming.
                                    </Typography>
                                </CardContent>
                            </Card>
                        </Grid>
                        <Grid item xs={12} md={6}>
                            <CardMedia
                                component="img"
                                image={require("../assets/image11.png")} 
                                alt="Current Package Page"
                                sx={{
                                    borderRadius: "12px",
                                    boxShadow: "0px 4px 8px rgba(0, 0, 0, 0.1)",
                                    width: "100%",
                                    maxWidth: "300px", //make image smaller
                                    margin: "0 auto",
                                }}
                            />
                        </Grid>
                    </Grid>


                    {/* Add New White Card */}
                    <Grid container spacing={4}>
                    <Box
                        sx={{
                            backgroundColor: "#FFFFFF", // White background
                            borderRadius: "12px",
                            padding: "3rem",
                            marginBottom: "2rem",
                            boxShadow: "0px 4px 8px rgba(0, 0, 0, 0.1)",
                        }}
                    >
                        <Typography
                            variant="body2"
                            sx={{
                                color: "#000000",
                                fontSize: "0.9rem",
                                lineHeight: "1.6",
                            }}
                        >
                            Therefore, by incorporating the Decoy Effect into the session and pricing
                            structure, and clearly labeling and describing each tier with a focus on
                            their specific benefits, the decision-making process becomes simpler,
                            reducing decision fatigue and creating a more user-friendly experience.
                        </Typography>
                    </Box>
                    </Grid>

                    {/* Two Side-by-Side Cards */}
                    <Grid container spacing={4}>
                        <Grid item xs={12} md={6}>
                            <Box
                                sx={{
                                    backgroundColor: "#FFFBEF", // Light yellow
                                    borderRadius: "12px",
                                    padding: "1.5rem",
                                    boxShadow: "0px 4px 8px rgba(0, 0, 0, 0.1)",
                                    height: "100%",
                                }}
                            >
                                <Typography
                                    variant="body2"
                                    sx={{
                                        color: "#000000",
                                        fontSize: "0.9rem",
                                        fontWeight: "bold",
                                        lineHeight: "1.6",
                                    }}
                                >
                                    Highlight popular or recommended packages to provide
                                    decision-making cues and reduce the feeling of being overwhelmed.
                                </Typography>
                            </Box>
                        </Grid>
                        <Grid item xs={12} md={6}>
                            <Box
                                sx={{
                                    backgroundColor: "#FFFFFF", // White background
                                    borderRadius: "12px",
                                    padding: "1.5rem",
                                    boxShadow: "0px 4px 8px rgba(0, 0, 0, 0.1)",
                                    height: "100%",
                                }}
                            >
                                <Typography
                                    variant="body2"
                                    sx={{
                                        color: "#000000",
                                        fontSize: "0.9rem",
                                        lineHeight: "1.6",
                                    }}
                                >
                                    Helps user feel more confident in their choice and reduces the
                                    time and effort spent evaluating all available options.
                                    <br />
                                    <br />
                                    This guidance <strong>minimizes decision fatigue</strong> and
                                    simplifies the selection process.
                                </Typography>
                            </Box>
                        </Grid>
                    </Grid>
                </Box>



            </Box>
        </Box>

    




        </Box>
    );
};

export default MissPoppins;

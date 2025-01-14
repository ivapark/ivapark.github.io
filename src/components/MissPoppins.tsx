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
                    </Box>

                    {/* Column 2 */}
                    <Box>
                        {/* First Row */}
                        <Box
                            sx={{
                                backgroundColor: "#E7E7FB", // Light blue background
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
                                backgroundColor: "#FFE8E8", // Light pink background
                                borderRadius: "12px",
                                padding: "1.5rem",
                                boxShadow: "0px 4px 8px rgba(0, 0, 0, 0.1)",
                                marginTop: "1.5rem",
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
                                Flexibility in Rescheduling
                            </Typography>
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
                                backgroundColor: "#E7E7FB", // Light blue background
                                borderRadius: "12px",
                                padding: "1.5rem",
                                boxShadow: "0px 4px 8px rgba(0, 0, 0, 0.1)",
                                marginTop: "1.5rem",
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
                                Subscription Models
                            </Typography>
                            <Typography
                                sx={{
                                    color: "#000000",
                                    fontSize: "1rem",
                                    lineHeight: 1.5,
                                }}
                            >
                                Many prefer pay-per-session models or subscription options depending on
                                the frequency of use.
                            </Typography>
                        </Box>
                    </Box>
                </Box>
            </Box>




        </Box>
    );
};

export default MissPoppins;

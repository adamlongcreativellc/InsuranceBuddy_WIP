"use client";

import { Box, Container, Typography, Stack, Grid, Paper } from "@mui/material";
import { Upload, AutoStories, Search } from "@mui/icons-material";
import { useState, useEffect } from "react";
import Image from "next/image";

const steps = [
  {
    id: 0,
    number: "1",
    icon: <Upload sx={{ fontSize: 40 }} />,
    title: "Upload Your Policies",
    description:
      "Upload your insurance documents – auto, health, home, pet, life, and more. Buddy eats your homework so you can fetch it later!",
    screenshot: "/images/app-screenshot-upload.png",
  },
  {
    id: 1,
    number: "2",
    icon: <AutoStories sx={{ fontSize: 40 }} />,
    title: "Buddy Reads Everything",
    description:
      "Buddy reads 30-50 pages in just 30 seconds and extracts 250+ data points from each policy – coverage, deductibles, premiums, and dates.",
    screenshot: "/images/app-screenshot-document-review.png",
  },
  {
    id: 2,
    number: "3",
    icon: <Search sx={{ fontSize: 40 }} />,
    title: "Ask Buddy™ Anything",
    description:
      "Buddy remembers everything so you don't have to. Ask questions, track your spend, and see your actual costs. Your faithful companion is always here to help!",
    screenshot: "/images/app-screenshot-policy-search.png",
  },
];

export default function HowItWorks() {
  const [activeTab, setActiveTab] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setActiveTab((prev) => (prev + 1) % steps.length);
    }, 5000);

    return () => clearInterval(interval);
  }, []);

  const handleStepClick = (index: number) => {
    setActiveTab(index);
  };

  return (
    <Box
      id="how-it-works"
      sx={{
        pb: { xs: 8, md: 12 },
        background: "linear-gradient(180deg, #FFFFFF 0%, #F8F9FA 100%)",
      }}
    >
      <Container maxWidth="lg">
        <Stack
          spacing={2}
          alignItems="center"
          textAlign="center"
          sx={{ mb: 6 }}
        >
          <Typography
            variant="h2"
            sx={{
              fontSize: { xs: "2rem", sm: "2.5rem", md: "3rem" },
            }}
          >
            How It Works
          </Typography>
          <Typography
            variant="h6"
            color="text.secondary"
            fontWeight={400}
            sx={{ maxWidth: "600px" }}
          >
            Three simple steps to organize and understand your insurance
          </Typography>
        </Stack>

        <Grid container spacing={4}>
          <Grid size={{ xs: 12, md: 6 }} component="div">
            <Stack spacing={3}>
              {steps.map((step, index) => (
                <Paper
                  key={index}
                  elevation={0}
                  onClick={() => handleStepClick(index)}
                  sx={{
                    p: 3,
                    cursor: "pointer",
                    border: "2px solid",
                    borderColor:
                      activeTab === index ? "primary.main" : "grey.200",
                    borderRadius: 2,
                    background:
                      activeTab === index
                        ? "rgba(38, 136, 227, 0.05)"
                        : "#FFFFFF",
                    transition: "all 0.3s ease",
                    "&:hover": {
                      borderColor:
                        activeTab === index ? "primary.main" : "grey.300",
                      transform: "translateX(4px)",
                    },
                  }}
                >
                  <Stack spacing={2}>
                    <Stack direction="row" alignItems="center" spacing={2}>
                      <Box
                        sx={{
                          width: 56,
                          height: 56,
                          borderRadius: "50%",
                          display: "flex",
                          alignItems: "center",
                          justifyContent: "center",
                          bgcolor:
                            activeTab === index ? "primary.main" : "grey.200",
                          color:
                            activeTab === index ? "white" : "text.secondary",
                          fontSize: "1.5rem",
                          fontWeight: 700,
                          transition: "all 0.3s ease",
                        }}
                      >
                        {step.number}
                      </Box>
                    </Stack>
                    <Typography
                      variant="h5"
                      fontWeight={600}
                      color={
                        activeTab === index ? "primary.main" : "text.primary"
                      }
                    >
                      {step.title}
                    </Typography>
                    <Typography
                      variant="body1"
                      color="text.secondary"
                      lineHeight={1.8}
                    >
                      {step.description}
                    </Typography>
                  </Stack>
                </Paper>
              ))}
            </Stack>
          </Grid>

          <Grid size={{ xs: 12, md: 6 }} component="div">
            <Box
              sx={{
                position: "sticky",
                top: 100,
                width: "100%",
                height: "100%",
                maxHeight: 740,
                mx: "auto",
                borderRadius: 5,
                overflow: "hidden",
                boxShadow: 3,
                border: "8px solid",
                borderColor: "grey.900",
                bgcolor: "grey.100",
              }}
            >
              {steps.map((step, index) => (
                <Box
                  key={index}
                  sx={{
                    position: "absolute",
                    top: 0,
                    left: 0,
                    width: "100%",
                    height: "100%",
                    borderRadius: 5,
                    opacity: activeTab === index ? 1 : 0,
                    transform:
                      activeTab === index
                        ? "translateX(0)"
                        : activeTab > index
                        ? "translateX(-100%)"
                        : "translateX(100%)",
                    transition: "all 0.5s ease-in-out",
                    pointerEvents: activeTab === index ? "auto" : "none",
                  }}
                >
                  <Image
                    src={step.screenshot}
                    alt={`${step.title} screenshot`}
                    width={300}
                    height={600}
                    style={{
                      width: "100%",
                      height: "100%",
                      objectFit: "cover",
                      objectPosition: "top",
                      borderRadius: 5,
                    }}
                    priority
                  />
                </Box>
              ))}
            </Box>
          </Grid>
        </Grid>
      </Container>
    </Box>
  );
}

"use client";

import {
  Box,
  Container,
  Grid,
  Card,
  CardContent,
  Typography,
  Stack,
} from "@mui/material";
import { TrendingUp, Folder, Assessment, Lightbulb } from "@mui/icons-material";

const valueProps = [
  {
    icon: <TrendingUp sx={{ fontSize: 48 }} />,
    title: "Track Your Spending",
    description:
      "Find out what you're really spending. Buddy calculates your actual insurance costs so you know exactly where your money goes.",
  },
  {
    icon: <Folder sx={{ fontSize: 48 }} />,
    title: "Organize Documents",
    description:
      "Buddy reads 30-50 pages in just 30 seconds. Upload your policies and let Buddy fetch the details for you – just like a helpful companion.",
  },
  {
    icon: <Assessment sx={{ fontSize: 48 }} />,
    title: "Analyze Your Spend",
    description:
      "See real spending versus what you thought. Many people are surprised by their actual insurance costs – Buddy remembers everything so you don't have to.",
  },
  {
    icon: <Lightbulb sx={{ fontSize: 48 }} />,
    title: "Get Better Insights",
    description:
      "Buddy extracts 250+ data points from each policy. The more you share, the better Buddy can help – garbage in, garbage out!",
  },
];

export default function ValueProps() {
  return (
    <Box id="features" sx={{ pt: { xs: 0, md: 6 }, pb: { xs: 8, md: 12 } }}>
      <Container maxWidth="lg">
        <Grid container spacing={4} alignItems="stretch">
          {/* Left Column - First 2 cards */}
          <Grid size={{ xs: 12, md: 4 }} component="div">
            <Stack spacing={3}>
              {valueProps.slice(0, 2).map((prop, index) => (
                <Card
                  key={index}
                  elevation={0}
                  sx={{
                    height: { xs: "auto", md: "300px" },
                    border: "none",
                    borderRadius: 2,
                    transition: "all 0.3s ease",
                    display: "flex",
                    flexDirection: "column",
                    boxShadow: "0 2px 8px rgba(0, 0, 0, 0.08)",
                    "&:hover": {
                      borderColor: "primary.main",
                      transform: "translateY(-4px)",
                      boxShadow: "0 4px 16px rgba(0, 0, 0, 0.12)",
                    },
                  }}
                >
                  <CardContent sx={{ p: 4, flexGrow: 1, display: "flex", flexDirection: "column" }}>
                    <Stack spacing={2} sx={{ height: "100%" }}>
                      <Box sx={{ color: "primary.main" }}>{prop.icon}</Box>
                      <Typography
                        variant="h6"
                        component="h3"
                        fontWeight={600}
                        sx={{
                          fontSize: "1.15rem",
                          lineHeight: 1.3,
                          minHeight: "30px",
                        }}
                      >
                        {prop.title}
                      </Typography>
                      <Typography variant="body1" color="text.secondary" sx={{ flexGrow: 1 }}>
                        {prop.description}
                      </Typography>
                    </Stack>
                  </CardContent>
                </Card>
              ))}
            </Stack>
          </Grid>

          {/* Center Column - Phone Video */}
          <Grid size={{ xs: 12, md: 4 }} component="div">
            <Box
              sx={{
                position: { xs: "relative", md: "sticky" },
                top: { md: 100 },
                bgcolor: "grey.100",
                borderRadius: 4,
                display: "flex",
                alignItems: "center",
                justifyContent: "center",
                boxShadow: "0 4px 16px rgba(0, 0, 0, 0.1)",
                overflow: "hidden",
                border: "8px solid",
                borderColor: "grey.900",
                background: "linear-gradient(135deg, #2688E3 0%, #4DA4F0 100%)",
                height: { xs: "auto", md: "fit-content" },
              }}
            >
              <video
                width="600"
                height="600"
                preload="auto"
                autoPlay
                muted
                loop
                playsInline
                style={{
                  width: "100%",
                  height: "100%",
                  objectFit: "contain",
                }}
              >
                <source src="/images/app-recording.mp4" type="video/mp4" />
              </video>
            </Box>
          </Grid>

          {/* Right Column - Last 2 cards */}
          <Grid size={{ xs: 12, md: 4 }} component="div">
            <Stack spacing={3}>
              {valueProps.slice(2, 4).map((prop, index) => (
                <Card
                  key={index}
                  elevation={0}
                  sx={{
                    height: { xs: "auto", md: "300px" },
                    border: "none",
                    borderRadius: 2,
                    transition: "all 0.3s ease",
                    display: "flex",
                    flexDirection: "column",
                    boxShadow: "0 2px 8px rgba(0, 0, 0, 0.08)",
                    "&:hover": {
                      borderColor: "primary.main",
                      transform: "translateY(-4px)",
                      boxShadow: "0 4px 16px rgba(0, 0, 0, 0.12)",
                    },
                  }}
                >
                  <CardContent sx={{ p: 4, flexGrow: 1, display: "flex", flexDirection: "column" }}>
                    <Stack spacing={2} sx={{ height: "100%" }}>
                      <Box sx={{ color: "primary.main" }}>{prop.icon}</Box>
                      <Typography
                        variant="h6"
                        component="h3"
                        fontWeight={600}
                        sx={{
                          fontSize: "1.15rem",
                          lineHeight: 1.3,
                          minHeight: "30px",
                        }}
                      >
                        {prop.title}
                      </Typography>
                      <Typography variant="body1" color="text.secondary" sx={{ flexGrow: 1 }}>
                        {prop.description}
                      </Typography>
                    </Stack>
                  </CardContent>
                </Card>
              ))}
            </Stack>
          </Grid>
        </Grid>
      </Container>
    </Box>
  );
}

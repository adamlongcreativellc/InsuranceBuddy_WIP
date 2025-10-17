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
import { TrendingUp, Folder } from "@mui/icons-material";

const valueProps = [
  {
    icon: <TrendingUp sx={{ fontSize: 64 }} />,
    title: "Track Your Real Spending",
    description:
      "Most people underestimate their insurance costs by thousands. See what you're actually spending.",
  },
  {
    icon: <Folder sx={{ fontSize: 64 }} />,
    title: "Organize Everything",
    description:
      "From file cabinets to glove boxes to your phone—bring all your scattered policies into one secure place.",
  },
];

export default function ValueProps() {
  return (
    <Box id="features" sx={{ pt: { xs: 0, md: 6 }, pb: { xs: 2, md: 3 } }}>
      <Container maxWidth="lg">
        <Grid container spacing={4} alignItems="stretch">
          {/* Left Column - First card */}
          <Grid size={{ xs: 12, md: 4 }} component="div">
            <Card
              elevation={0}
              sx={{
                height: "100%",
                minHeight: { xs: "auto", md: "400px" },
                border: "none",
                borderRadius: 3,
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
              <CardContent sx={{ p: 4, flexGrow: 1, display: "flex", flexDirection: "column", justifyContent: "center" }}>
                <Stack spacing={3} sx={{ height: "100%", alignItems: "center" }}>
                  <Box sx={{ color: "primary.main" }}>{valueProps[0].icon}</Box>
                  <Typography
                    variant="h4"
                    component="h3"
                    fontWeight={700}
                    sx={{
                      fontSize: "1.75rem",
                      lineHeight: 1.3,
                      textAlign: "center",
                    }}
                  >
                    {valueProps[0].title}
                  </Typography>
                  <Typography variant="body1" color="text.secondary" sx={{ fontSize: "1.1rem", lineHeight: 1.8, textAlign: "left" }}>
                    {valueProps[0].description}
                  </Typography>
                </Stack>
              </CardContent>
            </Card>
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

          {/* Right Column - Second card */}
          <Grid size={{ xs: 12, md: 4 }} component="div">
            <Card
              elevation={0}
              sx={{
                height: "100%",
                minHeight: { xs: "auto", md: "400px" },
                border: "none",
                borderRadius: 3,
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
              <CardContent sx={{ p: 4, flexGrow: 1, display: "flex", flexDirection: "column", justifyContent: "center" }}>
                <Stack spacing={3} sx={{ height: "100%", alignItems: "center" }}>
                  <Box sx={{ color: "primary.main" }}>{valueProps[1].icon}</Box>
                  <Typography
                    variant="h4"
                    component="h3"
                    fontWeight={700}
                    sx={{
                      fontSize: "1.75rem",
                      lineHeight: 1.3,
                      textAlign: "center",
                    }}
                  >
                    {valueProps[1].title}
                  </Typography>
                  <Typography variant="body1" color="text.secondary" sx={{ fontSize: "1.1rem", lineHeight: 1.8, textAlign: "left" }}>
                    {valueProps[1].description}
                  </Typography>
                </Stack>
              </CardContent>
            </Card>
          </Grid>
        </Grid>
      </Container>
    </Box>
  );
}


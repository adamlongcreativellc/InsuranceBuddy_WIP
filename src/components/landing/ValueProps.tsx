"use client";

import {
  Box,
  Container,
  Grid,
  Card,
  CardContent,
  Typography,
  Stack,
  Button,
} from "@mui/material";
import { TrendingUp, Folder } from "@mui/icons-material";

const valueProps = [
  {
    icon: <TrendingUp sx={{ fontSize: 64 }} />,
    title: "Track Your Real Spend",
    description:
      "Most folks guess too low—by thousands. See what you really spend.",
  },
  {
    icon: <Folder sx={{ fontSize: 64 }} />,
    title: "Sort It All",
    description:
      "From file drawers to your car to your phone—bring all your lost plans to one safe place.",
  },
];

export default function ValueProps() {
  return (
    <Box id="features" sx={{ pt: { xs: 0, md: 6 }, pb: { xs: 2, md: 3 } }}>
      <Container maxWidth="lg">
        {/* 18% Income Stat Callout */}
        <Box
          sx={{
            textAlign: "center",
            mb: 6,
            py: 3,
            px: 4,
            borderRadius: 3,
            background: "linear-gradient(135deg, rgba(38, 136, 227, 0.08) 0%, rgba(77, 164, 240, 0.08) 100%)",
            border: "2px solid",
            borderColor: "primary.main",
          }}
        >
          <Typography
            variant="h3"
            sx={{
              fontSize: { xs: "2.5rem", md: "3.5rem" },
              fontWeight: 800,
              color: "primary.main",
              mb: 1,
            }}
          >
            18% of Income
          </Typography>
          <Typography
            variant="h6"
            color="text.secondary"
            sx={{ fontSize: { xs: "1rem", md: "1.25rem" } }}
          >
            is normal insurance spending for most households
          </Typography>
        </Box>

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

        {/* AI Capabilities Stats */}
        <Box sx={{ mt: 8, mb: 6 }}>
          <Grid container spacing={3}>
            <Grid size={{ xs: 12, sm: 4 }} component="div">
              <Box
                sx={{
                  textAlign: "center",
                  py: 3,
                  px: 2,
                  borderRadius: 2,
                  bgcolor: "grey.50",
                  border: "1px solid",
                  borderColor: "grey.200",
                }}
              >
                <Typography
                  variant="h4"
                  sx={{
                    fontSize: { xs: "2rem", md: "2.5rem" },
                    fontWeight: 800,
                    color: "primary.main",
                    mb: 1,
                  }}
                >
                  458
                </Typography>
                <Typography variant="body2" color="text.secondary" fontWeight={600}>
                  Policy Elements
                </Typography>
              </Box>
            </Grid>
            <Grid size={{ xs: 12, sm: 4 }} component="div">
              <Box
                sx={{
                  textAlign: "center",
                  py: 3,
                  px: 2,
                  borderRadius: 2,
                  bgcolor: "grey.50",
                  border: "1px solid",
                  borderColor: "grey.200",
                }}
              >
                <Typography
                  variant="h4"
                  sx={{
                    fontSize: { xs: "2rem", md: "2.5rem" },
                    fontWeight: 800,
                    color: "primary.main",
                    mb: 1,
                  }}
                >
                  30s
                </Typography>
                <Typography variant="body2" color="text.secondary" fontWeight={600}>
                  Read Time
                </Typography>
              </Box>
            </Grid>
            <Grid size={{ xs: 12, sm: 4 }} component="div">
              <Box
                sx={{
                  textAlign: "center",
                  py: 3,
                  px: 2,
                  borderRadius: 2,
                  bgcolor: "grey.50",
                  border: "1px solid",
                  borderColor: "grey.200",
                }}
              >
                <Typography
                  variant="h4"
                  sx={{
                    fontSize: { xs: "2rem", md: "2.5rem" },
                    fontWeight: 800,
                    color: "primary.main",
                    mb: 1,
                  }}
                >
                  99%+
                </Typography>
                <Typography variant="body2" color="text.secondary" fontWeight={600}>
                  Accurate
                </Typography>
              </Box>
            </Grid>
          </Grid>
        </Box>

        {/* Challenge CTA */}
        <Box
          sx={{
            textAlign: "center",
            py: 4,
            px: 4,
            borderRadius: 3,
            background: "linear-gradient(135deg, #2688E3 0%, #4DA4F0 100%)",
            color: "white",
            boxShadow: "0 8px 24px rgba(38, 136, 227, 0.3)",
          }}
        >
          <Typography
            variant="h5"
            sx={{
              fontSize: { xs: "1.25rem", md: "1.5rem" },
              fontWeight: 700,
              mb: 2,
            }}
          >
            Don&apos;t believe us?
          </Typography>
          <Button
            variant="contained"
            size="large"
            href="#beta-signup"
            sx={{
              bgcolor: "white",
              color: "primary.main",
              fontWeight: 700,
              fontSize: "1.1rem",
              px: 4,
              py: 1.5,
              "&:hover": {
                bgcolor: "grey.100",
                transform: "scale(1.05)",
              },
              transition: "all 0.3s ease",
            }}
          >
            Download for Free and See for Yourself
          </Button>
        </Box>
      </Container>
    </Box>
  );
}


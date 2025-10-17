"use client";

import { Box, Container, Typography, Stack, Grid } from "@mui/material";
import { Visibility, Lock, Delete, Block } from "@mui/icons-material";

const securityFeatures = [
  {
    icon: <Lock />,
    title: "Private AI",
    description:
      "Gated AI that only works with YOUR data. Your information stays with you – never shared or sold.",
  },
  {
    icon: <Block />,
    title: "We Work for You",
    description:
      "We don't sell anything, we work for you. No insurance sales, no data monetization – just a helpful companion.",
  },
  {
    icon: <Visibility />,
    title: "Your Companion Only",
    description:
      "Buddy is your faithful companion, not an advisor. We organize and explain – you make the decisions.",
  },
  {
    icon: <Delete />,
    title: "Industry Standard Security",
    description:
      "Your data is encrypted and protected with industry-standard security. Delete your data anytime.",
  },
];

export default function Security() {
  return (
    <Box id="security" sx={{ py: { xs: 12, md: 12 } }}>
      <Container maxWidth="lg">
        <Stack spacing={6}>
          <Stack spacing={2} alignItems="center" textAlign="center">
            <Typography
              variant="h2"
              sx={{
                fontSize: { xs: "2rem", sm: "2.5rem", md: "3rem" },
              }}
            >
              Security & Privacy
            </Typography>
            <Typography
              variant="h6"
              color="text.secondary"
              fontWeight={400}
              sx={{ maxWidth: "700px" }}
            >
              Your data is yours alone. Buddy uses private AI that only
              accesses your information – completely secure, never shared,
              always working for you.
            </Typography>
          </Stack>

          <Grid container spacing={2}>
            {securityFeatures.map((feature, index) => (
              <Grid
                key={index}
                size={{ xs: 6, md: 3 }}
                sx={{ pb: { xs: 4, md: 0 } }}
              >
                <Stack spacing={2} alignItems="center" textAlign="center">
                  <Box
                    sx={{
                      width: 64,
                      height: 64,
                      borderRadius: 2,
                      display: "flex",
                      alignItems: "center",
                      justifyContent: "center",
                      bgcolor: "primary.light",
                      color: "white",
                    }}
                  >
                    {feature.icon}
                  </Box>
                  <Typography variant="h6" fontWeight={600}>
                    {feature.title}
                  </Typography>
                  <Typography variant="body2" color="text.secondary">
                    {feature.description}
                  </Typography>
                </Stack>
              </Grid>
            ))}
          </Grid>
        </Stack>
      </Container>
    </Box>
  );
}

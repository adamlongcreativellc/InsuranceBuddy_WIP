"use client";

import { Box, Container, Typography, Stack, Grid } from "@mui/material";
import { Visibility, Lock, Delete, Block } from "@mui/icons-material";

const securityFeatures = [
  {
    icon: <Lock />,
    title: "Private AI",
    description:
      "Private AI that only works with YOUR data. Your info stays with you – never shared or sold.",
  },
  {
    icon: <Block />,
    title: "We Work for You",
    description:
      "We don't sell things, we work for you. No insurance sales, we don't sell your data – just a helpful pal.",
  },
  {
    icon: <Visibility />,
    title: "Your Pal Only",
    description:
      "Buddy is your faithful pal, not an advisor. We sort and explain – you choose what to do.",
  },
  {
    icon: <Delete />,
    title: "Top Safety",
    description:
      "Your data is locked and kept safe with top safety. Delete your data any time.",
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
              Safety and Privacy
            </Typography>
            <Typography
              variant="h6"
              color="text.secondary"
              fontWeight={400}
              sx={{ maxWidth: "700px" }}
            >
              Your data is yours. Buddy uses private AI that only sees your
              info – fully safe, never shared, always working for you.
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

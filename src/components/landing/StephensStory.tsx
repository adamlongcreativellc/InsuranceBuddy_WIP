"use client";

import {
  Box,
  Container,
  Typography,
  Stack,
  Grid,
  Paper,
  Chip,
} from "@mui/material";
import { TrendingUp, Description } from "@mui/icons-material";

export default function StephensStory() {
  return (
    <Box
      id="social-proof"
      sx={{
        py: { xs: 8, md: 12 },
        bgcolor: "grey.50",
      }}
    >
      <Container maxWidth="lg">
        <Stack spacing={6}>
          <Stack spacing={2} alignItems="center" textAlign="center">
            <Typography
              variant="h2"
              sx={{
                fontSize: { xs: "2rem", sm: "2.5rem", md: "3rem" },
              }}
            >
              Real People, Real Surprises
            </Typography>
            <Typography
              variant="h6"
              color="text.secondary"
              fontWeight={400}
              sx={{ maxWidth: "700px" }}
            >
              Most people have no idea what they&apos;re actually spending on
              insurance. Stephen&apos;s story is more common than you think.
            </Typography>
          </Stack>

          <Grid container spacing={4} alignItems="center">
            <Grid size={{ xs: 12, md: 6 }} component="div">
              <Paper
                elevation={2}
                sx={{
                  p: 4,
                  borderRadius: 3,
                  border: "2px solid",
                  borderColor: "error.light",
                  bgcolor: "error.lighter",
                }}
              >
                <Stack spacing={3}>
                  <Chip
                    label="Before InsuranceBuddy™"
                    color="error"
                    sx={{ alignSelf: "flex-start" }}
                  />
                  <Stack spacing={2}>
                    <Stack direction="row" alignItems="center" spacing={2}>
                      <TrendingUp sx={{ fontSize: 40, color: "error.main" }} />
                      <Box>
                        <Typography variant="h3" fontWeight={700}>
                          $12,000
                        </Typography>
                        <Typography variant="body2" color="text.secondary">
                          What Stephen thought he spent
                        </Typography>
                      </Box>
                    </Stack>
                    <Stack direction="row" alignItems="center" spacing={2}>
                      <Description
                        sx={{ fontSize: 40, color: "error.main" }}
                      />
                      <Box>
                        <Typography variant="h3" fontWeight={700}>
                          12
                        </Typography>
                        <Typography variant="body2" color="text.secondary">
                          Policies he remembered
                        </Typography>
                      </Box>
                    </Stack>
                  </Stack>
                </Stack>
              </Paper>
            </Grid>

            <Grid size={{ xs: 12, md: 6 }} component="div">
              <Paper
                elevation={2}
                sx={{
                  p: 4,
                  borderRadius: 3,
                  border: "2px solid",
                  borderColor: "success.light",
                  bgcolor: "success.lighter",
                }}
              >
                <Stack spacing={3}>
                  <Chip
                    label="After InsuranceBuddy™"
                    color="success"
                    sx={{ alignSelf: "flex-start" }}
                  />
                  <Stack spacing={2}>
                    <Stack direction="row" alignItems="center" spacing={2}>
                      <TrendingUp
                        sx={{ fontSize: 40, color: "success.main" }}
                      />
                      <Box>
                        <Typography variant="h3" fontWeight={700}>
                          $35,000
                        </Typography>
                        <Typography variant="body2" color="text.secondary">
                          His actual annual spending
                        </Typography>
                      </Box>
                    </Stack>
                    <Stack direction="row" alignItems="center" spacing={2}>
                      <Description
                        sx={{ fontSize: 40, color: "success.main" }}
                      />
                      <Box>
                        <Typography variant="h3" fontWeight={700}>
                          28
                        </Typography>
                        <Typography variant="body2" color="text.secondary">
                          Policies Buddy found
                        </Typography>
                      </Box>
                    </Stack>
                  </Stack>
                </Stack>
              </Paper>
            </Grid>
          </Grid>

          <Paper
            elevation={0}
            sx={{
              p: 4,
              borderRadius: 2,
              bgcolor: "primary.lighter",
              border: "1px solid",
              borderColor: "primary.light",
            }}
          >
            <Stack spacing={2} textAlign="center">
              <Typography variant="h6" fontWeight={600} color="primary.main">
                Stephen had 6 life insurance policies, pet insurance, and two
                houses he&apos;d forgotten about!
              </Typography>
              <Typography variant="body1" color="text.secondary">
                Buddy organized everything and showed him where his money was
                really going. No advice, no judgment – just clear facts.
              </Typography>
            </Stack>
          </Paper>
        </Stack>
      </Container>
    </Box>
  );
}

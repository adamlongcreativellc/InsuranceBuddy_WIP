"use client";

import {
  Box,
  Container,
  Typography,
  Stack,
  Button,
  Paper,
} from "@mui/material";
import { ArrowForward } from "@mui/icons-material";
import { useState, useEffect } from "react";
import EarlyAccessDialog from "./EarlyAccessDialog";

const betaCopyOptions = [
  "We're starting with a limited beta to ensure quality.",
  "We're rolling out slowly to make sure everything works just right.",
  "Early access means early feedback — help shape the future of InsuranceBuddy™.",
  "Limited beta, unlimited potential. We're just getting started.",
];

export default function BetaInvite() {
  const [dialogOpen, setDialogOpen] = useState(false);
  const [copyText, setCopyText] = useState(betaCopyOptions[0]);

  useEffect(() => {
    // Only set random copy on client side to avoid hydration mismatch
    setCopyText(
      betaCopyOptions[Math.floor(Math.random() * betaCopyOptions.length)]
    );
  }, []);

  return (
    <Box
      id="waitlist"
      sx={{
        py: { xs: 8, md: 12 },
        background: "linear-gradient(135deg, #2688E3 0%, #1B6BB8 100%)",
      }}
    >
      <Container maxWidth="md">
        <Paper
          elevation={3}
          sx={{
            p: { xs: 4, md: 6 },
            borderRadius: 3,
            textAlign: "center",
          }}
        >
          <Stack spacing={4} alignItems="center">
            <Stack spacing={2}>
              <Typography
                variant="h3"
                sx={{
                  fontSize: { xs: "1.8rem", sm: "2.2rem", md: "2.5rem" },
                  fontWeight: 700,
                }}
              >
                Join the Beta
              </Typography>
              <Typography variant="h6" color="text.secondary" fontWeight={400}>
                {copyText}
              </Typography>
            </Stack>

            <Button
              variant="contained"
              size="large"
              endIcon={<ArrowForward />}
              onClick={() => setDialogOpen(true)}
              sx={{
                px: 4,
                py: 1.5,
                fontSize: "1.1rem",
              }}
            >
              Join the Waitlist
            </Button>
          </Stack>
        </Paper>
      </Container>

      <EarlyAccessDialog
        open={dialogOpen}
        onClose={() => setDialogOpen(false)}
      />
    </Box>
  );
}

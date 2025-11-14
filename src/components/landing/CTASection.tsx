"use client";

import { Box, Container, Typography, Stack, Button } from "@mui/material";
import { ArrowForward } from "@mui/icons-material";
import { useState } from "react";
import EarlyAccessDialog from "./EarlyAccessDialog";

interface CTASectionProps {
  variant?: "default" | "compact";
}

export default function CTASection({ variant = "default" }: CTASectionProps) {
  const [dialogOpen, setDialogOpen] = useState(false);

  if (variant === "compact") {
    return (
      <>
        <Box sx={{ py: { xs: 4, md: 6 }, textAlign: "center" }}>
          <Container maxWidth="md">
            <Box sx={{ display: "inline-block" }}>
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
                Get Early Access
              </Button>
              <Typography
                variant="caption"
                sx={{
                  display: "block",
                  textAlign: "center",
                  mt: 0.5,
                  fontSize: "0.85rem",
                  color: "success.main",
                  fontWeight: 600,
                }}
              >
                100% Free • No Credit Card
              </Typography>
            </Box>
          </Container>
        </Box>
        <EarlyAccessDialog
          open={dialogOpen}
          onClose={() => setDialogOpen(false)}
        />
      </>
    );
  }

  return (
    <>
      <Box
        sx={{
          py: { xs: 6, md: 8 },
          textAlign: "center",
          bgcolor: "grey.50",
        }}
      >
        <Container maxWidth="md">
          <Stack spacing={3} alignItems="center">
            <Typography
              variant="h4"
              sx={{
                fontSize: { xs: "1.75rem", sm: "2rem", md: "2.25rem" },
                fontWeight: 700,
              }}
            >
              Ready to See What You&apos;re Really Spending?
            </Typography>
            <Typography
              variant="body1"
              color="text.secondary"
              sx={{ maxWidth: "600px" }}
            >
              Join our beta and let Buddy help you track what you spend on insurance.
              Don&apos;t believe us? Download for free and see for yourself.
            </Typography>
            <Box sx={{ display: "inline-block" }}>
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
                Get Early Access
              </Button>
              <Typography
                variant="caption"
                sx={{
                  display: "block",
                  textAlign: "center",
                  mt: 0.5,
                  fontSize: "0.85rem",
                  color: "success.main",
                  fontWeight: 600,
                }}
              >
                100% Free • No Credit Card
              </Typography>
            </Box>
          </Stack>
        </Container>
      </Box>
      <EarlyAccessDialog
        open={dialogOpen}
        onClose={() => setDialogOpen(false)}
      />
    </>
  );
}

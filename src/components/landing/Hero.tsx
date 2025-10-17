"use client";

import { Box, Container, Typography, Button, Stack, Grid } from "@mui/material";
import { ArrowForward } from "@mui/icons-material";
import { useState } from "react";
import EarlyAccessDialog from "./EarlyAccessDialog";
import { handleSmoothScroll } from "@/utils/smoothScroll";

export default function Hero() {
  const [dialogOpen, setDialogOpen] = useState(false);

  return (
    <Box
      sx={{
        background: "linear-gradient(180deg, #F8F9FA 0%, #FFFFFF 100%)",
        pt: { xs: 12, md: 16 },
        pb: { xs: 6, md: 6 },
      }}
    >
      <Container maxWidth="lg">
        <Grid container spacing={4} alignItems="center">
          <Grid size={{ xs: 12, md: 8 }} component="div">
            <Stack spacing={4}>
              <Typography
                variant="h1"
                sx={{
                  fontSize: { xs: "2.5rem", sm: "3rem", md: "3.5rem" },
                  textAlign: { xs: "center", md: "left" },
                  lineHeight: 1.2,
                  pt: 0,
                  maxWidth: { md: "900px" },
                  whiteSpace: "nowrap",
                }}
              >
                Do You Know What <br />
                You&apos;re{" "}
                <Box
                  component="span"
                  sx={{
                    position: "relative",
                    display: "inline-block",
                    paddingBottom: "8px",
                  }}
                >
                  Really
                  <Box
                    component="svg"
                    sx={{
                      position: "absolute",
                      left: "-8px",
                      right: "-8px",
                      bottom: "0",
                      width: "calc(100% + 16px)",
                      height: "16px",
                    }}
                    viewBox="0 0 120 12"
                    preserveAspectRatio="none"
                  >
                    <path
                      d="M2,9 C10,8 15,10 25,8.5 C35,7 42,9.5 52,7.5 C62,6 70,8 80,6 C90,4.5 98,6 108,4 C112,3.5 116,3 118,2.5"
                      stroke="#2688E3"
                      strokeWidth="2.5"
                      fill="none"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      style={{ filter: 'url(#roughness)' }}
                    />
                    <defs>
                      <filter id="roughness">
                        <feTurbulence type="fractalNoise" baseFrequency="0.8" numOctaves="3" result="noise" seed="2"/>
                        <feDisplacementMap in="SourceGraphic" in2="noise" scale="0.8" xChannelSelector="R" yChannelSelector="G"/>
                      </filter>
                    </defs>
                  </Box>
                </Box>{" "}
                Spending <br />
                on Insurance?
              </Typography>

              <Typography
                variant="h5"
                color="text.secondary"
                sx={{
                  fontSize: { xs: "1.1rem", sm: "1.25rem" },
                  fontWeight: 400,
                  textAlign: { xs: "center", md: "left" },
                }}
              >
                Most people have no idea what they&apos;re actually spending on insurance.
                InsuranceBuddy™ helps you discover your real spending and organize all
                your scattered policies in one secure place.
              </Typography>

              <Stack
                direction={{ xs: "column", sm: "row" }}
                spacing={2}
                sx={{ mt: 3 }}
              >
                <Box sx={{ position: "relative", display: "inline-block" }}>
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
                    100% Free • No Credit Card Required
                  </Typography>
                </Box>
                <Button
                  variant="outlined"
                  size="large"
                  onClick={(e) => handleSmoothScroll(e, "#how-it-works")}
                  sx={{
                    px: 4,
                    py: 1.5,
                    fontSize: "1.1rem",
                  }}
                >
                  See How It Works
                </Button>
              </Stack>
            </Stack>
          </Grid>
          <Grid size={{ xs: 12, md: 4 }} component="div">
            <Box
              sx={{
                position: "relative",
                width: "100%",
                display: "flex",
                alignItems: "center",
                justifyContent: "center",
                overflow: "hidden",
              }}
            >
              <video
                autoPlay
                muted
                loop
                playsInline
                style={{
                  width: "110%",
                  height: "auto",
                  maxWidth: "660px",
                  backgroundColor: "transparent",
                  filter: "drop-shadow(0 4px 12px rgba(0, 0, 0, 0.15))",
                }}
              >
                <source
                  src="https://res.cloudinary.com/dzcrxivpm/video/upload/v1/buddyanimate_rokrov.webm"
                  type='video/webm; codecs="vp8, vorbis"'
                />
              </video>
            </Box>
          </Grid>
        </Grid>
        <Stack spacing={2} sx={{ mt: { xs: 8, sm: 2 } }}>
          <Box sx={{ display: "flex", alignItems: "center" }}>
            <Box sx={{ display: "flex", mr: 2 }}>
              {[1, 2, 3, 4].map((i) => (
                <Box
                  key={i}
                  sx={{
                    width: 40,
                    height: 40,
                    borderRadius: "50%",
                    bgcolor: `grey.${300 + i * 100}`,
                    border: "2px solid white",
                    ml: i > 1 ? -1.5 : 0,
                    display: "flex",
                    alignItems: "center",
                    justifyContent: "center",
                    fontSize: "0.9rem",
                    color: "white",
                    fontWeight: 600,
                  }}
                >
                  {String.fromCharCode(65 + i - 1)}
                </Box>
              ))}
            </Box>
            <Typography
              variant="body2"
              sx={{
                color: "text.secondary",
                fontWeight: 500,
              }}
            >
              Join our limited beta
            </Typography>
          </Box>
        </Stack>
      </Container>

      <EarlyAccessDialog
        open={dialogOpen}
        onClose={() => setDialogOpen(false)}
      />
    </Box>
  );
}

"use client";

import {
  Box,
  Container,
  Typography,
  Stack,
  Grid,
} from "@mui/material";
import { Home, DirectionsCar, DirectionsBoat, RvHookup, TwoWheeler, Diamond } from "@mui/icons-material";
import { useState, useEffect, useRef } from "react";

// Life milestones with spending progression
const lifeMilestones = [
  { age: 25, spending: 2500, events: [] },
  { age: 35, spending: 12000, events: [{ icon: Home, label: "House" }, { icon: Diamond, label: "Married" }] },
  { age: 45, spending: 25000, events: [{ icon: DirectionsCar, label: "Cars" }, { icon: DirectionsBoat, label: "Boat" }] },
  { age: 59, spending: 40000, events: [{ icon: RvHookup, label: "RV" }, { icon: TwoWheeler, label: "Motorcycle" }] },
];

export default function LifeProgressionStory() {
  const [visibleIndex, setVisibleIndex] = useState(0);
  const containerRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        if (entries[0].isIntersecting) {
          const interval = setInterval(() => {
            setVisibleIndex((prev) => {
              if (prev < lifeMilestones.length - 1) {
                return prev + 1;
              }
              clearInterval(interval);
              return prev;
            });
          }, 1200); // Progress every 1.2 seconds

          return () => clearInterval(interval);
        }
      },
      { threshold: 0.3 }
    );

    if (containerRef.current) {
      observer.observe(containerRef.current);
    }

    return () => observer.disconnect();
  }, []);

  const currentMilestone = lifeMilestones[visibleIndex];
  const allVisibleEvents = lifeMilestones
    .slice(0, visibleIndex + 1)
    .flatMap((m) => m.events);

  return (
    <Box
      ref={containerRef}
      id="life-progression"
      sx={{
        py: { xs: 8, md: 12 },
        bgcolor: "grey.50",
      }}
    >
      <Container maxWidth="lg">
        <Stack spacing={6}>
          {/* Header */}
          <Stack spacing={2} alignItems="center" textAlign="center">
            <Typography
              variant="h2"
              sx={{
                fontSize: { xs: "2rem", sm: "2.5rem", md: "3rem" },
              }}
            >
              Real Folks, Real Shocks
            </Typography>
            <Typography
              variant="h6"
              color="text.secondary"
              fontWeight={400}
              sx={{ maxWidth: "700px" }}
            >
              Watch how life adds up. Most folks have no idea how much they really spend.
            </Typography>
          </Stack>

          {/* Main Content - Split Layout */}
          <Grid container spacing={4} alignItems="center">
            {/* Left: Age Timeline */}
            <Grid size={{ xs: 12, md: 6 }} component="div">
              <Box
                sx={{
                  position: "relative",
                  py: 4,
                }}
              >
                {/* Timeline line */}
                <Box
                  sx={{
                    position: "absolute",
                    left: 40,
                    top: 60,
                    bottom: 60,
                    width: 4,
                    bgcolor: "primary.light",
                    borderRadius: 2,
                  }}
                />

                {/* Milestones */}
                <Stack spacing={4}>
                  {lifeMilestones.map((milestone, index) => (
                    <Box
                      key={milestone.age}
                      sx={{
                        position: "relative",
                        pl: 10,
                        opacity: index <= visibleIndex ? 1 : 0.3,
                        transform: index <= visibleIndex ? "translateX(0)" : "translateX(-20px)",
                        transition: "all 0.6s ease",
                      }}
                    >
                      {/* Timeline dot */}
                      <Box
                        sx={{
                          position: "absolute",
                          left: 28,
                          top: 8,
                          width: 24,
                          height: 24,
                          borderRadius: "50%",
                          bgcolor: index <= visibleIndex ? "primary.main" : "grey.300",
                          border: "4px solid white",
                          transition: "all 0.4s ease",
                          boxShadow: index <= visibleIndex ? "0 2px 8px rgba(38, 136, 227, 0.4)" : "none",
                        }}
                      />

                      <Typography
                        variant="h4"
                        fontWeight={700}
                        color={index <= visibleIndex ? "primary.main" : "text.secondary"}
                        gutterBottom
                      >
                        Age {milestone.age}
                      </Typography>

                      {/* Life events icons */}
                      {milestone.events.length > 0 && index <= visibleIndex && (
                        <Stack direction="row" spacing={1} sx={{ mt: 1 }}>
                          {milestone.events.map((event, eventIndex) => (
                            <Box
                              key={eventIndex}
                              sx={{
                                display: "flex",
                                alignItems: "center",
                                gap: 0.5,
                                px: 1.5,
                                py: 0.5,
                                bgcolor: "primary.lighter",
                                borderRadius: 1,
                                fontSize: "0.875rem",
                                color: "primary.main",
                                opacity: 0,
                                animation: `fadeIn 0.4s ease ${eventIndex * 0.2}s forwards`,
                                "@keyframes fadeIn": {
                                  to: { opacity: 1 },
                                },
                              }}
                            >
                              <event.icon sx={{ fontSize: 18 }} />
                              <Typography variant="caption" fontWeight={600}>
                                {event.label}
                              </Typography>
                            </Box>
                          ))}
                        </Stack>
                      )}
                    </Box>
                  ))}
                </Stack>
              </Box>
            </Grid>

            {/* Right: Spending Counter */}
            <Grid size={{ xs: 12, md: 6 }} component="div">
              <Box
                sx={{
                  bgcolor: "white",
                  p: { xs: 4, md: 6 },
                  borderRadius: 3,
                  border: "2px solid",
                  borderColor: "primary.light",
                  boxShadow: "0 4px 16px rgba(0, 0, 0, 0.08)",
                  textAlign: "center",
                }}
              >
                <Typography
                  variant="h6"
                  color="text.secondary"
                  gutterBottom
                  fontWeight={400}
                >
                  Insurance Spend Each Year
                </Typography>

                <Typography
                  variant="h1"
                  color="primary.main"
                  fontWeight={700}
                  sx={{
                    fontSize: { xs: "3rem", md: "4rem" },
                    my: 3,
                    transition: "all 0.6s ease",
                  }}
                >
                  ${currentMilestone.spending.toLocaleString()}
                </Typography>

                {/* All collected life events displayed as icons */}
                <Box
                  sx={{
                    display: "flex",
                    flexWrap: "wrap",
                    justifyContent: "center",
                    gap: 2,
                    mt: 4,
                    minHeight: 60,
                  }}
                >
                  {allVisibleEvents.map((event, index) => (
                    <Box
                      key={index}
                      sx={{
                        width: 56,
                        height: 56,
                        borderRadius: "50%",
                        bgcolor: "primary.lighter",
                        display: "flex",
                        alignItems: "center",
                        justifyContent: "center",
                        color: "primary.main",
                        opacity: 0,
                        animation: `popIn 0.4s ease ${index * 0.15}s forwards`,
                        "@keyframes popIn": {
                          "0%": { opacity: 0, transform: "scale(0.5)" },
                          "60%": { transform: "scale(1.1)" },
                          "100%": { opacity: 1, transform: "scale(1)" },
                        },
                      }}
                    >
                      <event.icon sx={{ fontSize: 32 }} />
                    </Box>
                  ))}
                </Box>

                {visibleIndex === lifeMilestones.length - 1 && (
                  <Box
                    sx={{
                      mt: 4,
                      pt: 4,
                      borderTop: "1px solid",
                      borderColor: "grey.200",
                      opacity: 0,
                      animation: "fadeIn 0.6s ease 0.5s forwards",
                    }}
                  >
                    <Typography
                      variant="h6"
                      color="error.main"
                      fontWeight={600}
                      gutterBottom
                    >
                      Most folks guess: $10,000
                    </Typography>
                    <Typography
                      variant="h5"
                      color="text.secondary"
                      fontWeight={400}
                    >
                      Real cost? <strong>${currentMilestone.spending.toLocaleString()}/year</strong>
                    </Typography>
                  </Box>
                )}
              </Box>
            </Grid>
          </Grid>

          {/* Bottom CTA */}
          <Box
            sx={{
              textAlign: "center",
              p: 4,
              bgcolor: "primary.lighter",
              borderRadius: 2,
              border: "1px solid",
              borderColor: "primary.light",
            }}
          >
            <Typography variant="h6" fontWeight={600} color="primary.main" gutterBottom>
              Life adds up fast—but you don't have to guess.
            </Typography>
            <Typography variant="body1" color="text.secondary">
              Buddy shows you what you really spend. No advice, no judgment – just facts.
            </Typography>
          </Box>
        </Stack>
      </Container>
    </Box>
  );
}

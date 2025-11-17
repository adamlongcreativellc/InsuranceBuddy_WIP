"use client";

import {
  Box,
  Container,
  Typography,
  Stack,
  Paper,
  TextField,
  Grid,
  Chip,
} from "@mui/material";
import { TrendingUp, Savings, AttachMoney } from "@mui/icons-material";
import { useState } from "react";
import PatentBadge from "./PatentBadge";

const incomeRanges = [
  { label: "$40,000", value: 40000, percentage: 20 },
  { label: "$60,000", value: 60000, percentage: 20 },
  { label: "$80,000", value: 80000, percentage: 18 },
  { label: "$100,000", value: 100000, percentage: 18 },
  { label: "$150,000", value: 150000, percentage: 16 },
  { label: "$200,000", value: 200000, percentage: 15 },
];

export default function SavingsCalculator() {
  const [selectedIncome, setSelectedIncome] = useState(100000);
  const [customIncome, setCustomIncome] = useState("");

  const getInsuranceSpend = (income: number) => {
    if (income <= 40000) return Math.round(income * 0.2);
    if (income <= 60000) return Math.round(income * 0.2);
    if (income <= 80000) return Math.round(income * 0.18);
    if (income <= 100000) return Math.round(income * 0.18);
    if (income <= 150000) return Math.round(income * 0.16);
    return Math.round(income * 0.15);
  };

  const currentIncome = customIncome ? parseInt(customIncome) : selectedIncome;
  const insuranceSpend = getInsuranceSpend(currentIncome);
  const estimatedSavings = Math.round(insuranceSpend * 0.1);

  const handleCustomIncomeChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const value = e.target.value.replace(/[^0-9]/g, "");
    setCustomIncome(value);
  };

  return (
    <Box
      sx={{
        py: { xs: 8, md: 12 },
        background: "linear-gradient(180deg, #FFFFFF 0%, #F8F9FA 100%)",
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
              How Much Could You Save?
            </Typography>
            <Typography
              variant="h6"
              color="text.secondary"
              fontWeight={400}
              sx={{ maxWidth: "700px" }}
            >
              Most homes spend 18% of their pay on insurance—and don&apos;t even know it.
              See what you spend and what you could save.
            </Typography>
            <Box sx={{ pt: 1 }}>
              <PatentBadge size="small" />
            </Box>
          </Stack>

          <Paper
            elevation={3}
            sx={{
              p: { xs: 3, md: 5 },
              borderRadius: 3,
              border: "2px solid",
              borderColor: "primary.light",
            }}
          >
            <Stack spacing={4} suppressHydrationWarning>
              <Box>
                <Typography
                  variant="h6"
                  fontWeight={600}
                  gutterBottom
                  sx={{ mb: 2 }}
                >
                  Pick Your Home Pay
                </Typography>
                <Grid container spacing={2}>
                  {incomeRanges.map((range) => (
                    <Grid size={{ xs: 6, sm: 4, md: 2 }} key={range.value} component="div">
                      <Chip
                        label={range.label}
                        onClick={() => {
                          setSelectedIncome(range.value);
                          setCustomIncome("");
                        }}
                        sx={{
                          width: "100%",
                          height: 48,
                          fontSize: "1rem",
                          fontWeight: 600,
                          cursor: "pointer",
                          bgcolor:
                            selectedIncome === range.value && !customIncome
                              ? "primary.main"
                              : "grey.200",
                          color:
                            selectedIncome === range.value && !customIncome
                              ? "white"
                              : "text.primary",
                          "&:hover": {
                            bgcolor:
                              selectedIncome === range.value && !customIncome
                                ? "primary.dark"
                                : "grey.300",
                          },
                        }}
                      />
                    </Grid>
                  ))}
                </Grid>
                <Box sx={{ mt: 3 }} suppressHydrationWarning>
                  <TextField
                    fullWidth
                    label="Or type a custom amount"
                    variant="outlined"
                    value={customIncome}
                    onChange={handleCustomIncomeChange}
                    placeholder="e.g., 125000"
                    InputProps={{
                      startAdornment: <Typography sx={{ mr: 1 }}>$</Typography>,
                    }}
                    sx={{
                      maxWidth: 400,
                    }}
                    slotProps={{
                      htmlInput: {
                        suppressHydrationWarning: true,
                      },
                    }}
                  />
                </Box>
              </Box>

              <Box
                sx={{
                  bgcolor: "primary.lighter",
                  p: 4,
                  borderRadius: 2,
                  border: "2px solid",
                  borderColor: "primary.light",
                }}
              >
                <Grid container spacing={4}>
                  <Grid size={{ xs: 12, md: 4 }} component="div">
                    <Stack spacing={1} alignItems="center" textAlign="center">
                      <AttachMoney
                        sx={{ fontSize: 48, color: "primary.main" }}
                      />
                      <Typography
                        variant="h3"
                        fontWeight={700}
                        color="primary.main"
                      >
                        ${currentIncome.toLocaleString()}
                      </Typography>
                      <Typography variant="body2" color="text.secondary">
                        Your Home Pay
                      </Typography>
                    </Stack>
                  </Grid>

                  <Grid size={{ xs: 12, md: 4 }} component="div">
                    <Stack spacing={1} alignItems="center" textAlign="center">
                      <TrendingUp
                        sx={{ fontSize: 48, color: "error.main" }}
                      />
                      <Typography
                        variant="h3"
                        fontWeight={700}
                        color="error.main"
                      >
                        ${insuranceSpend.toLocaleString()}
                      </Typography>
                      <Typography variant="body2" color="text.secondary">
                        Est. Insurance Spend Each Year
                      </Typography>
                    </Stack>
                  </Grid>

                  <Grid size={{ xs: 12, md: 4 }} component="div">
                    <Stack spacing={1} alignItems="center" textAlign="center">
                      <Savings
                        sx={{ fontSize: 48, color: "success.main" }}
                      />
                      <Typography
                        variant="h3"
                        fontWeight={700}
                        color="success.main"
                      >
                        ${estimatedSavings.toLocaleString()}
                      </Typography>
                      <Typography variant="body2" color="text.secondary">
                        What You Could Save Each Year
                      </Typography>
                    </Stack>
                  </Grid>
                </Grid>
              </Box>

              <Paper
                elevation={0}
                sx={{
                  p: 3,
                  bgcolor: "success.lighter",
                  border: "1px solid",
                  borderColor: "success.light",
                  borderRadius: 2,
                }}
              >
                <Typography
                  variant="body1"
                  textAlign="center"
                  fontWeight={500}
                  color="success.dark"
                >
                  💡 <strong>That&apos;s ${estimatedSavings.toLocaleString()}</strong> you could use for a trip,
                  for when you retire, or for your kids&apos; school. Buddy helps you find
                  this cash by sorting your plans and showing where it goes.
                </Typography>
              </Paper>
            </Stack>
          </Paper>

          <Stack spacing={2} alignItems="center" textAlign="center">
            <Typography variant="body2" color="text.secondary" sx={{ fontSize: "0.9rem", fontStyle: "italic" }}>
              * Guesses based on what most homes spend, plus what jobs pay.
              Your real spend and savings may differ.
            </Typography>
          </Stack>
        </Stack>
      </Container>
    </Box>
  );
}


"use client";

import {
  Box,
  Container,
  Typography,
  Stack,
  Paper,
  Table,
  TableBody,
  TableCell,
  TableContainer,
  TableHead,
  TableRow,
} from "@mui/material";
import { CheckCircle } from "@mui/icons-material";

const insuranceTypes = [
  { name: "Auto Insurance", common: true },
  { name: "Health Insurance", common: true },
  { name: "Home Insurance", common: true },
  { name: "Life Insurance", common: true },
  { name: "Disability Insurance (STD/LTD)", common: true },
  { name: "Dental Insurance", common: true },
  { name: "Vision Insurance", common: true },
  { name: "Pet Insurance", common: false },
  { name: "RV Insurance", common: false },
  { name: "Boat Insurance", common: false },
  { name: "Motorcycle Insurance", common: false },
  { name: "Renters Insurance", common: false },
  { name: "Umbrella Insurance", common: false },
];

export default function InsuranceTypes() {
  return (
    <Box
      sx={{
        py: { xs: 8, md: 12 },
        bgcolor: "grey.50",
      }}
    >
      <Container maxWidth="md">
        <Stack spacing={6}>
          <Stack spacing={2} alignItems="center" textAlign="center">
            <Typography
              variant="h2"
              sx={{
                fontSize: { xs: "2rem", sm: "2.5rem", md: "3rem" },
              }}
            >
              You Have More Policies Than You Think
            </Typography>
            <Typography
              variant="h6"
              color="text.secondary"
              fontWeight={400}
              sx={{ maxWidth: "700px" }}
            >
              Most people forget about policies they&apos;ve accumulated over the years.
              How many of these do you have?
            </Typography>
          </Stack>

          <TableContainer
            component={Paper}
            elevation={2}
            sx={{
              borderRadius: 3,
              overflow: "hidden",
            }}
          >
            <Table>
              <TableHead>
                <TableRow sx={{ bgcolor: "primary.main" }}>
                  <TableCell
                    sx={{
                      color: "white",
                      fontWeight: 700,
                      fontSize: "1.1rem",
                      py: 2,
                    }}
                  >
                    Insurance Type
                  </TableCell>
                  <TableCell
                    align="center"
                    sx={{
                      color: "white",
                      fontWeight: 700,
                      fontSize: "1.1rem",
                      py: 2,
                    }}
                  >
                    Do You Have This?
                  </TableCell>
                </TableRow>
              </TableHead>
              <TableBody>
                {insuranceTypes.map((insurance, index) => (
                  <TableRow
                    key={index}
                    sx={{
                      "&:nth-of-type(odd)": {
                        bgcolor: "grey.50",
                      },
                      "&:hover": {
                        bgcolor: "primary.lighter",
                      },
                      transition: "background-color 0.2s ease",
                    }}
                  >
                    <TableCell
                      sx={{
                        fontSize: "1rem",
                        fontWeight: insurance.common ? 600 : 400,
                        py: 2.5,
                      }}
                    >
                      {insurance.name}
                    </TableCell>
                    <TableCell align="center">
                      <CheckCircle
                        sx={{
                          color: "success.main",
                          fontSize: 32,
                          opacity: 0.8,
                        }}
                      />
                    </TableCell>
                  </TableRow>
                ))}
              </TableBody>
            </Table>
          </TableContainer>

          <Paper
            elevation={0}
            sx={{
              p: 4,
              borderRadius: 2,
              bgcolor: "primary.lighter",
              border: "1px solid",
              borderColor: "primary.light",
              textAlign: "center",
            }}
          >
            <Typography variant="h6" fontWeight={600} color="primary.main">
              InsuranceBuddy™ helps you track all of them in one place
            </Typography>
          </Paper>
        </Stack>
      </Container>
    </Box>
  );
}


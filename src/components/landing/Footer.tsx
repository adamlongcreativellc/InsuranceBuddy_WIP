"use client";

import {
  Box,
  Container,
  Typography,
  Stack,
  Link,
} from "@mui/material";
import { handleSmoothScroll } from "@/utils/smoothScroll";
import Image from "next/image";

export default function Footer() {
  const currentYear = new Date().getFullYear();

  const footerLinks = [
    { label: "Features", href: "#features" },
    { label: "How It Works", href: "#how-it-works" },
    { label: "Security", href: "#security" },
    { label: "FAQs", href: "#faq" },
  ];

  const legalLinks = [
    { label: "Privacy Policy", href: "/privacy" },
    { label: "Terms of Service", href: "/terms" },
  ];

  return (
    <Box
      component="footer"
      sx={{
        py: 4,
        borderTop: "1px solid",
        borderColor: "grey.200",
        bgcolor: "background.default",
      }}
    >
      <Container maxWidth="lg">
        <Stack spacing={3}>
          {/* Top section with logo */}
          <Box>
            <Image
              src="/images/insurancebuddy-logo-black.svg"
              alt="InsuranceBuddy™"
              width={210}
              height={28}
            />
          </Box>

          {/* Middle section with navigation links */}
          <Stack direction="row" spacing={3} flexWrap="wrap">
            {footerLinks.map((link) => (
              <Link
                key={link.label}
                href={link.href}
                onClick={(e) => handleSmoothScroll(e, link.href)}
                underline="hover"
                sx={{
                  color: "text.primary",
                  fontSize: "0.95rem",
                  fontWeight: 500,
                  cursor: "pointer",
                  "&:hover": {
                    color: "primary.main",
                  },
                }}
              >
                {link.label}
              </Link>
            ))}
          </Stack>

          {/* Bottom section with company name and legal links */}
          <Stack
            direction={{ xs: "column", sm: "row" }}
            justifyContent="space-between"
            alignItems={{ xs: "flex-start", sm: "center" }}
            spacing={2}
            sx={{
              pt: 2,
              borderTop: "1px solid",
              borderColor: "grey.200",
            }}
          >
            <Stack spacing={0.5}>
              <Typography variant="body2" color="text.secondary">
                © {currentYear} Digital Benefits Advisors LLC. Patent Pending.
              </Typography>
              <Typography variant="caption" color="text.secondary">
                InsuranceBuddy™ and Ask Buddy™ are trademarks of Digital
                Benefits Advisors LLC.
              </Typography>
            </Stack>

            <Stack direction="row" spacing={3}>
              {legalLinks.map((link) => (
                <Link
                  key={link.label}
                  href={link.href}
                  onClick={(e) => handleSmoothScroll(e, link.href)}
                  underline="hover"
                  sx={{
                    color: "text.secondary",
                    fontSize: "0.875rem",
                    cursor: "pointer",
                    "&:hover": {
                      color: "text.primary",
                    },
                  }}
                >
                  {link.label}
                </Link>
              ))}
            </Stack>
          </Stack>
        </Stack>
      </Container>
    </Box>
  );
}

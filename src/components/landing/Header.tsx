"use client";

import { ArrowForward } from "@mui/icons-material";
import { AppBar, Toolbar, Button, Box, Container, Stack } from "@mui/material";
import { useState, useEffect } from "react";
import { handleSmoothScroll } from "@/utils/smoothScroll";
import EarlyAccessDialog from "./EarlyAccessDialog";
import PatentBadge from "./PatentBadge";
import Image from "next/image";
import Link from "next/link";

const navItems = [
  { label: "Features", href: "#features" },
  { label: "How It Works", href: "#how-it-works" },
  { label: "Security", href: "#security" },
  { label: "FAQs", href: "#faq" },
];

export default function Header() {
  const [scrolled, setScrolled] = useState(false);
  const [dialogOpen, setDialogOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      const isScrolled = window.scrollY > 10;
      setScrolled(isScrolled);
    };

    // Check initial scroll position after mount
    handleScroll();

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <>
      <AppBar
        position="fixed"
        elevation={0}
        sx={{
          bgcolor: "primary.main",
          transition: "all 0.3s ease",
          boxShadow: scrolled ? 3 : 1,
        }}
      >
        <Container maxWidth="lg">
          <Toolbar sx={{ px: "0 !important", py: 1 }}>
            <Stack direction="row" alignItems="center" spacing={1.5}>
              <Link href="/" style={{ cursor: "pointer" }}>
                <Image
                  src="/images/insurancebuddy-logo-white.svg"
                  alt="InsuranceBuddy™"
                  width={220}
                  height={32}
                  style={{ marginTop: "4px" }}
                />
              </Link>
              <Box sx={{ mt: "4px" }}>
                <PatentBadge
                  size="small"
                  sx={{
                    bgcolor: "rgba(255, 255, 255, 0.2)",
                    color: "white",
                    borderColor: "rgba(255, 255, 255, 0.3)",
                  }}
                />
              </Box>
            </Stack>

            <Box
              sx={{
                flexGrow: 1,
                display: { xs: "none", md: "flex" },
                justifyContent: "center",
                gap: 4,
              }}
            >
              {navItems.map((item) => (
                <Link
                  key={item.label}
                  href={item.href}
                  onClick={(e) => handleSmoothScroll(e, item.href)}
                  style={{
                    color: "white",
                    fontWeight: 500,
                    cursor: "pointer",
                    textDecoration: "none",
                    transition: "opacity 0.2s",
                  }}
                >
                  {item.label}
                </Link>
              ))}
            </Box>

            <Box sx={{ flexGrow: 1, display: { xs: "flex", md: "none" } }} />

            <Button
              variant="contained"
              endIcon={
                <Box sx={{ display: { xs: "none", sm: "inline-flex" } }}>
                  <ArrowForward style={{ fontSize: "1.2rem" }} />
                </Box>
              }
              onClick={() => setDialogOpen(true)}
              sx={{
                ml: 2,
                px: { xs: 1, sm: 3 },
                bgcolor: "white",
                color: "primary.main",
                width: { xs: "140px", sm: "auto" },
                "&:hover": {
                  bgcolor: "grey.100",
                },
              }}
            >
              Get Early Access
            </Button>
          </Toolbar>
        </Container>
      </AppBar>

      <EarlyAccessDialog
        open={dialogOpen}
        onClose={() => setDialogOpen(false)}
      />
    </>
  );
}

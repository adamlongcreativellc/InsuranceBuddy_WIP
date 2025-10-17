"use client";

import { Box, Container, Typography, Stack } from "@mui/material";
import { useEffect, useRef, useState } from "react";
import Image from "next/image";

// Document items scattered across different locations - much further out
const documentItems = [
  { emoji: "📄", label: "Auto Policy", startX: -600, startY: -400 },
  { emoji: "📋", label: "Health Insurance", startX: 650, startY: -380 },
  { emoji: "🗂️", label: "File Cabinet", startX: -580, startY: 350 },
  { emoji: "📱", label: "Phone Photos", startX: 680, startY: 300 },
  { emoji: "💼", label: "Work Benefits", startX: -650, startY: -180 },
  { emoji: "🏠", label: "Home Policy", startX: 620, startY: -420 },
  { emoji: "🚗", label: "Car Insurance", startX: -680, startY: 380 },
  { emoji: "💻", label: "Computer Files", startX: 580, startY: 400 },
  { emoji: "📧", label: "Email Docs", startX: -550, startY: -450 },
  { emoji: "🧾", label: "Receipts", startX: 660, startY: 340 },
  { emoji: "📑", label: "Life Insurance", startX: -620, startY: 250 },
  { emoji: "🗄️", label: "Storage Box", startX: 600, startY: -350 },
];

export default function DocumentOrganizationAnimation() {
  const containerRef = useRef<HTMLDivElement>(null);
  const [scrollProgress, setScrollProgress] = useState(0);

  useEffect(() => {
    const handleScroll = () => {
      if (!containerRef.current) return;

      const rect = containerRef.current.getBoundingClientRect();
      const windowHeight = window.innerHeight;

      // Calculate progress based on scroll position
      const scrollStart = rect.top - windowHeight;
      const scrollEnd = rect.bottom;
      const scrollRange = scrollEnd - scrollStart;
      
      let progress = -scrollStart / scrollRange;
      progress = Math.max(0, Math.min(1, progress));
      
      setScrollProgress(progress);
    };

    // Throttle scroll events for performance
    let ticking = false;
    const throttledScroll = () => {
      if (!ticking) {
        window.requestAnimationFrame(() => {
          handleScroll();
          ticking = false;
        });
        ticking = true;
      }
    };

    window.addEventListener("scroll", throttledScroll);
    handleScroll(); // Initial check

    return () => window.removeEventListener("scroll", throttledScroll);
  }, []);

  // Calculate position for each document based on scroll progress
  const getDocumentStyle = (item: typeof documentItems[0]) => {
    // Progress from scattered (0) to centered (1)
    const progress = scrollProgress;
    
    // Interpolate position from start to center (0, 0)
    const currentX = item.startX * (1 - progress);
    const currentY = item.startY * (1 - progress);
    
    // Scale down as they converge - ending smaller so they go "behind" the logo
    const scale = 1 - progress * 0.8; // Scale from 1 to 0.2
    
    // Fade in as they converge, then fade out as they go behind
    const opacity = progress < 0.7 ? progress * 1.2 : (1 - progress) * 3;

    return {
      transform: `translate(${currentX}px, ${currentY}px) scale(${scale})`,
      opacity: Math.max(0, Math.min(1, opacity)),
      zIndex: 1,
    };
  };

  return (
    <Box
      ref={containerRef}
      sx={{
        minHeight: "150vh", // Reduced from 200vh to eliminate excessive space
        position: "relative",
        py: 0,
        background: "linear-gradient(180deg, #F8F9FA 0%, #FFFFFF 50%, #F8F9FA 100%)",
        overflow: "hidden",
      }}
    >
      <Box
        sx={{
          position: "sticky",
          top: "50%",
          transform: "translateY(-50%)",
          height: { xs: "80vh", md: "70vh" },
          display: "flex",
          alignItems: "center",
          justifyContent: "center",
        }}
      >
        <Container maxWidth="lg">
          <Stack spacing={4} alignItems="center" textAlign="center">
            {/* Header text - fades out completely */}
            <Box
              sx={{
                opacity: scrollProgress < 0.3 ? 1 : Math.max(0, 1 - (scrollProgress - 0.3) * 2.5),
                transition: "opacity 0.2s ease",
                position: "absolute",
                top: { xs: 40, md: 60 },
                left: 0,
                right: 0,
              }}
            >
              <Typography
                variant="h2"
                sx={{
                  fontSize: { xs: "2rem", sm: "2.5rem", md: "3rem" },
                  mb: 2,
                }}
              >
                Your Insurance Documents Are Everywhere
              </Typography>
              <Typography
                variant="h6"
                color="text.secondary"
                fontWeight={400}
                sx={{ maxWidth: "700px", mx: "auto" }}
              >
                File cabinets, glove boxes, phones, computers, email—scattered chaos.
              </Typography>
            </Box>

            {/* Animation container */}
            <Box
              sx={{
                position: "relative",
                width: "100%",
                maxWidth: "1000px",
                height: { xs: "500px", md: "600px" },
                display: "flex",
                alignItems: "center",
                justifyContent: "center",
              }}
            >
              {/* Scattered documents */}
              {documentItems.map((item, index) => (
                <Box
                  key={index}
                  sx={{
                    position: "absolute",
                    fontSize: { xs: "3rem", md: "4rem" },
                    ...getDocumentStyle(item),
                    willChange: "transform, opacity",
                    transition: "transform 0.1s ease-out, opacity 0.1s ease-out",
                    pointerEvents: "none",
                    userSelect: "none",
                  }}
                  role="img"
                  aria-label={item.label}
                >
                  {item.emoji}
                </Box>
              ))}

              {/* Center logo - Buddy */}
              <Box
                sx={{
                  position: "relative",
                  zIndex: 10,
                  width: { xs: 160, md: 220 },
                  height: { xs: 160, md: 220 },
                  borderRadius: "50%",
                  bgcolor: "primary.main",
                  display: "flex",
                  alignItems: "center",
                  justifyContent: "center",
                  boxShadow: `0 8px 32px rgba(38, 136, 227, ${0.3 + scrollProgress * 0.4})`,
                  transform: `scale(${1 + scrollProgress * 0.3})`,
                  transition: "transform 0.1s ease-out, box-shadow 0.1s ease-out",
                  overflow: "hidden",
                }}
              >
                <Box
                  sx={{
                    position: "relative",
                    width: "85%",
                    height: "85%",
                    filter: "drop-shadow(0 4px 8px rgba(0, 0, 0, 0.15))",
                  }}
                >
                  <Image
                    src="https://res.cloudinary.com/dzcrxivpm/image/upload/v1760720724/buddy_website_i9yk5a.webp"
                    alt="InsuranceBuddy Mascot"
                    fill
                    style={{ objectFit: "contain" }}
                    priority
                  />
                </Box>
              </Box>
            </Box>

            {/* Bottom text - positioned absolutely to avoid overlap */}
            <Box
              sx={{
                opacity: scrollProgress > 0.65 ? Math.min(1, (scrollProgress - 0.65) * 2.5) : 0,
                transition: "opacity 0.2s ease",
                position: "absolute",
                bottom: { xs: 100, md: 120 },
                left: 0,
                right: 0,
              }}
            >
              <Typography
                variant="h5"
                color="primary.main"
                fontWeight={700}
                sx={{
                  fontSize: { xs: "1.5rem", md: "2rem" },
                  mb: 2,
                }}
              >
                ✨ All Organized in One Place
              </Typography>
              <Typography
                variant="h6"
                color="text.secondary"
                fontWeight={400}
                sx={{ maxWidth: "700px", mx: "auto" }}
              >
                InsuranceBuddy™ brings everything together—secure, organized, and always accessible.
              </Typography>
            </Box>
          </Stack>
        </Container>
      </Box>

      {/* Scroll indicator */}
      <Box
        sx={{
          position: "absolute",
          bottom: 60,
          left: "50%",
          transform: "translateX(-50%)",
          opacity: scrollProgress < 0.1 ? 1 : 0,
          transition: "opacity 0.3s ease",
        }}
      >
        <Typography
          variant="caption"
          color="text.secondary"
          sx={{
            display: "flex",
            flexDirection: "column",
            alignItems: "center",
            gap: 1,
            animation: "bounce 2s infinite",
            "@keyframes bounce": {
              "0%, 100%": { transform: "translateY(0)" },
              "50%": { transform: "translateY(-10px)" },
            },
          }}
        >
          Scroll to organize
          <Box component="span" sx={{ fontSize: "1.5rem" }}>
            ↓
          </Box>
        </Typography>
      </Box>
    </Box>
  );
}


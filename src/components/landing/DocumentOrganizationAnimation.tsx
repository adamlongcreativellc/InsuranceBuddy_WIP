"use client";

import { Box, Container, Typography, Stack } from "@mui/material";
import { useEffect, useRef, useState } from "react";
import Image from "next/image";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

gsap.registerPlugin(ScrollTrigger);

// Document items scattered randomly around center
const documentItems = [
  { emoji: "📄", label: "Auto Policy", startX: 35, startY: -445 },
  { emoji: "📋", label: "Health Insurance", startX: 380, startY: -195 },
  { emoji: "🗂️", label: "File Cabinet", startX: 340, startY: 235 },
  { emoji: "📱", label: "Phone Photos", startX: -25, startY: 470 },
  { emoji: "💼", label: "Work Benefits", startX: -385, startY: 190 },
  { emoji: "🏠", label: "Home Policy", startX: -340, startY: -245 },
  { emoji: "🚗", label: "Car Insurance", startX: 425, startY: -125 },
  { emoji: "💻", label: "Computer Files", startX: 285, startY: 330 },
  { emoji: "📧", label: "Email Docs", startX: -315, startY: 285 },
  { emoji: "🧾", label: "Receipts", startX: -275, startY: -340 },
  { emoji: "📑", label: "Life Insurance", startX: 465, startY: 45 },
  { emoji: "🗄️", label: "Storage Box", startX: -455, startY: -20 },
  { emoji: "📲", label: "Phone Storage", startX: 195, startY: -380 },
  { emoji: "📦", label: "Storage Tub", startX: -215, startY: 395 },
  { emoji: "🧤", label: "Glove Box", startX: 410, startY: -235 },
  { emoji: "🍽️", label: "Kitchen Drawer", startX: -395, startY: -165 },
  { emoji: "📚", label: "Bookshelf", startX: 235, startY: 365 },
  { emoji: "🔒", label: "Lockbox", startX: -295, startY: -315 },
  { emoji: "🏦", label: "Safety Deposit", startX: 500, startY: -85 },
  { emoji: "🔐", label: "Safe", startX: -475, startY: 135 },
  { emoji: "💾", label: "Computer Backup", startX: 155, startY: -495 },
  { emoji: "🖊️", label: "Desk Drawer", startX: -125, startY: 485 },
  // Additional scattered duplicates for fuller effect
  { emoji: "📄", label: "Policy Document", startX: -520, startY: -280 },
  { emoji: "📋", label: "Insurance Form", startX: 125, startY: 510 },
  { emoji: "🗂️", label: "Filing Cabinet", startX: -165, startY: -520 },
  { emoji: "📱", label: "Mobile Device", startX: 485, startY: 220 },
  { emoji: "💼", label: "Briefcase", startX: -95, startY: 315 },
  { emoji: "🚗", label: "Vehicle", startX: 215, startY: -475 },
  { emoji: "💻", label: "Laptop", startX: -445, startY: 425 },
  { emoji: "📧", label: "Email", startX: 540, startY: -265 },
  { emoji: "🧾", label: "Paper Receipt", startX: -185, startY: -185 },
  { emoji: "📑", label: "Documents", startX: 335, startY: 445 },
  { emoji: "🗄️", label: "File Drawer", startX: -510, startY: 315 },
  { emoji: "📦", label: "Box", startX: 75, startY: -295 },
  { emoji: "🔒", label: "Lock", startX: 525, startY: 155 },
  { emoji: "🔐", label: "Secure Box", startX: -235, startY: 525 },
  { emoji: "💾", label: "Disk", startX: 405, startY: -405 },
  { emoji: "📚", label: "Books", startX: -425, startY: -95 },
  { emoji: "🏠", label: "House", startX: 165, startY: 235 },
  { emoji: "📱", label: "Phone", startX: -355, startY: -435 },
  { emoji: "💼", label: "Work Bag", startX: 465, startY: 375 },
];

export default function DocumentOrganizationAnimation() {
  const containerRef = useRef<HTMLDivElement>(null);
  const pinRef = useRef<HTMLDivElement>(null);
  const [scrollProgress, setScrollProgress] = useState(0);

  useEffect(() => {
    if (!containerRef.current || !pinRef.current) return;

    // Create GSAP ScrollTrigger for scroll-pinning
    const ctx = gsap.context(() => {
      ScrollTrigger.create({
        trigger: containerRef.current,
        pin: pinRef.current,
        start: "top top", // Start pinning when section reaches top of viewport
        end: "+=1500", // Scroll distance needed to complete animation
        scrub: true,
        onUpdate: (self) => {
          setScrollProgress(self.progress);
        },
      });
    });

    return () => ctx.revert();
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

    // Fade in faster - reaches full opacity at 0.4 progress, then fades out
    const opacity = progress < 0.4 ? progress * 2.5 : progress < 0.7 ? 1 : (1 - progress) * 3;

    return {
      transform: `translate(${currentX}px, ${currentY}px) scale(${scale})`,
      opacity: Math.max(0, Math.min(1, opacity)),
      zIndex: 0,
    };
  };

  return (
    <Box
      ref={containerRef}
      sx={{
        minHeight: "130vh",
        position: "relative",
        py: 10,
        mt: { xs: -12, md: -16 },
        background: "transparent",
        overflow: "hidden",
      }}
    >
      <Box
        ref={pinRef}
        sx={{
          height: "100vh",
          display: "flex",
          alignItems: "center",
          justifyContent: "center",
        }}
      >
        <Container maxWidth="lg">
          <Stack spacing={4} alignItems="center" textAlign="center">
            {/* Header text */}
            <Box
              sx={{
                opacity: 1,
                position: "absolute",
                top: { xs: 60, md: 80 },
                left: 0,
                right: 0,
                zIndex: 20,
              }}
            >
              <Typography
                variant="h2"
                sx={{
                  fontSize: { xs: "2rem", sm: "2.5rem", md: "3rem" },
                  mb: 2,
                  textShadow: "0 2px 8px rgba(255, 255, 255, 0.8)",
                }}
              >
                Your Insurance Documents Are Everywhere
              </Typography>
              <Typography
                variant="h6"
                color="text.secondary"
                fontWeight={400}
                sx={{
                  maxWidth: "700px",
                  mx: "auto",
                  textShadow: "0 1px 4px rgba(255, 255, 255, 0.8)",
                }}
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
                opacity: scrollProgress > 0.6 ? Math.min(1, (scrollProgress - 0.6) * 2.5) : 0,
                transition: "opacity 0.2s ease",
                position: "absolute",
                bottom: { xs: 80, md: 100 },
                left: 0,
                right: 0,
                zIndex: 20,
              }}
            >
              <Typography
                variant="h5"
                color="primary.main"
                fontWeight={700}
                sx={{
                  fontSize: { xs: "1.5rem", md: "2rem" },
                  mb: 2,
                  textShadow: "0 2px 8px rgba(255, 255, 255, 0.8)",
                }}
              >
                ✨ All Organized in One Place
              </Typography>
              <Typography
                variant="h6"
                color="text.secondary"
                fontWeight={400}
                sx={{
                  maxWidth: "700px",
                  mx: "auto",
                  textShadow: "0 1px 4px rgba(255, 255, 255, 0.8)",
                }}
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


"use client";

import {
  Box,
  Container,
  Typography,
  Stack,
  Accordion,
  AccordionSummary,
  AccordionDetails,
} from "@mui/material";
import { ExpandMore } from "@mui/icons-material";

const faqs = [
  {
    question: "Is Buddy an insurance advisor?",
    answer:
      "No. Buddy is your faithful pal, not an advisor. Think of Buddy like a helpful dog – we read your papers, fetch info when you ask, and recall it all so you don't have to. We sort and explain, but you choose what to do.",
  },
  {
    question: "How does Buddy help me track my spend?",
    answer:
      "Buddy reads all your insurance papers and adds up what you really spend each year. Many folks are shocked to learn they spend way more than they thought – just like Stephen, who thought he spent $12,000 but really spent $35,000!",
  },
  {
    question: "Which plan types work?",
    answer:
      "All personal insurance: auto, home, renters, health, dental, vision, life, disability, long-term care, pet insurance, umbrella plans, and more. Buddy reads 30-50 pages in just 30 seconds and pulls out 250+ facts from each plan.",
  },
  {
    question: "Is my info safe?",
    answer:
      "Yes. Buddy uses private AI that only works with YOUR data. Your info is never shared or sold. We use top safety and you can delete your data any time. We don't sell things – we work for you.",
  },
  {
    question: "What if I don't upload all my files?",
    answer:
      "Bad data in, bad data out! Buddy can only help with what you share. The more papers you upload, the better Buddy can track what you spend and answer your questions. Upload it all for the best results.",
  },
  {
    question: "Which phones work with Buddy?",
    answer:
      "Buddy works on both iPhone and Android during the beta.",
  },
  {
    question: "How much does it cost?",
    answer:
      "The app is free during beta. When we launch for real, there will be a free type for all, plus paid features if you want extra tools.",
  },
  {
    question: "Who can join the beta?",
    answer:
      "We're starting with a small beta to make sure it works great. Join our waitlist to get in early!",
  },
];

export default function FAQ() {
  return (
    <Box id="faq" sx={{ py: { xs: 8, md: 12 }, bgcolor: "grey.50" }}>
      <Container maxWidth="md">
        <Stack spacing={6}>
          <Stack spacing={2} alignItems="center" textAlign="center">
            <Typography
              variant="h2"
              sx={{
                fontSize: { xs: "2rem", sm: "2.5rem", md: "3rem" },
              }}
            >
              Questions We Get a Lot
            </Typography>
            <Typography variant="h6" color="text.secondary" fontWeight={400}>
              Everything you need to know about InsuranceBuddy
            </Typography>
          </Stack>

          <Stack spacing={2}>
            {faqs.map((faq, index) => (
              <Accordion
                key={index}
                elevation={0}
                sx={{
                  border: "1px solid",
                  borderColor: "grey.200",
                  borderRadius: 1,
                  "&:before": {
                    display: "none",
                  },
                  "&.Mui-expanded": {
                    marginBottom: 0,
                  },
                }}
              >
                <AccordionSummary
                  expandIcon={<ExpandMore />}
                  sx={{
                    py: 1,
                    "& .MuiAccordionSummary-content": {
                      margin: "12px 0",
                    },
                  }}
                >
                  <Typography variant="h6" fontWeight={500}>
                    {faq.question}
                  </Typography>
                </AccordionSummary>
                <AccordionDetails sx={{ pt: 0 }}>
                  <Typography
                    variant="body1"
                    color="text.secondary"
                    lineHeight={1.8}
                  >
                    {faq.answer}
                  </Typography>
                </AccordionDetails>
              </Accordion>
            ))}
          </Stack>
        </Stack>
      </Container>
    </Box>
  );
}

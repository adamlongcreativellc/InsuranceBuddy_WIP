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
      "No. Buddy is your faithful companion, not an advisor. Think of Buddy like a helpful dog – we read your documents, fetch information when you ask, and remember everything so you don't have to. We organize and explain, but you make all the decisions.",
  },
  {
    question: "How does Buddy help me track my spending?",
    answer:
      "Buddy reads all your insurance documents and calculates your actual annual spending. Many people are surprised to learn they're spending much more than they thought – just like Stephen, who thought he spent $12,000 but was actually spending $35,000!",
  },
  {
    question: "Which policy types are supported?",
    answer:
      "All personal insurance: auto, home, renters, health, dental, vision, life, disability, long-term care, pet insurance, umbrella policies, and more. Buddy reads 30-50 pages in just 30 seconds and extracts 250+ data points from each policy.",
  },
  {
    question: "Is my information secure?",
    answer:
      "Absolutely. Buddy uses private, gated AI that only works with YOUR data. Your information is never shared or sold. We use industry-standard encryption and you can delete your data anytime. We don't sell anything – we work for you.",
  },
  {
    question: "What if I don't upload all my documents?",
    answer:
      "Garbage in, garbage out! Buddy can only help with what you share. The more documents you upload, the better Buddy can track your spending and answer your questions. Upload everything for the best results.",
  },
  {
    question: "Which phones can I use with InsuranceBuddy™?",
    answer:
      "InsuranceBuddy™ is available for both iPhone and Android during the beta period.",
  },
  {
    question: "How much does it cost?",
    answer:
      "The app is free during beta. When we officially launch, there will be a free version for everyone, plus optional paid features for those who want extra tools.",
  },
  {
    question: "Who can join the beta?",
    answer:
      "We're starting with a limited beta to ensure quality. Join our waitlist to get early access!",
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
              Frequently Asked Questions
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

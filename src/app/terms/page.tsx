import { Container, Typography, Box, Stack, Link } from "@mui/material";
import Header from "@/components/landing/Header";
import Footer from "@/components/landing/Footer";

export default function TermsOfService() {
  return (
    <>
      <Header />
      <Box sx={{ pt: 12, pb: 8, minHeight: "100vh" }}>
        <Container maxWidth="md">
          <Stack spacing={4}>
            <Typography variant="h2" component="h1" gutterBottom>
              Terms of Service
            </Typography>

            <Typography variant="body1" color="text.secondary" paragraph>
              Last updated: January 1, 2025
            </Typography>

            <Stack spacing={3}>
              <section>
                <Typography
                  variant="h5"
                  component="h2"
                  gutterBottom
                  sx={{ mt: 3 }}
                >
                  1. Acceptance of Terms
                </Typography>
                <Typography variant="body1" paragraph>
                  By accessing and using InsuranceBuddy&trade;, you agree to be
                  bound by these Terms of Service and all applicable laws and
                  regulations. InsuranceBuddy&trade; is operated by Digital
                  Benefits Advisors LLC.
                </Typography>
              </section>

              <section>
                <Typography
                  variant="h5"
                  component="h2"
                  gutterBottom
                  sx={{ mt: 3 }}
                >
                  2. Description of Service
                </Typography>
                <Typography variant="body1" paragraph>
                  InsuranceBuddy&trade; is a document organization and
                  information service that helps you manage and understand your
                  insurance policies. We do not provide insurance advice,
                  recommendations, or act as insurance brokers or agents.
                </Typography>
              </section>

              <section>
                <Typography
                  variant="h5"
                  component="h2"
                  gutterBottom
                  sx={{ mt: 3 }}
                >
                  3. User Responsibilities
                </Typography>
                <Typography variant="body1" paragraph>
                  You are responsible for maintaining the confidentiality of
                  your account credentials and for all activities that occur
                  under your account. You agree to provide accurate and complete
                  information when creating your account.
                </Typography>
              </section>

              <section>
                <Typography
                  variant="h5"
                  component="h2"
                  gutterBottom
                  sx={{ mt: 3 }}
                >
                  4. Beta Service
                </Typography>
                <Typography variant="body1" paragraph>
                  During the beta period, InsuranceBuddy&trade; is provided free
                  of charge. Features and functionality may change, and we may
                  experience interruptions or errors. Your feedback is valuable
                  in helping us improve the service.
                </Typography>
              </section>

              <section>
                <Typography
                  variant="h5"
                  component="h2"
                  gutterBottom
                  sx={{ mt: 3 }}
                >
                  5. Intellectual Property
                </Typography>
                <Typography variant="body1" paragraph>
                  All content, features, and functionality of
                  InsuranceBuddy&trade; are owned by Digital Benefits Advisors
                  LLC and are protected by international copyright, trademark,
                  and other intellectual property laws.
                </Typography>
              </section>

              <section>
                <Typography
                  variant="h5"
                  component="h2"
                  gutterBottom
                  sx={{ mt: 3 }}
                >
                  6. Limitation of Liability
                </Typography>
                <Typography variant="body1" paragraph>
                  InsuranceBuddy&trade; is provided &quot;as is&quot; without
                  warranties of any kind. Digital Benefits Advisors LLC shall
                  not be liable for any indirect, incidental, special, or
                  consequential damages arising from your use of the service.
                </Typography>
              </section>

              <section>
                <Typography
                  variant="h5"
                  component="h2"
                  gutterBottom
                  sx={{ mt: 3 }}
                >
                  7. Termination
                </Typography>
                <Typography variant="body1" paragraph>
                  We reserve the right to terminate or suspend your account at
                  any time for violations of these terms. You may delete your
                  account at any time through the app settings.
                </Typography>
              </section>

              <section>
                <Typography
                  variant="h5"
                  component="h2"
                  gutterBottom
                  sx={{ mt: 3 }}
                >
                  8. Changes to Terms
                </Typography>
                <Typography variant="body1" paragraph>
                  We may modify these terms at any time. We will notify you of
                  any material changes via email or through the app. Continued
                  use of InsuranceBuddy&trade; after changes constitutes
                  acceptance of the new terms.
                </Typography>
              </section>

              <section>
                <Typography
                  variant="h5"
                  component="h2"
                  gutterBottom
                  sx={{ mt: 3 }}
                >
                  9. Contact Information
                </Typography>
                <Typography variant="body1" paragraph>
                  For questions about these Terms of Service, please contact us
                  at legal@insurancebuddy.app
                </Typography>
              </section>
            </Stack>

            <Box
              sx={{
                mt: 4,
                pt: 4,
                borderTop: "1px solid",
                borderColor: "grey.300",
              }}
            >
              <Link href="/" underline="hover">
                ← Back to Home
              </Link>
            </Box>
          </Stack>
        </Container>
      </Box>
      <Footer />
    </>
  );
}

import { Container, Typography, Box, Stack, Link } from "@mui/material";
import Header from "@/components/landing/Header";
import Footer from "@/components/landing/Footer";

export default function PrivacyPolicy() {
  return (
    <>
      <Header />
      <Box sx={{ pt: 12, pb: 8, minHeight: "100vh" }}>
        <Container maxWidth="md">
          <Stack spacing={4}>
            <Typography variant="h2" component="h1" gutterBottom>
              Privacy Policy
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
                  1. Information We Collect
                </Typography>
                <Typography variant="body1" paragraph>
                  InsuranceBuddy&trade; by Digital Benefits Advisors LLC
                  collects information you provide directly to us, such as when
                  you create an account, upload documents, or contact us for
                  support.
                </Typography>
              </section>

              <section>
                <Typography
                  variant="h5"
                  component="h2"
                  gutterBottom
                  sx={{ mt: 3 }}
                >
                  2. How We Use Your Information
                </Typography>
                <Typography variant="body1" paragraph>
                  We use the information we collect to provide, maintain, and
                  improve our services, including organizing your insurance
                  documents and helping you understand your coverage.
                </Typography>
              </section>

              <section>
                <Typography
                  variant="h5"
                  component="h2"
                  gutterBottom
                  sx={{ mt: 3 }}
                >
                  3. Information Security
                </Typography>
                <Typography variant="body1" paragraph>
                  We implement industry-standard security measures to protect
                  your personal information. All data is encrypted in transit
                  and at rest using bank-grade encryption protocols.
                </Typography>
              </section>

              <section>
                <Typography
                  variant="h5"
                  component="h2"
                  gutterBottom
                  sx={{ mt: 3 }}
                >
                  4. Data Retention and Deletion
                </Typography>
                <Typography variant="body1" paragraph>
                  You maintain full control over your data. You can delete your
                  information at any time through the app settings. We will
                  permanently remove your data from our systems within 30 days
                  of your request.
                </Typography>
              </section>

              <section>
                <Typography
                  variant="h5"
                  component="h2"
                  gutterBottom
                  sx={{ mt: 3 }}
                >
                  5. We Never Sell Your Data
                </Typography>
                <Typography variant="body1" paragraph>
                  Digital Benefits Advisors LLC will never sell, rent, or share
                  your personal information with third parties for their
                  marketing purposes.
                </Typography>
              </section>

              <section>
                <Typography
                  variant="h5"
                  component="h2"
                  gutterBottom
                  sx={{ mt: 3 }}
                >
                  6. Contact Us
                </Typography>
                <Typography variant="body1" paragraph>
                  If you have any questions about this Privacy Policy, please
                  contact us at privacy@insurancebuddy.app
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

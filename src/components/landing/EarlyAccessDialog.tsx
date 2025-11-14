"use client";

import {
  Dialog,
  DialogTitle,
  DialogContent,
  DialogActions,
  TextField,
  Button,
  FormControl,
  Chip,
  Box,
  Stack,
  Typography,
  RadioGroup,
  FormControlLabel,
  Radio,
  Checkbox,
  FormHelperText,
  IconButton,
} from "@mui/material";
import { Close, Apple, Android } from "@mui/icons-material";
import { useState } from "react";

interface EarlyAccessDialogProps {
  open: boolean;
  onClose: () => void;
}

const personalInsuranceOptions = [
  "Expensive/High Cost",
  "Confusing",
  "Frustrating",
  "Difficult",
  "Unaffordable",
  "Slow paying",
  "Unfair",
  "Uncaring",
  "Unresponsive",
  "Great",
  "Affordable",
  "Other",
];

const topChallengesOptions = [
  "I don't know my total insurance spend",
  "I can't find policies when I need them",
  "I forget my deductibles and coverage limits",
  "I'm unsure what situations I'm covered for",
  "My policies are scattered across papers/emails/apps",
  "I miss renewal dates and price increases",
  "I struggle to track policies for my whole family",
];

export default function EarlyAccessDialog({
  open,
  onClose,
}: EarlyAccessDialogProps) {
  const [formData, setFormData] = useState({
    email: "",
    platform: "",
    personalInsurance: [] as string[],
    topChallenges: [] as string[],
  });

  const [errors, setErrors] = useState<Record<string, string>>({});
  const [submitted, setSubmitted] = useState(false);
  const [isSubmitting, setIsSubmitting] = useState(false);

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    const newErrors: Record<string, string> = {};

    if (!formData.email) newErrors.email = "Email is required";
    if (!formData.platform) newErrors.platform = "Please select a platform";

    if (Object.keys(newErrors).length > 0) {
      setErrors(newErrors);
      return;
    }

    // Form submission disabled for static build
    setErrors({
      submit: "Form submission is disabled in this static version. Please visit the live site to join the waitlist.",
    });

    /* Original API call - disabled for static export
    setIsSubmitting(true);
    setErrors({});

    try {
      const response = await fetch("/api/early-access", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(formData),
      });

      const data = await response.json();

      if (!response.ok) {
        if (response.status === 409) {
          setErrors({ email: "This email is already on the waitlist" });
        } else {
          setErrors({
            submit: data.error || "Something went wrong. Please try again.",
          });
        }

        setIsSubmitting(false);
        return;
      }

      // Success
      setSubmitted(true);

      // Reset form data for next use
      setFormData({
        email: "",
        platform: "",
        personalInsurance: [],
        topChallenges: [],
      });
    } catch (error) {
      console.error("Error submitting form:", error);

      setErrors({
        submit: "Network error. Please check your connection and try again.",
      });
    } finally {
      setIsSubmitting(false);
    }
    */
  };

  const handlePersonalInsuranceToggle = (option: string) => {
    setFormData((prev) => ({
      ...prev,
      personalInsurance: prev.personalInsurance.includes(option)
        ? prev.personalInsurance.filter((o) => o !== option)
        : [...prev.personalInsurance, option],
    }));
  };

  const handleTopChallengeToggle = (challenge: string) => {
    setFormData((prev) => ({
      ...prev,
      topChallenges: prev.topChallenges.includes(challenge)
        ? prev.topChallenges.filter((c) => c !== challenge)
        : [...prev.topChallenges, challenge],
    }));
  };

  return (
    <Dialog
      open={open}
      onClose={onClose}
      maxWidth="sm"
      fullWidth
      PaperProps={{
        sx: { borderRadius: 2 },
      }}
    >
      <DialogTitle
        sx={{
          m: 0,
          p: 2,
          display: "flex",
          alignItems: "center",
          justifyContent: "space-between",
        }}
      >
        {submitted ? "Thank You" : "Join Early Access"}
        <IconButton
          aria-label="close"
          onClick={onClose}
          sx={{
            color: (theme) => theme.palette.grey[500],
          }}
        >
          <Close />
        </IconButton>
      </DialogTitle>

      {submitted ? (
        <>
          <DialogContent>
            <Stack spacing={2} sx={{ py: 3, textAlign: "center" }}>
              <Typography variant="h6" color="success.main">
                You&apos;re on the list!
              </Typography>
              <Typography variant="body1" color="text.secondary">
                We&apos;ll send you an invitation to join the beta as soon as
                spots open up.
              </Typography>
            </Stack>
          </DialogContent>
          <DialogActions sx={{ px: 3, py: 2, justifyContent: "center" }}>
            <Button
              onClick={() => {
                setSubmitted(false);
                onClose();
              }}
              variant="contained"
            >
              Close
            </Button>
          </DialogActions>
        </>
      ) : (
        <form onSubmit={handleSubmit}>
          <DialogContent dividers sx={{ maxHeight: "60vh", overflowY: "auto" }}>
            <Stack spacing={3}>
              {/* Display general submit error if exists */}
              {errors.submit && (
                <Typography color="error" variant="body2">
                  {errors.submit}
                </Typography>
              )}

              {/* Email */}
              <TextField
                label="Email Address"
                type="email"
                required
                fullWidth
                value={formData.email}
                placeholder="Enter your email address"
                onChange={(e) =>
                  setFormData({ ...formData, email: e.target.value })
                }
                error={!!errors.email}
                helperText={errors.email}
                disabled={isSubmitting}
              />

              {/* Platform */}
              <FormControl error={!!errors.platform}>
                <Typography variant="subtitle2" gutterBottom>
                  Which platform will you use? *
                </Typography>
                <RadioGroup
                  value={formData.platform}
                  onChange={(e) => {
                    setFormData({
                      ...formData,
                      platform: e.target.value,
                    });
                  }}
                  row
                >
                  <Box sx={{ display: "flex", gap: 2, width: "100%" }}>
                    <Box
                      sx={{
                        flex: 1,
                        border: "2px solid",
                        borderColor:
                          formData.platform === "iOS"
                            ? "primary.main"
                            : "grey.300",
                        borderRadius: 2,
                        p: 2,
                        cursor: "pointer",
                        transition: "all 0.2s",
                        color:
                          formData.platform === "iOS" ? "white" : "inherit",
                        bgcolor:
                          formData.platform === "iOS"
                            ? "primary.main"
                            : "transparent",
                        "&:hover": {
                          borderColor: "primary.main",
                        },
                      }}
                      onClick={() =>
                        setFormData({ ...formData, platform: "iOS" })
                      }
                    >
                      <FormControlLabel
                        value="iOS"
                        control={<Radio sx={{ display: "none" }} />}
                        label={
                          <Stack
                            direction="row"
                            spacing={1}
                            alignItems="center"
                          >
                            <Apple />
                            <Typography
                              variant="body1"
                              fontWeight={
                                formData.platform === "iOS" ? 600 : 400
                              }
                            >
                              iOS
                            </Typography>
                          </Stack>
                        }
                        sx={{ m: 0, width: "100%" }}
                      />
                    </Box>
                    <Box
                      sx={{
                        flex: 1,
                        border: "2px solid",
                        borderColor:
                          formData.platform === "Android"
                            ? "primary.main"
                            : "grey.300",
                        borderRadius: 2,
                        p: 2,
                        cursor: "pointer",
                        transition: "all 0.2s",
                        color:
                          formData.platform === "Android" ? "white" : "inherit",
                        bgcolor:
                          formData.platform === "Android"
                            ? "primary.main"
                            : "transparent",
                        "&:hover": {
                          borderColor: "primary.main",
                          bgcolor:
                            formData.platform === "Android"
                              ? "primary.light"
                              : "grey.50",
                        },
                      }}
                      onClick={() =>
                        setFormData({ ...formData, platform: "Android" })
                      }
                    >
                      <FormControlLabel
                        value="Android"
                        control={<Radio sx={{ display: "none" }} />}
                        label={
                          <Stack
                            direction="row"
                            spacing={1}
                            alignItems="center"
                          >
                            <Android />
                            <Typography
                              variant="body1"
                              fontWeight={
                                formData.platform === "Android" ? 600 : 400
                              }
                            >
                              Android
                            </Typography>
                          </Stack>
                        }
                        sx={{ m: 0, width: "100%" }}
                      />
                    </Box>
                  </Box>
                </RadioGroup>
                {errors.platform && (
                  <FormHelperText error>{errors.platform}</FormHelperText>
                )}
              </FormControl>

              {/* Personal Insurance */}
              <Box>
                <Typography variant="subtitle2" gutterBottom mb={1}>
                  My personal insurance is: (select all that apply)
                </Typography>
                <Box sx={{ display: "flex", flexWrap: "wrap", gap: 1 }}>
                  {personalInsuranceOptions.map((option) => (
                    <Chip
                      key={option}
                      label={option}
                      onClick={() => handlePersonalInsuranceToggle(option)}
                      color={
                        formData.personalInsurance.includes(option)
                          ? "primary"
                          : "default"
                      }
                      variant={
                        formData.personalInsurance.includes(option)
                          ? "filled"
                          : "outlined"
                      }
                      sx={{
                        px: 1,
                        py: 0.5,
                        "& .MuiChip-label": {
                          px: 1.5,
                        },
                      }}
                    />
                  ))}
                </Box>
              </Box>

              {/* Top Challenges */}
              <FormControl>
                <Typography variant="subtitle2" gutterBottom>
                  My top challenges with personal insurance: (select all that
                  apply)
                </Typography>
                <Stack spacing={0}>
                  {topChallengesOptions.map((challenge) => (
                    <FormControlLabel
                      key={challenge}
                      control={
                        <Checkbox
                          checked={formData.topChallenges.includes(challenge)}
                          onChange={() => handleTopChallengeToggle(challenge)}
                          size="small"
                        />
                      }
                      label={challenge}
                    />
                  ))}
                </Stack>
              </FormControl>
            </Stack>
          </DialogContent>

          <DialogActions sx={{ px: 3, py: 2 }}>
            <Button onClick={onClose} color="inherit" disabled={isSubmitting}>
              Cancel
            </Button>
            <Button type="submit" variant="contained" disabled={isSubmitting}>
              {isSubmitting ? "Joining..." : "Join Waitlist"}
            </Button>
          </DialogActions>
        </form>
      )}
    </Dialog>
  );
}

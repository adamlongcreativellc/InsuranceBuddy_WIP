"use client";

import { useState, useEffect } from "react";
import { X, Smartphone, Check } from "lucide-react";

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
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    if (open) {
      setIsVisible(true);
      document.body.style.overflow = "hidden";
    } else {
      const timer = setTimeout(() => setIsVisible(false), 300);
      document.body.style.overflow = "unset";
      return () => clearTimeout(timer);
    }
  }, [open]);

  if (!open && !isVisible) return null;

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    const newErrors: Record<string, string> = {};

    if (!formData.email) newErrors.email = "Email is required";
    if (!formData.platform) newErrors.platform = "Please select a platform";

    if (Object.keys(newErrors).length > 0) {
      setErrors(newErrors);
      return;
    }

    setIsSubmitting(true);

    // Simulate API call
    setTimeout(() => {
      setIsSubmitting(false);
      setSubmitted(true);
      setFormData({
        email: "",
        platform: "",
        personalInsurance: [],
        topChallenges: [],
      });
    }, 1500);
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
    <div className={`fixed inset-0 z-50 flex items-center justify-center p-4 sm:p-6 transition-opacity duration-300 ${open ? "opacity-100" : "opacity-0 pointer-events-none"}`}>
      <div
        className="absolute inset-0 bg-slate-900/60 backdrop-blur-md transition-opacity duration-300"
        onClick={onClose}
      />

      <div
        role="dialog"
        aria-modal="true"
        aria-labelledby="dialog-title"
        className={`
          relative w-full max-w-2xl bg-white rounded-2xl shadow-2xl border border-white/50 overflow-hidden flex flex-col max-h-[90vh]
          transform transition-all duration-300 ease-out
          ${open ? "scale-100 translate-y-0" : "scale-95 translate-y-4"}
        `}
      >
        <div className="flex items-center justify-between p-6 border-b border-slate-100">
          <h2 id="dialog-title" className="text-2xl font-bold text-slate-900">
            {submitted ? "Thank You" : "Join Early Access"}
          </h2>
          <button
            onClick={onClose}
            aria-label="Close dialog"
            className="p-2 rounded-full hover:bg-slate-100 text-slate-500 transition-colors"
          >
            <X className="w-6 h-6" />
          </button>
        </div>

        <div className="overflow-y-auto p-6">
          {submitted ? (
            <div className="flex flex-col items-center text-center py-8 gap-4">
              <div className="w-16 h-16 rounded-full bg-green-100 flex items-center justify-center text-green-600 mb-2">
                <Check className="w-8 h-8" />
              </div>
              <h3 className="text-xl font-bold text-slate-900">
                You&apos;re on the list!
              </h3>
              <p className="text-slate-600 max-w-md">
                We&apos;ll send you an invitation to join the beta as soon as
                spots open up.
              </p>
              <button
                onClick={() => {
                  setSubmitted(false);
                  onClose();
                }}
                className="mt-4 px-6 py-2 bg-slate-900 text-white rounded-lg font-semibold hover:bg-slate-800 transition-colors"
              >
                Close
              </button>
            </div>
          ) : (
            <form onSubmit={handleSubmit} className="flex flex-col gap-8">
              {errors.submit && (
                <div className="p-4 bg-red-50 text-red-600 rounded-lg text-sm font-medium">
                  {errors.submit}
                </div>
              )}

              <div className="flex flex-col gap-2">
                <label className="text-sm font-bold text-slate-700">
                  Email Address <span className="text-red-500">*</span>
                </label>
                <input
                  type="email"
                  required
                  value={formData.email}
                  placeholder="Enter your email address"
                  onChange={(e) =>
                    setFormData({ ...formData, email: e.target.value })
                  }
                  className={`
                    w-full px-4 py-3 rounded-xl border bg-slate-50 focus:bg-white transition-all outline-none focus:ring-2
                    ${errors.email
                      ? "border-red-300 focus:ring-red-200"
                      : "border-slate-200 focus:border-primary-500 focus:ring-primary-200"
                    }
                  `}
                  disabled={isSubmitting}
                />
                {errors.email && (
                  <p className="text-sm text-red-500 font-medium">{errors.email}</p>
                )}
              </div>

              <div className="flex flex-col gap-3">
                <label className="text-sm font-bold text-slate-700">
                  Which platform will you use? <span className="text-red-500">*</span>
                </label>
                <div className="grid grid-cols-2 gap-4">
                  {[
                    { id: "iOS", label: "iOS", icon: "🍎" },
                    { id: "Android", label: "Android", icon: <Smartphone className="w-5 h-5" /> }
                  ].map((platform) => (
                    <div
                      key={platform.id}
                      onClick={() => setFormData({ ...formData, platform: platform.id })}
                      className={`
                        cursor-pointer p-4 rounded-xl border-2 flex items-center justify-center gap-3 transition-all duration-200
                        ${formData.platform === platform.id
                          ? "border-primary-500 bg-primary-50 text-primary-700"
                          : "border-slate-200 hover:border-slate-300 hover:bg-slate-50 text-slate-600"
                        }
                      `}
                    >
                      <span className="text-xl">{platform.icon}</span>
                      <span className="font-bold">{platform.label}</span>
                    </div>
                  ))}
                </div>
                {errors.platform && (
                  <p className="text-sm text-red-500 font-medium">{errors.platform}</p>
                )}
              </div>

              <div className="flex flex-col gap-3">
                <label className="text-sm font-bold text-slate-700">
                  My personal insurance is: (select all that apply)
                </label>
                <div className="flex flex-wrap gap-2">
                  {personalInsuranceOptions.map((option) => (
                    <button
                      key={option}
                      type="button"
                      onClick={() => handlePersonalInsuranceToggle(option)}
                      className={`
                        px-3 py-1.5 rounded-full text-sm font-medium transition-all duration-200 border
                        ${formData.personalInsurance.includes(option)
                          ? "bg-primary-600 text-white border-primary-600 shadow-sm"
                          : "bg-white text-slate-600 border-slate-200 hover:border-slate-300 hover:bg-slate-50"
                        }
                      `}
                    >
                      {option}
                    </button>
                  ))}
                </div>
              </div>

              <div className="flex flex-col gap-3">
                <label className="text-sm font-bold text-slate-700">
                  My top challenges with personal insurance:
                </label>
                <div className="flex flex-col gap-2">
                  {topChallengesOptions.map((challenge) => (
                    <label
                      key={challenge}
                      className={`
                        flex items-start gap-3 p-3 rounded-xl border cursor-pointer transition-all duration-200
                        ${formData.topChallenges.includes(challenge)
                          ? "bg-primary-50 border-primary-200"
                          : "bg-white border-slate-200 hover:bg-slate-50"
                        }
                      `}
                    >
                      <div className={`
                        mt-0.5 w-5 h-5 rounded border flex items-center justify-center flex-shrink-0 transition-colors
                        ${formData.topChallenges.includes(challenge)
                          ? "bg-primary-600 border-primary-600 text-white"
                          : "border-slate-300 bg-white"
                        }
                      `}>
                        {formData.topChallenges.includes(challenge) && <Check className="w-3.5 h-3.5" />}
                      </div>
                      <input
                        type="checkbox"
                        className="hidden"
                        checked={formData.topChallenges.includes(challenge)}
                        onChange={() => handleTopChallengeToggle(challenge)}
                      />
                      <span className={`text-sm ${formData.topChallenges.includes(challenge) ? "text-primary-900 font-medium" : "text-slate-600"}`}>
                        {challenge}
                      </span>
                    </label>
                  ))}
                </div>
              </div>

              <div className="flex flex-col sm:flex-row gap-4 pt-4 border-t border-slate-100">
                <button
                  type="button"
                  onClick={onClose}
                  disabled={isSubmitting}
                  className="flex-1 px-6 py-3 rounded-xl font-bold text-slate-600 hover:bg-slate-100 transition-colors"
                >
                  Cancel
                </button>
                <button
                  type="submit"
                  disabled={isSubmitting}
                  className="flex-1 px-6 py-3 rounded-xl font-bold text-white bg-primary-600 hover:bg-primary-700 shadow-lg shadow-primary-500/30 transition-all hover:scale-[1.02] disabled:opacity-70 disabled:cursor-not-allowed"
                >
                  {isSubmitting ? "Joining..." : "Join Waitlist"}
                </button>
              </div>
            </form>
          )}
        </div>
      </div>
    </div>
  );
}

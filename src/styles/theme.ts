import { createTheme } from "@mui/material/styles";

// InsuranceBuddy brand colors
const brandColors = {
  primary: "#2688E3",
  primaryLight: "#4DA4F0",
  primaryDark: "#1B6BB8",
  secondary: "#ed6c02",
  secondaryLight: "#5DD574",
  secondaryDark: "#28A745",
  error: "#FF3B30",
  warning: "#FF9500",
  success: "#34C759",
  info: "#007AFF",
  background: "#FFFFFF",
  surface: "#F8F9FA",
  surfaceVariant: "#E9ECEF",
};

const bodyFontFamily = "'Open Sans', 'Segoe UI', Tahoma, sans-serif";
const headerFontFamily = "'Montserrat', 'Segoe UI', Tahoma, sans-serif";

export const theme = createTheme({
  palette: {
    primary: {
      main: brandColors.primary,
      light: brandColors.primaryLight,
      dark: brandColors.primaryDark,
      contrastText: "#FFFFFF",
    },
    secondary: {
      main: brandColors.secondary,
      light: brandColors.secondaryLight,
      dark: brandColors.secondaryDark,
      contrastText: "#FFFFFF",
    },
    error: {
      main: brandColors.error,
      light: "#FF6B6B",
      dark: "#E62E2E",
    },
    warning: {
      main: brandColors.warning,
      light: "#FFB84D",
      dark: "#E6850E",
    },
    info: {
      main: brandColors.info,
      light: "#4DA4F0",
      dark: "#0056CC",
    },
    success: {
      main: brandColors.success,
      light: "#5DD574",
      dark: "#28A745",
    },
    background: {
      default: brandColors.background,
      paper: brandColors.surface,
    },
    grey: {
      50: "#F8F9FA",
      100: "#E9ECEF",
      200: "#DEE2E6",
      300: "#CED4DA",
      400: "#ADB5BD",
      500: "#6C757D",
      600: "#495057",
      700: "#343A40",
      800: "#212529",
      900: "#121212",
    },
  },
  typography: {
    fontFamily: bodyFontFamily,
    button: {
      textTransform: "none",
    },
    h1: {
      fontFamily: headerFontFamily,
      fontWeight: 700,
    },
    h2: {
      fontFamily: headerFontFamily,
      fontWeight: 700,
    },
    h3: {
      fontFamily: headerFontFamily,
      fontWeight: 700,
    },
    h4: {
      fontFamily: headerFontFamily,
      fontWeight: 700,
    },
    h5: {
      fontFamily: headerFontFamily,
      fontWeight: 700,
    },
    h6: {
      fontFamily: headerFontFamily,
      fontWeight: 700,
    },
  },
  shape: {
    borderRadius: 6,
  },
  spacing: 8,
  components: {
    // Remove focus outlines globally
    MuiButtonBase: {
      styleOverrides: {
        root: {
          "&:focus": {
            outline: "none",
          },
          "&:focus-visible": {
            outline: "none",
          },
        },
      },
    },
    MuiButton: {
      styleOverrides: {
        root: {
          "&:focus": {
            outline: "none",
            boxShadow: "none",
          },
          "&:focus-visible": {
            outline: "none",
            boxShadow: "none",
          },
        },
      },
    },
    MuiIconButton: {
      styleOverrides: {
        root: {
          "&:focus": {
            outline: "none",
          },
          "&:focus-visible": {
            outline: "none",
          },
        },
      },
    },
    MuiAccordion: {
      styleOverrides: {
        root: {
          "&:focus": {
            outline: "none",
          },
          "&:focus-visible": {
            outline: "none",
          },
          "&::before": {
            display: "none",
          },
        },
      },
    },
    MuiAccordionSummary: {
      styleOverrides: {
        root: {
          "&:focus": {
            outline: "none",
          },
          "&:focus-visible": {
            outline: "none",
          },
          "&.Mui-focusVisible": {
            backgroundColor: "transparent",
          },
        },
      },
    },
    MuiTab: {
      styleOverrides: {
        root: {
          "&:focus": {
            outline: "none",
          },
          "&:focus-visible": {
            outline: "none",
          },
        },
      },
    },
    MuiBottomNavigationAction: {
      styleOverrides: {
        root: {
          "&:focus": {
            outline: "none",
          },
          "&:focus-visible": {
            outline: "none",
          },
          "&.Mui-selected": {
            outline: "none",
          },
        },
      },
    },
    MuiListItem: {
      styleOverrides: {
        root: {
          "&:focus": {
            outline: "none",
          },
          "&:focus-visible": {
            outline: "none",
          },
        },
      },
    },
    MuiListItemButton: {
      styleOverrides: {
        root: {
          "&:focus": {
            outline: "none",
          },
          "&:focus-visible": {
            outline: "none",
          },
        },
      },
    },
    MuiCard: {
      styleOverrides: {
        root: {
          "&:focus": {
            outline: "none",
          },
          "&:focus-visible": {
            outline: "none",
          },
        },
      },
    },
    MuiPaper: {
      styleOverrides: {
        root: {
          "&:focus": {
            outline: "none",
          },
          "&:focus-visible": {
            outline: "none",
          },
        },
      },
    },
  },
  breakpoints: {
    values: {
      xs: 0,
      sm: 600,
      md: 768,
      lg: 1024,
      xl: 1280,
    },
  },
});

// Dark theme variant
export const darkTheme = createTheme({
  ...theme,
  palette: {
    ...theme.palette,
    mode: "dark",
    primary: {
      main: brandColors.primaryLight,
      light: "#66B2FF",
      dark: brandColors.primaryDark,
      contrastText: "#000000",
    },
    background: {
      default: "#121212",
      paper: "#1E1E1E",
    },
    text: {
      primary: "#FFFFFF",
      secondary: "rgba(255, 255, 255, 0.7)",
    },
  },
});
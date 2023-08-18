import React from "react";
import CssBaseline from "@mui/material/CssBaseline";
import {
  alpha,
  createTheme,
  ThemeProvider as MUIThemeProvider,
} from "@mui/material/styles";

const PRIMARY = {
  lighter: "#f9e9e9",
  light: "#423e4e",
  main: "#000",
  dark: "#383030",
  darker: "#000",
  contrastText: "#fff",
};

const SECONDARY = {
  lighter: "#d6e4ff",
  light: "#84a9ff",
  main: "#3366ff",
  dark: "#1939b7",
  darker: "#091a7a",
  contrastText: "#fff",
};

const SUCCESS = {
  lighter: "#e9fcd4",
  light: "#aaf27f",
  main: "#54d62c",
  dark: "#229a16",
  darker: "#08660d",
  contrastText: "#fff",
};

const GREY = {
  0: "#fff",
  100: "#f9fafb",
  200: "#f4f6f8",
  300: "#dfe3e8",
  400: "#c4cdd5",
  500: "#919eab",
  600: "#637381",
  700: "#454f58",
  800: "#212b36",
  900: "#161c24",
  500_8: alpha("#919eab", 0.08),
  500_12: alpha("#919eab", 0.12),
  500_16: alpha("#919eab", 0.16),
  500_24: alpha("#919eab", 0.24),
  500_32: alpha("#919eab", 0.32),
  500_48: alpha("#919eab", 0.48),
  500_56: alpha("#919eab", 0.56),
  500_80: alpha("#919eab", 0.8),
};

function ThemeProvider({ children }) {
  const themeOptions = {
    palette: {
      primary: PRIMARY,
      secondary: SECONDARY,
      success: SUCCESS,
      text: { primary: GREY[800], secondary: GREY[600], disabled: GREY[500] },
      background: { paper: "#fff", default: "#fff", neutral: GREY[200] },
      action: {
        active: GREY[600],
        hover: GREY[500_8],
        selected: GREY[500_16],
        disabled: GREY[500_80],
        disabledBackground: GREY[500_24],
        focused: GREY[500_24],
        hoverOpacity: 0.08,
        disabledOpacity: 0.48,
      },
    },
    shape: { borderRadius: 8 },
  };

  const theme = createTheme(themeOptions);

  return (
    <div>
      <MUIThemeProvider theme={theme}>
        <CssBaseline />
        {children}
      </MUIThemeProvider>
    </div>
  );
}

export default ThemeProvider;

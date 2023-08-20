import { createTheme } from "@mui/material/styles";

const theme = createTheme({
  palette: {
    primary: {
      main: "#202020",
      light: "#353535",
      dark: "#181818",
    },
    secondary: {
      main: "#f1fefd",
    },
    error: {
      main: "#d74742",
    },
    warning: {
      main: "#ffa726",
    },
  },
  components: {
    MuiCssBaseline: {
      styleOverrides: {
        html: {
          boxSizing: "border-box",
        },
        "*, *::before, *::after": {
          boxSizing: "inherit",
        },
        body: {
          height: "100%",
          minHeight: "100vh",
          margin: 0,
          padding: 0,
          fontSize: "16px",
        },
      },
    },
    MuiTypography: {
      defaultProps: {
        lineHeight: "100%",
      },
    },
    MuiButtonBase: {
      defaultProps: {
        disableRipple: true,
      },
    },
  },
});

export default theme;

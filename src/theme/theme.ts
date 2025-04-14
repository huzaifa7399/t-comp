"use client";
import { createTheme } from "@mui/material/styles";

const theme = createTheme({
  palette: {
    primary: {
      main: "#04B1E9",
      light: "#0CB5DC80",
    },
    text: {
      primary: "#000",
      secondary: "#252525",
      disabled: "#B5B5B5",
    },
    background: {
      default: "#fff",
      paper: "#F7F7F7",
    },
  },
  typography: {
    fontFamily: "Inter, sans-serif",
    h1: { fontSize: "48px", fontWeight: 600 },
    h2: { fontSize: "24px", fontWeight: 700 },
    h3: { fontSize: "18px", fontWeight: 600 },
    h4: { fontSize: "14px", fontWeight: 400 },
    body2: { fontSize: "16px", fontWeight: 500, color: "#484848" },
  },
  components: {
    MuiLink: {
      styleOverrides: {
        root: {
          cursor: "pointer",
          textDecoration: "none",
          color: "inherit",
          "&:hover": {
            opacity: 0.8,
          },
        },
      },
    },
  },
});

export default theme;

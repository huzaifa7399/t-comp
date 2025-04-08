"use client";
import { createTheme } from "@mui/material/styles";

const theme = createTheme({
  palette: {
    primary: {
      main: "#04B1E9",
      navbar: "#0CB5DC80",
    },
    text: {
      primary: "#000",
      listTitle: "#252525",
      listHeading: "#B5B5B5",
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
    listTitle: { fontSize: "14px", fontWeight: 600 },
  },
  components: {
    MuiLink: {
      variants: [
        {
          props: { variant: "clickable" },
          style: {
            cursor: "pointer",
            textDecoration: "none",
            color: "inherit",
            "&:hover": { opacity: 0.8 },
          },
        },
      ],
    },
  },
});

export default theme;

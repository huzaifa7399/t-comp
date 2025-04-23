"use client";
import { Container, Theme, useMediaQuery } from "@mui/material";
import React, { FC, PropsWithChildren } from "react";

const LayoutContainer: FC<PropsWithChildren> = ({ children }) => {
  const isMobile = useMediaQuery((theme: Theme) =>
    theme.breakpoints.down("md")
  );
  return (
    <Container
      maxWidth="xl"
      sx={{
        pt: { xs: 1.5, md: 4 },
        pb: { xs: 1.5, md: 6 },
        px: { xs: 1, md: 4 },
        backgroundColor: isMobile ? "background.paper" : "background.default",
      }}
    >
      {children}
    </Container>
  );
};

export default LayoutContainer;

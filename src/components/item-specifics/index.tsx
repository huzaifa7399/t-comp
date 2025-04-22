"use client";

import React from "react";
import { Box, Typography, Grid } from "@mui/material";

const specifics = [
  { label: "Condition", value: "Used" },
  { label: "Screen Size", value: "15.4 Inch" },
  { label: "RAM", value: "16GB" },
  { label: "Storage", value: "256GB SSD" },
  { label: "CPU", value: "Intel Core i7" },
  { label: "Weight", value: "2.4kg" },
  // Add more if needed
];

const ItemSpecifics: React.FC = () => {
  return (
    <Box
      mt={5}
      p={3}
      sx={{
        border: "1px solid #e0e0e0",
        borderRadius: 2,
        bgcolor: "background.paper",
      }}
    >
      <Typography
        variant="subtitle2"
        sx={{
          mb: 2,
          textTransform: "uppercase",
          fontWeight: 600,
          letterSpacing: 1,
          color: "text.secondary",
        }}
      >
        Item specifics
      </Typography>

      <Grid container spacing={2}>
        {specifics.map((item, idx) => (
          <Grid size={{ xs: 12, md: 6 }} key={idx}>
            <Typography variant="body2" color="text.secondary">
              <strong>{item.label}:</strong> {item.value}
            </Typography>
          </Grid>
        ))}
      </Grid>
    </Box>
  );
};

export default ItemSpecifics;

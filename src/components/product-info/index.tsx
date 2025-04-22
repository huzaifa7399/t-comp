"use client";

import React from "react";
import { Typography, Button, Grid, Stack, Box } from "@mui/material";

interface ProductInfoProps {
  title: string;
  condition: string;
  lotSize: string;
  brand: string;
  price: string;
}

const ProductInfo: React.FC<ProductInfoProps> = ({
  title,
  condition,
  lotSize,
  brand,
  price,
}) => {
  return (
    <Grid container spacing={4} mt={2}>
      {/* Left: Info Section */}
      <Grid size={{ xs: 12, md: 8 }}>
        <Stack spacing={2}>
          <Typography
            variant="h5"
            sx={{
              fontWeight: 600,
              fontSize: { xs: "20px", sm: "24px", md: "28px" },
            }}
          >
            {title}
          </Typography>

          <Box>
            <Typography variant="body2" color="text.secondary" mb={0.5}>
              Condition: <b>{condition}</b>
            </Typography>
            <Typography variant="body2" color="text.secondary" mb={0.5}>
              Lot size: <b>{lotSize}</b>
            </Typography>
            <Typography variant="body2" color="text.secondary">
              Brand: <b>{brand}</b>
            </Typography>
          </Box>
        </Stack>
      </Grid>

      {/* Right: Price & Actions */}
      <Grid size={{ xs: 12, md: 4 }}>
        <Stack spacing={2} alignItems={{ xs: "stretch", md: "flex-end" }}>
          <Typography
            variant="h4"
            sx={{
              fontWeight: 700,
              color: "primary.main",
              textAlign: { xs: "left", md: "right" },
            }}
          >
            AED {price}
          </Typography>

          <Button
            variant="contained"
            fullWidth
            size="large"
            sx={{
              borderRadius: 2,
              textTransform: "none",
            }}
          >
            Place Bid
          </Button>

          <Button
            variant="outlined"
            fullWidth
            size="large"
            sx={{
              borderRadius: 2,
              textTransform: "none",
            }}
          >
            Buy It Now
          </Button>
        </Stack>
      </Grid>
    </Grid>
  );
};

export default ProductInfo;

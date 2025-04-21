"use client";

import React from "react";
import { Box, Typography, Stack, Divider } from "@mui/material";

interface SellerInfoProps {
  sellerName: string;
  location: string;
  registrationDate: string;
}

const SellerInfo: React.FC<SellerInfoProps> = ({
  sellerName,
  location,
  registrationDate,
}) => {
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
      <Stack spacing={1}>
        <Typography
          variant="caption"
          color="text.secondary"
          sx={{ textTransform: "uppercase", letterSpacing: 1 }}
        >
          Seller
        </Typography>

        <Typography variant="h6" fontWeight={600}>
          {sellerName}
        </Typography>

        <Divider sx={{ my: 1 }} />

        <Typography variant="body2" color="text.secondary">
          <strong>Location:</strong> {location}
        </Typography>

        <Typography variant="body2" color="text.secondary">
          <strong>Registered:</strong> {registrationDate}
        </Typography>
      </Stack>
    </Box>
  );
};

export default SellerInfo;

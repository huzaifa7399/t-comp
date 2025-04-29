"use client";

import React from "react";
import {
  Box,
  Grid,
  Paper,
  Typography,
  Stack,
  IconButton,
  Divider,
  Button,
  useMediaQuery,
  Theme,
  TextField,
} from "@mui/material";
import RemoveCircleOutlineIcon from "@mui/icons-material/RemoveCircleOutline";
import AddCircleOutlineIcon from "@mui/icons-material/AddCircleOutline";

const cartItems = [
  {
    id: "1",
    name: "Precision 5530: Intel Core i7, 8th Gen, 32GB RAM, 512GB SSD",
    image: "/sample-1.png",
    price: 549,
    serial: "103624781358",
    color: "Black",
    brand: "Dell",
    quantity: 1,
  },
  {
    id: "2",
    name: "Precision 5530: Intel Core i7, 8th Gen, 32GB RAM, 512GB SSD",
    image: "/sample-2.png",
    price: 549,
    serial: "103624781358",
    color: "Black",
    brand: "Dell",
    quantity: 1,
  },
];

const subtotal = cartItems.reduce(
  (sum, item) => sum + item.price * item.quantity,
  0
);

const CartPage: React.FC = () => {
  const isMobile = useMediaQuery((theme: Theme) =>
    theme.breakpoints.down("md")
  );

  return (
    <Box
      sx={{
        background: "#fafafa",
        minHeight: "100vh",
        p: { xs: 1, sm: 2, md: 5 },
      }}
    >
      <Grid container spacing={4} justifyContent="center">
        {/* Cart Items */}
        <Grid size={{ xs: 12, md: 8 }}>
          <Paper
            sx={{
              borderRadius: 2,
              boxShadow: "0 4px 16px rgba(44, 62, 80, 0.04)",
              p: { xs: 1, md: 3 },
            }}
          >
            {cartItems.map((item, idx) => (
              <Box key={item.id}>
                <Grid container spacing={2} alignItems="center">
                  {/* Product Image */}
                  <Grid size={{ xs: 3, sm: 2 }}>
                    <Box
                      component="img"
                      src={item.image}
                      alt={item.name}
                      sx={{
                        width: "100%",
                        maxWidth: 90,
                        borderRadius: 1,
                        border: "1px solid #eee",
                        objectFit: "contain",
                        background: "#fff",
                      }}
                    />
                  </Grid>

                  {/* Product Info */}
                  <Grid size={{ xs: 9, sm: 7 }}>
                    <Typography
                      variant="h3"
                      fontWeight={700}
                      sx={{ mb: 0.5, fontSize: "16px" }}
                    >
                      {item.name}
                    </Typography>
                    <Typography
                      variant="body2"
                      sx={{ fontWeight: 700, mb: 0.5 }}
                    >
                      AED {item.price.toFixed(2)}
                    </Typography>
                    <Typography
                      variant="body2"
                      sx={{ color: "#252525", fontSize: 13 }}
                    >
                      Serial Number: {item.serial}
                    </Typography>
                    <Typography
                      variant="body2"
                      sx={{ color: "#252525", fontSize: 13 }}
                    >
                      Color: {item.color}
                    </Typography>
                    <Typography
                      variant="body2"
                      sx={{ color: "#252525", fontSize: 13 }}
                    >
                      Brand: {item.brand}
                    </Typography>
                  </Grid>

                  {/* Quantity and Remove */}
                  <Grid
                    size={{ xs: 12, sm: 3 }}
                    sx={{ textAlign: { xs: "right", sm: "right" } }}
                  >
                    <Stack
                      direction="row"
                      justifyContent="flex-end"
                      alignItems="center"
                      spacing={1}
                    >
                      <IconButton
                        size="small"
                        sx={{ border: "1px solid #ddd", borderRadius: 1 }}
                      >
                        <RemoveCircleOutlineIcon fontSize="small" />
                      </IconButton>
                      <TextField
                        value={item.quantity}
                        size="small"
                        inputProps={{
                          style: { textAlign: "center", width: 28 },
                          min: 1,
                        }}
                        sx={{
                          width: 48,
                          mx: 0.5,
                          "& .MuiInputBase-root": { borderRadius: 1 },
                        }}
                        InputProps={{
                          readOnly: true,
                        }}
                      />
                      <IconButton
                        size="small"
                        sx={{ border: "1px solid #ddd", borderRadius: 1 }}
                      >
                        <AddCircleOutlineIcon fontSize="small" />
                      </IconButton>
                    </Stack>
                    <Button
                      variant="text"
                      color="inherit"
                      sx={{
                        mt: 1,
                        fontSize: 13,
                        textDecoration: "underline",
                        textAlign: "right",
                        minWidth: 0,
                        p: 0,
                        color: "#252525",
                      }}
                    >
                      Remove
                    </Button>
                  </Grid>
                </Grid>
                {idx !== cartItems.length - 1 && <Divider sx={{ my: 2 }} />}
              </Box>
            ))}
          </Paper>
        </Grid>

        {/* Cart Summary */}
        <Grid
          size={{ xs: 12, md: 4 }}
          display="flex"
          flexDirection="column"
          alignItems="center"
        >
          <Paper
            sx={{
              width: "100%",
              p: { xs: 2, md: 3 },
              mt: isMobile ? 3 : 0,
              borderRadius: 6,
              boxShadow: "none",
              background: "#fff",
              minWidth: 260,
            }}
          >
            <Stack
              direction="row"
              justifyContent="space-between"
              alignItems="center"
              mb={1}
            >
              <Typography
                variant="h4"
                color="primary.main"
                sx={{ fontWeight: 600, fontSize: 16 }}
              >
                Subtotal
              </Typography>
              <Typography
                variant="h4"
                color="primary.main"
                sx={{ fontWeight: 600, fontSize: 16 }}
              >
                {subtotal.toFixed(2)}
              </Typography>
            </Stack>
            <Stack
              direction="row"
              justifyContent="space-between"
              alignItems="center"
              mb={2}
            >
              <Typography
                variant="h3"
                color="text.primary"
                sx={{ fontWeight: 700, fontSize: 18 }}
              >
                Order Total
              </Typography>
              <Typography
                variant="h3"
                color="text.primary"
                sx={{ fontWeight: 700, fontSize: 18 }}
              >
                {subtotal.toFixed(2)}
              </Typography>
            </Stack>
            <Button
              variant="contained"
              fullWidth
              sx={{
                bgcolor: "primary.main",
                color: "#fff",
                fontWeight: 600,
                fontSize: "1rem",
                borderRadius: "30px",
                py: 1.5,
                mt: 2,
                boxShadow: "none",
                "&:hover": {
                  bgcolor: "primary.main",
                  opacity: 0.9,
                },
              }}
            >
              GO TO CHECKOUT
            </Button>
          </Paper>
        </Grid>
      </Grid>
    </Box>
  );
};

export default CartPage;

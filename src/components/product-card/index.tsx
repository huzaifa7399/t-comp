import React from "react";
import {
  Card,
  CardContent,
  Typography,
  Box,
  Divider,
  Stack,
  Link,
} from "@mui/material";
import Image from "next/image";

type Product = {
  id: string;
  title: string;
  condition: string;
  lotSize: string;
  brand: string;
  price: number;
  endsIn: string;
  image: string;
  bids: number;
};

type ProductCardProps = {
  product: Product;
};

const ProductCard: React.FC<ProductCardProps> = ({ product }) => {
  return (
    <Card
      variant="outlined"
      elevation={1}
      sx={{
        height: "100%",
        display: "flex",
        flexDirection: "column",
        justifyContent: "space-between",
        borderRadius: "8px",
        backgroundColor: "#fff",
        border: "0.66px solid #B5B5B566",
      }}
    >
      <Box
        sx={{
          display: "flex",
          justifyContent: "center",
          px: 4,
          py: 1,
          height: "180px",
        }}
      >
        <Image
          height="160"
          width="160"
          alt={product.title}
          src={product.image}
        />
      </Box>

      <CardContent sx={{ flexGrow: 1, px: 0 }}>
        <Typography variant="h4" fontWeight={600} sx={{ mb: 1, px: 1.5 }}>
          {product.title}
        </Typography>

        <Stack sx={{ mb: 1, width: "100%", px: 1.5 }} gap="12px">
          {[
            {
              key: "Condition",
              value: product.condition,
            },
            {
              key: "Lot size",
              value: product.lotSize,
            },
            {
              key: "Brand",
              value: product.brand,
            },
          ].map(({ key, value }) => {
            return (
              <Stack
                key={key}
                direction="row"
                justifyContent="space-between"
                alignItems="center"
              >
                <Typography variant="h4" color="text.disabled">
                  {key}
                </Typography>
                <Typography
                  variant="h4"
                  fontWeight={600}
                  color="text.secondary"
                >
                  {value}
                </Typography>
              </Stack>
            );
          })}
        </Stack>
        <Divider sx={{ my: 2 }} />

        <Stack
          direction="row"
          justifyContent="space-between"
          sx={{ mb: 1, width: "100%", px: 1.5 }}
          gap="12px"
        >
          <Typography variant="h4" fontWeight={600} color="text.secondary">
            AED {product.price.toFixed(2)}
            <span
              style={{ marginLeft: "4px", fontSize: "10px", color: "#B5B5B5" }}
            >
              {product.bids} bids
            </span>
          </Typography>
          <Typography variant="h4" fontWeight={600} color="text.secondary">
            Ends in {product.endsIn}
          </Typography>
        </Stack>
      </CardContent>

      <Box
        sx={{
          p: 2,
          pt: 0,
          display: "flex",
          justifyContent: "center",
        }}
      >
        <Link
          underline="none"
          sx={{
            backgroundColor: "primary.main",
            color: "white",
            py: "12px",
            width: "100%",
            textAlign: "center",
            borderRadius: "100px",
            fontSize: "14px",
            fontWeight: 500,
            "&:hover": {
              backgroundColor: "primary.main",
              opacity: 0.8,
            },
          }}
        >
          Bid now
        </Link>
      </Box>
    </Card>
  );
};

export default ProductCard;

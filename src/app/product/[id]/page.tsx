"use client";

import React from "react";
import { Box, Grid, Container } from "@mui/material";
import ProductInfo from "@/components/product-info";
import SellerInfo from "@/components/seller-info";
import ItemSpecifics from "@/components/item-specifics";
import Reviews from "@/components/reviews";
import dynamic from "next/dynamic";
import SearchHeader from "@/components/search-header";

const ProductImageCarousel = dynamic(
  () => import("@/components/product-image-carousel"),
  { ssr: false }
);

const productData = {
  title: "Precision 5530: Intel Core i7, 8th Gen, 32GB RAM, 512GB SSD",
  condition: "Used",
  lotSize: "11 items / 165 Lbs",
  brand: "Dell",
  price: "1499.00",
  images: ["/sample-1.png", "/sample-2.png", "/sample-3.png", "/sample-4.png"],
  sellerName: "Transpere LLC",
  location: "Dubai, Lorem",
  registrationDate: "December, 2024",
};

const ProductPage: React.FC = () => {
  return (
    <Container maxWidth="lg" sx={{ py: 4 }}>
      <SearchHeader />
      {/* Top Section: Images + Info */}
      <Grid container spacing={4}>
        {/* Images */}
        <Grid size={{ xs: 12, md: 6 }}>
          <ProductImageCarousel images={productData.images} />
        </Grid>

        {/* Info & Price */}
        <Grid size={{ xs: 12, md: 6 }}>
          <ProductInfo
            title={productData.title}
            condition={productData.condition}
            lotSize={productData.lotSize}
            brand={productData.brand}
            price={productData.price}
          />
        </Grid>
      </Grid>

      {/* Seller Info + Item Specifics */}
      <Box mt={5}>
        <Grid container spacing={4}>
          <Grid size={{ xs: 12, md: 6 }}>
            <SellerInfo
              sellerName={productData.sellerName}
              location={productData.location}
              registrationDate={productData.registrationDate}
            />
          </Grid>
          <Grid size={{ xs: 12, md: 6 }}>
            <ItemSpecifics />
          </Grid>
        </Grid>
      </Box>

      {/* Reviews */}
      <Box mt={6}>
        <Reviews />
      </Box>
    </Container>
  );
};

export default ProductPage;

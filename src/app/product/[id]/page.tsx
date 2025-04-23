"use client";
import React from "react";
import { Box, Grid, Theme, useMediaQuery } from "@mui/material";
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
  images: [
    "/sample-1.png",
    "/sample-2.png",
    "/sample-3.png",
    "/sample-4.png",
    "/sample-4.png",
  ],
  sellerName: "Transpere LLC",
  location: "Dubai, Lorem",
  registrationDate: "December, 2024",
  auctionId: "123456789",
  currentBid: 1499.0,
  auctionEndTime: "2025-04-31T23:59:59Z",
  totalBids: 10,
  sellerLocation: "Dubai, Lorem",
  sellerRegistrationDate: "December, 2024",
  sellerAuctionCount: 5,
  sellerActiveAuctions: 2,
  sellerRating: "New seller",
  currentPeopleWatching: 3,
  policies: {
    shipping: "Lightning-fast shipping, guaranteed.",
    inStock:
      "Upgrade your tech collection with the latest must-have item, available now in limited quantities.",
    pickUp: "Pickup available at Shop location Usually ready in 24 hours",
    return: `
      14-Day Returns
      <br/>
      Shop risk-free with easy returns.
      `,
  },
};

const ProductPage: React.FC = () => {
  const isMobile = useMediaQuery((theme: Theme) =>
    theme.breakpoints.down("md")
  );

  return (
    <Box>
      <SearchHeader />
      <Grid container spacing={isMobile ? "12px" : "49px"}>
        <Grid size={{ xs: 12, md: 7.5 }}>
          <ProductImageCarousel images={productData.images} />
        </Grid>

        <Grid size={{ xs: 12, md: 4.5 }}>
          <ProductInfo
            title={productData.title}
            condition={productData.condition}
            lotSize={productData.lotSize}
            brand={productData.brand}
            price={productData.price}
            auctionId={productData.auctionId}
            currentBid={productData.currentBid}
            auctionEndTime={productData.auctionEndTime}
            totalBids={productData.totalBids}
            sellerName={productData.sellerName}
            sellerLocation={productData.sellerLocation}
            sellerRegistrationDate={productData.sellerRegistrationDate}
            sellerAuctionCount={productData.sellerAuctionCount}
            sellerRating={productData.sellerRating}
            sellerActiveAuctions={productData.sellerActiveAuctions}
            currentPeopleWatching={productData.currentPeopleWatching}
            policies={productData.policies}
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
    </Box>
  );
};

export default ProductPage;

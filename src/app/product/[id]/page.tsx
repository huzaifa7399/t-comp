"use client";
import React from "react";
import {
  Box,
  Grid,
  Link,
  Stack,
  Theme,
  Typography,
  useMediaQuery,
} from "@mui/material";
import ProductInfo from "@/components/product-info";
import dynamic from "next/dynamic";
import SearchHeader from "@/components/search-header";
import Slider from "@/components/slider";
import ItemDescriptionFromSeller from "@/components/item-description-from-seller";
import ItemSpecifics from "@/components/item-specifics";
import ReviewsSlider from "@/components/reviews-slider";

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
  itemSpecifics: [
    { label: "Operation System version", value: "Windows 10 Pro" },
    { label: "Display type", value: "Full HD" },
    { label: "Screen Size", value: "15.54 Inch" },
    { label: "Generation", value: "I5-10310U CPU @ 1.70GHZ" },
    { label: "What's In the Box", value: "Laptop & Charger" },
    { label: "Processor", value: "INTEL(R) CORE(TM) I5" },
    { label: "Average Battery Life", value: "3-4 Hours" },
    { label: "Keyboard Language", value: "English" },
    { label: "Model Name", value: "Dell LATITUDE 3510" },
    { label: "Serial No", value: "10321501780" },
    { label: "Brand", value: "Dell" },
    { label: "RAM", value: "16GB" },
    { label: "Storage", value: "256GB" },
  ],
  conditionDescription:
    "m has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. Read more",
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

      <Stack flexDirection={isMobile ? "column-reverse" : "column"}>
        <Box mt="40px">
          <Slider />
        </Box>
        <Box>
          <Stack
            direction="row"
            justifyContent="space-between"
            alignItems="center"
            mt={isMobile ? 3 : 0}
          >
            <Typography
              variant="h4"
              fontWeight={700}
              sx={{
                border: "1px solid #e5e5e5",
                borderRadius: "3px",
                p: "10px 12px",
                maxWidth: "max-content",
                bgcolor: isMobile ? "#fff" : "",
                color: isMobile ? "#290064" : "",
              }}
            >
              About this item
            </Typography>
            <Link sx={{ textDecoration: "underline" }}>Report this item</Link>
          </Stack>
          <Box
            sx={{
              border: isMobile ? "" : "1px solid #e5e5e5",
              borderRadius: "3px",
              mt: "24px",
              p: "16px",
            }}
          >
            <Stack
              direction={isMobile ? "column" : "row"}
              justifyContent="space-between"
              alignItems={isMobile ? "start" : "center"}
              mt={!isMobile ? 5 : 0}
            >
              <Typography variant="h4" color="#484848">
                Seller assumes all responsibility for this listing.
              </Typography>

              <Typography variant="h4" color="#484848">
                Serial Number:{" "}
                <span
                  style={{
                    color: "#50D692",
                    marginLeft: "10px",
                  }}
                >
                  932840982
                </span>
              </Typography>
            </Stack>
            <Grid container spacing={4}>
              <Grid size={{ xs: 12, md: 6 }}>
                <ItemSpecifics
                  condition={productData.condition}
                  conditionDescription={productData.conditionDescription}
                  itemSpecifics={productData.itemSpecifics}
                />
              </Grid>
              {!isMobile && (
                <Grid size={{ xs: 12, md: 6 }}>
                  <ItemDescriptionFromSeller />
                </Grid>
              )}
            </Grid>
          </Box>
        </Box>
      </Stack>

      <Box mt={6}>
        <ReviewsSlider isMobile={isMobile} />
      </Box>
    </Box>
  );
};

export default ProductPage;

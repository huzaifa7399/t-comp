"use client";
import React, { FC } from "react";
import { Splide, SplideSlide } from "@splidejs/react-splide";
import "@splidejs/react-splide/css";
import { Box, Stack, Typography } from "@mui/material";
import { sampleData } from "@/constants";
import ProductCard from "../product-card";

const Slider: FC = () => {
  return (
    <Stack gap={1} mb={4}>
      <Typography
        sx={{
          fontSize: { xs: "32px", md: "48px" },
          fontWeight: 600,
        }}
      >
        Similar Products
      </Typography>
      <Typography variant="h4" color="text.disabled" mb={2}>
        See what deals are selling fast
      </Typography>

      <Box px={{ xs: 0, md: 4 }}>
        <Splide
          aria-label="Product Slider"
          options={{
            perPage: 4,
            gap: "1rem",
            pagination: false,
            arrows: true,
            breakpoints: {
              1024: { perPage: 3 },
              768: { perPage: 2 },
              480: {
                perPage: 1,
                padding: { right: "90px" },
                gap: "1rem",
              },
            },
          }}
        >
          {[...sampleData, ...sampleData].map((product, idx) => (
            <SplideSlide key={idx}>
              <ProductCard product={product} />
            </SplideSlide>
          ))}
        </Splide>
      </Box>
    </Stack>
  );
};

export default Slider;

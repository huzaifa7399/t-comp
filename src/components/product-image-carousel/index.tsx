"use client";

import React from "react";
import { Box, Stack } from "@mui/material";
import { Splide, SplideSlide } from "@splidejs/react-splide";
import "@splidejs/react-splide/css";
import Image from "next/image";

interface ProductImageCarouselProps {
  images: string[];
}

const ProductImageCarousel: React.FC<ProductImageCarouselProps> = ({
  images,
}) => {
  return (
    <Stack spacing={2}>
      {/* Main Image */}
      <Box
        sx={{
          position: "relative",
          border: "1px solid #e0e0e0",
          borderRadius: 2,
          p: { xs: 1.5, md: 2 },
          bgcolor: "background.paper",
        }}
      >
        <Splide
          options={{
            type: "slide",
            arrows: true,
            pagination: false,
            perPage: 1,
            gap: "1rem",
            height: "auto",
            breakpoints: {
              768: {
                gap: "0.5rem",
              },
            },
          }}
          aria-label="Main Product Images"
        >
          {images.map((img, idx) => (
            <SplideSlide key={idx}>
              <Box
                sx={{
                  position: "relative",
                  width: "100%",
                  height: { xs: 280, sm: 320, md: 400 },
                  display: "flex",
                  alignItems: "center",
                  justifyContent: "center",
                }}
              >
                <Image
                  src={img}
                  alt={`Product image ${idx + 1}`}
                  fill
                  style={{
                    objectFit: "contain",
                  }}
                  sizes="(max-width: 768px) 100vw, 700px"
                />
              </Box>
            </SplideSlide>
          ))}
        </Splide>
      </Box>

      {/* Thumbnails */}
      <Box sx={{ px: 0.5 }}>
        <Splide
          options={{
            fixedWidth: 80,
            gap: "0.5rem",
            rewind: true,
            pagination: false,
            isNavigation: true,
            focus: "center",
            arrows: false,
            breakpoints: {
              768: {
                fixedWidth: 60,
              },
            },
          }}
          aria-label="Product Thumbnails"
        >
          {images.map((img, idx) => (
            <SplideSlide key={`thumb-${idx}`}>
              <Box
                sx={{
                  position: "relative",
                  width: "80px",
                  height: "60px",
                  borderRadius: 1,
                  border: "2px solid transparent",
                  overflow: "hidden",
                  cursor: "pointer",
                  "&.is-active": {
                    borderColor: "#04B1E9", // highlight active thumbnail
                  },
                }}
                className="thumbnail-slide"
              >
                <Image
                  src={img}
                  alt={`Thumbnail ${idx + 1}`}
                  fill
                  style={{ objectFit: "cover" }}
                />
              </Box>
            </SplideSlide>
          ))}
        </Splide>
      </Box>
    </Stack>
  );
};

export default ProductImageCarousel;

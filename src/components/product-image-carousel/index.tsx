"use client";

import React, { useRef } from "react";
import {
  Box,
  Grid,
  Link,
  Stack,
  Theme,
  Typography,
  useMediaQuery,
} from "@mui/material";
import { Splide, SplideSlide } from "@splidejs/react-splide";
import "@splidejs/react-splide/css";
import type SplideClass from "@splidejs/splide";
import Image from "next/image";
import { sampleData } from "@/constants";
import ProductCard from "../product-card";

interface ProductImageCarouselProps {
  images: string[];
}

const ProductImageCarousel: React.FC<ProductImageCarouselProps> = ({
  images,
}) => {
  const isMobile = useMediaQuery((theme: Theme) =>
    theme.breakpoints.down("md")
  );
  const splideRef = useRef<SplideClass | null>(null);

  const goToSlide = (index: number) => {
    splideRef.current?.go(index); // ✅ works perfectly
  };
  return (
    <Stack spacing={2}>
      <Box
        sx={{
          border: `1px solid ${isMobile ? "#000" : "#e0e0e0"}`,
          borderRadius: 2,
          p: { xs: 1.5, md: 2 },
          bgcolor: "background.default",
          boxShadow: isMobile
            ? "0px 0px 12.48px 0px #0000001A"
            : "0px 0px 25px 0px #0000001A",
        }}
      >
        <Splide
          ref={splideRef}
          className="main-product-carousel"
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
          key={2}
          aria-label="Main Product Images"
        >
          {images.map((img, idx) => (
            <SplideSlide key={idx}>
              <Box
                sx={{
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
      {!isMobile && (
        <Box sx={{ py: 0.5, display: "flex", justifyContent: "space-between" }}>
          {images.map((img, idx) => (
            <Box
              key={`thumb-${idx}`}
              onClick={() => goToSlide(idx)}
              sx={{
                width: "128px",
                height: "128px",
                borderRadius: "8px",
                border: "none",
                overflow: "hidden",
                cursor: "pointer",
                bgcolor: "background.default",
                boxShadow: "0px 0px 31.07px 0px #0000001A",
                padding: "20px",
              }}
            >
              <Image
                src={img}
                alt={`Thumbnail ${idx + 1}`}
                height={150}
                width={150}
              />
            </Box>
          ))}
        </Box>
      )}
      <Typography
        variant="h4"
        color="primary.main"
        sx={{
          textDecoration: "underline",
          cursor: "pointer",
        }}
      >
        Watch more of this product
      </Typography>
      {!isMobile && (
        <Stack gap={2}>
          <Stack
            direction="row"
            justifyContent="space-between"
            alignItems="center"
            mt="20px"
          >
            <Typography variant="h4" fontWeight={700}>
              Similar Items
            </Typography>
            <Link sx={{ textDecoration: "underline" }}>See all</Link>
          </Stack>
          <Grid container spacing={2}>
            {sampleData.slice(0, 3).map((product, id) => (
              <Grid size={{ xs: 12, sm: 6, md: 4, lg: 4 }} key={id}>
                <ProductCard product={product} />
              </Grid>
            ))}
          </Grid>
        </Stack>
      )}{" "}
    </Stack>
  );
};

export default ProductImageCarousel;

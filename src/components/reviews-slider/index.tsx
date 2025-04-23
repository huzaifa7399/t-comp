"use client";

import React from "react";
import { Box, Typography, Avatar, Stack } from "@mui/material";
import { Splide, SplideSlide } from "@splidejs/react-splide";
import "@splidejs/react-splide/css";

type ReviewProps = {
  isMobile: boolean;
};

const reviews = [
  {
    name: "e***3",
    stars: 5,
    avatar: "/user1.jpg",
    time: "Past 6 months",
    content: `Absolutely phenomenal experience! Seller exceeded all expectations in every possible way. Item arrived faster than lightning, packaged with the care of a rare artifact, and in even better condition than described. Communication was top-notch, and the seller went above and beyond to ensure a smooth transaction.`,
  },
  {
    name: "e***3",
    stars: 5,
    avatar: "/user2.jpg",
    time: "Past 6 months",
    content: `Absolutely phenomenal experience! Seller exceeded all expectations in every possible way. Item arrived faster than lightning, packaged with the care of a rare artifact, and in even better condition than described. Communication was top-notch, and the seller went above and beyond to ensure a smooth transaction.`,
  },
  {
    name: "e***3",
    stars: 5,
    avatar: "/user3.jpg",
    time: "Past 6 months",
    content: `Absolutely phenomenal experience! Seller exceeded all expectations in every possible way. Item arrived faster than lightning, packaged with the care of a rare artifact, and in even better condition than described. Communication was top-notch, and the seller went above and beyond to ensure a smooth transaction.`,
  },
];

const getStars = (count: number) => "🌟".repeat(count);
// "⭐️"
const ReviewsSlider: React.FC<ReviewProps> = ({ isMobile }) => {
  return (
    <Box
      sx={{
        background: "#f7f7f7",
        py: { xs: 2, md: 6 },
        px: {
          xs: 0,
          md: 8,
        },
        mx: isMobile ? "" : "-32px",
      }}
    >
      <Typography
        variant="h1"
        align="center"
        fontWeight={700}
        gutterBottom
        sx={{ mb: 5 }}
      >
        Reviews
      </Typography>

      <Splide
        className="reviews-slider"
        options={{
          type: "slide",
          perPage: 3,
          gap: "32px",
          arrows: false,
          pagination: true,
          breakpoints: {
            900: { perPage: 2 },
            600: { perPage: 1 },
          },
        }}
        aria-label="Reviews Slider"
      >
        {reviews.map((review, idx) => (
          <SplideSlide key={idx}>
            <Box sx={{ px: 1, height: "100%" }}>
              <Box sx={{ display: "flex", justifyContent: "center", mb: -4 }}>
                <Avatar
                  src={review.avatar}
                  alt={review.name}
                  sx={{
                    width: 84,
                    height: 84,
                  }}
                />
              </Box>
              <Box
                sx={{
                  pt: 6,
                  pb: 3,
                  px: 3,
                  border: "0.66px solid #b5b5b5",
                  borderRadius: 2,
                  display: "flex",
                  flexDirection: "column",
                  justifyContent: "flex-start",
                  bgcolor: "#fff",
                }}
              >
                <Stack direction="row" spacing={1} alignItems="center" mb={0.5}>
                  <Typography variant="caption">
                    {review.name} (236) &bull; {review.time}
                  </Typography>
                </Stack>
                <Stack>
                  <Typography variant="body2" fontWeight={400} sx={{ mt: 1 }}>
                    <span
                      style={{
                        color: "#FDC45E",
                        fontSize: 18,
                      }}
                    >
                      {getStars(review.stars)}
                    </span>
                    {`"${review.content}"`}
                  </Typography>
                </Stack>
              </Box>
            </Box>
          </SplideSlide>
        ))}
      </Splide>
    </Box>
  );
};

export default ReviewsSlider;

"use client";

import React from "react";
import { Box, Typography, Avatar, Stack, Paper, Grid } from "@mui/material";

const reviews = [
  {
    name: "John D.",
    avatar: "/user1.jpg",
    comment: "Great product, fast shipping. Would buy again!",
  },
  {
    name: "Emily R.",
    avatar: "/user2.jpg",
    comment: "Accurate description and smooth transaction.",
  },
  {
    name: "Carlos M.",
    avatar: "/user3.jpg",
    comment: "Excellent condition. Worth the price!",
  },
];

const Reviews: React.FC = () => {
  return (
    <Box mt={5}>
      <Typography
        variant="subtitle2"
        sx={{
          textTransform: "uppercase",
          fontWeight: 600,
          letterSpacing: 1,
          mb: 3,
          color: "text.secondary",
        }}
      >
        Reviews
      </Typography>

      <Grid container spacing={2}>
        {reviews.map((review, idx) => (
          <Grid item xs={12} sm={6} md={4} key={idx}>
            <Paper
              elevation={1}
              sx={{
                p: 2,
                borderRadius: 2,
                height: "100%",
              }}
            >
              <Stack direction="row" spacing={2} alignItems="flex-start">
                <Avatar src={review.avatar} alt={review.name} />
                <Box>
                  <Typography variant="subtitle2" fontWeight={600}>
                    {review.name}
                  </Typography>
                  <Typography variant="body2" color="text.secondary" mt={0.5}>
                    {review.comment}
                  </Typography>
                </Box>
              </Stack>
            </Paper>
          </Grid>
        ))}
      </Grid>
    </Box>
  );
};

export default Reviews;

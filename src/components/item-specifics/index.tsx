"use client";
import React from "react";
import { Box, Typography, Grid, Link } from "@mui/material";

interface ItemSpecific {
  label: string;
  value: string;
}
interface ItemSpecificsProps {
  condition: string;
  conditionDescription: string;
  itemSpecifics: ItemSpecific[];
}

const ItemSpecifics: React.FC<ItemSpecificsProps> = ({
  condition,
  conditionDescription,
  itemSpecifics,
}) => {
  return (
    <Box>
      <Typography variant="h6" fontWeight={700} mb={2}>
        Item specifics
      </Typography>

      <Box display="flex" alignItems="baseline" mb={2}>
        <Typography variant="h4" color="#484848" sx={{ minWidth: 90 }}>
          Condition
        </Typography>
        <Typography variant="h4" color="#000" sx={{ ml: 1 }}>
          {condition} &nbsp;
          <span style={{ color: "#000" }}>{conditionDescription}</span>
          <Link
            sx={{
              ml: 1,
              textDecoration: "underline",
              cursor: "pointer",
            }}
          >
            Read more
          </Link>
        </Typography>
      </Box>
      <Grid container spacing={1}>
        {itemSpecifics.map((item, idx) => (
          <React.Fragment key={idx}>
            <Grid
              size={{
                xs: 6,
                md: 5,
              }}
            >
              <Typography variant="h4" color="#484848">
                {item.label}
              </Typography>
            </Grid>
            <Grid
              size={{
                xs: 6,
                md: 7,
              }}
            >
              <Typography variant="h4" color="#000">
                {item.value}
              </Typography>
            </Grid>
          </React.Fragment>
        ))}
      </Grid>
    </Box>
  );
};

export default ItemSpecifics;

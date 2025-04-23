"use client";

import React from "react";
import { Typography, Stack } from "@mui/material";

const ItemDescriptionFromSeller: React.FC = () => {
  return (
    <Stack mt={5} gap={1}>
      <Typography variant="h2">Item description from the seller </Typography>
      <Typography variant="body2" color="#484848" fontWeight={400}>
        Lorem, ipsum dolor sit amet consectetur adipisicing elit. Itaque
        inventore possimus, sunt eum ipsam molestias dignissimos at neque ea
        laboriosam tempora facilis, optio dolores amet consequuntur pariatur
        placeat, error voluptas. Lorem ipsum dolor sit amet consectetur
        adipisicing elit. Explicabo iusto nisi tenetur voluptas molestias eaque
        enim minima voluptatibus commodi illum pariatur, veniam obcaecati sed
        inventore, error nobis consequuntur? Vitae, quasi?{" "}
      </Typography>
    </Stack>
  );
};

export default ItemDescriptionFromSeller;

/* eslint-disable @typescript-eslint/no-unused-vars */
"use client";
import React, { FC } from "react";
import {
  Box,
  Typography,
  FormControl,
  FormControlLabel,
  RadioGroup,
  Radio,
  Checkbox,
  Divider,
  Slider,
  TextField,
  Stack,
} from "@mui/material";
import CheckIcon from "@mui/icons-material/Check";

const brands = [
  { name: "All", quantity: 500 },
  { name: "Lenovo", quantity: 500 },
  { name: "Microsoft", quantity: 22 },
  { name: "Apple", quantity: 232 },
  { name: "Dell", quantity: 32 },
  { name: "Hp", quantity: 112 },
];

const priceMarks = [
  { value: 1000, label: "AED: 1k" },
  { value: 2000, label: "2k" },
  { value: 3000, label: "3k" },
  { value: 4000, label: "4k" },
  { value: 5000, label: "5k" },
];

const priceRanges = [
  { value: 1000, label: "AED: 1k to 2k" },
  { value: 2000, label: "AED: 2k to 3k" },
  { value: 3000, label: "AED: 3k to 4k" },
  { value: 4000, label: "AED: 4k to 5k" },
  { value: 5000, label: "AED: 5k to 6k" },
];

const FilterSidebar: FC = () => {
  return (
    <Box
      sx={{
        width: { xs: "100%", md: 250 },
        pr: { md: 3 },
        mb: { xs: 3, md: 0 },
      }}
    >
      <Typography
        variant="h4"
        fontWeight="bold"
        mb={1.5}
        sx={{
          textDecoration: "underline",
        }}
      >
        Reset all filters
      </Typography>
      <Stack direction="row" spacing={1} mb={4} alignItems="center">
        <Typography
          bgcolor="primary.main"
          color="background.default"
          variant="h4"
          fontWeight={600}
          p="4px 10px"
          borderRadius={1}
        >
          223
        </Typography>
        <Typography color="text.primary" variant="h4" fontWeight={600}>
          Auctions
        </Typography>
        <Typography color="primary.main" variant="h4" fontWeight={600}>
          Show all
        </Typography>
      </Stack>
      {/* Sort */}
      <Typography variant="h4" fontWeight="bold" mb={1}>
        Sort
      </Typography>
      <FormControl component="fieldset" fullWidth>
        <RadioGroup defaultValue="current" name="sort-options">
          {[
            { label: "Best fit", value: "best" },
            { label: "Current bid", value: "current" },
            { label: "Closing soon", value: "closing" },
            { label: "Latest online", value: "latest" },
          ].map((option) => (
            <FormControlLabel
              key={option.value}
              value={option.value}
              control={<Radio />}
              label={<Typography variant="h4">{option.label}</Typography>}
            />
          ))}
        </RadioGroup>
      </FormControl>

      <Divider sx={{ my: 2 }} />

      {/* Brand */}
      <Typography variant="h4" fontWeight="bold" mb={1}>
        Brand
      </Typography>
      <FormControl component="fieldset" fullWidth>
        {brands.map(({ name, quantity }, index) => (
          <FormControlLabel
            key={index}
            control={
              <Checkbox
                icon={
                  <Box
                    sx={{
                      width: 16,
                      height: 16,
                      border: "1px solid #b5b5b5",
                      borderRadius: "4px",
                      backgroundColor: "#fff",
                    }}
                  />
                }
                checkedIcon={
                  <CheckIcon
                    sx={{
                      color: "#000",
                    }}
                  />
                }
                sx={{
                  color: "#b5b5b5",
                  "&.Mui-checked": {
                    color: "#04B1E9",
                  },
                  "& .MuiSvgIcon-root": {
                    fontSize: 16,
                    borderRadius: "4px",
                    border: "none",
                  },
                  "&.Mui-checked .MuiSvgIcon-root": {
                    border: "1px solid #000",
                  },
                }}
                defaultChecked={index === 0}
              />
            }
            label={
              <Typography variant="h4">
                {name}{" "}
                <span style={{ marginLeft: 6, color: "#b5b5b5" }}>
                  ({quantity})
                </span>{" "}
              </Typography>
            }
          />
        ))}
      </FormControl>

      <Divider sx={{ my: 2 }} />

      {/* Price */}
      <Typography variant="h4" fontWeight="bold" mb={1}>
        Price
      </Typography>
      <FormControl component="fieldset" fullWidth>
        {priceRanges.map(({ value, label }, index) => (
          <FormControlLabel
            key={index}
            control={
              <Checkbox
                onClick={() => console.log(value)}
                icon={
                  <Box
                    sx={{
                      width: 16,
                      height: 16,
                      border: "1px solid #b5b5b5",
                      borderRadius: "4px",
                      backgroundColor: "#fff",
                    }}
                  />
                }
                checkedIcon={
                  <CheckIcon
                    sx={{
                      color: "#000",
                    }}
                  />
                }
                sx={{
                  color: "#b5b5b5",
                  "&.Mui-checked": {
                    color: "#04B1E9",
                  },
                  "& .MuiSvgIcon-root": {
                    fontSize: 16,
                    borderRadius: "4px",
                    border: "none",
                  },
                  "&.Mui-checked .MuiSvgIcon-root": {
                    border: "1px solid #000",
                  },
                }}
                defaultChecked={index === 0}
              />
            }
            label={<Typography variant="h4">{label}</Typography>}
          />
        ))}
      </FormControl>
      {/* <Slider
        defaultValue={[1000, 5000]}
        min={500}
        max={6000}
        step={100}
        marks={priceMarks}
        valueLabelDisplay="auto"
      /> */}
      <Box
        sx={{
          display: "flex",
          justifyContent: "start",
          gap: "11px",
          mt: 1,
          alignItems: "center",
        }}
      >
        <TextField
          placeholder="Min"
          size="small"
          type="number"
          variant="outlined"
          sx={{ width: "97px" }}
          inputProps={{ min: 0 }}
        />
        <span style={{ color: "#b5b5b5" }}>-</span>
        <TextField
          placeholder="Max"
          size="small"
          type="number"
          sx={{ width: "97px" }}
          variant="outlined"
          inputProps={{ min: 0 }}
        />
      </Box>
    </Box>
  );
};

export default FilterSidebar;

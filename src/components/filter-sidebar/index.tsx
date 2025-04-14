import React from "react";
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
} from "@mui/material";

const brands = ["All", "Lenovo", "Microsoft", "Apple", "Dell", "Hp"];
const priceMarks = [
  { value: 1000, label: "AED: 1k" },
  { value: 2000, label: "2k" },
  { value: 3000, label: "3k" },
  { value: 4000, label: "4k" },
  { value: 5000, label: "5k" },
];

const FilterSidebar = () => {
  return (
    <Box
      sx={{
        width: { xs: "100%", md: 250 },
        pr: { md: 3 },
        mb: { xs: 3, md: 0 },
      }}
    >
      {/* Sort */}
      <Typography variant="subtitle1" fontWeight="bold" mb={1}>
        Sort
      </Typography>
      <FormControl component="fieldset" fullWidth>
        <RadioGroup defaultValue="current">
          <FormControlLabel value="best" control={<Radio />} label="Best fit" />
          <FormControlLabel
            value="current"
            control={<Radio />}
            label="Current bid"
          />
          <FormControlLabel
            value="closing"
            control={<Radio />}
            label="Closing soon"
          />
          <FormControlLabel
            value="latest"
            control={<Radio />}
            label="Latest online"
          />
        </RadioGroup>
      </FormControl>

      <Divider sx={{ my: 2 }} />

      {/* Brand */}
      <Typography variant="subtitle1" fontWeight="bold" mb={1}>
        Brand
      </Typography>
      <FormControl component="fieldset" fullWidth>
        {brands.map((brand, index) => (
          <FormControlLabel
            key={index}
            control={<Checkbox defaultChecked={index === 0} />}
            label={brand}
          />
        ))}
      </FormControl>

      <Divider sx={{ my: 2 }} />

      {/* Price */}
      <Typography variant="subtitle1" fontWeight="bold" mb={1}>
        Price
      </Typography>
      <Slider
        defaultValue={[1000, 5000]}
        min={500}
        max={6000}
        step={100}
        marks={priceMarks}
        valueLabelDisplay="auto"
      />
      <Box sx={{ display: "flex", justifyContent: "space-between", mt: 1 }}>
        <TextField
          label="Min"
          size="small"
          type="number"
          variant="outlined"
          sx={{ width: "45%" }}
        />
        <TextField
          label="Max"
          size="small"
          type="number"
          variant="outlined"
          sx={{ width: "45%" }}
        />
      </Box>
    </Box>
  );
};

export default FilterSidebar;

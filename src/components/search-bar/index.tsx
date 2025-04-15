"use client";
import React, { FC } from "react";
import { TextField, InputAdornment } from "@mui/material";
import SearchIcon from "@mui/icons-material/Search";

type SearchInputProps = {
  value?: string;
  onChange?: (value: string) => void;
};

const SearchBar: FC<SearchInputProps> = ({ value, onChange }) => {
  return (
    <TextField
      value={value}
      onChange={(e) => onChange?.(e.target.value)}
      placeholder="Search"
      variant="outlined"
      size="small"
      fullWidth
      InputProps={{
        startAdornment: (
          <InputAdornment position="start">
            <SearchIcon fontSize="small" sx={{ color: "gray" }} />
          </InputAdornment>
        ),
        sx: {
          borderRadius: "50px",
          backgroundColor: "#fff",
        },
      }}
      sx={{
        "& .MuiOutlinedInput-root": {
          borderRadius: "50px",
        },
        "& .MuiOutlinedInput-notchedOutline": {
          borderColor: "#ccc",
        },
        "& .MuiOutlinedInput-root:hover .MuiOutlinedInput-notchedOutline": {
          borderColor: "#aaa",
        },
        "& .MuiOutlinedInput-root.Mui-focused .MuiOutlinedInput-notchedOutline":
          {
            borderColor: "#00AEEF",
          },
      }}
    />
  );
};

export default SearchBar;

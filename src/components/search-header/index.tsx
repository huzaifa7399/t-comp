import {
  IconButton,
  Stack,
  Theme,
  Typography,
  useMediaQuery,
} from "@mui/material";
import React from "react";
import SearchBar from "../search-bar";
import Image from "next/image";

const SearchHeader = () => {
  const isMobile = useMediaQuery((theme: Theme) =>
    theme.breakpoints.down("md")
  );
  return (
    <Stack
      direction="row"
      gap="8px"
      alignItems="center"
      paddingBottom={isMobile ? "12px" : "56px"}
    >
      <IconButton
        sx={{
          gap: "8px",
          marginRight: isMobile ? "" : "40px",
        }}
      >
        <Image src="/back-icon.svg" alt="back icon" width={16} height={16} />
        {!isMobile && (
          <Typography variant="h4" fontWeight={600} color="text.primary">
            Back to auction
          </Typography>
        )}
      </IconButton>
      <SearchBar />
    </Stack>
  );
};

export default SearchHeader;

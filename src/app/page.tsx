"use client";
import { Grid, Box, Pagination, useMediaQuery, Theme } from "@mui/material";
import FilterSidebar from "@/components/filter-sidebar";
import ProductCard from "@/components/product-card";
import SearchBar from "@/components/search-bar";
import Image from "next/image";
import { useStore } from "@/context";
import Slider from "@/components/slider";
import { sampleData } from "@/constants";

export default function Home() {
  const { isFilterOpen, handleFilterToggle } = useStore();
  const isMobile = useMediaQuery((theme: Theme) =>
    theme.breakpoints.down("md")
  );

  return (
    <Box bgcolor={!isMobile ? "background.default" : "background.paper"}>
      <Grid container spacing={4}>
        <Grid
          size={{ xs: 12, md: 3 }}
          sx={{
            display: { xs: "none", md: "block" },
          }}
        >
          <FilterSidebar />
        </Grid>

        <Grid size={{ xs: 12, md: 9 }}>
          <Grid
            size={{ xs: 12 }}
            sx={{
              display: "flex",
              justifyContent: "center",
              mb: 2.5,
              gap: "8px",
            }}
          >
            <SearchBar />
            {isMobile && (
              <Box
                onClick={handleFilterToggle}
                sx={{
                  cursor: "pointer",
                  boxShadow: "0px 0px 10.1px 0px #0000001A",
                  backgroundColor: "#fff",
                  borderRadius: "4px",
                  display: "flex",
                  justifyContent: "center",
                  alignItems: "center",
                  width: "42px",
                  height: "42px",
                }}
              >
                <Image
                  src="/filter-icon.svg"
                  alt="filter-icon"
                  width={24}
                  height={24}
                />
              </Box>
            )}
          </Grid>
          <Grid container spacing={3}>
            {[...sampleData, ...sampleData].map((product, idx) => (
              <Grid size={{ xs: 12, sm: 6, md: 4, lg: 3 }} key={idx}>
                <ProductCard product={product} />
              </Grid>
            ))}
            <Grid
              size={{ xs: 12 }}
              sx={{ display: "flex", justifyContent: "center" }}
            >
              <Pagination
                count={10}
                variant="outlined"
                shape="rounded"
                sx={{
                  "& .MuiPaginationItem-root": {
                    color: "#b5b5b5",
                    fontWeight: 600,
                    border: "none",
                  },
                  "& .Mui-selected": {
                    color: "#fff !important",
                    backgroundColor: "#008FCC !important",
                    // backgroundColor: "#fff",
                    // color: "#b5b5b5",
                    // border: "0.66px solid #b5b5b5",
                    "&:hover": {
                      color: "#fff",
                      backgroundColor: "#008FCC",
                      border: "none",
                    },
                  },
                }}
              />
            </Grid>
          </Grid>
        </Grid>
        <Grid size={{ xs: 12 }}>
          <Slider />
        </Grid>
      </Grid>
      {isMobile && isFilterOpen && (
        <Box
          position="absolute"
          top={"48px"}
          left={0}
          width="100%"
          height="calc(100vh - 48px)"
          bgcolor="background.default"
          zIndex={9}
          sx={{
            overflowY: "auto",
            WebkitOverflowScrolling: "touch",
          }}
          p="12px 8px"
        >
          <FilterSidebar />
        </Box>
      )}
    </Box>
  );
}

"use client";
import React, { FC } from "react";
import {
  Box,
  IconButton,
  InputAdornment,
  Stack,
  TextField,
  Theme,
  Typography,
  useMediaQuery,
} from "@mui/material";
import SearchIcon from "@mui/icons-material/Search";
import Image from "next/image";

const Footer: FC = () => {
  const isMobile = useMediaQuery((theme: Theme) =>
    theme.breakpoints.down("md")
  );

  return (
    <Stack
      gap="12px"
      bgcolor={isMobile ? "background.paper" : "background.default"}
    >
      <Box
        bgcolor="primary.main"
        sx={{
          height: "80px",
          paddingX: isMobile ? "8px" : "96px",
          display: "flex",
          flexDirection: isMobile ? "column" : "row",
          justifyContent: isMobile ? "center" : "space-between",
          alignItems: isMobile ? "right" : "center",
          color: "white",
        }}
      >
        <Typography variant="body2" color="#fff" fontWeight={600}>
          Browse through our products library!
        </Typography>

        {!isMobile && (
          <Box
            sx={{
              width: { xs: "auto", lg: "464px" },
            }}
          >
            <TextField
              variant="outlined"
              placeholder="Search products..."
              fullWidth
              sx={{
                "& .MuiOutlinedInput-root": {
                  borderRadius: "50px",
                  backgroundColor: "#fff",
                  paddingRight: "0px",
                },
                "& .MuiOutlinedInput-notchedOutline": {
                  border: "none",
                },
                "& .MuiInputBase-input": {
                  padding: "8.5px 24px",
                },
              }}
              InputProps={{
                endAdornment: (
                  <InputAdornment position="end">
                    <IconButton
                      sx={{
                        borderRadius: "30px",
                        backgroundColor: "#50D692",
                        color: "#fff",
                        ":hover": {
                          backgroundColor: "#50D692",
                        },
                      }}
                    >
                      <SearchIcon />
                    </IconButton>
                  </InputAdornment>
                ),
              }}
            />
          </Box>
        )}
      </Box>
      {isMobile && (
        <Box padding="8px">
          <TextField
            variant="outlined"
            placeholder="Search products..."
            fullWidth
            sx={{
              "& .MuiOutlinedInput-root": {
                borderRadius: "50px",
                backgroundColor: "#fff",
                paddingRight: "0px",
                boxShadow: "0px 1px 5px #0000001A",
              },
              "& .MuiOutlinedInput-notchedOutline": {
                border: "none",
              },
              "& .MuiInputBase-input": {
                padding: "8.5px 24px",
              },
            }}
            InputProps={{
              endAdornment: (
                <InputAdornment position="end">
                  <IconButton
                    sx={{
                      borderRadius: "30px",
                      backgroundColor: "#50D692",
                      color: "#fff",
                      ":hover": {
                        backgroundColor: "#50D692",
                      },
                    }}
                  >
                    <SearchIcon />
                  </IconButton>
                </InputAdornment>
              ),
            }}
          />
        </Box>
      )}
      <Box
        sx={{
          padding: isMobile ? "8px" : "70px 96px",
          display: "flex",
          justifyContent: "space-between",
          alignItems: "start",
          flexDirection: { xs: "column", md: "row" },
          gap: "18px",
        }}
      >
        <Stack
          gap="8px"
          sx={{
            order: { xs: 4, sm: 1 },
          }}
        >
          <Image
            src="/t-comp-logo.svg"
            width={100}
            height={100}
            alt="t-comp-logo"
          />
          <Typography variant="body2">contact@example.com</Typography>
          <Typography variant="body2">+1-541-754-3010</Typography>
          <Stack direction="row" gap="8px">
            {["facebook", "twitter", "linkedin", "instagram", "tiktok"].map(
              (text) => (
                <Image
                  key={text}
                  src={`/${text.toLowerCase()}-icon.svg`}
                  width={30}
                  height={30}
                  alt={`${text}-logo`}
                />
              )
            )}
          </Stack>
        </Stack>
        <Box
          sx={{
            display: "flex",
            gap: { sm: "50px", md: "50px", lg: "100px" },
            justifyContent: "space-between",
            flexDirection: { xs: "row", sm: "row" },
            flexWrap: { xs: "wrap", sm: "nowrap" },
            order: { xs: 2, sm: 2 },
            width: { xs: "100%", sm: "auto" },
          }}
        >
          <Stack
            gap="15px"
            sx={
              {
                // flex: { xs: 1, sm: "auto" },
              }
            }
          >
            <Typography variant="body2" fontWeight={600} color="#000">
              Useful Links
            </Typography>
            <Typography variant="body2">Link 1</Typography>
            <Typography variant="body2">Link 2</Typography>
          </Stack>
          <Stack
            gap="15px"
            sx={{
              // flex: { xs: 1, sm: "auto" },
              alignItems: { xs: "flex-end", sm: "flex-start" },
            }}
          >
            <Typography variant="body2" fontWeight={600} color="#000">
              Our Policy
            </Typography>
            <Typography variant="body2">Link 1</Typography>
            <Typography variant="body2">Link 2</Typography>
          </Stack>
        </Box>

        <Stack
          gap="15px"
          sx={{
            order: { xs: 3, sm: 4 },
          }}
        >
          <Typography variant="body2" fontWeight={600} color="#000">
            Subscribe to our Newsletter{" "}
          </Typography>
          <Box width="100%">
            <TextField
              variant="outlined"
              placeholder="Enter your email"
              fullWidth
              sx={{
                "& .MuiOutlinedInput-root": {
                  borderRadius: "50px",
                  backgroundColor: "#fff",
                  paddingRight: "0px",
                  boxShadow: "0px 1px 5px #0000001A",
                },
                "& .MuiOutlinedInput-notchedOutline": {
                  border: "none",
                },
                "& .MuiInputBase-input": {
                  padding: "8.5px 24px",
                },
              }}
              InputProps={{
                endAdornment: (
                  <InputAdornment position="end">
                    <IconButton
                      sx={{
                        borderRadius: "30px",
                        padding: "11px 24px",
                        backgroundColor: "#50D692",
                        color: "#fff",
                        ":hover": {
                          backgroundColor: "#50D692",
                        },
                      }}
                    >
                      <Typography
                        sx={{
                          fontSize: "12px",
                        }}
                      >
                        Submit
                      </Typography>
                    </IconButton>
                  </InputAdornment>
                ),
              }}
            />
          </Box>
        </Stack>
      </Box>
      <Box
        bgcolor="primary.main"
        sx={{
          height: isMobile ? "48px" : "80px",
          paddingX: isMobile ? "8px" : "96px",
          display: "flex",
          flexDirection: isMobile ? "column" : "row",
          justifyContent: isMobile ? "center" : "space-between",
          alignItems: isMobile ? "right" : "center",
          color: "white",
        }}
      >
        <Typography variant="body2" fontWeight={400} color="#fff">
          Copyright by T-COMP. All Rights Reserved.
        </Typography>
        {!isMobile && (
          <Stack direction="row" gap="8px">
            {["amex", "mastercard", "visa", "applepay", "tabby"].map((text) => (
              <Image
                key={text}
                src={`/${text.toLowerCase()}-icon.svg`}
                width={50}
                height={30}
                alt={`${text}-logo`}
              />
            ))}
          </Stack>
        )}
      </Box>
      {isMobile && (
        <Stack
          direction="row"
          justifyContent="space-between"
          p="0px 8px"
          gap="8px"
        >
          {["amex", "mastercard", "visa", "applepay", "tabby"].map((text) => (
            <Image
              key={text}
              src={`/${text.toLowerCase()}-icon.svg`}
              width={50}
              height={30}
              alt={`${text}-logo`}
            />
          ))}
        </Stack>
      )}
    </Stack>
  );
};

export default Footer;

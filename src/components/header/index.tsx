"use client";

import {
  Box,
  Link,
  Stack,
  Theme,
  Typography,
  useMediaQuery,
  useTheme,
} from "@mui/material";
import Image from "next/image";
import React, { useEffect, useState } from "react";

const Header = () => {
  const isMobile = useMediaQuery((theme: Theme) =>
    theme.breakpoints.down("md")
  );

  const theme = useTheme();
  console.log(theme.palette.primary.navbar);

  const [isHamburgerMenuOpen, setIsHamburgerMenuOpen] =
    useState<boolean>(false);

  const handleMenuToggle = () => {
    setIsHamburgerMenuOpen((prev) => !prev);
  };

  useEffect(() => {
    setIsHamburgerMenuOpen(false);
  }, [isMobile]);

  return (
    <Box
      bgcolor="primary.navbar"
      position="relative"
      zIndex={10}
      sx={{ boxShadow: 1 }}
    >
      <Stack
        direction="row"
        sx={{
          justifyContent: "space-between",
          alignItems: "center",
          paddingX: isMobile ? "8px" : "64px",
          height: isMobile ? "48px" : "80px",
        }}
      >
        <Image
          src="/t-comp-logo.svg"
          width={100}
          height={100}
          alt="t-comp-logo"
        />

        {!isMobile && (
          <Stack direction="row" spacing={"32px"} alignItems="center">
            {["Wholesale", "Retail", "How to Bid"].map((text) => (
              <Link
                key={text}
                underline="none"
                color="text.listTitle"
                variant="clickable"
                sx={{
                  cursor: "pointer",
                  ...(text === "Wholesale"
                    ? {
                        backgroundColor: "primary.main",
                        color: "white",
                        padding: "8px 12px",
                        borderRadius: "100px",
                        "&:hover": {
                          backgroundColor: "primary.main",
                          opacity: 0.8,
                        },
                      }
                    : {}),
                }}
              >
                {text}
              </Link>
            ))}
          </Stack>
        )}

        {!isMobile ? (
          <Stack direction="row" spacing={"20px"} alignItems="center">
            <Link
              underline="none"
              color="text.listTitle"
              variant="clickable"
              sx={{
                display: "flex",
                justifyContent: "center",
                alignItems: "center",
                gap: "2px",
                cursor: "pointer",
              }}
            >
              <Image
                src="/whatsapp-icon.svg"
                width={15}
                height={15}
                alt="whatsapp"
              />
              Support
            </Link>
            <Link underline="none" variant="clickable" color="text.listTitle">
              Log in
            </Link>
            <Link
              underline="none"
              variant="clickable"
              sx={{
                cursor: "pointer",
                backgroundColor: "primary.main",
                color: "white",
                padding: "12px 32px",
                borderRadius: "100px",
                "&:hover": {
                  backgroundColor: "primary.main",
                  opacity: 0.8,
                },
              }}
            >
              Create account
            </Link>
          </Stack>
        ) : (
          <Stack direction="row" spacing={"12px"} alignItems="center">
            {!isHamburgerMenuOpen && (
              <Link underline="none" variant="clickable">
                <Image
                  src="/sample-avatar.svg"
                  width={20}
                  height={20}
                  alt="avatar"
                />
              </Link>
            )}
            {!isHamburgerMenuOpen && (
              <Link
                underline="none"
                variant="clickable"
                sx={{
                  cursor: "pointer",
                  backgroundColor: "primary.main",
                  color: "white",
                  padding: "5px 14px",
                  borderRadius: "100px",
                  "&:hover": {
                    backgroundColor: "primary.main",
                    opacity: 0.8,
                  },
                }}
              >
                Create account
              </Link>
            )}
            <Link
              underline="none"
              variant="clickable"
              onClick={handleMenuToggle}
            >
              <Image
                src={
                  isHamburgerMenuOpen
                    ? "/cross-icon.svg"
                    : "/hamburger-icon.svg"
                }
                width={20}
                height={20}
                alt="menu-toggle"
              />
            </Link>
          </Stack>
        )}
      </Stack>

      {isMobile && isHamburgerMenuOpen && (
        <Box
          position="absolute"
          top="100%"
          left={0}
          width="100%"
          bgcolor="background.default"
          zIndex={9}
        >
          <Stack spacing="8px" padding="12px 8px">
            <Typography
              variant="h4"
              color="text.listTitle"
              textAlign="start"
              fontWeight={700}
            >
              Log in
            </Typography>
            <Typography variant="h4" color="text.listTitle" textAlign="start">
              Discover exclusive bidding at the our T-Comp bidding platform
            </Typography>
            <Stack direction="row" spacing={"20px"} alignItems="center">
              <Link
                underline="none"
                color="text.listTitle"
                variant="clickable"
                sx={{
                  display: "flex",
                  justifyContent: "center",
                  alignItems: "center",
                  gap: "2px",
                  cursor: "pointer",
                }}
              >
                <Image
                  src="/whatsapp-icon.svg"
                  width={15}
                  height={15}
                  alt="whatsapp"
                />
                Support
              </Link>
              <Link underline="none" variant="clickable" color="text.listTitle">
                Log in
              </Link>
              <Link
                underline="none"
                variant="clickable"
                sx={{
                  cursor: "pointer",
                  backgroundColor: "background.body",
                  color: "text.listTitle",
                  padding: "7px 12px",
                  borderRadius: "100px",
                  border: "1px solid #B5B5B5",
                  "&:hover": {
                    // backgroundColor: "primary.main",
                    opacity: 0.8,
                  },
                }}
              >
                Create account
              </Link>
            </Stack>
            {/* {["Wholesale", "Retail", "How to Bid", "Support", "Log in"].map(
              (text) => (
                <Link
                  key={text}
                  underline="none"
                  color="text.listTitle"
                  variant="h5"
                  sx={{
                    cursor: "pointer",
                    paddingY: "8px",
                    "&:hover": {
                      color: "primary.main",
                    },
                  }}
                >
                  {text}
                </Link>
              )
            )} */}
          </Stack>
        </Box>
      )}
    </Box>
  );
};

export default Header;

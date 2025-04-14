"use client";

import {
  Box,
  Divider,
  Link,
  Stack,
  Theme,
  Typography,
  useMediaQuery,
} from "@mui/material";
import Image from "next/image";
import React, { useEffect, useState } from "react";

const Header = () => {
  const isMobile = useMediaQuery((theme: Theme) =>
    theme.breakpoints.down("md")
  );

  const [isHamburgerMenuOpen, setIsHamburgerMenuOpen] =
    useState<boolean>(false);

  const handleMenuToggle = () => {
    setIsHamburgerMenuOpen((prev) => !prev);
  };

  useEffect(() => {
    setIsHamburgerMenuOpen(false);
  }, [isMobile]);

  return (
    <Box bgcolor="primary.light" position="relative" zIndex={10}>
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
                color="text.secondary"
                sx={{
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
              color="text.secondary"
              sx={{
                display: "flex",
                justifyContent: "center",
                alignItems: "center",
                gap: "2px",
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
            <Link underline="none" color="text.secondary">
              Log in
            </Link>
            <Link
              underline="none"
              sx={{
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
              <Link underline="none">
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
                sx={{
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
            <Link underline="none" onClick={handleMenuToggle}>
              <Image
                src={
                  isHamburgerMenuOpen
                    ? "/cross-icon.svg"
                    : "/hamburger-icon.svg"
                }
                width={isHamburgerMenuOpen ? 15 : 20}
                height={isHamburgerMenuOpen ? 15 : 20}
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
          height="calc(100vh - 48px)"
          bgcolor="background.default"
          zIndex={9}
        >
          <Stack height="100%" justifyContent="space-between">
            <Stack spacing="16px" padding="12px 8px">
              <Typography
                variant="h4"
                color="text.secondary"
                textAlign="start"
                fontWeight={700}
              >
                Log in
              </Typography>
              <Typography variant="h4" color="text.secondary" textAlign="start">
                Discover exclusive bidding at the our T-Comp bidding platform
              </Typography>
              <Stack direction="row" spacing={"20px"} alignItems="center">
                <Link
                  underline="none"
                  color="text.secondary"
                  sx={{
                    display: "flex",
                    justifyContent: "center",
                    alignItems: "center",
                    gap: "2px",
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
                <Link underline="none" color="text.secondary">
                  Log in
                </Link>
                <Link
                  underline="none"
                  sx={{
                    color: "text.secondary",
                    padding: "7px 12px",
                    borderRadius: "100px",
                    border: "1px solid #B5B5B5",
                    "&:hover": {
                      opacity: 0.8,
                    },
                  }}
                >
                  Create account
                </Link>
              </Stack>
              <Divider
                sx={{
                  width: "100%",
                  border: "0.66px solid ##00000080",
                }}
              />
              <Stack direction="row" spacing={"32px"} alignItems="center">
                {["Wholesale", "Retail", "How to Bid"].map((text) => (
                  <Link
                    key={text}
                    underline="none"
                    color="text.secondary"
                    sx={{
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
            </Stack>

            <Box
              sx={{
                height: "167px",
                backgroundColor: "#CCCCCC80",
                display: "flex",
                justifyContent: "center",
                alignItems: "center",
              }}
            >
              <Typography
                variant="h4"
                color="text.secondary"
                textAlign="start"
                fontWeight={700}
              >
                Follow us
              </Typography>{" "}
            </Box>
          </Stack>
        </Box>
      )}
    </Box>
  );
};

export default Header;

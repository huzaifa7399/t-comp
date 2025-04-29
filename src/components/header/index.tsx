"use client";

import { useStore } from "@/context";
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
import { useRouter } from "next/navigation";
import React, { FC, useEffect, useState } from "react";
import CartDrawer from "../cart-drawer";

const cartItems = [
  {
    id: "1",
    name: "ThinkPad T490s: Intel Core i7, 8th Gen, 16GB RAM, 256GB SSD",
    image: "/sample-1.png",
    price: 799,
    attributes: ["i7 16GB - 256GB"],
    color: "Black",
    brand: "Lenovo",
    quantity: 1,
  },
  {
    id: "12",
    name: "ThinkPad T490s: Intel Core i7, 8th Gen, 16GB RAM, 256GB SSD",
    image: "/sample-1.png",
    price: 799,
    attributes: ["i7 16GB - 256GB"],
    color: "Black",
    brand: "Lenovo",
    quantity: 1,
  },
  {
    id: "123",
    name: "ThinkPad T490s: Intel Core i7, 8th Gen, 16GB RAM, 256GB SSD",
    image: "/sample-1.png",
    price: 799,
    attributes: ["i7 16GB - 256GB"],
    color: "Black",
    brand: "Lenovo",
    quantity: 1,
  },
  {
    id: "11",
    name: "ThinkPad T490s: Intel Core i7, 8th Gen, 16GB RAM, 256GB SSD",
    image: "/sample-1.png",
    price: 799,
    attributes: ["i7 16GB - 256GB"],
    color: "Black",
    brand: "Lenovo",
    quantity: 1,
  },
];

const Header: FC = () => {
  const router = useRouter();
  const { isFilterOpen, handleFilterToggle, isLoggedIn } = useStore();
  const isMobile = useMediaQuery((theme: Theme) =>
    theme.breakpoints.down("md")
  );
  const [isCartOpen, setIsCartOpen] = useState(false);
  const [isHamburgerMenuOpen, setIsHamburgerMenuOpen] =
    useState<boolean>(false);

  const handleMenuToggle = () => {
    setIsHamburgerMenuOpen((prev) => !prev);
  };

  const handleLogin = () => {
    localStorage.setItem("accessToken", "dkisgay");
  };

  const handleCartClick = () => {
    setIsCartOpen(!isCartOpen);
  };

  useEffect(() => {
    setIsHamburgerMenuOpen(false);
  }, [isMobile]);

  useEffect(() => {
    document.body.style.overflow =
      isFilterOpen || isHamburgerMenuOpen ? "hidden" : "";
    if (isFilterOpen || isHamburgerMenuOpen) {
      // Prevent body scroll but allow fixed element to scroll
      // document.body.style.position = "fixed";
      // document.body.style.top = `-${window.scrollY}px`;
      // document.body.style.left = "0";
      // document.body.style.right = "0";
      // document.body.style.overflow = "hidden";
    }
  }, [isFilterOpen, isHamburgerMenuOpen]);

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
          onClick={() => router.push("/")}
          src="/t-comp-logo.svg"
          width={100}
          height={100}
          alt="t-comp-logo"
          style={{
            cursor: "pointer",
          }}
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
            {!isLoggedIn && (
              <Link
                underline="none"
                color="text.secondary"
                onClick={handleLogin}
              >
                Log in
              </Link>
            )}{" "}
            {!isLoggedIn ? (
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
            ) : (
              <Link
                sx={{
                  display: "flex",
                  gap: "2px",
                }}
                underline="none"
                color="text.secondary"
                onClick={handleCartClick}
              >
                <Image
                  src="/cart-icon.svg"
                  width={20}
                  height={20}
                  alt="avatar"
                />
                Cart
              </Link>
            )}
          </Stack>
        ) : (
          <Stack direction="row" spacing={"12px"} alignItems="center">
            {!isHamburgerMenuOpen && !isFilterOpen && (
              <Link underline="none">
                <Image
                  src="/sample-avatar.svg"
                  width={20}
                  height={20}
                  alt="avatar"
                />
              </Link>
            )}
            {!isHamburgerMenuOpen &&
              !isFilterOpen &&
              (isLoggedIn ? (
                <Link
                  onClick={handleCartClick}
                  sx={{
                    display: "flex",
                    gap: "2px",
                    fontSize: "14px",
                    color: "#252525",
                  }}
                >
                  <Image
                    src="/cart-icon.svg"
                    width={20}
                    height={20}
                    alt="avatar"
                  />
                  Cart
                </Link>
              ) : (
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
              ))}
            <Link
              underline="none"
              onClick={isFilterOpen ? handleFilterToggle : handleMenuToggle}
            >
              <Image
                src={
                  isHamburgerMenuOpen || isFilterOpen
                    ? "/cross-icon.svg"
                    : "/hamburger-icon.svg"
                }
                width={isHamburgerMenuOpen || isFilterOpen ? 15 : 20}
                height={isHamburgerMenuOpen || isFilterOpen ? 15 : 20}
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
          sx={{ overflow: "hidden" }}
        >
          <Stack height="100%" justifyContent="space-between">
            <Stack spacing="16px" padding="12px 8px">
              {!isLoggedIn && (
                <Typography
                  variant="h4"
                  color="text.secondary"
                  textAlign="start"
                  fontWeight={700}
                >
                  Log in
                </Typography>
              )}
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
                {!isLoggedIn && (
                  <Link
                    underline="none"
                    color="text.secondary"
                    onClick={handleLogin}
                  >
                    Log in
                  </Link>
                )}
                {!isLoggedIn && (
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
                )}
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

      <CartDrawer
        open={isCartOpen}
        onClose={() => setIsCartOpen(false)}
        items={cartItems}
        subtotal={799}
        onQuantityChange={(id, qty) => console.log(id, qty)}
        onRemove={(id) => console.log("Remove", id)}
        isMobile={isMobile}
      />
    </Box>
  );
};

export default Header;

/* eslint-disable @typescript-eslint/no-unused-vars */
import React from "react";
import {
  Typography,
  Button,
  Stack,
  Box,
  useMediaQuery,
  Theme,
  TextField,
  InputAdornment,
  Divider,
  IconButton,
  Grid,
  Link,
} from "@mui/material";
import AuctionCountdown from "../countdown-timer";
import Image from "next/image";
interface ProductInfoProps {
  auctionId: string;
  title: string;
  condition: string;
  lotSize: string;
  brand: string;
  price: string;
  currentBid: number;
  auctionEndTime: string;
  totalBids: number;
  sellerName: string;
  sellerLocation: string;
  sellerRating: string;
  sellerRegistrationDate: string;
  sellerAuctionCount: number;
  sellerActiveAuctions: number;
  currentPeopleWatching: number;
  policies: {
    shipping: string;
    inStock: string;
    pickUp: string;
    return: string;
  };
}

const ProductInfo: React.FC<ProductInfoProps> = ({
  auctionId,
  title,
  condition,
  lotSize,
  brand,
  price,
  currentBid,
  auctionEndTime,
  totalBids,
  sellerName,
  sellerLocation,
  sellerRating,
  sellerRegistrationDate,
  sellerAuctionCount,
  sellerActiveAuctions,
  currentPeopleWatching,
  policies,
}) => {
  const isMobile = useMediaQuery((theme: Theme) =>
    theme.breakpoints.down("md")
  );
  return (
    <Stack>
      <Stack spacing={2}>
        <Stack
          direction="row"
          alignItems="center"
          justifyContent="space-between"
        >
          <Typography variant="h4" color="text.disabled" fontWeight={400}>
            Auction Id: {auctionId}
          </Typography>
          <Button
            onClick={() => {
              console.log("Bid now clicked", auctionId);
            }}
            sx={{
              backgroundColor: "primary.main",
              color: "white",
              py: "12px",
              width: "208px",
              textAlign: "center",
              lineHeight: "22.88px",
              textTransform: "none",
              borderRadius: "100px",
              letterSpacing: "0%",
              fontSize: "14px",
              fontWeight: 700,
              "&:hover": {
                backgroundColor: "primary.main",
                opacity: 0.8,
              },
            }}
          >
            Product evaluation report
          </Button>
        </Stack>
        <Typography
          variant="h2"
          // color=""
        >
          {title}
        </Typography>

        <Box>
          {[
            {
              key: "Condition",
              value: condition,
            },
            {
              key: "Lot Size",
              value: lotSize,
            },
            {
              key: "Brand",
              value: brand,
            },
            {
              key: "Location",
              value: sellerLocation,
            },
          ].map(({ key, value }) => (
            <Stack
              key={key}
              direction="row"
              justifyContent="space-between"
              sx={{ mb: 2 }}
            >
              <Typography variant="h4" color="text.disabled" fontWeight={400}>
                {key}
              </Typography>
              <Typography variant="h4" fontWeight={600}>
                {value}
              </Typography>
            </Stack>
          ))}
        </Box>

        <Box
          sx={{
            borderRadius: "8px",
            backgroundColor: "#50D6921A",
            padding: isMobile ? "10px" : "16px 20px",
            display: "flex",
            flexDirection: "column",
            gap: "8px",
          }}
        >
          <Stack direction="row" justifyContent="space-between">
            <TextField
              label={`Enter AED ${price} or more`}
              type="number"
              variant="outlined"
              inputProps={{
                min: currentBid,
              }}
              InputProps={{
                startAdornment: (
                  <InputAdornment position="start">
                    <Typography
                      variant="h4"
                      color="text.primary"
                      fontWeight={500}
                    >
                      AED
                    </Typography>
                  </InputAdornment>
                ),
              }}
              sx={{
                width: "227px",
                "& .MuiOutlinedInput-root": {
                  backgroundColor: "#fff",
                },
                "& .MuiOutlinedInput-notchedOutline": {
                  border: "none",
                },
              }}
            />
            <Button
              onClick={() => {
                console.log("Bid now clicked", auctionId);
              }}
              sx={{
                backgroundColor: "#50D692",
                color: "white",
                py: "12px",
                width: "174px",
                textAlign: "center",
                lineHeight: "22.88px",
                textTransform: "none",
                borderRadius: "100px",
                letterSpacing: "0%",
                fontSize: "14px",
                fontWeight: 700,
                "&:hover": {
                  backgroundColor: "primary.main",
                  opacity: 0.8,
                },
              }}
            >
              Place bid
            </Button>
          </Stack>
          <Stack direction="row" justifyContent="space-between">
            <Stack>
              <Typography variant="h4" fontWeight={600}>
                AED {currentBid}{" "}
                <span
                  style={{
                    fontSize: "12px",
                    fontWeight: 400,
                    color: "#b5b5b5",
                    marginLeft: "8px",
                  }}
                >
                  Current bid
                </span>
              </Typography>
              <Typography variant="h4" fontWeight={600}>
                {totalBids}
                <span
                  style={{
                    fontSize: "12px",
                    fontWeight: 400,
                    color: "#b5b5b5",
                    marginLeft: "8px",
                  }}
                >
                  total bids
                </span>
              </Typography>
            </Stack>
            <Button
              onClick={() => {
                console.log("Bid now clicked", auctionId);
              }}
              sx={{
                color: "#484848",
                border: "1px solid #B5B5B5",
                py: "12px",
                width: "174px",
                textAlign: "center",
                lineHeight: "22.88px",
                textTransform: "none",
                borderRadius: "100px",
                letterSpacing: "0%",
                fontSize: "14px",
                fontWeight: 700,
                "&:hover": {
                  opacity: 0.8,
                },
              }}
            >
              Buy it now
            </Button>
          </Stack>
        </Box>
        <AuctionCountdown auctionEndTime={auctionEndTime} />
        <Divider />
        <Typography variant="h4" fontWeight={700} textAlign="center">
          Seller
        </Typography>
        <Stack direction="row" justifyContent="space-between">
          <Typography variant="h4">{sellerName}</Typography>
          <Typography variant="h4" color="text.disabled">
            {sellerRating}
          </Typography>
        </Stack>
        <Divider />
        <Stack gap={1.5}>
          {[
            {
              key: "Date of register",
              value: sellerRegistrationDate,
            },
            {
              key: "Location",
              value: sellerLocation,
            },
            {
              key: "Total auctions",
              value: sellerAuctionCount,
            },
            {
              key: "Active auctions",
              value: sellerActiveAuctions,
            },
          ].map(({ key, value }, idx) => (
            <Stack direction="row" justifyContent="space-between" key={idx}>
              <Typography variant="h4" color="#484848">
                {key}
              </Typography>
              <Typography variant="h4" color="#484848">
                {value}
              </Typography>
            </Stack>
          ))}
        </Stack>
        <Box
          sx={{
            bgcolor: "#f7f7f7",
            height: "64px",
            p: "12px",
            borderRadius: "12px",
            display: "flex",
            alignItems: "center",
            gap: "12px",
          }}
        >
          <IconButton
            disabled
            sx={{
              ":disabled": {
                bgcolor: "background.default",
              },
            }}
          >
            <Image
              src="/bolt-icon.svg"
              alt="Bolt icon"
              height={20}
              width={20}
            />
          </IconButton>
          <Typography variant="h4" fontWeight={700}>
            People want this.{" "}
            <span
              style={{
                fontWeight: 400,
              }}
            >
              {currentPeopleWatching} people are watching this.
            </span>
          </Typography>
        </Box>
        <Grid container spacing={2}>
          {[
            {
              key: "Shipping",
              value: policies.shipping,
            },
            {
              key: "In Stock Now",
              value: policies.inStock,
            },
            {
              key: "Pick Up",
              value: policies.pickUp,
            },
            {
              key: "Return",
              value: policies.return,
            },
          ].map(({ key, value }) => (
            <Grid container key={key} spacing={0} width="100%">
              <Grid
                size={{
                  xs: 2.5,
                  md: 2.5,
                }}
              >
                <Typography variant="h4">{key}:</Typography>
              </Grid>
              <Grid
                size={{
                  xs: 9.5,
                  md: 9.5,
                }}
              >
                <Typography
                  variant="h4"
                  dangerouslySetInnerHTML={{
                    __html: value,
                  }}
                  color="#484848"
                />
                {key === "Pick Up" && (
                  <Link
                    sx={{
                      color: "#50D692",
                      fontSize: "14px",
                      textDecoration: "underline",
                    }}
                  >
                    View Store Information
                  </Link>
                )}
              </Grid>
            </Grid>
          ))}
        </Grid>
      </Stack>

      {/* <Stack spacing={2} alignItems={{ xs: "stretch", md: "flex-end" }}>
        <Typography
          variant="h4"
          sx={{
            fontWeight: 700,
            color: "primary.main",
            textAlign: { xs: "left", md: "right" },
          }}
        >
          AED {price}
        </Typography>

        <Button
          variant="contained"
          fullWidth
          size="large"
          sx={{
            borderRadius: 2,
            textTransform: "none",
          }}
        >
          Place Bid
        </Button>

        <Button
          variant="outlined"
          fullWidth
          size="large"
          sx={{
            borderRadius: 2,
            textTransform: "none",
          }}
        >
          Buy It Now
        </Button>
      </Stack> */}
    </Stack>
  );
};

export default ProductInfo;

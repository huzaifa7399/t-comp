"use client";

import React from "react";
import {
  Drawer,
  Box,
  Typography,
  IconButton,
  Divider,
  Button,
  Stack,
  List,
  ListItem,
  ListItemAvatar,
  Avatar,
  Card,
  Link,
} from "@mui/material";
import CloseIcon from "@mui/icons-material/Close";
import { useRouter } from "next/navigation";

type CartItem = {
  id: string;
  name: string;
  image: string;
  price: number;
  attributes: string[];
  color: string;
  brand: string;
  quantity: number;
};

interface CartDrawerProps {
  open: boolean;
  onClose: () => void;
  items: CartItem[];
  subtotal: number;
  onQuantityChange?: (id: string, newQty: number) => void;
  onRemove?: (id: string) => void;
  isMobile: boolean;
}

const CartDrawer: React.FC<CartDrawerProps> = ({
  open,
  onClose,
  items,
  subtotal,
  onQuantityChange,
  onRemove,
  isMobile,
}) => {
  const router = useRouter();

  return (
    <Drawer
      anchor="right"
      open={open}
      onClose={onClose}
      PaperProps={{
        sx: {
          top: isMobile ? "30px" : "80px",
          height: isMobile ? "93%" : "80%",
          right: isMobile ? "10px" : "20px",
          width: { xs: "80%", sm: 420 },
          maxWidth: 520,
          borderRadius: 2,
          p: 0,
          display: "flex",
          flexDirection: "column",
          justifyContent: "space-between",
        },
      }}
    >
      <Box
        sx={{
          px: 1,
          py: 1,
          borderBottom: "1px solid #eee",
          bgcolor: "#f7f7f7",
        }}
      >
        <Stack
          direction="row"
          alignItems="center"
          justifyContent="space-between"
        >
          <Typography variant="h5" fontWeight={700}>
            Cart
            <Typography
              component="span"
              color="text.secondary"
              variant="h4"
              sx={{
                ml: 2,
              }}
              fontWeight={400}
            >
              {items.length} item{items.length > 1 ? "s" : ""}
            </Typography>
          </Typography>
          <IconButton onClick={onClose}>
            <CloseIcon />
          </IconButton>
        </Stack>
      </Box>
      <Card
        sx={{
          bgcolor: "#fff",
          height: "100%",
          overflow: "auto",
        }}
      >
        <List sx={{ px: { xs: 1, md: 3 }, py: 2 }}>
          {items.map((item, idx) => (
            <Stack key={item.id}>
              <ListItem
                alignItems="flex-start"
                disableGutters
                sx={{
                  pb: 1,
                  alignItems: "flex-start",
                  flexDirection: "column",
                }}
              >
                <Stack
                  direction="row"
                  spacing={1}
                  alignItems="flex-start"
                  width="100%"
                >
                  <ListItemAvatar>
                    <Avatar
                      variant="square"
                      src={item.image}
                      sx={{
                        width: 65,
                        height: 55,
                        borderRadius: 2,
                        bgcolor: "#fafafa",
                      }}
                    />
                  </ListItemAvatar>
                  <Box flex={1} display="flex" flexDirection="column">
                    <Typography
                      variant={isMobile ? "caption" : "h4"}
                      fontWeight={700}
                    >
                      {item.name}
                    </Typography>
                    <Typography
                      variant={isMobile ? "caption" : "body1"}
                      fontWeight={400}
                      mt={0.5}
                    >
                      AED {item.price.toFixed(2)}
                    </Typography>
                    <Typography
                      variant={isMobile ? "caption" : "h4"}
                      color="text.secondary"
                      mt={0.5}
                    >
                      {item.attributes.join(", ")}
                    </Typography>
                    <Typography
                      variant={isMobile ? "caption" : "h4"}
                      color="text.secondary"
                    >
                      Color: {item.color}
                    </Typography>
                    <Typography
                      variant={isMobile ? "caption" : "h4"}
                      color="text.secondary"
                    >
                      Brands: {item.brand}
                    </Typography>
                  </Box>
                  <Box>
                    <Stack
                      direction="row"
                      alignItems="center"
                      sx={{ border: "1px solid #e0e0e0", borderRadius: 1 }}
                    >
                      <Button
                        size="small"
                        onClick={() =>
                          onQuantityChange?.(
                            item.id,
                            Math.max(1, item.quantity - 1)
                          )
                        }
                        disabled={item.quantity <= 1}
                        sx={{ minWidth: 32 }}
                      >
                        –
                      </Button>
                      <Typography
                        variant="body1"
                        mx={1}
                        minWidth={16}
                        textAlign="center"
                      >
                        {item.quantity}
                      </Typography>
                      <Button
                        size="small"
                        onClick={() =>
                          onQuantityChange?.(item.id, item.quantity + 1)
                        }
                        sx={{ minWidth: 32 }}
                      >
                        +
                      </Button>
                    </Stack>
                    <Box>
                      <Button
                        onClick={() => onRemove?.(item.id)}
                        color="inherit"
                        sx={{
                          textDecoration: "underline",
                          mt: 0.5,
                          fontSize: 12,
                        }}
                      >
                        Remove
                      </Button>
                    </Box>
                  </Box>
                </Stack>
              </ListItem>
              {items.length - 1 !== idx && <Divider />}
            </Stack>
          ))}
        </List>
      </Card>

      <Box
        sx={{
          bgcolor: "#fff",
          borderTop: "1px solid #eee",
        }}
      >
        <Stack
          px={3}
          direction="row"
          justifyContent="space-between"
          alignItems="center"
          mb={2}
          height="58px"
          bgcolor="#f7f7f7"
        >
          <Typography variant="h4" color="text.secondary" fontWeight={500}>
            Subtotal
          </Typography>
          <Typography variant="h4" fontWeight={700}>
            AED {subtotal.toFixed(2)}
          </Typography>
        </Stack>

        <Stack
          gap={2}
          px={3}
          pb={2}
          justifyContent="center"
          alignItems="center"
        >
          <Link
            onClick={() => {
              router.push("/checkout");
            }}
            underline="none"
            sx={{
              backgroundColor: "primary.main",
              color: "white",
              py: "12px",
              width: isMobile ? "80%" : "320px",
              textAlign: "center",
              borderRadius: "100px",
              fontSize: "14px",
              fontWeight: 500,
              "&:hover": {
                backgroundColor: "primary.main",
                opacity: 0.8,
              },
            }}
          >
            Go To Checkout
          </Link>
          <Link
            onClick={() => {
              router.push("/cart");
              onClose();
            }}
            underline="none"
            sx={{
              border: "1px solid #b5b5b5",
              color: "#000",
              py: "12px",
              width: isMobile ? "80%" : "320px",
              textAlign: "center",
              borderRadius: "100px",
              fontSize: "14px",
              fontWeight: 500,
              "&:hover": {
                backgroundColor: "primary.main",
                opacity: 0.8,
              },
            }}
          >
            Go To Cart
          </Link>
        </Stack>
      </Box>
    </Drawer>
  );
};

export default CartDrawer;

/* eslint-disable @typescript-eslint/no-explicit-any */
"use client";

import React, { useEffect, useState } from "react";
import { Box, Typography, Stack } from "@mui/material";
import dayjs from "dayjs";

interface AuctionCountdownProps {
  auctionEndTime: string; // ISO string or valid date string
}

const AuctionCountdown: React.FC<AuctionCountdownProps> = ({
  auctionEndTime,
}) => {
  const [timeLeft, setTimeLeft] = useState({ days: 0, hours: 0, minutes: 0 });

  useEffect(() => {
    const updateCountdown = () => {
      const now = dayjs();
      const end = dayjs(auctionEndTime);
      const diff = end.diff(now);

      if (diff <= 0) {
        setTimeLeft({ days: 0, hours: 0, minutes: 0 });
        return;
      }

      setTimeLeft({
        days: end.diff(now, "day"),
        hours: end.diff(now, "hour") % 24,
        minutes: end.diff(now, "minute") % 60,
      });
    };

    updateCountdown();
    const interval = setInterval(updateCountdown, 60 * 1000); // update every minute
    return () => clearInterval(interval);
  }, [auctionEndTime]);

  const endDateFormatted = dayjs(auctionEndTime).format("MMM D, h:mm A");

  return (
    <Box mt={3}>
      <Stack direction="row" spacing={2} alignItems="center" flexWrap="wrap">
        {["days", "hours", "minutes"].map((unit) => {
          const label = unit.charAt(0);
          const value = (timeLeft as any)[unit];
          return (
            <Box
              key={unit}
              sx={{
                borderRadius: "4px",
                display: "flex",
                justifyContent: "center",
                alignItems: "center",
                height: "48px",
                width: "48px",
                border: "1px solid #b5b5b5",
              }}
            >
              <Typography variant="h4" fontWeight={700} color="text.disabled">
                {value}
                {label}
              </Typography>
            </Box>
          );
        })}

        <Typography variant="h4" color="text.disabled" ml={2}>
          Auction will end at {endDateFormatted}
        </Typography>
      </Stack>
    </Box>
  );
};

export default AuctionCountdown;

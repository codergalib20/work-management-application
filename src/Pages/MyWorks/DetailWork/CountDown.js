import { Box, Typography } from "@mui/material";
import React, { useState } from "react";
import { useStyles } from "../../../StyleSheet/DashboardStyles";
export default function CountDown({ loadSingleWork,setTaskSubmitLastTime }) {
  const { countdownTime, countdownTitle } = useStyles();
  const destTime = new Date(
    loadSingleWork.submitTime
      ? loadSingleWork.submitTime
      : loadSingleWork.submitTime
  );
  const [day, setDay] = useState(0);
  const [hour, setHour] = useState(0);
  const [minute, setMinute] = useState(0);
  const [second, setSecond] = useState(0);
  const mainTime = setInterval(function () {
    const now = new Date().getTime();
    const diff = destTime - now;
    const days = Math.floor(diff / (1000 * 60 * 60 * 24));
    setDay(days);
    const hours = Math.floor((diff % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
    setHour(hours);
    const minutes = Math.floor((diff % (1000 * 60 * 60)) / (1000 * 60));
    setMinute(minutes);
    const seconds = Math.floor((diff % (1000 * 60)) / 1000);
    setSecond(seconds);
  }, 1000);
  0 <= day ? setTaskSubmitLastTime("onTime") : setTaskSubmitLastTime("losTime")
  return (
    <Box>
      <Typography className={countdownTitle} variant="h4">
        Here your task dateline
      </Typography>
      { 0 <= day ? <Typography
        sx={{ fontWeight: "600", color: "#23303f", textAlign: "center" }}
        id="countDownStatus" variant="h5"
      >Currently task finishing time is</Typography> : <Typography
      sx={{ fontWeight: "600", color: "#23303f", textAlign: "center" }}
      id="countDownStatus" variant="h5"
    >Oops! you will miss task dateline</Typography>

      }
      {0 <= day ? (
        <Typography className={countdownTime} variant="h4">
          {day} : {hour} : {minute} : {second}
        </Typography>
      ) : (
        <Typography className={countdownTime} variant="h4">
          00 : 00 : 00 : 00
        </Typography>
      )}
    </Box>
  );
}

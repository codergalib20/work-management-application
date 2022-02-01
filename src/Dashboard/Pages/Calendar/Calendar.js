import AdapterDateFns from "@mui/lab/AdapterDateFns";
import LocalizationProvider from "@mui/lab/LocalizationProvider";
import StaticDatePicker from "@mui/lab/StaticDatePicker";
import { Box, Paper } from "@mui/material";
import TextField from "@mui/material/TextField";
import React from "react";
import { useStyles } from "../../../StyleSheet/DashboardStyles";

export default function Calendar({ calenderValue, setCalenderValue }) {
  const { calendarBox, calendar, calendarChildBox } = useStyles();
  

  return (
    <Box className={calendarBox} sx={{ mt: 1 }}>
      <Box className={calendarChildBox}>
        <Paper elevation={5}>
        <LocalizationProvider className={calendar} dateAdapter={AdapterDateFns}>
          <StaticDatePicker
            displayStaticWrapperAs="desktop"
            value={calenderValue}
            onChange={(newValue) => {
              setCalenderValue(newValue);
            }}
            renderInput={(params) => <TextField {...params} />}
          />
        </LocalizationProvider>
        </Paper>
      </Box>
    </Box>
  );
}

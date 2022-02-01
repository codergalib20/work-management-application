import AdapterDateFns from "@mui/lab/AdapterDateFns";
import LocalizationProvider from "@mui/lab/LocalizationProvider";
import TimePicker from "@mui/lab/TimePicker";
import { Box, Paper } from "@mui/material";
import Stack from "@mui/material/Stack";
import TextField from "@mui/material/TextField";
import React from "react";

export default function Clock({ clockValue, setClockValue }) {
  return (
    <Box>
      <LocalizationProvider dateAdapter={AdapterDateFns}>
        <Stack spacing={3}>
          <TimePicker
            ampm={false}
            openTo="hours"
            views={["hours", "minutes", "seconds"]}
            inputFormat="HH:mm:ss"
            mask="__:__:__"
            label="With seconds"
            value={clockValue}
            onChange={(newValue) => {
              setClockValue(newValue);
            }}
            renderInput={(params) => (
              <Paper  elevation={3} sx={{ p: 1, mb: 1 , }}>
                <TextField fullWidth {...params} />
              </Paper>
            )}
          />
        </Stack>
      </LocalizationProvider>
    </Box>
  );
}

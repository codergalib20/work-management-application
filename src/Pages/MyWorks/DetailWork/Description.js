import { Box, Typography } from "@mui/material";
import React from "react";
export default function Description({ loadSingleWork }) {
  return (
    <Box
      sx={{
        display: "flex",
        alignItems: "center",
        justifyContent: "center",
        minHeight: "380px",
        flexDirection: "column",
        fontWeight: 600,
      }}
    >
      <Box>
        <Typography
          variant="h4"
          gutterBottom
          gutterTop
          color="#333"
          fontWeight="600"
        >
          {loadSingleWork?.task_name}
        </Typography>
        <Typography textAlign="justify" variant="body2">
          {loadSingleWork?.task_body}
        </Typography>
        <br />
        <Typography textAlign="justify" variant="body2">
          {loadSingleWork?.task_body2}
        </Typography>
      </Box>
    </Box>
  );
}

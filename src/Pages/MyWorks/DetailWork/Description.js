import HighlightAltIcon from "@mui/icons-material/HighlightAlt";
import { Box, Typography } from "@mui/material";
import React from "react";
export default function Description({ loadSingleWork }) {
  console.log(loadSingleWork);
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
      <a
        style={{ display: "flex", alignItems: "center" }}
        href="#"
        target="_blank"
      >
        Demo link <HighlightAltIcon />
      </a>
      <Box>
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

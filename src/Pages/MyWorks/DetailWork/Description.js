import HighlightAltIcon from "@mui/icons-material/HighlightAlt";
import { Box } from "@mui/material";
import React from "react";
export default function Description() {
  return (
    <Box
      sx={{
        display: "flex",
        alignItems: "center",
        justifyContent: "center",
        minHeight: "380px",
        flexDirection: "column",
        fontSize: "1.4rem",
        fontWeight: 600,
      }}
    >
      <a
        style={{ display: "flex", alignItems: "center" }}
        href="#"
        target="_blank"
      >
        Description link <HighlightAltIcon />
      </a>
      <a
        style={{ display: "flex", alignItems: "center" }}
        href="#"
        target="_blank"
      >
        Demo link <HighlightAltIcon />
      </a>
    </Box>
  );
}

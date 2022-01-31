import { Box } from "@mui/material";
import React from "react";
import Header from "../../Shared/Header";
import AllWorks from "./AllWorks";
export default function MyWork() {
  return (
    <Box sx={{ mt: 8 }}>
      <Header />
      <AllWorks />
    </Box>
  );
}

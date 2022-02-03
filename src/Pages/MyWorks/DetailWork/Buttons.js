import { Box, Paper, Typography } from "@mui/material";
import React from "react";
import { usePageStyles } from "../../../StyleSheet/PagesStyleSheet";
export default function Buttons({ setShowWorkDetail, showWorkDetail }) {
  const { DetailWorkButtonsCard } = usePageStyles();
  return (
    <Box>
      <Paper
        sx={{
          background: `${
            showWorkDetail === "countDown" ? "#e83a3b" : "#49d893"
          }`,
        }}
        className={DetailWorkButtonsCard}
        onClick={() => setShowWorkDetail("countDown")}
        elevation={1}
      >
        <Typography variant="h6">Task Dateline </Typography>
      </Paper>
      <Paper
        sx={{
          background: `${
            showWorkDetail === "description" ? "#e83a3b" : "#49d893"
          }`,
        }}
        className={DetailWorkButtonsCard}
        onClick={() => setShowWorkDetail("description")}
        elevation={1}
      >
        <Typography variant="h6">Task Description</Typography>
      </Paper>
      <Paper
        sx={{
          background: `${showWorkDetail === "links" ? "#e83a3b" : "#49d893"}`,
        }}
        className={DetailWorkButtonsCard}
        onClick={() => setShowWorkDetail("links")}
        elevation={1}
      >
        <Typography variant="h6">Give the task links here</Typography>
      </Paper>
    </Box>
  );
}

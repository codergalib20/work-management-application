import { Button, Grid, Paper, Typography } from "@mui/material";
import Box from "@mui/material/Box";
import { useTheme } from "@mui/material/styles";
import React from "react";
import { usePageStyles } from "../../StyleSheet/PagesStyleSheet";

export default function SingleWork({ task }) {
  const theme = useTheme();
  const { thumbnailHover, singleWorkCard, singleWorkCardButton } =
    usePageStyles();
  return (
    <Grid item xs={12} sm={6}>
      <Paper>
        <Box
          sx={{
            display: "flex",
            flexDirection: "column",
            justifyContent: "space-between",
            padding: 2,
          }}
        >
          <Box>
            <Typography variant="h5" fontWeight="600">
              {task?.task_name}
            </Typography>
            <Typography
              variant="h5"
              sx={{ fontSize: "14px", color: "#001e3c" }}
            >
              {task?.body.slice(0, 100)}...
            </Typography>
            <Typography
              variant="h6"
              sx={{ fontSize: "16px", fontWeight: 600, color: "#e83a3b" }}
            >
              {task?.creator}
            </Typography>
          </Box>
          <Box>
            <Button variant="contained" className={singleWorkCardButton}>
              Do the task
            </Button>
          </Box>
        </Box>
      </Paper>
    </Grid>
  );
}

import { Button, Grid, Paper, Typography } from "@mui/material";
import Box from "@mui/material/Box";
import { useTheme } from "@mui/material/styles";
import React from "react";
import { Link } from "react-router-dom";
import { usePageStyles } from "../../StyleSheet/PagesStyleSheet";

export default function SingleWork({ task }) {
  const topBrandCard = {
    background: "#49d893",
    width: "40px",
    height: "40px",
    borderRadius: "50%",
    display: "flex",
    alignItems: "center",
    justifyContent: "center",
    fontSize: "28px",
    color: "#fff",
    position: "absolute",
    top: "1rem",
    right: "1rem",
  };
  const theme = useTheme();
  const { singleWorkCardButton } = usePageStyles();
  return (
    <Grid item xs={12} sm={6}>
      <Paper elevation={3} sx={{ position: "relative" }}>
        <span style={topBrandCard}>{task?.task_name?.slice(0, 1)}</span>
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
              sx={{
                fontSize: "15px",
                color: "#333",
                fontWeight: 500,
                py: "0.5rem",
              }}
            >
              {task?.task_body.slice(0, 100)}...
            </Typography>
            <Typography
              variant="h6"
              gutterBottom
              sx={{ fontSize: "16px", fontWeight: 600, color: "#333" }}
            >
              {task?.creator}
            </Typography>
          </Box>
          <Box>
            <Link to={`/singleWork/${task?._id}`}>
              <Button variant="contained" className={singleWorkCardButton}>
                Do the task
              </Button>
            </Link>
          </Box>
        </Box>
      </Paper>
    </Grid>
  );
}

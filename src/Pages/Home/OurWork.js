import { Box, Grid, Paper, Typography } from "@mui/material";
import React from "react";
import { usePageStyles } from "../../StyleSheet/PagesStyleSheet";
export default function OurWork({ item }) {
  const { ourWorkCard } = usePageStyles();
  return (
    <Grid item xs={12} sm={6} lg={4}>
      <Paper className={ourWorkCard}>
        <Box sx={{ textAlign: "center" }}>
          <img
            style={{ width: "50%", mx: "auto" }}
            src={item?.icon}
            alt={item.title}
          />
        </Box>
        <Typography variant="h4">{item?.title}</Typography>
        <Typography variant="body2">{item?.body}</Typography>
      </Paper>
    </Grid>
  );
}

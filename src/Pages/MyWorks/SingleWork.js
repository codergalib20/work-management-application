import { Button, Grid, Typography } from "@mui/material";
import Box from "@mui/material/Box";
import Card from "@mui/material/Card";
import CardMedia from "@mui/material/CardMedia";
import { useTheme } from "@mui/material/styles";
import React from "react";
import { usePageStyles } from "../../StyleSheet/PagesStyleSheet";

export default function SingleWork({ task }) {
  const theme = useTheme();
  const { thumbnailHover, singleWorkCard, singleWorkCardButton } =
    usePageStyles();
  return (
    <Grid item xs={12} sm={6}>
      <Card sx={{ display: "flex" }} className={singleWorkCard}>
        <Grid container spacing={2}>
          <Grid item sx={12} lg={5}>
            <Box
              className={thumbnailHover}
              xs={{
                height: "100%",
                width: "100%",
                maxWidth: "300px",
                maxHeight: "300px",
              }}
            >
              <CardMedia
                component="img"
                sx={{ minWidth: "100%", minHeight: "100%" }}
                image={task?.task_thumbnail}
                alt="Live from space album cover"
              />
            </Box>
          </Grid>
          <Grid item xs={12} lg={7}>
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
          </Grid>
        </Grid>
      </Card>
    </Grid>
  );
}

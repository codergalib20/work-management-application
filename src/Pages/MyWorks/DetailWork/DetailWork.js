import { Box, Container, Grid, Paper } from "@mui/material";
import React, { useState } from "react";
import Header from "../../../Shared/Header";
import Buttons from "./Buttons";
import CountDown from "./CountDown";
import Description from "./Description";
import Links from "./Links";
export default function DetailWork() {
  const [showWorkDetail, setShowWorkDetail] = useState("countDown");
  return (
    <Box sx={{ py: 12 }}>
      <Header />
      <Container>
        <Grid container spacing={3}>
          <Grid item xs={12} md={7}>
            <Paper elevation={3} sx={{ p: 2, minHeight: "400px" }}>
              {showWorkDetail === "countDown" && <CountDown />}
              {showWorkDetail === "description" && <Description />}
              {showWorkDetail === "links" && <Links />}
            </Paper>
          </Grid>
          <Grid item xs={12} md={5}>
            <Buttons
              setShowWorkDetail={setShowWorkDetail}
              showWorkDetail={showWorkDetail}
            />
          </Grid>
        </Grid>
      </Container>
    </Box>
  );
}

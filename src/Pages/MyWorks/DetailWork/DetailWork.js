import { Box, Container, Grid, Paper } from "@mui/material";
import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import Header from "../../../Shared/Header";
import Buttons from "./Buttons";
import CountDown from "./CountDown";
import Description from "./Description";
import Links from "./Links";
export default function DetailWork() {
  const [showWorkDetail, setShowWorkDetail] = useState("countDown");
  const [loadSingleWork, setLoadSingleWork] = useState({});
  const [taskSubmitLastTime, setTaskSubmitLastTime] = useState(""); 
  const { id } = useParams();
  useEffect(() => {
    fetch(`http://localhost:5000/works/${id}`)
      .then((res) => res.json())
      .then((data) => setLoadSingleWork(data))
      .catch((error) => console.log(error));
  }, [id]);
  return (
    <Box sx={{ py: 12 }}>
      <Header />
      <Container>
        <Grid container spacing={3}>
          <Grid item xs={12} md={7}>
            <Paper elevation={3} sx={{ p: 2, minHeight: "400px", background: "#49d893" }}>
              {showWorkDetail === "countDown" && (
                <CountDown setTaskSubmitLastTime={setTaskSubmitLastTime} loadSingleWork={loadSingleWork} />
              )}
              {showWorkDetail === "description" && (
                <Description loadSingleWork={loadSingleWork} />
              )}
              {showWorkDetail === "links" && (
                <Links taskSubmitLastTime={taskSubmitLastTime} loadSingleWork={loadSingleWork} />
              )}
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

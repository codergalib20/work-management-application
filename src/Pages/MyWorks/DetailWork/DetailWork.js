import { Box, Container, Grid, Paper } from "@mui/material";
import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import useAuth from "../../../hooks/useAuth";
import Header from "../../../Shared/Header";
import Buttons from "./Buttons";
import CountDown from "./CountDown";
import Description from "./Description";
import Links from "./Links";
export default function DetailWork() {
  const [showWorkDetail, setShowWorkDetail] = useState("countDown");
  const [loadSingleWork, setLoadSingleWork] = useState({});
  const [taskSubmitLastTime, setTaskSubmitLastTime] = useState("");
  const [loadCompleteData, setLoadCompleteData] = useState({});
  const [checkCompleteCondition, setCheckCompleteCondition] = useState("");
  console.log(checkCompleteCondition);
  const { id } = useParams();
  const { user } = useAuth();
  // Fetch for check work is complete or incomplete___
  useEffect(() => {
    fetch(`http://localhost:5000/completeEmail/${user?.email}`)
      .then((res) => res.json())
      .then((data) =>
        data.map((singleData) => {
          if (singleData?.taskId === loadSingleWork?._id) {
            setCheckCompleteCondition("complete");
          }
          console.log(singleData);
          console.log(loadSingleWork);
        })
      )
      .catch((error) => console.log(error));
  }, []);

  // Fetch For Load data details
  useEffect(() => {
    fetch(`http://localhost:5000/works/${id}`)
      .then((res) => res.json())
      .then((data) => {
        setLoadSingleWork(data);
      })
      .catch((error) => console.log(error));
  }, []);
  return (
    <Box sx={{ py: 12 }}>
      <Header />
      <Container>
        <Grid container spacing={3}>
          <Grid item xs={12} md={7}>
            <Paper
              elevation={3}
              sx={{ p: 2, minHeight: "400px", background: "#49d893" }}
            >
              {showWorkDetail === "countDown" && (
                <CountDown
                  checkCompleteCondition={checkCompleteCondition}
                  setTaskSubmitLastTime={setTaskSubmitLastTime}
                  loadSingleWork={loadSingleWork}
                />
              )}
              {showWorkDetail === "description" && (
                <Description loadSingleWork={loadSingleWork} />
              )}
              {showWorkDetail === "links" && (
                <Links
                  checkCompleteCondition={checkCompleteCondition}
                  taskSubmitLastTime={taskSubmitLastTime}
                  loadSingleWork={loadSingleWork}
                />
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

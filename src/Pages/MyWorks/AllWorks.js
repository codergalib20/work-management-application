import { Box, Container, Grid, Typography } from "@mui/material";
import React, { useEffect, useState } from "react";
import SingleWork from "./SingleWork";
export default function AllWorks() {
  const [tasks, setTasks] = useState([]);
  useEffect(() => {
    fetch("/tasks.json")
      .then((res) => res.json())
      .then((data) => {
        setTasks(data);
      })
      .catch((err) => console.log(err));
  }, []);
  return (
    <Box>
      <Container sx={{ py: 10 }}>
        {!(tasks.length === 0) && (
          <Grid container spacing={2}>
            {tasks.map((task) => (
              <SingleWork task={task} key={task._id} />
            ))}
          </Grid>
        )}
        {tasks.length === 0 && (
          <Box sx={{display: 'flex', alignItems: 'center', justifyContent: 'center'}}>
            <Typography variant="h4" color="#001e3c">No Task Available!</Typography>
          </Box>
        )}
      </Container>
    </Box>
  );
}

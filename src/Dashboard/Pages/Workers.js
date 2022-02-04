import { Box, Grid, Paper } from "@mui/material";
import React, { useEffect, useState } from "react";

export default function Workers() {
  const [students, setStudents] = useState([]);
  useEffect(() => {
    fetch("http://localhost:5000/students")
      .then((res) => res.json())
      .then((data) => setStudents(data))
      .catch((error) => console.log(error));
  }, []);
  return (
    <Box>
      <Grid container spacing={1}>
        {students.map((student) => (
          <Grid key={student?._id} item xs={12} sm={6}>
            <Paper sx={{ background: "#49d893", padding: "1rem" }}>
              <Box>{student?.name}</Box>
              <Box>{student?.email}</Box>
            </Paper>
          </Grid>
        ))}
      </Grid>
    </Box>
  );
}

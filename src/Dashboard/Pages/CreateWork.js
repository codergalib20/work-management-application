import { Box, Button, Grid, Paper, TextField, Typography } from "@mui/material";
import React, { useState } from "react";
import { useForm } from "react-hook-form";
import { useStyles } from "../../StyleSheet/DashboardStyles";
import Calendar from "./Calendar/Calendar";
import Clock from "./Calendar/Clock";

export default function CreateWork() {
  const { createWorkSubmitButton } = useStyles();
  const [calenderValue, setCalenderValue] = useState(new Date());
  const [clockValue, setClockValue] = useState(new Date());
  const { register, handleSubmit } = useForm();
  const onSubmit = (data) => {
    data.time = clockValue;
    console.log(data);
  };

  return (
    <Box>
      <Typography
        variant="h4"
        fontWeight={600}
        color="#23303f"
        textAlign="center"
        gutterBottom
        sx={{ textTransform: "uppercase" }}
      >
        Create a new task
      </Typography>
      <Box>
        <form onSubmit={handleSubmit(onSubmit)}>
          <Grid container spacing={3}>
            <Grid item xs={12} md={6}>
              <Paper elevation={3} sx={{ p: 1, mb: 1 }}>
                <TextField
                  label="Task complete Dateline"
                  autoComplete="current-password"
                  fullWidth
                  value={calenderValue}
                  autoFocus
                  required
                  {...register("date", { required: true })}
                />
              </Paper>
              <Paper elevation={3} sx={{ p: 1, mb: 1 }}>
                <TextField
                  label="Task Title"
                  autoComplete="current-password"
                  fullWidth
                  required
                  {...register("task_name", { required: true })}
                />
              </Paper>
              <Paper elevation={3} sx={{ p: 1, mb: 1 }}>
                <TextField
                  label="Task Creator"
                  autoComplete="current-password"
                  fullWidth
                  required
                  {...register("creator", { required: true })}
                />
              </Paper>
              <Paper elevation={3} sx={{ p: 1, mb: 1 }}>
                <TextField
                  label="Task First Details"
                  multiline
                  rows={4}
                  fullWidth
                  required
                  {...register("task_body", { required: true })}
                />
              </Paper>
              <Paper elevation={3} sx={{ p: 1, mb: 1 }}>
                <TextField
                  label="Task Second Details"
                  multiline
                  rows={4}
                  fullWidth
                  required
                  {...register("task_body2", { required: true })}
                />
              </Paper>
            </Grid>
            <Grid item xs={12} md={6}>
              <Clock clockValue={clockValue} setClockValue={setClockValue} />
              <Calendar
                calenderValue={calenderValue}
                setCalenderValue={setCalenderValue}
              />
              <Button
                type="submit"
                variant="contained"
                className={createWorkSubmitButton}
              >
                Create
              </Button>
            </Grid>
          </Grid>
        </form>
      </Box>
    </Box>
  );
}

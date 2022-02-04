import {
  Box,
  Button,
  Grid,
  Paper,
  TextField,
  Typography,
  useMediaQuery,
  useTheme
} from "@mui/material";
import React, { useState } from "react";
import { useForm } from "react-hook-form";
import swal from "sweetalert";
import useAuth from "../../hooks/useAuth";
import { useStyles } from "../../StyleSheet/DashboardStyles";
import Calendar from "./Calendar/Calendar";

export default function CreateWork() {
  const { createWorkSubmitButton } = useStyles();
  const [calenderValue, setCalenderValue] = useState(new Date());

  // console.log(calenderValue.getHours())
  const { register, handleSubmit, reset } = useForm();
  const theme = useTheme();
  const isSmall = useMediaQuery(theme.breakpoints.down("sm"));

  const { user } = useAuth();
  const onSubmit = (data) => {
    data.submitTime = calenderValue.getTime();
    data.today = new Date();
    fetch("https://work-manage-application.herokuapp.com/create-work", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(data),
    })
      .then((res) => res.json())
      .then((result) => {
        if (result.insertedId) {
          swal("Good Job!", "New Task added successfully", "success");
          reset();
        }
      })
      .catch((err) => console.log(err));
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
          <Grid sx={{ width: "100%" }} container spacing={isSmall ? 0 : 2}>
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
                  defaultValue={user?.displayName}
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

import { Box, Button, Container, Grid, Paper, TextField } from "@mui/material";
import React, { useState } from "react";
import { useForm } from "react-hook-form";
import { Link, useHistory } from "react-router-dom";
import swal from "sweetalert";
import LoginFormImage from "../../assets/man-with-laptop.png";
import useAuth from "../../hooks/useAuth";
import { usePageStyles } from "../../StyleSheet/PagesStyleSheet";
export default function Register() {
  const { newUser, isLoading } = useAuth();
  const {
    register,
    formState: { errors },
    handleSubmit,
  } = useForm();
  const history = useHistory();
  const onSubmit = (data) => {
    if (data.password !== data.password2) {
      swal("Password not match", "", "error");
      return;
    }
    newUser(
      data.email,
      data.password,
      `${data.firstName} ${data.lastName}`,
      history
    );
  };
  const [removeError, setRemoveError] = useState(true);
  setTimeout(() => {
    setRemoveError(false);
  }, 6000);
  console.log(removeError);
  const { singleWorkCardButton, mainForm } = usePageStyles();
  return (
    <Box sx={{ background: "#001e3c", minHeight: "100vh", py: 5 }}>
      <Container>
        <Grid container spacing={3}>
          <Grid item xs={12} md={6}>
            <Paper elevation={24} className={mainForm}>
              <form onSubmit={handleSubmit(onSubmit)}>
                <TextField
                  id="outlined-textarea"
                  label="Your First Name"
                  placeholder="First Name"
                  multiline
                  fullWidth
                  {...register("firstName", { required: true })}
                />
                <span>
                  {removeError &&
                    errors.firstName?.type === "required" &&
                    "First name is required"}
                </span>
                <TextField
                  id="outlined-textarea"
                  label="Your Last Name"
                  placeholder="Last Name"
                  multiline
                  fullWidth
                  {...register("lastName", { required: true })}
                />
                <span>
                  {removeError &&
                    errors.lastName?.type === "required" &&
                    "First name is required"}
                </span>
                <TextField
                  id="outlined-textarea"
                  label="Your E-mail"
                  placeholder="E-mail"
                  multiline
                  fullWidth
                  {...register("email", { required: true })}
                />
                <span>
                  {removeError &&
                    errors.email?.type === "required" &&
                    "User email is required"}
                </span>
                <TextField
                  id="outlined-textarea"
                  label="Your Password"
                  placeholder="Password"
                  multiline
                  fullWidth
                  {...register("password", { required: true })}
                />
                <span>
                  {removeError &&
                    errors.password?.type === "required" &&
                    "Password is required"}
                </span>
                <TextField
                  id="outlined-textarea"
                  label="Confirm Password"
                  placeholder="Confirm Password"
                  multiline
                  fullWidth
                  {...register("password2", { required: true })}
                />
                <span>
                  {removeError &&
                    errors.password2?.type === "required" &&
                    "Confirm Password is required"}
                </span>

                <Grid container spacing={2}>
                  <Grid item xs={12} sm={6}>
                    <Button
                      className={singleWorkCardButton}
                      type="submit"
                      onClick={() => setRemoveError(true)}
                    >
                      Register
                    </Button>
                  </Grid>
                  <Grid item xs={12} sm={6}>
                    <Link style={{ textDecoration: "none" }} to="/login">
                      <Button>Already register?</Button>
                    </Link>
                  </Grid>
                </Grid>
              </form>
            </Paper>
          </Grid>
          <Grid item xs={12} md={6}>
            <img src={LoginFormImage} alt="" />
          </Grid>
        </Grid>
      </Container>
    </Box>
  );
}

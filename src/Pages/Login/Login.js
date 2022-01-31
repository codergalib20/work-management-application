import { Box, Button, Container, Grid, Paper, Typography } from "@mui/material";
import TextField from "@mui/material/TextField";
import React, { useState } from "react";
import { useForm } from "react-hook-form";
import { Link, useHistory, useLocation } from "react-router-dom";
import LoginFormImage from "../../assets/man-with-laptop.png";
import useAuth from "../../hooks/useAuth";
import { usePageStyles } from "../../StyleSheet/PagesStyleSheet";

export default function Login() {
  const { signIn, isLoading } = useAuth();
  const { singleWorkCardButton, mainForm, loginRegisterTextField } =
    usePageStyles();
  const [removeError, setRemoveError] = useState(true);
  setTimeout(() => {
    setRemoveError(false);
  }, 10000);
  const {
    register,
    formState: { errors },
    handleSubmit,
  } = useForm();
  const history = useHistory();
  const location = useLocation();
  const onSubmit = (data) => {
    signIn(data.email, data.password, location, history);
  };
  return (
    <Box
      sx={{
        background: "#001e3c",
        minHeight: "100vh",
        py: 5,
        alignItems: "center",
        display: "flex",
      }}
    >
      <Container>
        <Grid container spacing={3}>
          <Grid item xs={12} md={6}>
            <Paper elevation={24} className={mainForm}>
              <form onSubmit={handleSubmit(onSubmit)}>
                <Typography variant="h4" color="#001e3c" fontWeight="700">
                  Login here
                </Typography>
                <TextField
                  className={loginRegisterTextField}
                  id="outlined-textarea"
                  label="Your E-mail"
                  placeholder="Email"
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
                  className={loginRegisterTextField}
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
                <Grid container spacing={2}>
                  <Grid item xs={12} sm={6}>
                    <Button
                      className={singleWorkCardButton}
                      type="submit"
                      onClick={() => setRemoveError(true)}
                    >
                      Login
                    </Button>
                  </Grid>
                  <Grid item xs={12} sm={6}>
                    <Link style={{ textDecoration: "none" }} to="/register">
                      <Button>are you new user?</Button>
                    </Link>
                  </Grid>
                </Grid>
              </form>
            </Paper>
          </Grid>
          <Grid item xs={12} md={6}>
            <img style={{ maxWidth: "100%" }} src={LoginFormImage} alt="" />
          </Grid>
        </Grid>
      </Container>
    </Box>
  );
}

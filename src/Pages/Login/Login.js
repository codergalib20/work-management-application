import { Box, Button, Container, Grid, Paper } from "@mui/material";
import TextField from "@mui/material/TextField";
import React, { useState } from "react";
import { useForm } from "react-hook-form";
import LoginFormImage from "../../assets/man-with-laptop.png";
import { usePageStyles } from "../../StyleSheet/PagesStyleSheet";

export default function Login() {
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
  console.log(removeError);
  const onSubmit = (data) => {
    console.log(data);
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
          <Grid item xs={12} sm={6}>
            <Paper elevation={24} className={mainForm}>
              <form onSubmit={handleSubmit(onSubmit)}>
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
                <Button
                  className={singleWorkCardButton}
                  type="submit"
                  onClick={() => setRemoveError(true)}
                >
                  Login
                </Button>
              </form>
            </Paper>
          </Grid>
          <Grid item xs={12} sm={6}>
            <img style={{ maxWidth: "100%" }} src={LoginFormImage} alt="" />
          </Grid>
        </Grid>
      </Container>
    </Box>
  );
}

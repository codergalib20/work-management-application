import { Box, Button, Container, Grid, Paper } from "@mui/material";
import React, { useState } from "react";
import { useForm } from "react-hook-form";
import LoginFormImage from "../../assets/man-with-laptop.png";
import { usePageStyles } from "../../StyleSheet/PagesStyleSheet";
export default function Register() {
  const [removeError, setRemoveError] = useState(true);
  setTimeout(() => {
    setRemoveError(false);
  }, 6000);
  const {
    register,
    formState: { errors },
    handleSubmit,
  } = useForm();
  console.log(removeError);
  const onSubmit = (data) => {
    console.log(data);
  };
  const { singleWorkCardButton,mainForm,loginRegisterTextField } = usePageStyles();
  return (
    <Box sx={{ background: "#001e3c", minHeight: "100vh", py: 5 }}>
      <Container>
        <Grid container spacing={3}>
          <Grid item xs={12} md={6}>
            <Paper elevation={24} className={mainForm}>
              <form onSubmit={handleSubmit(onSubmit)}>
                <input {...register("firstName", { required: true })} />
                <span>
                  {removeError &&
                    errors.firstName?.type === "required" &&
                    "First name is required"}
                </span>
                <input {...register("lastName", { required: true })} />
                <span>
                  {removeError &&
                    errors.lastName?.type === "required" &&
                    "First name is required"}
                </span>
                <input {...register("email", { required: true })} />
                <span>
                  {removeError &&
                    errors.email?.type === "required" &&
                    "User email is required"}
                </span>
                <input {...register("password", { required: true })} />
                <span>
                  {removeError &&
                    errors.password?.type === "required" &&
                    "Password is required"}
                </span>
                <input {...register("password2", { required: true })} />
                <span>
                  {removeError &&
                    errors.password2?.type === "required" &&
                    "Confirm Password is required"}
                </span>

                <Button
                  className={singleWorkCardButton}
                  type="submit"
                  onClick={() => setRemoveError(true)}
                >
                  Sign Up
                </Button>
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

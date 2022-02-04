import { Box, Button, Paper, TextField } from "@mui/material";
import React from "react";
import { useForm } from "react-hook-form";
import swal from "sweetalert";
import adminImage from "../../assets/admin.png";

export default function CreateAdmin() {
  const { register, handleSubmit } = useForm();
  const onSubmit = (data) => {
    fetch("https://work-manage-application.herokuapp.com/users/admin/", {
      method: "PUT",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(data),
    })
      .then((res) => res.json())
      .then((data) => {
        if (data.modifiedCount === 0) {
          swal("Something wrong please try another Email", "", "error");
        } else {
          swal("Success", "Admin Create", "success");
        }
      });
  };

  return (
    <div>
      <Box
        sx={{ display: "flex", alignItems: "center", justifyContent: "center" }}
      >
        <Paper sx={{ p: 1 }}>
          <img src={adminImage} alt="Admin image" />
          <Box>
            <form onSubmit={handleSubmit(onSubmit)}>
              <Box sx={{ display: "flex", alignItems: "stretch" }}>
                <TextField
                  sx={{ width: "80%" }}
                  id="standard-basic"
                  label="Standard"
                  variant="standard"
                  type="text"
                  {...register("email", { required: true })}
                />
                <Button
                  type="submit"
                  variant="contained"
                  sx={{
                    width: "20%",
                    background: "#49d893",
                    "&:hover": {
                      background: "#e83a3b",
                    },
                  }}
                >
                  Push
                </Button>
              </Box>
            </form>
          </Box>
        </Paper>
      </Box>
    </div>
  );
}

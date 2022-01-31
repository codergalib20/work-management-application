import CloseIcon from "@mui/icons-material/Close";
import { Button, TextField, Typography } from "@mui/material";
import Box from "@mui/material/Box";
import Modal from "@mui/material/Modal";
import React from "react";
import { useForm } from "react-hook-form";
import { usePageStyles } from "../../../StyleSheet/PagesStyleSheet";
const style = {
  position: "absolute",
  top: "50%",
  left: "50%",
  transform: "translate(-50%, -50%)",
  width: "96%",
  maxWidth: "500px",
  bgcolor: "background.paper",
  border: "2px solid #f63e7b",
  boxShadow: 24,
  pt: 2,
  px: 4,
  pb: 3,
  boxSizing: "border-box",
};

export default function SubmitTaskDialog({ openDialog, setOpenDialog }) {
  const { DialogTitle, fullDialog, dialogBody, dialogFooter, formTextField } =
    usePageStyles();
    const {
      register,
      handleSubmit,
      watch,
      formState: { errors },
      reset
    } = useForm();
  const handleOpen = () => {
    setOpenDialog(true);
  };
  const handleClose = () => {
    setOpenDialog(false);
    reset()
  };
  
  const onSubmit = (data) => console.log(data);

  return (
    <Modal
      open={openDialog}
      onClose={handleClose}
      aria-labelledby="parent-modal-title"
      aria-describedby="parent-modal-description"
    >
      <Box sx={{ ...style }}>
        <Typography variant="h6" fontWeight="600">
          Task Name
        </Typography>
        <form onSubmit={handleSubmit(onSubmit)}>
          <Box>
            <TextField
              className={formTextField}
              id="standard-textarea"
              label="Task live link"
              placeholder="Live link"
              multiline
              fullWidth
              variant="standard"
              {...register("livelink", { required: true })}
            />
            {errors.livelink && <span style={{color: "#e83a3b"}}>This field is required</span>}
            <TextField
              className={formTextField}
              id="standard-textarea"
              label="Task Server link"
              placeholder="Server link"
              multiline
              fullWidth
              variant="standard"
              {...register("serverlink", { required: true })}
            />
            {errors.serverlink && <span style={{color: "#e83a3b"}}>This field is required</span>}
            <TextField
              className={formTextField}
              id="standard-textarea"
              label="Task server code link"
              placeholder="Server code link"
              multiline
              fullWidth
              variant="standard"
              {...register("servercodelink", { required: true })}
            />
            {errors.servercodelink && <span style={{color: "#e83a3b"}}>This field is required</span>}
            <TextField
              className={formTextField}
              id="standard-textarea"
              label="Task client site code link"
              placeholder="Client code link"
              multiline
              fullWidth
              variant="standard"
              {...register("clientcodelink", { required: true })}
            />
            {errors.clientcodelink && <span style={{color: "#e83a3b"}}>This field is required</span>}
          </Box>
          <Box sx={{pt: 2}}>
            <Button
              type="submit"
              variant="contained"
              sx={{ background: "#001e3c", mr: 1 }}
            >
              Submit
            </Button>
            <Button onClick={handleClose} variant="contained" sx={{ background: "#001e3c" }}>
              <CloseIcon />
            </Button>
          </Box>
        </form>
      </Box>
    </Modal>
  );
}

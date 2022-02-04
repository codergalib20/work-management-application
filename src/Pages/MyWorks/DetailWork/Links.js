import { Box, Button } from "@mui/material";
import React, { useState } from "react";
import { usePageStyles } from "../../../StyleSheet/PagesStyleSheet";
import SubmitTaskDialog from "./SubmitTaskDialog";
export default function Link({
  taskSubmitLastTime,
  loadSingleWork,
  checkCompleteCondition,
}) {
  const { linksComponentBox } = usePageStyles();
  const [openDialog, setOpenDialog] = useState(false);
  return (
    <Box className={linksComponentBox}>
      {checkCompleteCondition === "complete" ? (
        <Box>Task Already submitted</Box>
      ) : (
        <Button
          variant="contained"
          sx={{ background: "#23303f", color: "#fff" }}
          onClick={(openDialog, setOpenDialog)}
        >
          Open Submit Form
        </Button>
      )}
      <SubmitTaskDialog
        loadSingleWork={loadSingleWork}
        taskSubmitLastTime={taskSubmitLastTime}
        setOpenDialog={setOpenDialog}
        openDialog={openDialog}
      />
    </Box>
  );
}

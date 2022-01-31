import { Box, Button } from "@mui/material";
import React, { useState } from "react";
import { usePageStyles } from "../../../StyleSheet/PagesStyleSheet";
import SubmitTaskDialog from "./SubmitTaskDialog";
export default function Link() {
  const { linksComponentBox } = usePageStyles();
  const [openDialog, setOpenDialog] = useState(false);
  return (
    <Box className={linksComponentBox}>
      <Button onClick={(openDialog, setOpenDialog)}>Open Submit Form</Button>
      <SubmitTaskDialog setOpenDialog={setOpenDialog} openDialog={openDialog} />
    </Box>
  );
}

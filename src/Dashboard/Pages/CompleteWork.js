import DeleteIcon from "@mui/icons-material/Delete";
import ExpandMoreIcon from "@mui/icons-material/ExpandMore";
import { Box, Grid } from "@mui/material";
import Accordion from "@mui/material/Accordion";
import AccordionDetails from "@mui/material/AccordionDetails";
import AccordionSummary from "@mui/material/AccordionSummary";
import React, { useEffect, useState } from "react";
import swal from "sweetalert";
export default function CompleteWork() {
  const [completeWorks, setCompleteWork] = useState([]);
  console.log(completeWorks);
  useEffect(() => {
    fetch("https://work-manage-application.herokuapp.com/complete")
      .then((res) => res.json())
      .then((data) => setCompleteWork(data))
      .catch((error) => console.log(error));
  }, []);
  // Here delete a complete work______________________
  const deleteCartProduct = (id) => {
    swal({
      title: "Are you sure for deleting?",
      text: "Once deleted, you will not be able to recover this cart Product",
      icon: "warning",
      buttons: true,
      dangerMode: true,
    }).then((willDelete) => {
      if (willDelete) {
        fetch(`https://work-manage-application.herokuapp.com/complete/${id}`, {
          method: "DELETE",
        })
          .then((res) => res.json())
          .then((data) => {
            const remaining = completeWorks.filter(
              (service) => service._id !== id
            );
            setCompleteWork(remaining);
          });
        swal("Poof! Complete task deleted delete successfully!", {
          icon: "success",
        });
      } else {
        swal("Task safe!");
      }
    });
  };
  return (
    <Box>
      {completeWorks.map((complete) => (
        <Accordion key={complete?._id}>
          <AccordionSummary
            expandIcon={<ExpandMoreIcon />}
            aria-controls="panel1a-content"
            id="panel1a-header"
          >
            <Grid container spacing={2}>
              <Grid item xs={12} sm={6}>
                {complete?.email}
              </Grid>
              <Grid item xs={12} sm={6}>
                {complete?.userName}
              </Grid>
            </Grid>
          </AccordionSummary>
          <AccordionDetails sx={{ background: "#49d893" }}>
            <Grid container spacing={3}>
              <Grid item xs={12} sm={6}>
                <a target="_blank" href={complete?.livelink} rel="noreferrer">
                  Live Link
                </a>
              </Grid>
              <Grid item xs={12} sm={6}>
                <a target="_blank" href={complete?.serverlink} rel="noreferrer">
                  Server Link
                </a>
              </Grid>
              <Grid item xs={12} sm={6}>
                <a
                  target="_blank"
                  href={complete?.clientcodelink}
                  rel="noreferrer"
                >
                  Clint Code Link
                </a>
              </Grid>
              <Grid item xs={12} sm={6}>
                <a
                  target="_blank"
                  href={complete?.servercodelink}
                  rel="noreferrer"
                >
                  Server Code Link
                </a>
              </Grid>
              <Grid item xs={12} sm={6}>
                Finishing Time : {complete?.lastTime}
              </Grid>
              <Grid item xs={12} sm={6}>
                Submit For : {complete?.mark} Mark
              </Grid>
            </Grid>
            <Box sx={{ position: "relative" }}>
              <DeleteIcon
                onClick={() => deleteCartProduct(complete?._id)}
                sx={{ position: "absolute", bottom: "0", right: "1rem" }}
              />
            </Box>
          </AccordionDetails>
        </Accordion>
      ))}
    </Box>
  );
}

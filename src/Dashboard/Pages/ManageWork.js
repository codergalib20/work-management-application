import DeleteIcon from "@mui/icons-material/Delete";
import ExpandMoreIcon from "@mui/icons-material/ExpandMore";
import { Box } from "@mui/material";
import Accordion from "@mui/material/Accordion";
import AccordionDetails from "@mui/material/AccordionDetails";
import AccordionSummary from "@mui/material/AccordionSummary";
import Typography from "@mui/material/Typography";
import React, { useEffect, useState } from "react";

export default function ManageWork() {
  const [tasks, setTasks] = useState([]);
  useEffect(() => {
    fetch("http://localhost:5000/works")
      .then((res) => res.json())
      .then((data) => {
        setTasks(data);
      })
      .catch((err) => console.log(err));
  }, []);
  // Here delete a complete work______________________
  const deleteCartProduct = (id) => {
        fetch(`http://localhost:5000/create-student`, {
          method: "DELETE",
        })
          .then((res) => res.json())
          .then((data) => {
            const remaining = tasks.filter((service) => service._id !== id);
            setTasks(remaining);
          });
        }

  return (
    <Box>
      {tasks.map((task) => (
        <Accordion key={task?._id}>
          <AccordionSummary
            expandIcon={<ExpandMoreIcon />}
            aria-controls="panel1a-content"
            id="panel1a-header"
          >
            <Typography sx={{ position: "relative", width: "100%" }}>
              {task?.task_name}
              <DeleteIcon
                onClick={() => deleteCartProduct(task?._id)}
                sx={{ position: "absolute", top: "0", right: "1rem" }}
              />
            </Typography>
          </AccordionSummary>
          <AccordionDetails>
            <Typography>{task?.creator}</Typography>
            <Typography>{task?.date}</Typography>
            <Typography>{task?.today}</Typography>
            <Typography>{task?.task_body}</Typography>
            <Typography>{task?.task_name}</Typography>
          </AccordionDetails>
        </Accordion>
      ))}
    </Box>
  );
}

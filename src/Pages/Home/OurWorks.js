import { Box, Container, Grid } from "@mui/material";
import React, { useEffect, useState } from "react";
import OurWork from "./OurWork";
export default function OurWorks() {
  const [ourProvider, setOurProvider] = useState([]);
  useEffect(() => {
    fetch("/ourWork.json")
      .then((res) => res.json())
      .then((data) => setOurProvider(data))
      .catch((err) => console.log(err));
  }, []);
  return (
    <Box>
      <Container sx={{py: 3}}>
        <Grid container spacing={2}>
          {ourProvider.map((item) => (
            <OurWork item={item} key={item._id} />
          ))}
        </Grid>
      </Container>
    </Box>
  );
}

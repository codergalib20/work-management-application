import { Box, Container, Typography } from "@mui/material";
import React from "react";
import { usePageStyles } from "../../StyleSheet/PagesStyleSheet";
export default function Banner() {
  const { banner,bannerContainer } = usePageStyles();
  return (
    <Box className={banner}>
      <Container className={bannerContainer}>
        <Typography variant="h2" fontWeight="700" sx={{color: "#001e3c"}}>
          Modern Life <br />
          Coach School <br /> Podcast
        </Typography>
      </Container>
    </Box>
  );
}

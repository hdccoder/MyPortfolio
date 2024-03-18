import React from "react";
import { Container,Box } from "@mui/material";

const Portfolio = () => {
  return (
    <Container>
        <Box position="absolute" top={-150} left={-45}>
      <img src="public/assets/Spinnerspic.png" alt="Bio Background" style={{ width: "780px", height: "auto" }} />
      </Box>
    </Container>
  );
};

export default Portfolio;
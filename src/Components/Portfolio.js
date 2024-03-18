import React from "react";
import { Container,Box } from "@mui/material";

const Portfolio = () => {
  return (
    <Container>
        <Box position="absolute" top={-80} left={-65}>
      <img src="public/assets/Spinnerspic2.png" alt="Bio Background" style={{ width: "580px", height: "auto" }} />
      </Box>
    </Container>
  );
};

export default Portfolio;
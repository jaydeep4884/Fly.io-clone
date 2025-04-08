import { Box, Container } from "@mui/material";
import React from "react";
import Carousal from "../components/Carousal";


function Trusted() {
  return (
    <Box className="my-3">
      <Container maxWidth>
        <Box aria-label="Global" className="mx-auto  max-w-7xl  lg:px-8">
          <Box>
            <h2 className="uppercase text-center text-violet-700 tracking-wider font-bold mb-6 text-sm">
              Trusted by teams at
            </h2>
          </Box>
          <Box>
            <Carousal />
          </Box>
        </Box>
      </Container>
    </Box>
  );
}

export default Trusted;

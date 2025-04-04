import React from "react";
import { Box, Container } from "@mui/material";

function Developers() {
  return (
    <Box>
      <Container maxWidth>
        <Box
          aria-label="Global"
          className="mx-auto flex max-w-7xl items-center justify-between lg:px-8"
        >
          <Box className="w-full card rounded-3xl bg-gradient-to-br from-amber-50 via-orange-50 to-pink-200 ring-1 ring-violet-900/10 ring-inset">
            <img
              className="h-auto "
              src="https://fly.io/phx/ui/images/cool-bird-d997174954ab5a152ccac3d2dcb19c8d.png?vsn=d"
              alt=""
            />
          </Box>
        </Box>
      </Container>
    </Box>
  );
}

export default Developers;

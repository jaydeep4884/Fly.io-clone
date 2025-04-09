import { Box, Container } from "@mui/material";
import React from "react";

function SendBox() {
  return (
    <Box className="my-32">
      <Container maxWidth>
        <Box className="mx-auto max-w-7xl px-4 lg:px-8">
          <Box className="grid grid-cols-2 gap-16">
            <Box className="relative">
              <h2
                style={{
                  fontFamily: "Mackinac, ui-serif, Georgia, Cambria, serif",
                }}
                className="text-4xl"
              >
                Full-Stack Sandboxes.
                <br />
                Fly.io Metal.
              </h2>
              <p className="mt-4 text-xl text-[#281950bf]">
                Fly Machines are hardware-virtualized containers with a REST
                API, that can run any Docker image on our custom-built global
                cloud in 35 regions. Launch instantly and keep them running as
                long as you want them to – for a single HTTP request, or weeks
                of uptime.
              </p>
              <div className="absolute bottom-0 w-full h-px bg-gradient-to-r from-indigo-400/50 to-transparent" />
            </Box>
            <Box className="flex items-end">
              <img
                className="w-full max-w-sm mx-auto lg:-mt-4"
                src="https://fly.io/phx/ui/images/fly-globe-cb332f77ddb429aa3ef4e0a2c6c592ba.png?vsn=d"
                alt="Machine"
              />
            </Box>
          </Box>
        </Box>
      </Container>
    </Box>
  );
}

export default SendBox;

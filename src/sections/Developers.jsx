import React from "react";
import { Box, Container } from "@mui/material";
import Primarybtn from "../components/Primarybtn";

function Developers(props) {
  return (
    <Box>
      <Container maxWidth>
        <Box
          aria-label="Global"
          className="mx-auto flex max-w-7xl items-center justify-between lg:px-8"
        >
          <Box className="w-full flex items-center gap-x-5 px-20 py-8 card rounded-3xl bg-gradient-to-br from-amber-50 via-orange-50 to-pink-200 ring-1 ring-violet-900/10 ring-inset">
            <Box className="w-[56%]">
              <h2 className="text-3xl font-medium">
                Support By Developers For Developers
              </h2>
              <p className="text-lg pb-3 my-4 block text-[#281950bf]">
                Paid support packages include a team of actual engineers (not
                chatbots) who themselves ship code on our platform. Emergency
                support and guaranteed response times available.
              </p>
              <Primarybtn name="Learn More" />

            </Box>
            <Box className="w-[44%]">
              <img
                className="h-auto w-full bg-cover"
                src="https://fly.io/phx/ui/images/cool-bird-d997174954ab5a152ccac3d2dcb19c8d.png?vsn=d"
                alt=""
              />
            </Box>
          </Box>
        </Box>
      </Container>
    </Box>
  );
}

export default Developers;

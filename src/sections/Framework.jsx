import { Box, Container } from "@mui/material";
import React from "react";
import Primarybtn from "../components/Primarybtn";
import FrameBox from "../components/FrameBox";

function Framework() {
  return (
    <Box className="relative py-32 bg-navy-800 text-white bg-violet-500 bg-gradient-to-br from-purple-600 via-violet-600 to-indigo-600 overflow-hidden">
      <Container maxWidth>
        <Box
          aria-label="Global"
          className="mx-auto flex max-w-7xl items-center justify-between lg:px-8"
        >
          <Box className="grid grid-cols-2 gap-x-10 items-center">
            <Box>
              <h2
                style={{
                  fontFamily: "Mackinac, ui-serif, Georgia, Cambria, serif",
                }}
                className="text-4xl "
              >
                Use the Tech You Love
              </h2>

              <p className="text-white/70 text-xl mt-6 mb-7">
                Build with your favorite framework. No Dockerfile? No problem:
                our CLI generates containers for most popular frameworks,
                including Rails, Phoenix, Django, Node, Laravel, and .NET.
              </p>

              <Primarybtn name="Learn More" />
            </Box>

            <FrameBox />
          </Box>
        </Box>
      </Container>
    </Box>
  );
}

export default Framework;

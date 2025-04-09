import { Box, Container } from "@mui/material";
import React from "react";
import Primarybtn from "../components/Primarybtn";

function Machine() {
  return (
    <Box className="my-32">
      <Container maxWidth>
        <Box aria-label="Global" className="mx-auto  max-w-7xl  lg:px-8">
          <Box className="grid grid-cols-2 items-center gap-x-16">
            <Box>
              <h2
                style={{
                  fontFamily: "Mackinac, ui-serif, Georgia, Cambria, serif",
                }}
                className="text-4xl"
              >
                Need Thousands of Fly
                <br /> Machines?
              </h2>
              <p className="my-3 pb-3 text-xl text-[#281950bf]">
                If you're building something that requires Fly Machines by the
                thousands, we're here to help. We'd love to talk through your
                architecture and ensure you can scale effortlessly.
              </p>
              <Primarybtn name="Talk To Human" />
            </Box>
            <Box>
              <img
                className="w-full bg-cover"
                src="https://fly.io/phx/ui/images/better-together-bg-630f84dc36727cb3216fe4536c3687db.png?vsn=d"
                alt="Machine"
              />
            </Box>
          </Box>
        </Box>
      </Container>
    </Box>
  );
}

export default Machine;

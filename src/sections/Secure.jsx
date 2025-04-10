import React from "react";
import { Box, Container } from "@mui/material";
import Primarybtn from "../components/Primarybtn";

function Secure() {
  return (
    <Box className="my-32">
      <Container maxWidth>
        <Box aria-label="Global" className="mx-auto max-w-7xl lg:px-8">
          <Box className="grid grid-cols-1 md:grid-cols-2 items-center gap-x-16 gap-y-12">
            {/* Image Section */}
            <Box>
              <img
                src="https://fly.io/phx/ui/images/better-together-bg-630f84dc36727cb3216fe4536c3687db.png?vsn=d"
                alt="Machine"
                className="w-full bg-cover"
              />
            </Box>

            {/* Content Section */}
            <Box>
              <h2
                className="text-4xl"
                style={{
                  fontFamily: "Mackinac, ui-serif, Georgia, Cambria, serif",
                }}
              >
                Secure by Default
              </h2>

              <p className="mt-4 mb-6 text-[19px] text-[#281950bf]">
                Apps running on Fly Machines are KVM hardware-isolated, built on
                a memory-safe stack and running directly on our own metal.
              </p>

              {/* Buttons */}
              <Box className="flex items-center gap-x-4">
                <Primarybtn name="Enterprise Features" />

                <button className="group flex items-center gap-1 px-5 py-2.5 rounded-full font-medium border border-white/80 shadow-inner transition-all duration-300 hover:shadow-inner">
                  <span>Fly.io Security</span>
                  <span className="relative w-4 h-4 overflow-hidden">
                    {/* Arrow transition animation */}
                    <span className="absolute inset-0 transition-transform duration-300 group-hover:-translate-x-full">
                      <ArrowIcon />
                    </span>
                    <span className="absolute inset-0 translate-x-full transition-transform duration-300 group-hover:translate-x-0">
                      <ArrowIcon />
                    </span>
                  </span>
                </button>
              </Box>
            </Box>
          </Box>
        </Box>
      </Container>
    </Box>
  );
}

const ArrowIcon = () => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    className="h-4 w-4"
    fill="none"
    viewBox="0 0 24 24"
    stroke="currentColor"
  >
    <path
      strokeLinecap="round"
      strokeLinejoin="round"
      strokeWidth={2}
      d="M9 5l7 7-7 7"
    />
  </svg>
);

export default Secure;

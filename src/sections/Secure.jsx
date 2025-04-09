import { Box, Container } from "@mui/material";
import React from "react";
import Primarybtn from "../components/Primarybtn";

function Secure() {
  return (
    <Box className="my-32">
      <Container maxWidth>
        <Box aria-label="Global" className="mx-auto  max-w-7xl  lg:px-8">
          <Box className="grid grid-cols-2 items-center gap-x-16">
            <Box>
              <img
                className="w-full bg-cover"
                src="https://fly.io/phx/ui/images/better-together-bg-630f84dc36727cb3216fe4536c3687db.png?vsn=d"
                alt="Machine"
              />
            </Box>

            <Box>
              <h2
                style={{
                  fontFamily: "Mackinac, ui-serif, Georgia, Cambria, serif",
                }}
                className="text-4xl"
              >
                Secure by Default
              </h2>
              <p className="my-3 pb-3 text-[19px] text-[#281950bf]">
                Apps running on Fly Machines are KVM hardware-isolated, built on
                a memory-safe stack and running directly on our own metal.
              </p>

              {/* ButtonGroup  */}
              <Box className="flex items-stretch gap-x-3">
                <Primarybtn name="Enterprise Features" />

                <button className="group border inset-shadow-sm inset-shadow-black-500 border-white/800 elative shadow-inner flex items-center gap-1  font-medium px-5 py-2.5 rounded-full hover:shadow-inner transition-all duration-300">
                  <span>Fly.io Security</span>
                  <span className="relative w-4 h-4 overflow-hidden">
                    {/* Small arrow default */}
                    <span className="absolute inset-0 transition-all duration-300 group-hover:-translate-x-full">
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
                    </span>
                    {/* Full arrow slides in on hover */}
                    <span className="absolute inset-0 translate-x-full transition-all duration-300 group-hover:translate-x-0">
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

export default Secure;

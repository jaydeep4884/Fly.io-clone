import { Box, Container } from "@mui/material";
import React from "react";
import Primarybtn from "../components/Primarybtn";

function Hero() {
  return (
    <Box className="pt-32 relative">
      <Box
        className="absolute bottom-[-60px] left-0 w-full h-20 z-[-1] pointer-events-none"
        sx={{
          background:
            "linear-gradient(to top, rgba(236,72,153,0.5), rgba(255,255,255,0))",
          filter: "blur(50px)",
        }}
      />
      <Container maxWidth>
        <Box aria-label="Global" className="mx-auto max-w-7xl lg:px-8">
          <Box className="flex flex-col items-center">
            <Box className="flex flex-col items-center w-[70%] text-center">
              <h1
                className="text-[64px] leading-tight text-[#281950] !tracking-[-.045em] mb-4"
                style={{
                  fontFamily:
                    "Mackinac, ui-serif, Georgia, Cambria, Times, serif",
                  fontWeight: "unset",
                }}
              >
                Run User (or Robot)
                <br />
                Code on{" "}
                <span className="relative italic">
                  Fly Machines
                  <svg
                    viewBox="0 0 1213 73"
                    aria-hidden="true"
                    preserveAspectRatio="none"
                    height="12"
                    className="absolute bottom-0 right-0 w-full h-3 text-purple-400 -z-1"
                  >
                    <defs>
                      <linearGradient
                        id="underline-gradient"
                        gradientTransform="rotate(110)"
                      >
                        <stop offset="5%" stopColor="#CA7FF8" />
                        <stop offset="95%" stopColor="#795BE9" />
                      </linearGradient>
                    </defs>
                    <g bufferedRendering="static">
                      <path
                        fill="url(#underline-gradient)"
                        d="M1213.19 35.377c2.37-13.011-22.95-10.753-31.04-14.087C1086.89 5.705 911.742 2.887 815.218 2.809c-78.003.231-155.966-1.833-233.961.481-57.545.429-114.885 6.164-172.419 7.383-121.164 5.39-242.94 10.751-362.507 32.199-12.356 3.286-25.614 4.255-37.332 9.401-29.507 22.983 27.103 20.15 39.468 17.234 357.956-47.703 362.767-46.261 636.452-50.97 121.033-2.508 241.892 6.658 428.341 19.243 4.74.404 8.98-4.032 8-8.788a942.105 942.105 0 0154.69 6.378c9.44 1.843 18.92 3.583 28.29 5.729 4.01.839 8.02-1.718 8.95-5.712v-.01z"
                      />
                    </g>
                  </svg>
                </span>
              </h1>

              <p className="text-xl mb-9 mx-4">
                Give each of your users (or robots) a{" "}
                <a href="/" className="text-black font-semibold">
                  code execution sandbox
                </a>{" "}
                that boots in milliseconds, runs any Docker image you throw at
                it, and scales to zero when you don't need it.
              </p>

              <Primarybtn name="Deploy in 5 minutes" />
            </Box>
          </Box>
        </Box>
      </Container>

      <img
        src="https://fly.io/phx/ui/images/cloud-city-a61199fec62cd744415fcdf4e1be8434.png?vsn=d"
        className="h-[527px] w-full object-cover"
        alt="Cloud City"
      />
    </Box>
  );
}

export default Hero;

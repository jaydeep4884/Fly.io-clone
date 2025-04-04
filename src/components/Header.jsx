"use client";

import { useState } from "react";
import { Dialog, DialogPanel, Popover, PopoverGroup } from "@headlessui/react";
import { Bars3Icon, XMarkIcon } from "@heroicons/react/24/outline";
import { Dropdown } from "./Dropdown";
import { Container } from "@mui/material";

const navMenu = [
  { name: "Security", href: "#" },
  { name: "Infra Logs", href: "#" },
  { name: "Docs", href: "#" },
  { name: "Community", href: "#" },
  { name: "Status", href: "#" },
  { name: "Pricing", href: "#" },
];

export default function Header() {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  return (
    <header className="max-w-screen-xl mx-auto">
      <Container maxWidth>
        <nav
          aria-label="Global"
          className="mx-auto flex max-w-7xl items-center justify-between p-6 lg:px-8"
        >
          {/* Logo */}
          <div className="flex lg:flex-1">
            <a href="/">
              <img
                alt="Fly.io Logo"
                src="https://fly.io/static/images/brand/logo-landscape.svg"
                className="h-9 w-[121px]"
              />
            </a>
          </div>

          {/* Mobile menu button */}
          <div className="flex lg:hidden">
            <button
              type="button"
              onClick={() => setMobileMenuOpen(true)}
              className="-m-2.5 inline-flex items-center justify-center rounded-md p-2.5 text-gray-700"
            >
              <Bars3Icon className="size-6" aria-hidden="true" />
            </button>
          </div>

          {/* Desktop nav */}
          <PopoverGroup className="hidden xl:flex items-center rounded-full bg-white/75 bg-gradient-to-r from-pink-200/40 via-violet-200/40 to-indigo-200/40 border border-white/50 px-3 text-sm font-medium text-gray-800 shadow-[0px_10px_100px_rgba(236,72,153,0.6)] ring-1 ring-gray-800/[.075] backdrop-blur-xl">
            <Popover className="relative">
              <Dropdown />
            </Popover>
            {navMenu.map((item) => (
              <a
                key={item.name}
                href={item.href}
                className="text-sm font-medium text-gray-900 hover:text-violet-600 py-2.5 px-3"
              >
                {item.name}
              </a>
            ))}
          </PopoverGroup>

          {/* Desktop buttons */}
          <div className="hidden lg:flex md:flex-1 lg:justify-end">
            <div className="p-1 flex items-center rounded-full bg-white/75 bg-gradient-to-r from-pink-200/40 via-violet-200/40 to-indigo-200/40 border border-white/50 text-sm font-medium text-gray-800 shadow-lg shadow-gray-800/5 ring-1 ring-gray-800/[.075] backdrop-blur-xl">
              <button className="pr-[10px] h-8 rounded-l-[20px] rounded-r-[8px] pl-3 text-sm bg-white/40 border border-white/90 shadow hover:text-violet-600 hover:bg-violet-50/40 transition-colors duration-300">
                Sign In
              </button>
              <button className="ml-[5px] h-8 rounded-r-[20px] rounded-l-[8px] px-3 text-sm text-white bg-purple-600 border shadow hover:bg-purple-500 transition-all duration-300">
                Get Started
              </button>
            </div>
          </div>
        </nav>

        {/* Mobile Menu Dialog */}
        <Dialog
          open={mobileMenuOpen}
          onClose={setMobileMenuOpen}
          className="lg:hidden"
        >
          <div className="fixed inset-0 z-10" />
          <DialogPanel className="fixed inset-y-0 left-0 z-10 w-full overflow-y-auto bg-white px-6 py-6 sm:max-w-sm sm:ring-1 sm:ring-gray-900/10">
            <div className="flex items-center justify-between pb-6">
              <a href="/" className="-m-1.5 p-1.5">
                <img
                  alt="Logo"
                  src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSs67hAn2a56_5X9hv1rmyEv8WHVXcX0MdZDQ&s"
                  className="h-9 w-auto"
                />
              </a>
              <button
                type="button"
                onClick={() => setMobileMenuOpen(false)}
                className="-m-2.5 rounded-md p-2.5 text-gray-700"
              >
                <XMarkIcon className="size-6" aria-hidden="true" />
              </button>
            </div>

            <div className="mt-6">
              {navMenu.map((item) => (
                <a
                  key={item.name}
                  href={item.href}
                  className="block rounded-lg py-2 text-sm font-semibold text-[#54515f] hover:bg-gray-50"
                >
                  {item.name}
                </a>
              ))}
            </div>
          </DialogPanel>
        </Dialog>
      </Container>
    </header>
  );
}

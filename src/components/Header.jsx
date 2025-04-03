"use client";
import { useState } from "react";
import { Box, Container } from "@mui/material";
import {
  Dialog,
  DialogPanel,
  Disclosure,
  DisclosureButton,
  DisclosurePanel,
  Popover,
  PopoverGroup,
} from "@headlessui/react";
import { Bars3Icon, XMarkIcon } from "@heroicons/react/24/outline";
import { ChevronDownIcon } from "@heroicons/react/20/solid";
import { Dropdown } from "./Dropdown";

const products = [
  {
    name: "Analytics",
    href: "#",
  },
  {
    name: "Engagement",
    href: "#",
  },
  {
    name: "Security",
    href: "#",
  },
  {
    name: "Integrations",
    href: "#",
  },
  {
    name: "Automations",
    href: "#",
  },
];

export default function Header() {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  return (
    <Container maxWidth>
      <header className="bg-white">
        <nav
          aria-label="Global"
          className="mx-auto flex max-w-7xl items-center justify-between p-6 lg:px-8"
        >
          <Box className="flex lg:flex-1">
            <a href="/">
              <span className="sr-only">Your Company</span>
              <img
                alt=""
                src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSs67hAn2a56_5X9hv1rmyEv8WHVXcX0MdZDQ&s"
                className="h-9 w-[121px]"
              />
            </a>
          </Box>
          <Box className="flex lg:hidden">
            <button
              type="button"
              onClick={() => setMobileMenuOpen(true)}
              className="-m-2.5 inline-flex items-center justify-center rounded-md p-2.5 text-gray-700"
            >
              <span className="sr-only">Open main menu</span>
              <Bars3Icon aria-hidden="true" className="size-6" />
            </button>
          </Box>
          <PopoverGroup className="hidden xl:flex items-center  rounded-full bg-white/75 bg-gradient-to-r from-pink-200/40 via-violet-200/40 to-indigo-200/40 border border-white/50 px-3 text-sm font-medium text-gray-800 shadow-lg shadow-gray-800/5 ring-1 ring-gray-800/[.075] backdrop-blur-xl">
            <Popover className="relative">
              <Dropdown />
            </Popover>

            <a
              href="/"
              className="text-sm/6 font-medium text-gray-900 py-[10px] px-[12px]"
            >
              Security
            </a>
            <a
              href="/"
              className="text-sm/6 font-medium text-gray-900 py-[10px] px-[12px]"
            >
              Infra Log
            </a>
            <a
              href="/"
              className="text-sm/6 font-medium text-gray-900 py-[10px] px-[12px]"
            >
              Docs
            </a>
            <a
              href="/"
              className="text-sm/6 font-medium text-gray-900 py-[10px] px-[12px]"
            >
              Community
            </a>
            <a
              href="/"
              className="text-sm/6 font-medium text-gray-900 py-[10px] px-[12px]"
            >
              Status
            </a>
            <a
              href="/"
              className="text-sm/6 font-medium text-gray-900 py-[10px] px-[12px]"
            >
              Pricing
            </a>
          </PopoverGroup>
          <Box className="hidden lg:flex lg:flex-1 lg:justify-end">
            <a href="/" className="text-sm/6 font-semibold text-gray-900">
              Log in <span aria-hidden="true">&rarr;</span>
            </a>
          </Box>
        </nav>
        <Dialog
          open={mobileMenuOpen}
          onClose={setMobileMenuOpen}
          className="lg:hidden"
        >
          <Box className="fixed inset-0 z-10" />
          <DialogPanel className="fixed inset-y-0 right-0 z-10 w-full overflow-y-auto bg-white px-6 py-6 sm:max-w-sm sm:ring-1 sm:ring-gray-900/10">
            <Box className="flex items-center justify-between">
              <a href="/" className="-m-1.5 p-1.5">
                <span className="sr-only">Your Company</span>
                <img
                  alt=""
                  src="https://tailwindcss.com/plus-assets/img/logos/mark.svg?color=indigo&shade=600"
                  className="h-8 w-auto"
                />
              </a>
              <button
                type="button"
                onClick={() => setMobileMenuOpen(false)}
                className="-m-2.5 rounded-md p-2.5 text-gray-700"
              >
                <span className="sr-only">Close menu</span>
                <XMarkIcon aria-hidden="true" className="size-6" />
              </button>
            </Box>
            <Box className="mt-6 flow-root">
              <Box className="-my-6 Boxide-y Boxide-gray-500/10">
                <Box className="space-y-2 py-6">
                  <Disclosure as="Box" className="-mx-3">
                    <DisclosureButton className="group flex w-full items-center justify-between rounded-lg py-2 pr-3.5 pl-3 text-base/7 font-semibold text-gray-900 hover:bg-gray-50">
                      Product
                      <ChevronDownIcon
                        aria-hidden="true"
                        className="size-5 flex-none group-data-open:rotate-180"
                      />
                    </DisclosureButton>
                    <DisclosurePanel className="mt-2 space-y-2">
                      {products.map((item) => (
                        <DisclosureButton
                          key={item.name}
                          as="a"
                          href={item.href}
                          className="block rounded-lg py-2 pr-3 pl-6 text-sm/7 font-semibold text-gray-900 hover:bg-gray-50"
                        >
                          {item.name}
                        </DisclosureButton>
                      ))}
                    </DisclosurePanel>
                  </Disclosure>
                  <a
                    href="/"
                    className="-mx-3 block rounded-lg px-3 py-2 text-base/7 font-semibold text-gray-900 hover:bg-gray-50"
                  >
                    Features
                  </a>
                  <a
                    href="/"
                    className="-mx-3 block rounded-lg px-3 py-2 text-base/7 font-semibold text-gray-900 hover:bg-gray-50"
                  >
                    Marketplace
                  </a>
                  <a
                    href="/"
                    className="-mx-3 block rounded-lg px-3 py-2 text-base/7 font-semibold text-gray-900 hover:bg-gray-50"
                  >
                    Company
                  </a>
                </Box>
                <Box className="py-6">
                  <a
                    href="/"
                    className="-mx-3 block rounded-lg px-3 py-2.5 text-base/7 font-semibold text-gray-900 hover:bg-gray-50"
                  >
                    Log in
                  </a>
                </Box>
              </Box>
            </Box>
          </DialogPanel>
        </Dialog>
      </header>
    </Container>
  );
}

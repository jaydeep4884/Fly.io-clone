import { Box, Container } from "@mui/material";

function Footer() {
  const footerLinks = [
    { title: "Company", links: ["About", "Pricing", "Jobs"] },
    {
      title: "Articles",
      links: [
        "Blogs",
        "Phoenix Files",
        "Laravel Bytes",
        "Ruby Dispatch",
        "Django Beats",
        "JavaScript Journal",
      ],
    },
    {
      title: "Resources",
      links: ["Docs", "Customers", "Support", "Support Metrics", "Status"],
    },
    { title: "Contact", links: ["GitHub", "Twitter", "Community"] },
    {
      title: "Legal",
      links: [
        "Security",
        "Privacy policy",
        "Terms of service",
        "Acceptable Use Policy",
      ],
    },
  ];

  return (
    <footer className="bg-[#191034] text-[#a39ac1] pt-20 pb-8">
      <Container maxWidth>
        <Box aria-label="Global" className="mx-auto max-w-7xl lg:px-8">
          <Box className="grid grid-cols-6 gap-x-10 items-start pb-20">
            <Box>
              <a href="/">
                <img
                  className="h-9 w-auto"
                  src="https://fly.io/static/images/brand/logo-landscape-inverted.svg"
                  alt="Brand"
                />
              </a>
            </Box>
            {footerLinks.map((section) => (
              <Box
                key={section.title}
                className="flex flex-col gap-1 items-start "
              >
                <p className="text-[12px] uppercase text-white mb-3 font-bold">
                  {section.title}
                </p>
                {section.links.map((link) => (
                  <a
                    key={link}
                    href="/"
                    className=" text-sm font-medium hover:text-violet-500 transition-colors"
                  >
                    {link}
                  </a>
                ))}
              </Box>
            ))}
          </Box>
          <p className="text-center text-[12px]">Copyright © 2025 Fly.io</p>
        </Box>
      </Container>
    </footer>
  );
}

export default Footer;

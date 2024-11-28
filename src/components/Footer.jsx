import React from "react";

const Footer = () => {
  return (
    <div className="w-full">
      <div className="max-w-screen-xl mx-auto py-10 px-4 sm:px-10">
        <div className="flex flex-col sm:flex-row gap-10 sm:gap-32">
          <div className="basis-full sm:basis-1/2">
            <h1 className="text-[6rem] sm:text-[11.5rem] font-semibold leading-none tracking-tight">
              refokus.
            </h1>
          </div>
          <div className="basis-full sm:basis-1/2 flex flex-col sm:flex-row gap-8 sm:gap-4">
            <div className="basis-1/2 sm:basis-1/3">
              <h4 className="mb-6 sm:mb-10 text-zinc-500 capitalize">Socials</h4>
              {["instagram", "twitter (x?)", "LinkedIn"].map((item, index) => (
                <a
                  key={index}
                  className="block mt-2 text-zinc-600 capitalize hover:text-sky-500"
                >
                  {item}
                </a>
              ))}
            </div>
            <div className="basis-1/2 sm:basis-1/3">
              <h4 className="mb-6 sm:mb-10 text-zinc-500 capitalize">Sitemap</h4>
              {["Home", "Work", "Careers", "Contact"].map((item, index) => (
                <a
                  key={index}
                  className="block mt-2 text-zinc-300 capitalize hover:text-sky-500"
                >
                  {item}
                </a>
              ))}
            </div>

            <div className="basis-full sm:basis-1/2 flex flex-col items-center sm:items-end mt-6 sm:mt-0">
              <p className="text-center sm:text-right text-sm text-zinc-500">
                Refokus is a pioneering digital agency driven by design and empowered by technology.
              </p>
              <img
                src="https://cdn.prod.website-files.com/664dc8b6bc52b504509197e4/66bd4a1138d6a32addf4b6b2_premium_partner_badge_enterprise_blue.webp"
                className="w-32 sm:w-40 mt-6 sm:mt-10"
                alt="Partner Badge"
              />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Footer;

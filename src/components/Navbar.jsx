import React from "react";
import Button from "./Button";

const Navbar = () => {
  return (
    <div className="max-w-screen-xl mx-auto py-6 px-4 flex items-center justify-between border-b-[1px] border-zinc-700">
      <div className="nleft flex items-center">
        <p className="text-xl font-bold">Refokus</p>
        <div className="links flex gap-10 ml-20 hidden sm:flex">
          {["Home", "Work", "Culture", "", "News"].map((elem, index) =>
            elem.length === 0 ? (
              <span key={index} className="w-[2px] h-7 bg-zinc-800"></span>
            ) : (
              <a
                key={index}
                className="text-sm flex items-center gap-1 hover:text-green-500 transition-all"
                href="#"
                aria-label={elem}
              >
                {index === 1 && (
                  <span
                    style={{ boxShadow: "0 0 0.45em #00FF19" }}
                    className="inline-block w-1 h-1 rounded-full bg-green-500"
                    aria-hidden="true"
                  ></span>
                )}
                {elem}
              </a>
            )
          )}
        </div>
      </div>
      <Button value="Get started" />
    </div>
  );
};

export default Navbar;

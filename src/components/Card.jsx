import { motion } from 'framer-motion';
import React from 'react';
import { IoIosArrowRoundForward } from "react-icons/io";

const Card = ({ width, start, para, hover = "false" }) => {
  return (
    <motion.div
      whileHover={{
        backgroundColor: hover === "true" ? "#7443ff" : "#2f2f2f", // default background color
        padding: "25px",
      }}
      className={`${width} bg-zinc-800 p-5 rounded-xl min-h-[25rem] flex flex-col justify-between transition-all`}
    >
      <div className="w-full">
        <div className="w-full flex justify-center items-center">
          <h3 className="text-lg sm:text-xl">One heading</h3>
          <IoIosArrowRoundForward />
        </div>
        <h1 className="text-3xl font-medium mt-10 sm:text-4xl">Whatever heading</h1>
      </div>
      <div className="down w-full">
        {start && (
          <>
            <h1 className="text-6xl font-semibold tracking-tight leading-none sm:text-5xl">
              Start a project
            </h1>
            <button className="rounded-full mt-5 py-2 px-3 border-[1px] border-zinc-50 hover:bg-zinc-50 hover:text-zinc-800 transition-all">
              Contact us
            </button>
          </>
        )}
        {para && (
          <p className="text-sm text-zinc-500 font-medium sm:text-base">
            Lorem ipsum dolor sit amet consectetur.
          </p>
        )}
      </div>
    </motion.div>
  );
};

export default Card;

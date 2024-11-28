import React, { useState } from "react";
import Product from "./Product";
import { motion } from "framer-motion";
import Maniv from "../assets/Maniv.mp4";
import Two from "../assets/Two.mp4";
import Three from "../assets/Three.mp4";
import Four from "../assets/Four.mp4";
import Five from "../assets/Five.mp4";
import Six from "../assets/Six.mp4";
import Seven from "../assets/Seven.mp4";

const Products = () => {
  const products = [
    {
      title: "Cula",
      description:
        "We immersed ourselves in a 3D world we created to explain how Cula's platform collects data from carbon removal processes and converts them into carbon credit certificates.",
      live: true,
      case: false,
    },
    {
      title: "BCG Platinion",
      description:
        "We redesigned BCG Platinion's website to be sophisticated and technology-driven, incorporating powerful animations and interactions while maintaining the core elements of its brand.",
      live: true,
      case: false,
    },
    {
      title: "Arqitel",
      description:
        "With a continuous 3D animation, we showcase Arqitel's approach and show how migration data translates into real estate.",
      live: true,
      case: false,
    },
    {
      title: "Sevdesk",
      description:
        "We collaborated with sevdesk, Germany and Austria's leading accounting software, to design and develop their new website in Webflow. With a strong emphasis on SEO integrity, we created a cohesive user experience across over 2,000 pages.",
      live: true,
      case: true,
    },
    {
      title: "Layout Land",
      description:
        "An interactive learning game that can educate and entertain you on the basics of web layouts in Webflow",
      live: true,
      case: false,
    },
    {
      title: "Singularity",
      description:
        "A new site for Singularity that supports their growth and showcases their true identity as industry innovators",
      live: true,
      case: false,
    },
  ];

  const [pos, setPos] = useState(0);

  const mover = (val) => {
    setPos(val * 23);
  };

  return (
    <div className="mt-32 relative px-4 md:px-10">
      {products.map((val, index) => (
        <Product key={index} val={val} mover={mover} count={index} />
      ))}
      <div className="absolute top-0 w-full pointer-events-none ">
        <motion.div
          initial={{ y: pos, x: "-50%" }}
          animate={{ y: pos + `rem` }}
          transition={{ ease: [0.76, 0, 0.24, 1], duration: 0.6 }}
          className="window absolute w-[90%] md:w-[32rem] h-[20rem] md:h-[23rem] rounded-xl left-[50%] transform -translate-x-1/2 overflow-hidden"
        >
          <motion.div
            animate={{ y: -pos + `rem` }}
            transition={{ ease: [0.76, 0, 0.24, 1], duration: 0.5 }}
            className="w-full h-full"
          >
            <video
              style={{ objectFit: "cover", position: "absolute", height: "100%", width: "100%" }}
              src={Maniv}
              autoPlay
              muted
              loop
            ></video>
          </motion.div>
          <motion.div
            animate={{ y: -pos + `rem` }}
            transition={{ ease: [0.76, 0, 0.24, 1], duration: 0.5 }}
            className="w-full h-full bg-sky-200"
          >
            <video
              style={{ objectFit: "cover", position: "absolute", height: "100%", width: "100%" }}
              src={Two}
              autoPlay
              muted
              loop
            ></video>
          </motion.div>
          <motion.div
            animate={{ y: -pos + `rem` }}
            transition={{ ease: [0.76, 0, 0.24, 1], duration: 0.5 }}
            className="w-full h-full bg-sky-300"
          >
            <video
              style={{ objectFit: "cover", position: "absolute", height: "100%", width: "100%" }}
              src={Three}
              autoPlay
              muted
              loop
            ></video>
          </motion.div>
          <motion.div
            animate={{ y: -pos + `rem` }}
            transition={{ ease: [0.76, 0, 0.24, 1], duration: 0.5 }}
            className="w-full h-full bg-sky-400"
          >
            <video
              style={{ objectFit: "cover", position: "absolute", height: "100%", width: "100%" }}
              src={Four}
              autoPlay
              muted
              loop
            ></video>
          </motion.div>
          <motion.div
            animate={{ y: -pos + `rem` }}
            transition={{ ease: [0.76, 0, 0.24, 1], duration: 0.5 }}
            className="w-full h-full bg-sky-500"
          >
            <video
              style={{ objectFit: "cover", position: "absolute", height: "100%", width: "100%" }}
              src={Seven}
              autoPlay
              muted
              loop
            ></video>
          </motion.div>
          <motion.div
            animate={{ y: -pos + `rem` }}
            transition={{ ease: [0.76, 0, 0.24, 1], duration: 0.5 }}
            className="w-full h-full bg-sky-600"
          >
            <video
              style={{ objectFit: "cover", position: "absolute", height: "100%", width: "100%" }}
              src={Two}
              autoPlay
              muted
              loop
            ></video>
          </motion.div>
        </motion.div>
      </div>
    </div>
  );
};

export default Products;

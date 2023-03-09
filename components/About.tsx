import { motion, MotionConfig } from "framer-motion";
import Image from "next/image";
import React from "react";
import akmalPortrait from "../public/assets/AkmalPortrait.jpg";

type Props = {};

const About = (props: Props) => {
  return (
    <motion.div
      initial={{
        opacity: 0,
      }}
      whileInView={{
        opacity: 1,
      }}
      transition={{
        duration: 3,
      }}
      className=" flex flex-col relative h-screen text-center md:text-left md:flex-row max-w-7xl
     px-10 justify-evenly mx-auto items-center"
    >
      <h3
        className=" absolute top-24 uppercase 
      tracking-[20px] text-gray-500 text-2xl"
      >
        About
      </h3>

      <motion.div
        initial={{
          x: -200,
          opacity: 0,
        }}
        whileInView={{
          x: 0,
          opacity: 1,
        }}
        viewport={{
          once: true,
        }}
        transition={{
          duration: 1.5,
        }}
      >
        <Image
          className=" -mb-20 md:mb-0 flex-shrink-0 w-40 h-40 rounded-full object-cover
        md:rounded-lg md:w-[1000px] md:h-96 xl:w-[1000px] xl:h-[400px]"
          alt="portrait"
          width={200}
          height={200}
          src={akmalPortrait}
        ></Image>
      </motion.div>

      <div className=" space-y-10 px-0 md:px-10">
        <h4 className=" text-2xl md:text-4xl font-semibold">
          Heres a{" "}
          <span className=" underline decoration-violet-500 font-semibold">
            little
          </span>{" "}
          background
        </h4>
        <p className=" text-xs md:text-base">
          Hey Hey! I&apos;m Akmal a Developer with a knack for creative web
          experiences. I enjoy learning new things and technologies so further
          enhance my capabilities as a developer. Currently on a mission to
          become a full fledged{" "}
          <span className=" underline text-violet-500 font-semibold">
            Full-Stack Developer
          </span>{" "}
          someday! I also climb, build plastic models and play video games
          during my spare time.
        </p>
      </div>
    </motion.div>
  );
};

export default About;

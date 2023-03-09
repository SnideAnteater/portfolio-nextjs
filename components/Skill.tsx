import { motion, MotionConfig } from "framer-motion";
import React from "react";

type Props = {
  directionLeft?: boolean;
  skillImage: string;
  skillName: string;
};

function Skill({ directionLeft, skillImage, skillName }: Props) {
  return (
    <div className=" group relative flex cursor-pointer">
      <motion.img
        initial={{
          x: directionLeft ? -200 : 200,
          opacity: 0,
        }}
        transition={{
          duration: 1,
        }}
        whileInView={{
          opacity: 1,
          x: 0,
        }}
        viewport={{
          once: true,
        }}
        className=" rounded-full  object-cover w-20 h-20
       xl:w-32 xl:h-32 filter md:w-24 md:h-24 group-hover:grayscale transition duration-300 ease-in-out"
        src={skillImage}
      ></motion.img>

      <div
        className=" absolute opacity-0 group-hover:opacity-80 transition duration-300
       ease-in-out group-hover:bg-white h-20 w-20 md:w-24 md:h-24 xl:w-32 xl:h-32
        rounded-full z-0"
      >
        <div className=" flex items-center justify-center h-full">
          <p className=" text-base font-bold text-black opacity-100">
            {skillName}
          </p>
        </div>
      </div>
    </div>
  );
}

export default Skill;

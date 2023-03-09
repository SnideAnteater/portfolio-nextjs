import { motion } from "framer-motion";
import React from "react";
import Skill from "./Skill";

type Props = {};

function Skills({}: Props) {
  return (
    <motion.div
      initial={{
        opacity: 0,
      }}
      animate={{
        opacity: 1,
      }}
      transition={{
        duration: 1.5,
      }}
      className=" h-screen flex relative flex-col text-center
   md:text-left xl:flex-row max-w-[2000px] xl:px-10 min-h-screen
    justify-center xl:space-y-0 mx-auto items-center "
    >
      <h3
        className=" absolute top-24 uppercase tracking-[20px]
       text-gray-500 text-2xl"
      >
        Skills
      </h3>

      <div className=" grid grid-cols-4 gap-5">
        <Skill
          skillName="Javascript"
          skillImage="https://cdn.svgporn.com/logos/javascript.svg"
        ></Skill>
        <Skill
          skillName="Typescript"
          skillImage="https://cdn.svgporn.com/logos/typescript-icon.svg"
        ></Skill>
        <Skill
          skillName="A-Frame"
          directionLeft
          skillImage="https://upload.wikimedia.org/wikipedia/commons/9/92/A-Frame_logo.png"
        ></Skill>
        <Skill
          skillName="Ionic"
          directionLeft
          skillImage="https://cdn.svgporn.com/logos/ionic-icon.svg"
        ></Skill>
        <Skill
          skillName=".Net"
          skillImage="https://cdn.svgporn.com/logos/dotnet.svg"
        ></Skill>
        <Skill
          skillName="React"
          skillImage="https://cdn.svgporn.com/logos/react.svg"
        ></Skill>
        <Skill
          skillName="NextJS"
          skillImage="https://cdn.svgporn.com/logos/nextjs-icon.svg"
          directionLeft
        ></Skill>
        <Skill
          skillName="Tailwind CSS"
          directionLeft
          skillImage="https://cdn.svgporn.com/logos/tailwindcss-icon.svg"
        ></Skill>
        <Skill
          skillName="SparkAR"
          skillImage="https://sparkcdneus2.azureedge.net/sparkimageassets/XP9M26JQ591LVP-12a6b8a6-ab9f-43ec-860a-62bc3ce246c6"
        ></Skill>
      </div>
    </motion.div>
  );
}

export default Skills;

import { motion } from "framer-motion";
import React from "react";
import ExperienceCard from "./ExperienceCard";
import recogine from "../public/assets/recogine.png";

type Props = {};

const WorkExperience = (props: Props) => {
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
      className=" h-screen flex relative overflow-hidden flex-col text-left
     md:flex-row max-w-full px-10 justify-evenly mx-auto items-center"
    >
      <h3 className=" absolute top-24 uppercase tracking-[20px] text-gray-500 text-2xl">
        Experiences
      </h3>

      <div
        className=" w-full flex my-5 space-x-5 overflow-x-scroll p-10 snap-x snap-mandatory 
      scrollbar scrollbar-track-slate-500/20 scrollbar-thumb-violet-500"
      >
        <ExperienceCard
          companyImage="https://www.corridor.my/wp-content/uploads/2019/05/Crave-Colour_4.png"
          company="CraveFX"
          jobTitle="Interactive Developer"
          startDate="April 2022"
          endDate="Present"
          skill1="https://upload.wikimedia.org/wikipedia/commons/9/92/A-Frame_logo.png"
          skill2="https://cdn.svgporn.com/logos/javascript.svg"
          skill3="https://cdn.svgporn.com/logos/typescript-icon.svg"
          sp1="Worked as an Interactive Developer for Web AR and Web Games using A-Frame and Javscript"
          sp2="Develop php scripts to perform CRUD operations"
          sp3="Create Instagram and Facebook filters using SparkAR"
          sp4="Handled static website deployment using FTP"
        ></ExperienceCard>
        <ExperienceCard
          companyImage="https://res.cloudinary.com/crunchbase-production/image/upload/c_lpad,h_256,w_256,f_auto,q_auto:eco,dpr_1/buidb1abibftibvittvh"
          company="Recogine Technology"
          jobTitle="Software Developer"
          startDate="January 2021"
          endDate="April 2022"
          skill1="https://cdn.svgporn.com/logos/ionic.svg"
          skill2="https://cdn.svgporn.com/logos/dotnet.svg"
          skill3="https://cdn.svgporn.com/logos/typescript-icon.svg"
          sp1="Handle mobile android and ios development using Ionic Angular with Typescript"
          sp2="Create backend API using ASP.Net"
          sp3="Frontend mobile development using Angular with Typescript"
          sp4="Design frontend applications using Figma"
        ></ExperienceCard>
      </div>
    </motion.div>
  );
};

export default WorkExperience;

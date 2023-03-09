import { motion } from "framer-motion";
import Image from "next/image";
import React from "react";

type Props = {
  companyImage: string;
  company: string;
  jobTitle: string;
  startDate: string;
  endDate: string;
  skill1: string;
  skill2: string;
  skill3: string;
  sp1: string;
  sp2: string;
  sp3: string;
  sp4: string;
};

const ExperienceCard = (props: Props) => {
  return (
    <article
      className=" flex flex-col rounded-lg items-center space-y-7
     flex-shrink-0 w-80  md:w-[600px] xl:w-[900px] snap-center
      bg-[#292929] p-10 opacity-40 hover:opacity-100 cursor-pointer
       transition-opacity duration-200 overflow-hidden"
    >
      <motion.div
        initial={{
          opacity: 0,
          y: -100,
        }}
        whileInView={{
          opacity: 1,
          y: 0,
        }}
        transition={{
          duration: 1.2,
        }}
        viewport={{
          once: true,
        }}
        className=" rounded-full
        object-cover object-center"
      >
        <Image
          className=" h-20 w-auto md:h-50"
          alt=""
          width={150}
          height={150}
          src={props.companyImage}
        ></Image>
      </motion.div>

      <div className=" px-0 md:px-10">
        <h4 className=" text-base md:text-2xl font-light">{props.jobTitle}</h4>
        <p className=" text-sm font-bold md:ext-l mt-1">{props.company}</p>
        <div className=" flex space-x-2 my-2 ">
          {/* Tech used */}
          <img
            alt=""
            className=" h-6 w-6 rounded-full"
            src={props.skill1}
          ></img>
          <img
            alt=""
            className=" h-6 w-6 rounded-full"
            src={props.skill2}
          ></img>
          <img
            alt=""
            className=" h-6 w-6 rounded-full"
            src={props.skill3}
          ></img>
        </div>

        <p className=" text-xs uppercase md:py-5 text-gray-300">
          {props.startDate} - {props.endDate}
        </p>

        <ul className=" text-xs list-disc space-y-4 ml-4 md:text-base">
          <li>{props.sp1}</li>
          <li>{props.sp2}</li>
          <li>{props.sp3}</li>
          <li>{props.sp4}</li>
        </ul>
      </div>
    </article>
  );
};

export default ExperienceCard;

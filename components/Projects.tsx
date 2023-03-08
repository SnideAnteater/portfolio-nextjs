import { motion } from "framer-motion";
import React from "react";

type Props = {};

function Projects({}: Props) {
  const projects2 = [1, 2, 3, 4];
  const projects = [
    {
      key: 1,
      projectName: "Dentsu - Meet Tomi AR",
      imageSource:
        "https://cdn.8thwall.com/apps/cover/2ffvjqc9w6a9p4060ugvq4nfgvpjll5x7oz991vvbxuk3gntkui2821w-preview-400x210",
      href: "https://dentsu.cravefx.com/",
    },
  ];
  return (
    <motion.div
      initial={{ opacity: 0 }}
      whileInView={{ opacity: 1 }}
      transition={{ duration: 1.5 }}
      className=" h-screen relative flex overflow-hidden flex-col text-left
     md:flex-row max-w-full justify-evenly mx-auto items-center z-0"
    >
      <h3
        className=" absolute top-24 uppercase tracking-[20px]
       text-gray-500 text-2xl"
      >
        Projects
      </h3>

      <div
        className=" relative w-full flex overflow-x-scroll overflow-y-hidden
       snap-mandatory snap-x z-20 scrollbar scrollbar-track-slate-500/20 scrollbar-thumb-violet-500"
      >
        {projects.map((project, i) => (
          <div
            key={project.key}
            className=" w-screen flex-shrink-0 snap-center flex flex-col
            space-y-5 items-center justify-center p-20 md:p-44 h-screen"
          >
            <a href={project.href}>
              <motion.img
                initial={{
                  y: -300,
                  opacity: 0,
                }}
                transition={{
                  duration: 1.2,
                }}
                whileInView={{
                  opacity: 1,
                  y: 0,
                }}
                viewport={{
                  once: true,
                }}
                alt=""
                src={project.imageSource}
              />
            </a>

            <div className=" space-y-10 px-0 md:px-10 max-w-6xl">
              <h4 className=" text-4xl font-semibold text-center">
                <span className=" underline decoration-violet-500/50">
                  Project {i + 1} of {projects.length}:
                </span>
                {"   "}
                {project.projectName}
              </h4>

              <p></p>
            </div>
          </div>
        ))}
      </div>

      <div
        className=" w-full absolute top-[30%] bg-violet-500/10 
      left-0 h-[500px] -skew-y-12"
      ></div>
    </motion.div>
  );
}

export default Projects;

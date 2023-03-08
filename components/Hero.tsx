import Image from "next/image";
import React from "react";
import profilePic from "../public/assets/AkmalPic.jpg";
import { Cursor, useTypewriter } from "react-simple-typewriter";
import BackgroundCircle from "./BackgroundCircle";
import Link from "next/link";

type Props = {};

const Hero = (props: Props) => {
  const [text, count] = useTypewriter({
    words: ["Developer", "Builder", "Milo Lover"],
    loop: true,
    delaySpeed: 2000,
  });
  return (
    <div className=" h-screen flex flex-col space-y-8 items-center justify-center text-center overflow-hidden">
      <BackgroundCircle></BackgroundCircle>
      <Image
        className=" relative rounded-full h-32 w-32 mx-auto object-cover"
        width={500}
        height={500}
        src={profilePic}
        alt={"Akmal"}
      ></Image>
      <div className=" z-20">
        <h2 className=" text-sm uppercase text-gray-400 pb-2 tracking-[15px]">
          Software Developer
        </h2>
        <h1 className=" text-5xl lg:text-6xl font-semibold px-10">
          <span className=" mr-3">{text}</span>
          <Cursor cursorColor="#F7AB0A" />
        </h1>

        <div className=" pt-5">
          <Link href={"#about"}>
            <button className="heroButton ">About</button>
          </Link>
          <Link href={"#experience"}>
            <button className="heroButton ">Experience</button>
          </Link>
          <Link href={"#skills"}>
            <button className="heroButton ">Skills</button>
          </Link>
          <Link href={"#projects"}>
            <button className="heroButton ">Projects</button>
          </Link>
          {/* <Link href={"#contactme"}>
            <button className="heroButton ">Contact Me</button>
          </Link> */}
        </div>
      </div>
    </div>
  );
};

export default Hero;

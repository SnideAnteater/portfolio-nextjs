import Head from "next/head";
import { Inter } from "@next/font/google";
import Header from "@/components/Header";
import Hero from "@/components/Hero";
import About from "@/components/About";
import WorkExperience from "@/components/WorkExperience";
import Skills from "@/components/Skills";
import Projects from "@/components/Projects";
import ContactMe from "@/components/ContactMe";

const inter = Inter({ subsets: ["latin"] });

export default function Home() {
  return (
    <div
      className=" text-white h-screen bg-[rgb(36,36,36)] snap-y snap-mandatory overflow-scroll z-0 overflow-y-scroll overflow-x-hidden
     scrollbar scrollbar-track-slate-500/20 scrollbar-thumb-violet-500"
    >
      <Head>
        <title>Akmal's Portfolio</title>
      </Head>

      {/* Header */}
      <Header></Header>

      {/* Me */}
      <section id="hero" className=" snap-start">
        <Hero></Hero>
      </section>

      {/* About */}
      <section id="about" className=" snap-center">
        <About></About>
      </section>

      {/* Experience */}
      <section id="experience" className=" snap-center">
        <WorkExperience></WorkExperience>
      </section>

      {/* Skills */}
      <section id="skills" className=" snap-center ">
        <Skills></Skills>
      </section>

      {/* Projects */}
      <section id="projects" className=" snap-start">
        <Projects />
      </section>

      {/* Contact Me */}
      {/* <section id="contactme" className=" snap-start">
        <ContactMe />
      </section> */}
    </div>
  );
}

import React, { useState } from "react";
import Modal from "react-modal";
import { motion } from "framer-motion";
import { twMerge } from "tailwind-merge";
import { FiArrowRight, FiMapPin } from "react-icons/fi";
import { SiGithub, SiLinkedin , SiLeetcode, SiMinutemailer} from "react-icons/si";
import ReactRotatingText from "react-rotating-text";

import BubbleText from "./bubbble/BubbleText";
import { LuCode2 } from "react-icons/lu";
import DotGrid from "./WaterDrop";
import { techStack } from "../data/data";
import { IoArrowForwardCircle } from "react-icons/io5";
import { IoMailOpenOutline } from "react-icons/io5";

Modal.setAppElement("#root");

export const RevealBento = () => {
  return (
    <div className="min-h-screen bg-zinc-900 px-4 py-12 text-zinc-50 flex justify-center items-center">
      <motion.div
        initial="initial"
        animate="animate"
        transition={{
          staggerChildren: 0.05,
        }}
        className="mx-auto grid max-w-4xl grid-flow-dense grid-cols-12 gap-4"
      >
        <HeaderBlock />
        <SocialsBlock />
        <AboutBlock />
        <ProjectBlock
          title="Jog It Up"
          description="A comprehensive fitness tracking application designed to help users monitor their Runs and progress."
          link="https://github.com/shivGam/JogItUp"
          preview="https://github.com/shivGam/JogItUp/blob/main/JogItUp.gif?raw=true"
        />
        <ProjectBlock
          title="Real World"
          description="A clone of the Medium platform, enabling users to read, write, and get articles."
          link="https://github.com/shivGam/realWorld"
          preview="https://github.com/shivGam/realWorld/blob/main/realworld.gif?raw=true"
        />
        <LocationBlock />
        <TechStackBlock />
        <ComingSoonBlock />
      </motion.div>
    </div>
  );
};

const Block = ({ className, ...rest }) => {
  return (
    <motion.div
      variants={{
        initial: {
          scale: 0.5,
          y: 50,
          opacity: 0,
        },
        animate: {
          scale: 1,
          y: 0,
          zIndex: 1,
          opacity: 1,
        },
      }}
      transition={{
        type: "spring",
        mass: 3,
        stiffness: 400,
        damping: 50,
      }}
      style={{
        opacity: 0.99,
      }}
      className={twMerge(
        "col-span-4 rounded-lg border border-zinc-700 bg-zinc-800 p-6",
        className
      )}
      {...rest}
    />
  );
};

const HeaderBlock = () => (
  <Block className="col-span-12 row-span-2 md:col-span-6"
    whileHover= {{
      scale: 1.02,
      transition: { duration: 0.3 },
        filter: "invert(100%)",
    }}
  >
    <img
      src="/avatar.svg"
      alt="avatar"
      className="mb-4 size-14 rounded-full"
    />
    <h1 className="mb-6 text-4xl font-medium leading-tight">
      <BubbleText text={"Hi, I'm Shivdatt Jangam"}/>
      <span className="text-zinc-400">
      Crafting code, one pixel at a time.
      </span>
    </h1>
    <div className="flex flex-row justify-between">

    <a
      href="https://drive.google.com/file/d/1ocW2MSbrC-2xHFSPbNAMSJM04AYispr4/view?usp=sharing"
      target="_blank" rel="noopener noreferrer"
      className="flex items-center gap-1 text-red-300 hover:underline text-xl"
      style={{
        // no underline
        textDecoration: "none",
      }}
    >
      <div className="flex flex-row items-center gap-2">
      Resume <IoArrowForwardCircle />
      </div>
    </a>

    <a
      href="mailto:shivdattjangam2003@gmail.com"
      target="_blank" rel="noopener noreferrer"
      className="flex items-center gap-1 text-red-300 hover:underline text-xl"
      style={{
        // no underline
        textDecoration: "none",
      }}
    >
      <div className="flex flex-row items-center gap-2">
      Contact me <IoMailOpenOutline />
      </div>
    </a>
    </div>
  </Block>
);

const SocialsBlock = () => (
  <>
    <Block
      whileHover={{
        rotate: "2.5deg",
        scale: 1.1,
        filter: "invert(100%)",
      }}
      className="col-span-6 bg-[#6c6c6c] md:col-span-3"
    >
      <a
        href="https://leetcode.com/u/shivdatt08"
        target="_blank" rel="noopener noreferrer"
        className="grid h-full place-content-center text-3xl text-white"
      >
        <SiLeetcode />
      </a>
    </Block>
    <Block
      whileHover={{
        rotate: "-2.5deg",
        scale: 1.1,
        filter: "invert(100%)",
      }}
      className="col-span-6 bg-[#24292e] md:col-span-3"
    >
      <a
        href="https://github.com/shivGam"
        target="_blank" rel="noopener noreferrer"
        className="grid h-full place-content-center text-3xl text-white"
      >
        <SiGithub />
      </a>
    </Block>
    <Block
      whileHover={{
        rotate: "-2.5deg",
        scale: 1.1,
        filter: "invert(100%)",
      }}
      className="col-span-6 bg-[#0077B5] md:col-span-3"
    >
      <a
        href="https://www.linkedin.com/in/shivdatt-jangam-96b814254/"
        target="_blank" rel="noopener noreferrer"
        className="grid h-full place-content-center text-3xl text-black"
      >
        <SiLinkedin 
            color="white"
        />
      </a>
    </Block>
    <Block
      whileHover={{
        rotate: "2.5deg",
        scale: 1.1,
        filter: "invert(100%)",
      }}
      className="col-span-6 bg-black md:col-span-3"
    >
      <a
        href="mailto:shivdattjangam2003@gmail.com"
        target="_blank" rel="noopener noreferrer"
        className="grid h-full place-content-center text-3xl text-white"
      >
        <SiMinutemailer />
      </a>
    </Block>
  </>
);

const AboutBlock = () => (
  <Block 
    className="col-span-12 text-3xl leading-snug"
    whileHover={{
      scale: 1.02,
      transition: { duration: 0.3 },
      filter:"invert(100%)"
    }}
  >
    <p className="font-sans text-3xl font-bold leading-tight text-white mb-4">
      I like building clean, scalable and maintainable apps.
    </p>
    <p className="font-sans text-xl leading-relaxed text-gray-300">
      I'm currently in my final year studying Artificial Intelligence & Data Science at TSEC.
      <br />
      I primarily build with Kotlin, XML, Jetpack Compose, and other Libraries.
    </p>
  </Block>
);

const LocationBlock = () => (
    <a
        href="https://maps.app.goo.gl/jSrgYcaB4wDv3Frh8"
        target="_blank"
        rel="noopener noreferrer"
        className="col-span-12 md:col-span-4"
        style={{
          zIndex: 1,
        }}
    >
        <Block
            className="col-span-12 flex flex-col items-center gap-4 md:col-span-4"
            whileHover={{
                filter: "invert(100%)",
            }}
        >
            <FiMapPin className="text-3xl" />
            <p className="text-center text-lg text-zinc-400">Mumbai, India</p>
        </Block>
    </a>
);

const TechStackBlock = () => (
    <Block className="col-span-12 flex flex-col items-center justify-center gap-4 md:col-span-4"
        whileHover={{
            filter: "invert(100%)",
        }}
    >
        <LuCode2 className="text-3xl" />
        <ReactRotatingText
            items={techStack}
            eraseMode="erase"
            typingInterval={100}
            className="text-xl text-center text-zinc-400 w-full"
        />
    </Block>
);

const ComingSoonBlock = () => (
    <Block className="col-span-12 md:col-span-4 flex flex-col p-3"
        whileHover={{
            filter: "invert(100%)",
        }}
    >
        <div
            style={{
                overflow: "hidden",
            }}
            >

            <DotGrid />
        </div>
    </Block>
);

const ProjectBlock = ({ title, description, link, preview }) => {
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [isLoading, setIsLoading] = useState(true); // Loading state for GIF

  const openModal = () => setIsModalOpen(true);
  const closeModal = () => setIsModalOpen(false);

  const handleImageLoad = () => setIsLoading(false); // Update loading state once the image is loaded

  return (
    <>
      <Block
        className="col-span-6 md:col-span-6 flex flex-col justify-between"
        whileHover={{ scale: 1.02, filter: "invert(100%)" }}
      >
        <div>
          <h3 className="text-2xl font-bold mb-2 text-white">{title}</h3>
          <p className="text-zinc-300 mb-4">{description}</p>
        </div>
        <div className="flex justify-between items-center">
          <a
            href={link}
            target="_blank"
            rel="noopener noreferrer"
            className="flex items-center gap-2 text-blue-400"
          >
            View Project <FiArrowRight />
          </a>
          <button
            onClick={openModal}
            className="flex items-center gap-2 text-blue-400"
          >
            View Project <FiArrowRight />
          </button>
        </div>
      </Block>

      <Modal
        isOpen={isModalOpen}
        onRequestClose={closeModal}
        contentLabel={`${title} Preview`}
        className="relative z-50 bg-zinc-900 p-6 rounded-lg max-w-lg max-w-md mx-auto my-16 outline-none shadow-lg"
        overlayClassName="fixed inset-0 z-40 bg-black bg-opacity-50 flex justify-center items-center backdrop-blur-sm"
      >
        <button
          onClick={closeModal}
          className="text-red-500 text-lg font-bold mb-4 float-right"
        >
          Close
        </button>
        <h2 className="text-2xl text-white mb-4">{title} - Preview</h2>
        <div className="relative flex items-center justify-center">
          {isLoading && (
            <div className="absolute inset-0 flex items-center justify-center bg-zinc-800 rounded-lg">
              <div className="animate-spin h-8 w-8 border-4 border-blue-500 border-t-transparent rounded-full"></div>
            </div>
          )}
          <img
            src={preview}
            alt={`${title} preview`}
            className={`w-3/4 rounded-lg ${isLoading ? "opacity-0" : "opacity-100"}`}
            onLoad={handleImageLoad} // Triggered when the image is fully loaded
          />
        </div>
      </Modal>
    </>
  );
};
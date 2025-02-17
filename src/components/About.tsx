"use client";
import { Paragraph } from "@/components/Paragraph";
import Image from "next/image";

import { motion } from "framer-motion";

export default function About() {
  const images = [
    "/images/projects/visobl.png",
    "/images/projects/mibu.webp",
    "/images/projects/blendy.png",
    "/images/projects/rx.png",
    "/images/projects/sigortacimuzman.png",
  ];
  return (
    <div>
      <div className="grid grid-cols-2 md:grid-cols-5 gap-10 my-10">
        {images.map((image, index) => (
          <motion.div
            key={image}
            initial={{
              opacity: 0,
              y: -50,
              rotate: 0,
            }}
            animate={{
              opacity: 1,
              y: 0,
              rotate: index % 2 === 0 ? 3 : -3,
            }}
            transition={{ duration: 0.2, delay: index * 0.1 }}
          >
            <Image
              src={image}
              width={200}
              height={400}
              alt="about"
              className="rounded-md transform rotate-3 shadow-xl block w-full h-40 md:h-60 hover:rotate-0 transition duration-200 object-scale-down"
            />
          </motion.div>
        ))}
      </div>

      <div className="max-w-4xl">
        <Paragraph className=" mt-4">
          {`Hey, I’m Alpaslan DOGAN—an ever-evolving developer, passionate designer, and a storyteller through both code and visuals. My journey into the tech world began with a simple motto: “just teach me software.” Starting out, I dived into C# through pharmacy automation systems, mastering WinForms and gradually expanding into PostgreSQL and MySQL. Along the way, I worked my way up to team lead, managing a range of projects that spanned different domains.`}
        </Paragraph>

        <Paragraph className=" mt-4">
          {`One of my proudest achievements during these early years was developing Sigortacım Uzman, a WinForms application designed to simplify processes for insurance companies. This project was my introduction to ClickOnce for distribution and set the stage for many more accomplishments.`}
        </Paragraph>
        <Paragraph className=" mt-4">
          {`As time passed, my curiosity led me to Node.js and later React, where I honed my skills through countless projects. However, I quickly realized that to create truly seamless experiences, I needed to focus on design as well. This realization led me to Figma, a tool that opened new horizons for me in UI/UX design. Designing for all platforms—mobile, web, and desktop—became second nature, and my projects were better for it.`}
        </Paragraph>
        <Paragraph className=" mt-4">
          {`My journey didn’t stop there. I ventured into Open Banking, where I gained valuable insights into the world of financial tech. I also branched out into mobile app design, working on projects like Mibu, which led me to explore Flutter as a mobile development framework.`}
        </Paragraph>
        <Paragraph className=" mt-4">
          {`When I wasn't immersed in coding and design, I started learning Adobe Premiere Pro to further enhance my creative skillset. I worked on promotional and investor videos for projects like Blendy and Visobl, and even found time to develop my own crypto trading bot, Alpanet-AI.`}
        </Paragraph>
        <Paragraph className=" mt-4">
          {`Through it all, one thing remains constant: my drive to keep learning, building, and pushing the limits of what’s possible. Whether it’s through crafting beautiful code, designing engaging interfaces, or creating compelling content, I’m always striving to improve.`}
        </Paragraph>
        <Paragraph className=" mt-4 text-bold">
          {`Thanks for joining me on this journey! Let’s continue exploring, creating, and growing together.`}
        </Paragraph>
      </div>
    </div>
  );
}

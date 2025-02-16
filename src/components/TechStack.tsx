import Image from "next/image";
import React from "react";
import { Heading } from "./Heading";
import { twMerge } from "tailwind-merge";
import { Marquee } from "@/components/ui/marquee"

export const TechStack = () => {
  const stack = [
    {
      title: "Next.js",
      src: "/whoisalpanet/images/logos/next.png",

      className: "h-10 w-14",
    },
    {
      title: "Figma",
      src: "/whoisalpanet/images/logos/figma.png",

      className: "h-10 w-8",
    },
    {
      title: "Framer Motion",
      src: "/whoisalpanet/images/logos/framer.webp",

      className: "h-10 w-10",
    },
    {
      title: "Node",
      src: "/whoisalpanet/images/logos/node.png",

      className: "h-10 w-12",
    },
    {
      title: "Tailwind",
      src: "/whoisalpanet/images/logos/tailwind.png",

      className: "h-10 w-24",
    },
    {
      title: "Vercel",
      src: "/whoisalpanet/images/logos/vercel.png",

      className: "h-10 w-24",
    },
  ];
  return (
    <div>
      <Heading
        as="h2"
        className="font-black text-lg md:text-lg lg:text-lg mt-20 mb-4"
      >
        Tech Stack
      </Heading>
      <div className="flex flex-wrap">
        <Marquee>
          {stack.map((item) => (
            <Image
              src={item.src}
              key={item.src}
              width={`200`}
              height={`200`}
              alt={item.title}
              className={twMerge("object-contain mr-4 mb-4", item.className)}
            />
          ))}
        </Marquee>

      </div>
    </div>
  );
};

import { Container } from "@/components/Container";
import { Heading } from "@/components/Heading";
import { Highlight } from "@/components/Highlight";
import { Paragraph } from "@/components/Paragraph";
import { Products } from "@/components/Products";
import { TechStack } from "@/components/TechStack";
import Image from "next/image";

export default function Home() {
  return (
    <Container>
      <span className="text-4xl">👋</span>
      <Heading className="font-black">Hello there! I&apos;m Alpaslan</Heading>
      <Paragraph className="max-w-xl mt-4">
        {`I'm a Frontend UI/UX developer, designer, and storyteller who thrives on building seamless digital experiences. My journey started with C# and WinForms, evolving into Node.js, React, and UI/UX design with Figma. Along the way, I explored Open Banking, mobile development with Flutter, and even video editing for promotional content.`}
      </Paragraph>
      <Paragraph className="max-w-xl mt-4">
        {`Whether it's crafting scalable web apps, designing intuitive interfaces, or developing AI-driven solutions like my crypto trading bot, Alpanet-AI, I’m always pushing the boundaries of what’s possible.`}
      </Paragraph>
      <Heading
        as="h2"
        className="font-black text-lg md:text-lg lg:text-lg mt-20 mb-4"
      >
        My Worked Projects
      </Heading>
      <Products />
      <TechStack />
    </Container>
  );
}

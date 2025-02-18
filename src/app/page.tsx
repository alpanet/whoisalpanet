import { Container } from "@/components/Container";
import { Heading } from "@/components/Heading";
import { Highlight } from "@/components/Highlight";
import { LogoStack } from "@/components/LogoStack";
import { Paragraph } from "@/components/Paragraph";
import { Products } from "@/components/Products";
import { TechStack } from "@/components/TechStack";
import Image from "next/image";
import { Typewriter } from "@/components/ui/typewriter"

export default function Home() {
  return (
    <Container>
      <span className="text-4xl">👋</span>
      <div className="whitespace-pre-wrap text-3xl">
        <span>{"Hi there I'm "}</span>
        <Typewriter
          text={[
            "Alpanet",
            "Alpaslan",
          ]}
          speed={70}
          className="text-gray-500"
          waitTime={1500}
          deleteSpeed={40}
          cursorChar={"_"}
        />
      </div>
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
      <LogoStack />
    </Container>
  );
}

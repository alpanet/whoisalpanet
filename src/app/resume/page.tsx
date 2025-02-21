"use client"
import { Container } from "@/components/Container";
import { Heading } from "@/components/Heading";
import { Highlight } from "@/components/Highlight";
import { Paragraph } from "@/components/Paragraph";
import { WorkHistory } from "@/components/WorkHistory";
import DownloadCv from "@/components/DownloadCv";

export default function Home() {
  return (
    <Container>
      <span className="text-4xl">💼</span>
      <Heading className="font-black">Work History</Heading>
      <Paragraph className="max-w-xl mt-4">
        I&apos;m a Frontend UI/UX developer that loves{" "}
        <Highlight>building products</Highlight> and web apps that can impact
        millions of lives
      </Paragraph>
      <Paragraph className="max-w-lg mt-4 text-gray-400">
        For more details about my experience and skills, feel free to download my CV.
      </Paragraph>
      <DownloadCv></DownloadCv>
      <WorkHistory />
    </Container>
  );
}

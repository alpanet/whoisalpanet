import { Metadata } from "next";

import About from "@/components/About";

export const metadata: Metadata = {
  title: "About | Alpaslan DOGAN",
  description:
    "Alpaslan DOGAN is a Frontend and UI/UX developer, video editor, AI/ML interested. He is a digital worker and while working remotely.",
};

export default function AboutPage() {
  return (
    <About />
  );
}

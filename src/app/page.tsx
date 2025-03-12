import HomePage from "@/components/Home";
import { Metadata } from "next";

export const metadata: Metadata = {
  title: "Home | Alpaslan DOGAN",
  description:
    "Alpaslan DOGAN is a Frontend and UI/UX developer, video editor, AI/ML interested. He is a digital worker and while working remotely.",
};


export default function Home() {

  return (
    <HomePage></HomePage>
  );
}

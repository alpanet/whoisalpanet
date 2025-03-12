import { Products } from "@/components/Products";
import { Metadata } from "next";

export const metadata: Metadata = {
  title: "Project | Alpaslan DOGAN",
  description:
    "Alpaslan DOGAN is a Frontend and UI/UX developer, video editor, AI/ML interested. He is a digital worker and while working remotely.",
};

export default function Projects() {
  return (
    <Products />
  );
}

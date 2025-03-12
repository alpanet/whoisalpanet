"use client";
import { Paragraph } from "@/components/Paragraph";
import Image from "next/image";
import { useTranslation } from "react-i18next";
import { motion } from "framer-motion";
import { Container } from "./Container";
import { Heading } from "./Heading";

export default function About() {
  const { t } = useTranslation();
  const images = [
    "images/projects/visobl.png",
    "images/projects/mibu.webp",
    "images/projects/blendy-horizontal.png",
    "images/projects/rx.png",
    "images/projects/sigortacimuzman.png",
  ];
  return (
    <Container>
      <span className="text-4xl">💬</span>
      <Heading className="font-black">{t("about_me")}</Heading>
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
            {t("hey_im_alpaslan_DOGAN_an_ever_evolving")}
          </Paragraph>

          <Paragraph className=" mt-4">
            {t("one_of_my_proudest_achievements")}
          </Paragraph>
          <Paragraph className=" mt-4">
            {t("as_time_passed_my_curiosity")}
          </Paragraph>
          <Paragraph className=" mt-4">
            {t("my_journey_didnt_stop")}
          </Paragraph>
          <Paragraph className=" mt-4">
            {t("when_i_wasnt_immersed")}
          </Paragraph>
          <Paragraph className=" mt-4">
            {t("through_it_all_one_thing")}
          </Paragraph>
          <Paragraph className=" mt-4 text-bold">
            {t("thanks_for_joining_me")}
          </Paragraph>
        </div>
      </div>
    </Container>

  );
}

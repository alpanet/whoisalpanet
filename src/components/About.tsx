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
    "images/projects/minglogo.png",
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
        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6 md:gap-8 my-10">
          {images.map((image, index) => (
            <motion.div
              key={image}
              initial={{
                opacity: 0,
                scale: 0.8,
                rotate: index % 2 === 0 ? 2 : -2,
              }}
              whileInView={{
                opacity: 1,
                scale: 1,
                rotate: 0,
              }}
              whileHover={{
                scale: 1.05,
                rotate: index % 2 === 0 ? 2 : -2,
                transition: { duration: 0.2 }
              }}
              viewport={{ once: true }}
              transition={{ duration: 0.4, delay: index * 0.1 }}
              className="relative aspect-[4/3] w-full"
            >
              <div className="absolute inset-0 bg-gray-100 dark:bg-neutral-800 rounded-2xl overflow-hidden shadow-md hover:shadow-xl transition-shadow duration-300">
                <Image
                  src={image}
                  fill
                  alt="about"
                  className="object-contain object-center"
                  sizes="(max-width: 768px) 50vw, (max-width: 1200px) 33vw, 25vw"
                />
              </div>
            </motion.div>
          ))}
        </div>

        <div className="max-w-full">
          <Paragraph className="mt-4 text-justify">
            {t("hey_im_alpaslan_DOGAN_an_ever_evolving")}
          </Paragraph>

          <Paragraph className="mt-4 text-justify">
            {t("one_of_my_proudest_achievements")}
          </Paragraph>
          <Paragraph className="mt-4 text-justify">
            {t("as_time_passed_my_curiosity")}
          </Paragraph>
          <Paragraph className="mt-4 text-justify">
            {t("my_journey_didnt_stop")}
          </Paragraph>
          <Paragraph className="mt-4 text-justify">
            {t("when_i_wasnt_immersed")}
          </Paragraph>
          <Paragraph className="mt-4 text-justify">
            {t("through_it_all_one_thing")}
          </Paragraph>
          <Paragraph className="mt-4 text-justify font-bold">
            {t("thanks_for_joining_me")}
          </Paragraph>
        </div>
      </div>
    </Container>

  );
}

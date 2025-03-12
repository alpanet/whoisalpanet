"use client";
import { timeline } from "@/constants/timeline";
import React from "react";
import { Paragraph } from "./Paragraph";
import { Heading } from "./Heading";
import {
  IconCheck,
  IconCheckbox,
  IconCircleCheckFilled,
} from "@tabler/icons-react";
import { useTranslation } from "react-i18next";
import { Container } from "./Container";
import { Highlight } from "./Highlight";
import DownloadCv from "./DownloadCv";

export const WorkHistory = () => {
  const { t } = useTranslation();
  return (
    <Container>
      <span className="text-4xl">💼</span>
      <Heading className="font-black">{t("work_history")}</Heading>
      <Paragraph className="max-w-xl mt-4">
        {t("i_m_a_frontend_ui_ux")}
        <Highlight>{t("building_products")}</Highlight>{t("and_web_apps_that")}
      </Paragraph>
      <Paragraph className="max-w-lg mt-4 text-gray-400">
        {t("for_more_details_about")}
      </Paragraph>
      <DownloadCv></DownloadCv>
      <div>
        {timeline.map((item, index) => (
          <div
            className="flex md:flex-row flex-col space-y-10 md:space-y-0 space-x-10 my-12 relative"
            key={`timeline-${index}`}
          >
            <Paragraph className="w-48">{item.date}</Paragraph>
            <div className="lg:w-full">
              <Heading
                as="h5"
                className="text-lg md:text-lg lg:text-lg text-blue-500 dark:text-blue-50"
              >
                {item.company}
              </Heading>
              <Paragraph className="text-base md:text-base lg:text-base font-semibold">
                {item.title}
              </Paragraph>
              <Paragraph className="text-sm md:text-sm lg:text-sm mb-4">
                {item.description}
              </Paragraph>

              {item.responsibilities.map((responsibility, index) => (
                <Step key={responsibility}>{t(responsibility)}</Step>
              ))}
            </div>
          </div>
        ))}
      </div>
    </Container>

  );
};

const Step = ({ children }: { children: React.ReactNode }) => {
  return (
    <div className="flex space-x-1 items-start my-2">
      <IconCircleCheckFilled className="h-3 w-4 mt-1 text-neutral-300" />
      <Paragraph className="text-sm md:text-sm lg:text-sm">
        {children}
      </Paragraph>
    </div>
  );
};

"use client"
import { Container } from "@/components/Container";
import { Heading } from "@/components/Heading";
import { LogoStack } from "@/components/LogoStack";
import { Paragraph } from "@/components/Paragraph";
import { Products } from "@/components/Products";
import { Typewriter } from "@/components/ui/typewriter"
import DownloadCv from "@/components/DownloadCv";
import { useTranslation } from "react-i18next";

export default function HomePage() {
  const { t } = useTranslation();

  return (
    <Container>
      <span className="text-4xl">👋</span>
      <div className="whitespace-pre-wrap text-3xl">
        <span>{t("hi_there_i_m")}</span>
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
        {t("page_paragraph_first")}
      </Paragraph>
      <Paragraph className="max-w-xl mt-4">
        {t("page_paragraph_second")}
      </Paragraph>
      <DownloadCv></DownloadCv>
      <Products />
      <LogoStack />
    </Container>
  );
}

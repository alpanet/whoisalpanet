"use client"
import { Paragraph } from "@/components/Paragraph";
import { Popover, PopoverContent, PopoverTrigger } from "@/components/ui/popover";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Mail } from "lucide-react";
import { useEffect, useId, useState } from "react";
import ReCAPTCHA from "react-google-recaptcha";
import emailjs from "emailjs-com";
import { useTranslation } from "react-i18next";

function DownloadCv() {
  const id = useId();
  const { t } = useTranslation();
  const [email, setEmail] = useState("");
  const [captchaVerified, setCaptchaVerified] = useState(false);
  const [error, setError] = useState("");

  const handleCaptcha = (token: string | null) => {
    if (token) setCaptchaVerified(true);
  };

  const isEmailValid = (email: string) => /\S+@\S+\.\S+/.test(email);

  const downloadCV = () => {
    if (isEmailValid(email)) {
      emailjs
        .send("service_85ppvxo", "template_2k4z5am", { email }, "ZpNgHVQAS4hLGwM9v")
        .then((response) => {
          console.log("Email sent successfully:", response);
          const link = document.createElement("a");
          link.href = "https://alpanet.github.io/whoisalpanet/resume/ALPASLAN-DOGAN-RESUME.pdf";
          link.download = "ALPASLAN-DOGAN-RESUME.pdf";
          document.body.appendChild(link);
          link.click();
          document.body.removeChild(link);
        })
        .catch((error) => {
          console.error("Error sending email:", error);
        });
    } else {
      setError(t("please_enter_a_valid_email"));
    }
  };

  useEffect(() => {
    if (email != "" && !isEmailValid(email)) {
      setError(t("please_enter_a_valid_email"));
    }
    else {
      setError("");
    }
  }, [email])
  return (
    <div className="flex justify-center items-center lg:justify-start">
      <Popover>
        <PopoverTrigger asChild>
          <Button variant="outline" className="mt-4 mb-0 bg-black text-white">{t("download_resume")}</Button>
        </PopoverTrigger>
        <PopoverContent className="max-w-[340px] py-3 shadow-none" side="bottom">
          <div className="space-y-3">
            <div className="space-y-4">
              <p className="text-lg font-medium font-black">{t("drop_your_email_to_get_my_cv")}</p>
              <div className="text-xs text-muted-foreground">
                <Paragraph className="max-w-xl mt-4">
                  {t("want_to_check_out_my_cv")}
                </Paragraph>
                <Paragraph className="max-w-xl mt-4">
                {t("once_you_complete_the_reCAPTCHA")}
                </Paragraph>
              </div>
              <div className="min-w-[290px] space-y-2 ">
                <div className="relative">
                  <Input id={id}
                    className="peer pe-9"
                    placeholder="Email"
                    type="email"
                    onChange={(e) => setEmail(e.target.value)}
                  />
                  <div className="pointer-events-none absolute inset-y-0 end-0 flex items-center justify-center pe-3 text-muted-foreground/80 peer-disabled:opacity-50">
                    <Mail size={16} strokeWidth={2} aria-hidden="true" />
                  </div>
                </div>
              </div>
              {error != "" ?
                <p className="mt-2 text-xs text-destructive" role="alert" aria-live="polite">
                  {t("please_enter_a_valid_email")}
                </p> : ""
              }
              <div className="flex justify-center items-center">
                <ReCAPTCHA
                  sitekey="6LeKQ9wqAAAAAGxY7obFH9-mM3egJQi9-6K9NZgv"
                  onChange={handleCaptcha}
                />
              </div>
            </div>
            <div className="flex justify-center items-center">
              <Button
                size="sm"
                className={`p-2 rounded w-full text-white ${captchaVerified && isEmailValid(email) ? "bg-blue-500" : "bg-gray-400"}`}
                disabled={!captchaVerified || !isEmailValid(email)}
                onClick={() => downloadCV()}
              >
                {t("download")}
              </Button>
            </div>
          </div>
        </PopoverContent>
      </Popover>
    </div>
  )
}

export default DownloadCv
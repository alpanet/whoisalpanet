"use client"
import { Container } from "@/components/Container";
import { Heading } from "@/components/Heading";
import { Highlight } from "@/components/Highlight";
import { Paragraph } from "@/components/Paragraph";
import { Products } from "@/components/Products";
import { WorkHistory } from "@/components/WorkHistory";
import Image from "next/image";
import { Popover, PopoverContent, PopoverTrigger } from "@/components/ui/popover";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Mail } from "lucide-react";
import { useEffect, useId, useState } from "react";
import ReCAPTCHA from "react-google-recaptcha";
import emailjs from "emailjs-com";

export default function Home() {
  const id = useId();
  const [email, setEmail] = useState("");
  const [captchaVerified, setCaptchaVerified] = useState(false);
  const [error, setError] = useState("");

  const handleCaptcha = (token: string | null) => {
    if (token) setCaptchaVerified(true);
  };

  const isEmailValid = (email: string) => /\S+@\S+\.\S+/.test(email);

  const downloadCV = () => {
    const link = document.createElement("a");
    link.href = "https://alpanet.github.io/whoisalpanet/resume/ALPASLAN-DOGAN-RESUME.pdf";
    link.download = "ALPASLAN-DOGAN-RESUME.pdf";
    document.body.appendChild(link);
    link.click();
    document.body.removeChild(link);

    if (isEmailValid(email)) {
      emailjs
        .send("service_85ppvxo", "template_2k4z5am", { email }, "ZpNgHVQAS4hLGwM9v")
        .then((response) => {
          console.log("Email sent successfully:", response);
        })
        .catch((error) => {
          console.error("Error sending email:", error);
        });
    } else {
      setError("Please enter a valid email.");
    }

  };

  useEffect(() => {
    if (email != "" && !isEmailValid(email)) {
      setError("Please enter a valid email.");
    }
    else {
      setError("");
    }
  }, [email])

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
      <div className="flex justify-center items-center lg:justify-start">
        <Popover>
          <PopoverTrigger asChild>
            <Button variant="outline" className="mt-4 mb-0">Download Resume</Button>
          </PopoverTrigger>
          <PopoverContent className="max-w-[340px] py-3 shadow-none" side="bottom">
            <div className="space-y-3">
              <div className="space-y-4">
                <p className="text-lg font-medium font-black">Drop Your Email to Get My CV</p>
                <div className="text-xs text-muted-foreground">
                  <Paragraph className="max-w-xl mt-4">
                    {`Want to check out my CV? Just enter your email so I know who’s downloading it. Don’t worry, no spam—just keeping track!`}
                  </Paragraph>
                  <Paragraph className="max-w-xl mt-4">
                    {`🔒 Once you complete the reCAPTCHA, the "Download CV" button will be ready to go.`}
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
                    Email is invalid
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
                  Download
                </Button>
              </div>
            </div>
          </PopoverContent>
        </Popover>
      </div>

      <WorkHistory />
    </Container>
  );
}

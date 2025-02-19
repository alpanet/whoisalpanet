"use client";
import React, { useEffect, useState } from "react";
import ReCAPTCHA from "react-google-recaptcha";
import emailjs from "emailjs-com";
import { Button } from "./ui/button";
import { Input } from "@/components/ui/input";
import { useId } from "react";
import { useToast } from "@/hooks/use-toast"


const defaultFormState = {
  name: {
    value: "",
    error: "",
  },
  email: {
    value: "",
    error: "",
  },
  message: {
    value: "",
    error: "",
  },
};
export const Contact = () => {
  const { toast } = useToast()
  const [formData, setFormData] = useState(defaultFormState);
  const id = useId();
  const [captchaVerified, setCaptchaVerified] = useState(false);
  const isEmailValid = (email: string) => /\S+@\S+\.\S+/.test(email);
  const [error, setError] = useState("");

  const handleCaptcha = (token: string | null) => {
    if (token) setCaptchaVerified(true);
  };

  const handleSubmit = (e: any) => {
    e.preventDefault();
    if (isEmailValid(formData.email.value)) {
      const tempContent = {
        name: formData.name.value,
        email: formData.email.value,
        message: formData.message.value,
      }
      setCaptchaVerified(false)
      emailjs
        .sendForm("service_85ppvxo", "template_gbh6alt", e.target, "ZpNgHVQAS4hLGwM9v")
        .then((response) => {
          toast({
            description: "Your message has been sent.",
          })
          console.log("Email sent successfully:", response);
        })
        .catch((error) => {
          toast({
            variant:"destructive",
            description: "Error sending email:",
          })
          console.error("Error sending email:", error);
        });
    }
  };

  useEffect(() => {
    if (formData.email.value != "" && !isEmailValid(formData.email.value)) {
      setError("Please enter a valid email.");
    }
    else {
      setError("");
    }
  }, [formData.email.value])

  return (
    <form className="form" onSubmit={handleSubmit}>
      <div className="flex flex-col md:flex-row justify-between gap-5">
        <input
          type="text"
          name="name"
          placeholder="Your Name"
          className="bg-neutral-100 focus:outline-none focus:ring-2 focus:ring-neutral-200 px-2 py-2 rounded-md text-sm text-neutral-700 w-full"
          value={formData.name.value}
          onChange={(e) => {
            setFormData({
              ...formData,
              name: {
                value: e.target.value,
                error: "",
              },
            });
          }}
        />
        <div className="space-y-2 min-w-[300px]">
          <Input
            id={id}
            type="email"
            name="email"
            placeholder="Your email address"
            className="bg-neutral-100 focus:outline-none focus:ring-2 focus:ring-neutral-200 px-2 py-2 rounded-md text-sm text-neutral-700 w-full"
            value={formData.email.value}
            onChange={(e) => {
              setFormData({
                ...formData,
                email: {
                  value: e.target.value,
                  error: "",
                },
              });
            }}
          />
          {error != "" ?
            <p className="mt-2 text-xs text-destructive" role="alert" aria-live="polite">
              Email is invalid
            </p> : ""
          }
        </div>

      </div>
      <div>
        <textarea
          placeholder="Your Message"
          name="message"
          rows={10}
          className="bg-neutral-100 focus:outline-none focus:ring-2 focus:ring-neutral-200 px-2 mt-4 py-2 rounded-md text-sm text-neutral-700 w-full"
          value={formData.message.value}
          onChange={(e) => {
            setFormData({
              ...formData,
              message: {
                value: e.target.value,
                error: "",
              },
            });
          }}
        />
      </div>
      <div className="flex justify-center items-center md:justify-start mb-4 mt-2">
        <ReCAPTCHA
          sitekey="6LeKQ9wqAAAAAGxY7obFH9-mM3egJQi9-6K9NZgv"
          onChange={handleCaptcha}
        />
      </div>
      <Button
        size="sm"
        className={`p-2 rounded w-full text-white ${captchaVerified && isEmailValid(formData.email.value) ? "bg-blue-500" : "bg-gray-400"}`}
        disabled={!captchaVerified || !isEmailValid(formData.email.value)}
        type="submit"
      >
        Submit
      </Button>
    </form>
  );
};

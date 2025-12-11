import React from "react";
import { DotLottieReact } from "@lottiefiles/dotlottie-react";
import whatsappLottie from "../assets/whatsapp.lottie";

const WhatsAppFloatButton = () => {
  const phoneNumber = "919962717100";
  const defaultMessage =
    "Hello! I'm interested in your Tirupati tour packages and would like more information.";
  const whatsappUrl = `https://api.whatsapp.com/send?phone=${phoneNumber}&text=${encodeURIComponent(
    defaultMessage
  )}`;

  return (
    <a
      href={whatsappUrl}
      target="_blank"
      rel="noopener noreferrer"
      aria-label="Chat with us on WhatsApp"
      className="fixed bottom-5 right-5 md:bottom-[30px] md:right-[30px] z-[1000] flex h-[50px] w-[50px] items-center justify-center rounded-full bg-[#25D366] shadow-[0_12px_32px_rgba(0,0,0,0.1)] transition-all duration-300 ease-in-out hover:scale-110 hover:brightness-105 md:h-[60px] md:w-[60px]"
    >
      <DotLottieReact
        src={whatsappLottie}
        loop
        autoplay
        style={{ width: "70%", height: "70%" }}
      />
    </a>
  );
};

export default WhatsAppFloatButton;

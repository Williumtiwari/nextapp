"use client";
import Form from "@/components/Form";
import { useSession } from "next-auth/react";
import { useRef, useEffect } from "react";
import { redirect } from "next/navigation";
// import Image from "next/image";
// import insta from "../public/insta.png";
// import twitter from "../public/twitter.png";
// import linkedin from "../public/linkedin.png";
// import discord from "../public/discord.png";

export default function Home() {
  const session = useSession();


  useEffect(() => {
    if (session.status == "authenticated") {
      redirect("/dashboard");
    }
  }, [session.status]);

  const triangleClipPath = "polygon(0% 0%, 100% 0%, 80% 100%, 0% 100%)";
  const backgroundStyle = {
    clipPath: triangleClipPath,
    WebkitClipPath: triangleClipPath,
    background: "linear-gradient(180deg, #4285F4 0%, #286DE0 100%)",
  };

  return (
    <div className="flex w-screen h-screen" id="container">
      <div
        className="flex flex-[1.5] flex-col justify-center items-center bg-[#F8FAFF] text-white font-bold text-4xl lg:text-[72px]"
        style={backgroundStyle}
        id="left"
      >
        <span className="text-white font-bold text-xl absolute top-4 left-4 font-Poppins">
          LOGO
        </span>
        <h1>Board.</h1>
        <br />
        {/* <div className="flex absolute bottom-5 left-auto">
          <Image src={insta} className="mx-2" />
          <Image src={twitter} className="mx-1" />
          <Image src={linkedin} className="mx-1" />
          <Image src={discord} className="mx-1" />
        </div> */}
      </div>
      <div
        className="bg-[#FFF] flex-[1.5] flex justify-center items-center"
        id="right"
      >
        <Form />
      </div>
    </div>
  );
}

import React from "react";
import Aboutdisc from "./Aboutdisc";
import Circlebar from "./Circlebar";
import { CircularProgressbar, buildStyles } from "react-circular-progressbar";
import Upnav from "./Upnav";

const About = () => {
  return (
    <div className="min-h-screen text-white flex justify-center items-center flex-col p-7 vsm:p-0 vsm:pt-3">
      
      {/* About Heading */}
      <div className="heading">
        <h1 className="cursive mt-5 text-7xl vsm:text-5xl">
          About me
        </h1>

        <div className="underlineanim border-cyan-500 border w-64 duration-500 mt-3 vsm:w-60"></div>
      </div>

      {/* Main Content */}
      <div
        className="
          w-full
          max-w-7xl
          mx-auto
          px-6
          py-10
          flex
          flex-row
          xl:flex-col
          lg:flex-row
          md:flex-col
          gap-12
          items-start
        "
      >
        {/* About Description */}
        <div className="w-1/2 xl:w-full md:w-full">
          <Aboutdisc />
        </div>

        {/* Skills Section */}
        <div
          className="
            w-1/2
            xl:w-full
            md:w-full
            bg-white/5
            backdrop-blur-md
            border
            border-cyan-500/20
            rounded-3xl
            p-8
            shadow-[0_0_25px_rgba(34,211,238,0.1)]
            hover:border-cyan-400/40
            transition-all
            duration-500
          "
        >
          {/* Skills Heading */}
          <div className="mb-8">

            <h1
              className="
                text-4xl
                font-bold
                text-white
                mt-1
                tracking-wide
                drop-shadow-[0_0_10px_rgba(34,211,238,0.5)]
              "
              style={{ fontFamily: "Poppins, sans-serif" }}
            >
              My Skills
            </h1>
              <div className="underlineanim border-cyan-500 border w-64 duration-500 mt-3"></div>
          </div>

          {/* Skills Grid */}
          <div
            className="
              mt-8
              grid
              grid-cols-5
              xl:grid-cols-4
              lg:grid-cols-4
              md:grid-cols-3
              sm:grid-cols-3
              vsm:grid-cols-2
              gap-x-6
              gap-y-6
            "
          >
            <Circlebar val="20" topic="Java" />
            <Circlebar val="30" topic="DSA" />
            <Circlebar val="80" topic="HTML" />
            <Circlebar val="80" topic="CSS" />
            <Circlebar val="60" topic="JavaScript" />

            <Circlebar val="50" topic="React.js" />
            <Circlebar val="40" topic="Redux" />

            <Circlebar val="70" topic="Bootstrap" />
            <Circlebar val="60" topic="Tailwind CSS" />
            <Circlebar val="80" topic="Git & GitHub" />
          </div>
        </div>
      </div>
    </div>
  );
};

export default About;
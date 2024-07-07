import React from "react";
import Aboutdisc from "./Aboutdisc";
import Circlebar from "./Circlebar";
import { CircularProgressbar, CircularProgressbarWithChildren } from "react-circular-progressbar";
import Upnav from "./Upnav";
const About = () => {
  return (
    <div className=" min-h-screen text-white flex justify-center items-center p-7 vsm:p-0 vsm:pt-3 flex-col">
      <div className="heading">
        <h1 className="cursive mt-5  text-7xl vsm:text-5xl">About me</h1>
        <div className="underlineanim border-cyan-500 border w-64 duration-500 mt-3 vsm:w-60"></div>
      </div>
      <div className=" m-20 gap-32 flex flex-row xl:flex-col lg:flex-row md:flex-col justify-between items-center">
        <div className="flex flex-row justify-between items-center">
          <Aboutdisc/>
        </div>
        <div className="">
          <div className="heading">
            <h1 className=" cursive text-3xl ">My Skills</h1>
            <div className="underlineanim border-cyan-500 border w-40 duration-500 mt-3"></div>
          </div>
          <div className=" mt-10 grid grid-cols-5 gap-x-20 gap-y-10 xl:grid-cols-4 md:grid-cols-4 vsm:grid-cols-3">
            {/* <div className="flex flex-row justify-center items-center mt-2"> */}
                <Circlebar val='60' topic='Java'/>
                <Circlebar val='45' topic='DSA'/>
                <Circlebar val='25' topic='Python'/>
            {/* </div> */}
            {/* <div className="flex flex-row justify-center items-center mt-2"> */}
                <Circlebar val='80' topic='HTML'/>
                <Circlebar val='80' topic='CSS'/>
                <Circlebar val='40' topic='JavaScript'/>
            {/* </div> */}
            {/* <div className="flex flex-row justify-center items-center mt-2"> */}
                <Circlebar val='60' topic='React.js'/>
                <Circlebar val='60' topic='Node.js'/>
                <Circlebar val='60' topic='SQL'/>
            {/* </div> */}
            {/* <div className="flex flex-row justify-center items-center mt-2"> */}
                <Circlebar val='80' topic='Bootstrap'/>
                <Circlebar val='60' topic='Tailwind CSS'/>
                <Circlebar val='80' topic='Git & GitHub'/>
            {/* </div> */}
          </div>
        </div>
      </div>
    </div>
  );
};

export default About;

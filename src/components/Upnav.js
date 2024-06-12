import React from "react";
import Sidenav from "./Sidenav";
import { useState } from "react";
import { Link } from "react-router-dom";
const Upnav = () => {
  const [state, setState] = useState(false);
  return (
    <div className=" z-30 m-7 mb-0 pb-0 fixed items-center flex-row justify-center lg:block hidden 2xl:hidden xl:hidden ">
      <button onClick={() => setState(!state)}>
        <img
          src={require("../Assets/Profile.jpg")}
          className=" border-2 rounded-full w-14"
        ></img>
      </button>
      {state &&
        <div className='graybg flex flex-col mt-4  '>
        <Link to={'/portfolio/'}>
          <button className='underlineanim rounded-3xl bg-cyan-500 m-5 p-3 w-60 hover:bg-gray-700 duration-500 hover:w-44'><h1 className=' text-2xl cursive'>About</h1></button>
        </Link>
        <Link to={'/portfolio/projects'}>
          <button className='underlineanim rounded-3xl bg-cyan-500 m-5 p-3 w-60 hover:bg-gray-700 duration-500 hover:w-44'><h1 className=' text-2xl cursive'>Projects</h1></button>
        </Link>
        <Link to={'/portfolio/contact'}>
          <button className='underlineanim rounded-3xl bg-cyan-500 m-5 p-3 w-60 hover:bg-gray-700 duration-500 hover:w-44'><h1 className=' text-2xl cursive'>Contact</h1></button>
        </Link>
      </div>}
    </div>
  );
};

export default Upnav;
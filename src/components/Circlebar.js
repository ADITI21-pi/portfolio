import React from 'react'
import { CircularProgressbar, CircularProgressbarWithChildren } from "react-circular-progressbar";
const Circlebar = (props) => {
  return (
    <div className="flex flex-col justify-center items-center ">
        <CircularProgressbar value={props.val} className="bar w-14 xl:w-20 lg:w-14 md:w-20 vsm:w-14"/>
        <h1>{props.topic}</h1>
    </div>
  )
}

export default Circlebar;
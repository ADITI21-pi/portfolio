import React from "react";
import { CircularProgressbar, buildStyles } from "react-circular-progressbar";
import "react-circular-progressbar/dist/styles.css";

const Circlebar = (props) => {
  return (
    <div
      className="
        flex
        flex-col
        items-center
        transition-all
        duration-300
        hover:scale-110
        hover:-translate-y-1
        cursor-pointer
      "
    >
      <div
        className="
          p-2
          rounded-full
          hover:shadow-[0_0_20px_rgba(34,211,238,0.4)]
          transition-all
          duration-300
        "
      >
        <CircularProgressbar
          value={props.val}
          text={`${props.val}%`}
          className="w-16 xl:w-20 lg:w-16 md:w-20 vsm:w-16"
          styles={buildStyles({
            textSize: "20px",
            textColor: "#ffffff",
            pathColor: "#22d3ee",
            trailColor: "#2d2d2d",
            pathTransitionDuration: 1.5,
          })}
        />
      </div>

      <p
        className="
          mt-3
          text-sm
          text-gray-200
          font-medium
          text-center
        "
        style={{ fontFamily: "Poppins, sans-serif" }}
      >
        {props.topic}
      </p>
    </div>
  );
};

export default Circlebar;
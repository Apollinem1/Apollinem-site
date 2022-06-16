import React, { useEffect, useState } from "react";
import ProgressBar from "../../Components/ProgressBar";
import "./Skill.css";
export const Skill = () => {
  const bar = {
    display: "flex",
    alignItems: "center",
  };
  
  return (
    <>
      <div className="skill">
        <div style={bar}>
          <p>HTML</p>
          <ProgressBar bgcolor={"#68009c"} completed={70} />
        </div>
        <div style={bar}>
          <p>CSS</p>
          <ProgressBar bgcolor={"#68009c"} completed={60} />
        </div>
        <div style={bar}>
          <p>JS</p>
          <ProgressBar bgcolor={"#68009c"} completed={50} />
        </div>
        <div style={bar}>
          <p>React</p>
          <ProgressBar bgcolor={"#68009c"} completed={40} />
        </div>
      </div>
    </>
  );
};

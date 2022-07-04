import React, { useEffect, useState } from "react";
import ProgressBar from "../../Components/ProgressBar";
import "./Skill.css";
import { store } from "../../stores/store";
export const Skill = () => {
  const bgc = {
    // background: store.theme ? "#fff" : "#000",
   
  };
  useEffect(() => {
    if (store.theme === true) {
      document.querySelectorAll(".card__info").forEach(element => {
        element.classList.add("day")
        element.classList.remove("night")
      })
    } else {
      document.querySelectorAll(".card__info").forEach(element => {
        element.classList.add("night")
        element.classList.remove("day")
      })
    }
     
  }, [store.theme]);

  return (
    <>
      <div className="skill">
        <div className="card__info" style={bgc}>
          <h2>HTML<span style={{fontSize:"0.75em"}}>&</span>CSS</h2>
          <p>Experience: 2,5 years</p>
          <p>Flex</p>
          <p>Grid</p>
          <p>Cross browser compatibility</p>
          <p>Animation</p>
          <p>Bootstrap</p>
          <p>Antd</p>
          <p>Figma</p>
        </div>
        <div className="card__info" style={bgc}>
          <h2>JavaScript</h2>
          <p>Experience: 2 years</p>
          <p>React</p>
          <p>Mobx</p>
          <p>Typescript</p>
          <p>Jquery</p>
          <p>I18next</p>
          <p>MirageJs</p>
          <p>React-HLS</p>
        </div>
        <div className="card__info" style={bgc}>
          <h2>Other</h2>
          <p>English: A2</p>
          <p>I've small experience in: </p>
          <p>Unity, UE4, Blender;</p>
          <p>WOW player with 8 years experience </p>
          <p>Hobbies: -</p>
          
        </div>
      </div>
    </>
  );
};

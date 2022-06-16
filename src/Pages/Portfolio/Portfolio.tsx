import React from "react";
import "./Portfolio.css";
import study from "./Studyintomsk.png";
import welcome from "./welcometusur.png";
import git from "./GitHub.png";


export const Portfolio = () => {
  return (
    <>
      <div className="portfolio">
        <div>
          <p>
            <a href="https://studyintomsk.ru/" target={"_blanc"}>
              studyintomsk.ru
            </a><br />
            - Rework and fix bugs
          </p>
          <a href="https://studyintomsk.ru/" target={"_blanc"}>
            <img src={study} alt="" />
          </a>
        </div>
        <div>
          <p>
            <a href="https://welcome.tusur.ru/" target={"_blanc"}>
              welcome.tusur.ru
            </a><br />
            - Create website
          </p>
          <a href="https://welcome.tusur.ru/" target={"_blanc"}>
            <img src={welcome} alt="" />
          </a>
        </div>
        <div>
          <p>
            <a href="https://github.com/Apollinem1" target={"_blanc"}>
              My page github
            </a><br />
            - Check my rep
          </p>
          <a href="https://github.com/Apollinem1">
          <img src={git} alt="" style={{backgroundColor: "#fff", height: "63%"}}/>
          </a>
        </div>
      </div>
    </>
  );
};

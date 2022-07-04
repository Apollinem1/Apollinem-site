import React from "react";
import "./Portfolio.css";
import study from "./Studyintomsk.png";
import welcome from "./welcometusur.png";
import git from "./GitHub.png";
import { LazyLoadImage } from 'react-lazy-load-image-component';
import 'react-lazy-load-image-component/src/effects/blur.css';

export const Portfolio = () => {

  return (
    <>
      <div className="portfolio">
        <div>
          <h2>
            Rework and fix bugs -
            <br />
            <a href="https://studyintomsk.ru/" target={"_blanc"}>
              studyintomsk.ru
            </a>
          </h2>
          <a href="https://studyintomsk.ru/" target={"_blanc"}>
          <LazyLoadImage
              alt={"123"}
              effect="blur"
              src={study}
            />
          </a>
        </div>
        <div>
          <h2>
            Create website -
            <br />
            <a href="https://welcome.tusur.ru/" target={"_blanc"}>
              welcome.tusur.ru
            </a>
          </h2>
          <a href="https://welcome.tusur.ru/" target={"_blanc"}>
            <LazyLoadImage
              alt={"123"}
              effect="blur"
              src={welcome}
            />
          </a>
        </div>
        <div>
          <h2>
            Check my rep -
            <br />
            <a href="https://github.com/Apollinem1" target={"_blanc"}>
              My page github
            </a>
          </h2>
          <a href="https://github.com/Apollinem1">
          <LazyLoadImage
              alt={"123"}
              effect="blur"
              src={git}
            />
          </a>
        </div>
      </div>
    </>
  );
};

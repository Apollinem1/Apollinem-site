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
        <div className="portfolio__card">
          <h2>
            Rework and fix bugs -
            <br />
            <a
              href="https://studyintomsk.ru/"
              target="_blank"
              rel="noopener noreferrer"
            >
              studyintomsk.ru
            </a>
          </h2>
          <a
            href="https://studyintomsk.ru/"
            target="_blank"
            rel="noopener noreferrer"
            className="portfolio__thumb"
          >
          <LazyLoadImage
              alt="Preview of studyintomsk.ru"
              effect="blur"
              src={study}
            />
          </a>
        </div>
        <div className="portfolio__card">
          <h2>
            Create website -
            <br />
            <a
              href="https://welcome.tusur.ru/"
              target="_blank"
              rel="noopener noreferrer"
            >
              welcome.tusur.ru
            </a>
          </h2>
          <a
            href="https://welcome.tusur.ru/"
            target="_blank"
            rel="noopener noreferrer"
            className="portfolio__thumb"
          >
            <LazyLoadImage
              alt="Preview of welcome.tusur.ru"
              effect="blur"
              src={welcome}
            />
          </a>
        </div>
        <div className="portfolio__card">
          <h2>
            Check my rep -
            <br />
            <a
              href="https://github.com/Apollinem1"
              target="_blank"
              rel="noopener noreferrer"
            >
              My page github
            </a>
          </h2>
          <a
            href="https://github.com/Apollinem1"
            target="_blank"
            rel="noopener noreferrer"
            className="portfolio__thumb"
          >
          <LazyLoadImage
              alt="GitHub profile preview"
              effect="blur"
              src={git}
            />
          </a>
        </div>
      </div>
    </>
  );
};

import React from "react";
import '../styles/Works.scss';
import { WorkList } from '../contents/worksList';

export default function Works() {
  return(
    <div className="works">
      <div className="works-caption"><h2>Works</h2></div>
      <div className="works-contents">
      {WorkList.map((work) => {
        if (work.projectName !== '') {
          return (
            <div className="work">
              <img src={work.image} alt="Project images" className="work-image"/>
              <a href={work.url} className="work-btn">{work.projectName}</a>
            </div>
          );

        } else {
          return (
            <div className="work">
              <img src={work.image} alt="Project images" className="work-image"/>
            </div>
          );
        }
      })}
      </div>
    </div>
  );
}
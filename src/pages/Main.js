import React, { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import '../styles/Main.scss';
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faArrowUp } from '@fortawesome/free-solid-svg-icons';
import SkillsPart from "../components/SkillsPart";
import { skillsList } from '../contents/skillsList';
import Description from "../components/Description";

export default function Main() {
  const iconStyle = {padding: 10, fontSize: 40, color: 'white'};
  const [scrollY, setScrollY ] = useState(0);
  const navi = useNavigate();
  var topBtn;

  const handleScroll = () => {setScrollY(window.pageYOffset)};
  
  useEffect(() => {
    window.addEventListener('scroll', handleScroll);

    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const toTop = () => {
    window.scrollTo({
       top: 0,
       behavior: "smooth",
    });
  };

  if (scrollY >= 500) {
    topBtn = (
      <div className="top-scroll" 
        onClick={() => {toTop()}} 
        style={{
          opacity: '1',
        }}
      >
      <FontAwesomeIcon style={iconStyle} icon={faArrowUp}/>
      </div>
    );
  } else {
    topBtn = (
      <div className="top-scroll" 
        onClick={() => {toTop()}} 
        style={{
          opacity: '0',
        }}
      >
      <FontAwesomeIcon style={iconStyle} icon={faArrowUp}/>
      </div>
    );
  }
  
  return(
    <div className="main">
      <div className="main-visual">
        <h2 
          className="main-letter"
          style={{transform: `translateY(${ scrollY * 0.2}px)`}}
        >
          Digital Designer 
        </h2>
      </div>
      <div className="about">
        <div className="about-png"></div>
        <div className="portrait"></div>
        <div className="about-content">
          <Description />
        </div>
        <div className="about-btn" onClick={() => {navi('/experience')}}>詳しく見る</div>
      </div>
      <div className="skills">
        <div className="skills-png"></div>
        <div className="skill-list">
        {skillsList.map((skill) => {
          return(
            <SkillsPart name={skill.name} iconName={skill.iconName}/>
          );
        })}
        </div>
      </div>
      <div className="contact-banner">
        <h3>Contact</h3>
        <div className="banner">
          <div className="banner-text">If you have some question.</div>
          <div className="contact-btn" onClick={() => {navi('/contact')}}>Click Me</div>
        </div>
      </div>
      {topBtn}
    </div>
  );
}
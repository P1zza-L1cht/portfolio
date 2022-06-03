import React from "react";
import '../styles/skillcard.scss';
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";


export default function SkillsPart({name, iconName}) {
  const iconStyle = {padding: 10, fontSize: 40};
  return(
    <div className="skill-card">
      <div className="skill-icon">
      <FontAwesomeIcon style={iconStyle} icon={iconName}/>
      </div>
      <p className="skill-name">{name}</p>
    </div>
  );
}
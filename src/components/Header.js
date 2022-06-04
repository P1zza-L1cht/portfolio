import React, { useEffect, useState } from "react";
import { Link, useLocation } from "react-router-dom";
import '../styles/Header.scss';
import OnBtn from '../images/decoration/toggle1_on.png';
import OffBtn from "../images/decoration/toggle1_off.png";

export default function Header() {
  const [isToggle, setIsToggle] = useState(false);
  var toggleMark;
  const location = useLocation();


  useEffect(() => {
    setIsToggle(false);
  }, [location]);

  if (isToggle) {
    toggleMark = (<img src={OnBtn} alt="toggleOn" />);
  } else {
    toggleMark = (<img src={OffBtn} alt="toggleOff" />)
  }

  return(
    <header>
      <div className="logo"><h1>Haruki Yui</h1></div>
      <div
        className="toggle-btn"
        onClick={() => {
          setIsToggle((prev) => !prev);
        }}
      >
        {toggleMark}
      </div>
      <ul className="navigation" id={ isToggle ? "open" : "close"}>
        <li className="nav-btn link"><Link to='/'>ホーム<br/><p className="sub-title">Home</p></Link></li>
        <li className="nav-btn link"><Link to='/works'>作品<br/><p className="sub-title">works</p></Link></li>
        <li className="nav-btn link"><Link to='/experience'>経歴<br/><p className="sub-title">Experience</p></Link></li>
        <li className="nav-btn link"><Link to='/contact' >お問い合わせ<br/><p className="sub-title">Contact</p></Link></li>
      </ul>
    </header>
  );
}
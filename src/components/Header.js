import React from "react";
import { Link } from "react-router-dom";
import '../styles/Header.scss';

export default function Header() {
  return(
    <header>
      <div className="logo"><h1>Haruki Yui</h1></div>
      <ul className="navigation">
        <li className="nav-btn link"><Link to='/'>ホーム<br/><p className="sub-title">Home</p></Link></li>
        <li className="nav-btn link"><Link to='/works'>作品<br/><p className="sub-title">works</p></Link></li>
        <li className="nav-btn link"><Link to='/experience'>経歴<br/><p className="sub-title">Experience</p></Link></li>
        <li className="nav-btn link"><Link to='/contact' >お問い合わせ<br/><p className="sub-title">Contact</p></Link></li>
      </ul>
    </header>
  );
}
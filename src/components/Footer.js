import React from "react";
import '../styles/Footer.scss';
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faTwitter, faGithub, faPinterest, faLinkedinIn } from "@fortawesome/free-brands-svg-icons";

export default function Footer() {
  const iconStyle = {padding: 10, fontSize: 40, color: '#014872'};

  return(
    <footer>
      <div className="sns">
        <ul>
          <li><a href='https://twitter.com/P1zza_L1cht'><FontAwesomeIcon style={iconStyle} icon={faTwitter}/></a></li>
          <li><a href='https://github.com/P1zza-L1cht'><FontAwesomeIcon style={iconStyle} icon={faGithub}/></a></li>
          <li><a href='https://pin.it/4Z4kIwY'><FontAwesomeIcon style={iconStyle} icon={faPinterest}/></a></li>
          <li><a href='https://www.linkedin.com/in/%E9%99%BD%E8%BC%9D-%E6%B2%B9%E4%BA%95-b8bbba240/'><FontAwesomeIcon style={iconStyle} icon={faLinkedinIn}/></a></li>
        </ul>
      </div>
      <div className="copyright"><p>🄫CopyRight All Reserved by Haruki Yui 2022</p></div>
    </footer>
  );
}
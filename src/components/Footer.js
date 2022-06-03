import React from "react";
import '../styles/Footer.scss';
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faTwitter, faGithub, faFacebookF, faPinterest, faLinkedinIn } from "@fortawesome/free-brands-svg-icons";

export default function Footer() {
  const iconStyle = {padding: 10, fontSize: 40};

  return(
    <footer>
      <div className="sns">
        <ul>
          <li><a href='https://twitter.com/P1zza_L1cht'><FontAwesomeIcon style={iconStyle} icon={faTwitter}/></a></li>
          <li><a href='https://twitter.com/P1zza_L1cht'><FontAwesomeIcon style={iconStyle} icon={faFacebookF}/></a></li>
          <li><a href='https://twitter.com/P1zza_L1cht'><FontAwesomeIcon style={iconStyle} icon={faGithub}/></a></li>
          <li><a href='https://twitter.com/P1zza_L1cht'><FontAwesomeIcon style={iconStyle} icon={faPinterest}/></a></li>
          <li><a href='https://twitter.com/P1zza_L1cht'><FontAwesomeIcon style={iconStyle} icon={faLinkedinIn}/></a></li>
        </ul>
      </div>
      <div className="copyright"><p>🄫CopyRight All Reserved by Haruki Yui 2022</p></div>
    </footer>
  );
}
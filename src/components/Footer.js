import React from 'react';
import faceBook from "../images/facebook.svg";
import twitter from "../images/twitter.svg";
import google from "../images/google.svg";
import instagram from "../images/instagram.svg";
import linkedin from "../images/linkedin.svg";
import github from "../images/github.svg";
function Footer(){
    return(
        <footer className="footer">
        <div className="sociallinks">
                <a href="https://www.facebook.com/gaurav.gham.1">
                    <img className="icon" src={faceBook} alt="facebook"/>
                </a>
                <a href="https://twitter.com/gaurav_gham">
                    <img className="icon" src={twitter} alt="twitter"/>
                </a>
                <a href="ghamgaurav@gmail.com">
                    <img className="icon" src={google} alt="gmail"/>
                </a>
                <a href="https://instagram.com/gaurav_gham">
                    <img className="icon" src={instagram} alt="instagram"/>
                </a>
                <a href="https://www.linkedin.com/in/gourav-gham-475b57226">
                    <img className="icon" src={linkedin} alt="linkedin"/>
                </a>
                <a href="https://github.com/GouravGham">
                    <img className="icon" src={github} alt="github"/>
                </a>
              </div>
          <div className="copy-right">
            <p>&#xa9; Made by Gourav</p>
          </div>
    </footer>

    )
}

export default Footer;
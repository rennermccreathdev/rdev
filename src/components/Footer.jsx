import React from 'react';
import "./componentstyle.css"
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faGithub } from '@fortawesome/free-brands-svg-icons'
import { faInstagram } from '@fortawesome/free-brands-svg-icons'
import { faTwitter } from '@fortawesome/free-brands-svg-icons'
import { faEnvelope } from '@fortawesome/free-solid-svg-icons'
import { faCopyright } from '@fortawesome/free-solid-svg-icons'
import { faBrush } from '@fortawesome/free-solid-svg-icons'
import { faLinkedin } from '@fortawesome/free-brands-svg-icons'



const Footer = () => {
  return (
    <>
    <div class="footericons">
      <a href="https://github.com/rennermccreathdev" target="blank" className="contactlink"><FontAwesomeIcon icon={faGithub} /></a>
      <a href="https://www.linkedin.com/in/rennermccreathdev/" target="blank" className="contactlink"><FontAwesomeIcon icon={faLinkedin} /></a>
      <a href="https://twitter.com/rennerdev" target="blank" className="contactlink"><FontAwesomeIcon icon={faTwitter} /></a>
      <a href="https://www.instagram.com/rennermccreathdev/" target="blank" className="contactlink"><FontAwesomeIcon icon={faInstagram} /></a>
      <a href="mailto:rennermccreathdev@gmail.com" target="blank" className="contactlink"><FontAwesomeIcon icon={faEnvelope} /></a>
    </div>
    <div className="footerextra">
      <a href="www.renner.digital" target="blank" className="contactlink"><FontAwesomeIcon icon={faCopyright} /> Renner Digital 2023</a>
      <a href="/contact#sources" target="blank" className="contactlink"><FontAwesomeIcon icon={faBrush} /> Sources</a>
    </div>
    </>
  );
};

export default Footer;
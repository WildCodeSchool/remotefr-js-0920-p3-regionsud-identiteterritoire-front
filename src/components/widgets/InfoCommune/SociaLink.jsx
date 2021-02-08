import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import {
  faFacebook,
  faTwitter,
  faInstagram,
} from '@fortawesome/free-brands-svg-icons';

function SociaLink() {
  return (
    <div className="row">
      <div className="col-md-12">
        <div className="SocialTitle">Réseaux sociaux</div>
        <br />
        <br />
        <div className="text-center">
          <a href="https://www.facebook.com" className="facebook ">
            <FontAwesomeIcon icon={faFacebook} size="2x" />
          </a>
          <a href="https://www.twitter.com" className="twitter ">
            <FontAwesomeIcon icon={faTwitter} size="2x" />
          </a>
          <a href="https://www.instagram.com" className="instagram ">
            <FontAwesomeIcon icon={faInstagram} size="2x" />
          </a>
        </div>
      </div>
    </div>
  );
}

export default SociaLink;

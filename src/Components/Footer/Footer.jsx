import React from "react";
import "./Footer.css";
import { FaInstagramSquare } from "react-icons/fa";
import { FaLinkedin } from "react-icons/fa";
import { FaGithubSquare } from "react-icons/fa";

const Footer = () => {
  return (
    <section className="f-wrapper">
      <div className="f-container paddings innerWidth flexCenter">
        {/*left side */}
        <div className="flexColStart f-left">
          <img src="./logo2.png" alt="" width={120} />

          <span className="secondaryText">
            Our vision is to make all people
            <br />
            the best place to live for them.
          </span>

          <div>
            <a href="#">
              <FaInstagramSquare size={25} />
            </a>
            <a
              target="_blank"
              href="https://www.linkedin.com/in/prasad-samrat-72b2112ab/"
            >
              {" "}
              <FaLinkedin size={25} />
            </a>
            <a target="_blank" href="https://github.com/prasad5507/prasad5507">
              {" "}
              <FaGithubSquare size={25} />
            </a>
          </div>
        </div>

        <div className="flexColStart f-right">
          <span className="primaryText">Information</span>
          <span className="secondaryText">145 New York, FL 5467, USA</span>

          <div className="flexCenter f-menu">
            <span>Property</span>
            <span>Services</span>
            <span>Product</span>
            <span>About Us</span>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Footer;

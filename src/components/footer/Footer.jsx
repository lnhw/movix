import React from "react";
import {
    FaFacebookF,
    FaGithub,
    FaTwitter,
    FaLinkedin,
} from "react-icons/fa";

import ContentWrapper from "../contentWrapper/ContentWrapper";

import "./style.scss";

const Footer = () => {
    return (
        <footer className="footer">
            <ContentWrapper>
                <ul className="menuItems">
                    <li className="menuItem">Terms Of Use</li>
                    <li className="menuItem">Privacy-Policy</li>
                    <li className="menuItem">About</li>
                    <li className="menuItem">Blog</li>
                    <li className="menuItem">FAQ</li>
                </ul>
                <div className="infoText">
                    Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed
                    do eiusmod tempor incididunt ut labore et dolore magna
                    aliqua. Ut enim ad minim veniam, quis nostrud exercitation
                    ullamco laboris nisi ut aliquip ex ea commodo consequat.
                    Duis aute irure dolor in reprehenderit in voluptate velit
                    esse cillum dolore eu fugiat nulla pariatur.
                </div>
                <div className="socialIcons">
                    <a href="https://www.facebook.com/nhuttquang507" target="_blank">
                        <span className="icon">
                            <FaFacebookF />
                        </span>
                    </a>
                    <a href="https://github.com/lnq7x201/" target="_blank">
                        <span className="icon">
                            <FaGithub />
                        </span>
                    </a>
                    <a href="https://twitter.com/_llnnqq" target="_blank">
                        <span className="icon">
                            <FaTwitter />
                        </span>
                    </a>
                    <a href="https://www.linkedin.com/in/nhut-quang-le-43ab73255/" target="_blank">
                        <span className="icon">
                            <FaLinkedin />
                        </span>
                    </a>
                </div>
            </ContentWrapper>
        </footer>
    );
};

export default Footer;

/* eslint-disable max-len */
import { Col, Row } from "react-bootstrap";
import {
  faFacebook,
  faFacebookMessenger,
  faGithub,
  faInstagram,
  faLinkedinIn,
  faPinterest,
} from "@fortawesome/free-brands-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import React from "react";
import { RootState } from "../redux/reducers/rootReducer";
import { useSelector } from "react-redux";

// Footer
const Footer: React.FC = () => {
  // UseSelector for app theme
  const appTheme = useSelector((state: RootState) => {
    return state.setTheme.appTheme;
  });

  return (
    <footer aria-label="Footer Section">
      <div className="footer">
        <div className="line" />
        <Row>
          <Col sm={12} md={6} className="colWrap responsiveWrap miniWrap">
            <a
              aria-label="Linkedin"
              href="https://www.linkedin.com/in/mike-parker-aa084310a"
              target="_blank"
              rel="noopener noreferrer"
            >
              <FontAwesomeIcon
                icon={faLinkedinIn}
                className={`faIcon${appTheme}`}
              />
            </a>
            <a
              aria-label="GitHub"
              href="https://github.com/WildPastry"
              target="_blank"
              rel="noopener noreferrer"
            >
              <FontAwesomeIcon
                icon={faGithub}
                className={`faIcon${appTheme}`}
              />
            </a>
            <a
              aria-label="Facebook"
              href="https://www.facebook.com/michael.parker.3532507"
              target="_blank"
              rel="noopener noreferrer"
            >
              <FontAwesomeIcon
                icon={faFacebook}
                className={`faIcon${appTheme}`}
              />
            </a>
            <a
              aria-label="Facebook Messenger"
              href="https://www.messenger.com/login.php?next=https%3A%2F%2Fwww.messenger.com%2Ft%2F598356603%2F"
              target="_blank"
              rel="noopener noreferrer"
            >
              <FontAwesomeIcon
                icon={faFacebookMessenger}
                className={`faIcon${appTheme}`}
              />
            </a>
            <a
              aria-label="Pinterest"
              href="https://www.pinterest.co.uk/WildPastry/"
              target="_blank"
              rel="noopener noreferrer"
            >
              <FontAwesomeIcon
                icon={faPinterest}
                className={`faIcon${appTheme}`}
              />
            </a>
            <a
              aria-label="Instagram"
              href="https://www.instagram.com/mikeparkernz/"
              target="_blank"
              rel="noopener noreferrer"
            >
              <FontAwesomeIcon
                icon={faInstagram}
                className={`faIcon${appTheme}`}
              />
            </a>
          </Col>
          <Col sm={12} md={3} className="colWrap textRight responsiveText">
            <h4
              aria-label="Archived Websites"
              className={`marBot text${appTheme}`}
            >
              ARCHIVED SITES
            </h4>
            <ul className={`list${appTheme}`}>
              <li>
                <a
                  aria-label="The Fear Board"
                  target="_blank"
                  rel="noopener noreferrer"
                  href="https://fear.mikeparker.co.nz/"
                >
                  The Fear Board
                </a>
              </li>
              <li>
                <a
                  aria-label="School of Kennedy"
                  target="_blank"
                  rel="noopener noreferrer"
                  href="https://sok.mikeparker.co.nz/"
                >
                  School of Kennedy
                </a>
              </li>
              <li>
                <a
                  aria-label="Let Nature In"
                  target="_blank"
                  rel="noopener noreferrer"
                  href="https://nat.mikeparker.co.nz/"
                >
                  Let Nature In
                </a>
              </li>
            </ul>
          </Col>
          <Col sm={12} md={3} className="colWrap textRight">
            <h4
              aria-label="Contact Heading"
              className={`marBot text${appTheme}`}
            >
              CONTACT
            </h4>
            <ul aria-label="Contact Details List" className={`list${appTheme}`}>
              <li aria-label="Mobile Phone Number">022 5025 485</li>
              <li>
                <a
                  aria-label="Email Address"
                  href="mailto:mparkernzdev@gmail.com"
                >
                  mparkernzdev@gmail.com
                </a>
              </li>
            </ul>
          </Col>
        </Row>
        <Row>
          <div className="footerWrap">
            <div className="flex wrap responsiveFooterWrap">
              <div>
                <div className="lineThinFooter" />
                <p
                  aria-label="Copyright"
                  className={`footerCopyright text400 responsiveCopyRight footerCopyright${appTheme}`}
                >
                  &copy; mike parker{" "}
                  <span className="text300">{new Date().getFullYear()}</span>
                </p>
              </div>
            </div>
          </div>
        </Row>
      </div>
    </footer>
  );
};

// EXPORT Footer
Footer.displayName = "Footer";
export default Footer;

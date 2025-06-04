import React from "react";
import { Link } from "react-router-dom";

function Footer(props) {
  return (
    <footer className="main-footer">
      <div className="upper-box">
        <div className="auto-container">
          <div className="row no-gutters">
            <div className="footer-info-box col-md-4 col-sm-6 col-xs-12">
              <div className="info-inner">
                <div className="content">
                  <div className="icon">
                    <span className="flaticon-pin"></span>
                  </div>
                  <div className="text">
                    Addis Ababa
                    <br /> Ethiopia
                  </div>
                </div>
              </div>
            </div>
            <div className="footer-info-box col-md-4 col-sm-6 col-xs-12">
              <div className="info-inner">
                <div className="content">
                  <div className="icon">
                    <span className="flaticon-email"></span>
                  </div>
                  <div className="text">
                    Email us : <br />{" "}
                    <a to="mailto:contact.contact@autorex.com">
                      mesfindebebe114@yahoo.com
                    </a>
                  </div>
                </div>
              </div>
            </div>
            <div className="footer-info-box col-md-4 col-sm-6 col-xs-12">
              <div className="info-inner">
                <div className="content">
                  <div className="icon">
                    <span className="flaticon-phone"></span>
                  </div>
                  <div className="text">
                    Call us on : <br />
                    <strong>09 11 58 15 76</strong>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className="widgets-section">
        <div className="auto-container">
          <div className="widgets-inner-container">
            <div className="row clearfix">
              <div className="footer-column col-lg-4">
                <div className="widget widget_about">
                  <div className="text">
                    Our primary focus is on product quality and customer
                    satisfaction,
                  </div>
                </div>
              </div>
              <div className="footer-column col-lg-4">
                <div className="row">
                  <div className="col-md-6">
                    <div className="widget widget_links">
                      <h4 className="widget_title">Usefull Links</h4>
                      <div className="widget-content">
                        <ul className="list">
                          <li>
                            <Link to={"/"}>Home</Link>
                          </li>
                          {/* <li>
                            <Link to={"/about"}>About Us</Link>
                          </li> */}

                          <li>
                            <Link to={"/contact"}>Contact Us</Link>
                          </li>
                        </ul>
                      </div>
                    </div>
                  </div>
                  <div className="col-md-6">
                    {/* <div className="widget widget_links">
                      <h4 className="widget_title">Our Services</h4>
                      <div className="widget-content">
                        <ul className="list">
                          <li>
                            <Link to="#">Performance Upgrade</Link>
                          </li>
                          <li>
                            <Link to="#">Transmission Service</Link>
                          </li>
                          <li>
                            <Link to="#">Break Repair & Service</Link>
                          </li>
                          <li>
                            <Link to="#">Engine Service & Repair</Link>
                          </li>
                          <li>
                            <Link to="#">Trye & Wheels</Link>
                          </li>
                        </ul>
                      </div>
                    </div> */}
                  </div>
                </div>
              </div>
              <div className="footer-column col-lg-4">
                <div className="widget widget_newsletter">
                  <h4 className="widget_title">Newsletter</h4>
                  <div className="text">Get latest updates and offers.</div>
                  <div className="newsletter-form"></div>
                  <ul className="social-links">
                    <li>
                      <a href="#">
                        <span className="fab fa-facebook-f"></span>
                      </a>
                    </li>
                    <li>
                      <Link to="#">
                        <span className="fab fa-linkedin-in"></span>
                      </Link>
                    </li>
                    <li>
                      <a to="#">
                        <span className="fab fa-twitter"></span>
                      </a>
                    </li>
                    <li>
                      <a to="#">
                        <span className="fab fa-google-plus-g"></span>
                      </a>
                    </li>
                  </ul>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className="auto-container">
        <div className="footer-bottom">
          <div className="copyright-text">
            © Copyright <a to="/https://www.abaytechnologysolutions.com" target="_blank">Abay Technology Solutions</a> 2024 . All right
            reserved.
          </div>
        </div>
      </div>
    </footer>
  );
}

export default Footer;

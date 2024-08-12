import React from "react";
import "./Footer.css";
function Footer() {
  return (
    <div>
      <div className="footer">
        <div className="footer__1">
          <p className="side-banner__logo__p__footer">Snap Talk Analyzer.</p>
        </div>

        <div className="footer__1">
          <div className="footer__1__title">
            <p className="footer__1__title__p">SOLUTIONS</p>
          </div>
          <div className="footer__1__contents">
            <p>Sentimental Analysis</p>
            <p>Daily Tracking</p>
          </div>
        </div>
        <div className="footer__1">
          <div className="footer__1__title">
            <p className="footer__1__title__p">USE CASES</p>
          </div>
          <div className="footer__1__contents">
            <p>Speech Analyser</p>
            <p>Report Tracking</p>
            <p>Content Checking</p>
          </div>
        </div>
        <div className="footer__1">
          <div className="footer__1__title">
            <p className="footer__1__title__p">RESOURCES</p>
          </div>
          <div className="footer__1__contents">
            <p>Blog</p>
            <p>Resource Hub</p>
            <p>Learnn More</p>
          </div>
        </div>
        <div className="footer__1">
          <div className="footer__1__title">
            <p className="footer__1__title__p">COMPANY</p>
          </div>
          <div className="footer__1__contents">
            <p>About Us</p>
            <p>Events</p>
            <p>Contact Us</p>
            <p>Privacy Policy</p>
          </div>
        </div>
        <div className="footer__1">
          <div className="footer__1__title">
            <p className="footer__1__title__p">SUBSCRIBE</p>
            <form className="footer__form__main">
              <div className="footer__form">
                <div className="footer__form__contents">
                  <input
                    className="footer__form__contents"
                    placeholder="Name"
                  />
                </div>
                <div className="footer__form__contents">
                  <input
                    className="footer__form__contents"
                    placeholder="Company Email"
                  />
                </div>
                <div className="footer__form__contents">
                  <button className="footer__button">Subscribe</button>
                </div>
              </div>
            </form>
          </div>
          <div className="footer__1__contents"></div>
        </div>
      </div>
    </div>
  );
}

export default Footer;

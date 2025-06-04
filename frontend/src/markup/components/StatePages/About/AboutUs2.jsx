import React from "react";
import bbanner from "../../../../assets/images/custom/bottomBanner.png";
function AboutUs2() {
  return (
    <section className="video-section">
      <div
        data-parallax='{"y": 50}'
        className="sec-bg"
        style={{
          backgroundImage: `url(${bbanner})`,
        }}
      ></div>
      <div className="auto-container">
        <h5>Working since 2014</h5>
        <h2>
          We are leader <br />
          importer of original sofa covers.
        </h2>
        <div className="video-box">
          <div className="video-btn">
            <a
              href="https://www.youtube.com/watch?v=2ZwAe6A5P9A"
              className="overlay-link lightbox-image video-fancybox ripple"
            >
              <i className="flaticon-play"></i>
            </a>
          </div>
          <div className="text">
            Watch intro video <br /> about us
          </div>
        </div>
      </div>
    </section>
  );
}

export default AboutUs2;

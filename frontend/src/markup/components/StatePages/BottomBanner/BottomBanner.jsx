import React from "react";

import { Carousel } from "react-responsive-carousel";
import { imge } from "./PhotoItem";
import "react-responsive-carousel/lib/styles/carousel.min.css";
import classes from "./carausel.module.css";
function BottomBanner() {
  return (
    <section className="video-section">
      <div data-parallax={{ y: 50 }} className="sec-bg">
        <Carousel
          autoPlay={true}
          infiniteLoop={true}
          showIndicators={false}
          showThumbs={false}
        >
          {imge.map((imgitemlink) => {
            return <img key={imgitemlink} src={imgitemlink} alt="" />;
          })}
        </Carousel>
        <div className={classes.hero_img}></div>
      </div>

      <div className="auto-container">
        <h5>Working since 2019</h5>
        <h2>
          Priority for Healthy <br />
          Family
        
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

export default BottomBanner;

import React from "react";
import feature from "../../../../assets/images/banner/terpiza.jpg";
function Features() {
  return (
    <section className="features-section">
      <div className="auto-container">
        <div className="row">
          <div className="col-lg-6">
            <div className="inner-container">
              <h2>
                Quality Service And <br /> Customer Satisfaction !!
              </h2>
              <div className="text">
                We are a sofa cover importer originally from Turkey. Our primary
                focus is on product quality and customer satisfaction, achieved
                by striking a balance between competitive pricing and stylish
                designs tailored to the modern customer.
              </div>
            </div>
          </div>
          <div className="col-lg-6">
            <div className="carmeter">
              <img src={feature} alt="" />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

export default Features;

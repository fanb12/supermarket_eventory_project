import React from "react";
import { MdOutlineEmail } from "react-icons/md";
import { CiLocationOn } from "react-icons/ci";
import { FaPhoneAlt } from "react-icons/fa";
function Contactes() {
  return (
    <section className="about-section">
      <div className="auto-container">
        <div className="row">
          <div className="col-lg-6">
            <div className="image-box">
              <iframe
                src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d246.2722494259313!2d38.73907335863817!3d9.031253734515865!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x164b8516ff68f991%3A0xac956e863465d4e0!2sMars%20Business%20Center!5e0!3m2!1sam!2set!4v1721346391919!5m2!1sam!2set"
                width="600"
                height="450"
                style={{ border: "0" }}
                allowFullScreen=""
                loading="lazy"
                referrerPolicy="no-referrer-when-downgrade"
              ></iframe>
            </div>
          </div>
          <div className="col-lg-6 pl-lg-5">
            <div className="sec-title">
              <h2>Our Address</h2>
              <h4>please contact us by the following methods.</h4>
            </div>

            <div className="text">
              {" "}
              <CiLocationOn color="red" />
              Address:
              <p>Addis Ababa,Ethipia</p>
              <MdOutlineEmail color="red" />
              Email:
              <p>mesfindebebe114@yahoo.com</p>
              <FaPhoneAlt color="red" />
              <p>+251911581576</p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
export default Contactes;

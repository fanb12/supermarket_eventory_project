import React from "react";
import { Carousel } from "react-responsive-carousel";
import { imge } from "./PhotoItem";
import "react-responsive-carousel/lib/styles/carousel.min.css";
import classes from "./PhotoGallery.module.css";

function Carausel() {
  return (
    <div className={classes.photo_gallery}>
      <div className={classes.photo_grid}>
        {imge.map((img) => (
          <img key={img} src={img} alt="" className={classes.image} />
        ))}
      </div>
    </div>
  );
}

export default Carausel;

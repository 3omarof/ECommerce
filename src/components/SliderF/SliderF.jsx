import React from "react";
import image1 from "../../assets/imgs/slider-image-1.jpeg";
import image2 from "../../assets/imgs/slider-image-2.jpeg";
import image3 from "../../assets/imgs/slider-image-3.jpeg";

export default function SliderF() {
  return (
    <>
      <div className="grid grid-cols-12 h-full my-5">
        <div className="col-span-8 h-full">
          <swiper-container loop="true" style={{ height: "100%" }}>
            <swiper-slide style={{ height: "100%" }}>
              <img src={image3} className="w-full h-full object-cover" alt="" />
            </swiper-slide>
            <swiper-slide style={{ height: "100%" }}>
              <img src={image2} className="w-full h-full object-cover" alt="" />
            </swiper-slide>
            <swiper-slide style={{ height: "100%" }}>
              <img src={image1} className="w-full h-full object-cover" alt="" />
            </swiper-slide>
          </swiper-container>
        </div>
        <div className="col-span-4">
          <div className="h-1/2">
            <img src={image1} className="w-full h-full object-cover" alt="" />
          </div>
          <div className="h-1/2">
            <img src={image2} className="w-full h-full object-cover" alt="" />
          </div>
        </div>
      </div>
    </>
  );
}

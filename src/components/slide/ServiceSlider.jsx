import React from "react";
import Slider from "react-slick"
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import ServiceCard from "../serviceCard/ServiceCard";
import { services } from "../data";
import "./ServiceCard.scss"

const ServiceSlider = () => {

  const settings = {
    dots: true,
    slidesToShow: 5,
    slidesToScroll: 1,
    initialSlide: 0,
    centerMode : true,
    centerPadding: 0,
    lazyLoad : true,
    autoplay: true,
    responsive: [
      {
        breakpoint: 1024,
        settings: {
          slidesToShow: 3,
          slidesToScroll: 1,
          infinite: true,
          dots: true
        }
      },
      {
        breakpoint: 600,
        settings: {
          slidesToShow: 2,
          slidesToScroll: 2,
          initialSlide: 1,
          autoplay: true
        }
      },
      {
        breakpoint: 480,
        settings: {
          slidesToShow: 2,
          slidesToScroll: 2,
          autoplay: true
        }
      }
    ]
  };
  return (
   <div className=" w-[90%] m-auto">

      <Slider {...settings} >
        {services.map(item => (
          <div className="serviceCard">
           <div className='' key={item.id}>
          <div className="">
            <div className="flex justify-between">
              <ServiceCard item={item} key={item.id} />
            </div>
          </div>
           </div>
           </div>
        ))
        }
      </Slider>
      </div>
   

  );
};

export default ServiceSlider;
import React from "react";
import Slider from "react-slick"
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import ServiceCard from "../serviceCard/ServiceCard";
import { services } from "../data";

import { Link } from "react-router-dom";

const ServiceSlider = () => {


  const settings = {
    dots: true,
    slidesToShow: 4,
    slidesToScroll: 1,
    initialSlide: 0,
    centerMode : true,
    centerPadding: 0,
    lazyLoad : true,
    autoplay: false,
    responsive: [
      {
        breakpoint: 1024,
        settings: {
          slidesToShow: 2,
          slidesToScroll: 2,
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
    <div className="flex p-12">
   <div className=" w-[100%] m-auto ">
      <Slider {...settings} >
        {services.map(item => (
         <Link to="/djema/123">
          <div className="serviceCard">
           <div className='' key={item.id}>
          <div className="">
            <div className="flex  ">
              <ServiceCard item={item} key={item.id} />
            </div>
          </div>
           </div>
           </div>
           </Link>
        ))
        }
      </Slider>
      </div>
      </div>
   

  );
};

export default ServiceSlider;
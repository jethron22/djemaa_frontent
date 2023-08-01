import React from "react";
import Slider from "react-slick"
import CatCard from "../catCard/CatCard";
import { cards } from "../data";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";


const Slide = () => {

  const settings = {
    dots: true,
    slidesToShow: 5,
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
   <div className=" w-[1250px] m-auto ">

      <Slider {...settings}>
        {cards.map(card => (
          <div className="">
           <div className='' key={card.id}>
          <div className="">
            <div className="flex justify-between">
              <CatCard item={card} key={card.id} />
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

export default Slide;
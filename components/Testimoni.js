import React, { useState } from "react";

// import react slick
import Slider from "react-slick";
import Image from "next/image";
import Stars from "../public/assets/Icon/stars.svg";
import ArrowBack from "../public/assets/Icon/eva_arrow-back-fill.svg";
import ArrowNext from "../public/assets/Icon/eva_arrow-next-fill.svg";

const Testimoni = ({
  listTestimoni = [
    {
      name: "Usman",
      image: "/assets/people-3.png",
      city: "Addis Ababa",
      country: "Ethiopia",
      rating: "5",
      hasVideo: true,
      videoSource: 'assets/videos/usman.mp4',
      testimoni:
        "",
    },
    {
      name: "Birhan",
      image: "/assets/people-3.png",
      city: "Addis Ababa",
      country: " Ethiopia",
      rating: "5",
      hasVideo: true,
      videoSource: 'assets/videos/birhan.mp4',
      testimoni:
        "",
    },
    {
      name: "Fitsum",
      image: "/assets/people-3.png",
      city: "Addis Ababa",
      country: " Ethiopia",
      rating: "5",
      hasScreenshot: true,
      screenshotSource: 'assets/screenshots/fitsum.jpeg',
      testimoni:
        "",
    },
  ],
}) => {
  const settings = {
    dots: true,
    customPaging: function (i) {
      return (
        <a className="">
          <span className="mx-2 rounded-l-full rounded-r-full h-4 w-4 block cursor-pointer transition-all "></span>
        </a>
      );
    },
    dotsClass: "slick-dots w-max absolute mt-20  ",
    infinite: true,
    speed: 500,
    slidesToShow: 3,
    slidesToScroll: 2,
    responsive: [
      {
        breakpoint: 770,
        settings: {
          slidesToShow: 2,
          slidesToScroll: 2,
          initialSlide: 2,
        },
      },
      {
        breakpoint: 480,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
        },
      },
    ],
  };
  const [sliderRef, setSliderRef] = useState(null);

  return (
    <>
      <Slider
        {...settings}
        arrows={false}
        ref={setSliderRef}
        className="flex items-stretch justify-items-stretch"
      >
        {listTestimoni.map((listTestimonis, index) => (
          <div className="px-3 flex items-stretch " key={index}>
            <div className="border-2 min-h-[700px] border-gray-500 hover:border-white transition-all rounded-lg p-8 flex flex-col">
              <div className="flex flex-col xl:flex-row w-full items-stretch xl:items-center">
                <div className="flex order-2 xl:order-1">
                  <div className="flex flex-col ml-5 text-left">
                    <p className="text-lg text-white capitalize">
                      {listTestimonis.name}
                    </p>
                    <p className="text-sm text-white capitalize">
                      {listTestimonis.city},{listTestimonis.country}
                    </p>
                  </div>
                </div>
                {/* <div className="flex flex-none items-center ml-auto order-1 xl:order-2">
                  <p className="text-sm">{listTestimonis.rating}</p>
                  <span className="flex ml-4">
                    <Stars className="h-4 w-4" />
                  </span>
                </div> */}
              </div>
              <p className="mt-5 text-left">{listTestimonis.testimoni}</p>

              {/* Conditionally render video player or screenshot based on hasVideo and hasScreenshot */}
              {listTestimonis.hasVideo ? (
                <div>
                  <video controls>
                    <source src={listTestimonis.videoSource} type="video/mp4" />
                    Your browser does not support the video tag.
                  </video>


                </div>
              ) : listTestimonis.hasScreenshot ? (
                <div>
                  <img

                    src={listTestimonis.screenshotSource}
                    alt="Screenshot"
                  />
                </div>
              ) : null}
            </div>
          </div>
        ))}

      </Slider>
      {/* <div className="flex w-full items-center justify-end">
        <div className="flex flex-none justify-between w-auto mt-14">
          <div
            className="mx-4 flex items-center justify-center h-14 w-14 rounded-full bg-white border-white border hover:bg-white hover:text-white-500 transition-all text-white cursor-pointer"
            onClick={sliderRef?.slickPrev}
          >
            <ArrowBack className="h-6 w-6 " />
          </div>
          <div
            className="flex items-center justify-center h-14 w-14 rounded-full bg-white border-white border hover:bg-white hover:text-white-500 transition-all text-white cursor-pointer"
            onClick={sliderRef?.slickNext}
          >
            <ArrowNext className="h-6 w-6" />
          </div>
        </div>
      </div> */}
    </>
  );
};

export default Testimoni;

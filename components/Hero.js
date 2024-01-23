import React, { useMemo, useRef, useState } from "react";
import Image from "next/image";
import ButtonPrimary from "./misc/ButtonPrimary";
import { motion } from "framer-motion";
import getScrollAnimation from "../utils/getScrollAnimation";
import ScrollAnimationWrapper from "./Layout/ScrollAnimationWrapper";
import LogoVPN from "../public/assets/Logo.svg";
import YouTube from 'react-youtube';

const VideoPlayer = () => {
  // Video options (you can customize these as needed)
  const opts = {
    height: '390',
    width: '640',
    playerVars: {
      // https://developers.google.com/youtube/player_parameters
      autoplay: 0,
    },
  };

  // Video ID from the YouTube URL
  const videoId = '6jBb1RFBnBY';

  return (
    <div className="video-container">
      <YouTube videoId={videoId} opts={opts} />
    </div>
  );
};

const Hero = ({

  listUser = [
    {
      name: "Users",
      number: "390",
      icon: "/assets/Icon/heroicons_sm-user.svg",
    },
    {
      name: "Locations",
      number: "20",
      icon: "/assets/Icon/gridicons_location.svg",
    },
    {
      name: "Server",
      number: "50",
      icon: "/assets/Icon/bx_bxs-server.svg",
    },
  ],
}) => {
  const videoRef = useRef(null);
  const [isPlaying, setIsPlaying] = useState(false);
  const scrollAnimation = useMemo(() => getScrollAnimation(), []);

  const togglePlayPause = () => {
    const video = videoRef.current;

    if (video.paused) {
      video.play();
    } else {
      video.pause();
    }

    setIsPlaying(!isPlaying);
  };


  return (
    <div
      className="max-w-screen-full px-8 xl:px-16 mx-auto"
      id="about"
    >
      <ScrollAnimationWrapper>
        <motion.div
          className="w-full py-12 justify-center"
          variants={scrollAnimation}>
          <div>
            <img
              src="assets/Logo.svg"
              alt="Logo"
              style={{ height: '50px', margin: 'auto' }} // Adjust the height as needed
            />
          </div>



        </motion.div>
      </ScrollAnimationWrapper>
      <div className="pt-[20px] px-10 pb-[112px]">
        <ScrollAnimationWrapper>
          <motion.div
            className="w-full justify-center"
            variants={scrollAnimation}>
            <h1 style={{ fontFamily: 'jiret' }} className="text-3xl text-center">
              የማህበራዊ ሚዲያ በመጠቀም እና ትርፋማ እድሎችን በመክፈት የእራሳችሁን ገቢ ለመፍጠር እድሉን ተጠቀሙ !
            </h1>
          </motion.div>
        </ScrollAnimationWrapper>
        <ScrollAnimationWrapper className="pt-12">
          <motion.div
            className="grid grid-flow-row sm:grid-flow-col grid-rows-2 md:grid-rows-1 sm:grid-cols-2 gap-4 justify-center"
            variants={scrollAnimation}>
            <div className="flex w-full">
              <motion.div className="h-full w-full" variants={scrollAnimation}>
                <div className="relative">
                  <VideoPlayer />
                </div>
              </motion.div>
            </div>
            <div className=" flex flex-col justify-center items-start row-start-2 sm:row-start-1">
              <p style={{ fontFamily: 'Poppins', textTransform: 'uppercase', fontWeight: '900', color: 'white', fontSize: '18px' }} >
                Mastering the Art of Digital Influence
              </p>
              <p style={{ fontFamily: 'jiret', color: 'white', fontSize: '18px' }}>
                የዲጂታል ተፅእኖ ጥበብን እንዴት ወደ ትርፍ መቀየር ይቻላል?
              </p>
              <ul style={{ fontFamily: 'jiret' }} className="mt-1 mb-6 flex flex-col gap-4">
                <li>
                  <div className="flex gap-3 mt-4">
                    <div>-</div>
                    <div>የሚማርኩ እና ተፅእኖ ያላቸው ውጤቶች የሚያደርሱ አሳቢ መልዕክቶችን ፣ ፁሁፍዋችን መስራት ።</div>
                  </div>
                </li>
                <li>
                  <div className="flex gap-3">
                    <div>-</div>
                    <div>በተሻሻለ ማህበራዊ ሚዲያ በመገኘት ።</div>
                  </div>
                </li>
                <li>
                  <div className="flex gap-3">
                    <div>-</div>
                    <div>እሴት በመፍጠር እና አቅርቦቶችን በብቃት ለገበያ በማቅረብ ።</div>
                  </div>
                </li>
                <li>
                  <div className="flex gap-3">
                    <div>-</div>
                    <div>በለውጥ ስትራቴጂ ሽያጮችን ከፍ በማድረግ ።</div>
                  </div>
                </li>
              </ul>
            </div>

          </motion.div>
        </ScrollAnimationWrapper>
      </div>

      {/* <div className="relative w-full flex">
        <ScrollAnimationWrapper
          className="rounded-lg w-full grid grid-flow-row sm:grid-flow-row grid-cols-1 sm:grid-cols-3 py-9 divide-y-2 sm:divide-y-0 sm:divide-x-2 divide-gray-100 bg-white-500 z-10">
          {listUser.map((listUsers, index) => (
            <motion.div
              className="flex items-center justify-start sm:justify-center py-4 sm:py-6 w-8/12 px-4 sm:w-auto mx-auto sm:mx-0"
              key={index}
              custom={{ duration: 2 + index }}
              variants={scrollAnimation}
            >
              <div className="flex mx-auto w-40 sm:w-auto">
                <div className="flex items-center justify-center bg-orange-100 w-12 h-12 mr-6 rounded-full">
                  <img src={listUsers.icon} className="h-6 w-6" />
                </div>
                <div className="flex flex-col">
                  <p className="text-xl text-white font-bold">
                    {listUsers.number}+
                  </p>
                  <p className="text-lg text-white">{listUsers.name}</p>
                </div>
              </div>
            </motion.div>
          ))}
        </ScrollAnimationWrapper>
        <div
          className="absolute bg-black-600 opacity-5 w-11/12 roudned-lg h-64 sm:h-48 top-0 mt-8 mx-auto left-0 right-0"
          style={{ filter: "blur(114px)" }}
        ></div>
      </div> */}
    </div >
  );
};

export default Hero;

import React, { useMemo,} from "react";
import { motion } from "framer-motion";
import getScrollAnimation from "../utils/getScrollAnimation";
import ScrollAnimationWrapper from "./Layout/ScrollAnimationWrapper";
import YouTube from 'react-youtube';

const VideoPlayer = () => {
  const opts = {
    height: '400',
    width: '100%', 
    playerVars: {
      autoplay: 0,
    },
  };

  const videoId = '6jBb1RFBnBY';

  return (
    <div className="video-container rounded-xl">
      <YouTube videoId={videoId} opts={opts} />
      <style jsx>{`
        .video-container {
          border-radius: 10px; // Adjust the value as needed
          overflow: hidden; // Ensure the rounded corners are visible
        }
      `}</style>
    </div>
  );
};


const Hero = ({

}) => {
  const scrollAnimation = useMemo(() => getScrollAnimation(), []);

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
              style={{ height: '50px', margin: 'auto' }} 
            />
          </div>
        </motion.div>
      </ScrollAnimationWrapper>
      <div className="pt-[20px] px-10 pb-[112px]">
        <ScrollAnimationWrapper>
          <motion.div
            className="w-full justify-center"
            variants={scrollAnimation}>
            <h1 style={{ fontFamily: 'jiret' }} className="text-xl md:text-3xl text-center">
              የማህበራዊ ሚዲያ በመጠቀም እና ትርፋማ እድሎችን በመክፈት የእራሳችሁን ገቢ ለመፍጠር እድሉን ተጠቀሙ !
            </h1>
          </motion.div>
        </ScrollAnimationWrapper>
        <ScrollAnimationWrapper className="pt-12 px-4">
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
              <ul style={{ fontFamily: 'jiret' }} className=" mt-1 mb-6 flex flex-col gap-4">
                <li>
                  <div className="flex gap-3 mt-4 ">
                    <div>-</div>
                    <div>የሚማርኩ እና ተፅእኖ ያላቸው ውጤቶች የሚያደርሱ አሳቢ መልዕክቶችን ፣ ፁሁፍዋችን መስራት ።</div>
                  </div>
                </li>
                <li>
                  <div className="flex gap-3 ">
                    <div>-</div>
                    <div className="">በተሻሻለ ማህበራዊ ሚዲያ በመገኘት ።</div>
                  </div>
                </li>
                <li>
                  <div className="flex gap-3 ">
                    <div>-</div>
                    <div>እሴት በመፍጠር እና አቅርቦቶችን በብቃት ለገበያ በማቅረብ ።</div>
                  </div>
                </li>
                <li>
                  <div className="flex gap-3 ">
                    <div>-</div>
                    <div>በለውጥ ስትራቴጂ ሽያጮችን ከፍ በማድረግ ።</div>
                  </div>
                </li>
              </ul>
            </div>

          </motion.div>
        </ScrollAnimationWrapper>
      </div> 

    </div >
  );
};

export default Hero;

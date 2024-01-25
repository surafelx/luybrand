import React, { useMemo, } from "react";
import { motion } from "framer-motion";
import getScrollAnimation from "../utils/getScrollAnimation";
import ScrollAnimationWrapper from "./Layout/ScrollAnimationWrapper";
import YouTube from 'react-youtube';
import LiteYouTubeEmbed from 'react-lite-youtube-embed';
import 'react-lite-youtube-embed/dist/LiteYouTubeEmbed.css'


const VideoPlayer = () => {
  const opts = {
    height: '400',
    width: '600',
    playerVars: {
      autoplay: 0,
    },
  };

  const opts2 = {
    height: '200',
    width: '690',
    playerVars: {
      autoplay: 0,
    },
  };

  const videoId = '6jBb1RFBnBY';

  return (
    <>
      <div>
        <div className="video-container hidden lg:flex justify-center rounded-xl">
          <YouTube className="rounded-xl" iframeClassName="rounded-xl" videoId={videoId} opts={opts} />
          <style jsx>{`
     .video-container {
       border-radius: 10px; // Adjust the value as needed
       overflow: hidden; // Ensure the rounded corners are visible
     }
   `}</style>
        </div>
      </div>
      <div className="video-container lg:hidden flex justify-center rounded-xl">
        <YouTube videoId={videoId} opts={opts2} />
        <style jsx>{`
     .video-container {
       border-radius: 10px; // Adjust the value as needed
       overflow: hidden; // Ensure the rounded corners are visible
     }
   `}</style>
      </div>
    </>

  );
};


const YoutubeEmbed = ({ embedId }) => (
  <div className="video-responsive">
    <iframe
      width="853"
      height="480"
      src={`https://www.youtube.com/embed/${embedId}`}
      frameBorder="0"
      allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
      allowFullScreen
      title="Embedded youtube"
    />
  </div>
);

const Hero = ({

}) => {
  const scrollAnimation = useMemo(() => getScrollAnimation(), []);

  return (
    <div
      className="max-w-screen-xl px-8 xl:px-16 mx-auto"
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
      <div className="pt-[20px] px-10">
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
            className="flex justify-center h-full w-full flex-col xl:flex-row gap-8 xl:gap-0"
            variants={scrollAnimation}>
            <div className="flex w-full">
              <motion.div className="h-full w-full xl:px-8" variants={scrollAnimation}>
                <div className="relative">
                  <div className="video-responsive">
                    <iframe
                      width="853"
                      height="480"
                      src={`https://www.youtube.com/embed/6jBb1RFBnBY`}
                      frameBorder="0"
                      allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                      allowFullScreen
                      title="Embedded youtube"
                    />
                  </div>
                  <style jsx>{`
    .video-responsive {
      overflow: hidden;
      padding-bottom: 56.25%;
      position: relative;
      height: 0;
    }
    
    .video-responsive iframe {
      left: 0;
      top: 0;
      height: 100%;
      width: 100%;
      position: absolute;
      border-radius: 10px;
    }
   `}</style>
                  {/* <VideoPlayer /> */}
                </div>
              </motion.div>
            </div>
            <div className=" flex flex-col justify-center">
              <p style={{ fontFamily: 'Poppins', textTransform: 'uppercase', textAlign: 'center', fontWeight: '900', color: 'white', fontSize: '18px' }} >
                Mastering the Art of Digital Influence
              </p>
              <p style={{ fontFamily: 'jiret', color: 'white', textAlign: 'center', fontSize: '18px' }}>
                የዲጂታል ተፅእኖ ጥበብን እንዴት ወደ ትርፍ መቀየር ይቻላል?
              </p>
              <ul style={{ fontFamily: 'jiret' }} className=" mt-1 mb-6 mx-auto flex flex-col gap-4">
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

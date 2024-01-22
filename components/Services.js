import Image from "next/image";
import React, { useMemo } from "react";
import { motion } from "framer-motion";
import getScrollAnimation from "../utils/getScrollAnimation";
import ScrollAnimationWrapper from "./Layout/ScrollAnimationWrapper";

const features = [
  "Powerfull online protection.",
  "Internet without borders.",
  "Supercharged VPN",
  "No specific time limits."
]

const Feature = () => {
  const scrollAnimation = useMemo(() => getScrollAnimation(), []);

  return (
    <div
      className="max-w-screen-xl mt-8 mb-6 sm:mt-14 sm:mb-14 px-6 sm:px-8 lg:px-16 mx-auto"
      id="feature"
    >
      <div className="grid grid-flow-row sm:grid-flow-col grid-cols-1 sm:grid-cols-2 gap-8 p  y-8 my-12">

        <ScrollAnimationWrapper className="my-auto">
          <motion.div variants={scrollAnimation}>
            <h2 className="text-white text-lg">
              1. Copywriting Mastery Module
            </h2>
            <ul className="mt-1 mb-6 flex flex-col gap-4">
              <li>
                <div className="flex gap-3">
                  <div>-</div>
                  <div>Crafting compelling headlines and taglines</div>
                </div>
              </li>
              <li>
                <div className="flex gap-3">
                  <div>-</div>
                  <div>Building persuasive copy for various platforms</div>
                </div>
              </li>
              <li>
                <div className="flex gap-3">
                  <div>-</div>
                  <div>A/B testing strategies for optimal messaging</div>
                </div>
              </li>
            </ul>
          </motion.div>
        </ScrollAnimationWrapper>
        <ScrollAnimationWrapper className="flex w-full justify-end">
          <motion.div className="h-full w-full p-4" variants={scrollAnimation}>
            <Image
              src="/assets/Illustration2.png"
              alt="VPN Illustrasi"
              layout="responsive"
              quality={100}
              height={414}
              width={508}
            />
          </motion.div>
        </ScrollAnimationWrapper>
      </div>
      <div className="grid grid-flow-row sm:grid-flow-col grid-cols-1 sm:grid-cols-2 gap-8 p  y-8 my-12">


        <ScrollAnimationWrapper className="flex w-full justify-end">
          <motion.div className="h-full w-full p-4" variants={scrollAnimation}>
            <Image
              src="/assets/Illustration2.png"
              alt="VPN Illustrasi"
              layout="responsive"
              quality={100}
              height={414}
              width={508}
            />
          </motion.div>
        </ScrollAnimationWrapper>
        <ScrollAnimationWrapper className="my-auto">
          <motion.div variants={scrollAnimation}>
            <h2 className="text-white text-lg">
              2. Content Creation Workshop
            </h2>
            <ul className="mt-1 mb-6 flex flex-col gap-4">
              <li>
                <div className="flex gap-3">
                  <div>-</div>
                  <div>Creating engaging and shareable content</div>
                </div>
              </li>
              <li>
                <div className="flex gap-3">
                  <div>-</div>
                  <div>Leveraging storytelling techniques</div>
                </div>
              </li>
              <li>
                <div className="flex gap-3">
                  <div>-</div>
                  <div>Designing eye-catching visuals for maximum impact</div>
                </div>
              </li>
            </ul>
          </motion.div>
        </ScrollAnimationWrapper>
      </div>
      <div className="grid grid-flow-row sm:grid-flow-col grid-cols-1 sm:grid-cols-2 gap-8 p  y-8 my-12">

        <ScrollAnimationWrapper className="my-auto">
          <motion.div variants={scrollAnimation}>
            <h2 className="text-white text-lg">
              3. Strategic Marketing Tactics
            </h2>
            <ul className="mt-1 mb-6 flex flex-col gap-4">
              <li>
                <div className="flex gap-3">
                  <div>-</div>
                  <div>Developing a personalized marketing plan</div>
                </div>
              </li>
              <li>
                <div className="flex gap-3">
                  <div>-</div>
                  <div>Utilizing social media algorithms to boost visibility</div>
                </div>
              </li>
              <li>
                <div className="flex gap-3">
                  <div>-</div>
                  <div>Implementing targeted advertising for effective reach</div>
                </div>
              </li>
            </ul>
          </motion.div>
        </ScrollAnimationWrapper>
        <ScrollAnimationWrapper className="flex w-full justify-end">
          <motion.div className="h-full w-full p-4" variants={scrollAnimation}>
            <Image
              src="/assets/Illustration2.png"
              alt="VPN Illustrasi"
              layout="responsive"
              quality={100}
              height={414}
              width={508}
            />
          </motion.div>
        </ScrollAnimationWrapper>
      </div>
      <div className="grid grid-flow-row sm:grid-flow-col grid-cols-1 sm:grid-cols-2 gap-8 p  y-8 my-12">


        <ScrollAnimationWrapper className="flex w-full justify-end">
          <motion.div className="h-full w-full p-4" variants={scrollAnimation}>
            <Image
              src="/assets/Illustration2.png"
              alt="VPN Illustrasi"
              layout="responsive"
              quality={100}
              height={414}
              width={508}
            />
          </motion.div>
        </ScrollAnimationWrapper>
        <ScrollAnimationWrapper className="my-auto">
          <motion.div variants={scrollAnimation}>
            <h2 className="text-white text-lg">
              4. Sales Acceleration Strategies
            </h2>
            <ul className="mt-1 mb-6 flex flex-col gap-4">
              <li>
                <div className="flex gap-3">
                  <div>-</div>
                  <div>Understanding consumer psychology</div>
                </div>
              </li>
              <li>
                <div className="flex gap-3">
                  <div>-</div>
                  <div>Building effective sales funnels</div>
                </div>
              </li>
              <li>
                <div className="flex gap-3">
                  <div>-</div>
                  <div>Overcoming objections and closing deals confidently</div>
                </div>
              </li>
            </ul>
          </motion.div>
        </ScrollAnimationWrapper>
      </div>
    </div>
  );
};

export default Feature;



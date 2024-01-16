import Image from "next/image";
import React, { useMemo } from "react";
import { motion } from "framer-motion";
import getScrollAnimation from "../utils/getScrollAnimation";
import ScrollAnimationWrapper from "./Layout/ScrollAnimationWrapper";

const features = [
  "How to improve your productivity and efficiency?",
  "How to overcome challenges and obstacles?",
  "How to develop a positive mindset and attitude?",
  "How to network and build relationships?",
  "How to grow your personal brand and reputation?",
  "And much more"
]

const Feature = () => {
  const scrollAnimation = useMemo(() => getScrollAnimation(), []);

  return (
    <div
      className="max-w-screen-xl mt-8 mb-6 sm:mt-14 sm:mb-14 px-6 sm:px-8 lg:px-16 mx-auto"
      id="feature"
    >
      <div className="grid grid-flow-row sm:grid-flow-col grid-cols-1 sm:grid-cols-2 gap-8 py-8 my-12">
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
        <ScrollAnimationWrapper>

          <motion.div className="flex flex-col ml-auto justify-center w-full lg:w-9/12" variants={scrollAnimation}>
            <h3 className="text-3xl text-left lg:text-4xl font-medium leading-relaxed text-black-600">
              Hi There!
            </h3>
            <div>
            <p className="my-2 text-black-500">
                Are you looking for free resources to boost your skills and knowledge? Do you want to learn from experts who have been in your shoes and know what it takes to succeed?
              </p>
              <p className="my-2 text-black-500">
                Are you looking for free resources to boost your skills and knowledge? Do you want to learn from experts who have been in your shoes and know what it takes to succeed?
              </p>
              <p className="my-2 text-black-500">
                If you answered yes, then you’re in luck. I have a special offer for you: a free PDF that contains valuable tips, tricks, and insights on how to achieve your goals. This PDF is not available anywhere else, and it’s only for my loyal subscribers.
              </p>
              <p className="my-2 text-black-500">
                But wait, there’s more. If you share this PDF with your friends and family, you’ll also get access to my exclusive channel, where I post new and exciting content every week. You’ll find videos, podcasts, articles, and more on topics such as:
              </p>
            </div>
            <ul className="text-black-500 self-start list-inside ml-8">
              {features.map((feature, index) => (
                <motion.li
                  className="relative circle-check custom-list"
                  custom={{ duration: 2 + index }}
                  variants={scrollAnimation}
                  key={feature}
                  whileHover={{
                    scale: 1.1,
                    transition: {
                      duration: .2
                    }
                  }}>
                  {feature}
                </motion.li>
              )
              )}
            </ul>
          </motion.div>
        </ScrollAnimationWrapper>
      </div>
    </div>
  );
};

export default Feature;

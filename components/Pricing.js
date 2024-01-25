import React, { useMemo } from "react";
import Testimoni from "./Testimoni";
import ButtonOutline from "./misc/ButtonOutline.";
import { motion } from "framer-motion";
import getScrollAnimation from "../utils/getScrollAnimation";
import ScrollAnimationWrapper from "./Layout/ScrollAnimationWrapper";

const Pricing = () => {
  const scrollAnimation = useMemo(() => getScrollAnimation(), []);

  return (
    <div
      className=" w-full py-14"
      id="pricing"
    >

      <div className="max-w-screen-xl  px-6 sm:px-8 lg:px-16 mx-auto flex flex-col w-full text-center justify-center">
        <ScrollAnimationWrapper>
          <motion.h3
            className="text-2xl sm:text-3xl lg:text-4xl font-medium text-white leading-normal w-9/12 sm: lg:w-4/12 mx-auto">
            Pricing
          </motion.h3>
        </ScrollAnimationWrapper>
        <div className="flex flex-col w-full">
          <div className="grid grid-flow-row sm:grid-flow-col grid-cols-1 sm:grid-cols-2 gap-2 lg:gap-12 py-8 lg:py-12 px-6 sm:px-0 lg:px-6">
            <div className="flex justify-center ">
              <div
                className="flex flex-col justify-center min-w-[500px] items-center border-2 border-gray-500 rounded-xl py-4 px-6 lg:px-12 xl:px-20"
              >
                <div className="p-4 lg:p-0 mt-6 lg:mt-16">
                  <img
                    src="/assets/basic.png"
                    className=""
                    style={{ width: "100%", height: "auto" }}
                    alt="Premium Plan"
                  />
                </div>
                <p className="text-lg text-white font-medium capitalize my-2 sm:my-7">
                  Basic Access{" "}
                </p>
                <ul className="flex flex-col list-inside pl-6 xl:pl-0 items-start justify-start text-left text-white flex-grow">
                  <li className="relative check custom-list my-2">
                    3 PDF
                  </li>
                  <li className="relative check custom-list my-2">
                    Ebooks & Templates
                  </li>
                </ul>
                <div className="flex flex-col w-full justify-center mb-8 flex-none mt-12">
                  <p className="text-2xl text-white text-center mb-4 ">
                    Free
                  </p>
                  <a href="https://t.me/Luybrand">
                    <ButtonOutline >Join Now</ButtonOutline>
                  </a>
                </div>
              </div>
            </div>

            <div className="flex justify-center">
              <div
                className="flex flex-col justify-center items-center min-w-[500px] border-2 border-gray-500 rounded-xl py-4 px-6 lg:px-12 xl:px-20"
              >
                <div className="p-4 lg:p-0 mt-6 lg:mt-16">
                  <img
                    src="/assets/stan-plan.png"
                    className=""
                    style={{ width: "100%", height: "auto" }}
                    alt="Premium Plan"
                  />

                </div>
                <p className="text-lg text-white font-medium capitalize my-2 sm:my-7">
                  Standard Access{" "}
                </p>
                <ul className="flex flex-col list-inside pl-6 xl:pl-0 items-start justify-start text-left text-white flex-grow">
                  <li className="relative check custom-list my-2">
                    Full access to course creator masterclass
                  </li>
                  <li className="relative check custom-list my-2">
                    Full Access To Our Community.
                  </li>
                  <li className="relative check custom-list my-2">
                    Basic Access included.
                  </li>
                </ul>
                <div className="flex flex-col w-full justify-center mb-8 flex-none mt-12">
                  <p className="text-2xl text-white text-center mb-4 ">
                    998 Birr
                  </p>
                  <a href="https://t.me/Luybrand1">
                    <ButtonOutline >Join Now</ButtonOutline>
                  </a>
                </div>
              </div>
            </div>

          </div>
          <div className="grid grid-flow-row sm:grid-flow-col grid-cols-1 sm:grid-cols-2 gap-2 lg:gap-12 py-8 lg:py-12 px-6 sm:px-0 lg:px-6">

            <div className="flex justify-center">
              <div
                className="flex flex-col justify-center min-w-[500px] items-center border-2 border-gray-500 rounded-xl py-4 px-6 lg:px-12 xl:px-20"
              >
                <div className="p-4 lg:p-0 mt-6 lg:mt-16">
                  <img
                    src="/assets/vip.png"
                    className=""
                    style={{ width: "100%", height: "auto" }}
                    alt="Premium Plan"
                  />
                </div>
                <p className="text-lg text-white font-medium capitalize my-2 sm:my-7">
                  VIP Access{" "}
                </p>
                <ul className="flex flex-col list-inside pl-6 xl:pl-0 items-start justify-start text-left text-white flex-grow">
                  <li className="relative check custom-list my-2">
                    Full access to course creator masterclass
                  </li>
                  <li className="relative check custom-list my-2">
                    Extensive supplementary materials (PDF‘S)
                  </li>
                  <li className="relative check custom-list my-2">
                    Full Access To Our Community.
                  </li>
                  <li className="relative check custom-list my-2">
                    Exclusive live Q&A sessions or webinars.
                  </li>
                </ul>
                <div className="flex flex-col w-full justify-center mb-8 flex-none mt-12">
                  <p className="text-2xl text-white text-center mb-4 ">
                    2289 Birr
                  </p>
                  <a href="https://t.me/Luybrand1">
                    <ButtonOutline >Join Now</ButtonOutline>
                  </a>
                </div>
              </div>
            </div>
            <div className="flex justify-center">
              <div
                className="flex flex-col justify-center items-center min-w-[500px] border-2 border-gray-500 rounded-xl py-4 px-6 lg:px-12 xl:px-20"
              >
                <div className="p-4 lg:p-0 mt-6 lg:mt-16">
                  <img
                    src="/assets/one-on-one.png"
                    className=""
                    style={{ width: "100%", height: "auto" }}
                    alt="Premium Plan"
                  />
                </div>
                <p className="text-lg text-white font-medium capitalize my-2 sm:my-7">
                  101 Mentorship{" "}
                </p>
                <ul className="flex flex-col list-inside pl-6 xl:pl-0 items-start justify-start text-left text-white flex-grow">
                  <li className="relative check custom-list my-2">
                    Free access for 5 minutes
                  </li>
                </ul>
                <div className="flex flex-col w-full justify-center mb-8 flex-none mt-12">
                  <p className="text-2xl text-white text-center mb-4 ">
                    Enroll Me
                  </p>
                  <a href="https://t.me/Luymentor">
                    <ButtonOutline >Join Now</ButtonOutline>
                  </a>
                </div>
              </div>
            </div>
          </div>
        </div>

        <div className="flex flex-col w-full my-16" id="testimoni">
          <ScrollAnimationWrapper>
            <motion.h3
              className="text-2xl sm:text-3xl lg:text-4xl font-medium text-white leading-normal w-9/12 sm: lg:w-4/12 mx-auto">
              Testimonials
            </motion.h3>
          </ScrollAnimationWrapper>
          {/* <ScrollAnimationWrapper className="w-full flex flex-col py-12"> */}
          <Testimoni />
          {/* </motion.div> */}
          {/* </ScrollAnimationWrapper> */}
        </div>
      </div>
    </div>
  );
};

export default Pricing;

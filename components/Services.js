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
            <h2 className="text-white text-2xl uppercase mb-8 font-extrabold">
              1. Copywriting Mastery Module
            </h2>
            <ul className="mt-1 mb-6 flex flex-col gap-4">
              <li>
                <div className="flex gap-3">
                  <div>-</div>
                  <div>አስገዳጅ ርዕሰ ዜናዎች እና taglines ማዘጋጀት</div>
                </div>
              </li>
              <li>
                <div className="flex gap-3">
                  <div>-</div>
                  <div>ለተለያዩ መድረኮች የማሳመን ችሎታ መገንባት</div>
                </div>
              </li>
              <li>
                <div className="flex gap-3">
                  <div>-</div>
                  <div>የተሻለ መልዕክት ለመለዋወጥ የሚያስችሉ የምርመራ ስልቶች</div>
                </div>
              </li>
            </ul>
          </motion.div>
        </ScrollAnimationWrapper>
        <ScrollAnimationWrapper className="flex w-full justify-end">
          <motion.div className="h-full w-full p-4" variants={scrollAnimation}>
            <Image
              src="/assets/copy.jpg"
              alt="VPN Illustrasi"
              layout="responsive"
              quality={100}
              height={508}
              width={508}
            />
          </motion.div>
        </ScrollAnimationWrapper>
      </div>
      <div className="grid grid-flow-row sm:grid-flow-col grid-cols-1 sm:grid-cols-2 gap-8 p  y-8 my-12">


        <ScrollAnimationWrapper className="flex w-full justify-end">
          <motion.div className="h-full w-full p-4" variants={scrollAnimation}>
            <Image
              src="/assets/content.jpg"
              alt="VPN Illustrasi"
              layout="responsive"
              quality={100}
              height={508}
              width={508}
            />
          </motion.div>
        </ScrollAnimationWrapper>
        <ScrollAnimationWrapper className="my-auto">
          <motion.div variants={scrollAnimation}>
            <h2 className="text-white text-2xl uppercase mb-8 font-extrabold">
              2. Content Creation Workshop
            </h2>
            <ul className="mt-1 mb-6 flex flex-col gap-4">
              <li>
                <div className="flex gap-3">
                  <div>-</div>
                  <div>ተሳታፊ እና የጋራ ይዘት መፍጠር</div>
                </div>
              </li>
              <li>
                <div className="flex gap-3">
                  <div>-</div>
                  <div>የተረት ቴክኒኮችን መጠቀም</div>
                </div>
              </li>
              <li>
                <div className="flex gap-3">
                  <div>-</div>
                  <div>ከፍተኛ ተፅዕኖ ለማግኘት ዓይንን የሚስቡ እይታዎችን ዲዛይን ማድረግ</div>
                </div>
              </li>
            </ul>
          </motion.div>
        </ScrollAnimationWrapper>
      </div>
      <div className="grid grid-flow-row sm:grid-flow-col grid-cols-1 sm:grid-cols-2 gap-8 p  y-8 my-12">

        <ScrollAnimationWrapper className="my-auto">
          <motion.div variants={scrollAnimation}>
            <h2 className="text-white text-2xl uppercase mb-8 font-extrabold">
              3. Strategic Marketing Tactics
            </h2>
            <ul className="mt-1 mb-6 flex flex-col gap-4">
              <li>
                <div className="flex gap-3">
                  <div>-</div>
                  <div>የግል ንግድ ዕቅድ ማዘጋጀት</div>
                </div>
              </li>
              <li>
                <div className="flex gap-3">
                  <div>-</div>
                  <div>የማህበራዊ ሚዲያ በመጠቀም እይታን ማሳደግ</div>
                </div>
              </li>
              <li>
                <div className="flex gap-3">
                  <div>-</div>
                  <div>ውጤታማ መዳረሻ ለማግኘት የታለመ ማስታወቂያ መስራት</div>
                </div>
              </li>
            </ul>
          </motion.div>
        </ScrollAnimationWrapper>
        <ScrollAnimationWrapper className="flex w-full justify-end">
          <motion.div className="h-full w-full p-4" variants={scrollAnimation}>
            <Image
              src="/assets/strategy.jpg"
              alt="VPN Illustrasi"
              layout="responsive"
              quality={100}
              height={508}
              width={508}
            />
          </motion.div>
        </ScrollAnimationWrapper>
      </div>
      <div className="grid grid-flow-row sm:grid-flow-col grid-cols-1 sm:grid-cols-2 gap-8 p  y-8 my-12">


        <ScrollAnimationWrapper className="flex w-full justify-end">
          <motion.div className="h-full w-full p-4" variants={scrollAnimation}>
            <Image
              src="/assets/sales.jpg"
              alt="VPN Illustrasi"
              layout="responsive"
              quality={100}
              height={508}
              width={508}
            />
          </motion.div>
        </ScrollAnimationWrapper>
        <ScrollAnimationWrapper className="my-auto">
          <motion.div variants={scrollAnimation}>
            <h2 className="text-white text-2xl uppercase mb-8 font-extrabold">
              4. Sales Acceleration Strategies
            </h2>
            <ul className="mt-1 mb-6 flex flex-col gap-4">
              <li>
                <div className="flex gap-3">
                  <div>-</div>
                  <div>የሸማቾችን ስነ-ልቦና መረዳት</div>
                </div>
              </li>
              <li>
                <div className="flex gap-3">
                  <div>-</div>
                  <div>ውጤታማ የሽያጭ መነገዶችን መገንባ</div>
                </div>
              </li>
              <li>
                <div className="flex gap-3">
                  <div>-</div>
                  <div>ተቃውሞዎችን እና ውሎችን ማሸነፍ</div>
                </div>
              </li>
            </ul>
          </motion.div>
        </ScrollAnimationWrapper>
      </div>
      <ScrollAnimationWrapper className="my-auto">
        <motion.div variants={scrollAnimation}>
          <section class="bg-white dark:bg-gray-900">
            <div class="py-8 px-4 mx-auto max-w-screen-xl sm:py-16 lg:px-6">
              <div class="max-w-screen-md mb-8 mx-auto lg:mb-16">
                <h2 class="mb-4 text-4xl tracking-tight text-center font-extrabold text-gray-900 dark:text-white">Course Features</h2>
              </div>
              <div class="space-y-8 md:grid md:grid-cols-3 lg:grid-cols-4 md:gap-12 md:space-y-0">
                <div>
                 
                  <h3 class="mb-2 text-xl text-center font-bold dark:text-white">በኢንዱስትሪ የሚመሩ እርስ በርስ የሚቃረኑ የቪዲዮ ንግግሮች</h3>
                </div>
                <div>
                  
                  <h3 class="mb-2 text-xl text-center font-bold dark:text-white">ተግባራዊ የሚሆን ቴምፕሌቶች እና መምሪያዎች</h3>
                </div>
                <div>
                
                  <h3 class="mb-2 text-xl text-center font-bold dark:text-white">የጥያቄ እና የውይይት መድረኮች</h3>
                </div>
                <div>
                  
                  <h3 class="mb-2 text-xl text-center font-bold dark:text-white">ኮርሱን ሲጨርሱ የማጠናቀቂያ ምስክር ወረቀት</h3>
                </div>
              </div>
            </div>
          </section>
        </motion.div>
      </ScrollAnimationWrapper>
      
      <h2 className="text-white flex justify-center py-8 text-2xl uppercase mb-8 font-extrabold">
        በእርስዎ ስኬት ኢንቨስት ያድርጉ እና የዲጂታል ተፅዕኖዎን ለመቀየር ዛሬ ይመዝገቡ!
      </h2>
    </div>
  );
};

export default Feature;



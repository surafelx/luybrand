import Image from "next/image";
import React, { useMemo } from "react";
import { motion } from "framer-motion";
import getScrollAnimation from "../utils/getScrollAnimation";
import ScrollAnimationWrapper from "./Layout/ScrollAnimationWrapper";

const Feature = () => {
  const scrollAnimation = useMemo(() => getScrollAnimation(), []);

  return (
    <div
      className="max-w-screen-xl mt-8 mb-6 sm:mt-14 sm:mb-14 px-6 sm:px-8 lg:px-16 mx-auto"
      id="feature"
    >
      <div className="grid grid-flow-row sm:grid-flow-col grid-cols-1 sm:grid-cols-2 gap-8 my-12">
        <ScrollAnimationWrapper className="flex w-full justify-end">
          <motion.div className="h-full w-full p-4" variants={scrollAnimation}>
            <Image
              src="/assets/phone.png"
              alt="Hamdi Bank Account"
              layout="responsive"
              quality={100}
              height={594}
              width={420}
            />
          </motion.div>
        </ScrollAnimationWrapper>
        <ScrollAnimationWrapper  className="my-40">
          <motion.div variants={scrollAnimation}>
            <p  style={{ fontFamily: 'jiret', fontWeight: '500', color: 'white', fontSize: '18px'}}>
            በኮሌጅ በምቆይበት ጊዜ የገንዘብ ችግር በጣም ከባድ ነበር። ይሁን እንጂ የዲጂታል ምርቶችን የመፍጠር አጋጣሚ አገኘሁ ፤ እንዲሁም ችሎታዬንና እውቀቴን ተግባራዊ በማድረግ ጠቃሚ የሆነ ነገር ማስተማር ጀምርኩ። በማህበራዊ ሚዲያ በኩል በኢንተርኔት ከ100,000 በላይ ተከታይ አፍርቻለው። በምርቶቼ የሰው ፍላጎት እየጨመረ በመምጣቱ ከፍተኛ ሽያጭ እያስገኘው መምጣት ጀመርኩ። በወር ከ10ሺ ብር በላይ ማትረፍ ጀመርኩ ። ማጋነን እንዳይሆን ብዬ ነው እንጂ ከ 100ሺ ብር በላይም ሰርቻለው። እናም ይህ ስኬት የገንዘብ ሸክሜን ከማቃለሌም በላይ ቆራጥነት እና የዲጂታል ድርጅቶች የሚያሳድሩትን ተጽዕኖ ጎላ አድርጎ ገልጿልኛል። እናም በአጭር ግዜ ውስጥ ላስተምራችሁ እፈልጋለው። እንቀጥል።
            </p>
          </motion.div>
        </ScrollAnimationWrapper>
      </div>
    </div>
  );
};

export default Feature;

'use client'

import Typewriter from 'typewriter-effect';
import localFont from "next/font/local";
import GraphemeSplitter from "grapheme-splitter";
import { motion, useScroll, useTransform } from "framer-motion";
import { useRef } from 'react';

const nameFont = localFont({
    src: "../fonts/LeagueSpartan-ExtraBold.ttf",
  });

const stringSplitter = string => {
const splitter = new GraphemeSplitter();
return splitter.splitGraphemes(string);
};

console.log("I see you stalking! 👻")

export default function Main() {

  // Scroll Animation
  const targetRef = useRef(null);
  const { scrollYProgress } = useScroll({
      target: targetRef,
      offset: ["start end", "end start"], // Starts when section enters view and ends when it exits
  });
  const fadeOut = useTransform(scrollYProgress, [0.6, 0.75], [1, 0]);

    return (
      <div id="" ref={targetRef} className="h-screen w-full flex sm:items-center justify-center px-10" >
        <motion.div className="flex flex-wrap-reverse sm:flex-nowrap sm:items-center justify-center mt-20 sm:mt-10" style={{ opacity: fadeOut }}>
            {/* Intro Text */}
            <div className="m-4 sm:ml-10 lg:ml-22">
                <div className='text-xl -mb-1'>Hi. I&apos;m</div>
                <div className={`text-8xl ${nameFont.className}`} >Kai Sheng</div>
                <div className='text-xl -mt-4'>A
                    <Typewriter 
                        options={{
                            cursor:"",
                            strings: [' Student.', ' Software Engineer. 👨‍💻', ' Photographer? 📷', ' Volleyballer? 🏐'],
                            autoStart: true,
                            loop: true,
                            skipAddStyles: false,
                            stringSplitter
                        }}
                    />
                </div>
            </div>

            {/* Picture of meeself. */}
            <div className='mx-8 sm:ml-5 lg:ml-40 sm:mr-10 lg:mr-2 max-h-fit'>
                <img
                src="/main.png"  
                alt="Main Image"
                />
            </div>
        </motion.div>
        </div>
        
    )

}
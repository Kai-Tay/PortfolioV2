'use client'

import Typewriter from 'typewriter-effect';
import localFont from "next/font/local";
import GraphemeSplitter from "grapheme-splitter";
import { motion } from "framer-motion"

const nameFont = localFont({
    src: "../fonts/LeagueSpartan-ExtraBold.ttf",
  });

const stringSplitter = string => {
const splitter = new GraphemeSplitter();
return splitter.splitGraphemes(string);
};

console.log("I see you stalking! 👻")

export default function Main() {

    return (
      <div className="h-dvh w-full flex sm:items-center justify-center">
        <motion.div initial="hidden" animate="visible" variants={{
            hidden: {
              scale: 0.7,
              opacity: 0
            },
            visible: {
              scale: 1,
              opacity: 1,
              transition: {
                type: "spring",
                bounce: 0.25,
                delay: 0.5,
                duration: 0.5,
              }
            },
          }}>
        <div className="flex flex-wrap-reverse sm:flex-nowrap sm:items-center justify-center">
            {/* Intro Text */}
            <div className="m-4 sm:ml-10 lg:ml-22">
                <div className='text-xl -mb-1'>Hi. I'm</div>
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
        </div>
        </motion.div>
        </div>

        
    )

}
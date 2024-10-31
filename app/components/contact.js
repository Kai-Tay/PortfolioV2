'use client'
import { motion, useScroll, useTransform } from "framer-motion";
import { useRef } from 'react';

export default function Contact() {

    // Scroll Animation
    const targetRef = useRef(null);
    const { scrollYProgress } = useScroll({
        target: targetRef,
        offset: ["start end", "end start"], // Starts when section enters view and ends when it exits
    });

    // Adjust opacity transformations within the bounds of the section
    const opacity = useTransform(scrollYProgress, [0.4, 0.5, 0.7], [0, 0.3, 0]);
    const y = useTransform(scrollYProgress, [0.4, 0.7], [0, -50]);
    const fadeOut = useTransform(scrollYProgress, [0.6, 0.7], [1, 0]);

    return (
        <div id="contact" ref={targetRef}  className="aboutContainer">
            <motion.div style={{ opacity,y }}>
                <img src="/wallpaper.png" className="h-screen w-full object-cover" alt="Emoji Background"/>
            </motion.div>
            <motion.div className="h-screen flex flex-col items-left justify-center content mx-10" style={{ opacity: fadeOut }}>
                <div className="font-bold text-6xl md:text-8xl text-center sm:text-left">Contact Me!</div>
                <div className="text-lg lg:text-xl lg:mr-96 my-4 text-center sm:text-left" style={{fontFamily:'League Spartan, sans-serif', fontWeight: '550'}}>
                    Phone Number - 65 87201788 <br></br>
                    Email - kstay.2023@scis.smu.edu.sg
                </div>
            </motion.div>
        </div>
    );
}
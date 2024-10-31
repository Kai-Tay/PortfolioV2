'use client'
import { motion, useScroll, useTransform } from "framer-motion";
import { useRef } from 'react';

export default function About() {

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
        <div id="about" ref={targetRef}  className="aboutContainer">
            <motion.div style={{ opacity,y }}>
                <img src="/wallpaper.png" className="h-screen w-full object-cover" alt="Emoji Background"/>
            </motion.div>
            <motion.div className="h-screen flex flex-col items-left justify-center content mx-10" style={{ opacity: fadeOut }}>
                <div className="font-bold text-6xl md:text-8xl text-center sm:text-left">About Me!</div>
                <div className="text-lg lg:text-xl lg:mr-96 my-4 text-center sm:text-left" style={{fontFamily:'League Spartan, sans-serif', fontWeight: '550'}}>
                    Hi! I’m Kai Sheng, a second-year Software Engineering student at SMU.
                    I’m passionate about exploring new languages and frameworks through hands-on projects, which I find to be the best way to learn. Outside of tech,
                    I enjoy capturing moments with my film camera and playing volleyball—both give me a great balance between creativity and staying active.
                </div>
            </motion.div>
        </div>
    );
}
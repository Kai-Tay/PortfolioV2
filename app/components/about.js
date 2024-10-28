'use client'
import { motion, useScroll, useTransform } from "framer-motion";
import Image from 'next/image';

export default function About() {

    // Scroll Animation
    const { scrollY } = useScroll(); // Track the scroll position
    const opacity = useTransform(scrollY, [650, 1100, 1400], [0, 0.2, 0]); // Map scroll to opacity
    

    scrollY.onChange((latest) => {
        console.log('Scroll value:', latest);
    });

    return (
        <div id="about" className="aboutContainer">
            <motion.div style={{ opacity }}>
                <img src="/wallpaper.png" className="h-dvh w-full object-cover" alt="Emoji Background"/>
            </motion.div>
            <div className="h-dvh flex flex-col items-left justify-center content mx-10">
                <div className="font-bold text-5xl lg:text-8xl text-center sm:text-left">About Me!</div>
                <div className="text-lg lg:text-xl lg:mr-96 my-4 text-center sm:text-left" style={{fontFamily:'League Spartan, sans-serif', fontWeight: '550'}}>Hi! I’m Kai Sheng, a second-year Software Engineering student at SMU.
                    I’m passionate about exploring new languages and frameworks through hands-on projects, which I find to be the best way to learn. Outside of tech,
                    I enjoy capturing moments with my film camera and playing volleyball—both give me a great balance between creativity and staying active.</div>
            </div>
        </div>
    );
}
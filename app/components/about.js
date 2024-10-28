'use client'
import { motion, useScroll, useTransform } from "framer-motion";

export default function About() {

    // Scroll Animation
    const { scrollY } = useScroll(); // Track the scroll position
    const opacity = useTransform(scrollY, [600, 1000], [0, 0.15]); // Map scroll to opacity

    scrollY.onChange((latest) => {
        console.log('Scroll value:', latest);
    });

    return (
        <div className="aboutContainer">
            <motion.div style={{ opacity }}>
                <img src="/wallpaper.png" className="h-dvh w-full object-cover" />
            </motion.div>
            <div className="h-dvh w-full flex flex-col items-left justify-center content ml-10">
                <div className="font-bold text-5xl lg:text-8xl">About Me!</div>
                <div className="text-sm lg:text-lg lg:mr-96 my-4 ">Hi! I’m Kai Sheng, a second-year Software Engineering student at SMU.
                    I’m passionate about exploring new languages and frameworks through hands-on projects, which I find to be the best way to learn. Outside of tech,
                    I enjoy capturing moments with my film camera and playing volleyball—both give me a great balance between creativity and staying active.</div>
            </div>
        </div>
    );
}
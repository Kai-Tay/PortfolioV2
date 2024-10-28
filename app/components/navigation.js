"use client"

import localFont from "next/font/local";
import Main from "./main";
import { motion, useScroll, useTransform } from 'framer-motion';
import { useState, useEffect } from 'react';

const nameFont = localFont({
    src: "../fonts/LeagueSpartan-ExtraBold.ttf",
});

export default function Navigation() {
    const [text, setText] = useState('');
    const fullText = "Kai Sheng";

    // Use Framer Motion's useScroll to track the page's scroll progress
    const { scrollYProgress } = useScroll();

    // Transform the scroll progress into a character count
    const characterCount = useTransform(scrollYProgress, [0.2, 0.3], [0, fullText.length]);

    // Update the displayed text as the scroll progresses
    useEffect(() => {
        characterCount.onChange((latest) => {
            setText(fullText.substring(0, Math.round(latest)));
        });
    }, [characterCount]);

    return (
        <div>
            <nav className="fixed w-full text-center px-10">
                {/* LARGE WIDTH */}
                <div id="defaultNav" className="w-full hidden md:flex items-center h-24">
                    <motion.div className="flex-initial" style={{ width: '250px', height: '60px' }}>
                        <div className={`text-5xl text-left ${nameFont.className} mt-2`}>{text}</div>
                    </motion.div>
                    <div className="text-md flex flex-initial space-x-6 absolute left-1/2 transform -translate-x-1/2">
                        <div id="navPointer"></div>
                        <a href="#" className="rounded-md px-3 py-2" aria-current="page">About Me</a>
                        <a href="#" className="rounded-md px-3 py-2" aria-current="page">Projects</a>
                        <a href="#" className="rounded-md px-3 py-2" aria-current="page">Contact Me</a>
                    </div>
                </div>
                {/* Dropdown Burger */}
                <div className="md:hidden" id="mobile-menu">
                    <div className={`text-3xl text-center ${nameFont.className} mt-2`}>Kai Sheng</div>
                    <div className="space-y-1 px-2 pb-3 pt-2">
                        <a href="#" className="block rounded-md bg-gray-900 px-3 py-2 text-base font-medium text-white" aria-current="page">Dashboard</a>
                        <a href="#" className="block rounded-md px-3 py-2 text-base font-medium text-gray-300 hover:bg-gray-700 hover:text-white">Team</a>
                        <a href="#" className="block rounded-md px-3 py-2 text-base font-medium text-gray-300 hover:bg-gray-700 hover:text-white">Projects</a>
                    </div>
                </div>


            </nav>
            
        </div>

    )

}
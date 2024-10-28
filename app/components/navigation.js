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

    // Hamburger Menu Toggle
    const [menu, setMenu] = useState(false);
    const handleHamburgerMenu = () => { setMenu(!menu) };

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
                <div id="defaultNav" className="w-full hidden md:flex items-center h-20" href="#">
                    <a href="#">
                        <motion.div className="flex flex-initial items-center" style={{ width: '250px', height: '60px' }}>
                            <div className={`text-5xl text-left ${nameFont.className} mt-2`}>{text}</div>
                        </motion.div>
                    </a>
                    <div className="text-md flex flex-initial space-x-6 absolute left-1/2 transform -translate-x-1/2">
                        <div id="navPointer"></div>
                        <a href="#about" className="rounded-md px-3 py-2" aria-current="page">About Me</a>
                        <a href="#projects" className="rounded-md px-3 py-2" aria-current="page">Projects</a>
                        <a href="#" className="rounded-md px-3 py-2" aria-current="page">Contact Me</a>
                    </div>
                </div>
                {/* Dropdown Burger */}
                <div>
                    {menu ? (
                        <div className="mt-4">
                            <div className="md:hidden flex flex-inline justify-between" id="mobile-menu" >
                                <div className="w-10"></div>
                                <div className={`text-3xl text-center ${nameFont.className} mt-2`}>Kai Sheng</div>
                                <div className="w-10 flex flex-inline justify-center items-center" onClick={handleHamburgerMenu}>
                                    <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24"
                                        stroke="currentColor">
                                        <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2"
                                            d="M4 6h16M4 12h16M4 18h16" />
                                    </svg>
                                </div>
                            </div>
                            <div className="space-y-1 px-2 pb-3 pt-2">
                                <a href="#" className="block rounded-md px-3 py-2 text-base font-medium hover:bg-gray-800 hover:text-white" >Home</a>
                                <a href="#about" className="block rounded-md px-3 py-2 text-base font-medium hover:bg-gray-800 hover:text-white">About Me</a>
                                <a href="#projects" className="block rounded-md px-3 py-2 text-base font-medium hover:bg-gray-800 hover:text-white">Projects</a>
                            </div>
                        </div>

                    ) : (
                        <div className="mt-4">
                            <div className="md:hidden flex flex-inline justify-between" id="mobile-menu" >
                                <div className="w-10"></div>
                                <div className={`text-3xl text-center ${nameFont.className} mt-2`}>Kai Sheng</div>
                                <div className="w-10 flex flex-inline justify-center items-center" onClick={handleHamburgerMenu}>
                                    <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24"
                                        stroke="currentColor">
                                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2"
                                            d="M4 6h16M4 12h16M4 18h16" />
                                    </svg>
                                </div>
                            </div></div>)}

                </div>
            </nav>

        </div>

    )

}
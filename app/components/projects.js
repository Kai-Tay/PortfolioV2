'use client'

import { motion, useTransform , useScroll,} from 'framer-motion';
import { useState, useEffect } from 'react';

export default function About() {

    const [text, setText] = useState('');
    const fullText = "We all love them.";

    // Use useScroll to track the page's scroll progress
    const { scrollYProgress } = useScroll();

    // Transform the scroll progress into a character count
    const characterCount = useTransform(scrollYProgress, [0.6, 0.8], [0, fullText.length]);

    // Update the displayed text as the scroll progresses
    useEffect(() => {
        characterCount.onChange((latest) => {
            setText(fullText.substring(0, Math.round(latest)));
        });
    }, [characterCount]);

    return (
        <div id="projects" className="h-screen w-full flex flex-col relative">
            {/* Header */}
            <motion.div className="flex flex-col font-bold text-8xl text-center mt-52 sticky top-44">
                Projects
                <div className="flex justify-center mt-6 text-lg">{text}</div>
            </motion.div>

            {/* Gap */}
            <div className="mb-60"></div>

            {/* Image */}
            <div className="flex scale-75">
                <img src="/vscode.png" alt="Emoji Background" />
            </div>
        </div>
    );
}
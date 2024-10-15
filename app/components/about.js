'use client'

import { motion, useScroll, useTransform } from 'framer-motion';
import { useState, useEffect } from 'react';

export default function About() {
    const [text, setText] = useState('');
    const fullText = "Hello, welcome to my portfolio!";
    
    // Use Framer Motion's useScroll to track the page's scroll progress
    const { scrollYProgress } = useScroll();

    // Transform the scroll progress into a character count
    const characterCount = useTransform(scrollYProgress, [0.2, 0.4], [0, fullText.length]);

    // Update the displayed text as the scroll progresses
    useEffect(() => {
        characterCount.onChange((latest) => {
            setText(fullText.substring(0, Math.round(latest)));
        });
    }, [characterCount]);

    return (
        <div style={{ height: '200vh', padding: '2rem' }}> {/* Tall container for scrolling */}
            <motion.div style={{ fontSize: '2rem', marginTop: '40vh' }}> {/* Text block */}
                {text}
            </motion.div>
        </div>
    );
}
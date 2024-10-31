import { motion, useTransform, useScroll } from 'framer-motion';
import { useState, useEffect, useRef } from 'react';

export default function ProjectListing({ projectDetails }) {
    const containerRef = useRef(null);
    const { scrollYProgress } = useScroll({
        target: containerRef,
        offset: ["start end", "end start"] // Track from top of component to bottom
      });

    // Create a transform to control opacity based on scroll
    const opacity = useTransform(
        scrollYProgress,
        [0, 0.45, 0.5], // Define scroll ranges
        [1, 1, 0]      // Corresponding opacity values
    );
    return (
        <motion.div
            ref={containerRef}
            style={{
                opacity,
            }}>
            <div id={projectDetails.id} className='h-screen flex flex-col justify-center mx-20' >
                <div className="font-bold text-6xl md:text-7xl lg:text-8xl text-center sm:text-left">{projectDetails.title}</div>
                <div className="text-lg md:text-md lg:text-xl my-4 text-center sm:text-left" style={{ fontFamily: 'League Spartan, sans-serif', fontWeight: '550' }}>
                    <div className="w-full md:w-1/2"> {/* Container for half-width */}
                    {projectDetails.description}
                    </div>
                </div>
            </div>
        </motion.div>
    );
}
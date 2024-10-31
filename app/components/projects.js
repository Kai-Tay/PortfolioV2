'use client'

import { motion, useTransform, useScroll } from 'framer-motion';
import { useState, useEffect, useRef } from 'react';

export default function About() {

    const [text, setText] = useState('');
    const fullText = "We all love them.";


    // Scroll Animation
    const targetRef = useRef(null);
    
    const { scrollYProgress: projectHeader } = useScroll({
        target: targetRef,
        offset: ["start end", "end start"], // Starts when section enters view and ends when it exits
    });

    const projectRef = useRef(null);
    const { scrollYProgress: projectList  } = useScroll({
        target: projectRef,
        offset: ["start end", "end start"], // Starts when section enters view and ends when it exits
    });

    // Image
    const scale = useTransform(projectHeader, [0.1, 1], [0.5, 0.95])
    const x = useTransform(projectList, [0.5, 0.6], [0, window.innerWidth]);

    // Transform the scroll progress into a character count
    const characterCount = useTransform(projectHeader, [0.05, 0.25], [0, fullText.length]);

    // Update the displayed text as the scroll progresses
    useEffect(() => {
        characterCount.onChange((latest) => {
            setText(fullText.substring(0, Math.round(latest)));
        });
    }, [characterCount]);

    return (
        <div>
            <div id="projects" className=" w-full flex flex-col relative">
                {/* Header */}
                <motion.div
                
                    className="flex flex-col font-bold text-6xl md:text-8xl text-center mt-52 sticky top-44"
                    initial={{ opacity: 0, y: 50 }}   // Start hidden and below
                    whileInView={{ opacity: 1, y: 0 }} // Animate when in view
                    viewport={{ amount: 0.1, delay: 0 }} // Trigger animation when 10% of the section is in view
                    transition={{ duration: 1, ease: "easeOut" }}
                >
                    Projects
                    <div ref={targetRef}  className="flex justify-center mt-6 text-lg">{text}</div>
                    <div className="mb-52"></div>
                </motion.div>


                {/* Sticky Image Container */}
                <motion.div
                    className="flex items-center justify-center  sticky top-80" // Adjust `top` to place below header
                    style={{ scale, x }}
                >
                    <img src="/vscode.png" alt="Emoji Background" className="w-full" />
                </motion.div>

                {/* Spacing before project sections */}
                <div className="h-screen"></div>

                {/* Project Sections */}
                <div  id="maibro" className='h-screen flex flex-col justify-center mx-10' >
                    <div className="font-bold text-6xl md:text-8xl text-center sm:text-left">MaiBro</div>
                    <div className="text-lg lg:text-xl my-4 text-center sm:text-left" style={{ fontFamily: 'League Spartan, sans-serif', fontWeight: '550' }}>
                        <div className="w-full md:w-1/2"> {/* Container for half-width */}
                            MaiBro is a platform for Singapore Management University (SMU) students that connects them as buyers and sellers for takeaway options from nearby locations, especially during busy school days. It helps students conveniently order food while also allowing them to earn extra income by selling food items to their peers.
                            <br></br><br></br>This initiative fosters community engagement, enhancing the overall campus experience.
                        </div>
                    </div>
                </div>

                <div id="oners" className='h-screen flex flex-col justify-center mx-10'>
                    <div className="font-bold text-6xl md:text-8xl text-center sm:text-left">ONE.RS</div>
                    <div className="text-lg lg:text-xl my-4 text-center sm:text-left" style={{ fontFamily: 'League Spartan, sans-serif', fontWeight: '550' }}>
                        <div className="w-full md:w-1/2"> {/* Container for half-width */}
                        One.rs is a project focused on connecting restaurants with suppliers. It streamlines the process of sourcing ingredients and supplies for restaurants, facilitating efficient communication and transactions between buyers and sellers. This platform not only aims to enhance the supply chain management for restaurants but also offers features like inventory tracking and supplier matching, 
                        making it easier for restaurant owners to manage their operations effectively.
                        </div>
                    </div>
                </div>

                <div id="yippeetunes" className='h-screen flex flex-col justify-center mx-10'>
                    <div className="font-bold text-6xl md:text-8xl text-center sm:text-left mt-40">Yippee Tunes</div>
                    <div className="text-lg lg:text-xl my-4 text-center sm:text-left" style={{ fontFamily: 'League Spartan, sans-serif', fontWeight: '550' }}>
                        <div className="w-full md:w-1/2"> {/* Container for half-width */}
                            Hi! I’m Kai Sheng, a second-year Software Engineering student at SMU.
                            I’m passionate about exploring new languages and frameworks through hands-on projects, which I find to be the best way to learn. Outside of tech,
                            I enjoy capturing moments with my film camera and playing volleyball—both give me a great balance between creativity and staying active.
                        </div>
                    </div>
                </div>


            </div>

        </div>

    );
}
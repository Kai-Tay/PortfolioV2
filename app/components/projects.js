'use client'

import { motion, useTransform, useScroll } from 'framer-motion';
import { useState, useEffect, useRef } from 'react';
import ProjectListing from './projectListing';

export default function About() {

    const [text, setText] = useState('');
    const fullText = "We all love them.";

    // Scroll Animation
    const targetRef = useRef(null);
    const { scrollYProgress: projectHeader } = useScroll({
        target: targetRef,
        offset: ["start end", "end start"], // Starts when section enters view and ends when it exits
    });

    // 
    const projectRef = useRef(null);
    const { scrollYProgress: projectList } = useScroll({
        target: projectRef,
        offset: ["start end", "end start"], // Starts when section enters view and ends when it exits
    });

    // Update resize
    // const [windowWidth, setWindowWidth] = useState(window.innerWidth);

    // useEffect(() => {
    //     if (typeof window !== "undefined") {
    //         setWindowWidth(window.innerWidth);

    //         const handleResize = () => setWindowWidth(window.innerWidth);
    //         window.addEventListener('resize', handleResize);

    //         return () => window.removeEventListener('resize', handleResize);
    //     }
    // }, []);

    // Image
    // const scale = useTransform(projectList, [0.1, 0.3], [0.5, 0.95])
    // const x = useTransform(projectList, [0.5, 0.6], [0, windowWidth]);


    // Transform the scroll progress into a character count
    const characterCount = useTransform(projectHeader, [0.00, 0.35], [0, fullText.length]);

    // Update the displayed text as the scroll progresses
    useEffect(() => {
        characterCount.onChange((latest) => {
            setText(fullText.substring(0, Math.round(latest)));
        });
    }, [characterCount]);


    // Project details
    const projectData = [
        {
            id: 'maibro',
            title: 'MaiBro',
            description: 'MaiBro is a platform for Singapore Management University (SMU) students that connects them as buyers and sellers for takeaway options from nearby locations, especially during busy school days. It helps students conveniently order food while also allowing them to earn extra income by selling food items to their peers. This initiative fosters community engagement, enhancing the overall campus experience.'
        },
        {
            id: 'oners',
            title: 'ONE.RS',
            description: 'One.rs is a project focused on connecting restaurants with suppliers. It streamlines the process of sourcing ingredients and supplies for restaurants, facilitating efficient communication and transactions between buyers and sellers. This platform not only aims to enhance the supply chain management for restaurants but also offers features like inventory tracking and supplier matching, making it easier for restaurant owners to manage their operations effectively.'
        },
        {
            id: 'yippeetunes',
            title: 'YippeeTunes',
            description: "Yippee Tun.es is a Spotify recommendation application developed during the Data Associate Programme (DAP). \n It utilizes the Spotify API and Selenium to analyze user-provided playlists, generating personalized song recommendations based on this input. The app aims to help users discover music that aligns with their tastes by leveraging their existing playlists, making the recommendation process both engaging and intuitive."
        }
    ];

    return (
        <div>
            <div id="projects" className=" w-full flex flex-col relative">
                {/* Header */}
                <div
                    className="flex flex-col font-bold text-6xl md:text-8xl text-center mt-52 sticky top-44"
                >
                    Projects
                    <div className="flex justify-center mt-6 text-lg">{text}</div>
                    <div className="mb-52"></div>
                </div>


                {/* Sticky Image Container */}
                {/* <motion.div
                    ref={projectRef}
                    className="flex items-center justify-center w-full ticky top-80 overflow-hidden" // Adjust `top` to place below header
                    style={{ scale, x }}
                >
                    <img src="/vscode.png" alt="Emoji Background" className="w-full overflow-hidden" />
                </motion.div> */}

                {/* Spacing before project sections */}
                <div ref={targetRef} className="h-25"></div>

                {/* Project Sections */}
                {projectData.map((project) => (
                    <ProjectListing key={project.id} projectDetails={project} />
                ))}


            </div>

        </div>

    );
}
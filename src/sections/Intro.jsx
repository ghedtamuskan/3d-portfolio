import React from 'react';

import { toolsData } from "../assets/assets.js";
import { infoList } from "../assets/assets.js";
import { useRef } from "react";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { useGSAP } from "@gsap/react";

gsap.registerPlugin(ScrollTrigger);

const Intro = () => {
const aboutRef = useRef(null);

useGSAP(() => {
    gsap.from(aboutRef.current, {
        y: 50,
        opacity: 0,
        duration: 1,
        force3D: true,
        scrollTrigger: {
            trigger: aboutRef.current,
            start: "top 70%",
            toggleActions: "restart reverse restart reverse",
        },
    });
}, []);

    return (
        <div ref={aboutRef} id="about" className="w-full px-[10%]  py-10 scroll-mt-10 text-white-50">

        <h2 className='text-center mt-15 text-5xl font-bold font-Ovo'>About me</h2>

            <div className="flex w-full flex-col lg:flex-row items-center gap-20 my-20">
                <div
                    className="relative w-64 sm:w-80 rounded-3xl overflow-hidden
               transition-all duration-500
               hover:-translate-y-2
              hover:shadow-[0_0_20px_rgba(99,102,241,0.8)]">
                    <img
                        src="/mus.jpeg"
                        alt="Muskan Ghedta"
                        className="w-full h-full object-cover rounded-3xl

                 transition duration-500
                        hover:scale-[1.02]"                    />
                </div>


                <div className="flex-1">
                    <p className='mb-10 max-w-2xl font-Ovo'>
                        Hi, I’m Muskan, a web developer specializing in building responsive,
                        high-performance web applications. I work with HTML, CSS,
                        JavaScript, React, Node.js, Express, MongoDB and I’m expanding my
                        expertise in Three.js, GSAP animations, REST APIs, and modern
                        deployment workflows.
                    </p>

                    <ul className='grid grid-cols-1 sm:grid-cols-3 gap-6 max-w-2xl'>
                        {infoList.map(({ icon, title, description }, index) => (
                            <li
                                key={index}

                                className="border border-gray-700 rounded-xl p-6 cursor-pointer text-white
             hover:bg-[#1b1f3b]
             hover:-translate-y-2
             hover:shadow-[0_0_20px_rgba(99,102,241,0.4)]
             hover:border-indigo-500
             transition-all duration-500
             hover:scale-[1.02]"
                            >




                                <img src={icon} alt={title} className='w-7 mt-3 ' />
                                <h3 className='my-4 font-semibold'>{title}</h3>
                                <p className=' text-sm'>{description}</p>
                            </li>
                        ))}
                    </ul>

                    <h4 className='my-6 font-Ovo'> Tools I use</h4>
                    <ul className='flex items-center gap-3 sm:gap-5'>{toolsData.map((tool,index)=>(
                        <li className='flex items-center justify-center w-12 sm:w-14 aspect-square border border-gray-400 rounded-lg cursor-pointer  hover:bg-[#1b1f3b]
             hover:-translate-y-2
             hover:shadow-[0_0_20px_rgba(99,102,241,0.4)]
             hover:border-indigo-500
             transition-all duration-500
             hover:scale-[1.02]"' key={index}>
                           < img src={tool} alt='Tool' className='w-5 sm:w-7 '/>
                        </li>
                    ))}</ul>
                </div>
            </div>
        </div>
    );
};

export default Intro;


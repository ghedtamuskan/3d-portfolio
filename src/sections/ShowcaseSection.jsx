import React, { useRef} from "react";
import {gsap} from 'gsap';
import {ScrollTrigger} from 'gsap/ScrollTrigger';
import {useGSAP} from '@gsap/react';

gsap.registerPlugin(ScrollTrigger);

const ShowcaseSection = () => {
    const sectionRef = useRef(null);
    const project1Ref = useRef(null);
    const project2Ref = useRef(null);
    const project3Ref = useRef(null);


    useGSAP(() => {
        // Animation for main section
        gsap.fromTo(sectionRef.current, { opacity: 0 }, { opacity: 1, duration: 1.5, force3D: true });

        // Animation for each app showcase
        const projects =[project1Ref.current, project2Ref.current, project3Ref.current];

        projects.forEach((card,index) => {
            gsap.fromTo(
                card,
                { y: 50, opacity: 0 },
                {
                    y: 0,
                    opacity: 1,
                    duration: 1,
                    delay: 0.2 * (index + 1),
                    force3D: true,
                    scrollTrigger: {
                        trigger: card,
                        start: "top bottom-=100",
                        toggleActions: "restart reverse restart reverse",
                    },
                }
            );
        })
    },[]);

    return (
<div>            <h2 className='text-center mt-10 text-5xl font-bold font-Ovo'>Projects </h2>
        <div id="work" ref={sectionRef} className="app-showcase ">

            <div className="w-full">
                <div className="showcaselayout">

                    {/* Left side */}
                    <div className="first-project-wrapper" ref={project1Ref}>
                    <div className="image-wrapper">
  <a 
    href="https://ai-carrer-coach-hofy5i2uu-ghedtamuskans-projects.vercel.app"
    target="_blank"
    rel="noopener noreferrer"
  >
    <img src="/images/project1.png" alt="project1" />
  </a>
</div>

                        <div className="text-content">
                            <h2 className="text-2xl font-bold">
                            AI Career Coach – Intelligent Career Guidance Platform
                            </h2>
                            <p className="text-white-50 md:text-lg mt-3 leading-relaxed">
                            An AI-powered platform  that delivers personalized industry insights, generate cover letters and resume,
 and supports interview preperation  using AI-driven analysis
  and a modern responsive interface.
</p>

                        </div>
                    </div>

                    {/* Right side */}
                 
                    <div className="project-list-wrapper overflow-hidden ">

                        <div className="project2" ref={project2Ref}>
                            <div className="image-wrapper bg-[#ffefdb]">
                            <a 
    href="https://vacation-rental-platform-chi.vercel.app/listings"
    target="_blank"
    rel="noopener noreferrer"
  >
                                <img src="/images/project2.png" alt="project2" />
                                </a>
                            </div>
                            <h2>StayHub - Full Stack Vacation Rental Platform</h2>
                            
                        </div>

                        <div className="project3" ref={project3Ref}>
                            <div className="image-wrapper bg-[#ffe7eb]">
                                <img src="/images/project3.png" alt="project3" />
                            </div>
                            <h2>Library Management Platform</h2>
                        </div>

                    </div>

                </div>
            </div>
        </div>
</div>
    );
};

export default ShowcaseSection;


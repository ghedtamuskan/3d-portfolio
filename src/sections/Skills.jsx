import {useGSAP} from '@gsap/react'
import {gsap}from "gsap";
import React from "react";
import TechIcons from "../components/Models/TechLogos/TechIcons.jsx";
import TitleHeader from "../components/TitleHeader.jsx";
import { techStackIcons } from "../constants/index.js";



const Skills = () => {
    useGSAP(()=>{
        gsap.fromTo(
            ".tech-card",
            { y: 50, opacity: 0 },
            {
                y: 0,
                opacity: 1,
                duration: 1,
                ease: "power2.inOut",
                stagger: 0.2,
                force3D: true,
                scrollTrigger: {
                    trigger: "#skills",
                    start: "top center",
                },
            }
        );
    });

    return (
        <section id="skills" className="flex-center section-padding ">
            <div className="w-full h-full md:px-10 px-5">

                <TitleHeader
                    title="My Preferred Tech Stack"
                    sub="🤝 The Skills I Bring to the Table"
                />

                <div className="tech-grid   ">
                    {techStackIcons.map((icon) => (
                        <div
                            key={icon.name}
                            className="card-border tech-card group overflow-hidden
                         xl:rounded-full rounded-xl "
                        >
                            {/* Animated background */}
                            <div className="tech-card-animated-bg " />

                            {/* Content */}
                            <div className="tech-card-content relative z-10 mt-5 flex flex-col items-center justify-center gap-3">
                                <div className="tech-icon-wrapper ">
                                    <TechIcons model={icon} />
                                </div>
                                <div className=" padding-x mb-2 w-full">
                                    <p>{icon.name}</p>
                                </div>


                            </div>
                        </div>
                    ))}
                </div>

            </div>
        </section>
    );
};

export default Skills;


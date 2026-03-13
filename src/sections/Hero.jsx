import { useGSAP } from "@gsap/react";
import gsap from "gsap";
import { useRef, useState } from "react";

import Button from "../components/HeroModels/button.jsx";
import { words } from "../constants";
import HeroExperience from "../components/HeroModels/HeroExperience";
import { HeroSceneProvider } from "../components/HeroModels/HeroSceneContext";
import AnimatedCounter from "../components/AnimatedCounter.jsx";
import Intro from "../sections/Intro.jsx";
import ShowcaseSection from "./ShowcaseSection.jsx";
import Skills from "./Skills.jsx";
import Contact from "./Contact.jsx";
import Footer from "./Footer.jsx";


const Hero = () => {
    const heroRef = useRef(null);
    const sectionRef = useRef(null);
    const [show3D, setShow3D] = useState(true); // Load synchronously at the exact same time as text
    useGSAP(
        () => {
            gsap.fromTo(
                heroRef.current.querySelectorAll(" :scope>h1"),
                { y: 40, opacity: 0 },
                {
                    y: 0,
                    opacity: 1,
                    stagger: 0.4, // Longer stagger so they come in sequence one-by-one
                    duration: 0.9,
                    ease: "power2.out",
                    force3D: true,
                }
            );
        },
        { scope: heroRef } // ✅ IMPORTANT
    );

    return (
        <HeroSceneProvider>
            <section id="hero" ref={sectionRef} className="relative min-h-screen ">
                <div className="absolute top-0 left-0 z-10 ">
                    <img src="/images/bg.png" alt="" />
                </div>

                <div className="hero-layout relative z-10">
                    {/* LEFT: Hero Content */}
                    <header className="flex flex-col justify-center md:w-full w-screen md:px-20 px-5">
                        <div className="flex flex-col gap-7 ">
                            <div className="hero-text" ref={heroRef}>
                                <h1>
                                    Shaping
                                    <span className="slide">
                                        <span className="wrapper">
                                            {words.map((word, index) => (
                                                <span
                                                    key={index}
                                                    className="flex items-center md:gap-3 gap-1 pb-2"
                                                >
                                                    <img
                                                        src={word.imgPath}
                                                        alt="person"
                                                        className="xl:size-12 md:size-10 size-7 md:p-2 p-1 rounded-full bg-white-50"
                                                    />
                                                    <span>{word.text}</span>
                                                </span>
                                            ))}
                                        </span>
                                    </span>
                                </h1>
                                <h1>into Real Projects</h1>
                                <h1>that Deliver Results</h1>
                            </div>

                            <p className="text-white-50 md:text-xl relative z-10 pointer-events-none">
                                Hi, I’m MUSKAN GHEDTA, a developer based in India with a passion for
                                code.
                            </p>

                            <Button
                                text="See My Work"
                                className="md:w-80 md:h-16 w-60 h-12"
                                id="counter"
                            />
                        </div>
                    </header>

                    {/* 3D: on mobile below button, on desktop right side */}
                    <figure className="hero-3d-figure">
                        <div className="hero-3d-layout">
                            {show3D && <HeroExperience sectionRef={sectionRef} />}
                        </div>
                    </figure>
                </div>
                <AnimatedCounter />
                <Intro />
                <ShowcaseSection />
                <Skills />
                <Contact />
                <Footer />
            </section>
        </HeroSceneProvider>
    );
};

export default Hero;

import { useRef, useState, useEffect } from "react";
import { useProgress } from "@react-three/drei";
import { useGSAP } from "@gsap/react";
import gsap from "gsap";

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
    const sectionRef = useRef(null);
    const { progress } = useProgress();
    const [isReady, setIsReady] = useState(false);

    useEffect(() => {
        if (progress >= 90) {
            setIsReady(true);
        }
    }, [progress]);

    useGSAP(() => {
        if (isReady) {
            gsap.to(".hero-layout", {
                opacity: 1,
                duration: 0.6,
                ease: "power2.out",
                force3D: true,
            });
        }
    }, [isReady]);


    return (
        <HeroSceneProvider>
            <section id="hero" ref={sectionRef} className="relative min-h-screen ">
                <div className="absolute top-0 left-0 z-10 ">
                    <img src="/images/bg.png" alt="" />
                </div>

                <div className="hero-layout relative z-10 opacity-0 pointer-events-none data-[ready=true]:pointer-events-auto" data-ready={isReady}>
                    {/* LEFT: Hero Content */}
                    <header className="flex flex-col justify-center md:w-full w-screen md:px-20 px-5">
                        <div className="flex flex-col gap-7 ">
                            <div className="hero-text">
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
                                Hi, I’m Muskan Ghedta — a full-stack developer focused  <br />on  creating fast, responsive, and real-world web applications.
                            </p>

                            <Button
                                text="Explore My Work"
                                className="md:w-80 md:h-16 w-60 h-12"
                                id="counter"
                            />
                        </div>
                    </header>

                    {/* 3D: on mobile below button, on desktop right side */}
                    <figure className="hero-3d-figure">
                        <div className="hero-3d-layout">
                            <HeroExperience sectionRef={sectionRef} />
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

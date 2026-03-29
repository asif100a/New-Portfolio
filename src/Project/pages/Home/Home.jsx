"use client";

import { useInterSectionObserver } from "../../../hooks/useIntersectionObserver";
import Footer from "../../sharedFile/footer/Footer";
import Navbar from "../../sharedFile/navbar/Navbar";
import About from "./components/sections/About/About";
import Banner from "./components/sections/Banner/Banner";
import Contact from "./components/sections/Contact/Contact";
import Education from "./components/sections/Education/Education";
import Projects from "./components/sections/Projects/Projects";
import Skills from "./components/sections/Skills/Skills";
import WorkExperience from "./components/sections/WorkExperience/WorkExperience";

const Home = () => {
    const [sectionRef, isIntersecting] = useInterSectionObserver();

    return (
        <div className="overflow-hidden">
            <Navbar isIntersecting={isIntersecting} />
            <main className="relative">
                <div className="pointer-events-none absolute inset-x-0 top-0 -z-10 h-[38rem] bg-[radial-gradient(circle_at_top,rgba(94,145,255,0.18),transparent_48%)]" />
                <div className="pointer-events-none absolute left-1/2 top-[26rem] -z-10 h-80 w-80 -translate-x-1/2 rounded-full bg-cyan-400/10 blur-3xl" />
                <Banner sectionRef={sectionRef} />
                <About />
                <Education />
                <Skills />
                <WorkExperience />
                <Projects />
                <Contact />
            </main>
            <Footer />
        </div>
    );
};

export default Home;

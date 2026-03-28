"use client";

import { useInterSectionObserver } from "../../../hooks/useIntersectionObserver";
import FooterProfessional from "../../sharedFile/footer/FooterProfessional";
import Navbar from "../../sharedFile/navbar/Navbar";
import AboutProfessional from "./components/sections/About/AboutProfessional";
import BannerProfessional from "./components/sections/Banner/BannerProfessional";
import ContactProfessional from "./components/sections/Contact/ContactProfessional";
import EducationProfessional from "./components/sections/Education/EducationProfessional";
import ProjectsProfessional from "./components/sections/Projects/ProjectsProfessional";
import SkillsProfessional from "./components/sections/Skills/SkillsProfessional";
import WorkExperienceProfessional from "./components/sections/WorkExperience/WorkExperienceProfessional";

const Home = () => {
    const [sectionRef, isIntersecting] = useInterSectionObserver();

    return (
        <div className="overflow-hidden">
            <Navbar isIntersecting={isIntersecting} />
            <main className="relative">
                <div className="pointer-events-none absolute inset-x-0 top-0 -z-10 h-[38rem] bg-[radial-gradient(circle_at_top,rgba(94,145,255,0.18),transparent_48%)]" />
                <div className="pointer-events-none absolute left-1/2 top-[26rem] -z-10 h-80 w-80 -translate-x-1/2 rounded-full bg-cyan-400/10 blur-3xl" />
                <BannerProfessional sectionRef={sectionRef} />
                <AboutProfessional />
                <EducationProfessional />
                <SkillsProfessional />
                <WorkExperienceProfessional />
                <ProjectsProfessional />
                <ContactProfessional />
            </main>
            <FooterProfessional />
        </div>
    );
};

export default Home;

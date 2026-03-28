import { CiLinkedin } from "react-icons/ci";
import { LiaFacebook } from "react-icons/lia";
import { MdWhatsapp } from "react-icons/md";
import { VscGithub } from "react-icons/vsc";
import { Link as Scroll } from "react-scroll";

const FooterProfessional = () => {
    return (
        <footer className="px-4 pb-8 pt-2 sm:px-6 lg:px-8">
            <div className="mx-auto flex max-w-6xl flex-col gap-6 rounded-[2rem] border border-white/10 bg-slate-950/60 p-6 text-white backdrop-blur lg:flex-row lg:items-center lg:justify-between">
                <div>
                    <p className="text-sm font-semibold uppercase tracking-[0.28em] text-slate-400">N.M. Asif Sheikh</p>
                    <h2 className="mt-2 font-text-lora text-2xl text-white">Fullstack Engineer</h2>
                    <p className="mt-3 max-w-xl text-sm leading-7 text-slate-300">
                        Designing thoughtful interfaces and dependable product experiences with modern web technologies.
                    </p>
                </div>
                <nav className="flex flex-wrap gap-4 text-sm font-semibold text-slate-300">
                    <Scroll to="about" smooth={true} duration={600} offset={-96} className="cursor-pointer transition hover:text-white">About</Scroll>
                    <Scroll to="education" smooth={true} duration={600} offset={-96} className="cursor-pointer transition hover:text-white">Education</Scroll>
                    <Scroll to="skills" smooth={true} duration={600} offset={-96} className="cursor-pointer transition hover:text-white">Skills</Scroll>
                    <Scroll to="projects" smooth={true} duration={600} offset={-96} className="cursor-pointer transition hover:text-white">Projects</Scroll>
                    <Scroll to="contact" smooth={true} duration={600} offset={-96} className="cursor-pointer transition hover:text-white">Contact</Scroll>
                </nav>
                <div className="flex flex-col gap-4">
                    <div className="flex gap-4">
                        <a href="https://www.linkedin.com/in/n-m-asif-sheikh" target="_blank" rel="noreferrer" className="rounded-full border border-white/10 p-2 transition hover:border-sky-300/50 hover:text-sky-200"><CiLinkedin className="h-6 w-6" /></a>
                        <a href="https://github.com/asif100a" target="_blank" rel="noreferrer" className="rounded-full border border-white/10 p-2 transition hover:border-sky-300/50 hover:text-sky-200"><VscGithub className="h-5 w-5" /></a>
                        <a href="https://www.facebook.com/profile.php?id=100070024600518" target="_blank" rel="noreferrer" className="rounded-full border border-white/10 p-2 transition hover:border-sky-300/50 hover:text-sky-200"><LiaFacebook className="h-6 w-6" /></a>
                        <a href="https://wa.link/l3yb8x" target="_blank" rel="noreferrer" className="rounded-full border border-white/10 p-2 transition hover:border-sky-300/50 hover:text-sky-200"><MdWhatsapp className="h-6 w-6" /></a>
                    </div>
                    <p className="text-sm text-slate-400">Copyright © {new Date().getFullYear()} N.M. Asif Sheikh. All rights reserved.</p>
                </div>
            </div>
        </footer>
    );
};

export default FooterProfessional;

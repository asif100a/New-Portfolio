import { HiArrowRight, HiOutlineBriefcase, HiOutlineEnvelope, HiOutlineSparkles } from "react-icons/hi2";
import profilePhoto from "../../../../../../assets/asif.png";
import PropTypes from "prop-types";
import { scrollToSection } from "../../../../../../utils/utils";

const Banner = ({ sectionRef }) => {
    return (
        <section className="px-4 pb-10 pt-28 sm:px-6 lg:px-8 lg:pt-36">
            <div className="mx-auto grid max-w-6xl gap-10 lg:grid-cols-[1.15fr_0.85fr] lg:items-center">
                <div className="space-y-8">
                    <div className="inline-flex items-center gap-2 rounded-full border border-sky-300/20 bg-sky-300/10 px-4 py-2 text-sm font-semibold text-sky-100">
                        <HiOutlineSparkles className="text-base" />
                        {"Let's"} build modern, scalable, and user-friendly Web or Mobile Apps.
                    </div>
                    <div className="space-y-5">
                        <p className="text-sm font-semibold uppercase tracking-[0.35em] text-slate-400">N.M. Asif Sheikh</p>
                        <h1 className="max-w-3xl font-text-lora text-4xl leading-tight text-white sm:text-5xl lg:text-6xl">
                            Fullstack Developer building polished Web/Mobile Apps products
                        </h1>
                        <p className="max-w-2xl text-base leading-8 text-slate-300 sm:text-lg">
                            I design and develop thoughtful digital products with React, Next.js, TypeScript, and Node.js,
                            combining clean frontend execution with dependable backend architecture.
                        </p>
                    </div>
                    <div className="flex flex-col gap-4 sm:flex-row">
                        <button
                            type="button"
                            onClick={() => scrollToSection("projects")}
                            className="inline-flex items-center justify-center gap-2 rounded-full bg-[linear-gradient(135deg,#9cc2ff_0%,#6ddad3_100%)] px-6 py-3 text-sm font-bold text-slate-950 transition hover:scale-[1.02]"
                        >
                            View Selected Work
                            <HiArrowRight className="text-base" />
                        </button>
                        <button
                            type="button"
                            onClick={() => scrollToSection("contact")}
                            className="rounded-full border border-white/12 bg-white/5 px-6 py-3 text-sm font-semibold text-white transition hover:border-sky-300/50 hover:bg-white/8"
                        >
                            Start a Conversation
                        </button>
                    </div>
                    <div ref={sectionRef} className="grid gap-4 sm:grid-cols-3">
                        <div className="rounded-3xl border border-white/10 bg-white/5 p-5">
                            <p className="text-xs uppercase tracking-[0.28em] text-slate-400">Experience</p>
                            <p className="mt-3 text-2xl font-extrabold text-white">1+ year</p>
                            <p className="mt-1 text-sm text-slate-300">Production-focused fullstack delivery</p>
                        </div>
                        <div className="rounded-3xl border border-white/10 bg-white/5 p-5">
                            <p className="text-xs uppercase tracking-[0.28em] text-slate-400">Focus</p>
                            <p className="mt-3 text-2xl font-extrabold text-white">Next.js</p>
                            <p className="mt-1 text-sm text-slate-300">App architecture, UI systems, and APIs</p>
                        </div>
                        <div className="rounded-3xl border border-white/10 bg-white/5 p-5">
                            <p className="text-xs uppercase tracking-[0.28em] text-slate-400">Availability</p>
                            <p className="mt-3 text-2xl font-extrabold text-white">Open</p>
                            <p className="mt-1 text-sm text-slate-300">Remote collaboration and freelance work</p>
                        </div>
                    </div>
                </div>
                <div className="relative">
                    <div className="absolute -inset-6 rounded-[2rem] bg-[linear-gradient(135deg,rgba(112,169,255,0.22),rgba(68,214,203,0.08))] blur-2xl" />
                    <div className="relative rounded-[2rem] border border-white/10 bg-slate-950/70 p-5 shadow-[0_28px_90px_rgba(3,10,24,0.45)] backdrop-blur">
                        <div className="overflow-hidden rounded-[1.5rem] border border-white/10 bg-[linear-gradient(180deg,#16263f_0%,#0e1828_100%)]">
                            <img src={profilePhoto.src} alt="N.M. Asif Sheikh" className="h-[25rem] w-full object-cover object-top" />
                        </div>
                        <div className="mt-5 grid gap-4 sm:grid-cols-2">
                            <div className="rounded-2xl border border-white/10 bg-white/5 p-4">
                                <div className="flex items-center gap-3 text-sky-200">
                                    <HiOutlineBriefcase className="text-lg" />
                                    <span className="text-sm font-semibold uppercase tracking-[0.22em]">Role</span>
                                </div>
                                <p className="mt-3 text-lg font-semibold text-white">Fullstack Engineer Intern</p>
                                <p className="mt-1 text-sm text-slate-300">Building real-world dashboards and business applications.</p>
                            </div>
                            <div className="rounded-2xl border border-white/10 bg-white/5 p-4">
                                <div className="flex items-center gap-3 text-teal-200">
                                    <HiOutlineEnvelope className="text-lg" />
                                    <span className="text-sm font-semibold uppercase tracking-[0.22em]">Contact</span>
                                </div>
                                <p className="mt-3 text-lg font-semibold text-white">nmasifsheikh2003@gmail.com</p>
                                <p className="mt-1 text-sm text-slate-300">Based in Bangladesh, collaborating globally.</p>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
};

Banner.propTypes = {
    sectionRef: PropTypes.object.isRequired,
};

export default Banner;

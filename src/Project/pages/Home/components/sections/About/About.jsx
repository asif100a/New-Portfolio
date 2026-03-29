import { useState } from "react";
import roundImg from "../../../../../../assets/asif_round.png";
import webDevelopmentImg from "../../../../../../assets/web-development.jpeg";
import { Tab, Tabs, TabList, TabPanel } from "react-tabs";

const strengths = [
    {
        title: "Product-minded engineering",
        description: "I approach frontend and backend work with usability, maintainability, and business outcomes in mind.",
    },
    {
        title: "Modern web stack",
        description: "My day-to-day toolkit includes Next.js, React, TypeScript, Tailwind CSS, Node.js, Express.js, and MongoDB.",
    },
    {
        title: "Reliable collaboration",
        description: "I enjoy turning requirements into clear deliverables, improving interfaces, and shipping work with attention to detail.",
    },
];

const About = () => {
    const [tabIndex, setTabIndex] = useState(0);

    return (
        <section id="about" className="px-4 py-10 sm:px-6 lg:px-8">
            <div className="mx-auto grid max-w-6xl gap-8 lg:grid-cols-[0.92fr_1.08fr]">
                <div className="rounded-[2rem] border border-white/10 bg-white/5 p-5 shadow-[0_20px_70px_rgba(2,8,20,0.28)]">
                    <img src={webDevelopmentImg.src} alt="Workspace and web development illustration" className="h-56 w-full rounded-[1.5rem] object-cover" />
                    <div className="mt-5 flex items-center gap-4 rounded-[1.5rem] border border-white/10 bg-slate-950/50 p-4">
                        <img src={roundImg.src} alt="N.M. Asif Sheikh" className="h-20 w-20 rounded-2xl object-cover" />
                        <div>
                            <p className="text-xs uppercase tracking-[0.28em] text-slate-400">About</p>
                            <h2 className="mt-1 font-text-lora text-2xl text-white">Building dependable digital experiences</h2>
                            <p className="mt-2 text-sm leading-7 text-slate-300">Focused on clean interfaces, scalable architecture, and delivery that feels polished in production.</p>
                        </div>
                    </div>
                </div>
                <div className="rounded-[2rem] border border-white/10 bg-white/5 p-6 shadow-[0_20px_70px_rgba(2,8,20,0.28)]">
                    <p className="text-sm font-semibold uppercase tracking-[0.32em] text-sky-200/70">About Me</p>
                    <h2 className="mt-4 max-w-2xl font-text-lora text-3xl text-white sm:text-4xl">I help teams turn ideas into polished, maintainable web products.</h2>
                    <div className="mt-6 space-y-4 text-base leading-8 text-slate-300">
                        <p>I&apos;m N.M. Asif Sheikh, a fullstack engineer with hands-on experience building production-ready applications, currently contributing as a Fullstack Engineer Intern at NxtVis.</p>
                        <p>My work spans responsive frontend experiences, scalable backend services, and the practical decisions that help a product feel reliable once it leaves the prototype stage.</p>
                    </div>
                    <div className="mt-8 grid gap-4 sm:grid-cols-3">
                        {strengths.map((strength) => (
                            <div key={strength.title} className="rounded-3xl border border-white/10 bg-slate-950/45 p-5">
                                <h3 className="text-lg font-semibold text-white">{strength.title}</h3>
                                <p className="mt-3 text-sm leading-7 text-slate-300">{strength.description}</p>
                            </div>
                        ))}
                    </div>
                    <div className="mt-8">
                        <Tabs selectedIndex={tabIndex} onSelect={(index) => setTabIndex(index)} selectedTabClassName="!border-sky-300/60 !bg-sky-300/10 !text-white">
                            <TabList className="flex flex-wrap gap-3">
                                <Tab className="rounded-full border border-white/10 px-4 py-2 text-sm font-semibold text-slate-300">Capabilities</Tab>
                                <Tab className="rounded-full border border-white/10 px-4 py-2 text-sm font-semibold text-slate-300">Interests</Tab>
                                <Tab className="rounded-full border border-white/10 px-4 py-2 text-sm font-semibold text-slate-300">Collaboration</Tab>
                            </TabList>
                            <div className="mt-6 rounded-[1.5rem] border border-white/10 bg-slate-950/40 p-6">
                                <TabPanel>
                                    <ul className="grid gap-3 text-sm leading-7 text-slate-300 sm:grid-cols-2">
                                        <li>React, Next.js, TypeScript, and Tailwind CSS</li>
                                        <li>Node.js, Express.js, and MongoDB</li>
                                        <li>Responsive UI systems and polished interactions</li>
                                        <li>REST API integration and fullstack product delivery</li>
                                    </ul>
                                </TabPanel>
                                <TabPanel>
                                    <p className="text-sm leading-7 text-slate-300">I enjoy exploring modern product design, improving developer workflow, and learning the technologies that make web applications faster, clearer, and easier to maintain.</p>
                                </TabPanel>
                                <TabPanel>
                                    <p className="text-sm leading-7 text-slate-300">I work best in teams that value clarity, iteration, and thoughtful execution. I&apos;m open to opportunities where I can contribute both technical depth and product sensibility.</p>
                                </TabPanel>
                            </div>
                        </Tabs>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default About;

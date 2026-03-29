const skillGroups = [
    {
        title: "Frontend",
        items: ["React", "Next.js", "TypeScript", "Tailwind CSS", "Framer Motion", "Responsive UI"],
    },
    {
        title: "Backend",
        items: ["Node.js", "Express.js", "MongoDB", "REST APIs", "Authentication flows", "Data integration"],
    },
    {
        title: "Workflow",
        items: ["Git & GitHub", "Component architecture", "Performance-minded builds", "Product collaboration", "UI refinement", "Deployment readiness"],
    },
];

const Skills = () => {
    return (
        <section id="skills" className="px-4 py-10 sm:px-6 lg:px-8">
            <div className="mx-auto max-w-6xl">
                <div className="flex flex-col gap-5 lg:flex-row lg:items-end lg:justify-between">
                    <div>
                        <p className="text-sm font-semibold uppercase tracking-[0.32em] text-sky-200/70">Skills</p>
                        <h2 className="mt-4 font-text-lora text-3xl text-white sm:text-4xl">The stack I use to build polished, production-ready applications.</h2>
                    </div>
                    <p className="max-w-2xl text-base leading-8 text-slate-300">
                        I focus on the combination of frontend quality, backend reliability, and development habits that make products easier to scale and maintain.
                    </p>
                </div>
                <div className="mt-8 grid gap-5 lg:grid-cols-3">
                    {skillGroups.map((group) => (
                        <div key={group.title} className="rounded-[1.75rem] border border-white/10 bg-white/5 p-6 shadow-[0_20px_60px_rgba(2,8,20,0.22)]">
                            <h3 className="text-xl font-semibold text-white">{group.title}</h3>
                            <ul className="mt-5 flex flex-wrap gap-3">
                                {group.items.map((item) => (
                                    <li key={item} className="rounded-full border border-sky-300/20 bg-sky-300/10 px-4 py-2 text-sm font-medium text-sky-50">
                                        {item}
                                    </li>
                                ))}
                            </ul>
                        </div>
                    ))}
                </div>
                <div className="mt-6 grid gap-5 lg:grid-cols-3">
                    <div className="rounded-[1.75rem] border border-white/10 bg-slate-950/45 p-6 lg:col-span-2">
                        <h3 className="text-xl font-semibold text-white">How I contribute</h3>
                        <div className="mt-5 grid gap-4 sm:grid-cols-2">
                            <div className="rounded-3xl border border-white/10 bg-white/5 p-5 text-sm leading-7 text-slate-300">
                                Transforming product ideas into intuitive user interfaces with strong visual hierarchy and responsive behavior.
                            </div>
                            <div className="rounded-3xl border border-white/10 bg-white/5 p-5 text-sm leading-7 text-slate-300">
                                Connecting frontend experiences to dependable APIs, business logic, and data flows for complete feature delivery.
                            </div>
                        </div>
                    </div>
                    <div className="rounded-[1.75rem] border border-white/10 bg-white/5 p-6">
                        <p className="text-sm font-semibold uppercase tracking-[0.28em] text-slate-400">Approach</p>
                        <p className="mt-4 text-sm leading-8 text-slate-300">
                            Clean implementation, clear communication, and practical decisions that help a product feel ready for real users.
                        </p>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default Skills;
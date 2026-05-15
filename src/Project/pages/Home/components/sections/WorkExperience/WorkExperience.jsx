const experience = [
    {
        company: "Sparktech Agency",
        group: "Betopia Group",
        role: "Frontend Developer / Mobile App Developer",
        duration: "June 2025 - Present",
        location: "Bangladesh",
        summary:
            "Building production-facing web and mobile experiences across education, booking, commerce, and AI-assisted products with a focus on responsive UI, dashboard workflows, localization, and payment-driven user journeys.",
        work: [
            "Delivered frontend features for Ensinor, including course, event, book, subscription, Stripe payment, Zoom event, translation, and multi-role dashboard workflows.",
            "Built Dayf Booking interfaces for apartment discovery, location search, favorites, host onboarding, apartment management, reviews, admin workflows, language translation, and currency conversion.",
            "Contributed to the MYNE mobile app for luxury bag tracking, collection management, wishlists, profile flows, password updates, and AI-assisted bag entry.",
        ],
        stack: ["Next.js", "React", "TypeScript", "Tailwind CSS", "Stripe", "Zoom", "Mobile UI"],
    },
    {
        company: "NextVision",
        role: "Fullstack Engineer Intern",
        duration: "October 10, 2024 - April 2025",
        location: "Remote, Bangladesh",
        summary:
            "Worked across full-stack product features, admin tools, and automation-heavy dashboards while strengthening delivery habits around UI implementation, backend integration, and data flows.",
        work: [
            "Built an AI SaaS dashboard with dynamic widgets, theming, file upload support, and a RAG chatbot workflow.",
            "Contributed to a school management platform with role-based dashboards, payment integration, attendance flows, and operational screens.",
            "Helped ship health AI, specialist booking, prescription generation, doctor communication, and CV automation features with PDF and XLSX export support.",
        ],
        stack: ["React", "Node.js", "Express.js", "MongoDB", "REST APIs", "Dashboard UI"],
    },
];

const capabilityCards = [
    {
        title: "Product Frontend",
        text: "Translating real product requirements into polished, responsive screens for dashboards, booking flows, commerce pages, and mobile app journeys.",
    },
    {
        title: "Workflow Systems",
        text: "Working with role-based access, admin panels, payment states, localization, live sessions, user-generated content, and data-heavy interfaces.",
    },
    {
        title: "Cross-Functional Delivery",
        text: "Collaborating across product ideas, UI details, API behavior, business rules, testing feedback, and deployment-ready implementation.",
    },
];

const WorkExperience = () => {
    return (
        <section id="work-experience" className="px-4 py-12 sm:px-6 lg:px-8">
            <div className="mx-auto max-w-6xl">
                <div className="flex flex-col gap-5 lg:flex-row lg:items-end lg:justify-between">
                    <div>
                        <p className="text-sm font-semibold uppercase tracking-[0.32em] text-sky-200/70">Experience</p>
                        <h2 className="mt-4 font-text-lora text-3xl text-white sm:text-4xl">Professional experience shaped around product delivery.</h2>
                    </div>
                    <p className="max-w-2xl text-base leading-8 text-slate-300">
                        A clearer look at where I have worked, what I owned, and the kinds of products I have helped build across frontend, mobile, and full-stack responsibilities.
                    </p>
                </div>

                <div className="mt-10 grid gap-6 lg:grid-cols-[0.72fr_1.28fr]">
                    <aside className="rounded-[1.75rem] border border-white/10 bg-white/[0.06] p-6 shadow-[0_20px_70px_rgba(2,8,20,0.24)]">
                        <p className="text-sm font-semibold uppercase tracking-[0.28em] text-slate-400">Core Strengths</p>
                        <div className="mt-6 grid gap-4">
                            {capabilityCards.map((card) => (
                                <div key={card.title} className="border-l border-sky-300/30 pl-4">
                                    <h3 className="text-lg font-semibold text-white">{card.title}</h3>
                                    <p className="mt-2 text-sm leading-7 text-slate-300">{card.text}</p>
                                </div>
                            ))}
                        </div>
                    </aside>

                    <div className="relative">
                        <div className="absolute left-4 top-3 hidden h-[calc(100%-1.5rem)] w-px bg-white/10 sm:block" />
                        <div className="grid gap-6">
                            {experience.map((item) => (
                                <article key={item.company} className="relative rounded-[1.75rem] border border-white/10 bg-slate-950/45 p-6 shadow-[0_20px_70px_rgba(2,8,20,0.22)] sm:ml-10">
                                    <span className="absolute -left-[2.95rem] top-8 hidden h-4 w-4 rounded-full border border-sky-200/70 bg-sky-300 shadow-[0_0_24px_rgba(125,211,252,0.45)] sm:block" />
                                    <div className="flex flex-col gap-4 xl:flex-row xl:items-start xl:justify-between">
                                        <div>
                                            <p className="text-sm font-semibold uppercase tracking-[0.24em] text-sky-200/75">{item.duration}</p>
                                            <h3 className="mt-3 text-2xl font-semibold text-white">{item.company}</h3>
                                            <p className="mt-2 text-base font-medium text-slate-200">{item.role}</p>
                                        </div>
                                        <div className="flex flex-wrap gap-2">
                                            {item.group ? (
                                                <span className="rounded-full border border-white/10 bg-white/5 px-3 py-1 text-xs font-semibold uppercase tracking-[0.18em] text-slate-300">
                                                    {item.group}
                                                </span>
                                            ) : null}
                                            <span className="rounded-full border border-white/10 bg-white/5 px-3 py-1 text-xs font-semibold uppercase tracking-[0.18em] text-slate-300">
                                                {item.location}
                                            </span>
                                        </div>
                                    </div>
                                    <p className="mt-5 text-sm leading-7 text-slate-300">{item.summary}</p>
                                    <ul className="mt-6 grid gap-3">
                                        {item.work.map((workItem) => (
                                            <li key={workItem} className="rounded-[1rem] border border-white/10 bg-white/[0.04] px-4 py-3 text-sm leading-7 text-slate-300">
                                                {workItem}
                                            </li>
                                        ))}
                                    </ul>
                                    <div className="mt-6 flex flex-wrap gap-2">
                                        {item.stack.map((technology) => (
                                            <span key={technology} className="rounded-full border border-sky-300/20 bg-sky-300/10 px-3 py-1 text-xs font-medium text-sky-50">
                                                {technology}
                                            </span>
                                        ))}
                                    </div>
                                </article>
                            ))}
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default WorkExperience;

import projectPhoto1 from "../../../../../../assets/Intern-project-1.png";
import projectPhoto2 from "../../../../../../assets/Intern-project-2a.jpg";
import projectPhoto3 from "../../../../../../assets/Intern-project-2b.png";

const projects = [
    {
        title: "Ensinor",
        role: "Frontend Developer",
        stack: "Next.js, React, TypeScript, Tailwind CSS, Stripe, Zoom, and supporting frontend libraries",
        description:
            "Worked on both the website and dashboard for a learning platform built around course, event, and book sales. The product includes Stripe payments, subscriptions, student-instructor workflows, company training flows for employees as trainees, business instructors, live events and courses with Zoom, plus a JSON-based translation system for both the website and dashboard.",
        highlights: "Roles: Super Admin, Student, Instructor, Company Admin, Trainee, Business Instructor. Sub-role: Co-Instructor.",
    },
    {
        title: "Dayf Booking",
        role: "Frontend Developer",
        stack: "Next.js, React, Tailwind CSS, and supporting frontend libraries",
        description:
            "Built frontend features for an apartment booking platform where users can book properties, review listings, search by location, save favorites, become hosts, and create or manage apartments. The platform also includes an admin panel for centralized management.",
        highlights: "Included Google-powered language translation and multi-currency support for displaying apartment pricing in current rates.",
    },
    {
        title: "MYNE",
        role: "Mobile App Developer",
        stack: "Mobile app development with product-focused frontend implementation",
        description:
            "Worked on a luxury fashion bag app where users can track current bag prices, build personal collections, manage wishlists, read blogs, and update their profile and password settings. The app also includes AI-assisted bag entry and bag value tracking for both user-added and admin-added items.",
        highlights: "Focused on luxury bag discovery, collection management, wishlist flows, and AI-assisted user actions.",
    },
];

const previousResponsibilities = [
    "Built an AI SaaS dashboard featuring dynamic widgets, theming, and a RAG chatbot workflow with file upload support.",
    "Contributed to a school management platform with role-based dashboards, payment integration, and attendance flows.",
    "Worked on a health AI product for specialist booking, prescription generation, and doctor communication features.",
    "Helped deliver a CV automation system for filtering, previewing, downloading, and exporting documents in PDF and XLSX.",
];

const WorkExperience = () => {
    return (
        <section id="work-experience" className="px-4 py-10 sm:px-6 lg:px-8">
            <div className="mx-auto max-w-6xl rounded-4xl border border-white/10 bg-white/5 p-6 shadow-[0_20px_70px_rgba(2,8,20,0.28)] lg:p-8">
                <div className="flex flex-col gap-5 lg:flex-row lg:items-end lg:justify-between">
                    <div>
                        <p className="text-sm font-semibold uppercase tracking-[0.32em] text-sky-200/70">Experience</p>
                        <h2 className="mt-4 font-text-lora text-3xl text-white sm:text-4xl">Experience focused on building polished, product-ready applications.</h2>
                    </div>
                    <p className="max-w-2xl text-base leading-8 text-slate-300">
                        I currently work at Sparktech Agency within the Betopia Group, contributing across web and mobile products with a strong frontend focus.
                    </p>
                </div>
                <div className="mt-8 grid gap-6 lg:grid-cols-[1.1fr_0.9fr]">
                    <div className="rounded-[1.75rem] border border-white/10 bg-slate-950/45 p-6">
                        <div className="grid gap-3 sm:grid-cols-2">
                            <div>
                                <p className="text-sm uppercase tracking-[0.24em] text-slate-400">Company</p>
                                <p className="mt-2 text-xl font-semibold text-white">Sparktech Agency</p>
                            </div>
                            <div>
                                <p className="text-sm uppercase tracking-[0.24em] text-slate-400">Role</p>
                                <p className="mt-2 text-xl font-semibold text-white">Frontend Developer / Mobile App Developer</p>
                            </div>
                            <div>
                                <p className="text-sm uppercase tracking-[0.24em] text-slate-400">Duration</p>
                                <p className="mt-2 text-base text-slate-200">June, 2025 - Present</p>
                            </div>
                            <div>
                                <p className="text-sm uppercase tracking-[0.24em] text-slate-400">Location</p>
                                <p className="mt-2 text-base text-slate-200">Betopia Group</p>
                            </div>
                        </div>
                        <ul className="mt-6 space-y-4">
                            {projects.map((project) => (
                                <li key={project.title} className="rounded-3xl border border-white/10 bg-white/5 p-5">
                                    <div className="flex flex-wrap items-start justify-between gap-3">
                                        <div>
                                            <h3 className="text-lg font-semibold text-white">{project.title}</h3>
                                            <p className="mt-1 text-sm font-medium text-sky-200">{project.role}</p>
                                        </div>
                                    </div>
                                    <p className="mt-4 text-sm leading-7 text-slate-300">{project.description}</p>
                                    <p className="mt-4 text-sm leading-7 text-slate-300">
                                        <span className="font-semibold text-white">Stack:</span> {project.stack}
                                    </p>
                                    <p className="mt-3 text-sm leading-7 text-slate-300">{project.highlights}</p>
                                </li>
                            ))}
                        </ul>
                    </div>
                    <div className="rounded-[1.75rem] border border-white/10 bg-gradient-to-br from-sky-400/10 via-slate-950/60 to-emerald-400/10 p-6">
                        <p className="text-sm uppercase tracking-[0.24em] text-slate-400">Focus Areas</p>
                        <div className="mt-5 grid gap-4">
                            <div className="rounded-[1.5rem] border border-white/10 bg-black/20 p-5">
                                <h3 className="text-lg font-semibold text-white">Frontend Product Delivery</h3>
                                <p className="mt-3 text-sm leading-7 text-slate-300">
                                    Building responsive interfaces, dashboards, booking flows, multilingual experiences, and commerce-oriented user journeys.
                                </p>
                            </div>
                            <div className="rounded-[1.5rem] border border-white/10 bg-black/20 p-5">
                                <h3 className="text-lg font-semibold text-white">Platform Features</h3>
                                <p className="mt-3 text-sm leading-7 text-slate-300">
                                    Payments, subscriptions, role-based systems, admin panels, localization, multi-currency support, and live event workflows.
                                </p>
                            </div>
                            <div className="rounded-[1.5rem] border border-white/10 bg-black/20 p-5">
                                <h3 className="text-lg font-semibold text-white">Cross-Product Experience</h3>
                                <p className="mt-3 text-sm leading-7 text-slate-300">
                                    Contributing across education, booking, and luxury e-commerce products for both web and mobile application experiences.
                                </p>
                            </div>
                        </div>
                    </div>
                </div>
                <div className="mt-6 grid gap-6 lg:grid-cols-[1.1fr_0.9fr]">
                    <div className="rounded-[1.75rem] border border-white/10 bg-slate-950/45 p-6">
                        <div className="flex items-center justify-between gap-4">
                            <div>
                                <p className="text-sm uppercase tracking-[0.24em] text-slate-400">Previous Experience</p>
                                <h3 className="mt-2 text-2xl font-semibold text-white">NextVision</h3>
                            </div>
                            <span className="rounded-full border border-white/10 bg-white/5 px-4 py-2 text-xs font-semibold uppercase tracking-[0.22em] text-slate-300">
                                Internship
                            </span>
                        </div>
                        <div className="mt-6 grid gap-3 sm:grid-cols-2">
                            <div>
                                <p className="text-sm uppercase tracking-[0.24em] text-slate-400">Role</p>
                                <p className="mt-2 text-base text-slate-200">Fullstack Engineer Intern</p>
                            </div>
                            <div>
                                <p className="text-sm uppercase tracking-[0.24em] text-slate-400">Duration</p>
                                <p className="mt-2 text-base text-slate-200">October 10, 2024 - April, 2025</p>
                            </div>
                            <div>
                                <p className="text-sm uppercase tracking-[0.24em] text-slate-400">Location</p>
                                <p className="mt-2 text-base text-slate-200">Remote, Bangladesh</p>
                            </div>
                        </div>
                        <ul className="mt-6 space-y-4">
                            {previousResponsibilities.map((item) => (
                                <li key={item} className="rounded-3xl border border-white/10 bg-white/5 p-4 text-sm leading-7 text-slate-300">
                                    {item}
                                </li>
                            ))}
                        </ul>
                    </div>
                    <div className="grid grid-cols-1 gap-4 sm:grid-cols-2 lg:grid-cols-1">
                        <img src={projectPhoto1.src} alt="Intern project 1" className="h-48 w-full rounded-[1.5rem] object-cover" />
                        <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-2">
                            <img src={projectPhoto2.src} alt="Intern project 2a" className="h-48 w-full rounded-[1.5rem] object-cover" />
                            <img src={projectPhoto3.src} alt="Intern project 2b" className="h-48 w-full rounded-[1.5rem] object-cover" />
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default WorkExperience;

import assignmentImg from "../../../../../../assets/assignment-genius.png";
import awesomeTouristImg from "../../../../../../assets/awesome-tourist-spots.png";
import bloodDonorImg from "../../../../../../assets/blood-donor-unity.png";
import dayfBookingImg from "../../../../../../assets/projects/dayf_booking.png";
import ensinorImg from "../../../../../../assets/projects/ensinor.png";
import myneCollectionsImg from "../../../../../../assets/projects/myne_collections.png";
import myneHomeImg from "../../../../../../assets/projects/myne_home.png";

const featuredProjects = [
    {
        title: "Ensinor",
        category: "Learning Platform",
        image: ensinorImg,
        description:
            "A full learning-commerce product with course sales, subscriptions, event booking, books, student and instructor workflows, company training, Zoom-powered live sessions, Stripe payments, and JSON-based translation across the website and dashboard.",
        technologies: ["Next.js", "React", "TypeScript", "Tailwind CSS", "Stripe", "Zoom"],
        highlights: ["Multi-role dashboard", "Course, event, and book commerce", "Translation-ready website and admin system"],
    },
    {
        title: "Dayf Booking",
        category: "Apartment Booking Platform",
        image: dayfBookingImg,
        description:
            "A booking experience where users can discover apartments, search by location, save favorites, review properties, become hosts, and manage listings through a connected admin workflow.",
        technologies: ["Next.js", "React", "Tailwind CSS", "Google Translate", "Currency API"],
        highlights: ["Host and guest flows", "Admin management panel", "Multi-language and multi-currency support"],
    },
    {
        title: "MYNE",
        category: "Luxury Bag Mobile App",
        image: myneHomeImg,
        secondaryImage: myneCollectionsImg,
        description:
            "A luxury fashion bag app for tracking bag values, managing personal collections and wishlists, reading brand-focused content, and using AI-assisted bag entry for richer collection management.",
        technologies: ["Mobile App", "Product UI", "AI-assisted flows", "Collection Tracking"],
        highlights: ["Collection and wishlist management", "AI-assisted bag entry", "Price and value tracking"],
    },
];

const personalProjects = [
    {
        title: "Blood Donor Unity",
        description: "A donor-request platform that helps people find blood donors and manage urgent donation requests.",
        technologies: ["React.js", "Node.js", "Express.js", "MongoDB"],
        image: bloodDonorImg,
        liveDemo: "https://blood-donator-unity.web.app/",
        sourceCode: "https://github.com/asif100a/Blood-Donor-Unity",
    },
    {
        title: "Assignment Genius",
        description: "A coursework platform for browsing, submitting, updating, and evaluating assignments in a collaborative flow.",
        technologies: ["React", "Tailwind CSS", "Firebase", "JavaScript"],
        image: assignmentImg,
        liveDemo: "https://assignment-11-9bd1a.web.app/",
        sourceCode: "https://github.com/asif100a/Assignment-genius",
    },
    {
        title: "Awesome Tourist Spots",
        description: "A travel discovery platform where authenticated users can add destinations and filter spots by country.",
        technologies: ["React", "Node.js", "Express", "MongoDB"],
        image: awesomeTouristImg,
        liveDemo: "https://assignment-10-49aa1.web.app/",
        sourceCode: "https://github.com/asif100a/Awesome-tourist-spots",
    },
];

const Projects = () => {
    return (
        <section id="projects" className="px-4 py-12 sm:px-6 lg:px-8">
            <div className="mx-auto max-w-6xl">
                <div className="flex flex-col gap-5 lg:flex-row lg:items-end lg:justify-between">
                    <div>
                        <p className="text-sm font-semibold uppercase tracking-[0.32em] text-sky-200/70">Featured Fullstack Projects</p>
                        <h2 className="mt-4 font-text-lora text-3xl text-white sm:text-4xl">Selected full-stack product work, organized by impact and role.</h2>
                    </div>
                    <p className="max-w-2xl text-base leading-8 text-slate-300">
                        A focused mix of professional product contributions and personal full-stack builds, showing how I handle dashboards, commerce flows, booking systems, mobile UX, and real user workflows.
                    </p>
                </div>

                <div className="mt-10 grid gap-6">
                    {featuredProjects.map((project, index) => (
                        <article
                            key={project.title}
                            className="grid overflow-hidden rounded-[1.75rem] border border-white/10 bg-white/6 shadow-[0_20px_70px_rgba(2,8,20,0.28)] lg:grid-cols-[1.08fr_0.92fr]"
                        >
                            <div className={`${index % 2 === 1 ? "lg:order-2" : ""} bg-slate-950/55 p-3`}>
                                <div className="relative h-72 overflow-hidden rounded-[1.25rem] border border-white/10 bg-slate-900 sm:h-96">
                                    <img src={project.image.src} alt={`${project.title} project preview`} className="h-full w-full object-fill object-top" />
                                    {project.secondaryImage ? (
                                        <img
                                            src={project.secondaryImage.src}
                                            alt={`${project.title} collection preview`}
                                            className="absolute bottom-4 right-4 hidden h-44 w-24 rounded-2xl border border-white/20 object-cover object-top shadow-[0_18px_50px_rgba(0,0,0,0.45)] sm:block"
                                        />
                                    ) : null}
                                </div>
                            </div>
                            <div className="flex flex-col justify-center p-6 sm:p-8">
                                <p className="text-xs font-semibold uppercase tracking-[0.28em] text-sky-200/75">{project.category}</p>
                                <h3 className="mt-3 text-2xl font-semibold text-white sm:text-3xl">{project.title}</h3>
                                <p className="mt-4 text-sm leading-7 text-slate-300">{project.description}</p>
                                <div className="mt-6 flex flex-wrap gap-2">
                                    {project.technologies.map((technology) => (
                                        <span key={technology} className="rounded-full border border-sky-300/20 bg-sky-300/10 px-3 py-1 text-xs font-medium text-sky-50">
                                            {technology}
                                        </span>
                                    ))}
                                </div>
                                <ul className="mt-6 grid gap-3 sm:grid-cols-3 lg:grid-cols-1 xl:grid-cols-3">
                                    {project.highlights.map((highlight) => (
                                        <li key={highlight} className="rounded-2xl border border-white/10 bg-slate-950/45 px-4 py-3 text-sm leading-6 text-slate-300">
                                            {highlight}
                                        </li>
                                    ))}
                                </ul>
                            </div>
                        </article>
                    ))}
                </div>

                <div className="mt-10">
                    <div className="flex flex-col gap-3 sm:flex-row sm:items-end sm:justify-between">
                        <div>
                            <p className="text-sm font-semibold uppercase tracking-[0.28em] text-slate-400">Personal Builds</p>
                            <h3 className="mt-2 text-2xl font-semibold text-white">Full-stack projects with live demos and source code.</h3>
                        </div>
                    </div>
                    <div className="mt-6 grid gap-5 lg:grid-cols-3">
                        {personalProjects.map((project) => (
                            <article key={project.title} className="flex h-full flex-col overflow-hidden rounded-[1.5rem] border border-white/10 bg-white/5">
                                <img src={project.image.src} alt={`${project.title} preview`} className="h-48 w-full object-cover object-top" />
                                <div className="flex flex-1 flex-col p-5">
                                    <h4 className="text-xl font-semibold text-white">{project.title}</h4>
                                    <p className="mt-3 flex-1 text-sm leading-7 text-slate-300">{project.description}</p>
                                    <div className="mt-5 flex flex-wrap gap-2">
                                        {project.technologies.map((technology) => (
                                            <span key={technology} className="rounded-full border border-white/10 bg-slate-950/45 px-3 py-1 text-xs font-medium text-slate-200">
                                                {technology}
                                            </span>
                                        ))}
                                    </div>
                                    <div className="mt-6 flex flex-wrap gap-3">
                                        <a href={project.liveDemo} target="_blank" rel="noopener noreferrer" className="rounded-full bg-[linear-gradient(135deg,#9cc2ff_0%,#6ddad3_100%)] px-4 py-2 text-sm font-bold text-slate-950 transition hover:scale-[1.02]">
                                            Live Demo
                                        </a>
                                        <a href={project.sourceCode} target="_blank" rel="noopener noreferrer" className="rounded-full border border-white/10 px-4 py-2 text-sm font-semibold text-white transition hover:border-sky-300/50">
                                            Source Code
                                        </a>
                                    </div>
                                </div>
                            </article>
                        ))}
                    </div>
                </div>
            </div>
        </section>
    );
};

export default Projects;

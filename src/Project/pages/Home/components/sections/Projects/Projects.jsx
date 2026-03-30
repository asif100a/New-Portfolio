import bloodDonorImg from "../../../../../../assets/blood-donor-unity.png";
import assignmentImg from "../../../../../../assets/assignment-genius.png";
import awesomeTouristImg from "../../../../../../assets/awesome-tourist-spots.png";

const projects = [
    {
        title: "Blood Donor Unity",
        description: "A platform designed to connect blood donors with people in urgent need, making blood requests faster and easier to manage.",
        technologies: ["React.js", "Node.js", "Express.js", "MongoDB"],
        features: [
            "Users can join the platform as donors by registering.",
            "Users can search for donors from the donor search page.",
            "Logged-in users can create, update, and manage donation requests.",
        ],
        showImage: bloodDonorImg,
        liveDemo: "https://blood-donator-unity.web.app/",
        sourceCode: "https://github.com/asif100a/Blood-Donor-Unity",
    },
    {
        title: "Assignment Genius",
        description: "An assignment management platform where users can browse, submit, and evaluate coursework through a collaborative workflow.",
        technologies: ["React", "Tailwind CSS", "Firebase", "JavaScript"],
        features: [
            "Users can browse assignments without signing in.",
            "Authenticated users can take and update assignments.",
            "Users can mark peers' submitted assignments while protecting against self-marking.",
        ],
        showImage: assignmentImg,
        liveDemo: "https://assignment-11-9bd1a.web.app/",
        sourceCode: "https://github.com/asif100a/Assignment-genius",
    },
    {
        title: "Awesome Tourist Spots",
        description: "A travel-focused platform that helps users discover, add, and explore tourist destinations in an approachable way.",
        technologies: ["React", "Node.js", "Express", "MongoDB"],
        features: [
            "Provides easy reference information about tourist spots.",
            "Users can add new spots after signing in or registering.",
            "Tourist spots can be filtered by country for easier discovery.",
        ],
        showImage: awesomeTouristImg,
        liveDemo: "https://assignment-10-49aa1.web.app/",
        sourceCode: "https://github.com/asif100a/Awesome-tourist-spots",
    },
];

const Projects = () => {
    return (
        <section id="projects" className="px-4 py-10 sm:px-6 lg:px-8">
            <div className="mx-auto max-w-6xl">
                <div className="flex flex-col gap-5 lg:flex-row lg:items-end lg:justify-between">
                    <div>
                        <p className="text-sm font-semibold uppercase tracking-[0.32em] text-sky-200/70">Projects</p>
                        <h2 className="mt-4 font-text-lora text-3xl text-white sm:text-4xl">Selected projects that reflect how I design, build, and ship.</h2>
                    </div>
                    <p className="max-w-2xl text-base leading-8 text-slate-300">
                        These projects highlight my work across product design, frontend engineering, backend integration, and user-focused problem solving.
                    </p>
                </div>
                <div className="mt-8 grid gap-6 lg:grid-cols-3">
                    {projects.map((project) => (
                        <article key={project.title} className="overflow-hidden rounded-[1.9rem] border border-white/10 bg-white/5 shadow-[0_20px_70px_rgba(2,8,20,0.28)] flex flex-col justify-between h-fit">
                            <div>
                                <img src={project.showImage.src} alt={project.title} className="h-52 w-full object-cover" />
                                <div className="p-6">
                                    <p className="text-xs font-semibold uppercase tracking-[0.28em] text-slate-400">Featured Project</p>
                                    <h3 className="mt-3 text-2xl font-semibold text-white">{project.title}</h3>
                                    <p className="mt-3 text-sm leading-7 text-slate-300">{project.description}</p>
                                    <div className="mt-5 flex flex-wrap gap-2">
                                        {project.technologies.map((technology) => (
                                            <span key={technology} className="rounded-full border border-sky-300/20 bg-sky-300/10 px-3 py-1 text-xs font-medium text-sky-50">
                                                {technology}
                                            </span>
                                        ))}
                                    </div>
                                    <ul className="mt-5 space-y-3 text-sm leading-7 text-slate-300">
                                        {project.features.map((feature) => (
                                            <li key={feature} className="rounded-2xl border border-white/10 bg-slate-950/45 px-4 py-3">
                                                {feature}
                                            </li>
                                        ))}
                                    </ul>
                                </div>
                            </div>
                            <div className="p-6 pt-0 flex gap-3">
                                <a href={project.liveDemo} target="_blank" rel="noopener noreferrer" className="rounded-full bg-[linear-gradient(135deg,#9cc2ff_0%,#6ddad3_100%)] px-4 py-2 text-sm font-bold text-slate-950 transition hover:scale-[1.02]">
                                    Live Demo
                                </a>
                                <a href={project.sourceCode} target="_blank" rel="noopener noreferrer" className="rounded-full border border-white/10 px-4 py-2 text-sm font-semibold text-white transition hover:border-sky-300/50">
                                    Source Code
                                </a>
                            </div>
                        </article>
                    ))}
                </div>
            </div>
        </section>
    );
};

export default Projects;
import projectPhoto1 from "../../../../../../assets/Intern-project-1.png";
import projectPhoto2 from "../../../../../../assets/Intern-project-2a.jpg";
import projectPhoto3 from "../../../../../../assets/Intern-project-2b.png";

const responsibilities = [
    "Built an AI SaaS dashboard featuring dynamic widgets, theming, and a RAG chatbot workflow with file upload support.",
    "Contributed to a school management platform with role-based dashboards, payment integration, and attendance flows.",
    "Worked on a health AI product for specialist booking, prescription generation, and doctor communication features.",
    "Helped deliver a CV automation system for filtering, previewing, downloading, and exporting documents in PDF and XLSX.",
];

const WorkExperienceProfessional = () => {
    return (
        <section id="work-experience" className="px-4 py-10 sm:px-6 lg:px-8">
            <div className="mx-auto max-w-6xl rounded-[2rem] border border-white/10 bg-white/5 p-6 shadow-[0_20px_70px_rgba(2,8,20,0.28)] lg:p-8">
                <div className="flex flex-col gap-5 lg:flex-row lg:items-end lg:justify-between">
                    <div>
                        <p className="text-sm font-semibold uppercase tracking-[0.32em] text-sky-200/70">Experience</p>
                        <h2 className="mt-4 font-text-lora text-3xl text-white sm:text-4xl">Professional experience focused on shipping fullstack applications.</h2>
                    </div>
                    <p className="max-w-2xl text-base leading-8 text-slate-300">
                        My current role has given me practical exposure to product development across multiple domains, from AI workflows to operational dashboards.
                    </p>
                </div>
                <div className="mt-8 grid gap-6 lg:grid-cols-[1.1fr_0.9fr]">
                    <div className="rounded-[1.75rem] border border-white/10 bg-slate-950/45 p-6">
                        <div className="grid gap-3 sm:grid-cols-2">
                            <div>
                                <p className="text-sm uppercase tracking-[0.24em] text-slate-400">Company</p>
                                <p className="mt-2 text-xl font-semibold text-white">NextVision</p>
                            </div>
                            <div>
                                <p className="text-sm uppercase tracking-[0.24em] text-slate-400">Role</p>
                                <p className="mt-2 text-xl font-semibold text-white">Fullstack Engineer Intern</p>
                            </div>
                            <div>
                                <p className="text-sm uppercase tracking-[0.24em] text-slate-400">Duration</p>
                                <p className="mt-2 text-base text-slate-200">October 10, 2024 - Present</p>
                            </div>
                            <div>
                                <p className="text-sm uppercase tracking-[0.24em] text-slate-400">Location</p>
                                <p className="mt-2 text-base text-slate-200">Remote, Bangladesh</p>
                            </div>
                        </div>
                        <ul className="mt-6 space-y-4">
                            {responsibilities.map((item) => (
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

export default WorkExperienceProfessional;

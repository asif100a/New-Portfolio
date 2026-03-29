import webLearner from "../../../../../../assets/web-developer.png";

const educationData = [
    {
        institution: "Programming Hero",
        degree: "Web Development",
        startYear: "December 31, 2023",
        endYear: "July 22, 2024",
        description:
            "Completed an intensive web development program focused on modern frontend and fullstack technologies, with hands-on projects covering React, Tailwind CSS, Node.js, Express.js, and MongoDB.",
    },
];

const Education = () => {
    return (
        <section id="education" className="px-4 py-10 sm:px-6 lg:px-8">
            <div className="mx-auto max-w-6xl rounded-[2rem] border border-white/10 bg-white/5 p-6 shadow-[0_20px_70px_rgba(2,8,20,0.28)] lg:p-8">
                <div className="grid gap-8 lg:grid-cols-[0.76fr_1.24fr] lg:items-center">
                    <div className="space-y-4">
                        <p className="text-sm font-semibold uppercase tracking-[0.32em] text-sky-200/70">Education</p>
                        <h2 className="font-text-lora text-3xl text-white sm:text-4xl">Training grounded in modern web development and applied project work.</h2>
                        <p className="max-w-xl text-base leading-8 text-slate-300">
                            My education focused on practical product building, from frontend fundamentals to fullstack application development and collaborative project delivery.
                        </p>
                        <img src={webLearner.src} alt="Web development learning illustration" className="mt-6 h-60 w-full rounded-[1.5rem] object-cover" />
                    </div>
                    <div className="space-y-5">
                        {educationData.map((edu) => (
                            <div key={edu.institution} className="rounded-[1.75rem] border border-white/10 bg-slate-950/45 p-6">
                                <div className="flex flex-col gap-3 sm:flex-row sm:items-start sm:justify-between">
                                    <div>
                                        <p className="text-sm uppercase tracking-[0.26em] text-slate-400">Program</p>
                                        <h3 className="mt-2 text-2xl font-semibold text-white">{edu.degree}</h3>
                                        <p className="mt-1 text-lg text-slate-200">{edu.institution}</p>
                                    </div>
                                    <p className="rounded-full border border-white/10 px-4 py-2 text-sm font-medium text-slate-300">{edu.startYear} - {edu.endYear}</p>
                                </div>
                                <p className="mt-5 text-sm leading-8 text-slate-300">{edu.description}</p>
                            </div>
                        ))}
                    </div>
                </div>
            </div>
        </section>
    );
};

export default Education;
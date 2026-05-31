import { MotionCard, StaggerGroup } from "../../animations/Motion";

const architectureGroups = [
    {
        title: "API Development",
        summary: "Designing backend endpoints that keep product features predictable, secure, and easy to connect from the frontend.",
        items: ["REST API Development", "Express.js Middleware", "CRUD Operations", "API Validation", "Secure Route Handling", "JWT Authentication"],
    },
    {
        title: "Database Management",
        summary: "Structuring application data for real workflows, clear relationships, and queries that stay maintainable as features grow.",
        items: ["MongoDB Schema Design", "Mongoose Relationships", "Data Modeling", "Aggregation Pipelines", "Query Optimization"],
    },
    {
        title: "Authentication & Security",
        summary: "Building access flows around user identity, protected resources, and role-aware product experiences.",
        items: ["Firebase Authentication", "JWT Tokens", "HTTP-only Cookies", "Role-Based Authorization", "Protected Routes"],
    },
    {
        title: "Payments & Integrations",
        summary: "Connecting products with the external services needed for payments, uploads, automation, and user communication.",
        items: ["Stripe Integration", "SSLCommerz Integration", "File Upload Systems", "AI API Integrations", "Email Services"],
    },
];

const BackendArchitecture = () => {
    return (
        <section id="backend-architecture" className="px-4 py-12 sm:px-6 lg:px-8">
            <div className="mx-auto max-w-6xl">
                <div className="flex flex-col gap-5 lg:flex-row lg:items-end lg:justify-between">
                    <div>
                        <p className="text-sm font-semibold uppercase tracking-[0.32em] text-sky-200/70">Backend & Architecture</p>
                        <h2 className="mt-4 font-text-lora text-3xl text-white sm:text-4xl">Backend & system architecture for full-stack products.</h2>
                    </div>
                    <p className="max-w-2xl text-base leading-8 text-slate-300">
                        A focused view of the server-side skills I use to build APIs, model data, secure product flows, and connect real-world services.
                    </p>
                </div>

                <StaggerGroup className="mt-10 grid gap-5 lg:grid-cols-2">
                    {architectureGroups.map((group) => (
                        <MotionCard key={group.title} as="article" className="rounded-[1.75rem] border border-white/10 bg-slate-950/45 p-6 shadow-[0_20px_70px_rgba(2,8,20,0.24)]">
                            <div className="flex flex-col gap-4 sm:flex-row sm:items-start sm:justify-between">
                                <div>
                                    <h3 className="text-2xl font-semibold text-white">{group.title}</h3>
                                    <p className="mt-3 text-sm leading-7 text-slate-300">{group.summary}</p>
                                </div>
                                <span className="w-fit rounded-full border border-sky-300/20 bg-sky-300/10 px-3 py-1 text-xs font-semibold uppercase tracking-[0.18em] text-sky-50">
                                    {group.items.length} skills
                                </span>
                            </div>

                            <ul className="mt-6 grid gap-3 sm:grid-cols-2">
                                {group.items.map((item) => (
                                    <li key={item} className="rounded-2xl border border-white/10 bg-white/[0.05] px-4 py-3 text-sm font-medium leading-6 text-slate-200">
                                        {item}
                                    </li>
                                ))}
                            </ul>
                        </MotionCard>
                    ))}
                </StaggerGroup>
            </div>
        </section>
    );
};

export default BackendArchitecture;

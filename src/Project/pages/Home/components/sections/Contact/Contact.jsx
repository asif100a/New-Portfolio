import { useRef } from "react";
import toast, { Toaster } from "react-hot-toast";
import emailjs from "@emailjs/browser";
import ContactForm from "./ContactForm";

const contacts = [
    {
        title: "Email",
        description: "For project discussions, collaboration, and opportunities.",
        content: "nmasifsheikh2003@gmail.com",
        href: "mailto:nmasifsheikh2003@gmail.com",
    },
    {
        title: "LinkedIn",
        description: "Career profile and recent work updates.",
        content: "linkedin.com/in/nm-asif-sheikh",
        href: "https://www.linkedin.com/in/nm-asif-sheikh/",
    },
    {
        title: "GitHub",
        description: "Code samples, repositories, and side projects.",
        content: "github.com/asif100a",
        href: "https://github.com/asif100a",
    },
    {
        title: "WhatsApp",
        description: "Quick contact for direct communication.",
        content: "+88 01608-898811",
        href: "https://wa.link/l3yb8x",
    },
];

const Contact = () => {
    const form = useRef();

    const sendEmail = (e) => {
        e.preventDefault();

        emailjs
            .sendForm("service_gsyvmua", "template_3shoy0h", form.current, {
                publicKey: "M8ZdPyX2WzkQORfB8",
            })
            .then(
                () => {
                    toast.success("Message has sent successfully");
                },
                (error) => {
                    console.error("FAILED...", error.text);
                    toast.error("Failed to sent message");
                },
            );
    };

    return (
        <section id="contact" className="px-4 py-10 pb-16 sm:px-6 lg:px-8">
            <div className="mx-auto max-w-6xl rounded-[2rem] border border-white/10 bg-white/5 p-6 shadow-[0_20px_70px_rgba(2,8,20,0.28)] lg:p-8">
                <div className="grid gap-8 lg:grid-cols-[0.9fr_1.1fr]">
                    <div>
                        <p className="text-sm font-semibold uppercase tracking-[0.32em] text-sky-200/70">Contact</p>
                        <h2 className="mt-4 font-text-lora text-3xl text-white sm:text-4xl">Let&apos;s build something thoughtful and high quality.</h2>
                        <p className="mt-4 max-w-xl text-base leading-8 text-slate-300">
                            I&apos;m open to new opportunities, freelance collaborations, and product-focused conversations. Reach out through the form or connect through the channels below.
                        </p>
                        <div className="mt-8 grid gap-4 sm:grid-cols-2">
                            {contacts.map((item) => (
                                <a
                                    key={item.title}
                                    href={item.href}
                                    target="_blank"
                                    rel="noreferrer"
                                    className="rounded-[1.5rem] border border-white/10 bg-slate-950/45 p-5 transition hover:border-sky-300/40 hover:bg-slate-950/60"
                                >
                                    <h3 className="text-lg font-semibold text-white">{item.title}</h3>
                                    <p className="mt-2 text-sm leading-7 text-slate-300">{item.description}</p>
                                    <p className="mt-4 text-sm font-semibold text-sky-100 overflow-hidden max-w-full">{item.content}</p>
                                </a>
                            ))}
                        </div>
                    </div>
                    <div className="rounded-[1.75rem] border border-white/10 bg-slate-950/45 p-4 md:p-6">
                        <ContactForm form={form} sendEmail={sendEmail} />
                    </div>
                </div>
            </div>
            <Toaster />
        </section>
    );
};

export default Contact;
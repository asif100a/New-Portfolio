import PropTypes from "prop-types";

const ContactFormProfessional = ({ form, sendEmail }) => {
    return (
        <form ref={form} onSubmit={sendEmail} className="space-y-4">
            <div className="grid gap-4 md:grid-cols-2">
                <div>
                    <label className="block text-sm font-semibold uppercase tracking-[0.2em] text-slate-400">Your Name</label>
                    <input
                        type="text"
                        name="name"
                        placeholder="Your name"
                        className="mt-3 block w-full rounded-2xl border border-white/10 bg-white/5 px-5 py-3 text-white placeholder:text-slate-500 focus:border-sky-300/50 focus:outline-none"
                        required={true}
                    />
                </div>
                <div>
                    <label className="block text-sm font-semibold uppercase tracking-[0.2em] text-slate-400">Email Address</label>
                    <input
                        type="email"
                        name="email"
                        placeholder="Email address"
                        className="mt-3 block w-full rounded-2xl border border-white/10 bg-white/5 px-5 py-3 text-white placeholder:text-slate-500 focus:border-sky-300/50 focus:outline-none"
                        required={true}
                    />
                </div>
            </div>
            <div>
                <label className="block text-sm font-semibold uppercase tracking-[0.2em] text-slate-400">Subject</label>
                <input
                    type="text"
                    name="subject"
                    placeholder="Subject"
                    className="mt-3 block w-full rounded-2xl border border-white/10 bg-white/5 px-5 py-3 text-white placeholder:text-slate-500 focus:border-sky-300/50 focus:outline-none"
                    required={true}
                />
            </div>
            <div>
                <label className="block text-sm font-semibold uppercase tracking-[0.2em] text-slate-400">Message</label>
                <textarea
                    name="message"
                    placeholder="Message"
                    className="mt-3 block h-40 w-full rounded-2xl border border-white/10 bg-white/5 px-5 py-3 text-white placeholder:text-slate-500 focus:border-sky-300/50 focus:outline-none md:h-56"
                    required={true}
                ></textarea>
            </div>
            <input
                type="submit"
                value="Send Message"
                className="w-full rounded-full bg-[linear-gradient(135deg,#9cc2ff_0%,#6ddad3_100%)] px-6 py-3 text-sm font-bold text-slate-950 transition hover:scale-[1.01]"
            />
        </form>
    );
};

ContactFormProfessional.propTypes = {
    form: PropTypes.any,
    sendEmail: PropTypes.func,
};

export default ContactFormProfessional;

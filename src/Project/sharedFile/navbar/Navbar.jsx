import { Link } from "react-scroll";
import { CgMenuRound } from "react-icons/cg";
import { items } from "../../../utils/utils";
import { useEffect, useState, useCallback } from "react";
import PropTypes from "prop-types";
import { RxCrossCircled } from "react-icons/rx";

const Navbar = ({ isIntersecting }) => {
    const [isVisible, setIsVisible] = useState(true);
    const [lastScrollY, setLastScrollY] = useState(0);
    const [showDropdown, setShowDropdown] = useState(false);

    const handleScroll = useCallback(() => {
        const currentScrollY = window.scrollY;

        if (currentScrollY > lastScrollY && currentScrollY > 100) {
            setIsVisible(false);
        } else if (currentScrollY < lastScrollY) {
            setIsVisible(true);
        }

        setLastScrollY(currentScrollY);
    }, [lastScrollY]);

    useEffect(() => {
        window.addEventListener("scroll", handleScroll);
        return () => window.removeEventListener("scroll", handleScroll);
    }, [handleScroll]);

    const navItems = items.map((item, i) => (
        <li key={i}>
            <Link
                to={item.path}
                smooth={true}
                duration={600}
                offset={-96}
                className="cursor-pointer text-sm font-semibold tracking-[0.18em] text-slate-300 transition hover:text-white"
            >
                <button onClick={() => setShowDropdown(false)}>{item.title}</button>
            </Link>
        </li>
    ));

    return (
        <header className="relative">
            <div className={`fixed inset-x-0 top-0 z-50 transition-transform duration-300 ${isVisible ? "translate-y-0" : "-translate-y-full"}`}>
                <div className="mx-auto mt-4 flex max-w-6xl items-center justify-between rounded-full border border-white/10 bg-slate-950/70 px-4 py-3 shadow-[0_18px_60px_rgba(4,10,22,0.45)] backdrop-blur xl:px-6">
                    <div className="min-w-0">
                        <p className="text-[0.68rem] font-semibold uppercase tracking-[0.28em] text-sky-200/80">Portfolio</p>
                        <h3 className="truncate font-text-lora text-lg text-white sm:text-xl">N.M. Asif Sheikh</h3>
                    </div>

                    <nav className="relative text-white">
                        <div tabIndex={0} role="button" className="rounded-full border border-white/10 bg-white/5 p-2 lg:hidden">
                            {showDropdown ? (
                                <RxCrossCircled onClick={() => setShowDropdown(false)} className="text-2xl text-sky-200" />
                            ) : (
                                <CgMenuRound onClick={() => setShowDropdown(true)} className="text-2xl text-sky-200" />
                            )}
                        </div>

                        {!isIntersecting && <ul className="hidden items-center gap-6 lg:flex">{navItems}</ul>}

                        <ul
                            tabIndex={0}
                            className={`absolute right-0 top-14 w-56 space-y-3 rounded-3xl border border-white/10 bg-slate-950/95 p-5 shadow-2xl backdrop-blur lg:hidden ${showDropdown ? "block" : "hidden"}`}
                        >
                            {navItems}
                        </ul>
                    </nav>

                    <div className="hidden lg:flex lg:items-center lg:gap-3">
                        <a
                            href="/N.M._Asif_Sheikh_Junior_Fullstack_Engineer.pdf"
                            download
                            className="rounded-full border border-white/10 px-4 py-2 text-sm font-semibold text-slate-200 transition hover:border-sky-300/50 hover:text-white"
                        >
                            Resume
                        </a>
                        <Link to="contact" smooth={true} duration={600} offset={-96}>
                            <button className="rounded-full bg-[linear-gradient(135deg,#9cc2ff_0%,#6ddad3_100%)] px-5 py-2 text-sm font-bold text-slate-950 transition hover:scale-[1.02]">
                                Contact
                            </button>
                        </Link>
                    </div>
                </div>
            </div>
        </header>
    );
};

Navbar.propTypes = {
    isIntersecting: PropTypes.bool.isRequired,
};

export default Navbar;

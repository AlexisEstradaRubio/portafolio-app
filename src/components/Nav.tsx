import {useState} from "react";
import {ThemeToggle} from "./ThemeToggle";

const navLinks = [
    {href: "#sobre-mi", label: "Sobre mí"},
    {href: "#experiencia", label: "Experiencia"},
    {href: "#proyectos", label: "Proyectos"},
    {href: "#habilidades", label: "Habilidades"},
    {href: "#contacto", label: "Contacto"},
];

export const Nav = () => {
    const [isOpen, setIsOpen] = useState(false);

    const closeMenu = () => setIsOpen(false);

    return (
        <nav className="sticky top-0 z-10 bg-bg/90 backdrop-blur-md border-b border-line">
            <div className="max-w-3xl mx-auto px-5 flex justify-between items-center py-3.5 md:py-4.5">
        <span className="font-mono text-sm font-medium">
          alexis<span className="text-accent">.</span>dev
        </span>

                <div className="flex items-center gap-2.5">
                    <ThemeToggle/>

                    {/* Hamburger button — only visible below md breakpoint */}
                    <button
                        onClick={() => setIsOpen((prev) => !prev)}
                        aria-label="Abrir menú"
                        aria-expanded={isOpen}
                        className="md:hidden flex items-center justify-center w-10 h-10 border border-line rounded-md text-ink"
                    >
                        <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={2} strokeLinecap="round"
                             className="w-[18px] h-[18px]">
                            <line x1="3" y1="6" x2="21" y2="6"/>
                            <line x1="3" y1="12" x2="21" y2="12"/>
                            <line x1="3" y1="18" x2="21" y2="18"/>
                        </svg>
                    </button>

                    {/* Desktop links — hidden below md, always visible from md up */}
                    <div className="hidden md:flex gap-7 font-mono text-[13px] text-ink-soft">
                        {navLinks.map((link) => (
                            <a key={link.href} href={link.href}>
                                {link.label}
                            </a>
                        ))}
                    </div>
                </div>
            </div>

            {/* Mobile dropdown panel — only rendered when isOpen is true, and only below md */}
            {isOpen && (
                <div className="md:hidden flex flex-col font-mono text-sm text-ink-soft px-5 pb-4 border-t border-line">
                    {navLinks.map((link) => (
                        <a
                            key={link.href}
                            href={link.href}
                            onClick={closeMenu}
                            className="py-3 border-b border-line last:border-none"
                        >
                            {link.label}
                        </a>
                    ))}
                </div>
            )}
        </nav>
    );
};
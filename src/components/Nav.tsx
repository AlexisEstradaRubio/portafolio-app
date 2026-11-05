import { useEffect, useState } from "react";
import { ThemeToggle } from "./ThemeToggle";
import { InspectToggle } from "./InspectToggle";
import { Inspectable } from "./Inspectable";
import { profile } from "../data/profile";

const navLinks = [
    { href: "#sobre-mi", label: "Sobre mí" },
    { href: "#experiencia", label: "Experiencia" },
    { href: "#casos-de-estudio", label: "Casos de estudio" },
    { href: "#habilidades", label: "Habilidades" },
    { href: "#contacto", label: "Contacto" },
];

const MENU_ID = "mobile-menu";

export const Nav = () => {
    const [isOpen, setIsOpen] = useState(false);
    const closeMenu = () => setIsOpen(false);

    useEffect(() => {
        if (!isOpen) return;
        const onKeyDown = (event: KeyboardEvent) => {
            if (event.key === "Escape") setIsOpen(false);
        };
        window.addEventListener("keydown", onKeyDown);
        return () => window.removeEventListener("keydown", onKeyDown);
    }, [isOpen]);

    return (
        <Inspectable as="header" name="Nav" tagPlacement="below" className="sticky top-0 z-30">
            <a
                href="#contenido"
                className="sr-only focus:not-sr-only focus:absolute focus:top-3 focus:left-3 focus:z-50 focus:rounded-md focus:bg-ink focus:px-4 focus:py-2 focus:text-bg"
            >
                Saltar al contenido
            </a>
            {/* Background lives on the bar and the menu separately so each can have its own transparency. */}
            <div className="border-b border-line bg-bg/92 backdrop-blur-md">
                <nav aria-label="Principal" className="mx-auto flex max-w-6xl items-center justify-between gap-4 px-5 py-3 md:px-8">
                    <a href="#inicio" className="text-sm font-bold tracking-tight">
                        {profile.name}
                    </a>

                    <div className="flex items-center gap-2">
                        <ul className="mr-3 hidden items-center gap-6 text-sm font-medium text-ink-soft lg:flex">
                            {navLinks.map((link) => (
                                <li key={link.href}>
                                    <a href={link.href} className="py-2 transition-colors hover:text-ink">
                                        {link.label}
                                    </a>
                                </li>
                            ))}
                        </ul>
                        <InspectToggle />
                        <ThemeToggle />
                        <button
                            type="button"
                            onClick={() => setIsOpen((prev) => !prev)}
                            aria-label={isOpen ? "Cerrar menú" : "Abrir menú"}
                            aria-expanded={isOpen}
                            aria-controls={MENU_ID}
                            className="flex h-10 w-10 items-center justify-center rounded-md border border-line text-ink lg:hidden"
                        >
                            <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={2} strokeLinecap="round" aria-hidden="true" className="h-[18px] w-[18px]">
                                {isOpen ? (
                                    <path d="M6 6l12 12M18 6 6 18" />
                                ) : (
                                    <path d="M3 6h18M3 12h18M3 18h18" />
                                )}
                            </svg>
                        </button>
                    </div>
                </nav>
            </div>

            <Inspectable
                as="ul"
                name="MobileMenu"
                detail={`open={${isOpen}}`}
                tagPlacement="inside"
                id={MENU_ID}
                hidden={!isOpen}
                className="border-b border-line bg-bg/70 px-5 pb-3 font-medium backdrop-blur-xl lg:hidden"
            >
                {navLinks.map((link) => (
                    <li key={link.href}>
                        <a href={link.href} onClick={closeMenu} className="block border-b border-line/70 py-3.5 last:border-none">
                            {link.label}
                        </a>
                    </li>
                ))}
            </Inspectable>
        </Inspectable>
    );
};

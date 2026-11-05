import { links, profile } from "../data/profile";

export const Footer = () => {
    return (
        <footer className="mx-auto flex max-w-6xl flex-col gap-2 px-5 py-8 text-sm text-ink-soft md:flex-row md:items-center md:justify-between md:px-8">
            <p>
                <span className="font-semibold text-ink">{profile.name}</span> — {profile.role}
            </p>
            <p>
                Diseñado y desarrollado por {profile.name}.{" "}
                <a
                    href={links.sourceCode.href}
                    target="_blank"
                    rel="noreferrer"
                    className="font-medium text-ink underline decoration-ink/30 underline-offset-4 hover:decoration-ink"
                >
                    {links.sourceCode.label}
                    <span aria-hidden="true"> ↗</span>
                    <span className="sr-only"> (se abre en otra pestaña)</span>
                </a>
            </p>
        </footer>
    );
};

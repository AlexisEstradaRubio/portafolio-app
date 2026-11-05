import { Inspectable } from "../components/Inspectable";
import { InspectToggle } from "../components/InspectToggle";
import { links } from "../data/profile";

export const PortfolioNote = () => {
    return (
        <Inspectable as="aside" name="PortfolioNote" aria-labelledby="portfolio-note-title" className="mx-auto max-w-6xl px-5 pb-16 md:px-8 md:pb-24">
            <div className="grid gap-6 rounded-lg border border-dashed border-inspect-line p-6 md:grid-cols-[1fr_auto] md:items-center md:p-8">
                <div className="max-w-[40rem]">
                    <h2 id="portfolio-note-title" className="text-lg font-bold">
                        Este portafolio también es parte de mi trabajo.
                    </h2>
                    <p className="mt-2 text-ink-soft">
                        Lo diseñé y desarrollé con React, TypeScript y Tailwind CSS, separando el contenido de la interfaz para que sea fácil de evolucionar.
                        Está versionado en GitHub y se publica con GitHub Pages.
                    </p>
                </div>
                <div className="flex flex-col items-start gap-1 md:items-end">
                    <InspectToggle variant="text" label="Ver sus componentes" />
                    <a
                        href={links.sourceCode.href}
                        target="_blank"
                        rel="noreferrer"
                        className="inline-flex min-h-11 items-center gap-1.5 text-sm font-semibold underline decoration-ink/30 decoration-2 underline-offset-4 hover:decoration-ink"
                    >
                        Ver código fuente
                        <span aria-hidden="true">↗</span>
                        <span className="sr-only">(se abre en otra pestaña)</span>
                    </a>
                </div>
            </div>
        </Inspectable>
    );
};

import { CvDownload } from "../components/CvDownload";
import { Inspectable } from "../components/Inspectable";
import { links, profile } from "../data/profile";

const externalLinks = [links.linkedin, links.github];

export const Contact = () => {
    return (
        <Inspectable
            as="section"
            name="Contact"
            id="contacto"
            aria-labelledby="contacto-title"
            className="bg-accent text-on-accent [--focus:var(--on-accent)]"
        >
            <div className="mx-auto max-w-6xl px-5 py-20 md:px-8 md:py-28">
                <h2 id="contacto-title" className="text-[clamp(2.25rem,6vw,4.25rem)] leading-[1] font-extrabold tracking-[-0.03em]">
                    ¿Trabajamos juntos?
                </h2>
                <p className="mt-6 max-w-[36rem] text-lg opacity-90">
                    Estoy abierto a nuevas oportunidades como Frontend Engineer, donde pueda contribuir a construir y evolucionar productos digitales, tanto desde la ingeniería como desde el producto.
                </p>

                <div className="mt-10 flex flex-col gap-3 sm:flex-row sm:flex-wrap">
                    <a
                        href={`mailto:${profile.email}`}
                        className="inline-flex min-h-12 items-center justify-center rounded-md bg-on-accent px-5 font-semibold text-accent transition-opacity hover:opacity-90"
                    >
                        Escribir email
                    </a>
                    {externalLinks.map((link) => (
                        <a
                            key={link.href}
                            href={link.href}
                            target="_blank"
                            rel="noreferrer"
                            className="inline-flex min-h-12 items-center justify-center gap-1.5 rounded-md border-2 border-on-accent/50 px-5 font-semibold transition-colors hover:border-on-accent"
                        >
                            {link.label}
                            <span aria-hidden="true">↗</span>
                            <span className="sr-only">(se abre en otra pestaña)</span>
                        </a>
                    ))}
                    <CvDownload tone="inverse" />
                </div>

                <address className="mt-12 space-y-1 text-sm not-italic opacity-85">
                    <p>{profile.location}</p>
                    <p>
                        <a href={`mailto:${profile.email}`} className="underline decoration-on-accent/40 underline-offset-4 hover:decoration-on-accent">
                            {profile.email}
                        </a>
                    </p>
                </address>
            </div>
        </Inspectable>
    );
};

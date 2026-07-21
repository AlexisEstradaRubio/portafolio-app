export const About = () => {
    return (
        <section id="sobre-mi" className="max-w-3xl mx-auto px-5 py-11 md:py-18 border-t border-line">
            <div className="flex items-baseline gap-3 mb-6 md:mb-9">
                <span className="font-mono text-xs text-ink-faint">01</span>
                <h2 className="font-display text-[clamp(22px,5.5vw,28px)] font-semibold">Sobre mí</h2>
            </div>
            <div className="max-w-2xl flex flex-col gap-4 text-[15.5px] md:text-lg text-ink-soft">
                <p>
                    Frontend Engineer con <strong className="text-ink font-medium">más de 5 años de experiencia</strong> construyendo
                    aplicaciones web escalables y centradas en el usuario. Me especializo
                    en <strong className="text-ink font-medium">React, JavaScript y TypeScript</strong>, con un enfoque particular en
                    performance, arquitectura de componentes reutilizables y resolución
                    de problemas técnicos complejos.
                </p>
                <p>
                    He trabajado en productos digitales de alto tráfico en producción,
                    colaborando con equipos multidisciplinarios bajo metodologías ágiles.
                    Actualmente en <strong className="text-ink font-medium">Caliente.mx</strong>, construyendo interfaces para productos
                    financieros y de entretenimiento.
                </p>
            </div>
        </section>
    );
};
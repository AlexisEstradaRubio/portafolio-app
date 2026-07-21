export const Hero = () => {
    return (
        <header className="max-w-3xl mx-auto px-5 pt-12 pb-12 md:pt-24 md:pb-18">
            <span className="font-mono text-xs text-accent-ink bg-accent-soft inline-block px-3 py-1.5 rounded-md mb-5">
                Disponible para nuevas oportunidades
            </span>

            <h1 className="font-display text-[clamp(32px,9vw,52px)] font-bold leading-tight tracking-tight mb-3">
                Alexis Estrada Rubio
            </h1>
            <p className="font-display text-[clamp(17px,4.5vw,22px)] text-ink-soft font-medium mb-8">
                Frontend Engineer — React &amp; TypeScript
            </p>

            <div className="grid md:grid-cols-[1.1fr_1fr] gap-8 md:gap-12 items-center">
                <div>
                    <p className="text-ink-soft text-[15px] md:text-base max-w-[420px]">
                        Construyo interfaces escalables para productos de alto tráfico en
                        producción, y resuelvo los problemas técnicos que nadie ve: renders
                        de más, conexiones que fallan, componentes que se pisan entre apps.
                    </p>
                    <div className="flex flex-col sm:flex-row gap-2.5 mt-6">

                        <a href="#proyectos"
                            className="font-mono text-sm px-4.5 py-3 min-h-11 rounded-md bg-accent text-inverse-text flex items-center justify-center text-center">
                            Ver proyectos
                        </a>

                        <a href="#"
                            className="font-mono text-sm px-4.5 py-3 min-h-11 rounded-md border border-line text-ink flex items-center justify-center text-center"
                        >
                            Descargar CV
                        </a>
                    </div>
                </div>

                <div className="bg-code-bg rounded-xl p-5 font-mono text-xs text-code-text overflow-x-auto">
                    <div className="flex gap-1.5 mb-4">
                        <span className="w-2.5 h-2.5 rounded-full bg-line inline-block" />
                        <span className="w-2.5 h-2.5 rounded-full bg-line inline-block" />
                        <span className="w-2.5 h-2.5 rounded-full bg-line inline-block" />
                    </div>
                    <div className="flex flex-col gap-1">
                        <div>
                            <span className="text-[#7EC1A8]">const</span> engineer = {"{"}
                        </div>
                        <div className="pl-4">
                            name: <span className="text-[#89B4E8]">'Alexis Estrada Rubio'</span>,
                        </div>
                        <div className="pl-4">
                            role: <span className="text-[#89B4E8]">'Frontend Engineer'</span>,
                        </div>
                        <div className="pl-4">
                            stack: [<span className="text-[#89B4E8]">'React'</span>, <span className="text-[#89B4E8]">'TypeScript'</span>, <span className="text-[#89B4E8]">'Gatsby'</span>],
                        </div>
                        <div className="pl-4">
                            experience: <span className="text-[#89B4E8]">'5+ años'</span>,
                        </div>
                        <div className="pl-4 text-ink-faint">
                            // CDMX, México
                        </div>
                        <div>{"}"};</div>
                    </div>
                </div>
            </div>
        </header>
    );
};
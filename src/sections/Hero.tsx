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
                Frontend Engineer — React & TypeScript
            </p>

            <div className="grid md:grid-cols-[1.1fr_1fr] gap-8 md:gap-12 items-center">
                <div>
                    <p className="text-[20px]">
                        Construyo frontend que puede crecer.
                    </p>
                    <p className="text-ink-soft text-[15px] md:text-base max-w-[420px]">
                        Más de 8 años construyendo y evolucionando productos digitales en producción, desde dashboards y aplicaciones financieras hasta plataformas de alto tráfico.
                        Me especializo en desarrollar soluciones frontend escalables, integrar servicios, optimizar rendimiento y crear experiencias que puedan mantenerse y evolucionar junto con el producto.
                    </p>
                    <div className="flex flex-col sm:flex-row gap-2.5 mt-6">

                        <a href="#proyectos"
                            className="font-mono text-sm px-4.5 py-3 min-h-11 rounded-md bg-accent text-inverse-text flex items-center justify-center text-center">
                            Ver casos de estudio
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
                            stack: [<span className="text-[#89B4E8]">'React'</span>, <span className="text-[#89B4E8]">'TypeScript'</span>],
                        </div>
                        <div className="pl-4">
                            focus: [<span className="text-[#89B4E8]">'Architecture'</span>, <span className="text-[#89B4E8]">'Performance'</span>, <span className="text-[#89B4E8]">'Product'</span>],
                        </div>
                        <div className="pl-4">
                            experience: <span className="text-[#89B4E8]">'8+ years'</span>,
                        </div>
                    </div>
                </div>
            </div>
        </header>
    );
};
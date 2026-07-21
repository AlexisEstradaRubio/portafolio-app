export const Contact = () => {
    return (
        <section id="contacto" className="max-w-3xl mx-auto px-5 py-11 md:py-18 border-t border-line">
            <div className="bg-inverse-bg rounded-2xl p-8 md:p-11 mt-2">
                <h2 className="font-display text-2xl font-semibold text-inverse-text mb-2">
                    ¿Trabajamos juntos?
                </h2>
                <p className="text-[#C7CBD1] text-[14.5px] max-w-[420px] mb-6">
                    Estoy abierto a nuevas oportunidades como Frontend Engineer.
                </p>
                <div className="flex flex-col sm:flex-row flex-wrap gap-2.5">
                    <a

                        href="mailto:alexis.es.rub@gmail.com"
                        className="font-mono text-sm px-4.5 py-3 min-h-11 rounded-md bg-accent text-inverse-text flex items-center justify-center"
                    >
                        Escribir email
                    </a>
                    <a

                        href="https://linkedin.com/in/alexis-estradarub"
                        className="font-mono text-sm px-4.5 py-3 min-h-11 rounded-md border border-[#3A3D42] text-inverse-text flex items-center justify-center"
                    >
                        LinkedIn
                    </a>
                    <a

                        href="#"
                        className="font-mono text-sm px-4.5 py-3 min-h-11 rounded-md border border-[#3A3D42] text-inverse-text flex items-center justify-center"
                    >
                        Descargar CV
                    </a>
                </div>
            </div>
            <footer className="font-mono text-xs text-ink-faint text-center pt-9 pb-6">
                CDMX, México — alexis.es.rub@gmail.com
            </footer>
        </section>
    );
};
export const About = () => {
    return (
        <section id="sobre-mi" className="max-w-3xl mx-auto px-5 py-11 md:py-18 border-t border-line">
            <div className="flex items-baseline gap-3 mb-6 md:mb-9">
                <span className="font-mono text-xs text-ink-faint">01</span>
                <h2 className="font-display text-[clamp(22px,5.5vw,28px)] font-semibold">Sobre mí</h2>
            </div>
            <div className="max-w-2xl flex flex-col gap-4 text-[15.5px] md:text-lg text-ink-soft">
                <p>
                    Soy Frontend Engineer con más de 8 años de experiencia construyendo y evolucionando productos digitales en producción.
                    A lo largo de mi carrera he trabajado desde dashboards especializados y productos financieros hasta plataformas digitales de alto tráfico. Mi principal experiencia está en React, TypeScript y JavaScript, pero mi trabajo va más allá de una tecnología específica.
                    Me interesa especialmente diseñar soluciones que puedan crecer con el producto: componentes reutilizables, Design Systems, integraciones con servicios, optimización de rendimiento y arquitecturas frontend fáciles de mantener.
                    También he participado en testing, observabilidad, analítica y experimentación, además de coordinar prioridades y acompañar técnicamente a otros desarrolladores.
                    Mi forma de trabajar parte de una idea sencilla: <strong className="text-ink font-medium">entender primero el problema y después elegir la solución técnica adecuada.</strong>
                </p>
                <p>
                    
                    Escalabilidad
                    Soluciones capaces de evolucionar con el producto.
                </p>
                <p>
                    Reutilización
                    Componentes, patrones y herramientas aprovechables en distintas partes de una aplicación.
                </p>
                <p>
                    Performance
                    Rendimiento y experiencia del usuario como parte del desarrollo, no como optimización posterior.
                </p>
                <p>
                    Producto
                    Comprender el problema antes de decidir cómo resolverlo técnicamente.
                </p>
            </div>
        </section>
    );
};
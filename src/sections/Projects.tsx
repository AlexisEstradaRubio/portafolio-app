import { projects } from "../data/projects";

export const Projects = () => {
    return (
        <section id="proyectos" className="max-w-3xl mx-auto px-5 py-11 md:py-18 border-t border-line">
            <div className="flex items-baseline gap-3 mb-6 md:mb-9">
                <span className="font-mono text-xs text-ink-faint">03</span>
                <h2 className="font-display text-[clamp(22px,5.5vw,28px)] font-semibold">Proyectos</h2>
            </div>
            <p className="text-ink-soft text-sm mb-6 -mt-2.5">
                Casos técnicos con problema, solución y resultado.
            </p>
            {projects.map((project) => (
                <div key={project.id} className="bg-bg-alt border border-line rounded-xl p-5 md:p-6 mb-4">
                    <h3 className="font-display text-[17px] font-semibold mb-3">{project.title}</h3>
                    <div className="grid grid-cols-1 sm:grid-cols-[80px_1fr] gap-x-3.5 gap-y-0.5 text-sm mb-1.5">
            <span className="font-mono text-[11px] text-ink-faint uppercase sm:normal-case tracking-wide sm:tracking-normal">
              Problema
            </span>
                        <span className="text-ink-soft">{project.problem}</span>
                    </div>
                    <div className="grid grid-cols-1 sm:grid-cols-[80px_1fr] gap-x-3.5 gap-y-0.5 text-sm mb-1.5">
            <span className="font-mono text-[11px] text-ink-faint uppercase sm:normal-case tracking-wide sm:tracking-normal">
              Solución
            </span>
                        <span className="text-ink-soft">{project.solution}</span>
                    </div>
                    <div className="grid grid-cols-1 sm:grid-cols-[80px_1fr] gap-x-3.5 gap-y-0.5 text-sm">
            <span className="font-mono text-[11px] text-ink-faint uppercase sm:normal-case tracking-wide sm:tracking-normal">
              Resultado
            </span>
                        <span className="text-ink-soft">{project.result}</span>
                    </div>
                </div>
            ))}
        </section>
    );
};
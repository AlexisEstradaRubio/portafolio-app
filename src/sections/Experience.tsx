import { ComponentCard } from "../components/ComponentCard";
import { experience } from "../data/experience";

export const Experience = () => {
    return (
        <section id="experiencia" className="max-w-3xl mx-auto px-5 py-11 md:py-18 border-t border-line">
            <div className="flex items-baseline gap-3 mb-6 md:mb-9">
                <span className="font-mono text-xs text-ink-faint">02</span>
                <h2 className="font-display text-[clamp(22px,5.5vw,28px)] font-semibold">Experiencia</h2>
            </div>
            <p className="text-ink-soft text-sm mb-6 -mt-2.5">
                Cada rol, documentado como el componente que fue.
            </p>
            {experience.map((exp) => (
                <ComponentCard key={exp.id} experience={exp} />
            ))}
        </section>
    );
};
import { SkillGroup } from "../components/SkillGroup";
import { skillGroups } from "../data/skills";

export const Skills = () => {
    return (
        <section id="habilidades" className="max-w-3xl mx-auto px-5 py-11 md:py-18 border-t border-line">
            <div className="flex items-baseline gap-3 mb-6 md:mb-9">
                <span className="font-mono text-xs text-ink-faint">04</span>
                <h2 className="font-display text-[clamp(22px,5.5vw,28px)] font-semibold">Habilidades</h2>
            </div>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6 md:gap-7">
                {skillGroups.map((group) => (
                    <SkillGroup key={group.id} group={group} />
                ))}
            </div>
        </section>
    );
};
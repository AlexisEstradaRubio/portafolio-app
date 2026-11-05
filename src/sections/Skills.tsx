import { Inspectable } from "../components/Inspectable";
import { Section } from "../components/Section";
import { coreSkills, skillGroups } from "../data/skills";

export const Skills = () => {
    return (
        <Section
            id="habilidades"
            title="Habilidades"
            description="Las tecnologías que uso, ordenadas de lo central a lo complementario."
            inspectName="Skills"
        >
            <Inspectable name="CoreSkills" className="grid gap-8 sm:grid-cols-2">
                <div>
                    <h3 className="text-sm font-bold text-ink-soft">Base</h3>
                    <p className="mt-2 text-2xl font-bold tracking-tight md:text-3xl">{coreSkills.stack.join(", ")}</p>
                </div>
                <div>
                    <h3 className="text-sm font-bold text-ink-soft">Especialidad</h3>
                    <p className="mt-2 text-2xl font-bold tracking-tight text-accent md:text-3xl">{coreSkills.specialty.join(", ")}</p>
                </div>
            </Inspectable>

            <dl className="mt-12 grid gap-x-10 gap-y-6 border-t border-line pt-10 sm:grid-cols-2">
                {skillGroups.map((group) => (
                    <Inspectable key={group.id} name="SkillGroup" detail={`title="${group.title}"`}>
                        <dt className="text-sm font-bold">{group.title}</dt>
                        <dd className="mt-1.5 text-ink-soft">{group.skills.join(", ")}</dd>
                    </Inspectable>
                ))}
            </dl>
        </Section>
    );
};

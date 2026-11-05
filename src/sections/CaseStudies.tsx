import { Inspectable } from "../components/Inspectable";
import { Section } from "../components/Section";
import { TechList } from "../components/TechList";
import { caseStudies } from "../data/caseStudies";

const steps = [
    { key: "problem", label: "Problema" },
    { key: "decision", label: "Decisión" },
    { key: "result", label: "Resultado" },
] as const;

export const CaseStudies = () => {
    return (
        <Section
            id="casos-de-estudio"
            title="Casos de estudio"
            description="Retos técnicos contados como problema, decisión y resultado."
            inspectName="CaseStudies"
        >
            <div className="space-y-8">
                {caseStudies.map((study) => (
                    <Inspectable
                        as="article"
                        key={study.id}
                        name="CaseStudy"
                        detail={`company="${study.company}"`}
                        aria-labelledby={`${study.id}-title`}
                        className="rounded-lg border border-line bg-surface p-6 md:p-8"
                    >
                        <p className="text-sm font-medium text-accent">{study.company}</p>
                        <h3 id={`${study.id}-title`} className="mt-1 text-xl font-bold tracking-tight text-balance md:text-2xl">
                            {study.title}
                        </h3>
                        <dl className="mt-6 grid gap-6 md:grid-cols-3 md:gap-8">
                            {steps.map((step) => (
                                <div
                                    key={step.key}
                                    className={step.key === "result" ? "border-t-4 border-accent pt-3" : "border-t border-line pt-3.5"}
                                >
                                    <dt className="text-sm font-bold text-ink">{step.label}</dt>
                                    <dd className={`mt-2 text-sm ${step.key === "result" ? "font-medium text-ink" : "text-ink-soft"}`}>
                                        {study[step.key]}
                                    </dd>
                                </div>
                            ))}
                        </dl>
                        <div className="mt-6">
                            <TechList items={study.tags} label="Temas" />
                        </div>
                    </Inspectable>
                ))}
            </div>
        </Section>
    );
};

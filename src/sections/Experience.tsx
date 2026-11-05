import { Inspectable } from "../components/Inspectable";
import { Section } from "../components/Section";
import { TechList } from "../components/TechList";
import { experience } from "../data/experience";

export const Experience = () => {
    return (
        <Section
            id="experiencia"
            title="Experiencia"
            description="Más de 8 años, de componentes construidos desde cero a una plataforma de muy alto tráfico."
            inspectName="Experience"
        >
            <ol className="relative space-y-14 border-l-2 border-line pl-6 md:pl-10">
                {experience.map((job) => (
                    <Inspectable as="li" key={job.id} name="ExperienceItem" detail={`company="${job.company}"`}>
                        <span aria-hidden="true" className="absolute top-2 -left-[calc(1.5rem+7px)] h-3 w-3 rounded-full border-2 border-accent bg-bg md:-left-[calc(2.5rem+7px)]" />
                        <p className="text-sm font-medium text-ink-soft">
                            <time dateTime={job.startDate}>{job.start}</time>
                            {" — "}
                            {job.endDate ? <time dateTime={job.endDate}>{job.end}</time> : job.end}
                        </p>
                        <h3 className="mt-1 text-xl font-bold tracking-tight">
                            {job.role}
                            <span className="block text-accent">{job.company}</span>
                        </h3>
                        <p className="mt-2 text-sm font-medium text-ink">{job.context}</p>
                        <p className="mt-4 max-w-[40rem] text-ink-soft">{job.summary}</p>
                        <ul className="mt-4 max-w-[40rem] space-y-2.5">
                            {job.contributions.map((item) => (
                                <li key={item} className="relative pl-5 text-ink-soft before:absolute before:top-[0.7em] before:left-0 before:h-1.5 before:w-1.5 before:rounded-full before:bg-accent">
                                    {item}
                                </li>
                            ))}
                        </ul>
                        <div className="mt-5">
                            <TechList items={job.technologies} label={`Tecnologías en ${job.company}`} />
                        </div>
                    </Inspectable>
                ))}
            </ol>
        </Section>
    );
};

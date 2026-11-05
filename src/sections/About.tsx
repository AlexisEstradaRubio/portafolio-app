import { Section } from "../components/Section";
import { about } from "../data/profile";

export const About = () => {
    return (
        <Section id="sobre-mi" title="Sobre mí" inspectName="About">
            <div className="max-w-[38rem] space-y-5 text-lg text-ink-soft">
                {about.paragraphs.map((paragraph) => (
                    <p key={paragraph}>{paragraph}</p>
                ))}
            </div>
            <figure className="mt-10 max-w-[38rem] border-l-4 border-accent pl-5">
                <blockquote className="text-xl font-semibold text-ink text-pretty">
                    <p>{about.principle}</p>
                </blockquote>
                <figcaption className="mt-2 text-sm text-ink-soft">Mi forma de trabajar</figcaption>
            </figure>
        </Section>
    );
};

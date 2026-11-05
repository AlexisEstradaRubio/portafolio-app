import type { ReactNode } from "react";
import { Inspectable } from "./Inspectable";
import { profile } from "../data/profile";
import { coreSkills } from "../data/skills";

// Token colours live in index.css (--code-*) so both themes keep AA contrast.
const Tag = ({ children }: { children: ReactNode }) => <span className="text-code-tag">{children}</span>;
const Attr = ({ children }: { children: ReactNode }) => <span className="text-code-attr">{children}</span>;
const Str = ({ children }: { children: ReactNode }) => <span className="text-code-string">&quot;{children}&quot;</span>;
const Punct = ({ children }: { children: ReactNode }) => <span className="text-code-punct">{children}</span>;

const indent = (level: number) => "  ".repeat(level);

/** One `name={[ ... ]}` prop, written over several lines so it never needs horizontal scrolling. */
const arrayProp = (name: string, values: string[]): ReactNode[] => [
    <>
        {indent(1)}
        <Attr>{name}</Attr>
        <Punct>={"{["}</Punct>
    </>,
    ...values.map((value) => (
        <>
            {indent(2)}
            <Str>{value}</Str>
            <Punct>,</Punct>
        </>
    )),
    <>
        {indent(1)}
        <Punct>{"]}"}</Punct>
    </>,
];

const stringProp = (name: string, value: string): ReactNode => (
    <>
        {indent(1)}
        <Attr>{name}</Attr>
        <Punct>=</Punct>
        <Str>{value}</Str>
    </>
);

const lines: ReactNode[] = [
    <>
        <Punct>&lt;</Punct>
        <Tag>Engineer</Tag>
    </>,
    stringProp("name", profile.name),
    stringProp("role", profile.role),
    ...arrayProp("stack", coreSkills.stack),
    ...arrayProp("focus", coreSkills.specialty),
    stringProp("experience", "8+ años"),
    <Punct>/&gt;</Punct>,
];

const FILE_NAME = "Engineer.tsx";

/** Editor-style window that presents the profile as the props of a React component. */
export const CodeWindow = () => {
    return (
        <Inspectable as="div" name="CodeWindow" detail={`file="${FILE_NAME}"`} className="w-full">
            <figure className="overflow-hidden rounded-lg border border-code-line bg-code-bg shadow-[0_24px_60px_-20px_rgba(26,31,34,0.45)]">
                <figcaption className="flex items-end border-b border-code-line bg-code-chrome px-2 pt-2">
                    <span className="rounded-t-md border-x border-t border-code-line bg-code-bg px-3.5 py-1.5 font-mono text-xs text-code-text">
                        {FILE_NAME}
                    </span>
                </figcaption>
                <pre className="overflow-x-auto py-4 font-mono text-[0.8125rem] leading-[1.75] text-code-text sm:text-sm">
                    <code className="grid grid-cols-[2.75rem_1fr]">
                        {lines.map((line, index) => (
                            // Lines are static and never reorder, so the index is a stable key.
                            <span key={index} className="contents">
                                <span aria-hidden="true" className="pr-4 text-right text-code-gutter select-none">
                                    {index + 1}
                                </span>
                                <span className="pr-5 whitespace-pre">{line}</span>
                            </span>
                        ))}
                    </code>
                </pre>
            </figure>
        </Inspectable>
    );
};

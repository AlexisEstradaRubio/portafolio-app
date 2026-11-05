import { CodeWindow } from "../components/CodeWindow";
import { CvDownload } from "../components/CvDownload";
import { Inspectable } from "../components/Inspectable";
import { InspectToggle } from "../components/InspectToggle";
import { profile } from "../data/profile";

export const Hero = () => {
    return (
        <Inspectable as="div" name="Hero" id="inicio" className="mx-auto max-w-6xl px-5 pt-14 pb-20 md:px-8 md:pt-20 md:pb-28">
            <Inspectable name="Availability" className="mb-10 inline-flex items-center gap-2.5 text-sm font-medium text-ink-soft md:mb-12">
                <span className="relative flex h-2.5 w-2.5" aria-hidden="true">
                    <span className="absolute inline-flex h-full w-full rounded-full bg-ok opacity-60 motion-safe:animate-ping" />
                    <span className="relative inline-flex h-2.5 w-2.5 rounded-full bg-ok" />
                </span>
                {profile.availability}
            </Inspectable>

            <div className="grid gap-14 lg:grid-cols-[minmax(0,1fr)_minmax(0,25rem)] lg:items-center lg:gap-16">
                <div>
                    <h1 className="text-lg font-semibold">
                        {profile.name}
                        <span className="mt-1 block font-normal text-ink-soft">
                            {profile.role} — {profile.stack}
                        </span>
                    </h1>

                    <Inspectable name="Headline" className="mt-6 md:mt-8">
                        <p className="text-[clamp(2.75rem,7vw,5rem)] lg:text-[min(5.2vw,4.25rem)] leading-[0.98] font-extrabold tracking-[-0.035em] text-balance">
                            {profile.headline}
                        </p>
                    </Inspectable>

                    <div className="mt-8 max-w-[36rem] space-y-4 text-lg text-ink-soft md:mt-10">
                        <p>{profile.intro}</p>
                        <p>{profile.focus}</p>
                    </div>

                    <div className="mt-10 flex flex-col items-start gap-4">
                        <Inspectable name="Actions" className="flex w-full flex-col gap-3 sm:w-auto sm:flex-row">
                            <a
                                href="#casos-de-estudio"
                                className="inline-flex min-h-12 items-center justify-center rounded-md bg-accent px-5 font-semibold whitespace-nowrap text-on-accent transition-colors hover:bg-accent-strong"
                            >
                                Ver casos de estudio
                            </a>
                            <CvDownload />
                        </Inspectable>
                        <InspectToggle variant="text" />
                    </div>
                </div>

                <CodeWindow />
            </div>
        </Inspectable>
    );
};

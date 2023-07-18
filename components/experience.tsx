import { Experience } from "Render/Experience/RenderExperience";
import unpackIcons from "utilities/icons";
import BeautifyParagraph from "utilities/splitLines";

export interface ExperienceProps {
    exp: Experience[];
}

export default function ExperienceComponent({ exp }: ExperienceProps) {
    function hasTitleAndOrgname(title: string, orgName: string): string {
        return title + " @ " + orgName;
    }
    return (
        <div className="flex flex-row h-full items-center justify-center lg:mx-96 md:mx-auto sm:mx-auto overflow-y-auto mt-16 mb-16">
            <h1 className="text-2xl font-bold font-serif text-center">
                Experience<br></br> (Click the cards!)
            </h1>
            <ul className="steps steps-vertical">
                {exp.map((experience, index) => (
                    <li
                        key={experience.summary}
                        className="step step-warning italic text-xl font-bold px-4"
                    >
                        <label htmlFor={`exp-modal-${index}`}>
                            <div className="card bg-base-100 shadow-xl">
                                <div className="card-body">
                                    {experience.orgName ? (
                                        <h2 className="card-title text-left my-2">
                                            {hasTitleAndOrgname(
                                                experience.title!,
                                                experience.orgName
                                            )}
                                        </h2>
                                    ) : (
                                        <h2 className="card-title text-left my-2">
                                            {experience.title}
                                        </h2>
                                    )}
                                    {experience.current ? (
                                        <div className="badge badge-accent my-2">
                                            Current
                                        </div>
                                    ) : null}
                                    <span className="text-left text-base not-italic font-medium my-2">
                                        {experience.dateStartEnd}
                                    </span>
                                    <p className="text-justify text-base not-italic font-medium tracking-wide">
                                        {experience.summary}
                                    </p>
                                    <div className="flex justify-start gap-1 inline">
                                        {experience.skills?.map((skill) =>
                                            unpackIcons(skill)
                                        )}
                                        <br></br>
                                    </div>
                                </div>
                            </div>
                        </label>
                        {experience.story && (
                            <div>
                                <input
                                    type="checkbox"
                                    id={`exp-modal-${index}`}
                                    className="modal-toggle"
                                />
                                <label
                                    htmlFor={`exp-modal-${index}`}
                                    className="modal cursor-pointer"
                                >
                                    <label
                                        className="modal-box relative"
                                        htmlFor=""
                                    >
                                        <div className="py-4 text-base">
                                            {BeautifyParagraph(
                                                experience.type!,
                                                experience.story!
                                            )}
                                        </div>
                                        {experience.links && (
                                            <span
                                                className="gap-16 tooltip"
                                                data-tip="Related links"
                                            >
                                                {experience.links?.map((link) =>
                                                    unpackIcons(link)
                                                )}
                                            </span>
                                        )}
                                    </label>
                                </label>
                            </div>
                        )}
                    </li>
                ))}
            </ul>
        </div>
    );
}

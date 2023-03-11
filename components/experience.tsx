import { Experience } from "Render/Experience/RenderExperience";
import unpackIcons from "utilities/icons";

export interface ExperienceProps {
    exp: Experience[];
}

export default function ExperienceComponent({ exp }: ExperienceProps) {
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
                            <div className="card w-96 bg-base-100 shadow-xl">
                                <div className="card-body">
                                    <h2 className="card-title">
                                        {experience.title} @{" "}
                                        {experience.orgName}
                                        {experience.current ? (
                                            <div className="badge badge-accent mx-2">
                                                Current
                                            </div>
                                        ) : null}
                                        <span className="justify-right text-base not-italic font-medium">
                                            {experience.dateStartEnd}
                                        </span>
                                    </h2>
                                    <p className="text-justify text-base not-italic font-medium tracking-wide">
                                        {experience.summary}
                                    </p>
                                    <span className="flex justify-start gap-1 inline">
                                        {experience.skills?.map((skill) =>
                                            unpackIcons(skill)
                                        )}
                                        <br></br>
                                    </span>
                                </div>
                            </div>
                        </label>
                        <input
                            type="checkbox"
                            id={`exp-modal-${index}`}
                            className="modal-toggle"
                        />
                        <label
                            htmlFor={`exp-modal-${index}`}
                            className="modal cursor-pointer"
                        >
                            <label className="modal-box relative" htmlFor="">
                                <p className="py-4 text-base">
                                    {experience.story}
                                </p>
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
                    </li>
                ))}
            </ul>
        </div>
    );
}

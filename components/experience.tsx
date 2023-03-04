import { Experience } from "Render/Experience/RenderExperience";
import unpackLinks from "utilities/links";

export interface ExperienceProps {
    exp: Experience[];
}

export default function ExperienceComponent({ exp }: ExperienceProps) {
    return (
        <>
            <div className="font-bold text-center text-2xl font-serif">
                Experience
            </div>
            <div className="flex flex-wrap items-center justify-center mx-56">
                {exp.map((e) => (
                    <div key={e.story} className="basis-1/3 flex-none ">
                        <div className=" card shadow-2xl ">
                            <div className="card-body">
                                <h2 className="card-title p-2 font-bold">
                                    {e.title} @ {e.orgName}
                                    {e.current ? (
                                        <div className="badge badge-secondary">
                                            Current
                                        </div>
                                    ) : null}
                                </h2>
                                <p className=" p-2 text-justify ">
                                    {e.summary}
                                </p>
                                <div className="justify-items-start ">
                                    <span
                                        className="tooltip"
                                        data-tip="Skills involved"
                                    >
                                        {e.skills!.map((skill) =>
                                            unpackLinks(skill)
                                        )}
                                    </span>
                                </div>

                                <div className="card-actions justify-end">
                                    <label
                                        htmlFor="my-modal-4"
                                        className="btn btn-primary"
                                    >
                                        Read More
                                    </label>
                                    <input
                                        type="checkbox"
                                        id="my-modal-4"
                                        className="modal-toggle"
                                    />
                                    <label
                                        htmlFor="my-modal-4"
                                        className="modal cursor-pointer"
                                    >
                                        <label
                                            className="modal-box relative"
                                            htmlFor=""
                                        >
                                            <p className="py-4">{e.story}</p>
                                            <div
                                                className="gap-16 tooltip"
                                                data-tip="Related links"
                                            >
                                                {e.links!.map((link) => (
                                                    <span>
                                                        {link.type}{" "}
                                                        {unpackLinks(
                                                            link.link!
                                                        )}
                                                    </span>
                                                ))}
                                            </div>
                                        </label>
                                    </label>
                                </div>
                            </div>
                        </div>
                    </div>
                ))}
            </div>
        </>
    );
}

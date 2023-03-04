import { Projects } from "Render/Project/RenderProject";
import unpackIcons from "utilities/icons";

export interface ProjectProps {
    proj: Projects[];
}

export default function ProjectComponent({ proj }: ProjectProps) {
    return (
        <div className="flex flex-col h-screen items-center">
            <span className="font-bold text-center text-2xl font-serif ">
                Projects
            </span>
            <div className="flex flex-wrap items-center justify-center mx-56">
                {proj.map((e,index) => (
                    <div key={e.story} className="basis-1/3 flex-none ">
                        <div className=" card shadow-2xl ">
                            <div className="card-body">
                                <h2 className="card-title p-2 font-bold">
                                    {e.name}
                                    {e.current ? (
                                        <div className="badge badge-secondary">
                                            Current
                                        </div>
                                    ) : null}
                                    {e.featured ? (
                                        <div className="badge badge-secondary">
                                            Featured
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
                                            unpackIcons(skill)
                                        )}
                                    </span>
                                </div>
                                <div className="card-actions justify-end">
                                    <label
                                        htmlFor={`proj-modal-${index}`}
                                        className="btn btn-primary"
                                    >
                                        Read More
                                    </label>
                                    <input
                                        type="checkbox"
                                        id={`proj-modal-${index}`}
                                        className="modal-toggle"
                                    />
                                    <label
                                        htmlFor={`proj-modal-${index}`}
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
                                                {e.links!.map((link) =>
                                                    unpackIcons(link)
                                                )}
                                            </div>
                                        </label>
                                    </label>
                                </div>
                            </div>
                        </div>
                    </div>
                ))}
            </div>
        </div>
    );
}

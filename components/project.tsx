import { useState } from "react";
import { Projects } from "Render/Project/RenderProject";
import unpackIcons from "utilities/icons";

export interface ProjectProps {
    proj: Projects[];
}

export default function ProjectComponent({ proj }: ProjectProps) {
    const [page, setPage] = useState(1);
    const onPage = (index: number) => {
        if (index >= (page - 1) * 6 && index < page * 6) {
            return true;
        }
        return false;
    };
    return (
        <div className="flex flex-col h-screen items-center">
            <span className="font-bold text-center text-2xl font-serif ">
                Projects
            </span>
            <div className="flex flex-wrap items-center justify-center mx-56">
                {proj.map((e, index) =>
                    onPage(index) ? (
                        <div key={e.story} className="basis-1/3 flex-none">
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
                                                <span className="font-bold">
                                                    Story:{" "}
                                                </span>
                                                <p className="py-4">
                                                    {e.story}
                                                </p>
                                                <span className="font-bold">
                                                    Check them out:{" "}
                                                </span>
                                                <p
                                                    className="gap-16 tooltip"
                                                    data-tip="Related links"
                                                >
                                                    {e.links!.map((link) =>
                                                        unpackIcons(link)
                                                    )}
                                                </p>
                                            </label>
                                        </label>
                                    </div>
                                </div>
                            </div>
                        </div>
                    ) : null
                )}
            </div>
            <div className="btn-group">
                <button
                    className="btn"
                    onClick={
                        page > 1 ? () => setPage(page - 1) : () => setPage(page)
                    }
                >
                    «
                </button>
                <button className="btn">Page {page}</button>
                <button
                    className="btn"
                    onClick={
                        page < proj.length / 6
                            ? () => setPage(page + 1)
                            : () => setPage(page)
                    }
                >
                    »
                </button>
            </div>
        </div>
    );
}

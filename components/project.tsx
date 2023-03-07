import { useEffect, useState } from "react";
import { Projects } from "Render/Project/RenderProject";
import unpackIcons from "utilities/icons";

export interface ProjectProps {
    proj: Projects[];
    skills: String[];
}

export default function ProjectComponent({ proj, skills }: ProjectProps) {
    const [page, setPage] = useState(1);
    const [renderProjects, setRenderProjects] = useState<Projects[]>(
        proj.slice(0, Math.min(proj.length, 6))
    );
    useEffect(() => {
        const newProj: Projects[] = [];
        for (var i = (page - 1) * 6; i < page * 6; i++) {
            newProj.push(proj[i]);
        }
        setRenderProjects(newProj);
    }, [page]);
    return (
        <div className="flex flex-col items-center h-full">
            <span className="font-bold text-center text-2xl font-serif ">
                Projects
            </span>
            <div className="flex flex-wrap items-center justify-center lg:mx-56 md:48">
                {renderProjects.map(
                    (e) =>
                        e != null && (
                            <div key={e.story} className="p-2">
                                <div className="card w-96 justify-center shadow-2xl">
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
                                                htmlFor={`proj-modal-${e.summary}`}
                                                className="btn btn-primary"
                                            >
                                                Read More
                                            </label>
                                            <input
                                                type="checkbox"
                                                id={`proj-modal-${e.summary}`}
                                                className="modal-toggle"
                                            />
                                            <label
                                                htmlFor={`proj-modal-${e.summary}`}
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
                        )
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

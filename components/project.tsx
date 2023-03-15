import { useEffect, useState } from "react";
import { Projects } from "Render/Project/RenderProject";
import unpackIcons from "utilities/icons";
import BeautifyParagraph from "utilities/splitLines";

export interface ProjectProps {
    proj: Projects[];
    skills: string[];
}

export default function ProjectComponent({ proj, skills }: ProjectProps) {
    const [page, setPage] = useState(1);
    const [renderProjects, setRenderProjects] = useState<Projects[]>([]);
    const [filter, setFilter] = useState("");
    const [numProjects, setNumProjects] = useState(0);
    const [viewSkills, setViewSkills] = useState(false);
    const FilterProject = () => {
        return (
            <ul tabIndex={0} className="h-96 overflow-x-auto">
                <li key="clear">
                    <button
                        onClick={() => {
                            setFilter("");
                            setPage(1);
                            setViewSkills(false);
                        }}
                        className="btn btn-ghost text-center text-justify rounded-md w-52"
                    >
                        Clear
                    </button>
                </li>
                <li key="clear">
                    <button
                        onClick={() => {
                            setFilter("current");
                            setPage(1);
                            setViewSkills(false);
                        }}
                        className="btn btn-ghost text-center text-justify rounded-md w-52"
                    >
                        Current
                    </button>
                </li>
                <li key="clear">
                    <button
                        onClick={() => {
                            setFilter("featured");
                            setPage(1);
                            setViewSkills(false);
                        }}
                        className="btn btn-ghost text-center text-justify rounded-md w-52"
                    >
                        Featured
                    </button>
                </li>
                {skills.map((skill) => (
                    <li key={skill}>
                        <button
                            onClick={() => {
                                setFilter(skill);
                                setPage(1);
                                setViewSkills(false);
                            }}
                            className="btn btn-ghost text-center text-justify rounded-md w-52"
                        >
                            {skill}
                        </button>
                    </li>
                ))}
            </ul>
        );
    };
    useEffect(() => {
        const newProj: Projects[] = [];
        const filtered: Projects[] = [];
        for (const p of proj) {
            if (filter == "" || p.skills?.includes(filter)) {
                filtered.push(p);
            } else if (filter == "current" && p.current) {
                filtered.push(p);
            } else if (filter == "featured" && p.featured) {
                filtered.push(p);
            }
        }
        setNumProjects(filtered.length);
        for (var i = (page - 1) * 6; i < page * 6; i++) {
            newProj.push(filtered[i]);
        }
        setRenderProjects(newProj);
    }, [page, filter]);
    return (
        <div className="flex flex-col items-center h-full">
            <span className="font-bold text-center text-5xl font-serif mb-10">
                Projects
            </span>
            <button
                onClick={() => setViewSkills(!viewSkills)}
                className="btn btn-wide btn-info m-1 tooltip tooltip-left"
                data-tip="Reminder: Even more skills in Experience section!"
            >
                What skills interests you?
            </button>
            {viewSkills && <FilterProject />}
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
                                                <div className="badge badge-error">
                                                    Current
                                                </div>
                                            ) : null}
                                            {e.featured ? (
                                                <div className="badge badge-success">
                                                    Featured
                                                </div>
                                            ) : null}
                                        </h2>
                                        <p className=" p-2 text-justify ">
                                            {e.summary}
                                        </p>
                                        <div className="justify-items-start inline">
                                            <span>
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
                                                        {e.name}
                                                    </span>
                                                    <p className="py-4">
                                                        {BeautifyParagraph(
                                                            e.type!,
                                                            e.story!
                                                        )}
                                                    </p>
                                                    {e.links ? (
                                                        <span className="font-bold">
                                                            Check them out:
                                                            <span
                                                                className="flex justify-start gap-1 inline tooltip"
                                                                data-tip="Related links"
                                                            >
                                                                {e.links!.map(
                                                                    (link) =>
                                                                        unpackIcons(
                                                                            link
                                                                        )
                                                                )}
                                                            </span>
                                                        </span>
                                                    ) : null}
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
                        page < numProjects / 6
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

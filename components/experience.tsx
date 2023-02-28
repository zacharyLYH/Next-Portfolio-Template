import { Experience } from "Render/Experience/RenderExperience";

export interface ExperienceProps {
    exp: Experience;
    total: number;
    idx: number;
}

export default function ExperienceComponent({
    exp,
    total,
    idx,
}: ExperienceProps) {
    var prev = "#";
    var next = "#";
    if (idx == 0) {
        prev += total.toString();
    } else {
        prev += (idx - 1).toString();
    }
    if (idx == total) {
        next += "0";
    } else {
        next += (idx + 1).toString();
    }
    const id = idx.toString();
    return (
        <div>
            <div
                className="flex flex-row gap-8 justify-evenly" /*title, summary, story | skills */
            >
                <div className="flex flex-col " /*title, summary, story*/>
                    <span className="font-bold p-2 text-2xl italic rounded-box bg-base-400">
                        {exp.title}
                    </span>
                    <span className="font-mono">{exp.summary}</span>
                    <div>{exp.story}</div>
                </div>
                <div className="flex flex-col" /*skills */>{exp.skills}</div>
            </div>
            <div className="absolute flex justify-between transform -translate-y-1/2 left-0 right-1 top-1/2">
                <a href={prev} className="btn btn-circle">
                    ❮
                </a>
                <a href={next} className="btn btn-circle">
                    ❯
                </a>
            </div>
        </div>
    );
}

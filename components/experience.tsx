import { Experience } from "Render/Experience/RenderExperience";

export interface ExperienceProps {
    exp: Experience;
}

export default function ExperienceComponent({ exp }: ExperienceProps) {
    return (
        <div
            className="flex flex-row gap-8 justify-evenly" /*title, summary, story | skills */
        >
            <div className="flex flex-col " /*title, summary, story*/>
                <div>{exp.title}</div>
                <div>{exp.summary}</div>
                <div>{exp.story}</div>
            </div>
            <div className="flex flex-col" /*skills */>{exp.skills}</div>
        </div>
    );
}

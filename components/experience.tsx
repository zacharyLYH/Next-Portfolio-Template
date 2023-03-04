import { Experience } from "Render/Experience/RenderExperience";

export interface ExperienceProps {
    exp: Experience[];
}

export default function ExperienceComponent({ exp }: ExperienceProps) {
    return (
        <div className="flex flex-row h-screen items-center justify-center lg:mx-96 md:mx-auto">
            <h1 className="text-2xl font-bold font-serif">Experience</h1>
            <ul className="steps steps-vertical">
                {exp.map((experience) => 
                    <li key={experience.summary} className="step step-primary"> {experience.title}</li>
                )}
            </ul>
        </div>
    );
}

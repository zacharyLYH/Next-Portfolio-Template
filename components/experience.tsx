import { Experience } from "Render/Experience/RenderExperience";

export interface ExperienceProps {
    exp: Experience[];
}

export default function ExperienceComponent({ exp }: ExperienceProps) {
    return (
        <>
        <div className="font-bold text-center">Experience</div>
        <div className="flex flex-wrap items-center justify-center">
            {exp.map((e) => (
                <div className="basis-1/3 flex-none ">
                    <div className=" card shadow-2xl ">
                        <div className="card-body">
                            <h2 className="card-title p-2 font-bold">
                                {e.title}
                            </h2>
                            <p className=" p-2 text-justify ">{e.skills}</p>
                        </div>
                    </div>
                </div>
            ))}
        </div>
        </>
        
    );
}

import { Bio } from "./../Render/Bio/RenderBio";

export interface HeroProps {
    bio: Bio;
}

export default function AboutMeComponent({ bio }: HeroProps) {
    return (
        <div className="flex flex-row h-screen items-center justify-center">
            <div className="basis-2/3 flex-wrap">
                <div className=" card shadow-2xl ">
                    <div className="card-body">
                        <h2 className="card-title p-2 font-bold">About me</h2>
                        <p className=" p-2 text-justify ">{bio.aboutMe}</p>
                    </div>
                </div>
            </div>
            <div className="basis-1/3 flex-wrap">
                <div className=" card shadow-2xl ">
                    <div className="card-body">
                        <h2 className="card-title p-2 font-bold">Hobbies</h2>
                        <ul className="list-disc">
                            {bio.hobbies.map((hobby, index) => (
                                <li className="p-2 text-justify" key={index}>
                                    {hobby}
                                </li>
                            ))}
                        </ul>
                    </div>
                </div>
            </div>
        </div>
    );
}

import { Bio } from "./../Render/Bio/RenderBio";

export interface HeroProps {
    bio: Bio;
}

export default function AboutMeComponent({ bio }: HeroProps) {
    return (
        <div className="flex flex-row h-screen items-center justify-center lg:mx-96 md:mx-auto">
            <div className="basis-2/3 flex-wrap">
                <div className=" card shadow-2xl ">
                    <div className="card-body tooltip" data-tip="Let me tell you who I am!">
                        <h2 className="card-title p-2 font-bold text-xl font-serif">About me</h2>
                        <p className=" p-2 text-justify leading-relaxed">{bio.aboutMe}</p>
                    </div>
                </div>
            </div>
            <div className="basis-1/3 flex-wrap">
                <div className=" card shadow-2xl ">
                    <div className="card-body tooltip" data-tip="Hit me up to chat about these!">
                        <h2 className="card-title p-2 font-bold text-xl font-serif">Hobbies</h2>
                        <ul className="list-disc">
                            {bio.hobbies.map((hobby, index) => (
                                <li className="p-2 text-justify leading-relaxed" key={index}>
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
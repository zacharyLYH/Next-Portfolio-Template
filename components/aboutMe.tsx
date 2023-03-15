import BeautifyParagraph from "utilities/splitLines";
import { Bio } from "./../Render/Bio/RenderBio";

export interface HeroProps {
    bio: Bio;
}

export default function AboutMeComponent({ bio }: HeroProps) {
    return (
        <div className="flex flex-row items-center justify-center lg:mx-96 md:mx-auto sm:mx-auto h-full mb-56 mt-16">
            <div className="basis-2/3 flex-wrap">
                <div className=" card shadow-2xl ">
                    <div
                        className="card-body tooltip"
                        data-tip="Let me tell you who I am!"
                    >
                        <h2 className="card-title p-2 font-bold text-xl font-serif">
                            About me
                        </h2>
                        <div className=" p-2 text-justify leading-relaxed">
                            {BeautifyParagraph(bio.type!, bio.aboutMe!)}
                        </div>
                    </div>
                </div>
            </div>
            <div className="basis-1/3 flex-wrap">
                <div className=" card shadow-2xl ">
                    <div
                        className="card-body tooltip"
                        data-tip="Hit me up to chat about these!"
                    >
                        <h2 className="card-title p-2 font-bold text-xl font-serif">
                            More fun facts
                        </h2>
                        <ul className="list-disc">
                            {bio.hobbies?.map((hobby, index) => (
                                <li
                                    className="p-2 text-justify leading-relaxed"
                                    key={index}
                                >
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

import Image from "next/image";
import { Bio } from "./../Render/Bio/RenderBio";

export interface HeroProps {
    bio: Bio;
}

export default function HeroComponent({ bio }: HeroProps) {
    return (
        <div className="hero min-h-screen bg-base-200">
            <div className="hero-content flex-col lg:flex-row">
                <Image
                    src={bio.image!}
                    className="max-w-sm rounded-lg shadow-2xl"
                    alt={bio.name!}
                    width={500}
                    height={500}
                    priority={true}
                />
                <div>
                    <p className="text-xl p-2">Hi, my name is</p>
                    <div className="indicator">
                        <span className="indicator-item badge badge-success"></span>
                        <h1 className="text-8xl font-bold p-2">{bio.name}</h1>
                    </div>
                    <p className="text-3xl p-2 italic">{bio.title}</p>
                    <p className="py-6 text-xl p-2">{bio.tldr}</p>
                    {bio.docs?.resume && (
                        <a
                            href={bio.docs.resume}
                            target="_blank"
                            rel="noopener noreferrer"
                        >
                            <button className="btn btn-primary mr-2">
                                Resume
                            </button>
                        </a>
                    )}
                    {bio.docs?.transcript && (
                        <a
                            href={bio.docs.transcript}
                            target="_blank"
                            rel="noopener noreferrer"
                        >
                            <button className="btn btn-primary mr-2">
                                Transcript
                            </button>
                        </a>
                    )}
                    <div className="badge badge-accent badge-md badge-outline ml-4">
                        {bio.jobStatus}
                    </div>
                </div>
            </div>
        </div>
    );
}

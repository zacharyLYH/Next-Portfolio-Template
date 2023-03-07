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
                    src={bio.image}
                    className="max-w-sm rounded-lg shadow-2xl"
                    alt={bio.name}
                    width={500}
                    height={500}
                    priority={true}
                />
                <div>
                    <span className="text-xl p-2">Hi, my name is</span>
                    <h1 className="text-7xl font-bold p-2">{bio.name}</h1>
                    <span className="text-2xl p-2 italic">{bio.title}</span>
                    <p className="py-6 text-xl p-2">{bio.tldr}</p>
                    <a
                        href="/resume.pdf"
                        target="_blank"
                        rel="noopener noreferrer"
                    >
                        <button className="btn btn-primary">Resume</button>
                    </a>
                </div>
            </div>
        </div>
    );
}

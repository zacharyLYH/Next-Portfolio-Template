import Head from "next/head";
import { useState } from "react";
import Theme from "components/theme";
import { Render } from "Render/Renderfile";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faGithub, IconDefinition } from "@fortawesome/free-brands-svg-icons";
import { ConvertBio, Bio } from "./../../Render/Bio/RenderBio";
import {
    ConvertExp,
    Experience,
} from "./../../Render/Experience/RenderExperience";
import HeroComponent from "components/hero";
import AboutMeComponent from "components/aboutMe";
import ExperienceComponent from "components/experience";

export default function Home() {
    const [bio, setBio] = useState<Bio | null>(null);
    const [exps, setExp] = useState<Experience[]>([]);
    const [skills, setSkills] = useState<String[]>([]);
    const readRenderfile = () => {
        for (const docs of Render) {
            if (docs.type === "Bio") {
                setBio(ConvertBio.toBio(JSON.stringify(docs)));
            }
            if (docs.type === "Experience") {
                setExp((prevExp) => [
                    ...prevExp,
                    ConvertExp.toExperience(JSON.stringify(docs)),
                ]);
                for (const skill of docs.skills!) {
                    if (!skills.includes(skill)) {
                        setSkills((allSkills) => [...allSkills, skill]);
                    }
                }
            }
        }
    };
    const map = new Map<string, IconDefinition>([["github", faGithub]]);
    const unpackLinks = (link: string) => {
        var i = 0;
        for (const entries of Array.from(map)) {
            if (link.includes(entries[0])) {
                return (
                    <a href={link} key={i}>
                        <FontAwesomeIcon
                            icon={entries[1]}
                            className="p-2 fa-2x"
                        />
                    </a>
                );
            }
            i++;
        }
    };
    if (bio === null) {
        readRenderfile();
    }
    const title = `${bio!?.name + "'s Portfolio"}`;
    return (
        <>
            <Head>
                <title>{title}</title>
                <meta name={title} content={title} />
                <meta
                    name="viewport"
                    content="width=device-width, initial-scale=1"
                />
                <link rel="icon" href="/favicon.ico" />
            </Head>
            <div className="grid grid-cols-8">
                <div className="col-start-2 col-end-8">
                    <Theme />
                    <section>
                        <HeroComponent bio={bio!} />
                    </section>
                    <section>
                        <AboutMeComponent bio={bio!} />
                    </section>
                    <section>
                        <ExperienceComponent exp={exps!} />
                    </section>
                </div>
            </div>
        </>
    );
}

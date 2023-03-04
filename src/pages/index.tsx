import Head from "next/head";
import { useState } from "react";
import Theme from "components/theme";
import { Render } from "Render/Renderfile";
import { ConvertBio, Bio } from "./../../Render/Bio/RenderBio";
import {
    ConvertExperience,
    Experience,
} from "./../../Render/Experience/RenderExperience";
import { ConvertProjects, Projects } from "Render/Project/RenderProject";
import HeroComponent from "components/hero";
import AboutMeComponent from "components/aboutMe";
import ProjectComponent from "components/project";
import ExperienceComponent from "components/experience";

export default function Home() {
    const [bio, setBio] = useState<Bio | null>(null);
    const [exps, setExp] = useState<Experience[]>([]);
    const [skills, setSkills] = useState<String[]>([]);
    const [project, setProject] = useState<Projects[]>([]);
    const readRenderfile = () => {
        for (const docs of Render) {
            if (docs.type === "Bio") {
                setBio(ConvertBio.toBio(JSON.stringify(docs)));
            }
            if (docs.type === "Experience") {
                setExp((prevExp) => [
                    ...prevExp,
                    ConvertExperience.toExperience(JSON.stringify(docs)),
                ]);
                for (const skill of docs.skills!) {
                    if (!skills.includes(skill)) {
                        setSkills((allSkills) => [...allSkills, skill]);
                    }
                }
            }
            if (docs.type === "Project") {
                setProject((prevProj) => [
                    ...prevProj,
                    ConvertProjects.toProjects(JSON.stringify(docs)),
                ]);
            }
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
            <Theme />
            <section>
                <HeroComponent bio={bio!} />
            </section>
            <section>
                <AboutMeComponent bio={bio!} />
            </section>
            <section>
                <ExperienceComponent exp={exps!}/>
            </section>
            <section>
                <ProjectComponent proj={project!} />
            </section>
        </>
    );
}

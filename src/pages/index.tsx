import Head from "next/head";
import { useState } from "react";
import { Render } from "Render/Renderfile";
import { ConvertBio, Bio } from "./../../Render/Bio/RenderBio";
import {
    ConvertExperience,
    Experience,
} from "./../../Render/Experience/RenderExperience";
import { ConvertProjects, Projects } from "Render/Project/RenderProject";
import { ConvertFooter, Footer } from "Render/Footer/RenderFooter";
import {
    Commendation,
    ConvertCommendation,
} from "Render/Commendation/RenderCommendation";
import { Stats, ConvertStats } from "Render/Stats/StatsCommendation";
import HeroComponent from "components/hero";
import AboutMeComponent from "components/aboutMe";
import ProjectComponent from "components/project";
import ExperienceComponent from "components/experience";
import FooterComponent from "components/footer";
import SideBarComponent from "components/sidebar";
import CommendationComponent from "components/commendation";
import StatsComponent from "components/stats";

export default function Home() {
    const [bio, setBio] = useState<Bio | null>(null);
    const [exps, setExp] = useState<Experience[]>([]);
    const [skills, setSkills] = useState<string[]>([]);
    const [project, setProject] = useState<Projects[]>([]);
    const [footer, setFooter] = useState<Footer | null>(null);
    const [commendations, setCommendations] = useState<Commendation[]>([]);
    const [stats, setStats] = useState<Stats[]>([]);
    const skillSet = new Set<string>([]);
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
            }
            if (docs.type === "Project") {
                setProject((prevProj) => [
                    ...prevProj,
                    ConvertProjects.toProjects(JSON.stringify(docs)),
                ]);
                if (docs.skills != null) {
                    for (const skill of docs.skills!) {
                        skillSet.add(skill);
                    }
                }
            }
            if (docs.type === "Commendation") {
                setCommendations((prevComm) => [
                    ...prevComm,
                    ConvertCommendation.toCommendation(JSON.stringify(docs)),
                ]);
            }
            if (docs.type === "Footer") {
                setFooter(ConvertFooter.toFooter(JSON.stringify(docs)));
            }
            if (docs.type === "Stats") {
                setStats((prevStats) => [
                    ...prevStats,
                    ConvertStats.toStats(JSON.stringify(docs)),
                ]);
            }
        }
    };
    if (bio === null) {
        readRenderfile();
        setSkills(Array.from(skillSet));
    }
    const title = `${bio!?.name + "'s Portfolio"}`;
    return (
        <>
            <Head>
                <title>{title}</title>
                <meta name="description" content={title} />
                <meta
                    name="viewport"
                    content="width=device-width, initial-scale=1"
                />
                <meta
                    name="keywords"
                    content={bio?.name + ", Portfolio"}
                ></meta>
                <meta name="author" content={bio?.name}></meta>
                <link rel="icon" type="image/png" href="/titleicon.png" />
            </Head>
            <section>
                <HeroComponent bio={bio!} />
            </section>
            <section>
                <SideBarComponent links={bio!} />
            </section>
            {stats.length > 0 && (
                <section>
                    <StatsComponent stats={stats!} />
                </section>
            )}
            <section>
                <AboutMeComponent bio={bio!} />
            </section>
            <section>
                <ExperienceComponent exp={exps!} />
            </section>
            <section>
                <ProjectComponent proj={project!} skills={skills} />
            </section>
            <section>
                <CommendationComponent comm={commendations} />
            </section>
            <section>
                <FooterComponent foot={footer!} />
            </section>
        </>
    );
}

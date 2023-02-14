import Head from "next/head";
import Summary from "components/summary";
import { useState } from "react";
import Theme from "components/theme";
import { Render } from "Render/Renderfile";
import { ConvertBio, Bio } from "./../../Render/Bio/RenderBio";
import {
    ConvertExp,
    Experience,
} from "./../../Render/Experience/RenderExperience";
import ExperienceComponent from "components/experience";

export default function Home() {
    const [openTab, setOpenTab] = useState(1);
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
    if (bio === null) {
        readRenderfile();
    }
    const [tabContent, setTabContent] = useState(bio?.standOut);
    const handleClickedTab = (clicked: number) => {
        setOpenTab(clicked);
        if (clicked == 0) {
            setTabContent(bio?.aboutMe);
        }
        if (clicked == 1) {
            setTabContent(bio?.standOut);
        }
        if (clicked == 2) {
            setTabContent(bio?.weakness);
        }
    };
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
            <div className="flex justify-end" /*Toggle on the right*/>
                <Theme />
            </div>
            <div className="flex justify-center p-2">
                <Summary
                    bio={bio!}
                    switchTags={handleClickedTab}
                    activeTab={openTab}
                    tabContent={tabContent}
                />
            </div>
            <div className="flex font-bold justify-center">Experiences</div>
            <div className="flex justify-center p-2">
                <div className="w-1/2 bg-base-300 shadow-2xl rounded-box justify-center">
                    {exps.map((exp) => (
                        <ExperienceComponent key={exp.summary}exp={exp} />
                    ))}
                </div>
            </div>
        </>
    );
}

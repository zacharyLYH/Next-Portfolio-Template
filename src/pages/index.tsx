import Head from "next/head";
import Summary from "components/summary";
import { useState } from "react";
import Theme from "components/theme";
import { Render } from "Render/Renderfile";
import { Convert, Bio } from "./../../Render/Bio/RenderBio";

export default function Home() {
    const [openTab, setOpenTab] = useState(1);
    const [bio, setBio] = useState<Bio | null>(null);
    const readRenderfile = () => {
        for (const docs of Render) {
            if (docs.type === "Bio") {
                setBio(Convert.toBio(JSON.stringify(docs)));
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
            <section className="flex justify-center" /*Summary in grid 2-6*/>
                <Summary
                    image={bio?.image}
                    name={bio?.name}
                    title={bio?.title}
                    portfolioPurpose={bio?.portfolioPurpose}
                    socialLinks={bio?.socialLinks}
                    tldr={bio?.tldr}
                    switchTags={handleClickedTab}
                    activeTab={openTab}
                    tabContent={tabContent}
                />
            </section>
            <div className="divider"></div>
        </>
    );
}

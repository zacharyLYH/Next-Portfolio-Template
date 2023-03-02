import Image from "next/image";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faGithub, IconDefinition } from "@fortawesome/free-brands-svg-icons";
import { Bio } from "./../Render/Bio/RenderBio";

export interface SummaryProps {
    bio: Bio;
    switchTags: (clicked: number) => void;
    activeTab?: number;
    tabContent?: string;
}

const map = new Map<string, IconDefinition>([["github.com", faGithub]]);

const unpackLinks = (link: string) => {
    var i = 0;
    for (const entries of Array.from(map)) {
        if (link.includes(entries[0])) {
            return (
                <a href={link} key={i}>
                    <FontAwesomeIcon icon={entries[1]} className="p-2 fa-2x" />
                </a>
            );
        }
        i++;
    }
};

export default function Summary({
    bio,
    switchTags,
    activeTab,
    tabContent,
}: SummaryProps) {
    return (
        <div className="w-1/2 bg-base-300 shadow-2xl rounded-box justify-center">
            <div className="flex flex-col" /*All Summary items */>
                <div
                    className="flex flex-row gap-8 justify-center" /*Highlights*/
                >
                    <div className="flex flex-col" /*Image and links */>
                        <div className="rounded w-36 h-48" /*Image*/>
                            <Image
                                src={bio.image}
                                alt={bio.name}
                                width={250}
                                height={500}
                                className="pr-4"
                                priority={true}
                            />
                        </div>
                        <div className="gap-16" /*Link*/>
                            {bio.socialLinks!.map((link) => unpackLinks(link))}
                        </div>
                    </div>
                    <div
                        className="flex flex-col font-serif p-2" /*String details */
                    >
                        <span className="font-bold text-5xl p-2">
                            {bio.name}
                        </span>
                        <span className="italic p-2">{bio.title}</span>
                        <span className="p-2">{bio.portfolioPurpose}</span>
                    </div>
                </div>
                <span className="font-serif justify-center text-center p-4">
                    {bio.tldr}
                </span>
                <div
                    className="tabs bg-base-300 tabs-boxed justify-center" /*Tabs */
                >
                    <a
                        className={activeTab === 0 ? "tab tab-active" : "tab"}
                        onClick={() => switchTags(0)}
                    >
                        More about me
                    </a>
                    <a
                        className={activeTab === 1 ? "tab tab-active" : "tab"}
                        onClick={() => switchTags(1)}
                    >
                        Strengths
                    </a>
                    <a
                        className={activeTab === 2 ? "tab tab-active" : "tab"}
                        onClick={() => switchTags(2)}
                    >
                        Things I can improve on
                    </a>
                </div>
                <p className="p-8">{tabContent}</p>
            </div>
        </div>
    );
}

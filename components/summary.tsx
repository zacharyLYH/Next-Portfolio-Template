import Image from "next/image";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faGithub, IconDefinition } from "@fortawesome/free-brands-svg-icons";

export interface SummaryProps {
    image?: string;
    name?: string;
    title?: string;
    portfolioPurpose?: string;
    socialLinks?: string[];
    tldr?: string;
    switchTags: (clicked: number) => void;
    activeTab?: number;
    tabContent?: string;
}

const map = new Map<string, IconDefinition>([["github", faGithub]]);

const unpackLinks = (link: string) => {
    var i = 0;
    for (const entries of Array.from(map)) {
        if (link.includes(entries[0])) {
            return (
                <a href={link}>
                    <FontAwesomeIcon icon={entries[1]} className="p-2 fa-2x" />
                </a>
            );
        }
        i++;
    }
};

export default function Summary({
    image,
    name,
    title,
    portfolioPurpose,
    socialLinks,
    tldr,
    switchTags,
    activeTab,
    tabContent,
}: SummaryProps) {
    return (
        <div className="card-normal bg-base-100 shadow-2xl w-1/2 justify-center hover:bg-gradient-to-r">
            <div className="flex flex-col" /*To help stack summary items */>
                <div
                    className="flex flex-row gap-8 justify-center" /*Highlights*/
                >
                    <div className="flex flex-col" /*Image and links */>
                        <div className="rounded w-36 h-48" /*Image*/>
                            <Image
                                src={image!}
                                alt={name!}
                                width={250}
                                height={500}
                            />
                        </div>
                        <div className="gap-16" /*Link*/>
                            {socialLinks!.map((link) => unpackLinks(link))}
                        </div>
                    </div>
                    <div
                        className="flex flex-col font-serif" /*String details */
                    >
                        <span className="font-bold text-2xl">{name}</span>
                        <span className="italic">{title}</span>
                        <span>{portfolioPurpose}</span>
                    </div>
                </div>
                <span className="font-serif justify-center text-center">
                    {tldr}
                </span>
                <div className="tabs tabs-boxed justify-center" /*Tabs */>
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
                <p className="flex">{tabContent}</p>
            </div>
        </div>
    );
}

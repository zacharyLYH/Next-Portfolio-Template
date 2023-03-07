import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
    faGithub,
    faGolang,
    faLinkedin,
    faNodeJs,
    faPython,
    faReact,
    IconDefinition,
} from "@fortawesome/free-brands-svg-icons";
import { faEnvelope } from "@fortawesome/free-solid-svg-icons";

const map = new Map<string, IconDefinition>([
    ["github", faGithub],
    ["golang", faGolang],
    ["nodejs", faNodeJs],
    ["linkedin", faLinkedin],
    ["gmail", faEnvelope],
    ["react", faReact],
    ["python", faPython],
]);

export default function unpackIcons(link: string) {
    var i = 0;
    for (const entries of Array.from(map)) {
        if (link.includes(entries[0])) {
            return (
                <>
                    {entries[0] === "gmail" ? (
                        <a href={`mailto:${link}`} key={entries[0]}>
                            <FontAwesomeIcon
                                icon={entries[1]}
                                className="p-2 fa-2x"
                            />
                        </a>
                    ) : (
                        <a href={link} key={entries[0]}>
                            <FontAwesomeIcon
                                icon={entries[1]}
                                className="p-2 fa-2x"
                            />
                        </a>
                    )}
                </>
            );
        }
        i++;
    }
}

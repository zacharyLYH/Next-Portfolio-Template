import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
    faGithub,
    faGolang,
    faNodeJs,
    IconDefinition,
} from "@fortawesome/free-brands-svg-icons";

const map = new Map<string, IconDefinition>([
    ["github", faGithub],
    ["golang", faGolang],
    ["nodejs", faNodeJs],
]);

export default function unpackIcons(link: string) {
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
}
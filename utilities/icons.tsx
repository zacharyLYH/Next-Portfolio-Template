import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { Icons } from "./iconsList";

export default function unpackIcons(link: string) {
    var i = 0;
    for (const entries of Array.from(Icons)) {
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

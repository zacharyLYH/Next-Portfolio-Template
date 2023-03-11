import Image from "next/image";
import { IconsList } from "./iconsList";

export default function unpackIcons(link: string) {
    return (
        <>
            {link.includes("gmail") ? (
                <a href={`mailto:${link}`} key={link} className="p-1">
                    {RetIcon("gmail")}
                </a>
            ) : link.includes(".com") ? (
                <a href={link} key={link} className="p-1">
                    {RetIcon(LinkToIcon(link))}
                </a>
            ) : (
                <span className="p-1 tooltip" data-tip={link}>
                    {RetIcon(LinkToIcon(link))}
                </span>
            )}
        </>
    );
}

function LinkToIcon(link: string) {
    for (const icons of IconsList) {
        if (link.includes(icons)) {
            return icons;
        }
    }
    return "notFound";
}

function RetIcon(icon: string) {
    return (
        <Image
            priority
            src={`/icons/${icon}.svg`}
            height={40}
            width={40}
            alt={icon}
        />
    );
}

import { Bio } from "Render/Bio/RenderBio";
import unpackIcons from "utilities/icons";
import Theme from "./theme";

interface SideBarProps {
    links: Bio;
}

export default function SideBarComponent({ links }: SideBarProps) {
    return (
        <div className="toast toast-start toast-middle mx-10 ">
            <div className="bg-slate-200 rounded-xl ring-offset-2 ring-4">
                <Theme />
                {links.socialLinks?.map((link) => (
                    <div>{unpackIcons(link)}</div>
                ))}
            </div>
        </div>
    );
}

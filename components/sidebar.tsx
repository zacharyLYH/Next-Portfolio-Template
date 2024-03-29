import { Bio } from "Render/Bio/RenderBio";
import unpackIcons from "utilities/icons";
import Theme from "./theme";

interface SideBarProps {
    links: Bio;
}

export default function SideBarComponent({ links }: SideBarProps) {
    return (
        <div className="invisible visible xl:visible 2xl:visible toast toast-start toast-middle mx-10 ">
            <div
                className="bg-slate-200 rounded-xl ring-offset-2 ring-4 tooltip tooltip-right"
                data-tip="Let's connect!"
            >
                <Theme />
                {links.socialLinks?.map((link) => (
                    <div key={link} className="py-2">
                        {unpackIcons(link)}
                    </div>
                ))}
            </div>
        </div>
    );
}

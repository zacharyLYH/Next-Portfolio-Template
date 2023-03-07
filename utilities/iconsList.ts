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

export const Icons = new Map<string, IconDefinition>([
    ["github", faGithub],
    ["golang", faGolang],
    ["nodejs", faNodeJs],
    ["linkedin", faLinkedin],
    ["gmail", faEnvelope],
    ["react", faReact],
    ["python", faPython],
]);

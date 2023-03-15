export default function BeautifyParagraph(type: string, paragraph: string) {
    var splitted: string[] = paragraph.split(".");
    if (type === "Experience") {
        for (var i = 0; i < splitted.length - 1; i++) {
            splitted[i] = "🟡" + splitted[i];
        }
    } else if (type === "Bio") {
        for (var i = 0; i < splitted.length - 1; i++) {
            splitted[i] = "🔵" + splitted[i];
        }
    } else if (type === "Project") {
        for (var i = 0; i < splitted.length - 1; i++) {
            splitted[i] = "🟣" + splitted[i];
        }
    }
    return (
        <div>
            {splitted.map((split) => (
                <p className="text-left" id={split}>
                    <br />
                    {split}
                    <br />
                </p>
            ))}
        </div>
    );
}

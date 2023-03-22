import { Commendation } from "Render/Commendation/RenderCommendation";
import Image from "next/image";

export interface CommendationProps {
    comm: Commendation[];
}

export default function CommendationComponent({ comm }: CommendationProps) {
    const getSlideNum = (idx: number, type: string) => {
        if (type === "next") {
            if (idx === comm.length - 1) {
                return 0;
            } else {
                return idx + 1;
            }
        } else {
            if (idx === 0) {
                return comm.length - 1;
            } else {
                return idx - 1;
            }
        }
    };
    return (
        <div className="flex flex-col items-center h-full">
            <span className="font-bold text-center text-5xl font-serif mt-40 mb-20">
                🎉 Commendation 🎉
            </span>
            {comm.map((com, idx) => (
                <div className="carousel" key={com.compliment}>
                    <div
                        id={"slide" + idx.toString()}
                        className="carousel-item relative"
                    >
                        <div className="card lg:card-side shadow-xl">
                            <figure>
                                {com.image ? (
                                    <Image
                                        src={com.image}
                                        alt={com.name!}
                                        height={500}
                                        width={500}
                                        priority
                                    />
                                ) : (
                                    <Image
                                        src="/userPlaceholder.png"
                                        alt="Placeholder"
                                        height={500}
                                        width={500}
                                        priority
                                    />
                                )}
                            </figure>
                            <div className="card-body">
                                <h2 className="card-title text-2xl font-bold">
                                    {com.name}
                                </h2>
                                <span className="text-lg italic">
                                    {com.credentials}
                                </span>
                                <a href={com.link} className="p-1">
                                    <Image
                                        priority
                                        src="/icons/link.svg"
                                        height={40}
                                        width={40}
                                        alt={com.link!}
                                    />
                                </a>
                                <p></p>
                                <div className="card-actions justify-end">
                                    <label
                                        htmlFor={`comm-modal-${com.compliment}`}
                                        className="btn btn-primary"
                                    >
                                        Compliment
                                    </label>
                                    <input
                                        type="checkbox"
                                        id={`comm-modal-${com.compliment}`}
                                        className="modal-toggle"
                                    />
                                    <label
                                        htmlFor={`comm-modal-${com.compliment}`}
                                        className="modal cursor-pointer"
                                    >
                                        <label
                                            className="modal-box relative"
                                            htmlFor=""
                                        >
                                            <p className="py-4">
                                                {com.compliment}
                                            </p>
                                        </label>
                                    </label>
                                </div>
                            </div>
                        </div>
                        <div className="absolute flex justify-between transform left-1 right-1 top-1/2">
                            <a
                                href={
                                    "#slide" +
                                    getSlideNum(idx, "prev").toString()
                                }
                                className="btn btn-circle"
                            >
                                ❮
                            </a>
                            <a
                                href={
                                    "#slide" +
                                    getSlideNum(idx, "next").toString()
                                }
                                className="btn btn-circle"
                            >
                                ❯
                            </a>
                        </div>
                    </div>
                </div>
            ))}
        </div>
    );
}

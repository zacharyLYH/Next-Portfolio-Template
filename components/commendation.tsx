import { Commendation } from "Render/Commendation/RenderCommendation";
import Image from "next/image";
import { useEffect, useState } from "react";

export interface CommendationProps {
    comm: Commendation[];
}

export default function CommendationComponent({ comm }: CommendationProps) {
    const [slide, setSlide] = useState(comm[0]);
    const [slideNum, setSlideNum] = useState(0);
    const getSlideNum = (idx: number, type: string) => {
        if (type === "next") {
            if (idx === comm.length - 1) {
                setSlideNum(0);
            } else {
                setSlideNum(idx + 1);
            }
        } else {
            if (idx === 0) {
                setSlideNum(comm.length - 1);
            } else {
                setSlideNum(idx - 1);
            }
        }
    };
    useEffect(() => {
        setSlide(comm[slideNum]);
    }, [slideNum]);
    return (
        <div className="flex flex-col items-center h-full">
            <span className="font-bold text-center text-5xl font-serif mt-40 mb-20">
                🎉 Commendation 🎉
            </span>
            <div className="card lg:card-side shadow-xl w-4/5">
                <figure style={{ maxWidth: "500px", maxHeight: "500px" }}>
                    {slide.image ? (
                        <Image
                            src={slide.image}
                            alt={slide.name!}
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
                        {slide.name}
                    </h2>
                    <span className="text-lg italic">{slide.credentials}</span>
                    <a href={slide.link}>
                        <Image
                            src="/icons/link.svg"
                            height={40}
                            width={40}
                            alt={slide.link!}
                        />
                    </a>
                    <p></p>
                    <div className="card-actions justify-end">
                        <label
                            htmlFor={`comm-modal-${slide.compliment}`}
                            className="btn btn-primary"
                        >
                            Compliment
                        </label>
                        <input
                            type="checkbox"
                            id={`comm-modal-${slide.compliment}`}
                            className="modal-toggle"
                        />
                        <label
                            htmlFor={`comm-modal-${slide.compliment}`}
                            className="modal cursor-pointer"
                        >
                            <label className="modal-box relative" htmlFor="">
                                <p className="py-4">{slide.compliment}</p>
                            </label>
                        </label>
                    </div>
                </div>
                {comm.length > 0 && (
                    <div className="absolute flex justify-between transform left-1 right-1 top-1/2">
                        <a
                            onClick={() => getSlideNum(slideNum, "prev")}
                            className="btn btn-circle hover:btn-primary hover:btn-lg"
                        >
                            ❮
                        </a>
                        <a
                            onClick={() => getSlideNum(slideNum, "next")}
                            className="btn btn-circle hover:btn-primary hover:btn-lg"
                        >
                            ❯
                        </a>
                    </div>
                )}
            </div>
        </div>
    );
}

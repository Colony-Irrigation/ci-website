// 'use client';

import Image from "next/image";
import { ComponentProps, useEffect, useRef, useState } from "react";


export default function FadingCarousel({
    imgs,
    displayTime,
    ...props
}: {
    imgs: string[];
    displayTime: number;
} & ComponentProps<"div">) {
    const [index, setIndex] = useState(0);

    useEffect(() => {
        const id = setInterval(() => {
            setIndex((prevIndex) => (prevIndex + 1) % imgs.length);
        }, displayTime);

        return () => clearInterval(id);
    }, [displayTime, imgs.length]);

    return (
        <div {...props} className={`relative w-full h-full overflow-hidden`}>
            {imgs.map((imgSrc, i) => (
                <Image
                    key={i}
                    src={imgSrc}
                    alt={`Carousel Image ${i}`}
                    fill
                    className={`absolute inset-0 object-cover transition-opacity duration-1000 ${i === index ? "opacity-100" : "opacity-0"
                        }`}
                />
            ))}
        </div>
    );
}
'use client';

import Image from "next/image";
import { ComponentProps, useEffect, useRef, useState } from "react";


export default function FadingCarousel({
    imgs,
    displayTime,
    center,
    ...props
}: {
    center?: boolean;
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
            {imgs.map((imgSrc, i) => (<>
                {center && <Image
                    key={i*2}
                    src={imgSrc}
                    alt={`Carousel Image ${i}`}
                    fill
                    className={`rounded-lg absolute inset-0 blur-lg object-cover transition-opacity duration-1000 ${i === index ? "opacity-100" : "opacity-0"
                        }`}
                />}                
                <Image
                key={i*2+1}
                src={imgSrc}
                alt={`Carousel Image ${i}`}
                fill
                className={`rounded-lg absolute inset-0 ${center ? "object-contain" : "object-cover"} transition-opacity duration-1000 ${i === index ? "opacity-100" : "opacity-0"
                    }`}
                    />
            </>))}
        </div>
    );
}
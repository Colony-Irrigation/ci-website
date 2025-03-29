"use client";
import { ReactNode, useEffect, useState } from "react";

function ChildContainer({index, currentIndex}: {index: number, currentIndex: number}) {
    return <div className={`duration-1000 transition-all opacity-0 ${currentIndex == index && "opacity-100"} `}></div>
}

export default function SlidingCarousel({children}: {children: ReactNode[], displayTime: number}) {
    const [currentIndex, setIndex] = useState(0);
    useEffect(() => {
        const id = setInterval(() => {
            setIndex((i) => (i + 1) % children.length)
        }, 5000);

        return () => clearInterval(id);
    }, [children]);

    return <div className=" overflow-x-hidden relative min-h-48">
        {children.map((child, i) => <div key={i} className={`
                transition-all duration-1000 w-3/4 absolute top-1/2 left-1/2 -translate-y-1/2 inline-block shrink-0 opacity-0 ease-in-out
            ${i == currentIndex && "opacity-100 -translate-x-1/2"}
            ${i !== currentIndex && i !== currentIndex -1 && i !== currentIndex + children.length - 1 && "translate-x-[150%]"}
            ${(i == currentIndex - 1 || i == currentIndex + children.length - 1 )&& "-translate-x-[150%]"}
            `}>
                {child}
        </div>)}
    </div>
}
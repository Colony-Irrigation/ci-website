"use client";

import { useSearchParams } from "next/navigation";
import { quoteCategory, QuoteCategoryContext, validateQuoteCategory } from "./kinds";
import FadingCarousel from "../FadingCarousel";
import { use } from "react";

const categoryToText: Record<quoteCategory, string> = {
    landscaping: "Landscaping",
    lawncare: "Lawncare",
    masonry: "Outdoor Masonry",
    other: "Outdoor Service",
    sprinkler: "Irrigation Service"
};

const categoryToImgs: Record<quoteCategory, string[]> = {
    other: ["Beach.webp"],
    lawncare: [
        "Lawncare.avif", 
        "Leaf-Blower.jpg",
        "Landscape-1.jpg"
    ],
    masonry: [
        "Clean-Stones.JPEG",
        "Path+Step.JPEG",
        "Pathway.JPEG",
        "Patio-1.webp",
        "Patio-2.JPEG",
        "Patio-3.jpg",
        "Stone Staircase.webp" 
    ],
    landscaping: [
        "Landscape-1.jpg", 
        "Landscape-2.jpg",
        "Landscape-3.JPEG",
        "Landscape-4.JPEG",
        "Landscape-5.JPEG",
    ],
    sprinkler: [
        "Sprinkler-1.webp",
        "Sprinkler-2.jpg",
        "Sprinkler-Box.jpg",
    ]
};


// Used images (randomized a bit)
// categoryToImgs.lawncare[0],
// categoryToImgs.masonry[1],
// categoryToImgs.masonry[3],
// categoryToImgs.masonry[4],
// categoryToImgs.masonry[5],
// categoryToImgs.landscaping[0],
// categoryToImgs.landscaping[2],
// categoryToImgs.landscaping[4],
// categoryToImgs.sprinkler[0],
// categoryToImgs.sprinkler[1]

categoryToImgs.other.push(
    categoryToImgs.sprinkler[0],
    categoryToImgs.masonry[1],
    categoryToImgs.sprinkler[1],
    categoryToImgs.masonry[3],
    categoryToImgs.landscaping[4],
    categoryToImgs.masonry[4],
    categoryToImgs.lawncare[0],
    categoryToImgs.masonry[5],
    categoryToImgs.landscaping[0],
    categoryToImgs.landscaping[2],
);


export default function QuoteHero() {
    // const searchParams = useSearchParams();
    const [quoteCategory] = use(QuoteCategoryContext)
    const text = categoryToText[quoteCategory];

    return <div>
        <div className="h-86 relative lg:h-140">
            <div className="absolute inset-0 -z-1 brightness-40 bg-black">
                <FadingCarousel displayTime={5000} imgs={categoryToImgs[quoteCategory].map(s => `/imgs/${s}`)} />
            </div>
            <div className="font-sans text-4xl lg:text-6xl text-center text-white font-bold h-full items-center flex flex-col justify-center">
                Request {text.startsWith("O") || text.startsWith("I") ? "An" : "A"} 
                 <span className="text-5xl lg:text-8xl font-extrabold my-2 lg:my-6 italic"> {text} </span> 
                Quote Today
            </div>
        </div>
    </div>
}
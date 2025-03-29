"use client";

import { useSearchParams } from "next/navigation";
import { quoteCategory, validateQuoteCategory } from "./kinds";
import FadingCarousel from "../FadingCarousel";

const categoryToText: Record<quoteCategory, string> = {
    landscaping: "Landscaping",
    lawncare: "Lawncare",
    masonry: "Outdoor Masonry",
    other: "Outdoor Service",
    sprinkler: "Irrigation Service"
};

const categoryToImgs: Record<quoteCategory, string[]> = {
    other: ["Lawncare.avif", "Patio with firepit.webp", "Patio with grill & wine.jpg", "Stone Staircase.webp", "Landscape-1.jpg", "Landscape 2.jpg", "Sprinklers.webp"],
    lawncare: ["Lawncare.avif"],
    masonry: ["Patio with firepit.webp", "Patio with grill & wine.jpg", "Stone Staircase.webp"],
    landscaping: ["Landscape-1.jpg", "Landscape 2.jpg"],
    sprinkler: ["Sprinklers.webp", "Lawncare.avif"]
}

export default function QuoteHero() {
    const searchParams = useSearchParams();
    const quoteCategory: quoteCategory = validateQuoteCategory(searchParams.get("category") || "");

    const text = categoryToText[quoteCategory];

    return <div>
        <div className="h-86 relative lg:h-140">
            <div className="absolute inset-0 -z-1 brightness-40 bg-black">
                <FadingCarousel displayTime={5000} imgs={categoryToImgs[quoteCategory].map(s => `/imgs/${s}`)} />
            </div>
            <div className="font-sans text-4xl lg:text-6xl text-center text-white font-bold h-full items-center flex flex-col justify-center">
                Request {text.startsWith("O") || text.startsWith("I") ? "An" : "A"} 
                 <span className="text-5xl lg:text-8xl font-extrabold"> {text} </span> 
                Quote Today
            </div>
        </div>
    </div>
}
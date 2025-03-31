import { createContext } from "react";

export type quoteCategory = "sprinkler" | "landscaping" | "masonry" | "lawncare" | "other";

export type sprinklerQuoteKind = "startup" | "repair" | "install" | "winterization";
export type landscapingQuoteKind = "install" | "trimming" | "weeding" | "mulch";
export type masonryQuoteKind = "path" | "patio" | "repair" | "cleaning";
export type quoteKind = `sprinkler-${sprinklerQuoteKind}` | `landscaping-${landscapingQuoteKind}` | `masonry-${masonryQuoteKind}` | "lawncare" | "other"
const QuoteContext = createContext<quoteKind>("other")

export function getQuoteCategory(quoteKind: quoteKind): quoteCategory {
    return quoteKind.split("-")[0] as quoteCategory;
}

export function validateQuoteCategory(category: any): quoteCategory {
    return ["landscaping", "lawncare", "masonry", "other", "sprinkler"].includes(category) ? category as quoteCategory : "other";
}



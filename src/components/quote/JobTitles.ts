import type { landscapingQuoteKind, lawncareQuoteKind, masonryQuoteKind, quoteCategory, quoteKind, sprinklerQuoteKind } from "./kinds"

const landscapingTitles: Record<landscapingQuoteKind, string> = {
    install: "Landscaping Install",
    mulch: "Mulch Resurfacing",
    trimming: "Bush & Hedge Trimming",
    // weeding: "Weeding"
}

const sprinklerTitles: Record<sprinklerQuoteKind, string> = {
    install: "Sprinkler Install/Expansion",
    repair: "Rotor/Pipe Repair",
    startup: "Spring Startup",
    winterization: "Winterization"
}

const lawncareTitles: Record<lawncareQuoteKind, string> = {
    weekly: "Weekly Lawncare Service",
    seasonal: "Seasonal Lawn Cleanup"
}

const masonryTitles: Record<masonryQuoteKind, string> = {
    cleaning: "Stone Cleaning & Restoration",
    path: "Pathway Install",
    patio: "Patio Install",
    repair: "Stone Repair & Re-leveling"
}


const categoriesToTitles: Record<quoteCategory, Record<string, string>> = {
    landscaping: landscapingTitles,
    sprinkler: sprinklerTitles,
    lawncare: lawncareTitles,
    masonry: masonryTitles,
    other: {
        other: "Something else (describe below)",
    }
}

export const jobsToTitles: Record<quoteKind, string> = Object.fromEntries(Object.entries(categoriesToTitles).flatMap(([category, jobs]) => {
    return Object.entries(jobs).map(([name, job]) => [`${category}-${name}`, job])
})) as any;

//@ts-expect-error
jobsToTitles.other = jobsToTitles["other-other"];
//@ts-expect-error
delete jobsToTitles["other-other"]

"use client";

import { ReactNode, use, useCallback, useState } from "react";
import { Required } from "./Form";
import { landscapingQuoteKind, lawncareQuoteKind, masonryQuoteKind, quoteCategory, QuoteCategoryContext, quoteKind, sprinklerQuoteKind, validateQuoteCategory } from "./kinds";
import { usePathname, useRouter, useSearchParams } from "next/navigation";
import JobSelectPopout from "./JobSelectPopout";
import { Drawer } from "vaul";
import { ArrowDownIcon, BarsArrowDownIcon } from "@heroicons/react/24/solid";

const landscapingTitles: Record<landscapingQuoteKind, ReactNode> = {
    install: "Landscaping Install",
    mulch: "Mulch Resurfacing",
    trimming: "Bush & Hedge Trimming",
    weeding: "Weeding"
}

const sprinklerTitles: Record<sprinklerQuoteKind, ReactNode> = {
    install: "Sprinkler Install/Expansion",
    repair: "Rotor/Pipe Repair",
    startup: "Spring Startup",
    winterization: "Winterization"
}

const lawncareTitles: Record<lawncareQuoteKind, ReactNode> = {
    weekly: "Weekly Service",
    seasonal: "Seasonal Cleanup"
}

const masonryTitles: Record<masonryQuoteKind, ReactNode> = {
    cleaning: "Stone Cleaning & Restoration",
    path: "Pathway Install",
    patio: "Patio Install",
    repair: "Stone Repair & Re-leveling"
}


const categoriesToTitles: Record<quoteCategory, Record<string, ReactNode>> = {
    landscaping: landscapingTitles,
    sprinkler: sprinklerTitles,
    lawncare: lawncareTitles,
    masonry: masonryTitles,
    other: {
        other: "Something else (describe below)",
    }
}

export const jobsToTitles: Record<quoteKind, ReactNode> = Object.fromEntries(Object.entries(categoriesToTitles).flatMap(([category, jobs]) => {
    return Object.entries(jobs).map(([name, job]) => [`${category}-${name}`, job])
})) as any;

//@ts-expect-error
jobsToTitles.other = jobsToTitles["other-other"];
//@ts-expect-error
delete jobsToTitles["other-other"]



export default function JobSelect() {    
    const [open, setOpen] = useState(false);
    const [category, setCategory, potentialKind] = use(QuoteCategoryContext)
    const [selected, setSelected] = useState<quoteKind>(potentialKind || "" as any);

    return <div className="my-4">
        <label htmlFor="kind-selection" className="ml-4 mt-4 font-bold">Kind of Job<Required /></label>
        <input type="hidden" value={selected} name="jobKind" id="jobKind"></input>
        <div>
            <div className={`h-10 rounded-t-lg ${!open && "rounded-b-lg"} duration-100 bg-black/10 hover:cursor-pointer z-2 flex items-center px-4 border-b-0 border-neutral-600 ${open && "border-2"}`} onClick={() => setOpen(!open)}>
                <div className="grow">
                {jobsToTitles[selected]  || <span className="text-black/50">Please Choose an Option </span>}

                </div>
                <div className="border-l-1 border-neutral-400 pl-2 text-xl font-bold">
                    <span className={`${open && "-scale-y-100"} duration-150 flex justify-center items-center`}>
                        <BarsArrowDownIcon className="h-6"/>
                    </span>
                </div>
            </div>
            <div className="relative h-0">
                <div className={`h-0 ${open && "h-fit"} rounded-b-lg border-neutral-600 ${open && "border-2"} border-t-0 overflow-hidden shadow-md shadow-neutral-600 bg-white-muted z-1 duration-100 transition-all divide-y-1 divide-neutral-400 `}>
                    {Object.entries(jobsToTitles).map(([jobKind, title], i) => {
                        return jobKind.startsWith(category) && 
                            <div key={i} className={`p-2  hover:bg-black/20 ${selected == jobKind ? "outline-primary -outline-offset-2 outline-2" : ""}`} onClick={() => {
                                setOpen(false);
                                setSelected(jobKind as quoteKind)
                            }}>{title}</div>
                    })}
                    
                        <JobSelectPopout currentSelection={selected} setSelected={(s) => {
                            setSelected(s)
                            setOpen(false)
                        }} setCategory={(c) => {
                            setCategory(c)
                        }} />
                    
                </div>
            </div>
        </div>
        {/* <JobSelectPopout open={dialogOpen} setCategory={setCategory} setOpen={setDialogOpen} setSelected={setSelected} /> */}
    </div>
}